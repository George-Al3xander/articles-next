import { Badge, Divider, IconButton, MenuItem, Stack, Typography } from "@mui/material"
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuWrapper from "./menu-wrapper";
import { getPendingCount, getPendingPreview } from "../../../lib/db/methods";
import Link from "next/link";
import { getUserInfo } from "../../../lib/kinde/server-actions";
import TimeFromDate from "../util comps/time-from-date";


const AdminMenu = async () => {   
    const postsCount = await getPendingCount();
    const pendings = await getPendingPreview();
    return(<MenuWrapper trigger={<IconButton><Badge color="info" badgeContent={postsCount[0].value}><NotificationsIcon /></Badge></IconButton>}>
        {postsCount[0].value ?
        <>
            {pendings.map(async (post) => {
                const userInfo = await getUserInfo(post.authorId);
                let err: string | null = null;
               
                if(userInfo.success == false) {
                    err = "Problem getting user credtials"
                }
              

                return <MenuItem key={post.id+"-post-preview"}>
                    <Link href={`/pending/${post.id}`}>
                        <Stack>  
                            <Typography> {post.title}</Typography>
                            <Typography  variant="subtitle2">Suggested  {<TimeFromDate start={post.createdAt}/>}</Typography>
                            <Typography color={err  ? "red" : ""} variant="subtitle2">{err ?? `By ${userInfo.given_name ?? ""} ${userInfo.family_name ?? ""}`} </Typography>
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