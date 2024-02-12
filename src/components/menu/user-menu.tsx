import MenuItem from '@mui/material/MenuItem';
import UserBadge from '../header/header-user-badge';
import Link from 'next/link';
import { Box} from '@mui/material';
import {RegisterLink, LoginLink, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import MenuWrapper from './menu-wrapper';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';




const UserMenu = async ({isAdmin, isLogged}:{ isAdmin: boolean, isLogged: boolean}) => {
    const {getUser} = getKindeServerSession()
    const user = await getUser()
    return(<Box>        
        <MenuWrapper trigger={<UserBadge isLogged={isLogged} user={user}/>}>
          {(!user)? 
          <>
            <MenuItem>
                <LoginLink>
                    Login
                </LoginLink>
            </MenuItem>
            <MenuItem>
                <RegisterLink>
                    Sign Up
                </RegisterLink>
            </MenuItem>            
          </>
          :
          <>
            <MenuItem><Link href={"/authors/"+user.id}>Profile</Link></MenuItem>
            { isAdmin ?
             <MenuItem>Create a post</MenuItem>
             :
             <MenuItem>Suggest a post</MenuItem>
            }
            <MenuItem><LogoutLink>Logout</LogoutLink></MenuItem>
          </>
          }

        </MenuWrapper>       
  </Box>)
}


export default UserMenu