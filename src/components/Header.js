import Image from 'next/image'
import style from '../styles/Header.module.css'

export default function Header() {
  return (
    <header className={style.header}>
        <Image
            src="/images/logo_prime.png"
            width={260/2}
            height={101/2}
            alt="logotipo prime invest"
    />
    </header>
  )
}
