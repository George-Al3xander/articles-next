import { Box, Button, FormControlLabel, Stack, Switch, Typography } from "@mui/material"

import PublicationPolicy from "@/components/post creation page/publication-policy-acc"
import MarkdownManual from "@/components/post creation page/markdown-manual"
import CreatePostForm from "@/components/post creation page/create-post.form"





const CreatePostPage = () => {


    
   

    return(<Stack gap={2}>
        <Typography color={"primary.main"} variant="h3">Here you can suggest</Typography>
        <Typography color={"Highlight"} variant="caption">Read before writting</Typography>
        <PublicationPolicy />
        <MarkdownManual />        
        <CreatePostForm />
       
    </Stack>)
}

export default CreatePostPage