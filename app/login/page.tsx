'use client'
import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { Leaf, LogIn, AlertCircle } from 'lucide-react'

export default function Login() {
  const [usuario, setUsuario] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setErro('')
    setLoading(true)

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ usuario, senha }),
      })

      if (res.ok) {
        router.push('/admin/blog')
        router.refresh()
      } else {
        setErro('Usuário ou senha inválidos.')
      }
    } catch {
      setErro('Erro de conexão. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#f6f4ee] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">

        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#14494A]/10 mb-4">
            <Leaf className="w-7 h-7 text-[#14494A]" />
          </div>
          <h1 className="text-2xl font-serif text-[#1f2a1c]">Área restrita</h1>
          <p className="text-sm text-[#1f2a1c]/60 mt-1">Parque Olho D&apos;Água — Painel</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white border border-[#1f2a1c]/10 rounded-lg p-8 space-y-5 shadow-sm"
        >
          {erro && (
            <div className="flex items-center gap-2 text-sm text-red-600 bg-red-50 border border-red-200 rounded px-3 py-2.5">
              <AlertCircle className="w-4 h-4 shrink-0" />
              {erro}
            </div>
          )}

          <div>
            <label className="block text-xs uppercase tracking-wider text-[#1f2a1c]/60 mb-1.5">
              Usuário
            </label>
            <input
              type="text"
              value={usuario}
              onChange={e => setUsuario(e.target.value)}
              autoComplete="username"
              required
              disabled={loading}
              className="w-full px-4 py-2.5 text-sm bg-[#f6f4ee] border border-[#1f2a1c]/15 rounded focus:outline-none focus:border-[#14494A] focus:ring-1 focus:ring-[#14494A]/20 transition disabled:opacity-60"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-[#1f2a1c]/60 mb-1.5">
              Senha
            </label>
            <input
              type="password"
              value={senha}
              onChange={e => setSenha(e.target.value)}
              autoComplete="current-password"
              required
              disabled={loading}
              className="w-full px-4 py-2.5 text-sm bg-[#f6f4ee] border border-[#1f2a1c]/15 rounded focus:outline-none focus:border-[#14494A] focus:ring-1 focus:ring-[#14494A]/20 transition disabled:opacity-60"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 py-3 bg-[#14494A] text-white text-sm rounded hover:bg-[#028F92] transition disabled:opacity-60 font-medium"
          >
            {loading ? (
              'Entrando...'
            ) : (
              <>
                <LogIn className="w-4 h-4" />
                Entrar
              </>
            )}
          </button>
        </form>

      </div>
    </div>
  )
}
