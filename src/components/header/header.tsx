//"use client"
import { AppBar, Box, Button, Container, IconButton, Stack } from "@mui/material"; 
import Nav from "../nav";
import {motion} from "framer-motion"
import Logo from "../logo";
import UserBadge from "./header-user-badge";
import { Suspense } from "react";
import PersonIcon from '@mui/icons-material/Person';
import BasicMenu from "../menu/Menu";
import MenuIcon from '@mui/icons-material/Menu';


export default function Header () {
    return(<Box  sx={{backgroundColor: "success.main",width: "100%",zIndex: 10, position: "fixed"}}>
        <Container sx={{py: 2}}>
                <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}> 
                    <Logo />
                    <Nav type="header"/>
                    <Suspense 
                        fallback={
                            <IconButton  sx={{"&:hover": {cursor: "wait"}}}>
                                <PersonIcon sx={{display: {xs: "none", md: "initial"}}} />
                                <MenuIcon sx={{display: {xs: "initial", md: "none"}}} />
                            </IconButton>
                        }>
                            <BasicMenu />   
                    </Suspense>  
                </Stack>               
        </Container>
    </Box>)
}