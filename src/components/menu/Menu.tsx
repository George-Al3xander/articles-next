
import {IconButton, Stack } from '@mui/material';
import UserMenu from './user-menu';
import AdminMenu from './admin-menu';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { Suspense } from 'react';

import NotificationsIcon from '@mui/icons-material/Notifications';

export default async function MenuDashboard() { 
  const {getPermission, isAuthenticated}=  getKindeServerSession()
 
  const canAccept = await getPermission("accept:post");
  const canReject = await getPermission("reject:post") ;
  //const isAdmin = [canAccept, canReject].every((t) => t?.isGranted === true)
  const isAdmin = true
  const isLogged = await isAuthenticated();
  

  
  return (<Stack gap={2} direction={"row"} alignItems={"center"}>
      {(isLogged && isAdmin) && 
        <Suspense fallback={<IconButton  sx={{"&:hover": {cursor: "wait"}}}><NotificationsIcon /></IconButton>}>
            <AdminMenu />
        </Suspense>
      }
    <UserMenu isAdmin={isAdmin} isLogged={isLogged}/>
  </Stack>
    
);
}