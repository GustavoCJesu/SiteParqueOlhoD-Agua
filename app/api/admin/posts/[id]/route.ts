import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const body = await request.json()
  const { titulo, resumo, conteudo, categoria, autor, imagem, leitura, destaque } = body

  if (!titulo || !resumo || !conteudo?.length || !categoria || !autor || !imagem) {
    return NextResponse.json({ error: 'Campos obrigatórios ausentes.' }, { status: 400 })
  }

  const { error } = await supabase
    .from('posts')
    .update({ titulo, resumo, conteudo, categoria, autor, imagem, leitura: leitura || '5 min', destaque: destaque ?? false })
    .eq('id', id)

  if (error) {
    console.error(error)
    return NextResponse.json({ error: 'Erro ao atualizar post.' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}

export async function DELETE(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  const { error } = await supabase.from('posts').delete().eq('id', id)

  if (error) {
    console.error(error)
    return NextResponse.json({ error: 'Erro ao deletar post.' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
