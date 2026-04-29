'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className='p-5 w-full text-[#525252] bg-[#F8F9F5]'>


      <ul className='hidden md:flex justify-around items-center w-full text-xl'>
        <li><Link href='/'>Home</Link></li>
        <li><Link href='/galery'>Galeria</Link></li>
        <li><a href="/services">Serviços</a></li>
        <li>
          <Image src="/img/logo/LogoNova.png"  alt="Logo parque olho d'agua" width={200} height={100} />
        </li>
        <li><a href="#">Blog</a></li>
        <li><a href="/contactUs">Contatenos</a></li>
        <li><Link href='/aboutUs'>Sobre Nós</Link></li>
      </ul>

      {/* Mobile */}
      <div className='flex md:hidden justify-between items-center w-full'>
        <Image src="/img/logo/LogoNova.png" alt="Logo parque olho d'agua" width={150} height={100} />
        <button
          onPointerDown={() => setMenuOpen(!menuOpen)}
          className='text-3xl p-2 text-black cursor-pointer select-none'
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {menuOpen && (
        <ul className='flex flex-col md:hidden gap-4 mt-4 text-lg px-2'>
          <li><Link href='/' onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link href="/galery" onClick={() => setMenuOpen(false)}>Galeria</Link></li>
          <li><a href="/services" onClick={() => setMenuOpen(false)}>Serviços</a></li>
          <li><a href="#" onClick={() => setMenuOpen(false)}>Blog</a></li>
          <li><a href="/contactUs" onClick={() => setMenuOpen(false)}>Contatenos</a></li>
          <li><Link href='/aboutUs' onClick={() => setMenuOpen(false)}>Sobre Nós</Link></li>
        </ul>
      )}
    </header>
  )
}