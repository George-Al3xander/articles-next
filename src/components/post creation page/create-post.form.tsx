"use client"
import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import { PostCreationSchema, TPostCreationSchema } from "../../../lib/zod/schema"
import { useRef, useState } from "react"
import { Box, Button, Divider, FormControlLabel, Stack, Switch, TextField, Typography } from "@mui/material"
import CategorySelect from "./category-select"
import MarkdownRender from "../markdown/markdown-render"
import TagsSelect from "./tags-select"
import {  onSuccessFunction } from "@/types/type"
import TitleContentInputs from "./textfield-inputs"
import usePostUpsert from "@/hooks/usePostUpsert"
import toast, { Toaster } from 'react-hot-toast';



const CreatePostForm = ({onValidationSuccess,initialData}:{onValidationSuccess: onSuccessFunction, initialData?: TPostCreationSchema}) => {
       

    const [preview,setPreview] = useState(false)      
    const formReturn = usePostUpsert({onValidationSuccess})
    const {control, getValues, formState: {errors, isSubmitting}, submitForm} = formReturn

   

    return(<Box>        
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
                <CategorySelect defaultValue={initialData?.category} control={control} errors={errors}/>
                <TagsSelect defaultValue={initialData?.tags} errors={errors} control={control}/>
                {preview 
                    ?   <Button variant="contained" onClick={() => setPreview(false)}>Go back</Button>
                    :<>
                        <Button type="submit" disabled={isSubmitting} variant="contained">Suggest{isSubmitting ? "ing..." : ""}</Button>
                        <Button   onClick={() => setPreview(true)}>Preview</Button>
                    </>                
                }
            </Stack>
             <Toaster />

            <Button onClick={() => toast.error("Hello")}>Toast</Button>
        </form>        
    </Box>)
}

export default CreatePostForm