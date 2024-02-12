import { Badge, Divider, IconButton, MenuItem, Stack, Typography } from "@mui/material"
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useState } from "react";
import MenuWrapper from "./menu-wrapper";
import { db } from "../../../lib/db";
import { count } from "drizzle-orm";
import { posts } from "../../../lib/db/schema";
import { getPendingCount, getPendingPreview, getPostAuthorInfo } from "../../../lib/db/methods";
import Link from "next/link";
import moment from "moment"


const AdminMenu = async () => {   
    const postsCount = await getPendingCount();
    const pendings = await getPendingPreview();
    
    return(<MenuWrapper trigger={<IconButton><Badge color="info" badgeContent={postsCount[0].value}><NotificationsIcon /></Badge></IconButton>}>
        {postsCount[0].value ?
        <>
            {pendings.map(async (post) => {
                const userInfo = await getPostAuthorInfo(post.authorId)
                return <MenuItem key={post.id+"-post-preview"}>
                    <Link href={`/pending/${post.id}`}>
                        <Stack>  
                            <Typography> {post.title}</Typography>
                            <Typography  variant="subtitle2">Suggested on {moment(post.createdAt).format("ll")}</Typography>
                            <Typography  variant="subtitle2">By {userInfo.name}</Typography>
                            <Divider />                            
                        </Stack>
                    </Link>
                </MenuItem>
            })}
                {postsCount[0].value > 3 &&
                <>
                    <Divider />
                    <MenuItem>
                        <Link href={`/pending`}>
                        View {postsCount[0].value  - pendings.length} remaining suggestions
                        </Link>
                    </MenuItem>
                </>}
        </>
        :
        <>
            <MenuItem disabled>No suggestions</MenuItem>
        </>
        }
    </MenuWrapper>)
}

export default AdminMenu