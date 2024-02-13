"use client"
import { Box, Drawer, IconButton,  List, Stack} from "@mui/material"
import { ReactNode, useState } from "react"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';





const DrawerWrapper = ({children}: {children: ReactNode}) => {
    const [open, setOpen] = useState(false)
    const close = () => setOpen(false)
    return(<Box sx={{md: {display: "none"}}} >
        <IconButton onClick={() => setOpen(true)}><MenuIcon /></IconButton>
        <Drawer  onClose={close} open={open} anchor="right">
            <List   sx={{p: "1rem", textAlign: "center"}}  onClick={close}> 
                <Box mb={4}><IconButton><CloseIcon /></IconButton>   </Box>
                
                {children}
            </List>
        </Drawer>
    </Box>)
}

export default DrawerWrapper