import Image from 'next/image'
import style from '@/styles/Footer.module.css'

export default function Footer() {
    return (
        <footer className={style.footer}>
            <div>
                <a href='https://www.primeinvest.es/es/legal'>Información legal</a>
                <a href='https://www.primeinvest.es/es/policy'>Política de privacidad</a>
                <a href='https://www.primeinvest.es/es/cookies'>Política de cookies</a>
            </div>
            <Image
                src="/images/logo_prime_blanco.png"
                width={1897/9}
                height={1168/9}
                alt="logotipo prime invest"
            />
        </footer>
    )
}
