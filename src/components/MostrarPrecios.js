import React from 'react';
import Listaprecios from "@/components/Listaprecios";
import Tabla from "@/components/Tabla";
import Constructor from "@/components/Constructor";
import Observaciones from "@/components/Observaciones";
import Pdf from "@/components/Pdfcreator";
import { PDFDownloadLink } from '@react-pdf/renderer';
import ScrollToTopButton from "@/components/ScrollToTopButton";

//Componente que renderiza el detalle de los precios de las propiedades según la campaña que haya sido seleccionada.
const MostrarPrecios=({campaniaSeleccionada, viviendas, data })=>{
    if (campaniaSeleccionada != '') {
        return <div>
           {/* Muestra los detalles de la campaña seleccionada */}
          <div id="cabeceramostrarprecios">
            <Constructor idCampania={campaniaSeleccionada}></Constructor>
            <Tabla idCampania={campaniaSeleccionada} data={data}></Tabla>
          </div>
          <div id="contenedorBotonPDF">
            <PDFDownloadLink className="botonpdf" document={<Pdf cam={campaniaSeleccionada} 
            data={data}
            viviendas={viviendas}></Pdf>} fileName="Lista de precios">
              {({ blob, url, loading, error }) =>
                loading ? 'LOADING...' : 'DESCARGAR PDF'}
            </PDFDownloadLink>
          </div>
          <div>
             {/* Botón para subir al inicio */}
            <ScrollToTopButton />
          </div>
          {/* Muestra la lista de precios */}
          <Listaprecios viviendas={viviendas}></Listaprecios>
           {/* Muestra las observaciones de la campaña */}
          <Observaciones idCampania={campaniaSeleccionada} data={data}></Observaciones>
        </div>
      }
}



export default MostrarPrecios;