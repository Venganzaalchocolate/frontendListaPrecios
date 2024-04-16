import React,{useState, useEffect} from 'react'

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

    console.log("numero" +scrollY)

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
    <button onClick={scrollToTop} className={styles.boton} style={{ display: isVisible ? 'block' : 'none' }}>
   <FontAwesomeIcon icon="fa-solid fa-up-long" style={{color: "#FFD43B",}} />
  
      </button>
  );
};

export default ScrollToTopButton; 