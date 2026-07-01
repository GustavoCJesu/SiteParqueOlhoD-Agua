import type { Metadata } from "next"
import style from './contactUs.module.css'

export const metadata: Metadata = {
  title: "Contato",
  description: "Entre em contato com o Parque Olho D'Água. Tire dúvidas, faça reservas e planeje sua visita. Estrada Andradas/Pocinhos do Rio Verde, Km 3, Andradas, MG.",
  keywords: ["contato parque olho d'água", "reserva parque andradas", "telefone parque andradas", "endereço parque andradas mg"],
  alternates: { canonical: '/contactUs' },
  openGraph: {
    title: "Contato | Parque Olho D'Água",
    description: "Fale com o Parque Olho D'Água. Tire dúvidas, faça reservas e planeje sua visita em Andradas, MG.",
    url: '/contactUs',
    images: [{ url: '/img/hero/heroHome.webp', width: 1200, height: 630, alt: "Contato Parque Olho D'Água" }],
  },
}

export default function ContactUs() {



    return (
        <section>
            <div className={`w-full flex flex-col items-center justify-center gap-4 md:gap-5 px-4 sm:px-10 md:px-20 py-12 md:py-16 ${style.heroContactUs} text-white bg-[linear-gradient(106deg,#14494A_0%,#028F92_100%)] shadow-[0_0_30px_-5px_#028F92]`}>
                <p className='border-2 p-2 md:p-3 rounded text-base md:text-xl lg:text-2xl'>
                    FALE CONOSCO
                </p>
                <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-center'>
                    Como podemos te ajudar?
                </h1>
                <p className='text-base sm:text-lg md:text-xl lg:text-2xl w-full md:w-150 lg:w-200 text-center'>
                    Estamos aqui para tornar sua experiência no Parque Olho D&apos;Água inesquecível. Entre em contato conosco para dúvidas, sugestões ou reservas de espaços.
                </p>
            </div>
        </section>
    )
}