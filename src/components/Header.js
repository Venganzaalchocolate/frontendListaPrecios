import Image from 'next/image'; // Importa el componente Image de la librería next/image para manejar imágenes optimizadas.
import style from '../styles/Header.module.css'; // Importa los estilos CSS definidos en el archivo ../styles/Header.module.css.

export default function Header() {  // Define un componente funcional por defecto llamado Header.
  return (
    // Crea un elemento header y aplica la clase definida en el CSS importado.
    <header className={style.header}>  
      <Image
        src="/images/logo_prime_blanco.png" // Establece la ruta a la imagen del logo.
        width={1897 / 8} // Define el ancho de la imagen como 1/8 del ancho original (1897px).
        height={1168 / 8} // Define el alto de la imagen como 1/8 del alto original (1168px).
        alt="logotipo prime invest" // Define el texto alternativo para accesibilidad.
      />
    </header>
  );
}
