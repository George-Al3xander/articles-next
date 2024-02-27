"use server"
import { redirect } from "next/navigation"
import { NewPostAsParam, getPostsPagination,  insertPost, insertSuggestion } from "./db/methods"
import { getCurrAuthStatus, getCurrUser } from "./kinde/funcs"
import { db } from "./db"
import { likes } from "./db/schema"
import { eq } from "drizzle-orm"




export async function getPostsAction  (page:number= 1)  {  	
    const posts = await getPostsPagination(page)
	return posts
} 



// export const isCurrUserAuthor = async (authorId: number): Promise<boolean> => {    
    
//     const isLogged  = await isAuthenticated()
//     if(!isLogged) return false
    
//     const user = await getKindeCurrUser();
//     if(!user) return false

//     const dbUser = await getUser({kindeId: user.id})
//     if(dbUser[0].id !== authorId) return false;

//     return true
// }


// Parent function for the creation/suggestion post to db
const postDbAction = async ({callbackFn, data}:
        {data: Omit<NewPostAsParam, "authorId"> ,
        callbackFn: (data: NewPostAsParam) => Promise<NewPostAsParam[]>}
        
        ) => {
        const isLogged  = await getCurrAuthStatus()

        try {
            if(!isLogged) throw new Error("Not authenticated")
            const currUser = await getCurrUser()   
            if(!currUser) throw new Error("Not authenticated")   
            await callbackFn({authorId: currUser.id,...data})
            
            return {success: true} 
        } catch (error) {
            return {success: false,error: error as string | undefined}
        }
}


export const createPost = async (data:Omit<NewPostAsParam, "authorId">) => {    
    const res = await postDbAction({callbackFn:insertPost, data})
    return res
}

export const suggestPost = async (data:Omit<NewPostAsParam, "authorId">) => {    
    const res = await postDbAction({callbackFn:insertSuggestion, data})
    return res
}

export const redirectToLogin = () =>  redirect('/api/auth/login');

export const likePost =async ({postId, likesCount, likeStatus}:{postId: number, likeStatus: boolean, likesCount: number}) : Promise<{likeStatus: boolean, likesCount: number}> => {
    const logStatus = await getCurrAuthStatus()
    if(!logStatus)  redirect('/api/auth/login');
   
    const currUser = await getCurrUser();
    if(!currUser) redirect('/api/auth/login'); 

   try {
        if(likeStatus) {
            await db.delete(likes).where(eq(likes.userId, currUser.id));
            return {likesCount: likesCount-1, likeStatus:false};
        } else {
            const like = await db.insert(likes).values({postId, userId: currUser.id}).returning();
            console.log(like)
            if(like.length ==  0) throw new Error()
            return {likesCount: likesCount+1, likeStatus:true};            
        }
   } catch (error) {
        return {likesCount, likeStatus}
   }
}




