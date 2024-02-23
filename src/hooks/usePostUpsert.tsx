import { useForm } from "react-hook-form"
import { PostCreationSchema, TPostCreationSchema } from "../../lib/zod/schema"
import { zodResolver } from "@hookform/resolvers/zod"
import {  onSuccessFunction } from "@/types/type"
import { FormEvent } from "react"
import toast from 'react-hot-toast';




const usePostUpsert = ({onValidationSuccess}:{onValidationSuccess: onSuccessFunction}) => {   
    
    const formReturn = useForm<TPostCreationSchema>({
        resolver: zodResolver(PostCreationSchema)
    })

    const {handleSubmit,setError} = formReturn

    const onSubmit = async (data: TPostCreationSchema) => {
     
        const res = await fetch("/api/validatepost", {
            method: "POST",
            body: JSON.stringify(data)
        })
    
        if(!res.ok) {
            alert("Sumbtitting failed")
            return 
        }
        
        const resData = await res.json()
        if(resData.errors) {
            const errors = resData.errors;
            
            if(errors.title) {
                setError("title", {
                    type: "server",
                    message: errors.title
                })
            } 
            else if(errors.content) {             
                setError("content", {
                    type: "server",
                    message: errors.content
                })
            } 
            else if(errors.tags) {             
                setError("tags", {
                    type: "server",
                    message: errors.tags
                })
            } 
            else if(errors.category) {             
                setError("category", {
                    type: "server",
                    message: errors.category
                })
            }
            
            else {
                alert("Bruh")
            }
            return 
        }
      
        const submitRes = await onValidationSuccess({...data,tags: JSON.stringify(data.tags)})
        if(!submitRes.success) {
            toast.error(submitRes.error ?? "Something went wrong");
        } else {
           toast.success('Post created');            
            //reset();                   
        }
        
    }

    const submitForm = (e: FormEvent<HTMLFormElement>) => {
        handleSubmit(onSubmit)(e)
    }

    return {...formReturn, submitForm}
}


export default usePostUpsert