import { NextResponse } from 'next/server'

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

export async function POST(request: Request) {
  const { usuario, senha } = await request.json()

  const adminUser = process.env.ADMIN_USER
  const adminPass = process.env.ADMIN_PASSWORD
  const adminSecret = process.env.ADMIN_SECRET

  if (!adminUser || !adminPass || !adminSecret) {
    return NextResponse.json({ error: 'Servidor mal configurado.' }, { status: 500 })
  }

  if (usuario !== adminUser || senha !== adminPass) {
    await new Promise(r => setTimeout(r, 500))
    return NextResponse.json({ error: 'Credenciais inválidas.' }, { status: 401 })
  }

  const token = await computeHMAC(`${adminUser}:${adminPass}`, adminSecret)

  const response = NextResponse.json({ ok: true })
  response.cookies.set('parque_auth', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 8,
    path: '/',
  })

  return response
}
