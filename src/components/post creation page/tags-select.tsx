import Creatable from 'react-select/creatable';
import  {  MultiValue} from 'react-select';
import {  Controller} from 'react-hook-form';


import { Box} from '@mui/material';
import { ControlledInputProps } from '@/types/type';
import { FormError, reactSelectStyles } from '../mui/styled';



const TagsSelect = ({control,errors,defaultValue}:ControlledInputProps<string[]>) => {

   const isError = Boolean(errors && errors.tags)
   const defVal =  (defaultValue != undefined 
                    ? defaultValue.map((value) => ({value,label: value})) 
                    : undefined) as MultiValue<string> | undefined
    return(<Box>
        <Controller 
            control={control} 
            name='tags' 
            render={({field: {onChange}}) => (
                <Creatable   
                    placeholder="Write some tags"              
                    onChange={(newValue: MultiValue<string>) => {
                        //@ts-ignore
                        const stringified = newValue.map(({value}) => value)                        
                        onChange(stringified)
                    }} 
                    defaultValue={defVal}
                    isMulti
                    styles={reactSelectStyles({isError: errors.tags != undefined})}
                    isOptionDisabled={() => errors.tags?.type == "too_big"}
                />
            )}
        />
       {isError && <FormError>{errors.tags!.message}</FormError>}       
    </Box>)

}

export default TagsSelect