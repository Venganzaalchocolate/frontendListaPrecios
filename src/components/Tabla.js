import React from "react";
import styles from "../styles/Tabla.module.css";

//Función que recibe un id y renderiza un div con datos extraidos de un json
export default function Tabla({ idCampania, data }) {
  //Filtramos los datos que nos llegan para quedarnos con el registro que coincide con el idCampania
  const campania = data.find((campania) => campania.idCampania === idCampania);
  //Si existe la campaña y si existen datos en el registro json
  if (campania && campania.contenidotabla) {
    const contenidoTabla = campania.contenidotabla;
    const lineasTabla = Object.keys(contenidoTabla);
    return (
      <div className={styles.prueba}>

        <div className={styles.contenedorTabla}>
        <div className={styles.datosTitulo}>
          Datos - {campania.nombreCampania}
        </div>
        <div className={styles.datosContenedor}>
          {/* Map que recorre, si hay dato lo saca en un div */}
          {lineasTabla.map((linea, index) => (
            <div key={index} className={styles.dato}>
              <div className={styles.nombreDato}>{linea}</div>
              <div className={styles.valorDato}>{contenidoTabla[linea]}</div>
            </div>
          ))}
        </div>
      </div>
      </div>
      
    );
  }
}
