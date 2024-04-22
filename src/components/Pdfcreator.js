import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import datos from "../../public/datos.json";
import { obtenerFechaHoraActual } from "@/utils/utils";
import { ordenarListaPropiedadess, imagenExiste } from "@/utils/utils";

// Estilos para la página y secciones del PDF
const styles = StyleSheet.create({
  page: {
    display: "flex",
    flexDirection: "column",
    padding: "1.5cm",
  },
  section: {
    display: "flex",
    flexDirection: "row",
    fontSize: "11pt",
    paddingTop: "5px",
    paddingBottom: "2.5px",
  },
  sectiondos: {
    display: "flex",
    flexDirection: "row",
    fontSize: "8pt",
    borderBottom: "1px solid black",
    paddingBottom: "5px",
  },

  cajafoto: {
    display: "flex",
    maxHeight: "100px",
  },
  texto: {
    textAlign: "left",
    paddingLeft: "5px",
  },
  foto: {
    objectFit: "contain",
  },
  datosTitulo: {
    fontSize: "12pt",
    backgroundColor: "black",
    color: "white",
    textAlign: "center",
    padding: "10px",
  },
  textocaja: {
    alignSelf: "flex-end",
    fontSize: "8pt",
    borderColor: "black",
    border: "1px",
    width: "10cm",
  },
  contenedorTabla: {
    border: "1px solid black",
  },
  textolinea: {
    textAlign: "left",
    padding: "10px",
    borderBottom: "1px solid black",
  },
  encabezado: {
    display: "flex",
  },
  tituloLista: {
    fontSize: "25pt",
    borderBottom: "1px solid black",
    paddingTop: "1cm",
  },
  fecha: {
    justifyContent: "flex-end",
    fontSize: "6pt",
    textAlign: "right",
  },
});

// Función para mostrar un recuadro con los datos de una campaña
function ponercaja(idCampania) {
  const campania = datos.find((campania) => campania.idCampania == idCampania);
  // Verificamos si existe la campaña y si hay datos en el registro JSON
  if (campania && campania.contenidotabla) {
    const contenidoTabla = campania.contenidotabla;
    const lineasTabla = Object.keys(contenidoTabla);
    return (
      <View style={styles.textocaja}>
        <Text style={styles.datosTitulo}>
          Datos - {campania.nombreCampania}
        </Text>
        <View>
          {/* Mapeo que recorre las líneas de la tabla y las muestra en el PDF */}
          {lineasTabla.map((linea, index) => (
            <Text key={index} style={styles.textolinea}>
              {linea}: {contenidoTabla[linea]}
            </Text>
          ))}
        </View>
      </View>
    );
  }
}

// Componente principal del PDF que recibe pisos (propiedades) y la campaña
const Pdf = ({ pisos, cam }) => {
  const imagenPath = `/images2/${cam}.png`;

  // Función para mostrar el logo si existe la imagen
  const ponerlogo = (path) => {
    if (imagenExiste(path)) {
      return (
        <View style={styles.cajafoto}>
          <Image style={styles.foto} src={path} />
        </View>
      );
    }
  };

  // Verificamos si hay pisos para mostrar
  if (pisos != null && pisos != []) {
      {/* Ordenar el array de acuerdo a la función de comparación */}
      const pisosOrdenados = [...pisos].sort(ordenarListaPropiedadess);
    return (
      <Document>
        <Page size="A4" style={styles.page}>
          {/* Encabezado del PDF con logo, fecha y datos de la campaña */}
          <View style={styles.encabezado}>
            {ponerlogo(imagenPath)}
            <Text style={styles.fecha}>{obtenerFechaHoraActual()}</Text>
            {ponercaja(cam)}
            <Text style={styles.tituloLista}>LISTA DE PRECIOS</Text>
          </View>
          {/* Recorremos los pisos (propiedades) y mostramos sus detalles */}
         
          {pisosOrdenados.map((casa,index) => {
            return (
              <View key={index}>
                <View key={index} style={styles.section}>
                  <Text style={styles.texto}>{casa.nombrePropiedad}</Text>
                  <Text style={styles.texto}>
                    Precio: {casa.precioPropiedad.toLocaleString()} €
                  </Text>
                  {/* Mostramos detalles adicionales solo si están definidos */}
                  {casa.bloquePropiedad != null ? (
                    <Text style={styles.texto}>
                      Bloque: {casa.bloquePropiedad}
                    </Text>
                  ) : (
                    <></>
                  )}
                  {casa.portalPropiedad != null ? (
                    <Text style={styles.texto}>
                      Portal: {casa.portalPropiedad}
                    </Text>
                  ) : (
                    <></>
                  )}
                  {casa.planta != null ? (
                    <Text style={styles.texto}>
                      Planta: {casa.plantaPropiedad}
                    </Text>
                  ) : (
                    <></>
                  )}
                  {casa.puerta != null ? (
                    <Text style={styles.texto}>
                      Puerta: {casa.puertaPropiedad}
                    </Text>
                  ) : (
                    <></>
                  )}
                </View>
                <View style={styles.sectiondos}>
                  {casa.habitacionesPropiedad != null ? (
                    <Text style={styles.texto}>
                      Habitaciones: {casa.habitacionesPropiedad}
                    </Text>
                  ) : (
                    <></>
                  )}
                  {casa.banosPropiedad != null ? (
                    <Text style={styles.texto}>
                      Baños: {casa.banosPropiedad}
                    </Text>
                  ) : (
                    <></>
                  )}
                  {casa.metrosPropiedad != null ? (
                    <Text style={styles.texto}>
                      Contruidos: {casa.metrosPropiedad} m2
                    </Text>
                  ) : (
                    <></>
                  )}
                  {casa.metrosUtilesPropiedad != null ? (
                    <Text style={styles.texto}>
                      Útiles: {casa.metrosUtilesPropiedad} m2
                    </Text>
                  ) : (
                    <></>
                  )}
                  {casa.jardinPropiedad != null ? (
                    <Text style={styles.texto}>
                      Jardin: {casa.jardinPropiedad} m2
                    </Text>
                  ) : (
                    <></>
                  )}
                  {casa.orientacionPropiedad != null ? (
                    <Text style={styles.texto}>
                      Orientacion: {casa.orientacionPropiedad}
                    </Text>
                  ) : (
                    <></>
                  )}
                  {casa.trasteroPropiedad != null ? (
                    <Text style={styles.texto}>
                      Trastero nº: {casa.trasteroPropiedad}
                    </Text>
                  ) : (
                    <></>
                  )}
                  {casa.plazaPropiedad != null ? (
                    <Text style={styles.texto}>
                      Plaza nº: {casa.plazaPropiedad}
                    </Text>
                  ) : (
                    <></>
                  )}
                </View>
              </View>
            );
          })}
        </Page>
      </Document>
    );
  } else {
    // Mostramos mensaje de error si no hay pisos para mostrar
    return (
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text>Error al generar el pdf</Text>
          </View>
        </Page>
      </Document>
    );
  }
};

export default Pdf;
