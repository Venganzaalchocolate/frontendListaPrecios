import { Inter } from "next/font/google";
import React, { useState } from 'react';
import { Layout } from "@/components/Layout";
import Campanias from "@/components/Campanias";
import MostrarPrecios from "@/components/MostrarPrecios";
import { listaPrecios, obtenerCampaniasActivas } from "@/API/services";


const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }) {
   // Estado para almacenar la campaña seleccionada (inicialmente vacío)
  const [campaniaSeleccionada, setCampaniaSeleccionada] = useState('');
   // Estado para almacenar los apartamentos de la campaña seleccionada (inicialmente vacío)
  const [apartamento, setApartamento] = useState('');
  
  // Simular un tiempo de carga (por ejemplo, una llamada a una API)
  const addCampania = async (campania) => {
    setCampaniaSeleccionada(campania)
    // Obtiene precios usando la API
    setApartamento(await listaPrecios(campania))
  }

 
  return (
    <>
      <Layout title={"Lista de precios"}>
          {/* Componente para seleccionar campañas y agregar la seleccionada a la variable 'campaniaSeleccionada' */}
        <Campanias data={data} addCampania={(x) => addCampania(x)}></Campanias>
        {/* Componente para mostrar las propiedades disponibles sobre la campaña seleccionada.  */}
        <MostrarPrecios campaniaSeleccionada={campaniaSeleccionada} viviendas={apartamento} data={data}/>
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
