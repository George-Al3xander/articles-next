import { Box, Divider, Typography} from '@mui/material';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import DrawerWrapper from './drawer-wrapper';
import MenuItems from '../menu/menu-items';
import Nav from '../nav';
import UserBadge from '../header/header-user-badge';





const UserDrawer = async (props:{ isAdmin: boolean, isLogged: boolean}) => {
    const {getUser} = getKindeServerSession() ;
    const user =await getUser()
    return(<Box sx={{display: {xs: "initial", md: "none"}}}>        
        <DrawerWrapper >
            <Divider>CATEGORIES</Divider>
            <Box sx={{mb:"2rem"}}><Nav type='drawer'/></Box>
            <Divider sx={{mb: "1rem"}}><UserBadge isLogged={props.isLogged} user={user} /></Divider>
            <MenuItems {...props}/>
        </DrawerWrapper>       
  </Box>)
}


export default UserDrawer