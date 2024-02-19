"use client"
import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import { PostCreationSchema, TPostCreationSchema } from "../../../lib/zod/schema"
import { useRef, useState } from "react"
import { Box, Button, Divider, FormControlLabel, Stack, Switch, TextField, Typography } from "@mui/material"
import CategorySelect from "./category-select"
import MarkdownRender from "../markdown/markdown-render"
import TagsSelect from "./tags-select"
import { FieldVal } from "@/types/type"
import TitleContentInputs from "./title-content-inputs"



const CreatePostForm = ({onValidationSuccess,initialData}:{onValidationSuccess?: (data: FieldVal)  => Promise<{success: boolean, error?: string}>, initialData?: FieldVal}) => {
    const tagsRef = useRef<string[]>([])
    
    const [preview,setPreview] =useState(false)

    const onSubmit = async (data: FieldVal) => {
        const res = await fetch("/api/createpost", {
            method: "POST",
            body: JSON.stringify({
                title: data.title,
                content: data.content
            })
        })

        const resData = await res.json()
        if(!res.ok) {
            alert("Sumbtitting failed")
            return 
        }

        if(resData.errors) {
            const errors = resData.errors;
            
            if(errors.title) {
                setError("title", {
                    type: "server",
                    message: errors.title
                })
            } else if(errors.content) {             
                setError("content", {
                    type: "server",
                    message: errors.content
                })
            } else {
                alert("Bruh")
            }
            return 
        }
       
        if(tagsRef.current.length > 0) {
            // do something if have tags
        }
        //const submitRes = await onSuccess(data)
        // if(!submitRes.success) {
        //     toast.error(submitRes.error ?? "Something went wrong");
        // } else {
        //     toast.success('Post created');            
        //     reset();                   
        // }
        
    }
      
    const formReturn = useForm<TPostCreationSchema>({
        resolver: zodResolver(PostCreationSchema)
    })

    const {        
        handleSubmit,         
        formState: {errors, isSubmitting},
        control,
        getValues,    
    
        setError
    } = formReturn


   

    return(<Box>        
        <form autoComplete="off" onSubmit={handleSubmit(onSubmit)} >          
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
                <TagsSelect defaultValue={JSON.stringify(initialData?.tags)} errors={errors} control={control}/>
                {preview 
                    ?   <Button variant="contained" onClick={() => setPreview(false)}>Go back</Button>
                    :<>
                        <Button type="submit" disabled={isSubmitting} variant="contained">Suggest{isSubmitting ? "ing..." : ""}</Button>
                        <Button   onClick={() => setPreview(true)}>Preview</Button>
                    </>                
                }
            </Stack>
        </form>
        
    </Box>)
}

export default CreatePostForm