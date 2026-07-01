'use client'
import { usePathname } from 'next/navigation'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Formulario from './Formulario/Formulario'

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isStandalone = pathname.startsWith('/login') || pathname.startsWith('/admin')

  if (isStandalone) return <>{children}</>

  return (
    <>
      <Header />
      {children}
      <Formulario />
      <Footer />
    </>
  )
}
