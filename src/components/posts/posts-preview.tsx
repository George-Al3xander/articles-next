import { Box, Divider, Paper, Stack, Typography, TypographyProps } from "@mui/material"
import { NewPost } from "../../../lib/db/methods"
import TimeFromDate from "../util comps/time-from-date"
import ReadingTimeCalc from "../util comps/reading-time-calc"
import { getUserInfo } from "../../../lib/kinde/server-actions"
import PostAuthorInfo from "../util comps/post-author-info"
import LikeBtn from "./like-btn"




const PostPreview = async ({title, description,createdAt,authorId, id, content}: NewPost) => {
   

   
    const infoSec: TypographyProps[] = [
        {variant: "caption",fontWeight: 550, children:  <TimeFromDate start={createdAt}/>},
        {variant: "caption",children: <PostAuthorInfo authorId={authorId}/>},
        {variant: "caption", children: <ReadingTimeCalc text={content}/>},
    ]


    return(<Paper  sx={{p:2, display: "flex", flexDirection: "column", gap:2}} elevation={4}>
        <Typography variant="h5" fontWeight={700}>{title}</Typography>
        <Typography>{description}</Typography>
        <Stack gap={1} direction={"row"}>            
            {infoSec.map((typo) => <Typography {...typo}/> )}
            
        </Stack>
        <Divider />
        
            <LikeBtn postId={id}/>
     
    </Paper>)
}

export default PostPreview