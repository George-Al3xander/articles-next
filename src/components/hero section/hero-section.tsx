import { AnimatedListItem } from "@/components/mui/framer"
import { Button, List, ListItem, Stack, Typography } from "@mui/material"
import Link from "next/link"


const HeroSection = () => {

    const steps = ["You write an intersting article", "Send us to review it", "If we consider it intersting too: your article will be published, if not:  good luck next time :)"]

    return(<Stack py={4} gap={2} borderColor={"primary.main"} borderBottom={1}  alignItems={"center"}>
        <Typography fontWeight={600} color="primary.main" variant={"h3"}>So what's the deal?</Typography>
        <List>
            {steps.map((step, index) =>              
                <AnimatedListItem key={step + index + "wrapper"} index={index}>
                    <Typography color="primary.main" variant="h5">{index + 1}</Typography>
                    {` ${step}`}
                </AnimatedListItem>              
            )}
        </List>
        <Link href={"/posts/create"}> 
             <Button variant="contained">Suggest a post</Button>
        </Link>
    </Stack>)
}


export default HeroSection