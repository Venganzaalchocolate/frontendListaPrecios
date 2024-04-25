import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faUpLong } from "@fortawesome/free-solid-svg-icons";

import styles from "../styles/ScrollToTopButton.module.css";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  // Detectamos el scroll del usuario
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY; // Obtenemos la posición del scroll
      if (scrollY > 200) {
        // Si el scroll está por encima de 200px
        setIsVisible(true); // Mostramos el botón
      } else {
        setIsVisible(false); // Ocultamos el botón
      }
    };

    // Añadimos el evento 'scroll' al cargar el componente
    window.addEventListener("scroll", handleScroll);

    // Eliminamos el evento 'scroll' al desmontar el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // Array vacío: indica que el efecto se ejecuta solo una vez después del renderizado inicial
    // Similar a componentDidMount de React Class Components
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      // Función para hacer scroll hacia arriba
      top: 0, // Desplazar a la posición superior (top: 0)
      behavior: "smooth", // Animación suave del scroll
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={styles.boton}
      style={{ display: isVisible ? "flex" : "none" }}
    >
      <FontAwesomeIcon icon={faUpLong} className={styles.icono} /> {/* Icono de flecha hacia arriba */}
    </button>
  );
};

export default ScrollToTopButton;
