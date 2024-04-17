import { sortBy } from "lodash";

// función que comprueba si una imagen existe
export function imagenExiste(imagen) {
  try {
    require(`../../public${imagen}`);
    return true;
  } catch (error) {
    return false;
  }
}

export const compararCasas = (casaA, casaB) => {
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

//Esta función no es usada, abarcaría su comparación hasta la letra de la puerta pero se han encontrado conflictos en la ordenación.

export const compararCasas2 = (casaA, casaB) => {
  // Función auxiliar para determinar si un nombre de propiedad contiene "PK" o "TR"
  const contienePKoTR = (nombrePropiedad) => {
    return nombrePropiedad.includes("PK") || nombrePropiedad.includes("TR");
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
        return casaA.plantaPropiedad.localeCompare(casaB.plantaPropiedad); // Ordenar alfabéticamente
      } else {
        const esNumeroA = !isNaN(casaA.plantaPropiedad);
        const esNumeroB = !isNaN(casaB.plantaPropiedad);

        if (esNumeroA && esNumeroB) {
          // Si ambos son números, ordenar numéricamente
          if (casaA.plantaPropiedad !== casaB.plantaPropiedad) {
            return casaA.plantaPropiedad - casaB.plantaPropiedad;
          } else {
            // Si las plantas son iguales, comparar por puerta
            return casaA.puertaPropiedad.localeCompare(casaB.puertaPropiedad);
          }
        } else if (esNumeroA && !esNumeroB) {
          // Si casaA es número y casaB no, casaA va antes
          return -1;
        } else if (!esNumeroA && esNumeroB) {
          // Si casaB es número y casaA no, casaB va antes
          return 1;
        } else {
          // Ambos son cadenas, comparar alfabéticamente
          return casaA.plantaPropiedad.localeCompare(casaB.plantaPropiedad);
        }
      }
    }
  }
};

// Función de comparación para ordenar los elementos, no se usa.
const compararCasas3 = (casaA, casaB) => {
  // Función auxiliar para determinar si un nombre de propiedad contiene "PK" o "TR"
  const contienePKoTR = (nombrePropiedad) => {
    return nombrePropiedad.includes("PK") || nombrePropiedad.includes("TR");
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
        return casaA.plantaPropiedad.localeCompare(casaB.plantaPropiedad); // Ordenar alfabéticamente
      } else {
        return casaA.plantaPropiedad - casaB.plantaPropiedad; // Ordenar numéricamente
      }
    }
  }
};
