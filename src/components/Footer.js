import Image from 'next/image'; // Importa el componente Image de la librería next/image para manejar imágenes optimizadas.
import style from '@/styles/Footer.module.css'; // Importa los estilos CSS definidos en el archivo '@/styles/Footer.module.css' (generalmente apunta a la raíz del proyecto en Next.js).

export default function Footer() { // Define un componente funcional por defecto llamado Footer.
    return (
        <footer className={style.footer}>  <div>  
            <a href='https://www.primeinvest.es/es/legal'>Información legal</a>  
            <a href='https://www.primeinvest.es/es/policy'>Política de privacidad</a>  
            <a href='https://www.primeinvest.es/es/cookies'>Política de cookies</a>  </div>
            <Image
                src="/images/logo_prime_blanco.png" // Establece la ruta a la imagen del logo.
                width={1897 / 9} // Define el ancho de la imagen como 1/9 del ancho original (1897px).
                height={1168 / 9} // Define el alto de la imagen como 1/9 del alto original (1168px).
                alt="logotipo prime invest" // Define el texto alternativo para accesibilidad.
            />
        </footer>
    );
}