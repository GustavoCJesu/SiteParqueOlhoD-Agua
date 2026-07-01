
import type { Metadata } from "next"
import { Aboreto } from "next/font/google"
import Image from 'next/image'
import Link from 'next/link'
import { MoveRight } from "lucide-react";

import style from './home.module.css'

export const metadata: Metadata = {
  title: "Parque Olho D'Água | Natureza e Aventura em Andradas, MG",
  description: "Descubra o Parque Olho D'Água em Andradas/MG: cachoeiras, trilhas, quadriciclo, restaurante self-service e muito mais. O refúgio natural perfeito para toda a família.",
  keywords: ["parque olho d'água", "andradas", "minas gerais", "parque ecológico", "cachoeiras andradas", "trilhas ecológicas", "ecoturismo sul de minas", "turismo natureza andradas"],
  alternates: { canonical: '/' },
  openGraph: {
    title: "Parque Olho D'Água | Natureza e Aventura em Andradas, MG",
    description: "Cachoeiras, trilhas, quadriciclo e restaurante em meio à natureza de Andradas, MG. Venha viver uma experiência única.",
    url: '/',
    images: [{ url: '/img/hero/heroHome.webp', width: 1200, height: 630, alt: "Parque Olho D'Água" }],
  },
}


const aboreto = Aboreto({
  subsets: ['latin'],
  weight: ['400'],
})

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  "name": "Parque Olho D'Água",
  "description": "Parque ecológico em Andradas, MG com cachoeiras, trilhas, quadriciclo, restaurante self-service, caiaques e pedalinhos.",
  "url": "https://parqueolhodagua.com.br",
  "telephone": "+5535999322462",
  "email": "contato@parqueolhodagua.com.br",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Estrada Andradas/Pocinhos do Rio Verde, Km 3, Zona Rural",
    "addressLocality": "Andradas",
    "addressRegion": "MG",
    "postalCode": "37842-899",
    "addressCountry": "BR"
  },
  "sameAs": [
    "https://www.instagram.com/parqueecologicoolhodagua",
    "https://www.facebook.com/share/17jDbrbBBV/"
  ],
  "image": "https://parqueolhodagua.com.br/img/hero/heroHome.webp",
  "touristType": ["Família", "Aventura", "Ecoturismo"]
}

export default function Home() {

  return (
    <section className='text-[#525252] w-full'>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className='flex flex-col md:flex-row justify-between w-full'>

        {/* Texto — padding menor no mobile */}
        <div className='w-full md:w-1/2 flex px-6 pt-10 md:pl-20 md:pt-20 flex-col text-left gap-4'>
          <h1 className={`text-3xl md:text-5xl ${aboreto.className} text-left`}>
            Seu refúgio natural em <br />Andradas.
          </h1>
          <p className='w-full md:w-full text-lg md:text-2xl text-left'>
            Um espaço preparado para você desacelerar, se reconectar e viver momentos especiais em meio à natureza de Andradas.
          </p>
          <a className={`${style.btnMaps} md:text-2xl self-start text-2`}>Como Chegar</a>
          <p className='text-lg md:text-2xl mt-1 md:mt-3'>
            Entrada <strong className='text-green-800'>Gratuita</strong>
          </p>
        </div>

        {/* Imagem — oculta no mobile ou reduzida */}
        <div className='w-full md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0 relative'>
          <Image
            className={`${style.bannerImg} hidden self-end w-full md:w-auto h-full lg:inline-block`}
            src='/img/hero/heroHome.webp'
            alt='Imagem de uma cachoeira do parque'
            width={900}
            height={300}
          />
          <div className="absolute inset-0 bg-linear-to-r from-white via-white/30 to-transparent w-1/2"></div>
        </div>

      </div>

      {/* Texto gigante — escala com a tela */}
      <div className='flex justify-center mx-auto overflow-hidden'>
        <h1 className={`text-[80px] sm:text-[150px] md:text-[200px] lg:text-[300px] ${style.txtRefugio}`}>
          REFÚGIO
        </h1>
      </div>

      <div className="flex flex-col items-center md:flex-row mx-auto px-4">

        {/* Imagem — ocupa tudo no mobile, metade no desktop */}
        <div className="w-full md:w-1/2 p-10 flex justify-center mb-6 md:mb-0 items-center">
          <Image
            className="rounded-br-[10px] rounded-tl-[10px] w-full md:max-w-110"
            src='/img/FotoParque (2).png'
            loading="eager"
            alt='Imagem aerea do parque'
            width={450}
            height={600}
          />
        </div>

        {/* Conteúdo — coluna no mobile, metade no desktop */}
        <div className="w-full md:w-1/2 flex flex-col gap-6 md:gap-10">

          <h1 className={`text-2xl md:text-[40px] w-full md:w-120 ${aboreto.className}`}>
            Um refúgio natural no <span className="text-[#1F6B3A]">coração</span> da cidade
          </h1>

          <p className="w-full md:w-150 text-base md:text-[20px]">
            Criado com o objetivo de proteger as fontes naturais e oferecer à população um espaço de lazer e convivência...
            <br /><br />
            Mais do que um ponto turístico, o Parque Olho D&apos;Água representa a valorização dos recursos naturais...
          </p>

          {/* Cards de stats — menores no mobile */}
          <div className={`${style.aboutHover} ${aboreto.className} border-2 items-center rounded flex justify-evenly text-center self-start w-full md:w-auto`}>
            <div className={`${style.infoAboutUs} rounded-l px-3 md:px-5`}>
              <h2 className="text-xl md:text-[30px] text-[#1F6B3A] font-bold">3 Km²</h2>
              <p className="text-sm md:text-base">Área verde</p>
            </div>
            <div className={`${style.infoAboutUs} px-3 md:px-5 border-r-2 border-l-2 items-center justify-center`}>
              <h2 className="text-xl md:text-[30px] text-[#1F6B3A] font-bold">+10</h2>
              <p className="text-sm md:text-base">Trilhas</p>
            </div>
            <div className={`${style.infoAboutUs} rounded-r px-3 md:px-5 md:items-center md:justify-center`}>
              <h2 className="text-xl md:text-[30px] text-[#1F6B3A] font-bold">100%</h2>
              <p className="text-sm md:text-base">Natural</p>
            </div>
          </div>

          {/* Botão — largura total no mobile, auto no desktop */}
          <div className={`${style.aboutHover} ${aboreto.className} self-start w-full md:w-auto`}>
            <Link href='#' className="flex justify-center text-7 md:text-1000 border w-full md:px-20 py-5 rounded relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-[#028F92] before:scale-x-0 before:origin-left hover:before:scale-x-100 before:transition before:duration-300 hover:text-white transition duration-500">
              <p className="flex items-center z-10">Conheça a historia completa <MoveRight /></p>
            </Link>
          </div>

        </div>
      </div>
      <div className="flex flex-col sm:flex-row flex-wrap mx-auto justify-around gap-8 my-10 md:my-20 px-4">

        <Link href='#' className="h-110">
          <div className={`h-full relative flex justify-center flex-col ${style.card} w-full sm:w-auto`}>
            <Image className={`${style.imgCard} w-full sm:w-75 h-full`} src='/img/cards/quadriciclo.png' alt='' width={300} height={400} />
            <div className={`${style.txtActivity}`}>
              <h2 className="text-xl md:text-[30px]">Quadriciclo</h2>
              <p className="text-xs md:text-[12px]">Aventure-se em trilhas cheias de emoção com nosso passeio de quadriciclo. Uma experiência divertida para todas as idades.</p>
            </div>
          </div>
        </Link>

        <Link href='#' className="h-110">
          <div className={`h-full relative flex justify-center flex-col ${style.card} w-full sm:w-auto`}>
            <Image className={`${style.imgCard} w-full sm:w-75 h-full`} src='/img/cards/caiaque.webp' alt='' width={300} height={400} />
            <div className={`${style.txtActivity}`}>
              <h2 className="text-xl md:text-[30px]">Caiaque</h2>
              <p className="text-xs md:text-[12px]">Passeio de caiaque guiado, seguro e ideal para todas as idades. Uma experiência leve para aproveitar a natureza e relaxar durante sua visita.</p>
            </div>
          </div>
        </Link>

        <Link href='#' className="h-110">
          <div className={`h-full relative flex justify-center flex-col ${style.card} w-full sm:w-auto`}>
            <Image className={`${style.imgCard} w-full sm:w-75 h-full`} src='/img/cards/pedalinho.webp' alt='' width={300} height={400} />
            <div className={`${style.txtActivity}`}>
              <h2 className="text-xl md:text-[30px]">Pedalinho</h2>
              <p className="text-xs md:text-[12px]">Passeio de pedalinho divertido e seguro, perfeito para todas as idades. Ideal para curtir momentos leves e relaxantes em meio à natureza.</p>
            </div>
          </div>
        </Link>

      </div>
      <div className="2-full flex justify-center my-10">
        <Link href='/services' className={`bg-[#028F92] text-white py-5 px-10 rounded text-[25px] ${style.btnSeeMore}`}>Ver Mais</Link>
      </div>
    </section>
  );
}
