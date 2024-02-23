import Creatable from 'react-select/creatable';
import  {  MultiValue} from 'react-select';
import {  Controller} from 'react-hook-form';
import { Box} from '@mui/material';
import { ControlledInputProps } from '@/types/type';
import { FormError, reactSelectStyles } from '../mui/styled';
import { castToOption } from './category-select';



const TagsSelect = ({control,watch,formState: {errors},defaultValue}:ControlledInputProps<string[]>) => {
    const value = (watch("tags") 
                  ? watch("tags").map((val) => castToOption(val)) 
                  : null) as MultiValue<string> | null
    
    const isError = Boolean(errors && errors.tags)
    
    const defVal =  (defaultValue 
                    && defaultValue.map((value) => castToOption(value)) 
                    ) as MultiValue<string> | undefined
    




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
                    value={value}                   
                    isClearable
                    styles={reactSelectStyles({isError: errors.tags != undefined})}
                    isOptionDisabled={() => errors.tags?.type == "too_big"}
                />
            )}
        />               
       {isError && <FormError>{errors.tags!.message}</FormError>}       
    </Box>)

}

export default TagsSelect