import { Inter } from "next/font/google";
import { Layout } from "@/components/Layout";
import { useState, useEffect, Suspense } from "react";
import Campanias from "@/components/Campanias";
import Listaprecios from "@/components/Listaprecios";
import Tabla from "@/components/Tabla";
import Constructor from "@/components/Constructor";
import Observaciones from "@/components/Observaciones";
import Pdf from "@/components/Pdfcreator";
import { PDFDownloadLink } from '@react-pdf/renderer';
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { listaPrecios, obtenerCampaniasActivas } from "@/conexionApi/peticionesApi";



const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }) {
   // Estado para almacenar la campaña seleccionada (inicialmente vacío)
  const [campaniaSeleccionada, setCampaniaSeleccionada] = useState("");
   // Estado para almacenar los apartamentos de la campaña seleccionada (inicialmente vacío)
  const [apartamento, setApartamento] = useState("");
  

  // Simular un tiempo de carga (por ejemplo, una llamada a una API)
  const addCampania = async (campania) => {
    setCampaniaSeleccionada(campania)
    // Obtiene precios usando la API
    setApartamento(await listaPrecios(campania))
  }

 // Muestra los detalles de la campaña y los precios solo si hay una campaña seleccionada
  const mostrarPrecios =() => {
    if (campaniaSeleccionada != '') {
      return <div>
         {/* Muestra los detalles de la campaña seleccionada */}
        <div id="cabeceramostrarprecios">
          <Constructor idCampania={campaniaSeleccionada}></Constructor>
          <Tabla idCampania={campaniaSeleccionada}></Tabla>
        </div>
        <div id="contenedorBotonPDF">
          <PDFDownloadLink className="botonpdf" document={<Pdf cam={campaniaSeleccionada} pisos={apartamento}></Pdf>} fileName="Lista de precios">
            {({ blob, url, loading, error }) =>
              loading ? 'LOADING...' : 'DESCARGAR PDF'}
          </PDFDownloadLink>
        </div>
        <div>
           {/* Botón para subir al inicio */}
          <ScrollToTopButton />
        </div>
        {/* Muestra la lista de precios */}
        <Listaprecios pis={apartamento}></Listaprecios>
         {/* Muestra las observaciones de la campaña */}
        <Observaciones idCampania={campaniaSeleccionada}></Observaciones>
      </div>
    }
  };

  return (
    <>
      <Layout title={"Lista de precios"}>
          {/* Componente para seleccionar campañas y agregar la seleccionada a la variable 'campaniaSeleccionada' */}
        <Campanias data={data} addCampania={(x) => addCampania(x)}></Campanias>
        {mostrarPrecios()}
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const data = await obtenerCampaniasActivas();
  return {
    props: { data },
};
}
