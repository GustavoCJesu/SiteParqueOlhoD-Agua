import styles from '../Footer/footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='flex flex-col md:flex-row'>
      <div className={`w-full md:w-1/2 flex justify-center items-center flex-col text-center ${styles.leftFooter}`}>
        <div className={`flex flex-col`}>
          <Link href='#' className={styles.linkFooter}>Depoimentos</Link>
          <Link href='#' className={styles.linkFooter}>Contate-nos</Link>
          <Link href='#' className={styles.linkFooter}>Galeria</Link>
        </div>

        <div className='flex'>
          <Link href='#' className={styles.socialIcon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" className='w-8 h-8 md:w-10 md:h-10' viewBox="0 0 24 24">
              <g fill="none">
                <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                <path fill="currentColor" d="M13.5 21.888C18.311 21.164 22 17.013 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 5.013 3.689 9.165 8.5 9.888V15H9a1.5 1.5 0 0 1 0-3h1.5v-2A3.5 3.5 0 0 1 14 6.5h.5a1.5 1.5 0 0 1 0 3H14a.5.5 0 0 0-.5.5v2H15a1.5 1.5 0 0 1 0 3h-1.5z" />
              </g>
            </svg>
          </Link>

          <Link href='#' className={styles.socialIcon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" className='w-8 h-8 md:w-10 md:h-10' viewBox="0 0 24 24">
              <path fill="currentColor" d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28" />
            </svg>
          </Link>

          <Link href='#' className={styles.socialIcon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" className='w-8 h-8 md:w-10 md:h-10' viewBox="0 0 24 24">
              <path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3" />
            </svg>
          </Link>
        </div>

        <div className='px-4 md:px-6'>
          <p className='text-sm md:text-base'>
            O Parque Ecológico Olho D&apos;Água é ideal tanto para quem busca momentos de tranquilidade em meio à natureza quanto para famílias e aventureiros, combinando recreação ao ar livre com o respeito ao meio ambiente.
          </p>
          <p className={`${styles.textCopyright} text-xs md:text-sm`}>Todos os direitos reservados©</p>
        </div>
      </div>

      <div className='w-full md:w-1/2 flex justify-center md:justify-end'>
        <Image
          className={`${styles.imgFooter} self-end w-full md:w-auto`}
          src='/img/FotoFooter.webp'
          height={600}
          width={600}
          alt='Foto aerea do parque'
        />
      </div>
    </footer>
  )
}