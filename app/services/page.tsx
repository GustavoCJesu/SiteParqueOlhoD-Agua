import Image from 'next/image'
import { Aboreto } from "next/font/google"

import Carousel from "@/components/Carousel/Carousel";

import style from './service.module.css'
const aboreto = Aboreto({
    subsets: ['latin'],
    weight: ['400'],
})

export default function Servico() {
    return (
        <section className={style.service}>
            <div className="flex justify-center items-center">
                <Image className={`${style.bannerImg} self-end w-full`} src='/img/hero/heroServicos.webp' alt='Hero Serviços' width={5000} height={300} />
            </div>
            <div className='flex justify-center w-full p-1 text-center'>
                <h3 className={`${aboreto.className} text-[10px] md:text-3xl w-full`}>
                    Depois das aventuras, tem almoço no restaurante self-service
                </h3>
            </div>
            <div className='flex justify-around flex-wrap gap-y-6 px-4 py-6 md:py-8'>
                <div className='flex flex-col justify-center items-center w-1/2 md:w-auto'>
                    <Image unoptimized src='/img/Icon/GarfoFaca.svg' alt='Garfo e Faca' width={80} height={80} className='w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20' />
                    <p className='text-base md:text-xl lg:text-2xl text-center mt-2'>
                        R$49,90 à vontade
                    </p>
                </div>

                <div className='flex flex-col justify-center items-center w-1/2 md:w-auto'>
                    <Image unoptimized src='/img/Icon/Crianca.svg' alt='Criança' width={90} height={80} className='w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20' />
                    <p className='text-base md:text-xl lg:text-2xl text-center mt-2'>
                        Até 10 anos: Meia
                    </p>
                </div>

                <div className='flex flex-col justify-center items-center w-1/2 md:w-auto'>
                    <Image unoptimized src='/img/Icon/Moeda.svg' alt='Moeda' width={80} height={80} className='w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20' />
                    <p className='text-base md:text-xl lg:text-2xl text-center mt-2'>
                        Até 6 anos: Não paga
                    </p>
                </div>

                <div className='flex flex-col justify-center items-center w-1/2 md:w-auto'>
                    <Image unoptimized src='/img/Icon/chapeu.svg' alt='Chapéu' width={80} height={80} className='w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20' />
                    <p className='text-base md:text-xl lg:text-2xl text-center mt-2'>
                        Self-Service Completo
                    </p>
                </div>
            </div>
            <div>
                <Carousel />
            </div>
            <div className='w-full flex flex-col md:flex-row justify-center gap-4 md:gap-6 lg:gap-10 px-4 md:px-0'>

                {/* Card grande — esquerda no desktop, primeiro no mobile */}
                <div className='w-full md:w-1/2 md:flex md:justify-end'>
                    <div className='w-full md:w-auto relative'>
                        <Image
                            className='w-full h-64 sm:h-80 md:h-125 lg:h-162.5 rounded-xl brightness-65 object-cover'
                            src='/img/cachoeira/olhodagua.webp'
                            alt='Cachoeira Olho D&apos;água'
                        height={5000}
                        width={5000}
      />
                        <div className='absolute bottom-6 md:bottom-10 lg:bottom-20 left-4 md:left-6 lg:left-10 text-white w-3/4 md:w-72 lg:w-100'>
                            <h2 className='text-2xl md:text-3xl lg:text-4xl'>
                                Olho D&apos;agua
                            </h2>
                            <p className='text-sm md:text-base mt-1'>
                                Queda d&apos;água tranquila com piscina natural. 101 degraus, 188 metros.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Coluna com 2 cards — direita no desktop, abaixo no mobile */}
                <div className='w-full md:w-1/2 flex flex-col gap-4 md:gap-6 lg:gap-10'>

                    <div className='relative'>
                        <Image
                            className='w-full h-44 sm:h-56 md:h-61.25 lg:h-77.5 rounded-xl object-cover brightness-65'
                            src='/img/cachoeira/pocofundo.webp'
                            alt='Cachoeira Poço Fundo'
                            height={5000}
                            width={5000}
                        />
                        <div className='absolute bottom-4 md:bottom-6 lg:bottom-20 left-4 md:left-6 lg:left-10 text-white w-3/4 md:w-72 lg:w-100'>
                            <h2 className='text-2xl md:text-3xl lg:text-4xl'>
                                Olho D&apos;agua
                            </h2>
                            <p className='text-sm md:text-base mt-1'>
                                Queda d&apos;água tranquila com piscina natural. 101 degraus, 188 metros.
                            </p>
                        </div>
                    </div>

                    <div className='relative'>
                        <Image
                            className='w-full h-44 sm:h-56 md:h-61.25 lg:h-77.5 rounded-xl object-cover brightness-65'
                            src='/img/cachoeira/olhodagua.webp'
                            alt='Cachoeira Olho D &apos;água'
                        height={5000}
                        width={5000}
      />
                        <div className='absolute bottom-4 md:bottom-6 lg:bottom-20 left-4 md:left-6 lg:left-10 text-white w-3/4 md:w-72 lg:w-100'>
                            <h2 className='text-2xl md:text-3xl lg:text-4xl'>
                                Olho D&apos;agua
                            </h2>
                            <p className='text-sm md:text-base mt-1'>
                                Queda d&apos;água tranquila com piscina natural. 101 degraus, 188 metros.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}