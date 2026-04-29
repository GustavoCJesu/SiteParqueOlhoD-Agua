import Image from 'next/image'

import style from './galery.module.css'

export default function Galeria() {
    return (
        <main className={`w-full px-4 sm:px-8 md:px-12 lg:px-20 py-10 font-sans ${style.aboreto}`}>
            <div className="max-w-6xl mx-auto">
                {/* PARQUE */}
                <section className="mb-16">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#14494A] mb-6 font-['Aboreto']">
                        PARQUE
                    </h2>

                    {/* Linha 1: 1 grande + 1 pequena */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-4">
                        <div className="w-full sm:w-2/3 h-56 sm:h-72 md:h-80 lg:h-96 relative rounded-xl overflow-hidden">
                            <Image src="/img/galeryImg/parque/foto1.webp" alt="Vista aérea do parque" fill className={`object-cover ${style.imgGalery}`} />
                        </div>
                        <div className="w-full sm:w-1/3 h-56 sm:h-72 md:h-80 lg:h-96 relative rounded-xl overflow-hidden">
                            <Image src="/img/galeryImg/parque/foto2.webp" alt="Playground do parque" fill className={`object-cover ${style.imgGalery}`} />
                        </div>
                    </div>

                    {/* Linha 2: 1 pequena + 1 grande */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="w-full sm:w-1/3 h-56 sm:h-72 md:h-80 lg:h-96 relative rounded-xl overflow-hidden">
                            <Image src="/img/galeryImg/parque/foto3.webp" alt="Lanchonete do parque" fill className={`object-cover ${style.imgGalery}`} />
                        </div>
                        <div className="w-full sm:w-2/3 h-56 sm:h-72 md:h-80 lg:h-96 relative rounded-xl overflow-hidden">
                            <Image src="/img/galeryImg/parque/foto4.webp" alt="Ponte suspensa do parque" fill className={`object-cover ${style.imgGalery}`} />
                        </div>
                    </div>
                </section>

                {/* RESTAURANTE */}
                <section className="mb-16">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#14494A] mb-6 text-right font-['Aboreto']">
                        RESTAURANTE
                    </h2>

                    {/* Linha 1: 3 iguais */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-4">
                        <div className="w-full sm:w-1/3 h-48 sm:h-60 md:h-80 relative rounded-xl overflow-hidden">
                            <Image src="/img/galeryImg/restaurante/foto1.webp" alt="Buffet do restaurante" fill className={`object-cover ${style.imgGalery}`} />
                        </div>
                        <div className="w-full sm:w-1/3 h-48 sm:h-60 md:h-80 relative rounded-xl overflow-hidden">
                            <Image src="/img/galeryImg/restaurante/foto2.webp" alt="Prato do restaurante" fill className={`object-cover ${style.imgGalery}`} />
                        </div>
                        <div className="w-full sm:w-1/3 h-48 sm:h-60 md:h-80 relative rounded-xl overflow-hidden">
                            <Image src="/img/galeryImg/restaurante/foto4.webp" alt="Buffet do restaurante" fill className={`object-cover ${style.imgGalery}`} />
                        </div>
                    </div>

                    {/* Linha 2: 1 full width */}
                    <div className="w-full h-48 sm:h-64 md:h-110 relative rounded-xl overflow-hidden">
                        <Image src="/img/galeryImg/restaurante/foto3.webp" alt="Buffet completo do restaurante" fill className={`object-cover ${style.imgGalery}`} />
                    </div>
                </section>

                {/* ATIVIDADES */}
                <section className="mb-16">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#14494A] mb-6 font-['Aboreto']">
                        ATIVIDADES
                    </h2>

                    {/* Linha 1: 1 pequena + 1 grande */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-4">
                        <div className="w-full sm:w-1/3 h-56 sm:h-72 md:h-80 relative rounded-xl overflow-hidden">
                            <Image src="/img/galeryImg/atividades/foto2.webp" alt="Atividade no parque" fill className={`object-cover ${style.imgGalery}`} />
                        </div>
                        <div className="w-full sm:w-2/3 h-56 sm:h-72 md:h-80 relative rounded-xl overflow-hidden">
                            <Image src="/img/galeryImg/atividades/foto1.webp" alt="Tirolesa do parque" fill className={`object-cover ${style.imgGalery}`} />
                        </div>
                    </div>

                    {/* Linha 2: 1 grande + 1 pequena */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="w-full sm:w-2/3 h-56 sm:h-72 md:h-80 relative rounded-xl overflow-hidden">
                            <Image src="/img/galeryImg/atividades/foto3.webp" alt="Lago do parque ao pôr do sol" fill className={`object-cover ${style.imgGalery}`} />
                        </div>
                        <div className="w-full sm:w-1/3 h-56 sm:h-72 md:h-80 relative rounded-xl overflow-hidden">
                            <Image src="/img/galeryImg/atividades/foto4.webp" alt="Quadra de vôlei do parque" fill className={`object-cover ${style.imgGalery}`} />
                        </div>
                    </div>
                </section>
            </div>

        </main>
    )
}