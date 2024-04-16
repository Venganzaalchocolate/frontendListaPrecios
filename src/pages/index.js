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
import { listaPrecios, obtenerCampaniasActivas } from "@/conexionApi/peticionesApi";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }) {
  const [cam, setstatecam] = useState("");
  const [pis, setstatepis] = useState("");
  const [loading, setLoading] = useState(true);

  // Simular un tiempo de carga (por ejemplo, una llamada a una API)
  const addCampania = async (campania) => {
    setstatecam(campania)
    setstatepis(await listaPrecios(campania))
  }

  const mostrarPrecios =() => {
    if (cam != '') {
      return <div>
        <div id="cabeceramostrarprecios">
          <Constructor idCampania={cam}></Constructor>
          <Tabla idCampania={cam}></Tabla>
        </div>
        <div id="contenedorBotonPDF">
          <PDFDownloadLink className="botonpdf" document={<Pdf cam={cam} pisos={pis}></Pdf>} fileName="Lista de precios">
            {({ blob, url, loading, error }) =>
              loading ? 'LOADING...' : 'DESCARGAR PDF'}
          </PDFDownloadLink>
        </div>
        <Suspense fallback={<p>holi</p>}>
            <Listaprecios pis={pis}></Listaprecios>
            <Observaciones idCampania={cam}></Observaciones>
        </Suspense>
      </div>
    }
  };

  return (
    <>
      <Layout title={"Lista de precios"}>
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
