"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { useEffect } from "react";

import style from './Carousel.module.css'

interface CardItem {
  id: number;
  tag: string;
  preco: string;
  title: string;
  description: string;
  image?: string;
}

const items: CardItem[] = [
  {
    id: 1,
    preco: 'R$200,00/Veiculo',
    tag: "Aventura",
    title: "Quadriciclo",
    description:
      "Aventure-se em trilhas cheias de emoção. Uma experiência divertida para todas as idades.",
    image: '/img/cards/quadriciclo.webp'
  },
  {
    id: 2,
    preco: 'R$25,00/Pessoa',
    tag: "Natureza",
    title: "Caiaque",
    description:
      "Passeio guiado, seguro e ideal para todas as idades. Relaxe em meio à natureza.",
    image: '/img/cards/caiaqueServicon.webp'
  },
  {
    id: 3,
    preco: 'R$25,00/Pessoa',
    tag: "Lazer",
    title: "Pedalinho",
    description:
      "Leve e relaxante em meio à natureza. Perfeito para famílias e momentos tranquilos.",
    image: '/img/cards/pedalinhoServico.webp'
  },
  {
    id: 4,
    preco: 'R$5,00',
    tag: "Aventura",
    title: "Balanço Infinito",
    description:
      "Essa é diversão! 138 degraus e 243 metros de pura adrenalina e natureza.",
    image: '/img/cards/balancoInfinitoServicos.webp'
  },
  {
    id: 5,
    preco: 'R$25,00/Pessoa',
    tag: "Aventura",
    title: "Passeio a Cavalo",
    description:
      "Explore trilhas e paisagens deslumbrantes a cavalo. Ideal para toda a família.",
    image: '/img/cards/cavalo.webp'
  },
  {
    id: 6,
    preco: 'R$25,00/Pessoa',
    tag: "Natureza",
    title: "Water Ball",
    description:
      "Entre na bola inflável e desafie seu equilíbrio enquanto se diverte caminhando e rolando sobre a água.",
    image: '/img/cards/waterball.webp'
  },
  {
    id: 7,
    preco: 'R$5,00',
    tag: "Lazer",
    title: "Parede de Escalada",
    description:
      "Desafie seus limites em uma atividade que estimula equilíbrio, coordenação e superação, com equipamentos de segurança e acompanhamento.",
    image: '/img/cards/parede.webp'
  },
  {
    id: 8,
    preco: 'R$5,00',
    tag: "Kids",
    title: "Tirolesa infantil",
    description:
      "Uma aventura segura e emocionante para as crianças, proporcionando diversão enquanto deslizam por um percurso adaptado para os pequenos.",
    image: '/img/cards/tirolesa.webp'
  },
];

const VISIBLE_DEFAULT = 3;

const getVisibleCount = () => {
  if (typeof window === "undefined") return VISIBLE_DEFAULT;
  if (window.innerWidth < 640) return 1;
  if (window.innerWidth < 1024) return 2;
  return VISIBLE_DEFAULT;
};

const getGap = () => {
  if (typeof window === "undefined") return 160;
  if (window.innerWidth < 640) return 16;
  if (window.innerWidth < 1024) return 40;
  return 160;
};

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const [visibleCount, setVisibleCount] = useState(() => getVisibleCount());
  const trackRef = useRef<HTMLDivElement>(null);
  const steps = items.length - visibleCount;

  // Função central que aplica o transform — única fonte da verdade
  const applyTransform = (index: number) => {
    const card = trackRef.current?.children[0] as HTMLElement;
    if (!card || !trackRef.current) return;
    const cardWidth = card.offsetWidth;
    const gap = getGap();
    trackRef.current.style.transform = `translateX(-${index * (cardWidth + gap)}px)`;
  };

  useEffect(() => {
  // Removida a linha do setVisibleCount aqui

  const handleResize = () => {
    const newVisible = getVisibleCount();
    setVisibleCount(newVisible);
    setCurrent((prev) => {
      const newSteps = items.length - newVisible;
      const clamped = Math.min(prev, newSteps);
      const card = trackRef.current?.children[0] as HTMLElement;
      if (card && trackRef.current) {
        const gap = getGap();
        trackRef.current.style.transform = `translateX(-${clamped * (card.offsetWidth + gap)}px)`;
      }
      return clamped;
    });
  };

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);

  const go = (n: number) => {
    const next = Math.max(0, Math.min(n, steps));
    setCurrent(next);
    applyTransform(next);
  };
  return (
    <div className="w-full py-6 font-sans my-4 md:my-10">
      {/* Header */}
      <div className="mx-4 md:mx-10 lg:mx-19 my-5">
        <h1 className={`text-4xl md:text-5xl lg:text-7xl ${style.titleCarousel}`}>
          <span className="text-[#028F92]">NOSSAS</span> ATIVIDADES
        </h1>
      </div>

      {/* Track */}
      <div className="overflow-hidden rounded-xl px-4 md:px-10 lg:px-20">
        <div
          ref={trackRef}
          className="flex gap-4 md:gap-10 lg:gap-40 transition-transform duration-380 ease-in-out"
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="flex-none w-[85vw] sm:w-[45vw] md:w-[calc((100%-2*40px)/2)] lg:w-[calc((100%-2*160px)/3)] border border-gray-100 rounded-xl overflow-hidden bg-white"
            >
              {/* Imagem */}
              {item.image ? (
                <Image
                  className="w-full h-48 md:h-72 lg:h-130 object-cover"
                  src={item.image}
                  alt={item.title}
                  height={1000}
                  width={1000}
                />
              ) : (
                <div className="w-full h-36 bg-gray-50 flex items-center justify-center text-gray-200">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="4" y="8" width="40" height="32" rx="4" />
                    <circle cx="17" cy="20" r="4" />
                    <path d="M4 32 L14 22 L24 30 L32 22 L44 32" />
                  </svg>
                </div>
              )}

              {/* Corpo */}
              <div className="p-3 md:p-4">
                <span className="inline-block text-xs font-medium uppercase tracking-wide px-2.5 py-1 rounded-full bg-green-50 text-green-700 mb-2">
                  {item.tag}
                </span>
                <p className="text-sm font-medium text-gray-900 mb-1">{item.title}</p>
                <p>{item.preco}</p>
                <p className="text-xs text-gray-500 leading-relaxed mb-3 md:mb-4">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-1.5 mt-4">
        {Array.from({ length: steps + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            aria-label={`Ir para página ${i + 1}`}
            className={`rounded-full transition-all ${i === current ? "w-2 h-2 bg-gray-800 scale-110" : "w-2 h-2 bg-gray-300"
              }`}
          />
        ))}
      </div>

      {/* Navegação */}
      <div className="flex items-center justify-center my-4">
        <div className="flex gap-2">
          <button
            onClick={() => go(current - 1)}
            disabled={current === 0}
            aria-label="Anterior"
            className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-default transition-colors"
          >
            ←
          </button>
          <button
            onClick={() => go(current + 1)}
            disabled={current === steps}
            aria-label="Próximo"
            className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-default transition-colors"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
