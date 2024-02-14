"use server"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import {loadEnvConfig} from "@next/env"
loadEnvConfig(process.cwd())

type ApiUser = {
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

const kindeReqHeaders = {
    Accept:'application/json',
    Authorization:`Bearer ${process.env.KINDE_API_ACCESS_TOKEN}`
};

const {getPermission, isAuthenticated, getUser} =  getKindeServerSession()




export const getUserInfo = async (userId: string)  => {
    try {
        const res = await fetch(`${process.env.KINDE_ISSUER_URL!}/api/v1/user?id=${userId}`, {
            method: "GET",
            headers: kindeReqHeaders
        })       
        const {first_name,last_name,picture,id,created_on} = await res.json() as ApiUser
        return {family_name:last_name,given_name:first_name,picture,id,created_on};

    } catch (error: {message: string} | any) {        
        return {success: false, message: error.message ?? "Something went wrong"}
    }   
}



export const getCurrUserAdminStatus = async () : Promise<boolean> => {
    const canAccept = await getPermission("accept:post");
    const canReject = await getPermission("reject:post");
    const canDeleteAny = await getPermission("delete:anypost");
    const canEditAny = await getPermission("edit:anypost");
    const isAdmin = [canAccept, canReject, canDeleteAny, canEditAny].every((t) => t?.isGranted === true);

    return isAdmin
}


export const getCurrAuthStatus = async () => {
    const isLogged = await isAuthenticated();

    return isLogged
}

export const getCurrUser = async () => {
    return await getUser();
}
