
import { useState } from 'react';
import Creatable, { useCreatable } from 'react-select/creatable';
import  { ActionMeta, MultiValue } from 'react-select';
import { Control, Controller, FieldErrors } from 'react-hook-form';

import { object } from 'zod';
import { Box, Typography } from '@mui/material';
import { ControlledInputProps } from '@/types/type';
import { FormError, reactSelectStyles } from '../mui/styled';



const TagsSelect = ({control,errors,defaultValue}:ControlledInputProps) => {

    
   const isError = Boolean(errors && errors.tags)
   
    return(<Box>
        <Controller 
            control={control} 
            name='tags' 
            render={({field: {onChange}}) => (
                <Creatable                  
                    onChange={(newValue: MultiValue<string>) => {
                        //@ts-ignore
                        const stringified = newValue.map(({value}) => value)                        
                        onChange(stringified)
                    }} 
                    defaultValue={(defaultValue && JSON.parse(defaultValue))}
                    isMulti
                    styles={reactSelectStyles({isError: errors.tags != undefined})}
                    isOptionDisabled={() => errors.tags?.type == "too_big"}
                />
            )}
        />
       {isError &&
         <FormError>{errors.tags!.message}</FormError>
       }
       
    </Box>)

}

export default TagsSelect