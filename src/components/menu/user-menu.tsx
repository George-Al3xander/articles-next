import UserBadge from '../header/header-user-badge';

import { Box} from '@mui/material';
import MenuWrapper from './menu-wrapper';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import MenuItems from './menu-items';




const UserMenu = async (props:{ isAdmin: boolean, isLogged: boolean}) => {
    const {getUser} = getKindeServerSession()
    const user = await getUser()
    return(<Box sx={{display: {xs: "none", md: "initial"}}}>        
        <MenuWrapper trigger={<UserBadge isLogged={props.isLogged} user={user}/>}>
            <MenuItems {...props}/>
        </MenuWrapper>       
  </Box>)
}


export default UserMenu