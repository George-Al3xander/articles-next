import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getCurrAuthStatus } from '../lib/kinde/funcs'

 

export async function middleware(request: NextRequest) {

    
    
    const isLogged = await getCurrAuthStatus()
    if(!isLogged) return NextResponse.redirect(new URL('/', request.url));        
    if (request.nextUrl.pathname.startsWith('/post/create')) {
    }
     
      if (request.nextUrl.pathname.startsWith('/dashboard')) {
        // This logic is only applied to /dashboard
      }
}
 

export const config = {
  matcher: ['/posts/create', "/posts"],
}