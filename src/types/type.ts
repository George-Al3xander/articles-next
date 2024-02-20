import { Control, FieldErrors } from "react-hook-form"


export type FieldVal = {title: string, content: string, tags: string[],category: string}

export type ControlledInputProps<TDefVal> = {
    control: Control<FieldVal>, 
    errors: FieldErrors<FieldVal>,
    defaultValue?: TDefVal
}

