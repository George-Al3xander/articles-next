import { Box, Stack, Typography } from "@mui/material"
import { NewPost } from "../../../lib/db/methods"
import TimeFromDate from "../util comps/time-from-date"




const PostPreview = ({title, description,createdAt,authorId, id}: NewPost) => {



    return(<Stack direction={"column"} gap={2}>
        <Typography>{title}</Typography>
        <Typography>{description}</Typography>
        <Stack gap={1}>
            <TimeFromDate start={createdAt}/>
        </Stack>
    </Stack>)

}