"use server"

import { ApiUser } from "@/types/type"
import {loadEnvConfig} from "@next/env"
import { cookies } from "next/headers"




export const getKindeReqHeaders =  () => {  
    const token = cookies().get("token_kinde_api");          
    return {
        Accept:'application/json',
        Authorization:`Bearer ${token!.value as string}`
    };
}



export const getUserInfo = async (userId: string)  => {
    loadEnvConfig(process.cwd())

    const kindeReqHeaders = getKindeReqHeaders();
    try {
        const res = await fetch(`${process.env.KINDE_ISSUER_URL!}/api/v1/user?id=${userId}`, {
            method: "GET",
            headers: kindeReqHeaders
        })       
        if(res.status == 403) throw new Error("Invalid token")
        const user = await res.json() as ApiUser 
       // if(user.errors) throw new Error(errors[0].mee)
        
        const {first_name,last_name,picture,id,created_on} = user
        return {family_name:last_name,given_name:first_name,picture,id,created_on};

    } catch (error: {message: string} | any) {        
        return {success: false, message: error.message ?? "Something went wrong"}
    }   
}


export const getToken = async () => {
    try {
        const res = await fetch(`${process.env.KINDE_ISSUER_URL}/oauth2/token`, {
            method: "POST",
            headers: {
                "content-type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                    audience: `${process.env.KINDE_ISSUER_URL}/api`,
                    grant_type: "client_credentials",
                    client_id: process.env.KINDE_CLIENT_ID!,
                    client_secret: process.env.KINDE_CLIENT_SECRET!,
                }),
        })    
            if(res.status != 200) throw new Error(res.statusText)
        
            const data = await res.json() as {access_token: string, expires_in: number, scope:string,token_type:string}

            return {success: true,...data}
    } catch (error) {
        return {success: false, message: error}
    }
}