import React from 'react'
import datos from "../../public/datos.json";
import styles from "../styles/Observaciones.module.css";

//Función que recibe un id y renderiza comentarios asociadas a las campañas
export default function Observaciones({idCampania}) {
  //Filtramos los datos que nos llegan para quedarnos con el registro que coincide con el idCampania
  const campania = datos.find((campania) => campania.idCampania === idCampania);
  console.log(campania);
  //Si existe la campaña y si existen datos en el registro json
  if (campania && campania.observaciones && campania.comments) {
    const lineasObservaciones = Object.keys(campania.observaciones);
    const lineasComments = Object.keys(campania.comments);
    return (
      <div className={styles.contenedorObservaciones}>
        <div className={styles.datosObservaciones}>
            <div>OBSERVACIONES:</div>
            {lineasObservaciones.map((linea,index)=>(
                <div>{campania.observaciones[linea]}</div>
            ))}
            
         
        </div>

        <div className={styles.datosComments}>
            <div>COMMENTS:</div>
            {lineasComments.map((linea,index)=>(
                <div>{campania.comments[linea]}</div>
            ))}
          
        </div>

      </div>
    );
  } else {
    console.log("No existe contenido tabla");
    return null;
  }
}
