import { Box, Divider, Typography} from '@mui/material';
import DrawerWrapper from './drawer-wrapper';
import MenuItems from '../menu/menu-items';
import Nav from '../nav';
import UserBadge from '../header/header-user-badge';
import { getCurrUser } from '../../../lib/kinde/actions';





const UserDrawer = async (props:{ isAdmin: boolean, isLogged: boolean}) => {
 
    const user =await getCurrUser()
    return(<Box sx={{display: {xs: "initial", md: "none"}}}>        
        <DrawerWrapper >
            <Divider sx={{mb: "1rem"}}>CATEGORIES</Divider>
            <Box sx={{mb:"2rem"}}><Nav type='drawer'/></Box>
            <Divider sx={{mb: "1rem"}}><UserBadge isLogged={props.isLogged} user={user} /></Divider>
            <MenuItems {...props}/>
        </DrawerWrapper>       
  </Box>)
}


export default UserDrawer