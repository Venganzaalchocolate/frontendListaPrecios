import React,{useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faUpLong } from '@fortawesome/free-solid-svg-icons';


import styles from "../styles/ScrollToTopButton.module.css";
// className={styles.boton}

 const ScrollToTopButton=() => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    //Añado el evento al cargar
    window.addEventListener('scroll',handleScroll)

    //Al momento que haga scroll hacia arribe debe de volver a aparecer.
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    //Array vacio, aquí indicamos que este componente solo se ejecuta una vez
    //El equivalente a compoentnDidMount
  },[]);


 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button onClick={scrollToTop} className={styles.boton} style={{ display: isVisible ? 'flex' : 'none' }}>
     <FontAwesomeIcon icon={faUpLong} />
  
      </button>
  );
};

export default ScrollToTopButton; 