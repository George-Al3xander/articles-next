import {LoginLink, getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import PersonIcon from '@mui/icons-material/Person';

import { Avatar, Button } from "@mui/material";
import { deepPurple } from "@mui/material/colors";



const UserBadge = async () => {
    const {isAuthenticated, getUser} =  getKindeServerSession()

    const isLogged = await isAuthenticated();
    const user = await getUser();

    if(!isLogged || !user) return <LoginLink><Button startIcon={ <PersonIcon sx={{alignSelf: 'center'}}/>}/></LoginLink>
    const {family_name,given_name,picture} = user
    if(!picture) return <Avatar sx={{backgroundColor: "info.main", color: "success.main", fontWeight: 800}} alt={`${given_name ?? ""} ${family_name}`}>
        {`${given_name ? given_name.charAt(0) : ""}${family_name ? family_name.charAt(0) : ""}`}
        {(!given_name && !family_name) && <PersonIcon />}
    </Avatar>
                           
    return(<Avatar alt={`${user.family_name ?? ""} ${user.given_name}`} src={picture} />)                  
}

export default UserBadge