//"use client"
import { Box, Button, Container, Stack } from "@mui/material"; 
import Nav from "../nav";
import {motion} from "framer-motion"
import Logo from "../logo";
import UserBadge from "./header-user-badge";
import { Suspense } from "react";
import PersonIcon from '@mui/icons-material/Person';
export default function Header () {


    return(<Box sx={{backgroundColor: "success.main", position: "fixed", width: "100%",zIndex: 10}}>
        <Container sx={{py: 2}}>
                        <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}> 
                            <Logo />
                            <Nav />
                            <Suspense fallback={<PersonIcon />}>
                                <UserBadge />
                            </Suspense>
                        </Stack>

               
        </Container>
    </Box>)
}