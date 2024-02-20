import { Button, MenuItem, Stack } from "@mui/material"
import {categories} from "../../public/json/categories.json"
import NextLink from "next/link"


type NavProps = {
    type: "drawer" | "header"
}

const Nav = ({type}: NavProps) => (<Stack gap={1}  direction={type == "header" ? "row": "column"} sx={{textTransform: "capitalize", color: "black", display: type == "header" ? {xs: "none", md: "initial"} : {xs: "initial", md: "none"}}}>
    <NextLink passHref key={`nav-home-link`} href={`/`}>
        {type == "header"  &&  <Button color="primary">Home</Button>}
        {type == "drawer"  &&  <MenuItem>Home</MenuItem>}
        
    </NextLink>
    {categories.map((cat) => 
        <NextLink key={`nav-${cat}`} href={`/${cat}`}>            
            {type == "header"  &&  <Button color="primary">{cat}</Button>}
            {type == "drawer"  &&  <MenuItem>{cat}</MenuItem>}
        </NextLink>)}
</Stack>)

export default Nav