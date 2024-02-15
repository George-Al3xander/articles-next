"use client"
import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import { PostCreationSchema, TPostCreationSchema } from "../../../lib/zod/schema"
import { useRef, useState } from "react"
import { Box, Button, Divider, FormControlLabel, Stack, Switch, TextField, Typography } from "@mui/material"
import CategorySelect from "./category-select"
import MarkdownRender from "../markdown/markdown-render"
export type FieldVal = {title: string, content: string}



const CreatePostForm = ({onValidationSuccess,intialData}:{onValidationSuccess?: (data: FieldVal)  => Promise<{success: boolean, error?: string}>, intialData?: FieldVal}) => {
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
      
    const {
        register, 
        handleSubmit,         
        formState: {errors, isSubmitting},
        reset,   
        watch,
        getValues,    
        setError
    } = useForm<TPostCreationSchema>({
        resolver: zodResolver(PostCreationSchema)
    })


    const inputs : {multiline:boolean, name: "title" | "content"}[] = [
        {
            multiline: false,
            name:"title"            
        },
        {
            multiline: true,
            name:"content"            
        }
    ]
    
    return(<Box>
        {/* <FormControlLabel control={<Switch />} label="Live preview" /> */}

        {preview ? 
        <Stack>
            <Divider />
            <MarkdownRender>{getValues("content")}</MarkdownRender>
            <Divider />
            <Button variant="contained" onClick={() => setPreview(false)}>Go back</Button>
        </Stack>

        :           
        
        <form autoComplete="off" onSubmit={handleSubmit(onSubmit)} >          
            <Stack my={4} gap={2}>
                {inputs.map(({name,multiline}) => <TextField 
                    required                     
                    multiline={multiline}
                    defaultValue={intialData ? intialData[name] : ""} 
                    placeholder={`Enter ${name}`}
                    error={errors[name] != undefined}
                    helperText={(errors[name] && errors) ? errors[name]!.message : "" }
                    label={name.charAt(0).toUpperCase()+name.slice(1,name.length)} 
                    {...register(name)}  
                    type={"text"}
                
                />)}
                {/* <CategorySelect /> */}
            <Button type="submit" disabled={isSubmitting} variant="contained">Suggest{isSubmitting ? "ing..." : ""}</Button>
            <Button  onClick={() => setPreview(true)}>Preview</Button>
            </Stack>
            {/* <fieldset className="flex flex-col gap-4">
                    <legend >Tags(optional)</legend>
                    <TagsInput tagsRef={tagsRef}/>                    
            </fieldset> */}            
        </form>
        }
    </Box>)
}

export default CreatePostForm