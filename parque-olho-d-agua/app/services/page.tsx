import Image from 'next/image'
import { Aboreto } from "next/font/google"
import Link from 'next/link'

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
            <div className='flex justify-center p-15'>
                <h3 className={`${aboreto.className} text-3xl`}>
                    Depois das aventuras, tem almoço no restaurante self-service
                </h3>
            </div>
            <div className='flex justify-around flex-wrap'>
                <div className='flex flex-col justify-center items-center'>
                    <Image unoptimized src='/img/icon/GarfoFaca.svg' alt='Garoto' width={80} height={80} />
                    <p className='text-2xl'>
                        R$49,90 à vontade
                    </p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <Image unoptimized src='/img/icon/Crianca.svg' alt='Garfo e Faca' width={90} height={80} />
                    <p className='text-2xl'>
                        Até 10 anos: Meia
                    </p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <Image unoptimized src='/img/icon/Moeda.svg' alt='Garoto' width={80} height={80} />
                    <p className='text-2xl'>
                        Até 6 anos: Não paga
                    </p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <Image unoptimized src='/img/icon/chapeu.svg' alt='Garoto' width={80} height={80} />
                    <p className='text-2xl'>
                        Self-Service Completo
                    </p>
                </div>
            </div>
            <div>
                <Carousel />
            </div>
            <div className='w-full flex justify-center gap-10'>
                <div className='w-1/2 flex justify-end'>
                    <div className='w-162.5 h-162.5 relative'>
                        <Image className='w-162.5 h-162.5 rounded-xl brightness-65 object-cover' src='/img/cachoeira/olhodagua.webp'  alt='Teste'  height={5000} width={5000} 
/>
                        <div className='absolute bottom-20 left-10 text-white w-100'>
                            <h2 className='text-4xl'>
                                Olho D&apos;agua
                            </h2>
                            <p className='absolute'>
                                Queda d&apos;água tranquila com piscina natural. 101 degraus, 188 metros.
                            </p>
                        </div>
                    </div>

                </div>
                <div className='flex flex-col w-1/2 h-162.5 justify-between gap-10'>
                <div className='w-162.5 h-162.5 relative'>
                        <Image className='w-162.5 h-76.25 rounded-xl object-cover brightness-65' src='/img/cachoeira/pocofundo.webp'  alt='Teste'  height={5000} width={5000} 
/>
                        <div className='absolute bottom-20 left-10 text-white w-100'>
                            <h2 className='text-4xl'>
                                Olho D&apos;agua
                            </h2>
                            <p className='absolute'>
                                Queda d&apos;água tranquila com piscina natural. 101 degraus, 188 metros.
                            </p>
                        </div>
                    </div>
                    
                    <div className='w-162.5 h-162.5 relative'>
                        <Image className='w-162.5 h-76.25 rounded-xl object-cover brightness-65' src='/img/cachoeira/olhodagua.webp'  alt='Teste'  height={5000} width={5000} 
/>
                        <div className='absolute bottom-20 left-10 text-white w-100'>
                            <h2 className='text-4xl'>
                                Olho D&apos;agua
                            </h2>
                            <p className='absolute'>
                                Queda d&apos;água tranquila com piscina natural. 101 degraus, 188 metros.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}