
// función que comprueba si una imagen existe
export function imagenExiste(imagen) {
    try {
        require(`../../public${imagen}`);
        return true;
    } catch (error) {
        return false;
    }
}

// Función de comparación para ordenar los elementos
export const compararCasas = (casaA, casaB) => {
    // Función auxiliar para determinar si un nombre de propiedad contiene "PK" o "TR"
    const contienePKoTR = (nombrePropiedad) => {
      return nombrePropiedad.includes("PK") || nombrePropiedad.includes("TR");
    };
  
    // Si una casa contiene "PK" o "TR" y la otra no, la casa que contiene debe ir al final
    if (contienePKoTR(casaA.nombrePropiedad) && !contienePKoTR(casaB.nombrePropiedad)) {
      return 1; // Casa A va después de Casa B
    } else if (!contienePKoTR(casaA.nombrePropiedad) && contienePKoTR(casaB.nombrePropiedad)) {
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
        } else if (!isNaN(casaA.plantaPropiedad) && isNaN(casaB.plantaPropiedad)) {
          return -1; // Casa A va antes de Casa B (casaA.plantaPropiedad es un número)
        } else if (isNaN(casaA.plantaPropiedad) && isNaN(casaB.plantaPropiedad)) {
          return casaA.plantaPropiedad.localeCompare(casaB.plantaPropiedad); // Ordenar alfabéticamente
        } else {
          return casaA.plantaPropiedad - casaB.plantaPropiedad; // Ordenar numéricamente
        }
      }
    }
  };