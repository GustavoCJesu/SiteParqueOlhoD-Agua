'use client'

import Image from "next/image";
import Link from "next/link";

const posts = [
  {
    slug: "trilhas-para-iniciantes",
    category: "Natureza",
    title: "As melhores trilhas para iniciantes no Parque",
    excerpt:
      "Descubra os caminhos mais acessíveis dentro do parque, com paisagens deslumbrantes e segurança para toda a família explorar a mata.",
    date: "8 Maio, 2025",
    readTime: "5 min",
    image: "/img/FotoParque (2).png",
  },
  {
    slug: "passeio-de-caiaque",
    category: "Aventura",
    title: "Passeio de caiaque: tudo que você precisa saber",
    excerpt:
      "O passeio de caiaque é uma das atividades mais amadas por nossos visitantes. Veja como se preparar e o que esperar durante a experiência.",
    date: "2 Maio, 2025",
    readTime: "4 min",
    image: "/img/FotoParque (2).png",
  },
  {
    slug: "historia-do-parque",
    category: "História",
    title: "A origem do Parque Olho D'Água e sua missão ambiental",
    excerpt:
      "Conheça como o parque nasceu com o propósito de proteger as fontes naturais de Andradas e se tornou um símbolo de preservação regional.",
    date: "22 Abril, 2025",
    readTime: "6 min",
    image: "/img/FotoParque (2).png",
  },
  {
    slug: "fauna-flora-andradas",
    category: "Biodiversidade",
    title: "Fauna e flora nativas: o que você pode encontrar aqui",
    excerpt:
      "Do tucano-de-bico-verde às orquídeas silvestres, o parque abriga espécies únicas da Mata Atlântica. Um guia visual para os apaixonados pela natureza.",
    date: "14 Abril, 2025",
    readTime: "7 min",
    image: "/img/FotoParque (2).png",
  },
  {
    slug: "quadriciclo-adventure",
    category: "Aventura",
    title: "Quadriciclo: adrenalina em meio à mata fechada",
    excerpt:
      "Para quem busca emoção, o passeio de quadriciclo corta trilhas únicas dentro do parque. Saiba como agendar e o que vestir para essa aventura.",
    date: "5 Abril, 2025",
    readTime: "3 min",
    image: "/img/FotoParque (2).png",
  },
  {
    slug: "como-preservar",
    category: "Sustentabilidade",
    title: "Como ser um visitante consciente e preservar o parque",
    excerpt:
      "Pequenas atitudes fazem uma enorme diferença. Confira nossas dicas para aproveitar o parque de forma responsável e sustentável.",
    date: "28 Março, 2025",
    readTime: "4 min",
    image: "/img/FotoParque (2).png",
  },
];

const categories = ["Todos", "Natureza", "Aventura", "História", "Biodiversidade", "Sustentabilidade"];

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <main className="blog-page">
      {/* ── NAVBAR ── */}
      <nav className="navbar">
        <ul className="nav-links nav-left">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/galery">Galeria</Link></li>
          <li><Link href="/services">Serviços</Link></li>
        </ul>

        <Link href="/" className="nav-logo">
          <div className="logo-placeholder">
            <span>🌿</span>
            <span className="logo-text">Olho D&apos;Água</span>
          </div>
        </Link>

        <ul className="nav-links nav-right">
          <li><Link href="/blog" className="active">Blog</Link></li>
          <li><Link href="/contactUs">Contate-nos</Link></li>
          <li><Link href="/aboutUs">Sobre Nós</Link></li>
        </ul>
      </nav>

      {/* ── HERO ── */}
      <section className="blog-hero">
        <div className="hero-bg-overlay" />
        <div className="hero-content">
          <span className="hero-eyebrow">Histórias da natureza</span>
          <h1 className="hero-title">
            Blog do<br />
            <em>Parque</em>
          </h1>
          <p className="hero-sub">
            Trilhas, aventuras, biodiversidade e tudo que torna nosso refúgio especial.
          </p>
        </div>
        <div className="hero-scroll-hint">
          <span>↓</span>
        </div>
      </section>

      {/* ── CATEGORIES ── */}
      <section className="categories-bar">
        <div className="container">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`cat-btn${cat === "Todos" ? " active" : ""}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ── FEATURED POST ── */}
      <section className="featured-section container">
        <Link href={`/blog/${featured.slug}`} className="featured-card">
          <div className="featured-img-wrap">
            <div className="featured-img-placeholder">
              <span className="featured-img-icon">🌲</span>
            </div>
            <span className="featured-badge">Em destaque</span>
          </div>
          <div className="featured-text">
            <span className="post-category">{featured.category}</span>
            <h2 className="featured-title">{featured.title}</h2>
            <p className="post-excerpt">{featured.excerpt}</p>
            <div className="post-meta">
              <span>{featured.date}</span>
              <span className="meta-dot">·</span>
              <span>{featured.readTime} de leitura</span>
            </div>
            <span className="read-more-btn">
              Ler artigo <span className="arrow">→</span>
            </span>
          </div>
        </Link>
      </section>

      {/* ── GRID ── */}
      <section className="posts-grid container">
        <h3 className="section-label">Artigos recentes</h3>
        <div className="grid">
          {rest.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="post-card">
              <div className="post-img-wrap">
                <div className="post-img-placeholder">
                  <span className="post-img-icon">🌿</span>
                </div>
                <span className="post-cat-badge">{post.category}</span>
              </div>
              <div className="post-card-body">
                <h4 className="post-title">{post.title}</h4>
                <p className="post-excerpt">{post.excerpt}</p>
                <div className="post-meta">
                  <span>{post.date}</span>
                  <span className="meta-dot">·</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="load-more-wrap">
          <button className="load-more-btn">Carregar mais artigos</button>
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section className="newsletter-section">
        <div className="nl-inner container">
          <span className="nl-icon">🌱</span>
          <h3 className="nl-title">Fique por dentro da natureza</h3>
          <p className="nl-sub">Receba novidades, eventos e curiosidades do parque direto no seu e-mail.</p>
          <form className="nl-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="seu@email.com" className="nl-input" />
            <button type="submit" className="nl-btn">Inscrever</button>
          </form>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="footer-bg-overlay" />
        <div className="footer-inner container">
          <div className="footer-brand">
            <span className="footer-logo">🌿 Olho D&apos;Água</span>
            <p className="footer-tagline">
              O Parque Ecológico Olho D&apos;Água — seu refúgio natural em Andradas, MG.
            </p>
          </div>
          <div className="footer-links">
            <span className="footer-links-title">Navegação</span>
            <Link href="/">Home</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/services">Serviços</Link>
            <Link href="/aboutUs">Sobre Nós</Link>
            <Link href="/contactUs">Contate-nos</Link>
          </div>
          <div className="footer-social">
            <span className="footer-links-title">Redes Sociais</span>
            <a href="https://www.instagram.com/parqueecologicoolhodagua" target="_blank" rel="noopener">Instagram</a>
            <a href="https://www.facebook.com/share/17jDbrbBBV/" target="_blank" rel="noopener">Facebook</a>
            <a href="https://wa.me/5535999322462" target="_blank" rel="noopener">WhatsApp</a>
          </div>
        </div>
        <p className="footer-copy">© {new Date().getFullYear()} Parque Olho D&rsquo;Água. Todos os direitos reservados.</p>
      </footer>

      <style jsx>{`
        /* ── TOKENS ── */
        :root {
          --green-deep: #1a3a2a;
          --green-mid: #2d5a3d;
          --green-light: #4a8c5c;
          --green-pale: #c8e6c9;
          --gold: #c9a84c;
          --gold-light: #e8c97a;
          --cream: #f5f0e8;
          --cream-dark: #ede6d8;
          --text-dark: #1a1a1a;
          --text-mid: #444;
          --text-light: #777;
          --radius: 16px;
          --radius-sm: 8px;
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .blog-page {
          font-family: 'Georgia', 'Times New Roman', serif;
          background: var(--cream);
          color: var(--text-dark);
          min-height: 100vh;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* ── NAVBAR ── */
        .navbar {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 40px;
          height: 72px;
          background: rgba(26, 58, 42, 0.97);
          backdrop-filter: blur(10px);
        }

        .nav-links {
          display: flex;
          gap: 32px;
          list-style: none;
        }

        .nav-links a {
          color: rgba(255,255,255,0.8);
          text-decoration: none;
          font-family: 'Trebuchet MS', sans-serif;
          font-size: 13px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          transition: color 0.2s;
        }

        .nav-links a:hover,
        .nav-links a.active {
          color: var(--gold-light);
        }

        .nav-logo {
          text-decoration: none;
        }

        .logo-placeholder {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .logo-text {
          color: white;
          font-family: 'Georgia', serif;
          font-size: 18px;
          font-style: italic;
          font-weight: 400;
          letter-spacing: 0.02em;
        }

        /* ── HERO ── */
        .blog-hero {
          position: relative;
          height: 560px;
          display: flex;
          align-items: center;
          background: linear-gradient(
            135deg,
            var(--green-deep) 0%,
            var(--green-mid) 50%,
            #3a7a4a 100%
          );
          overflow: hidden;
        }

        .blog-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 80% 60% at 70% 50%, rgba(74,140,92,0.25) 0%, transparent 70%),
            url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }

        .hero-bg-overlay {
          position: absolute;
          right: 0; top: 0; bottom: 0;
          width: 45%;
          background: linear-gradient(to left, rgba(45,90,61,0.5), transparent);
          background-image: repeating-linear-gradient(
            -30deg,
            transparent,
            transparent 40px,
            rgba(255,255,255,0.015) 40px,
            rgba(255,255,255,0.015) 41px
          );
        }

        .hero-content {
          position: relative;
          z-index: 2;
          padding: 0 80px;
          max-width: 680px;
        }

        .hero-eyebrow {
          display: inline-block;
          font-family: 'Trebuchet MS', sans-serif;
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--gold-light);
          margin-bottom: 20px;
          padding: 6px 16px;
          border: 1px solid rgba(201,168,76,0.4);
          border-radius: 20px;
        }

        .hero-title {
          font-family: 'Georgia', serif;
          font-size: clamp(52px, 7vw, 88px);
          font-weight: 400;
          line-height: 1;
          color: white;
          letter-spacing: -0.02em;
          margin-bottom: 20px;
        }

        .hero-title em {
          color: var(--gold-light);
          font-style: italic;
        }

        .hero-sub {
          font-size: 17px;
          line-height: 1.7;
          color: rgba(255,255,255,0.75);
          font-family: 'Trebuchet MS', sans-serif;
          max-width: 420px;
        }

        .hero-scroll-hint {
          position: absolute;
          bottom: 36px;
          left: 80px;
          color: rgba(255,255,255,0.4);
          font-size: 20px;
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }

        /* ── CATEGORIES BAR ── */
        .categories-bar {
          background: white;
          border-bottom: 1px solid rgba(0,0,0,0.07);
          position: sticky;
          top: 72px;
          z-index: 50;
        }

        .categories-bar .container {
          display: flex;
          gap: 4px;
          padding-top: 12px;
          padding-bottom: 12px;
          overflow-x: auto;
        }

        .cat-btn {
          flex-shrink: 0;
          padding: 8px 20px;
          border: 1px solid var(--green-pale);
          background: transparent;
          color: var(--text-mid);
          font-family: 'Trebuchet MS', sans-serif;
          font-size: 13px;
          letter-spacing: 0.04em;
          border-radius: 24px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .cat-btn:hover {
          background: var(--green-pale);
          color: var(--green-deep);
        }

        .cat-btn.active {
          background: var(--green-deep);
          color: white;
          border-color: var(--green-deep);
        }

        /* ── FEATURED ── */
        .featured-section {
          padding: 72px 24px 0;
        }

        .featured-card {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          border-radius: var(--radius);
          overflow: hidden;
          background: white;
          box-shadow: 0 4px 40px rgba(26,58,42,0.12);
          text-decoration: none;
          color: inherit;
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }

        .featured-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 56px rgba(26,58,42,0.2);
        }

        .featured-img-wrap {
          position: relative;
          min-height: 400px;
          background: linear-gradient(
            135deg,
            var(--green-mid) 0%,
            #3a7a4a 60%,
            var(--green-light) 100%
          );
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .featured-img-wrap::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at center, rgba(255,255,255,0.05) 0%, transparent 70%);
        }

        .featured-img-icon {
          font-size: 80px;
          opacity: 0.6;
          position: relative;
          z-index: 1;
        }

        .featured-badge {
          position: absolute;
          top: 24px;
          left: 24px;
          background: var(--gold);
          color: white;
          font-family: 'Trebuchet MS', sans-serif;
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 6px 14px;
          border-radius: 20px;
          font-weight: 600;
          z-index: 2;
        }

        .featured-text {
          padding: 56px 52px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: white;
        }

        .post-category {
          font-family: 'Trebuchet MS', sans-serif;
          font-size: 11px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--green-light);
          font-weight: 600;
          margin-bottom: 16px;
        }

        .featured-title {
          font-size: 30px;
          font-weight: 400;
          line-height: 1.3;
          color: var(--green-deep);
          margin-bottom: 20px;
          font-family: 'Georgia', serif;
        }

        .post-excerpt {
          font-size: 16px;
          line-height: 1.8;
          color: var(--text-mid);
          margin-bottom: 28px;
          font-family: 'Trebuchet MS', sans-serif;
        }

        .post-meta {
          font-family: 'Trebuchet MS', sans-serif;
          font-size: 13px;
          color: var(--text-light);
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 28px;
        }

        .meta-dot { color: var(--green-pale); }

        .read-more-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'Trebuchet MS', sans-serif;
          font-size: 14px;
          letter-spacing: 0.06em;
          color: var(--green-deep);
          font-weight: 600;
          text-transform: uppercase;
        }

        .arrow {
          transition: transform 0.2s;
        }

        .featured-card:hover .arrow {
          transform: translateX(6px);
        }

        /* ── POSTS GRID ── */
        .posts-grid {
          padding: 72px 24px 80px;
        }

        .section-label {
          font-family: 'Trebuchet MS', sans-serif;
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--text-light);
          margin-bottom: 36px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--cream-dark);
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }

        .post-card {
          background: white;
          border-radius: var(--radius);
          overflow: hidden;
          text-decoration: none;
          color: inherit;
          box-shadow: 0 2px 16px rgba(26,58,42,0.07);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .post-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 48px rgba(26,58,42,0.15);
        }

        .post-img-wrap {
          position: relative;
          height: 200px;
          background: linear-gradient(
            135deg,
            var(--green-mid) 0%,
            var(--green-light) 100%
          );
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .post-img-wrap::before {
          content: '';
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            45deg,
            transparent,
            transparent 20px,
            rgba(255,255,255,0.03) 20px,
            rgba(255,255,255,0.03) 21px
          );
        }

        .post-img-icon {
          font-size: 40px;
          opacity: 0.5;
          position: relative;
          z-index: 1;
        }

        .post-cat-badge {
          position: absolute;
          bottom: 12px;
          left: 12px;
          background: rgba(26,58,42,0.85);
          color: var(--gold-light);
          font-family: 'Trebuchet MS', sans-serif;
          font-size: 10px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 12px;
          font-weight: 600;
        }

        .post-card-body {
          padding: 28px 28px 32px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .post-title {
          font-family: 'Georgia', serif;
          font-size: 19px;
          font-weight: 400;
          line-height: 1.4;
          color: var(--green-deep);
          margin-bottom: 14px;
        }

        .post-card-body .post-excerpt {
          font-size: 14px;
          flex: 1;
          margin-bottom: 20px;
        }

        .post-card-body .post-meta {
          margin-bottom: 0;
        }

        /* ── LOAD MORE ── */
        .load-more-wrap {
          margin-top: 56px;
          text-align: center;
        }

        .load-more-btn {
          padding: 16px 48px;
          border: 2px solid var(--green-deep);
          background: transparent;
          color: var(--green-deep);
          font-family: 'Trebuchet MS', sans-serif;
          font-size: 13px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          border-radius: 40px;
          cursor: pointer;
          transition: all 0.3s;
        }

        .load-more-btn:hover {
          background: var(--green-deep);
          color: white;
        }

        /* ── NEWSLETTER ── */
        .newsletter-section {
          background: linear-gradient(135deg, var(--green-deep), var(--green-mid));
          padding: 80px 24px;
          text-align: center;
        }

        .nl-inner {
          max-width: 560px;
          margin: 0 auto;
        }

        .nl-icon {
          display: block;
          font-size: 40px;
          margin-bottom: 20px;
        }

        .nl-title {
          font-family: 'Georgia', serif;
          font-size: 32px;
          font-weight: 400;
          color: white;
          margin-bottom: 12px;
        }

        .nl-sub {
          font-family: 'Trebuchet MS', sans-serif;
          color: rgba(255,255,255,0.7);
          font-size: 15px;
          line-height: 1.7;
          margin-bottom: 36px;
        }

        .nl-form {
          display: flex;
          gap: 8px;
          max-width: 420px;
          margin: 0 auto;
        }

        .nl-input {
          flex: 1;
          padding: 14px 20px;
          border: 1px solid rgba(255,255,255,0.3);
          background: rgba(255,255,255,0.1);
          border-radius: 32px;
          color: white;
          font-family: 'Trebuchet MS', sans-serif;
          font-size: 14px;
          outline: none;
          transition: border-color 0.2s;
        }

        .nl-input::placeholder { color: rgba(255,255,255,0.5); }

        .nl-input:focus {
          border-color: var(--gold-light);
          background: rgba(255,255,255,0.15);
        }

        .nl-btn {
          padding: 14px 28px;
          background: var(--gold);
          color: white;
          border: none;
          border-radius: 32px;
          font-family: 'Trebuchet MS', sans-serif;
          font-size: 13px;
          letter-spacing: 0.06em;
          cursor: pointer;
          transition: background 0.2s;
          font-weight: 600;
        }

        .nl-btn:hover { background: var(--gold-light); color: var(--green-deep); }

        /* ── FOOTER ── */
        .footer {
          position: relative;
          background: var(--green-deep);
          padding: 64px 0 0;
          overflow: hidden;
        }

        .footer-bg-overlay {
          position: absolute;
          inset: 0;
          background: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.02' fill-rule='evenodd'/%3E%3C/svg%3E");
        }

        .footer-inner {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 48px;
          padding-bottom: 48px;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        .footer-logo {
          font-family: 'Georgia', serif;
          font-size: 22px;
          font-style: italic;
          color: white;
          display: block;
          margin-bottom: 16px;
        }

        .footer-tagline {
          font-family: 'Trebuchet MS', sans-serif;
          font-size: 14px;
          color: rgba(255,255,255,0.55);
          line-height: 1.7;
          max-width: 280px;
        }

        .footer-links,
        .footer-social {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-links-title {
          font-family: 'Trebuchet MS', sans-serif;
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--gold-light);
          margin-bottom: 4px;
        }

        .footer-links a,
        .footer-social a {
          font-family: 'Trebuchet MS', sans-serif;
          font-size: 14px;
          color: rgba(255,255,255,0.6);
          text-decoration: none;
          transition: color 0.2s;
        }

        .footer-links a:hover,
        .footer-social a:hover {
          color: white;
        }

        .footer-copy {
          position: relative;
          z-index: 1;
          text-align: center;
          font-family: 'Trebuchet MS', sans-serif;
          font-size: 12px;
          color: rgba(255,255,255,0.35);
          padding: 20px 0;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          .navbar { padding: 0 20px; }
          .nav-links { gap: 16px; }
          .hero-content { padding: 0 40px; }
          .featured-card { grid-template-columns: 1fr; }
          .featured-img-wrap { min-height: 240px; }
          .featured-text { padding: 36px 32px; }
          .grid { grid-template-columns: repeat(2, 1fr); }
          .footer-inner { grid-template-columns: 1fr 1fr; }
        }

        @media (max-width: 600px) {
          .nav-links.nav-left { display: none; }
          .nav-links.nav-right { display: none; }
          .hero-content { padding: 0 24px; }
          .hero-title { font-size: 48px; }
          .grid { grid-template-columns: 1fr; }
          .footer-inner { grid-template-columns: 1fr; }
          .nl-form { flex-direction: column; }
        }
      `}</style>
    </main>
  );
}
