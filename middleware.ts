import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

async function computeHMAC(data: string, secret: string): Promise<string> {
  const encoder = new TextEncoder()
  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  )
  const sig = await crypto.subtle.sign('HMAC', key, encoder.encode(data))
  return Array.from(new Uint8Array(sig))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('')
}

async function isValidToken(token: string): Promise<boolean> {
  const secret = process.env.ADMIN_SECRET
  const user = process.env.ADMIN_USER
  const pass = process.env.ADMIN_PASSWORD
  if (!secret || !user || !pass) return false
  const expected = await computeHMAC(`${user}:${pass}`, secret)
  return token === expected
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const token = request.cookies.get('parque_auth')?.value
  const authenticated = token ? await isValidToken(token) : false

  if (pathname.startsWith('/admin') && !authenticated) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  if (pathname === '/login' && authenticated) {
    return NextResponse.redirect(new URL('/admin/blog', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*', '/login'],
}
