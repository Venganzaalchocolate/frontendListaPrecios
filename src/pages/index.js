import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { Layout } from "@/components/Layout";
import { useState } from "react";
import Campanias from "@/components/Campanias";
import Listaprecios from "@/components/Listaprecios";
import Tabla from "@/components/Tabla";
import Constructor from "@/components/Constructor";
import Observaciones from "@/components/Observaciones";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }) {
  const [cam, setstatecam] = useState("");
  const [pis, setstatepis] = useState("");

  const addCampania = (campania) => {
    console.log(pis);
    setstatecam(campania);
    fetchData(campania);
  };

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
      console.error("Error al obtener los datos:", error);
    }
  };

  const mostrarPrecios = () => {
    if (cam != "") {
      return (
        <div>
          <Constructor idCampania={cam}></Constructor>
          <Tabla idCampania={cam}></Tabla>
          <Listaprecios pis={pis}></Listaprecios>
          <Observaciones idCampania={cam}></Observaciones>
        </div>
      );
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
