"use server"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { NewPost, NewPostAsParam, getPostsPagination, getUser, insertPost, insertSuggestion } from "./db/methods"
import { boolean } from "drizzle-orm/mysql-core"


export async function getPostsAction  (page:number= 1)  {  
	
    const posts = await getPostsPagination(page)

	return posts
} 



export const isCurrUserAuthor = async (authorId: number): Promise<boolean> => {    
    const {isAuthenticated, getUser: getKindeUser} = await getKindeServerSession()
    
    const isLogged  = await isAuthenticated()
    if(!isLogged) return false
    
    const user = await getKindeUser();
    if(!user) return false

    const dbUser = await getUser({kindeId: user.id})
    if(dbUser[0].id !== authorId) return false;

    return true
}

const postDbAction = async ({callbackFn, data}:
        {data: Omit<NewPostAsParam, "authorId"> ,
        callbackFn: (data: NewPostAsParam) => Promise<NewPostAsParam[]>}
        
        ) => {
        const {isAuthenticated, getUser: getKindeUser} = await getKindeServerSession()
        const isLogged  = await isAuthenticated()

        try {
            if(!isLogged) throw new Error("Not authenticated")
            const currUser = await getKindeUser();
            const dbUser = (await getUser({kindeId: currUser!.id}))[0]
            await callbackFn({authorId: +dbUser.id,...data})
            
            return {success: true} 
        } catch (error) {
            return {success: false,error: error as string | undefined}
        }
}


export const createPost = async (data:NewPostAsParam) => {    
    const res = await postDbAction({callbackFn:insertPost, data})
    return res
}

export const suggestPost = async (data:NewPostAsParam) => {    
    const res = await postDbAction({callbackFn:insertSuggestion, data})
    return res
}





