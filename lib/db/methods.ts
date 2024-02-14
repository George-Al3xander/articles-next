import { count, desc, eq } from "drizzle-orm"
import { db } from "./index"
import { pending, posts} from "./schema"

export const getPosts = async () => {
    const selectResult = await db.select().from(posts).orderBy(desc(posts.createdAt))
    return selectResult
}


export async function getPostsPagination  (page:number= 1, limit:number= 5)  {    
    const skip = (page - 1) * limit
    try {
        const dbPosts = await db.select()
	    .from(posts)
	    .orderBy(desc(posts.createdAt))
	    .limit(limit)
	    .offset(skip)       

        return JSON.parse(JSON.stringify(dbPosts))
    } catch (error) {
        console.log(error)
        return []
    }  
    
} 

export type NewPost = Required<typeof posts.$inferInsert>
export type NewPostAsParam = Omit<NewPost, "createdAt" | "updatedAt" | "id"> 

//Omit<, "createdAt" | "updatedAt" | "id"> & {createdAt?: string, updatedAt?: string, id?: number}

export const insertPost = async (post: NewPostAsParam) => {
    return db.insert(posts).values(post).returning()
}

export const insertSuggestion = async (post: NewPostAsParam) => {
    return db.insert(pending).values(post).returning()
}


export const getPostsCount = async (userId?: string) => {
    if(userId) {
        return (await db.select({ value: count(posts.id) }).from(posts).where(eq(posts.authorId, userId)))[0].value;
    } else {
        return (await db.select({ value: count(posts.id) }).from(posts))[0].value;
    }     
}

export const getPost =async (id: number) => {
    const post = await db.select().from(posts).where(eq(posts.id, id));
    return post 
}

export const getPendingCount = async() => {
    const postsCount = await db.select({ value: count() }).from(posts);
    return postsCount
}

export const getPendingPreview = async  () => {
    const postsReturn = await db.select().from(posts).orderBy(desc(posts.createdAt)).limit(3)

    return postsReturn
}


