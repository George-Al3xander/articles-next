import { Autocomplete, Box, FormControl, InputLabel, MenuItem,  TextField } from "@mui/material"
import Select, { SingleValue } from 'react-select';
import categories from "../../categories.json"
import { ControlledInputProps, FieldVal } from "@/types/type"
import { Controller, UseFormRegister } from "react-hook-form"
import { FormError, reactSelectStyles } from "../mui/styled";



const CategorySelect = ({control, errors,defaultValue}:  ControlledInputProps) => {
  
  const cats = categories.categories.map((cat) => ({value: cat, label: cat}))
  
  return (
    <Box>
      <Controller 
          control={control}
          name="category"
          render={({field: {onChange}}) => (
            <Select 
              placeholder="Select category" 
              isSearchable={false} 
              defaultInputValue={defaultValue as string}
              styles={reactSelectStyles({isError: errors.category != undefined})}
            //@ts-ignore
              onChange={({value})=> onChange(value)} 
              options={cats}
            />
          )}
      />

      {(errors != undefined && errors.category != undefined) && 
      <FormError>{errors.category!.message}</FormError>
       }
      
    
    </Box>
)}

export default CategorySelect