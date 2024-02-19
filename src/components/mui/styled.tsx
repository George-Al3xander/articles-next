import { MenuItem, Typography, styled } from "@mui/material";
import { boolean } from "drizzle-orm/mysql-core";
import { ReactNode } from "react";
import { CSSObjectWithLabel } from "react-select";
import { isError } from "util";




export const SMenuItem = styled(MenuItem)((props) => ({
    
  
    [props.theme.breakpoints.up("sm")]: {
        paddingInline:"4rem"
    },
    [props.theme.breakpoints.up("md")]: {
        paddingInline:"0"
    },    
}));


export const FormError = ({children}:{children: ReactNode}) => {
    return <Typography color={"red"}  ml={'1rem'} variant='caption'>{children}</Typography>
}


export const reactSelectStyles = ({isError}:{isError?:boolean})  => {

    return {
        control(base: CSSObjectWithLabel) : CSSObjectWithLabel  {
          if(isError) {                            
              return({...base, borderColor:  "red", ":hover": {borderColor:  "red"}})
          }   
          return base                       
        }
      }
}