"use client"

import { getKindeReqHeaders } from "../../lib/kinde/server-actions";



export default function TokenComp () {
    const getToken = async () => {
        
        await getKindeReqHeaders
       
    }
    return(<button onClick={getToken}>Test token</button>)
}