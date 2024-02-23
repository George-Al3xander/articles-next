import { Control, FieldErrors, UseFormReturn } from "react-hook-form"
import { NewPostAsParam } from "../../lib/db/methods"
import { TPostCreationSchema } from "../../lib/zod/schema"



export type ControlledInputProps<TDefVal> = {
     defaultValue?: TDefVal  
} & UseFormReturn<TPostCreationSchema>

export type onSuccessFunction = (data: Omit<NewPostAsParam, "authorId">)  => Promise<{success: boolean, error?: string}>

export type ApiUser = {
    id: string,
    provided_id: string,
    preferred_email: string,
    last_name: string,
    first_name: string,
    is_suspended: true,
    picture: string,
    total_sign_ins: boolean,
    failed_sign_ins: boolean,
    last_signed_in: string,
    created_on: string,
}