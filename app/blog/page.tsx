import { Construction } from 'lucide-react'
import Link from 'next/link'

export default function Blog() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-[#F2F2F2] text-[#525252] px-6 text-center">
            <Construction className="w-20 h-20 text-[#028F92] mb-6" strokeWidth={1.5} />
            <h1 className="text-4xl md:text-5xl font-bold text-[#14494A] mb-4">
                Em Desenvolvimento
            </h1>
            <p className="text-lg md:text-xl max-w-md mb-8">
                Nosso blog está sendo preparado com muito cuidado. Em breve você encontrará novidades sobre o parque aqui!
            </p>
            <Link
                href="/"
                className="py-3 px-8 bg-linear-to-r from-[#14494A] to-[#028F92] text-white rounded-lg text-lg transition-transform hover:scale-105"
            >
                Voltar ao início
            </Link>
        </main>
    )
}
