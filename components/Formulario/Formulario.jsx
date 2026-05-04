'use client'

import { useState } from 'react'
import style from './formulario.module.css'
import { Phone, Mail, MapPin } from "lucide-react";
import Link from 'next/link'
export default function Formulario() {


    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    return (
        <section className="flex text-[#525252] bg-[#F2F2F2] p-5 md:p-10 flex-wrap">

            {/* Coluna de contato */}
            <div className="w-full md:w-1/2 flex flex-col items-center mb-10 md:mb-0 p-2">
                <div className='flex flex-col w-full max-w-md'>
                    <div>
                        <h3 className="text-2xl md:text-[40px]">
                            Informações de Contato
                        </h3>
                        <p className='text-sm md:text-[17px]'>
                            Escolha a melhor forma de falar com a nossa equipe.
                        </p>
                    </div>

                    <div className="flex flex-col">
                        <Link rel="noopener noreferrer" target='-blank' href='https://www.google.com/maps?cid=12143616808773543875'>
                            <div className={`flex items-center ${style.cardContact}`}>
                                <MapPin className="bg-[#028F9233] rounded-full overflow-visible p-3 w-12 h-12 md:w-20 md:h-20 mr-3 text-[#14494A] shrink-0" />
                                <div>
                                    <h1 className="text-xl md:text-[30px]">Endereço</h1>
                                    <p className="text-sm md:text-base">
                                        Estrada Andradas/Pocinhos do Rio Verde, <br />
                                        Km 3, <br />
                                        Zona Rural - 37842-899 - Andradas/MG
                                    </p>
                                </div>
                            </div>
                        </Link>
                        <Link rel="noopener noreferrer" target='-blank' href='tel:3599932-2462'>
                            <div className={`flex items-center ${style.cardContact}`}>
                                <Phone className="bg-[#028F9233] rounded-full overflow-visible p-3 w-12 h-12 md:w-20 md:h-20 mr-3 text-[#14494A] shrink-0" />
                                <div>
                                    <h1 className="text-xl md:text-[30px]">Telefone</h1>
                                    <p className="text-sm md:text-base">
                                        (35) 99932-2462<br />
                                    </p>
                                </div>
                            </div>

                        </Link>
                        <div className={`flex items-center ${style.cardContact}`}>
                            <Mail className="bg-[#028F9233] rounded-full overflow-visible p-3 w-12 h-12 md:w-20 md:h-20 mr-3 text-[#14494A] shrink-0" />
                            <div>
                                <h1 className="text-xl md:text-[30px]">Email</h1>
                                <p className="text-sm md:text-base break-all">
                                    contato@parqueolhodagua.com.br <br />
                                    eventos@parqueolhodagua.com.br
                                </p>
                            </div>
                        </div>

                        {/* Redes sociais */}
                        <div className='flex items-center gap-2 mt-4'>
                            <h1 className='text-base md:text-[20px] mr-1'>Siga-nos:</h1>
                            <Link href='https://www.facebook.com/share/17jDbrbBBV/?mibextid=wwXIfr' target="_blank"
                                rel="noopener noreferrer">
                                <svg className={`${style.iconSocialMedia} w-10 h-10 md:w-17.5 md:h-17.5`} viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="35" cy="35" r="34.5" stroke="currentColor" />
                                    <path d="M38.5832 37.9583H43.7915L45.8749 29.625H38.5832V25.4583C38.5832 23.3125 38.5832 21.2917 42.7499 21.2917H45.8749V14.2917C45.1957 14.2021 42.6311 14 39.9228 14C34.2665 14 30.2499 17.4521 30.2499 23.7917V29.625H23.9999V37.9583H30.2499V55.6667H38.5832V37.9583Z" fill="currentColor" />
                                </svg>
                            </Link>

                            <Link href='https://www.instagram.com/parqueecologicoolhodagua' target="_blank"
                                rel="noopener noreferrer">
                                <svg className={`${style.iconSocialMedia} w-10 h-10 md:w-17 md:h-17.5`} viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="35" cy="35" r="34.5" stroke="currentColor" />
                                    <path d="M26.0835 14H43.5835C50.2501 14 55.6668 19.4167 55.6668 26.0833V43.5833C55.6668 46.788 54.3937 49.8615 52.1277 52.1275C49.8616 54.3936 46.7882 55.6667 43.5835 55.6667H26.0835C19.4168 55.6667 14.0001 50.25 14.0001 43.5833V26.0833C14.0001 22.8786 15.2732 19.8052 17.5392 17.5391C19.8053 15.2731 22.8788 14 26.0835 14ZM25.6668 18.1667C23.6777 18.1667 21.77 18.9568 20.3635 20.3634C18.957 21.7699 18.1668 23.6775 18.1668 25.6667V44C18.1668 48.1458 21.521 51.5 25.6668 51.5H44.0001C45.9892 51.5 47.8969 50.7098 49.3034 49.3033C50.7099 47.8968 51.5001 45.9891 51.5001 44V25.6667C51.5001 21.5208 48.146 18.1667 44.0001 18.1667H25.6668ZM45.771 21.2917C46.4616 21.2917 47.124 21.566 47.6124 22.0544C48.1008 22.5428 48.3751 23.2052 48.3751 23.8958C48.3751 24.5865 48.1008 25.2489 47.6124 25.7373C47.124 26.2256 46.4616 26.5 45.771 26.5C45.0803 26.5 44.4179 26.2256 43.9295 25.7373C43.4411 25.2489 43.1668 24.5865 43.1668 23.8958C43.1668 23.2052 43.4411 22.5428 43.9295 22.0544C44.4179 21.566 45.0803 21.2917 45.771 21.2917ZM34.8335 24.4167C37.5961 24.4167 40.2456 25.5141 42.1991 27.4676C44.1527 29.4211 45.2501 32.0707 45.2501 34.8333C45.2501 37.596 44.1527 40.2455 42.1991 42.199C40.2456 44.1525 37.5961 45.25 34.8335 45.25C32.0708 45.25 29.4213 44.1525 27.4678 42.199C25.5143 40.2455 24.4168 37.596 24.4168 34.8333C24.4168 32.0707 25.5143 29.4211 27.4678 27.4676C29.4213 25.5141 32.0708 24.4167 34.8335 24.4167ZM34.8335 28.5833C33.1758 28.5833 31.5861 29.2418 30.414 30.4139C29.2419 31.586 28.5835 33.1757 28.5835 34.8333C28.5835 36.4909 29.2419 38.0806 30.414 39.2527C31.5861 40.4249 33.1758 41.0833 34.8335 41.0833C36.4911 41.0833 38.0808 40.4249 39.2529 39.2527C40.425 38.0806 41.0835 36.4909 41.0835 34.8333C41.0835 33.1757 40.425 31.586 39.2529 30.4139C38.0808 29.2418 36.4911 28.5833 34.8335 28.5833Z" fill="currentColor" />
                                </svg></Link>
                            <Link href='https://wa.me/5535999322462' target="_blank"
                                rel="noopener noreferrer">
                                <svg className={`${style.iconSocialMedia} w-10 h-10 md:w-17 md:h-17.5 p-2.5 border`} viewBox='0 0 24 24' xmlns="http://www.w3.org/2000/svg" fill="none">
                                    <path d="M3.50002 12C3.50002 7.30558 7.3056 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C10.3278 20.5 8.77127 20.0182 7.45798 19.1861C7.21357 19.0313 6.91408 18.9899 6.63684 19.0726L3.75769 19.9319L4.84173 17.3953C4.96986 17.0955 4.94379 16.7521 4.77187 16.4751C3.9657 15.176 3.50002 13.6439 3.50002 12ZM12 1.5C6.20103 1.5 1.50002 6.20101 1.50002 12C1.50002 13.8381 1.97316 15.5683 2.80465 17.0727L1.08047 21.107C0.928048 21.4637 0.99561 21.8763 1.25382 22.1657C1.51203 22.4552 1.91432 22.5692 2.28599 22.4582L6.78541 21.1155C8.32245 21.9965 10.1037 22.5 12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5ZM14.2925 14.1824L12.9783 15.1081C12.3628 14.7575 11.6823 14.2681 10.9997 13.5855C10.2901 12.8759 9.76402 12.1433 9.37612 11.4713L10.2113 10.7624C10.5697 10.4582 10.6678 9.94533 10.447 9.53028L9.38284 7.53028C9.23954 7.26097 8.98116 7.0718 8.68115 7.01654C8.38113 6.96129 8.07231 7.046 7.84247 7.24659L7.52696 7.52195C6.76823 8.18414 6.3195 9.2723 6.69141 10.3741C7.07698 11.5163 7.89983 13.314 9.58552 14.9997C11.3991 16.8133 13.2413 17.5275 14.3186 17.8049C15.1866 18.0283 16.008 17.7288 16.5868 17.2572L17.1783 16.7752C17.4313 16.5691 17.5678 16.2524 17.544 15.9269C17.5201 15.6014 17.3389 15.308 17.0585 15.1409L15.3802 14.1409C15.0412 13.939 14.6152 13.9552 14.2925 14.1824Z" fill="currentColor" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Formulário */}
            <div className="w-full md:w-1/2 flex justify-center flex-col items-center">
                <h2 className='text-2xl md:text-[40px] text-[#525252]'>
                    Envie uma mensagem
                </h2>
                <div className="w-full max-w-md px-4 md:px-0">
                    <form className='flex flex-col items-center'>
                        <label className='text-base md:text-[20px] self-start'>Nome Completo:</label>
                        <input
                            className={`${style.inpForm} w-full p-3 border bg-white border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition-all`}
                            type="text"
                            placeholder="Nome..."
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <label className='text-base md:text-[20px] self-start'>Email:</label>
                        <input
                            className={`${style.inpForm} w-full p-3 border bg-white border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition-all`}
                            type="text"
                            placeholder="Email..."
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label className='text-base md:text-[20px] self-start'>Objetivo do contato:</label>
                        <input
                            list="objetivos-contato"
                            id="objetivo"
                            name="objetivo"
                            placeholder="Selecione ou digite o motivo..."
                            className="w-full p-3 border bg-white border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition-all"
                        />

                        <datalist id="objetivos-contato">
                            {/* Opções voltadas para o Parque Olho D'Água */}
                            <option value="Informações sobre Visitação" />
                            <option value="Agendamento de Grupos/Escolas" />
                            <option value="Eventos e Ensaios Fotográficos" />

                            {/* Opções voltadas para Projetos/Institucional (ACAFEG) */}
                            <option value="Dúvidas sobre Parcerias" />
                            <option value="Suporte Técnico / Feedback" />
                            <option value="Orçamentos e Consultoria" />

                            {/* Opções Gerais */}
                            <option value="Sugestões e Reclamações" />
                            <option value="Outros" />
                        </datalist>
                        <label className='text-base md:text-[20px] self-start'>Assunto:</label>
                        <textarea className={`${style.message} w-full p-3 border bg-white border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition-all`} />
                        <button
                            className={`py-3 px-1 my-5 bg-linear-to-r from-[#14494A] to-[#028F92] w-full md:w-50 text-white rounded ${style.buttonForm}`}
                            type='submit'
                        >
                            Enviar
                        </button>
                    </form>
                </div>
            </div>

        </section>
    )


}