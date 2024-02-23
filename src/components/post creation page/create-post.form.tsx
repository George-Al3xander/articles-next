"use client"
import { TPostCreationSchema } from "../../../lib/zod/schema"
import {useState } from "react"
import { Box, Button, Divider, FormControlLabel, Stack, Switch, TextField, Typography } from "@mui/material"
import CategorySelect from "./category-select"
import MarkdownRender from "../markdown/markdown-render"
import TagsSelect from "./tags-select"
import {  onSuccessFunction } from "@/types/type"
import TitleContentInputs from "./textfield-inputs"
import usePostUpsert from "@/hooks/usePostUpsert"
import  { Toaster } from 'react-hot-toast';
import { usePathname } from "next/navigation"



const CreatePostForm = ({onValidationSuccess,initialData}:{onValidationSuccess: onSuccessFunction, initialData?: TPostCreationSchema}) => {
       

    const [preview,setPreview] = useState(false)      
    const formReturn = usePostUpsert({onValidationSuccess})
    const { getValues, submitForm,formState: {isSubmitting}} = formReturn
    const pathname = usePathname()
 
    return(<Box>        
        <Toaster />
        <form autoComplete="off" onSubmit={submitForm} >          
            <Stack my={4} gap={2}>
                <TitleContentInputs initialData={initialData} isPreview={preview} {...formReturn}/>
                {preview &&  
                    <>
                        <Divider />
                            {/\S/.test(getValues("content")) 
                            ? <MarkdownRender>{getValues("content")}</MarkdownRender>                   
                            : <Typography mx={"auto"} sx={{opacity: ".5"}}>EMPTY</Typography>}
                        <Divider />                    
                    </>
                }                
                <CategorySelect defaultValue={initialData?.category}  {...formReturn}/>
                <TagsSelect defaultValue={initialData?.tags} {...formReturn}/>
                {preview 
                    ?   <Button variant="contained" onClick={() => setPreview(false)}>Go back</Button>
                    :<>
                        <Button type="submit" disabled={isSubmitting} variant="contained">
                            {pathname.startsWith("/posts/create") ? "Sugges" : "Edi"}t{isSubmitting ? "ing..." : ""}
                        </Button>
                        <Button   onClick={() => setPreview(true)}>Preview</Button>
                    </>                
                }
            </Stack>
        </form>        
    </Box>)
}

export default CreatePostForm