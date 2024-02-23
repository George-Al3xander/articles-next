import {  Box} from "@mui/material"
import Select from 'react-select';
import {categories} from "../../../public/json/categories.json"
import { ControlledInputProps } from "@/types/type"
import { Controller } from "react-hook-form"
import { FormError, reactSelectStyles } from "../mui/styled";

export const castToOption = (str: string | null | undefined) => {
  if(!str) return null

  return {value: str, label: str.charAt(0).toUpperCase() + str.slice(1) }
}

const CategorySelect = ({control, watch,formState: {errors},defaultValue}:  ControlledInputProps<string>) => {
  const value = watch("category")
  const cats = categories.map((cat) => ({value: cat, label: cat.charAt(0).toUpperCase() + cat.slice(1)}))
  
  return (
    <Box>
      <Controller 
          control={control}
          name="category"
          render={({field: {onChange}}) => (
            <Select
              placeholder="Select category" 
              value={castToOption(value)}
              isSearchable={false} 
              defaultValue={(categories.includes(defaultValue ?? "") && castToOption(defaultValue))}
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