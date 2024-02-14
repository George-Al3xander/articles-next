"use server"
import { NewPostAsParam, getPostsPagination,  insertPost, insertSuggestion } from "./db/methods"
import { getCurrAuthStatus, getCurrUser } from "./kinde/actions"




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


export const createPost = async (data:NewPostAsParam) => {    
    const res = await postDbAction({callbackFn:insertPost, data})
    return res
}

export const suggestPost = async (data:NewPostAsParam) => {    
    const res = await postDbAction({callbackFn:insertSuggestion, data})
    return res
}





