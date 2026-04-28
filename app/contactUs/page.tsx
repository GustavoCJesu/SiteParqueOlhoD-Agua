"use client"

import style from './contactUs.module.css'



export default function ContactUs() {



    return (
        <section>
            <div className={`w-full flex flex-col items-center justify-center gap-5 ${style.heroContactUs} text-white bg-[linear-gradient(106deg,#14494A_0%,#028F92_100%)] shadow-[0_0_30px_-5px_#028F92]`}>
                <p className='border-2 p-3 rounded text-2xl'>FALE CONOSCO</p>
                <h1 className='text-7xl'>
                    Como podemos te ajudar?
                </h1>
                <p className='text-2xl w-300 text-center'>
                    Estamos aqui para tornar sua experiência no Parque Olho D&apos;Água inesquecível. Entre em contato conosco para dúvidas, sugestões ou reservas de espaços.
                </p>
            </div>
        </section>
    )
}