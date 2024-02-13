import { AnimatedListItem } from "@/mui/framer"
import { Button, List, ListItem, Stack, Typography } from "@mui/material"


const HeroSection = () => {

    const steps = ["You write an intersting article", "Send us to review it", "If we consider it intersting too: your article will be published, if not:  good luck next time :)"]

    return(<Stack gap={2} alignItems={"center"}>
        <Typography fontWeight={600} color="primary.main" variant={"h3"}>So what's the deal?</Typography>
        <List>
            {steps.map((step, index) => 
             
                    <AnimatedListItem index={index}>
                        <Typography color="primary.main" variant="h5">{index + 1}</Typography>
                        {` ${step}`}
                    </AnimatedListItem>
              
            )}
        </List>
        <Button variant="contained">Suggest a post</Button>
    </Stack>)
}


export default HeroSection