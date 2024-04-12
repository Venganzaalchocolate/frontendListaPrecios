import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { Layout } from "@/components/Layout";
import { useState, useEffect } from "react";
import Campanias from "@/components/Campanias";
import Listaprecios from "@/components/Listaprecios";
import Tabla from "@/components/Tabla";
import Constructor from "@/components/Constructor";
import Observaciones from "@/components/Observaciones";
import Pdf from "@/components/Pdfcreator";
import { PDFDownloadLink } from '@react-pdf/renderer';
import React from "react";



const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }) {
  const [cam, setstatecam] = useState("");
  const [pis, setstatepis] = useState("");
  const [isLoading, setIsLoading] = useState(true);


  const addCampania = (campania) => {
    setstatecam(campania)
    fetchData(campania)
  }

  const fetchData = async (cam) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/obtenercasasdisponibles/${cam}`
      );
      if (!response.ok) {
        throw new Error("Error al obtener los datos");
      }
      const data = await response.json();
      setstatepis(data);
    } catch (error) {
      setstatepis([])
      console.error('Error al obtener los datos:', error);
    }
  };

  const mostrarPrecios = () => {
    if (cam != '') {
      return <div>
        <div id="cabeceramostrarprecios">
          <Constructor idCampania={cam}></Constructor>
          <Tabla idCampania={cam}></Tabla>
        </div>
        <div id="contenedorBotonPDF">
          <PDFDownloadLink className="botonpdf" document={<Pdf cam={cam} pisos={pis}></Pdf>} fileName="Lista de precios">
            {({ blob, url, loading, error }) =>
              loading ? 'LOADING...' : 'DESCARGAR PDF'
            }
          </PDFDownloadLink>
        </div>

        <Listaprecios pis={pis}></Listaprecios>
        <Observaciones idCampania={cam}></Observaciones>
      </div>


    }
  };

  return (
    <>
      <Layout title={"Prueba front"}>
        <Campanias data={data} addCampania={(x) => addCampania(x)}></Campanias>
        {mostrarPrecios()}
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:8000/api/obtenercampaniasactivas");
  const data = await res.json();
  return {
    props: { data },
  };
}
