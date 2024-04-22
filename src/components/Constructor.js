import Image from "next/image";
import React from "react";
import styles from "../styles/Constructor.module.css";
import { imagenExiste } from "@/utils/utils";

// Función que busca una imagen con el id especificado y la renderiza si existe
export default function Constructor({ idCampania }) {
  // Construimos la ruta de la imagen
  const imagenPath = `/images/${idCampania}.png`;

  // Verificamos si la imagen PNG existe
  const imagenPNGExiste = imagenExiste(imagenPath);

  // Devolvemos el componente correspondiente según la existencia de la imagen
  if (imagenPNGExiste) {
    return (
      <div className={styles.contenedor}>
        <img src={imagenPath} alt="Imagen de la campaña" />
      </div>
    );
  } else {
    return null;
  }
}
