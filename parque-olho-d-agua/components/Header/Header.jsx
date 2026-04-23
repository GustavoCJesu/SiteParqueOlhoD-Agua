

import Image from  'next/image'
import '../Header/header.module.css'
import Link from 'next/link'



export default function Header(){
    return(
        <header className='p-5'>
            <ul className={`flex justify-around items-center header text-xl`}>
                <li className='menuItem'><Link href='/'>Home</Link></li>
                <li className='menuItem'><a href="#">Galeria</a></li>
                <li className='menuItem'><a href="/services">Serviços</a></li>
                <li className=""><Image className='logoImg' src="/img/logo/LogoParque.png" alt="Logo parque olho d'agua" width={100} height={100}/></li>
                <li className='menuItem'><a href="#">Blog</a></li>
                <li className='menuItem'><a href="#">Contatenos</a></li>
                <li className='menuItem'><Link href='/aboutUs'>Sobre Nós</Link></li>
            </ul>
        </header>
    )
}