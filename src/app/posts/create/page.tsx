import { Box, FormControlLabel, Stack, Switch, Typography } from "@mui/material"
import { getCurrAuthStatus } from "../../../../lib/kinde/actions"
import PublicationPolicy from "@/components/post creation page/publication-policy-acc"
import MarkdownManual from "@/components/post creation page/markdown-manual"




const CreatePostPage = async () => {


    const isLogged = await getCurrAuthStatus()
   

    return(<Box>
        <Typography color={"primary.main"} variant="h3">Here you can suggest </Typography>
        <PublicationPolicy />
        <MarkdownManual />
        <FormControlLabel control={<Switch  defaultChecked />} label="Preview" />
    </Box>)
}

export default CreatePostPage