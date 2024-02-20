import { FieldVal } from "@/types/type"
import { TextField, TextFieldProps } from "@mui/material"
import { FieldErrors, UseFormReturn } from "react-hook-form"




const TitleContentInputs = ({isPreview, register, formState: {errors}, initialData}:{isPreview: boolean, initialData?: FieldVal} & UseFormReturn<FieldVal>) => {
    
    const inputs : ({name: "title" | "content", isHidden?: boolean} & TextFieldProps)[] = [
        {
            multiline: false,
            name:"title"            
        },
        {
            multiline: true,
            minRows: 3,
            name:"content",
            isHidden: isPreview         
        }
    ]
    
    return(inputs.map(({name,isHidden,...props}) => {
        if(isHidden) return null
        return <TextField 
                    required   
                    type={"text"}                
                    defaultValue={initialData ? initialData[name] : ""} 
                    placeholder={`Enter ${name}`}
                    error={errors[name] != undefined}
                    helperText={(errors[name] && errors) ? errors[name]!.message : "" }
                    label={name.charAt(0).toUpperCase()+name.slice(1,name.length)} 
                    {...register(name)}  
                    {...props}                    
                    />
    }))
}

export default TitleContentInputs