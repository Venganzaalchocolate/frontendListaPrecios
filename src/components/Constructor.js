import React from "react";
import styles from "../styles/Constructor.module.css";


// Función que busca una imagen con el id especificado y la renderiza si existe
export default function Constructor({logo, idCampania }) {
  // Devolvemos el componente correspondiente según la existencia de la imagen
  if (logo.status_code!=404) {
    return (
      <div className={styles.contenedor}>
        <img className={styles.imglogotipos} src={logo} alt="Imagen de la campaña" />
      </div>
    );
  } else {
    return null;
  }
}
