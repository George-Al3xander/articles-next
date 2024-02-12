import { eq } from "drizzle-orm/pg-core/expressions"

import { posts, users } from "../schema"
import { NewPost, NewUser, insertPost } from "../methods"
import { db } from ".."



const main = async () => {
   
    const res = await db.update(users).set({createdAt: new Date("2024-01-01T06:37:23+0200")})
    console.log("success",res)       //console.log(newPost.content)
    
    process.exit()
}

main()