import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Catch any variation of spaces or url-encoded %20 spaces
  if (pathname.includes(' ') || pathname.includes('%20')) {
    // Strip all spaces out completely
    const cleanedPathname = pathname.replace(/\s+|%20/g, '')
    
    const url = request.nextUrl.clone()
    url.pathname = cleanedPathname

    // Return a 301 Permanent Redirect
    return NextResponse.redirect(url, 301)
  }

  return NextResponse.next()
}

export const config = {
  // Run on all page paths, ignoring static images/assets
  matcher: '/((?!_next/static|_next/image|favicon.ico).*)',
}
