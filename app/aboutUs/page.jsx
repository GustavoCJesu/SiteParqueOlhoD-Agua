import Image from "next/image";

import style from './aboutUs.module.css'

export default function Component() {
  return (
    <section className="text-[#525252]">
      <div className="relative w-full h-64 sm:h-80 md:h-105 lg:h-130 overflow-hidden">
        <Image
          src="/img/hero/heroSobreNos.webp"
          alt="Floresta do Parque Olho D'Água"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/35 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-10 lg:px-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[#028F92] mb-3 sm:mb-5">
            Conheça nossa história
          </span>
          <h1 className={`text-white text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] whitespace-nowrap drop-shadow-md ${style.titlesobreNos}`}>
            SOBRE<span className="text-[#028F92]"> NÓS</span>
          </h1>
          <p className="hidden sm:block text-white/75 text-sm sm:text-base md:text-lg mt-4 sm:mt-5 max-w-md">
            Um parque nascido do amor pela natureza e pela cidade de Andradas.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 lg:gap-30 px-4 sm:px-8 md:px-10 py-10">

        {/* Imagem */}
        <div className="w-full md:w-auto">
          <Image
            className="w-full h-64 sm:h-96 md:h-125 lg:h-145 md:w-auto lg:w-110 object-cover rounded-xl"
            src='/img/cachoeira/OlhoDagua.webp'
            alt="Cachoeira olho d'água"
            width={1000}
            height={1000}
          />
        </div>

        {/* Card de texto */}
        <div className="flex flex-col bg-[#EDE7DC] justify-center gap-4 md:gap-5 p-6 sm:p-8 md:p-10 rounded-xl w-full md:w-112.5 lg:w-180">
          <h3 className={`text-[#14494A] text-xs sm:text-sm md:text-lg lg:text-2xl tracking-widest ${style.aboreto}`}>
            NOSSA HISTORIA
          </h3>
          <h1 className={`${style.titleNossaHistoria} ${style.aboreto}`}>
            Nascemos do amor<br />
            pela natureza
          </h1>
          <p className="text-base md:text-lg lg:text-xl w-full leading-relaxed">
            O Parque Olho d&apos;Água nasceu do desejo de valorizar as belezas naturais de Andradas e criar um espaço onde natureza, lazer e tranquilidade se encontram. Localizado em uma área rica em nascentes e cercada por vegetação preservada, o parque foi pensado para oferecer uma experiência autêntica de contato com o meio ambiente.
          </p>
        </div>

      </div>

      <div className="flex justify-center px-4 sm:px-10 md:px-16 lg:p-20 py-10">
        <div className="flex flex-col w-full">
          <h1 className={`${style.aboreto} text-4xl sm:text-5xl md:text-6xl lg:text-7xl my-6 md:my-10`}>
            Nossos <span className="text-[#028F92]">Valores</span>
          </h1>

          <div className="flex flex-col sm:flex-row flex-wrap justify-around gap-6 md:gap-10 lg:gap-16 w-full">

            {/* Sustentabilidade */}
            <div className={`border-2 border-[#b6b6b6] p-6 md:p-8 lg:p-10 rounded-xl flex flex-col items-start w-full sm:w-[45%] lg:w-[30%] ${style.zoom}`}>
              <h4 className="flex text-xl md:text-2xl lg:text-3xl items-center gap-2 mb-4 md:mb-5 text-[#49745B]">
                Sustentabilidade
                <Image src='/img/Icon/sobreNos/icoSustentabilidade.svg' alt='Icone de sustentabilidade' width={40} height={40} className="w-7 h-7 md:w-9 md:h-9 lg:w-10 lg:h-10" />
              </h4>
              <p className="text-base md:text-lg lg:text-xl w-full">
                Preservamos cada metro do parque para as futuras gerações.
              </p>
            </div>

            {/* Família */}
            <div className={`border-2 border-[#b6b6b6] p-6 md:p-8 lg:p-10 rounded-xl flex flex-col items-start w-full sm:w-[45%] lg:w-[30%] ${style.zoom}`}>
              <h4 className="flex text-xl md:text-2xl lg:text-3xl items-center gap-2 mb-4 md:mb-5 text-[#49745B]">
                Família
                <Image src='/img/Icon/sobreNos/icoFamilia.svg' alt='Icone de família' width={40} height={40} className="w-7 h-7 md:w-9 md:h-9 lg:w-10 lg:h-10" />
              </h4>
              <p className="text-base md:text-lg lg:text-xl w-full">
                Experiências pensadas para todas as idades, do infantil ao sênior.
              </p>
            </div>

            {/* Aventura */}
            <div className={`border-2 border-[#b6b6b6] p-6 md:p-8 lg:p-10 rounded-xl flex flex-col items-start w-full sm:w-[45%] lg:w-[30%] ${style.zoom}`}>
              <h4 className="flex text-xl md:text-2xl lg:text-3xl items-center gap-2 mb-4 md:mb-5 text-[#49745B]">
                Aventura
                <Image src='/img/Icon/sobreNos/icoAventura.svg' alt='Icone de aventura' width={40} height={40} className="w-7 h-7 md:w-9 md:h-9 lg:w-10 lg:h-10" />
              </h4>
              <p className="text-base md:text-lg lg:text-xl w-full">
                Atividades seguras que conectam as pessoas à natureza.
              </p>
            </div>

          </div>
        </div>
      </div>
      <div className={`w-full py-10 md:h-120 flex flex-wrap justify-around bg-[linear-gradient(106deg,#14494A_0%,#028F92_100%)] items-center gap-8 md:gap-0 px-4 ${style.aboreto}`}>

        <div className="text-center w-1/2 md:w-auto">
          <h2 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
            14+
          </h2>
          <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl">
            Experiencias
          </p>
        </div>

        <div className="text-center w-1/2 md:w-auto">
          <h2 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
            3
          </h2>
          <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl">
            Cachoeiras
          </p>
        </div>

        <div className="text-center w-1/2 md:w-auto">
          <h2 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
            50k+
          </h2>
          <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl">
            Visitantes/Ano
          </p>
        </div>

        <div className="text-center w-1/2 md:w-auto">
          <h2 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
            100%
          </h2>
          <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl">
            Natural
          </p>
        </div>

      </div>
      <div className="flex flex-col items-center py-20">
        <h1 className={`${style.aboreto} text-center text-4xl sm:text-5xl md:text-6xl lg:text-8xl`}>
          Venha nos <span className="text-[#028F92]">visitar</span>!!
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-center my-6 md:my-10 max-w-2xl px-4">
          Agende sua visita e venha viver essa experiência única em contato com a natureza.
        </p>
        <a href="#" className={`${style.btnEntrarEmContato} text-center border-2 border-[#b6b6b6] py-4 px-12 md:py-5 md:px-20 rounded`}>
          ENTRE EM CONTATO
        </a>
      </div>

    </section>
  );
}
