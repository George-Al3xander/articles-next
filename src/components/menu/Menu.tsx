
import {IconButton, Stack } from '@mui/material';
import UserMenu from './user-menu';
import AdminMenu from './admin-menu';
import { Suspense } from 'react';

import NotificationsIcon from '@mui/icons-material/Notifications';
import UserDrawer from '../drawer/drawer-user';
import { getCurrUserAdminStatus, getCurrAuthStatus } from '../../../lib/kinde/actions';

export default async function MenuDashboard() {  
  
  const isAdmin = await getCurrUserAdminStatus()
  const isLogged = await getCurrAuthStatus()
  

    
  return (<Stack gap={2} direction={"row"} alignItems={"center"}>
      {(isLogged && isAdmin) && 
        <Suspense fallback={<IconButton  sx={{"&:hover": {cursor: "wait"}}}><NotificationsIcon /></IconButton>}>
            <AdminMenu />
        </Suspense>
      }
    <UserMenu isAdmin={isAdmin} isLogged={isLogged}/>
    <UserDrawer isAdmin={isAdmin} isLogged={isLogged}/>
  </Stack>
    
);
}