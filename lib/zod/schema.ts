import {z} from "zod"
import { checkProfanity } from "../utils"
import cats from "../../public/json/categories.json"


const categories = cats.categories

export const PostCreationSchema = z.object({
    title: z.string().min(5, "Title must be at least 5 characters in length").max(50, "Title can't be longer than 50 characters"),
    content: z.string().min(150, "Content must be at least 150 characters in length"),
    tags: z.array(z.string()).max(5,"You can't have more than 5 tags"),
    category: z.string().min(3, "Required")
})
.refine((data) =>  data.tags.length > 0, {
    message: "Enter at least one tag",
    path: ["tags"]
})
.refine((data) =>  !checkProfanity(data.tags) , {
    message: "Explicit language",
    path: ["tags"]
})
.refine((data) =>  data.content.replaceAll(" ", "").length >= 150, {
    message: "Content must be at least 150 characters in length",
    path: ["content"]
})
.refine((data) => categories.includes(data.category), {
    message: "Invalid category",
    path: ["category"]
})




export type TPostCreationSchema = z.infer<typeof PostCreationSchema>