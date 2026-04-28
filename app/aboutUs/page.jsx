import Image from "next/image";

import style from './aboutUs.module.css'

export default function Component() {
  return (
    <section>
      <div className="w-full">
        <div className="relative">
          <Image
            className="w-full object-contain"
            src='/img/hero/heroSobreNos.svg'
            alt='Banner da pagina Sobre Nós'
            width={1000}
            height={1000}
          />
          <h1 className={`absolute top-1 left-4 sm:left-8 md:top-1 md:left-9 lg:top-2 lg:left-8 text-3xl sm:text-6xl md:text-7xl lg:text-[6rem] whitespace-nowrap ${style.titlesobreNos}`}>
            SOBRE<span className="text-[#028F92]"> NÓS</span>
          </h1>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 lg:gap-30 px-4 sm:px-8 md:px-10 py-10">

        {/* Imagem */}
        <div className="w-full md:w-auto">
          <Image
            className="w-full h-64 sm:h-96 md:h-[500px] lg:h-175 md:w-auto lg:w-180 object-cover rounded-xl"
            src='/img/cachoeira/olhodagua.webp'
            alt="Cachoeira olho d'água"
            width={1000}
            height={1000}
          />
        </div>

        {/* Card de texto */}
        <div className="flex flex-col bg-[#EDE7DC] justify-center gap-4 md:gap-5 p-6 sm:p-8 md:p-10 rounded-xl w-full md:w-[450px] lg:w-180">
          <h3 className="text-[#14494A] text-sm md:text-base">
            NOSSA HISTORIA
          </h3>
          <h1 className={`${style.titleNossaHistoria} ${style.aboreto}`}>
            Nascemos do amor<br />
            pela natureza
          </h1>
          <p className="text-base md:text-lg lg:text-xl w-full lg:w-140">
            O Parque Olho d&apos;Água nasceu do desejo de valorizar as belezas naturais de Andradas e criar um espaço onde natureza, lazer e tranquilidade se encontram. Localizado em uma área rica em nascentes e cercada por vegetação preservada, o parque foi pensado para oferecer uma experiência autêntica de contato com o meio ambiente.
          </p>
        </div>

      </div>

      <div className="flex justify-center p-20">
        <div className="flex flex-col">
          <h1 className={`${style.aboreto} text-7xl my-10`}>
            Nossos <span className="text-[#028F92]">Valores</span>
          </h1>
          <div className="flex justify-around gap-30 w-full">
            <div className={`border-2 border-[#b6b6b6] pl-10 pr-30 py-10 rounded-xl flex flex-col items-start ${style.zoom}`}>
              <h4 className="flex text-3xl items-center mb-5 text-[#49745B]">
                Sustentabilidade
                <Image src='/img/Icon/sobreNos/icoSustentabilidade.svg' alt='Icone de sustentabilidade' width={40} height={40} />
              </h4>
              <p className="text-xl w-70">
                Preservamos cada metro do parque para as futuras gerações.
              </p>
            </div>
            <div className={`border-2 border-[#b6b6b6] pl-10 pr-30 py-10 rounded-xl flex flex-col items-start ${style.zoom}`}>
              <h4 className="flex text-3xl items-center mb-5 text-[#49745B]">
                Família
                <Image src='/img/Icon/sobreNos/icoFamilia.svg' alt='Icone de sustentabilidade' width={40} height={40} />
              </h4>
              <p className="text-xl w-70">
                Experiências pensadas para todas as idades, do infantil ao sênior.
              </p>
            </div>
            <div className={`border-2 border-[#b6b6b6] pl-10 pr-30 py-10 rounded-xl flex flex-col items-start ${style.zoom}`}>
              <h4 className="flex text-3xl items-center mb-5 text-[#49745B]">
                Família
                <Image className="mx-1" src='/img/Icon/sobreNos/icoAventura.svg' alt='Icone de sustentabilidade' width={40} height={40} />
              </h4>
              <p className="text-xl w-70">
                Atividades seguras que conectam as pessoas à natureza.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={`w-full h-120 flex justify-around bg-[linear-gradient(106deg,#14494A_0%,#028F92_100%)] items-center ${style.aboreto}`}>
        <div className="text-center">
          <h2 className={`text-white text-8xl`}>
            14+
          </h2>
          <p className="text-white text-3xl">
            Experiencias
          </p>
        </div>
        <div className="text-center">
          <h2 className={`text-white text-8xl`}>
            3
          </h2>
          <p className="text-white text-3xl">
            Cachoeiras
          </p>
        </div>
        <div className="text-center">
          <h2 className={`text-white text-8xl`}>
            50k+
          </h2>
          <p className="text-white text-3xl">
            Visitantes/Ano
          </p>
        </div>
        <div className="text-center">
          <h2 className={`text-white text-8xl`}>
            100%
          </h2>
          <p className="text-white text-3xl">
            Natural
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center py-20">
        <h1 className={`${style.aboreto} text-center text-8xl`}>
          Venha nos <span className="text-[#028F92]">visitar</span>!!
        </h1>
        <p className="text-2xl text-center my-10">
          Agende sua visita e venha viver essa experiência única em contato com a natureza.
        </p>
        <a href="#" className={`${style.btnEntrarEmContato} text-center border-2 border-[#b6b6b6] py-5 px-20 rounded`}>
          ENTRE EM CONTATO
        </a>
      </div>

    </section>
  );
}
