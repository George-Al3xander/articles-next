import AccordionWrapper from "@/components/mui/accordion-wrapper"
import { Avatar, Box,  List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material"




const PublicationPolicy = () => {
    const headerText = "At Get Published, we strive to maintain a positive and inclusive online community for our readers. To ensure a respectful and comfortable environment, we have established a Post Publication Policy that outlines the types of content that are strictly prohibited on our platform. This policy applies to all user-generated content, including articles, comments, and any other form of contributions."
    const rulesList : {title:string,content:string}[] = [
        {
            title: "No NSFW Content",
            content: "We strictly prohibit the publication of any content that is Not Safe For Work (NSFW). This includes explicit images, videos, or text that may be considered inappropriate, offensive, or unsuitable for a general audience. We aim to create a space that is accessible to users of all ages."
          },
          {
            title: "Avoidance of Offensive Language",
            content: "We encourage constructive and respectful communication. Therefore, any content containing excessively offensive language, hate speech, or discriminatory remarks will not be tolerated. We believe in fostering a positive and inclusive atmosphere for our readers."
          },
          {
            title: "Respect for Diverse Perspectives",
            content: "While we encourage discussions and diverse viewpoints, we do not permit the promotion of content that aims to harm, harass, or disrespect individuals or groups based on their race, ethnicity, gender, religion, or any other protected characteristic."
          },
          {
            title: "Censorship of Profanity",
            content: "Excessive and gratuitous use of profanity can be detrimental to the quality of discourse. We ask our contributors to use language that is appropriate for a broad audience. Any content containing an excessive amount of cuss words or explicit language may be subject to moderation."
          },
          {
            title: "Moderation and Enforcement",
            content: "Our team reserves the right to moderate and enforce this policy by removing or editing content that violates these guidelines. Depending on the severity and frequency of the violations, users may receive warnings, temporary suspensions, or permanent bans from our platform."
          },
          {
            title: "Appeals Process",
            content: "Users who believe their content was wrongly moderated can appeal the decision through our designated appeals process. We value transparency and fairness, and our team will review appeals promptly."
          },
    ]

    const footerText = `
    By contributing to Get Published, users agree to adhere to this Post Publication Policy. We appreciate your cooperation in maintaining a positive and welcoming space for our community.`

    return(<Box>
        <AccordionWrapper title={"Post Publication Policy"}>
            <Typography>{headerText}</Typography>
            <List>
               {rulesList.map(({title,content},index) => <ListItem key={title + index} alignItems="flex-start">
                    <ListItemAvatar><Avatar sx={{ bgcolor: "primary.main" }} >{index + 1}</Avatar></ListItemAvatar> 
                    <ListItemText primary={title} secondary={content} />                
               </ListItem>)} 
            </List>
            <br />
            <Typography component={"p"}>{footerText}</Typography>
            <br />
            <Typography component={"p"}>Thank you for being a part of our platform!</Typography>
        </AccordionWrapper>        
        
    </Box>)
}

export default PublicationPolicy