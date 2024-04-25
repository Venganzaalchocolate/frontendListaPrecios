import React from "react";
import styles from "../styles/Observaciones.module.css";

//Función que recibe un id y renderiza comentarios asociadas a las campañas
export default function Observaciones({ idCampania,data }) {
  //Filtramos los datos que nos llegan para quedarnos con el registro que coincide con el idCampania
  const campania = data.find((campania) => campania.idCampania === idCampania);
  //Si existe la campaña y si existen datos en el registro json
  if (campania && campania.observaciones && campania.comments) {
   
    const observaciones=(campania.observaciones.linea1!=null)?campania.observaciones.linea1.split('\n'):[];
    const comments=(campania.comments.linea1!=null)?campania.comments.linea1.split('\n'):[];
    return (
      <div className={styles.contenedorObservaciones}>
        <div className={styles.datosObservaciones}>
          {observaciones.map((li, index) => (
            <div key={index}>{li}</div>
          ))}
        </div>

        <div className={styles.datosComments}>
          {comments.map((linea, index) => (
            <div key={index}>{linea}</div>
          ))}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
