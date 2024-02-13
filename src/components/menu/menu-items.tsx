import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import Link from 'next/link';
import {RegisterLink, LoginLink, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import MenuItem from '@mui/material/MenuItem';



const MenuItems = async ({isAdmin, isLogged}:{ isAdmin: boolean, isLogged: boolean}) => {
    const {getUser} = getKindeServerSession()
    const user = await getUser();

    const menuItemStyle = {px: "4rem", textAlign: "center"};
    return(<>
        {(!user || !isLogged)? 
            <>
                <LoginLink>
                    <MenuItem sx={menuItemStyle}>
                             Login                        
                    </MenuItem>
                </LoginLink>
                
                <RegisterLink>
                    <MenuItem sx={menuItemStyle}>
                            Sign Up
                    </MenuItem>
                </RegisterLink>
            </>
            :
            <>
                <Link href={"/authors/"+user.id}>
                    <MenuItem sx={menuItemStyle}>
                        Profile
                    </MenuItem>
                </Link>                
                <MenuItem sx={menuItemStyle}>{ isAdmin ? "Create" : "Suggest" } a post</MenuItem>
                <LogoutLink><MenuItem sx={menuItemStyle}>Logout</MenuItem></LogoutLink>
            </>
        }
    </>)
}

export default MenuItems