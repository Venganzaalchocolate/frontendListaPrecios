import styles from "../styles/Listaprecios.module.css"; // Importa los estilos CSS definidos en el archivo ../styles/Listaprecios.module.css.
import {ordenarListaPropiedades } from "@/utils/utils";

//Función que recibe por parámetro una lista de viviendas las ordena y luego las muestra una por una. 
export default function Listaprecios({ viviendas }) {
  // Define un componente funcional por defecto llamado Listaprecios que recibe un prop "viviendas" (un array de datos de viviendas).
  // Comprueba si la lista de pisos no es nulo ni vacío.
  if (viviendas != null && viviendas != []) {
    // Ordenar el array de acuerdo a la función de comparación
    const viviendasOrdenadas = [...viviendas].sort(ordenarListaPropiedades);

    return (
      // Si el array es válido, retorna el código JSX para renderizar la lista de precios.
      <div id={styles.contenedorlista}>
        {viviendasOrdenadas.map((casa, index) => {
          // Recorre el array "viviendas" con map, asignando cada elemento a la variable "casa" e index al índice actual.

          const precioFormateado = casa.precioPropiedad.toLocaleString(); // Formatea el precio para separarlo con comas.
          return (
            // Por cada viviendas, retorna una tarjeta individual.
            <div key={index} className={styles.tarjeta}>
              {" "}
              {/* Crea un div con una clave única y la clase definida en el CSS */}
              <div className={styles.textoPrincipal}>
                {" "}
                {/* Crea un div para el texto principal */}
                <label>VIVIENDA</label>{" "}
                {/* Etiqueta para el título "viviendas" */}
                <label>PRECIO</label> {/* Etiqueta para el título "PRECIO" */}
                <p className={styles.nombre}>{casa.nombrePropiedad}</p>{" "}
                {/* Muestra el nombre de la viviendas */}
                <p className={styles.precio}>{precioFormateado} €</p>{" "}
                {/* Muestra el precio formateado */}
              </div>
              <div className={styles.datos}>
                {" "}
                {/* Crea un div para los datos de la viviendas */}
                {casa.bloquePropiedad != null ? ( // Si el bloque está definido, muestra la etiqueta y el valor.
                  <div>
                    <label>Bloque: {casa.bloquePropiedad}</label>
                  </div>
                ) : null}
                {casa.portalPropiedad != null ? ( // Si el portal está definido, muestra la etiqueta y el valor.
                  <div>
                    <label>Portal: {casa.portalPropiedad}</label>
                  </div>
                ) : null}
                {casa.plantaPropiedad != null ? ( // Si la planta está definida, muestra la etiqueta y el valor.
                  <div>
                    <label>Planta: {casa.plantaPropiedad}</label>
                  </div>
                ) : null}
                {casa.puertaPropiedad != null ? ( // Si la puerta está definida, muestra la etiqueta y el valor.
                  <div>
                    <label>Puerta: {casa.puertaPropiedad}</label>
                  </div>
                ) : null}
                {casa.habitacionesPropiedad != null ? ( // Si las habitaciones están definidas, muestra la etiqueta y el valor.
                  <div>
                    <label>Habitaciones: {casa.habitacionesPropiedad}</label>
                  </div>
                ) : null}
                {casa.banosPropiedad != null ? ( // Si los baños están definidos, muestra la etiqueta y el valor.
                  <div>
                    <label>Baños: {casa.banosPropiedad}</label>
                  </div>
                ) : null}
                {casa.metrosPropiedad != null ? ( // Si los metros cuadrados están definidos, muestra la etiqueta y el valor.
                  <div>
                    <label>
                      Construidos: {casa.metrosPropiedad} m<sup>2</sup>
                    </label>
                  </div>
                ) : null}
                {casa.metrosUtilesPropiedad != null ? ( // Si los metros útiles están definidos, muestra la etiqueta y el valor.
                  <div>
                    <label>
                      Útiles: {casa.metrosUtilesPropiedad} m<sup>2</sup>
                    </label>
                  </div>
                ) : null}
                {casa.jardinPropiedad != null ? ( // Si el jardín está definido, muestra la etiqueta y el valor.
                  <div>
                    <label>
                      Jardin: {casa.jardinPropiedad} m<sup>2</sup>
                    </label>
                  </div>
                ) : null}
                {casa.orientacionPropiedad != null ? ( // Si la orientación está definida, muestra la etiqueta y el valor.
                  <div>
                    <label>Orientacion: {casa.orientacionPropiedad}</label>
                  </div>
                ) : null}
                {casa.trasteroPropiedad != null ? ( // Si el trastero está definida, muestra la etiqueta y el valor.
                  <div>
                    <label>Trasteros: 1</label>
                  </div>
                ) : null}
                {casa.plazaParking2 != null ? ( // Si el numero de plaza de parking está definida, muestra la etiqueta y el valor.
                  <div>
                    <label>Parkings: 2</label>
                  </div>
                ) : casa.plazaParking1 !=null ?
                <div>
                    <label>Parkings: 1</label>
                  </div>
                :null
                }


              </div>
            </div>
          );
        })}
      </div>
    );
  } else {
    null;
  }
}
