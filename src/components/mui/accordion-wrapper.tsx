import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ReactNode } from "react";


export default function AccordionWrapper ({children,title}:{children: ReactNode,title: string}) {
        return(<div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"                    
                >
                <Typography fontWeight={900} color={"primary.main"} variant="overline">{title}</Typography>
                </AccordionSummary>
                <AccordionDetails>{children}</AccordionDetails>
            </Accordion>
        </div>)
}