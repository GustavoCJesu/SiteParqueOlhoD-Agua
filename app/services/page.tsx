import type { Metadata } from "next"
import Image from 'next/image'
import { Aboreto } from "next/font/google"
import Carousel from "@/components/Carousel/Carousel";

export const metadata: Metadata = {
  title: "Atividades e Serviços",
  description: "Cachoeiras, trilhas, quadriciclo, restaurante self-service, caiaques e pedalinhos. Conheça todas as atrações do Parque Olho D'Água em Andradas, MG.",
  keywords: ["atividades parque andradas", "cachoeiras andradas mg", "quadriciclo andradas", "restaurante parque andradas", "trilhas ecológicas andradas", "caiaque pedalinho andradas"],
  alternates: { canonical: '/services' },
  openGraph: {
    title: "Atividades e Serviços | Parque Olho D'Água",
    description: "Cachoeiras, trilhas, quadriciclo, restaurante self-service e muito mais. Planeje sua visita ao Parque Olho D'Água em Andradas, MG.",
    url: '/services',
    images: [{ url: '/img/hero/heroServicos.webp', width: 1200, height: 630, alt: "Atividades no Parque Olho D'Água" }],
  },
}

import style from './service.module.css'
const aboreto = Aboreto({
    subsets: ['latin'],
    weight: ['400'],
})

export default function Servico() {
    return (
        <section className={style.service}>
            <div className="flex justify-center items-center lg:px-10">
                <Image className={`${style.bannerImg} self-end w-full`} src='/img/hero/heroServicos.webp' alt='Hero Serviços' width={5000} height={300} />
            </div>
            <div className='flex justify-center w-full p-1 text-center my-10'>
                <h3 className={`${aboreto.className} text-[10px] md:text-3xl w-full`}>
                    Depois das aventuras, tem almoço no restaurante self-service
                </h3>
            </div>
            <div className='flex justify-around flex-wrap gap-y-6 px-4 py-6 md:py-8'>
                <div className='flex flex-col justify-start items-center w-1/2 md:w-auto'>
                    <Image unoptimized src='/img/Icon/GarfoFaca.svg' alt='Garfo e Faca' width={80} height={80} className='w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20' />
                    <p className='text-base md:text-xl lg:text-2xl text-center mt-2'>
                        Sabados R$49,90 <br/>
                        Domingos R$59,90
                        
                    </p>
                </div>

                <div className='flex flex-col justify-start items-center w-1/2 md:w-auto'>
                    <Image unoptimized src='/img/Icon/Crianca.svg' alt='Criança' width={90} height={80} className='w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20' />
                    <p className='text-base md:text-xl lg:text-2xl text-center mt-2'>
                        Até 10 anos: Meia
                    </p>
                </div>

                <div className='flex flex-col justify-start items-center w-1/2 md:w-auto'>
                    <Image unoptimized src='/img/Icon/Moeda.svg' alt='Moeda' width={80} height={80} className='w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20' />
                    <p className='text-base md:text-xl lg:text-2xl text-center mt-2'>
                        Até 6 anos: Não paga
                    </p>
                </div>

                <div className='flex flex-col justify-start items-center w-1/2 md:w-auto'>
                    <Image unoptimized src='/img/Icon/chapeu.svg' alt='Chapéu' width={80} height={80} className='w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20' />
                    <p className='text-base md:text-xl lg:text-2xl text-center mt-2'>
                        Self-Service Completo
                    </p>
                </div>
            </div>
            <div>
                <Carousel />
            </div>
            <div className='w-full flex flex-col md:flex-row justify-center gap-4 md:gap-6 lg:gap-10 px-4 md:px-8 lg:px-16'>

  {/* Card grande — esquerda */}
  <div className={`w-full md:w-1/2 ${style.cardCachoeiras}`}>
    <div className='w-full relative'>
      <Image
        className='w-full h-64 sm:h-80 md:h-125 lg:h-162.5 rounded-xl brightness-65 object-cover'
        src='/img/cachoeira/OlhoDagua.webp'
        alt="Cachoeira Olho D'água"
        height={5000}
        width={5000}
      />
      <div className='absolute bottom-6 md:bottom-10 lg:bottom-5 left-4 md:left-6 lg:left-5 text-white w-3/4'>
        <h2 className='text-2xl md:text-3xl lg:text-4xl'>
          Olho D&apos;agua
        </h2>
        <p className='text-sm md:text-base mt-1'>
          Queda d&apos;água tranquila com piscina natural. 101 degraus, 188 metros.
        </p>
      </div>
    </div>
  </div>

  {/* Coluna com 2 cards — direita */}
  <div className={`w-full md:w-1/2 flex flex-col gap-4 md:gap-6 lg:gap-10`}>

    <div className={`relative ${style.cardCachoeiras}`}>
      <Image
        className='w-full h-44 sm:h-56 md:h-61.25 lg:h-77.5 rounded-xl object-cover brightness-65'
        src='/img/cachoeira/pocofundon.webp'
        alt='Cachoeira Poço Fundo'
        height={5000}
        width={5000}
      />
      <div className='absolute bottom-4 md:bottom-6 lg:bottom-5 left-4 md:left-6 lg:left-5 text-white w-3/4'>
        <h2 className='text-2xl md:text-3xl lg:text-4xl'>
          Poço Fundo
        </h2>
        <p className='text-sm md:text-base mt-1'>
          A Cachoeira do Poço Fundo é marcada por uma queda d&apos;água relaxante que forma uma piscina natural profunda e cristalina, ideal para banhos tranquilos em meio à vegetação preservada.
        </p>
      </div>
    </div>

    <div className={`relative ${style.cardCachoeiras}`}>
      <Image
        className='w-full h-44 sm:h-56 md:h-61.25 lg:h-77.5 rounded-xl object-cover brightness-65'
        src='/img/cachoeira/escorregan.webp'
        alt="Cachoeira Escorrega"
        height={5000}
        width={5000}
      />
      <div className='absolute bottom-4 md:bottom-6 lg:bottom-5 left-4 md:left-6 lg:left-5 text-white w-3/4'>
        <h2 className='text-2xl md:text-3xl lg:text-4xl'>
          Cachoeira do escorrega
        </h2>
        <p className='text-sm md:text-base mt-1'>
          A Cachoeira do Escorrega é um tobogã natural formado por rochas lisas que desaguam em um poço refrescante.
        </p>
      </div>
    </div>

  </div>
</div>
        </section>
    )
}