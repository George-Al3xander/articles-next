import { Button, Link as MUILink, Stack } from "@mui/material"
import categories from "../categories.json"
import NextLink from "next/link"




const Nav = () => (<Stack gap={1}  direction="row" sx={{textTransform: "capitalize", color: "black"}}>
    <NextLink passHref key={`nav-home-link`} href={`/`}><Button color="primary">Home</Button></NextLink>
    {categories.categories.map((cat) => <NextLink key={`nav-${cat}`} href={`/${cat}`}><Button color="primary">{cat}</Button></NextLink>)}
</Stack>)
export default Nav