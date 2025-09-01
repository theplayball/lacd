import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Allow access to event registration page
  if (pathname === '/register/event') {
    return NextResponse.next()
  }

  // Allow access to maintenance page itself
  if (pathname === '/maintenance') {
    return NextResponse.next()
  }

  // Allow access to API routes
  if (pathname.startsWith('/api/')) {
    return NextResponse.next()
  }

  // Allow access to static files and images
  if (pathname.startsWith('/_next/') || pathname.startsWith('/favicon.ico') || pathname.startsWith('/logo.png')) {
    return NextResponse.next()
  }

  // Redirect all other routes to maintenance page
  return NextResponse.redirect(new URL('/maintenance', request.url))
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|logo.png).*)',
  ],
}
