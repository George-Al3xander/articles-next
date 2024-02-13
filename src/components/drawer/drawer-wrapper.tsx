"use client"
import { Box, Drawer, IconButton,  List, Stack} from "@mui/material"
import { ReactNode, useState } from "react"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';





const DrawerWrapper = ({children}: {children: ReactNode}) => {
    const [open, setOpen] = useState(false)
    const close = () => setOpen(false)
    return(<div>
        <IconButton onClick={() => setOpen((prev) => !prev)}><MenuIcon /></IconButton>
        <Drawer  onClose={close} open={open} anchor="right">
            <List  sx={{py: "2rem", px: "1rem", alignItems: "flex-end"}}  onClick={close}> 
            
                <IconButton><CloseIcon /></IconButton>   
                  
                {children}
            </List>
        </Drawer>
    </div>)
}

export default DrawerWrapper