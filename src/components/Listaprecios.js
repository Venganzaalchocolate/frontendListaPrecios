import { useState, useEffect, Suspense } from "react";
import styles from "../styles/Listaprecios.module.css"; 


export default function Listaprecios({ pis }) {
  if(pis!=null && pis!=[]) {
    return (
      
        <div id={styles.contenedorlista}>
        {pis.map((casa,index ) => {
          //
          const precioFormateado=casa.precioPropiedad.toLocaleString();
          return (
            <div key={index} className={styles.tarjeta}>
              <div className={styles.textoPrincipal}>
                <label>VIVIENDA</label>
                <label>PRECIO</label>
                <p className={styles.nombre}>{casa.nombrePropiedad}</p>
                <p className={styles.precio}>{precioFormateado} €</p>
              </div>
              <div className={styles.datos}>
                {(casa.bloquePropiedad != null) ?
                  <div>
                    <label>Bloque: {casa.bloquePropiedad}</label>
                  </div>
                  : null
                }
                {(casa.portalPropiedad != null) ?
                  <div>
                    <label>Portal: {casa.portalPropiedad}</label>
                  </div>
                  : null
                }
                {(casa.planta != null) ?
                  <div>
                    <label>Planta: {casa.plantaPropiedad}</label>
                  </div>
                  : null
                }
  
                {(casa.puerta != null) ?
                  <div>
                    <label>Puerta: {casa.puertaPropiedad}</label>
                  </div>
                  : null
                }
  
                {(casa.habitacionesPropiedad != null) ?
                  <div>
                    <label>Habitaciones: {casa.habitacionesPropiedad}</label>
                  </div>
                  : null
                }
  
                {(casa.banosPropiedad != null) ?
                  <div>
                    <label>Baños: {casa.banosPropiedad}</label>
                  </div>
                  : null
                }
  
                {(casa.metrosPropiedad != null) ?
                  <div>
                    <label>Contruidos: {casa.metrosPropiedad} m<sup>2</sup></label>
                  </div>
                  : null
                }
  
                {(casa.metrosUtilesPropiedad != null) ?
                  <div>
                    <label>Útiles: {casa.metrosUtilesPropiedad} m<sup>2</sup></label>
                  </div>
                  : null
                }
  
                {(casa.jardinPropiedad != null) ?
                  <div>
                    <label>Jardin: {casa.jardinPropiedad} m<sup>2</sup></label>
                  </div>
                  : null
                }
  
                {(casa.orientacionPropiedad != null) ?
                  <div>
                    <label>Orientacion: {casa.orientacionPropiedad}</label>
                  </div>
                  : null
                }
  
                {(casa.trasteroPropiedad != null) ?
                  <div>
                    <label>Trastero nº: {casa.trasteroPropiedad}</label>
                  </div>
                  : null
                }
  
                {(casa.plazaPropiedad != null) ?
                  <div>
                    <label>Plaza nº: {casa.plazaPropiedad}</label>
                  </div>
                  : null
                }
              </div>
            </div>
          )
  
        })}
      </div>
    
        
   
      )
  } else {
    null
  }
  
}
