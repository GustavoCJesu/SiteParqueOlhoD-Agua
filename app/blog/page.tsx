import { supabase } from '@/lib/supabase'
import BlogPreview from './blogPreview'
import type { Post } from './blogPreview'

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
