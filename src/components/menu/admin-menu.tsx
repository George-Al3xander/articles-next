import { Badge, Divider, IconButton, MenuItem, Stack, Typography } from "@mui/material"
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuWrapper from "./menu-wrapper";
import { getPendingCount, getPendingPreview } from "../../../lib/db/methods";
import Link from "next/link";
import { getUserInfo } from "../../../lib/kinde/server-actions";
import TimeFromDate from "../util comps/time-from-date";
import PostAuthorInfo from "../util comps/post-author-info";


const AdminMenu = async () => {   
    const postsCount = await getPendingCount();
    const pendings = await getPendingPreview();
    return(<MenuWrapper trigger={<IconButton><Badge color="info" badgeContent={postsCount}><NotificationsIcon /></Badge></IconButton>}>
        {postsCount ?
        <>
            {pendings.map((post) => {
                return <MenuItem key={post.id+"-post-preview"}>
                    <Link href={`/pending/${post.id}`}>
                        <Stack>  
                            <Typography> {post.title}</Typography>
                            <Typography  variant="subtitle2">Suggested  {<TimeFromDate start={post.createdAt}/>}</Typography>
                            <Typography variant="subtitle2"><PostAuthorInfo authorId={post.authorId}/></Typography>
                            <Divider />                            
                        </Stack>
                    </Link>
                </MenuItem>
            })}
                {postsCount > 3 &&
                <>
                    <Divider />
                    <MenuItem>
                        <Link href={`/pending`}>
                        View {postsCount  - pendings.length} remaining suggestions
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