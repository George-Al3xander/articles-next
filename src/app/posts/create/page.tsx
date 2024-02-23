import {  Stack, Typography } from "@mui/material"
import PublicationPolicy from "@/components/post creation page/static guides/publication-policy-acc"
import MarkdownManual from "@/components/post creation page/static guides/markdown-manual"
import CreatePostForm from "@/components/post creation page/create-post.form"
import { createPost } from "../../../../lib/actions"






const CreatePostPage = () => {
  
   

    return(<Stack gap={2}>
        <Typography color={"primary.main"} variant="h3">Here you can suggest</Typography>
        <Typography color={"Highlight"} variant="caption">Read before writting</Typography>
        <PublicationPolicy />
        <MarkdownManual />        
        <CreatePostForm onValidationSuccess={createPost}/>
       
    </Stack>)
}

export default CreatePostPage