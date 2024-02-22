import { TPostCreationSchema } from "./schema"


//data: TPostCreationSchema, path: keyof TPostCreationSchema

type returnFunc =  (data: any) => boolean
type returnLengthFunc =  (data: number) => returnFunc

export function blankCheck (path: string) : returnFunc {
    return function (data: TPostCreationSchema)  {
        if(typeof data[path as "title"] == "object") return false
        return  /\S/.test(data[path as "title"] as string)
    }
}
export const blankMessage = (path: string) => ({message: `${path.charAt(0).toUpperCase() + path.slice(1)} can't be blank`,path: [path]})


export function lengthMinCheck  (path: string) : returnLengthFunc {
   return function (minLength: number)  {
        return function (data: TPostCreationSchema)  {
            if(typeof data[path as "title"] == "object") return false
            return  data[path as "title"].replaceAll(" ", "").length >= minLength
        }
   }
}

export function lengthMinMessage  (path: string) : (data: number) => {message:string, path:  (string | number)[]} {
    return function (minLength: number)  {
        return {message: `${path.charAt(0).toUpperCase() + path.slice(1)} must be at least ${minLength} characters in length`,path: [path]}
    }
 }



