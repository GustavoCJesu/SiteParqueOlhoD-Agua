# 🌿 Parque Ecológico Olho D'Água — Site Institucional

Site institucional **fullstack** para um parque ecológico em Andradas, MG, com blog integrado e painel administrativo próprio. Desenvolvido com foco em performance, SEO e uma boa experiência tanto para visitantes quanto para a equipe que mantém o conteúdo.

> 🚧 Projeto em desenvolvimento.

## ✨ Funcionalidades

- **Páginas institucionais**: Home, Sobre Nós, Serviços e Galeria de fotos.
- **Blog integrado** com listagem e página de posts.
- **Painel administrativo** protegido por login, para criar, editar e excluir posts do blog (CRUD completo).
- **Autenticação** própria via cookie assinado (HMAC) e middleware de proteção de rotas `/admin`.
- **Upload de imagens** para os posts do blog.
- **Formulário de contato** com envio de e-mail via SMTP.
- **SEO** com `sitemap.ts` e `robots.ts` gerados dinamicamente pelo Next.js.
- **Animações** de entrada e transições suaves com Anime.js.
- Layout **responsivo**, construído com Tailwind CSS e DaisyUI.

## 🛠️ Tecnologias

**Frontend**
- [Next.js 16](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- TypeScript / JSX
- [Tailwind CSS 4](https://tailwindcss.com/) + [DaisyUI](https://daisyui.com/)
- [Anime.js](https://animejs.com/) — animações
- [Lucide React](https://lucide.dev/) — ícones

**Backend**
- Next.js API Routes (Route Handlers)
- [Supabase](https://supabase.com/) — banco de dados (PostgreSQL) e persistência dos posts
- [Nodemailer](https://nodemailer.com/) — envio de e-mails do formulário de contato
- Middleware de autenticação com HMAC (Web Crypto API)

## 📁 Estrutura do projeto

```
app/
├── page.tsx                 # Home
├── aboutUs/                 # Sobre nós
├── services/                 # Serviços
├── galery/                   # Galeria de fotos
├── blog/                     # Listagem e posts do blog
├── contactUs/                 # Contato
├── login/                    # Login do painel admin
├── admin/blog/                # Painel de administração do blog
└── api/
    ├── admin/posts/           # CRUD de posts (protegido)
    ├── auth/login|logout/      # Autenticação
    └── send-email/             # Envio do formulário de contato

components/                  # Header, Footer, Carousel, Formulário, Upload de imagem
lib/supabase.ts              # Cliente do Supabase
middleware.ts                # Proteção das rotas /admin
```

## 🚀 Como rodar localmente

Pré-requisitos: [Node.js](https://nodejs.org/) 18+ e uma conta [Supabase](https://supabase.com/).

```bash
# Clonar o repositório
git clone https://github.com/GustavoCJesu/SiteParqueOlhoD-Agua.git
cd SiteParqueOlhoD-Agua

# Instalar dependências
npm install

# Criar o arquivo de variáveis de ambiente
cp .env.example .env.local   # ou crie manualmente, veja abaixo

# Rodar em desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

### Variáveis de ambiente

Crie um arquivo `.env.local` na raiz do projeto com:

```env
# Supabase
SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=

# Envio de e-mail (formulário de contato)
SMTP_USER=
SMTP_PASS=

# Autenticação do painel administrativo
ADMIN_USER=
ADMIN_PASSWORD=
ADMIN_SECRET=
```

## 📦 Scripts disponíveis

| Comando         | Descrição                          |
|-----------------|--------------------------------------|
| `npm run dev`   | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera o build de produção             |
| `npm run start` | Inicia o servidor em modo produção   |
| `npm run lint`  | Executa o ESLint                     |

## 👤 Autor

**Gustavo Jesuino**
[LinkedIn](https://linkedin.com/in/gustavojesuino0411) · [GitHub](https://github.com/GustavoCJesu)
