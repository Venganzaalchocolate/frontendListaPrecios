// función que comprueba si una imagen existe
export function imagenExiste(imagen) {
    try {
      require(`../../public${imagen}`);
      return true;
    } catch (error) {
      return false;
    }
  }
  
  export const ordenarListaPropiedades = (casaA, casaB) => {
    // Función auxiliar para determinar si un nombre de propiedad contiene "PK" o "TR"
    const contienePKoTR = (nombrePropiedad) => {
      return nombrePropiedad.includes("PK") || nombrePropiedad.includes("TR");
    };
  
    // Función auxiliar para determinar si la planta indica ático
    const esAtico = (plantaPropiedad) => {
      return (
        plantaPropiedad.toLowerCase() === "at" ||
        plantaPropiedad.toLowerCase() === "ático"
      );
    };
  
    // Si una casa contiene "PK" o "TR" y la otra no, la casa que contiene debe ir al final
    if (
      contienePKoTR(casaA.nombrePropiedad) &&
      !contienePKoTR(casaB.nombrePropiedad)
    ) {
      return 1; // Casa A va después de Casa B
    } else if (
      !contienePKoTR(casaA.nombrePropiedad) &&
      contienePKoTR(casaB.nombrePropiedad)
    ) {
      return -1; // Casa A va antes de Casa B
    } else {
      // Si ninguna casa contiene "PK" o "TR", se ordenan por bloque, portal, planta y puerta
      if (casaA.bloquePropiedad !== casaB.bloquePropiedad) {
        // Ordenar por bloque
        return casaA.bloquePropiedad - casaB.bloquePropiedad;
      } else if (casaA.portalPropiedad !== casaB.portalPropiedad) {
        // Ordenar por portal
        return casaA.portalPropiedad - casaB.portalPropiedad;
      } else {
        // Ordenar por planta
        if (isNaN(casaA.plantaPropiedad) && !isNaN(casaB.plantaPropiedad)) {
          return 1; // Casa A va después de Casa B (casaB.plantaPropiedad es un número)
        } else if (
          !isNaN(casaA.plantaPropiedad) &&
          isNaN(casaB.plantaPropiedad)
        ) {
          return -1; // Casa A va antes de Casa B (casaA.plantaPropiedad es un número)
        } else if (isNaN(casaA.plantaPropiedad) && isNaN(casaB.plantaPropiedad)) {
          // Si ambas casas tienen planta "AT" o similar, ordenar por planta
          if (esAtico(casaA.plantaPropiedad) && !esAtico(casaB.plantaPropiedad)) {
            return 1;
          } else if (
            !esAtico(casaA.plantaPropiedad) &&
            esAtico(casaB.plantaPropiedad)
          ) {
            return -1;
          } else {
            return casaA.plantaPropiedad.localeCompare(casaB.plantaPropiedad);
          }
        } else {
          // Ambas son números, ordenar numéricamente
          if (
            parseInt(casaA.plantaPropiedad) !== parseInt(casaB.plantaPropiedad)
          ) {
            return (
              parseInt(casaA.plantaPropiedad) - parseInt(casaB.plantaPropiedad)
            );
          } else {
            // Si las plantas son iguales, comparar por puerta
            return casaA.puertaPropiedad.localeCompare(casaB.puertaPropiedad);
          }
        }
      }
    }
  };


  //Función que devuelve la fecha y la hora actual en el momento de la descarga del documento.
export function obtenerFechaHoraActual() {
    // Obtener la fecha y hora actual
    const fechaHoraActual = new Date();

    // Obtener el día, mes y año
    const dia = fechaHoraActual.getDate();
    const mes = fechaHoraActual.getMonth() + 1; // Los meses van de 0 a 11, así que se suma 1
    const año = fechaHoraActual.getFullYear();

    // Obtener la hora, minutos y segundos
    const horas = fechaHoraActual.getHours();
    const minutos = fechaHoraActual.getMinutes();
    const segundos = fechaHoraActual.getSeconds();

    // Formatear la fecha y hora en una cadena legible
    const fechaHoraFormateada = `${dia}/${mes}/${año} ${horas}:${minutos}:${segundos}`;

    return fechaHoraFormateada;
}
