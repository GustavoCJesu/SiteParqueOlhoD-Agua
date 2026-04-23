
import { Aboreto } from "next/font/google"
import Image from 'next/image'
import Link from 'next/link'
import { MoveRight } from "lucide-react";

import style from './home.module.css'


const aboreto = Aboreto({
  subsets: ['latin'],
  weight: ['400'],
})

export default function Home() {


  return (
    <section className='mt-5 text-[#525252]'>

      <div className='flex justify-between'>
        <div className='w-1/2 flex pl-20 pt-20 flex-col text-left'>
          <h1 className={`text-5xl ${aboreto.className} text-left`}>Seu refúgio natural em <br />Andradas.</h1>
          <p className='w-160 text-2xl text-left'>Um espaço preparado para você desacelerar, se reconectar e viver momentos especiais em meio à natureza de Andradas.</p>
          <a className={` ${style.btnMaps}`}>Como Chegar</a>

          <p className='text-2xl mt-3'>Entrada <strong className='text-green-800'>Gratuita</strong></p>
        </div>
        <div className='w-1/2 flex justify-end'>
          <Image className={`${style.bannerImg} self-end`} src='/img/BannerHome.png' alt='Imagem de uma cachoeira do parque' width={900} height={300} />
        </div>
      </div>
      <div className='flex justify-center mx-auto'>
        <h1 className={`text-[300px] ${style.txtRefugio}`}>
          REFÚGIO
        </h1>
      </div>

      <div className="flex mx-auto">
        <div className="w-1/2 flex justify-center">
          <Image className="rounded-br-[10px] rounded-tl-[10px]" src='/img/FotoParque (2).png' loading="eager" alt='Imagem aerea do parque' width={450} height={600} />
        </div>
        <div className="w-1/2 flex flex-col gap-10">
          <h1 className={`text-[40px] w-120 ${aboreto.className}`}>
            Um refúgio natural no <span className="text-[#1F6B3A]">coração</span> da cidade
          </h1>
          <p className={`w-150 text-[20px]`}>
            Criado com o objetivo de proteger as fontes naturais e oferecer à população um espaço de lazer e convivência, o parque reúne áreas verdes, trilhas e ambientes tranquilos, proporcionando momentos de descanso, contemplação e educação ambiental.
            <br /><br />
            Mais do que um ponto turístico, o Parque Olho D’Água representa a valorização dos recursos naturais e o compromisso da cidade com a preservação ambiental.
          </p>
          <div className={`${style.aboutHover} ${aboreto.className} flex justify-evenly text-center self-start`}>
            <div className={`${style.infoAboutUs} border-t-2 border-b-2 border-l-2 rounded-l`}>
              <h2 className="text-[30px] text-[#1F6B3A] text-bold">3 Km²</h2>
              <p>Área verde</p>
            </div>
            <div className={`${style.infoAboutUs} border-t-2 border-b-2 border-r-2 border-l-2`}>
              <h2 className="text-[30px] text-[#1F6B3A] text-bold">+10</h2>
              <p>Trilhas</p>
            </div>
            <div className={`${style.infoAboutUs} border-t-2 border-b-2 border-r-2 rounded-r`}>
              <h2 className="text-[30px] text-[#1F6B3A] text-bold">100%</h2>
              <p>Natural</p>
            </div>
          </div>
          <div className={`${style.aboutHover} ${aboreto.className} self-start`}>
            <Link href='#' className="flex text-xl border px-20 py-5 rounded relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-[#028F92] before:scale-x-0 before:origin-left hover:before:scale-x-100 before:transition before:duration-300 hover:text-white transition duration-500">
              <p className="flex items-center z-10">Conheça a historia completa <MoveRight /></p>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex mx-auto justify-around my-20">
        <Link href='#'>
          <div className={`relative flex justify-center flex-col ${style.card}`}>
            <Image className={`${style.imgCard}`} src='/img/cards/quadriciclo.png' alt='' width={300} height={400} />
            <div className={`${style.txtActivity}`}>
              <h2 className="text-[30px]">Quadriciclo</h2>
              <p className="text-[12px]">Aventure-se em trilhas cheias de emoção com nosso passeio de quadriciclo. Uma experiência divertida para todas as idades.</p>
            </div>
          </div>
        </Link>
        <Link href='#'>
          <div className={`relative flex justify-center flex-col ${style.card}`}>
            <Image className={`${style.imgCard}`} src='/img/cards/caiaque.webp' alt='' width={300} height={400} />
            <div className={`${style.txtActivity}`}>
              <h2 className="text-[30px]">Caiaque</h2>
              <p className="text-[12px]">Passeio de caiaque guiado, seguro e ideal para todas as idades. Uma experiência leve para aproveitar a natureza e relaxar durante sua visita.</p>
            </div>
          </div>
        </Link>
        <Link href='#'>
          <div className={`relative flex justify-center flex-col ${style.card}`}>
            <Image className={`${style.imgCard}`} src='/img/cards/pedalinho.webp' alt='' width={300} height={400} />
            <div className={`${style.txtActivity}`}>
              <h2 className="text-[30px]">Pedalinho</h2>
              <p className="text-[12px]">Passeio de pedalinho divertido e seguro, perfeito para todas as idades. Ideal para curtir momentos leves e relaxantes em meio à natureza.</p>
            </div>
          </div>
        </Link>
      </div>
      <div className="2-full flex justify-center">
        <Link href='#' className={`bg-[#028F92] text-white py-5 px-10 rounded text-[25px] ${style.btnSeeMore}`}>Ver Mais</Link>
      </div>
    </section>
  );
}
