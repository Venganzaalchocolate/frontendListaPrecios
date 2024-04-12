import Image from 'next/image'
import style from '../styles/Header.module.css'

export default function Header() {
  return (
    <header className={style.header}>
        <Image
            src="/images/logo_prime_blanco.png"
            width={1897/8}
            height={1168/8}
            alt="logotipo prime invest"
    />
    </header>
  )
}
