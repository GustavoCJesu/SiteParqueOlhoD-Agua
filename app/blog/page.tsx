import type { Metadata } from "next"
import { supabase } from '@/lib/supabase'
import BlogPreview from './blogPreview'
import type { Post } from './blogPreview'

export const metadata: Metadata = {
  title: "Blog",
  description: "Artigos sobre trilhas, cachoeiras, fauna local e novidades do Parque Olho D'Água em Andradas, MG. Conteúdo de quem conhece e ama a natureza do lugar.",
  keywords: ["blog parque andradas", "trilhas andradas mg", "fauna parque ecológico", "dicas visita parque andradas", "ecoturismo sul de minas gerais"],
  alternates: { canonical: '/blog' },
  openGraph: {
    title: "Blog | Parque Olho D'Água",
    description: "Histórias, trilhas e descobertas do Parque Olho D'Água. Leitura curta, conteúdo de quem conhece o lugar.",
    url: '/blog',
    images: [{ url: '/img/hero/heroHome.webp', width: 1200, height: 630, alt: "Blog Parque Olho D'Água" }],
  },
}

export const revalidate = 60 // revalida a cada 60 segundos

export default async function BlogPage() {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('publicado', true)
    .order('created_at', { ascending: false })

  if (error) console.error('Erro ao buscar posts:', error)

  const posts: Post[] = data ?? []

  return <BlogPreview posts={posts} />
}
