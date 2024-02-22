import {z} from "zod"
import { checkProfanity } from "../utils"
import cats from "../../public/json/categories.json"
import { blankCheck, blankMessage, lengthMinCheck, lengthMinMessage } from "./utils"



const categories = cats.categories

export const PostCreationSchema = z.object({
    title: z.string().min(5, "Title must be at least 5 characters in length").max(60, "Title can't be longer than 60 characters"),
    content: z.string().min(150, "Content must be at least 150 characters in length"),
    tags: z.array(z.string()).max(5,"You can't have more than 5 tags"),
    description: z.string().min(100, "Description must be at lest 100 characters").max(300,  "Description can't be longer than 300 characters"),
    category: z.string().min(3, "Required"),
})
.refine(blankCheck("title"), blankMessage("title"))
.refine(blankCheck("content"), blankMessage("content"))
.refine(blankCheck("description"), blankMessage("description"))
.refine((data) =>  data.tags.length > 0, {
    message: "Enter at least one tag",
    path: ["tags"]
})
.refine((data) =>  !checkProfanity(data.tags) , {
    message: "Explicit language",
    path: ["tags"]
})
.refine((data) => categories.includes(data.category), {
    message: "Invalid category",
    path: ["category"]
})
.refine(lengthMinCheck("content")(150), lengthMinMessage("content")(150))
.refine(lengthMinCheck("title")(5), lengthMinMessage("title")(5))
.refine(lengthMinCheck("description")(100), lengthMinMessage("description")(100))




export type TPostCreationSchema = z.infer<typeof PostCreationSchema>
export type FormInputs = keyof TPostCreationSchema