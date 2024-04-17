import styles from "../styles/Listaprecios.module.css"; // Importa los estilos CSS definidos en el archivo ../styles/Listaprecios.module.css.
import { compararCasas } from "@/functions/pdf";
//JL2-PK126 & TR126
//contenga, PK y TR jardines de la laguna

export default function Listaprecios({ pis }) {
  // Define un componente funcional por defecto llamado Listaprecios que recibe un prop "pis" (un array de datos de viviendas).
  // Comprueba si la lista de pisos no es nulo ni vacío.
  if (pis != null && pis != []) {
    // Ordenar el array de acuerdo a la función de comparación
    const pisOrdenados = [...pis].sort(compararCasas);

    return (
      // Si el array es válido, retorna el código JSX para renderizar la lista de precios.
      <div id={styles.contenedorlista}>
        {pisOrdenados.map((casa, index) => {
          // Recorre el array "pis" con map, asignando cada elemento a la variable "casa" e index al índice actual.

          const precioFormateado = casa.precioPropiedad.toLocaleString(); // Formatea el precio para separarlo con comas.
          return (
            // Por cada vivienda, retorna una tarjeta individual.
            <div key={index} className={styles.tarjeta}>
              {" "}
              {/* Crea un div con una clave única y la clase definida en el CSS */}
              <div className={styles.textoPrincipal}>
                {" "}
                {/* Crea un div para el texto principal */}
                <label>VIVIENDA</label>{" "}
                {/* Etiqueta para el título "VIVIENDA" */}
                <label>PRECIO</label> {/* Etiqueta para el título "PRECIO" */}
                <p className={styles.nombre}>{casa.nombrePropiedad}</p>{" "}
                {/* Muestra el nombre de la vivienda */}
                <p className={styles.precio}>{precioFormateado} €</p>{" "}
                {/* Muestra el precio formateado */}
              </div>
              <div className={styles.datos}>
                {" "}
                {/* Crea un div para los datos de la vivienda */}
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
                      Contruidos: {casa.metrosPropiedad} m<sup>2</sup>
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
