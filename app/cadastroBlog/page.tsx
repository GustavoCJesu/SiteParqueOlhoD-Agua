'use client'
import { useState, FormEvent } from "react";
import Image from "next/image";
import { Plus, Trash2, Save, Eye, X, Leaf, AlertCircle, CheckCircle2 } from "lucide-react";

type Post = {
  id: number;
  titulo: string;
  resumo: string;
  conteudo: string[];
  categoria: string;
  data: string;
  leitura: string;
  autor: string;
  imagem: string;
  destaque?: boolean;
};

const categorias = ["Trilhas", "Aventura", "Fauna", "História", "Visitação"];

type Feedback = { tipo: "sucesso" | "erro"; texto: string } | null;

export default function CadastroBlog() {
  // Campos do formulário
  const [titulo, setTitulo] = useState("");
  const [resumo, setResumo] = useState("");
  const [paragrafos, setParagrafos] = useState<string[]>([""]);
  const [categoria, setCategoria] = useState(categorias[0]);
  const [autor, setAutor] = useState("");
  const [leitura, setLeitura] = useState("");
  const [imagem, setImagem] = useState("");
  const [destaque, setDestaque] = useState(false);

  // Lista local de posts cadastrados (substitua por chamada à API)
  const [postsCadastrados, setPostsCadastrados] = useState<Post[]>([]);
  const [preview, setPreview] = useState<Post | null>(null);
  const [feedback, setFeedback] = useState<Feedback>(null);

  const limparForm = () => {
    setTitulo("");
    setResumo("");
    setParagrafos([""]);
    setCategoria(categorias[0]);
    setAutor("");
    setLeitura("");
    setImagem("");
    setDestaque(false);
  };

  const atualizarParagrafo = (i: number, valor: string) => {
    setParagrafos((p) => p.map((par, idx) => (idx === i ? valor : par)));
  };

  const adicionarParagrafo = () => setParagrafos((p) => [...p, ""]);

  const removerParagrafo = (i: number) => {
    setParagrafos((p) => (p.length === 1 ? [""] : p.filter((_, idx) => idx !== i)));
  };

  const formatarDataHoje = () => {
    const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
    const d = new Date();
    return `${String(d.getDate()).padStart(2, "0")} ${meses[d.getMonth()]} ${d.getFullYear()}`;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFeedback(null);

    const paragrafosLimpos = paragrafos.map((p) => p.trim()).filter(Boolean);

    // Validação básica
    if (!titulo.trim() || !resumo.trim() || paragrafosLimpos.length === 0 || !autor.trim() || !imagem.trim()) {
      setFeedback({ tipo: "erro", texto: "Preencha todos os campos obrigatórios." });
      return;
    }

    const novoPost: Post = {
      id: Date.now(),
      titulo: titulo.trim(),
      resumo: resumo.trim(),
      conteudo: paragrafosLimpos,
      categoria,
      data: formatarDataHoje(),
      leitura: leitura.trim() || "5 min",
      autor: autor.trim(),
      imagem: imagem.trim(),
      destaque,
    };

    // 🔌 Aqui você integra com seu backend / banco de dados:
    // try {
    //   const res = await fetch("/api/posts", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(novoPost),
    //   });
    //   if (!res.ok) throw new Error();
    // } catch {
    //   setFeedback({ tipo: "erro", texto: "Não foi possível salvar. Tente novamente." });
    //   return;
    // }

    setPostsCadastrados((lista) => [novoPost, ...lista]);
    setFeedback({ tipo: "sucesso", texto: "Post cadastrado com sucesso." });
    limparForm();
  };

  const excluirPost = (id: number) => {
    setPostsCadastrados((lista) => lista.filter((p) => p.id !== id));
  };

  const inputBase =
    "w-full px-4 py-2.5 text-sm bg-[#f6f4ee] border border-[#1f2a1c]/15 rounded-sm focus:outline-none focus:border-[#3d5a2a] focus:ring-1 focus:ring-[#3d5a2a]/30 transition";

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#1f2a1c] font-sans">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#1f2a1c]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 lg:py-20">
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-[#3d5a2a] mb-4">
            Painel · Blog
          </span>
          <h1 className="font-serif text-4xl lg:text-5xl leading-tight max-w-3xl">
            Cadastrar nova <em className="text-[#3d5a2a]">publicação</em>.
          </h1>
          <p className="mt-4 text-[#1f2a1c]/70 max-w-xl">
            Preencha as informações abaixo. Você pode visualizar antes de publicar.
          </p>
        </div>
        <div className="absolute -bottom-12 -right-12 opacity-[0.06] pointer-events-none">
          <Leaf className="w-72 h-72 text-[#3d5a2a]" />
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12 grid lg:grid-cols-3 gap-10">
        {/* Formulário */}
        <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-8">
          {/* Feedback */}
          {feedback && (
            <div
              className={`flex items-center gap-3 px-4 py-3 rounded-sm border text-sm ${
                feedback.tipo === "sucesso"
                  ? "bg-[#3d5a2a]/10 border-[#3d5a2a]/30 text-[#3d5a2a]"
                  : "bg-red-50 border-red-300 text-red-700"
              }`}
            >
              {feedback.tipo === "sucesso" ? (
                <CheckCircle2 className="w-4 h-4 shrink-0" />
              ) : (
                <AlertCircle className="w-4 h-4 shrink-0" />
              )}
              <span>{feedback.texto}</span>
            </div>
          )}

          {/* Bloco: Informações principais */}
          <section className="bg-white/40 border border-[#1f2a1c]/10 rounded-sm p-6 lg:p-8 space-y-5">
            <h2 className="font-serif text-xl mb-1">Informações principais</h2>
            <p className="text-sm text-[#1f2a1c]/60 mb-4">Identificação do post no blog.</p>

            <div>
              <label className="block text-xs uppercase tracking-wider text-[#1f2a1c]/70 mb-2">
                Título <span className="text-[#3d5a2a]">*</span>
              </label>
              <input
                type="text"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                placeholder="Ex: Trilhas para iniciantes no parque"
                className={inputBase}
                maxLength={120}
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-[#1f2a1c]/70 mb-2">
                Resumo <span className="text-[#3d5a2a]">*</span>
              </label>
              <textarea
                value={resumo}
                onChange={(e) => setResumo(e.target.value)}
                placeholder="Uma chamada curta que aparece no card e no topo do post."
                rows={3}
                maxLength={240}
                className={`${inputBase} resize-none`}
              />
              <span className="text-xs text-[#1f2a1c]/50 mt-1 block">{resumo.length}/240</span>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#1f2a1c]/70 mb-2">
                  Categoria
                </label>
                <select
                  value={categoria}
                  onChange={(e) => setCategoria(e.target.value)}
                  className={inputBase}
                >
                  {categorias.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#1f2a1c]/70 mb-2">
                  Autor <span className="text-[#3d5a2a]">*</span>
                </label>
                <input
                  type="text"
                  value={autor}
                  onChange={(e) => setAutor(e.target.value)}
                  placeholder="Ex: Equipe do Parque"
                  className={inputBase}
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#1f2a1c]/70 mb-2">
                  Tempo de leitura
                </label>
                <input
                  type="text"
                  value={leitura}
                  onChange={(e) => setLeitura(e.target.value)}
                  placeholder="5 min"
                  className={inputBase}
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#1f2a1c]/70 mb-2">
                  URL da imagem de capa <span className="text-[#3d5a2a]">*</span>
                </label>
                <input
                  type="url"
                  value={imagem}
                  onChange={(e) => setImagem(e.target.value)}
                  placeholder="https://..."
                  className={inputBase}
                />
              </div>
            </div>

            <label className="flex items-center gap-3 pt-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={destaque}
                onChange={(e) => setDestaque(e.target.checked)}
                className="w-4 h-4 accent-[#3d5a2a]"
              />
              <span className="text-sm">
                Marcar como <strong>post em destaque</strong> (aparece no topo do blog)
              </span>
            </label>
          </section>

          {/* Bloco: Conteúdo */}
          <section className="bg-white/40 border border-[#1f2a1c]/10 rounded-sm p-6 lg:p-8">
            <div className="flex items-center justify-between mb-1">
              <h2 className="font-serif text-xl">Conteúdo do post</h2>
              <button
                type="button"
                onClick={adicionarParagrafo}
                className="inline-flex items-center gap-1.5 text-sm text-[#3d5a2a] hover:underline"
              >
                <Plus className="w-4 h-4" /> Adicionar parágrafo
              </button>
            </div>
            <p className="text-sm text-[#1f2a1c]/60 mb-5">
              Cada parágrafo é exibido separadamente no modal de leitura.
            </p>

            <div className="space-y-4">
              {paragrafos.map((par, i) => (
                <div key={i} className="relative">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs uppercase tracking-wider text-[#1f2a1c]/60">
                      Parágrafo {i + 1}
                    </span>
                    {paragrafos.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removerParagrafo(i)}
                        className="text-[#1f2a1c]/40 hover:text-red-600 transition"
                        aria-label="Remover parágrafo"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                  <textarea
                    value={par}
                    onChange={(e) => atualizarParagrafo(i, e.target.value)}
                    placeholder="Escreva o parágrafo..."
                    rows={4}
                    className={`${inputBase} resize-y`}
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Ações */}
          <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">
            <button
              type="button"
              onClick={limparForm}
              className="px-5 py-2.5 text-sm border border-[#1f2a1c]/20 rounded-sm hover:border-[#1f2a1c]/40 transition"
            >
              Limpar
            </button>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm bg-[#3d5a2a] text-[#f6f4ee] rounded-sm hover:bg-[#2f4621] transition font-medium"
            >
              <Save className="w-4 h-4" /> Publicar post
            </button>
          </div>
        </form>

        {/* Sidebar: Preview e lista */}
        <aside className="space-y-8">
          {/* Mini preview do card */}
          <div className="bg-white/40 border border-[#1f2a1c]/10 rounded-sm p-6 sticky top-6">
            <h3 className="font-serif text-lg mb-1">Pré-visualização</h3>
            <p className="text-xs text-[#1f2a1c]/60 mb-5">É assim que o card aparece no blog.</p>

            <div className="relative aspect-4/3 overflow-hidden rounded-sm mb-4 bg-[#eeeae0]">
              {imagem ? (
                <Image
                  src={imagem}
                  alt={titulo || "Pré-visualização"}
                  fill
                  sizes="400px"
                  className="object-cover"
                  unoptimized
                  onError={() => {}}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-[#1f2a1c]/30 text-xs">
                  Capa aparece aqui
                </div>
              )}
            </div>

            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#3d5a2a] mb-2">
              <span>{categoria}</span>
              <span className="w-4 h-px bg-[#3d5a2a]/50"></span>
              <span className="text-[#1f2a1c]/60">{formatarDataHoje()}</span>
            </div>
            <h4 className="font-serif text-lg leading-snug mb-2 min-h-[1.5rem]">
              {titulo || <span className="text-[#1f2a1c]/30">Título do post...</span>}
            </h4>
            <p className="text-xs text-[#1f2a1c]/70 leading-relaxed line-clamp-3">
              {resumo || <span className="text-[#1f2a1c]/30">O resumo aparece aqui.</span>}
            </p>
          </div>

          {/* Lista de cadastrados */}
          <div className="bg-white/40 border border-[#1f2a1c]/10 rounded-sm p-6">
            <h3 className="font-serif text-lg mb-1">Cadastrados nesta sessão</h3>
            <p className="text-xs text-[#1f2a1c]/60 mb-5">
              {postsCadastrados.length === 0
                ? "Nenhum post ainda."
                : `${postsCadastrados.length} ${postsCadastrados.length === 1 ? "post" : "posts"}.`}
            </p>

            <ul className="space-y-3">
              {postsCadastrados.map((p) => (
                <li
                  key={p.id}
                  className="flex items-start gap-3 pb-3 border-b border-[#1f2a1c]/10 last:border-0"
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{p.titulo}</p>
                    <p className="text-xs text-[#1f2a1c]/60">
                      {p.categoria} · {p.data}
                      {p.destaque && <span className="text-[#3d5a2a] ml-2">★ destaque</span>}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setPreview(p)}
                    className="text-[#1f2a1c]/50 hover:text-[#3d5a2a] transition"
                    aria-label="Visualizar"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => excluirPost(p.id)}
                    className="text-[#1f2a1c]/50 hover:text-red-600 transition"
                    aria-label="Excluir"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      {/* Modal de preview do post completo */}
      {preview && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-[#1f2a1c]/70 backdrop-blur-sm"
          onClick={() => setPreview(null)}
        >
          <article
            onClick={(e) => e.stopPropagation()}
            className="relative bg-[#f6f4ee] w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-sm shadow-2xl"
          >
            <button
              type="button"
              onClick={() => setPreview(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-[#f6f4ee]/90 backdrop-blur flex items-center justify-center hover:bg-white transition shadow-md"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="relative aspect-video w-full">
              <Image
                src={preview.imagem}
                alt={preview.titulo}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="px-6 md:px-12 py-10">
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#3d5a2a] mb-5">
                <span>{preview.categoria}</span>
                <span className="w-8 h-px bg-[#3d5a2a]"></span>
                <span className="text-[#1f2a1c]/60">{preview.data}</span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-5">{preview.titulo}</h2>
              <div className="text-sm text-[#1f2a1c]/60 mb-8 pb-8 border-b border-[#1f2a1c]/10">
                Por {preview.autor} · {preview.leitura} de leitura
              </div>
              <p className="text-lg text-[#1f2a1c]/80 leading-relaxed mb-6 font-serif italic">
                {preview.resumo}
              </p>
              <div className="space-y-5 text-[#1f2a1c]/85 leading-relaxed">
                {preview.conteudo.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </article>
        </div>
      )}
    </div>
  );
}
