'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const navLink = 'transition-colors duration-300 hover:text-[#028F92]'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className='sticky top-0 z-50 p-5 w-full text-[#525252] bg-[#F8F9F5]'>
      <ul className='hidden md:flex justify-around items-center w-full text-xl'>
        <li><Link href='/' className={navLink}>Home</Link></li>
        <li><Link href='/galery' className={navLink}>Galeria</Link></li>
        <li><a href="/services" className={navLink}>Serviços</a></li>
        <li>
          <Link href='/'>
            <Image src="/img/logo/LogoNova.png"  alt="Logo parque olho d'agua" width={200} height={100} />
          </Link>
        </li>
        <li><Link href="/blog" className={navLink}>Blog</Link></li>
        <li><Link href='/contactUs' className={navLink}>Contate-nos</Link></li>
        <li><Link href='/aboutUs' className={navLink}>Sobre Nós</Link></li>
      </ul>

      {/* Mobile */}
      <div className='flex md:hidden justify-between items-center w-full'>
        <Link href='/' onClick={() => setMenuOpen(false)}>
          <Image src="/img/logo/LogoNova.png" alt="Logo parque olho d'agua" width={150} height={100} />
        </Link>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          className='text-3xl p-2 text-black cursor-pointer select-none'
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {menuOpen && (
        <ul className='flex flex-col md:hidden gap-4 mt-4 text-lg px-2'>
          <li><Link href='/' className={navLink} onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link href="/galery" className={navLink} onClick={() => setMenuOpen(false)}>Galeria</Link></li>
          <li><a href="/services" className={navLink} onClick={() => setMenuOpen(false)}>Serviços</a></li>
          <li><a href="/blog" className={navLink} onClick={() => setMenuOpen(false)}>Blog</a></li>
          <li><a href="/contactUs" className={navLink} onClick={() => setMenuOpen(false)}>Contate-nos</a></li>
          <li><Link href='/aboutUs' className={navLink} onClick={() => setMenuOpen(false)}>Sobre Nós</Link></li>
        </ul>
      )}
    </header>
  )
}
