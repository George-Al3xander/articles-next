import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/dist/types";
import PersonIcon from '@mui/icons-material/Person';
import { Avatar, Button, IconButton } from "@mui/material";




const UserBadge = ({isLogged, user}:{isLogged: boolean | null, user:KindeUser | null}) => {
  

    if(!isLogged || !user) return <IconButton><PersonIcon /></IconButton>
    const {family_name,given_name,picture} = user
    if(!picture) return <Avatar sx={{backgroundColor: "info.main", color: "success.main", fontWeight: 800}} alt={`${given_name ?? ""} ${family_name}`}>
        {`${given_name ? given_name.charAt(0) : ""}${family_name ? family_name.charAt(0) : ""}`}
        {(!given_name && !family_name) && <PersonIcon />}
    </Avatar>
                           
    return(<Avatar alt={`${user.family_name ?? ""} ${user.given_name}`} src={picture} />)                  
}

export default UserBadge