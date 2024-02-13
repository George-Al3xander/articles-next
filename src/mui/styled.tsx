import { MenuItem, styled } from "@mui/material";




export const SMenuItem = styled(MenuItem)((props) => ({
    
  
    [props.theme.breakpoints.up("sm")]: {
        paddingInline:"4rem"
    },
    [props.theme.breakpoints.up("md")]: {
        paddingInline:"0"
    },    
  }));