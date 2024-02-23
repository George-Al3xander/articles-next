import { cookies } from "next/headers";
import {  NextResponse } from "next/server";


export async function GET() {   
    const hasToken = cookies().has("token_kinde_api")
    if(hasToken) {
        cookies().delete("token_kinde_api")
    }
    
    return NextResponse.redirect(process.env.KINDE_SITE_URL!);
}