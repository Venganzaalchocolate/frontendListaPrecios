import React from "react";
import datos from "../../public/datos.json";
import styles from "../styles/Tabla.module.css";


//Función que recibe un id y renderiza una tabla con datos extraidos de un json
export default function Tabla({ idCampania }) {
  // console.log("idCampania: "+ idCampania)
  // console.log("Lectura datos")
  // console.log(datos);
  //Filtramos los datos que nos llegan para quedarnos con el registro que coincide con el idCampania
  const campania = datos.find((campania) => campania.idCampania === idCampania);
  // console.log(campania)
  //propuesta de mejora, solo if(campania),
  // if (
  //   idCampania != null &&
  //   idCampania != "" &&
  //   campania != null &&
  //   campania != ""
  // )
  if(campania)
  
  {
    return (
      <div >
        <table className={styles.tablaDatos}>
          <thead>
            <tr>
              <th colSpan="5">Datos - {campania.nombreCampania}</th>
            </tr>
          </thead>
          <tbody>
            {/* <tr>
                            <th>ID Campaña:</th>
                            <td>{campania.idCampania}</td>
                        </tr>
                        <tr>
                            <th>Nombre Campaña:</th>
                            <td>{campania.nombreCampania}</td>
                        </tr> */}
            <tr>
              <th>Dato 1:</th>
              <td>{campania.dato1}</td>
            </tr>
            <tr>
              <th>Dato 2:</th>
              <td>{campania.dato2}</td>
            </tr>
            <tr>
              <th>Dato 3:</th>
              <td>{campania.dato3}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  } else {
    null;
    console.log("No hay tabla");
  }
}
