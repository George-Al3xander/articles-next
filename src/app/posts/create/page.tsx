import {  Stack, Typography } from "@mui/material"
import PublicationPolicy from "@/components/post creation page/publication-policy-acc"
import MarkdownManual from "@/components/post creation page/markdown-manual"
import CreatePostForm from "@/components/post creation page/create-post.form"
import { FieldVal } from "@/types/type"
import { createPost } from "../../../../lib/actions"





const CreatePostPage = () => {


    const mock = async (data: FieldVal) => {
        "use server"
        return await new Promise<{success: true}>((resolve) => {
            resolve({success: true})
        })
    }
   

    return(<Stack gap={2}>
        <Typography color={"primary.main"} variant="h3">Here you can suggest</Typography>
        <Typography color={"Highlight"} variant="caption">Read before writting</Typography>
        <PublicationPolicy />
        <MarkdownManual />        
        <CreatePostForm onValidationSuccess={createPost}/>
       
    </Stack>)
}

export default CreatePostPage