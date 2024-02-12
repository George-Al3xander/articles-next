"use client"

import { Box, Menu } from "@mui/material";
import { ReactNode, useState } from "react";

const MenuWrapper = ({children,trigger}:{children:ReactNode,trigger: ReactNode}) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };



    return(<Box>
        <Box sx={{"&:hover": {cursor: "pointer"}}} onClick={handleClick}>
            {trigger}
        </Box>

        <Menu            
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
            'aria-labelledby': 'basic-button',
            }}
        >
            <Box onClick={handleClose}>
                {children}
            </Box>
        </Menu>        
    </Box>)
}

export default MenuWrapper