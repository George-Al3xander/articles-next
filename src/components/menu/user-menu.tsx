import UserBadge from '../header/header-user-badge';

import { Box} from '@mui/material';
import MenuWrapper from './menu-wrapper';
import MenuItems from './menu-items';
import { getCurrUser } from '../../../lib/kinde/actions';




const UserMenu = async (props:{ isAdmin: boolean, isLogged: boolean}) => {

    const user = await getCurrUser()
    return(<Box sx={{display: {xs: "none", md: "initial"}}}>        
        <MenuWrapper trigger={<UserBadge isLogged={props.isLogged} user={user}/>}>
            <MenuItems {...props}/>
        </MenuWrapper>       
  </Box>)
}


export default UserMenu