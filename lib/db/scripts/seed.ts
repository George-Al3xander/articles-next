import { eq } from "drizzle-orm/pg-core/expressions"

import { posts, users } from "../schema"
import { NewPost, NewUser, insertPost } from "../methods"



const main = async () => {
    const newPost: NewPost ={
        authorId: 1,
        content: `
        ---
        title: 'Just Testing'
        date: '2023-04-28'
        tags: ['next.js','nextjs','new']
        ---
        
        We recommend using **Static Generation** (with and without data) whenever possible because your page can be built once and served by CDN, which makes it much faster than having a server render the page on every request.
        
        \`\`\`ts
        const sum = (num1: number, num2: number): number => {
            return num1 + num2
        }
        
        console.log(sum(4,8)) //12
        \`\`\`
        
        You can use Static Generation for many types of pages, including:
        
        - Marketing pages
        - Blog posts
        - E-commerce product listings
        - Help and documentation
        
        You should ask yourself: "Can I pre-render this page **ahead** of a user's request?" If the answer is yes, then you should choose Static Generation.
        
        On the other hand, Static Generation is **not** a good idea if you cannot pre-render a page ahead of a user's request. Maybe your page shows frequently updated data, and the page content changes on every request.
        
        In that case, you can use **Server-Side Rendering**. It will be slower, but the pre-rendered page will always be up-to-date. Or you can skip pre-rendering and use client-side JavaScript to populate data.`,
        title: "Markdown Test",
        
    }
    // const newUser: NewUser = {
    //     email:"test@test.com",        
    //     name: "Mr Test"
    // } 
    const res = await insertPost(newPost)
    console.log("success",res)   
    //console.log(newPost.content)
    process.exit()
}

main()