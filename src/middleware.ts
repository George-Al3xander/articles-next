import { NextRequest , NextResponse} from 'next/server'
import { getCurrAuthStatus } from '../lib/kinde/funcs'
import { NextApiResponse } from 'next';
import { cookies } from "next/headers"
import { getToken } from '../lib/kinde/server-actions';


export async function middleware(request: NextRequest) {
  const isLogged = await getCurrAuthStatus();
  const response = NextResponse.next()

    if(isLogged) {
      const  hasToken = request.cookies.get('token_kinde_api')

      if(!hasToken) {
          const tokenRes = await getToken()
          if(tokenRes.success) {
            const {access_token, expires_in} = (tokenRes as {access_token: string, expires_in:number});
            response.cookies.set({
                name: "token_kinde_api",
                value: access_token,
                httpOnly: true,
                secure: process.env.NODE_ENV !== "development",
                maxAge: expires_in > 85000 ? 85000 : expires_in,
                sameSite: "strict",
                path: "/"
            }) 
          }                            
      }
    } else {
      if (request.nextUrl.pathname.startsWith('/posts/create')) {
            return NextResponse.redirect(new URL('/api/auth/login', request.url));        
        }
    }

  return response
}

