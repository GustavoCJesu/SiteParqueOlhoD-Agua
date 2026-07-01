'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import { Search, Clock, ArrowRight, Leaf, X } from "lucide-react";

export type Post = {
  id: string;
  titulo: string;
  resumo: string;
  conteudo: string[];
  categoria: string;
  created_at: string;
  leitura: string;
  autor: string;
  imagem: string;
  destaque?: boolean;
};

const categorias = ["Tudo", "Trilhas", "Aventura", "Fauna", "História", "Visitação"];

function formatarData(iso: string) {
  const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
  const d = new Date(iso);
  return `${String(d.getDate()).padStart(2, "0")} ${meses[d.getMonth()]} ${d.getFullYear()}`;
}

export default function BlogPreview({ posts }: { posts: Post[] }) {
  const [filtro, setFiltro] = useState<string>("Tudo");
  const [busca, setBusca] = useState<string>("");
  const [postAtivo, setPostAtivo] = useState<Post | null>(null);

  const destaque = posts.find((p) => p.destaque);
  const lista = posts
    .filter((p) => !p.destaque)
    .filter((p) => (filtro === "Tudo" ? true : p.categoria === filtro))
    .filter((p) =>
      busca.trim() === ""
        ? true
        : p.titulo.toLowerCase().includes(busca.toLowerCase()) ||
          p.resumo.toLowerCase().includes(busca.toLowerCase())
    );

  useEffect(() => {
    if (!postAtivo) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setPostAtivo(null);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [postAtivo]);

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#1f2a1c] font-sans">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-[#3d5a2a] mb-6">
            Diário do parque
          </span>
          <h1 className="font-serif text-5xl lg:text-7xl leading-[1.05] max-w-4xl">
            Histórias, trilhas e descobertas <em className="text-[#3d5a2a]">do Olho D&apos;Água</em>.
          </h1>
          <p className="mt-6 text-lg text-[#1f2a1c]/70 max-w-2xl">
            Um espaço para contar o que acontece no parque — da rotina das nascentes
            às novidades dos passeios. Leitura curta, conteúdo de quem conhece o lugar.
          </p>
        </div>
        <div className="absolute -bottom-12 -right-12 opacity-[0.06] pointer-events-none">
          <Leaf className="w-96 h-96 text-[#3d5a2a]" />
        </div>
      </section>

      {/* Filtros e busca */}
      <section className="border-y border-[#1f2a1c]/10 bg-[#eeeae0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {categorias.map((cat) => (
              <button
                key={cat}
                onClick={() => setFiltro(cat)}
                className={`px-4 py-1.5 text-sm rounded-full border transition ${
                  filtro === cat
                    ? "bg-[#3d5a2a] text-[#f6f4ee] border-[#3d5a2a]"
                    : "border-[#1f2a1c]/20 hover:border-[#3d5a2a] hover:text-[#3d5a2a]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#1f2a1c]/50" />
            <input
              type="text"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              placeholder="Buscar no blog..."
              className="w-full pl-9 pr-3 py-2 text-sm bg-[#f6f4ee] border border-[#1f2a1c]/15 rounded-full focus:outline-none focus:border-[#3d5a2a]"
            />
          </div>
        </div>
      </section>

      {/* Post em destaque */}
      {destaque && filtro === "Tudo" && busca === "" && (
        <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
          <button
            type="button"
            onClick={() => setPostAtivo(destaque)}
            className="grid lg:grid-cols-2 gap-10 group text-left w-full cursor-pointer"
          >
            <div className="relative aspect-4/3 overflow-hidden rounded-sm">
              <Image
                src={destaque.imagem}
                alt={destaque.titulo}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition duration-700"
                priority
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#3d5a2a] mb-5">
                <span>Em destaque</span>
                <span className="w-8 h-px bg-[#3d5a2a]"></span>
                <span>{destaque.categoria}</span>
              </div>
              <h2 className="font-serif text-3xl lg:text-5xl leading-tight mb-5 group-hover:text-[#3d5a2a] transition">
                {destaque.titulo}
              </h2>
              <p className="text-[#1f2a1c]/70 text-lg mb-6">{destaque.resumo}</p>
              <div className="flex items-center gap-5 text-sm text-[#1f2a1c]/60 mb-8">
                <span>{formatarData(destaque.created_at)}</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" /> {destaque.leitura}
                </span>
              </div>
              <span className="inline-flex items-center gap-2 text-[#3d5a2a] font-medium">
                Ler artigo completo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </span>
            </div>
          </button>
        </section>
      )}

      {/* Grid de posts */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-24">
        <div className="flex items-end justify-between mb-10 border-b border-[#1f2a1c]/15 pb-4">
          <h3 className="font-serif text-2xl">
            {filtro === "Tudo" ? "Todas as publicações" : filtro}
          </h3>
          <span className="text-sm text-[#1f2a1c]/60">
            {lista.length} {lista.length === 1 ? "artigo" : "artigos"}
          </span>
        </div>

        {lista.length === 0 ? (
          <p className="text-[#1f2a1c]/60 py-10">Nada encontrado. Tente outro termo ou categoria.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
            {lista.map((post) => (
              <button
                key={post.id}
                type="button"
                onClick={() => setPostAtivo(post)}
                className="group block text-left w-full cursor-pointer"
              >
                <div className="relative aspect-4/3 overflow-hidden rounded-sm mb-5">
                  <Image
                    src={post.imagem}
                    alt={post.titulo}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#3d5a2a] mb-3">
                  <span>{post.categoria}</span>
                  <span className="w-6 h-px bg-[#3d5a2a]/50"></span>
                  <span className="text-[#1f2a1c]/60">{formatarData(post.created_at)}</span>
                </div>
                <h4 className="font-serif text-xl leading-snug mb-3 group-hover:text-[#3d5a2a] transition">
                  {post.titulo}
                </h4>
                <p className="text-sm text-[#1f2a1c]/70 mb-4 leading-relaxed">
                  {post.resumo}
                </p>
                <div className="flex items-center justify-between text-xs text-[#1f2a1c]/60">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3 h-3" /> {post.leitura} de leitura
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition text-[#3d5a2a]" />
                </div>
              </button>
            ))}
          </div>
        )}
      </section>

      {/* Modal de post */}
      {postAtivo && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="post-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-[#1f2a1c]/70 backdrop-blur-sm"
          onClick={() => setPostAtivo(null)}
        >
          <article
            onClick={(e) => e.stopPropagation()}
            className="relative bg-[#f6f4ee] w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-sm shadow-2xl"
          >
            <button
              type="button"
              onClick={() => setPostAtivo(null)}
              aria-label="Fechar"
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-[#f6f4ee]/90 backdrop-blur flex items-center justify-center hover:bg-white transition shadow-md"
            >
              <X className="w-5 h-5 text-[#1f2a1c]" />
            </button>

            <div className="relative aspect-video w-full">
              <Image
                src={postAtivo.imagem}
                alt={postAtivo.titulo}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
              />
            </div>

            <div className="px-6 md:px-12 py-10">
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#3d5a2a] mb-5">
                <span>{postAtivo.categoria}</span>
                <span className="w-8 h-px bg-[#3d5a2a]"></span>
                <span className="text-[#1f2a1c]/60">{formatarData(postAtivo.created_at)}</span>
              </div>

              <h2
                id="post-modal-title"
                className="font-serif text-3xl md:text-4xl leading-tight mb-5"
              >
                {postAtivo.titulo}
              </h2>

              <div className="flex items-center gap-5 text-sm text-[#1f2a1c]/60 mb-8 pb-8 border-b border-[#1f2a1c]/10">
                {postAtivo.autor && <span>Por {postAtivo.autor}</span>}
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" /> {postAtivo.leitura} de leitura
                </span>
              </div>

              <p className="text-lg text-[#1f2a1c]/80 leading-relaxed mb-6 font-serif italic">
                {postAtivo.resumo}
              </p>

              <div className="space-y-5 text-[#1f2a1c]/85 leading-relaxed">
                {postAtivo.conteudo?.map((paragrafo, i) => (
                  <p key={i}>{paragrafo}</p>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-[#1f2a1c]/10 flex items-center justify-between">
                <span className="text-sm text-[#1f2a1c]/60">
                  Gostou do conteúdo? Compartilhe com quem ama o parque.
                </span>
                <button
                  type="button"
                  onClick={() => setPostAtivo(null)}
                  className="text-sm text-[#3d5a2a] font-medium hover:underline"
                >
                  Voltar ao blog
                </button>
              </div>
            </div>
          </article>
        </div>
      )}
    </div>
  );
}
