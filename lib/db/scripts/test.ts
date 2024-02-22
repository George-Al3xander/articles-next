
import { getToken } from "../../kinde/server-actions"
import { getPosts } from "../methods"
import {loadEnvConfig} from "@next/env"


const projectDir = process.cwd()
loadEnvConfig(projectDir)




const main = async () => {

   
    const token = await getToken()
    console.log(token)

}

main()