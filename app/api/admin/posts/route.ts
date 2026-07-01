import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET() {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) return NextResponse.json({ error: 'Erro ao buscar posts.' }, { status: 500 })
  return NextResponse.json({ posts: data })
}

export async function POST(request: Request) {
  const body = await request.json()

  const { titulo, resumo, conteudo, categoria, autor, imagem, leitura, destaque } = body

  if (!titulo || !resumo || !conteudo?.length || !categoria || !autor || !imagem) {
    return NextResponse.json({ error: 'Campos obrigatórios ausentes.' }, { status: 400 })
  }

  const { data, error } = await supabase
    .from('posts')
    .insert({ titulo, resumo, conteudo, categoria, autor, imagem, leitura: leitura || '5 min', destaque: destaque ?? false })
    .select('id')
    .single()

  if (error) {
    console.error(error)
    return NextResponse.json({ error: 'Erro ao salvar post.' }, { status: 500 })
  }

  return NextResponse.json({ ok: true, id: data.id }, { status: 201 })
}
