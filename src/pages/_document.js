import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  // Este componente Document define la estructura básica del documento HTML de la página
  return (
    <Html lang="es">  {/* Define el idioma del documento (español) */}
      <Head />        {/* Contenedor para etiquetas meta, títulos, etc. */}
      <body>
        <Main />        {/* Contenedor principal para el contenido de la página */}
        <NextScript />  {/* Inserta scripts de Next.js necesarios para la aplicación */}
      </body>
    </Html>
  );
}
