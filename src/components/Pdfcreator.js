import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

import { obtenerFechaHoraActual } from "@/utils/utils";
import { ordenarListaPropiedades, imagenExiste } from "@/utils/utils";
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
    maxWidth: "7cm"
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
    display:'flex'
  },
  textoobservaciones:{
    fontSize: "8pt",
  },
  cajaObservaciones:{
    paddingTop: "1cm"
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
    flexDirection: "row"
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
  cajaDatos: {
    display: "flex",
    justifyContent: "flex-end",
    alignSelf:"flex-end",
    alignContent:"flex-end",
    width:"100%"
  }
});
// Función para mostrar un recuadro con los datos de una campaña
function addCaja(idCampania, data) {
  const campania = data.find((campania) => campania.idCampania == idCampania);
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

 function addObservaciones( idCampania,data) {
  //Filtramos los datos que nos llegan para quedarnos con el registro que coincide con el idCampania
  const campania = data.find((campania) => campania.idCampania === idCampania);
  //Si existe la campaña y si existen datos en el registro json
  if (campania && campania.observaciones && campania.comments) {
   
    const observaciones=(campania.observaciones.linea1!=null)?campania.observaciones.linea1.split('\n'):[];
    const comments=(campania.comments.linea1!=null)?campania.comments.linea1.split('\n'):[];
    return (
      <View>
        <View style={styles.cajaObservaciones}>
          {observaciones.map((li, index) => (
            <Text style={styles.textoobservaciones} key={index}>{li}</Text>
          ))}
        </View>

        <View style={styles.cajaObservaciones}>
          {comments.map((linea, index) => (
            <Text style={styles.textoobservaciones} key={index}>{linea}</Text>
          ))}
        </View>
      </View>
    );
  } else {
    return null;
  }
}



// Componente principal del PDF que recibe viviendas (propiedades) y la campaña
const Pdf = ({ viviendas, cam, data }) => {
  const imagenPath = `/images/${cam}.png`;
  // Función para mostrar el logo si existe la imagen
  const addLogotipo = (path) => {
    if (imagenExiste(path)) {
      return (
        <View style={styles.cajafoto}>
          <Image style={styles.foto} src={path} />
        </View>
      );
    }
  };
  // Verificamos si hay viviendas para mostrar
  if (viviendas != null && viviendas != []) {
      {/* Ordenar el array de acuerdo a la función de comparación */}
      const pisosOrdenados = [...viviendas].sort(ordenarListaPropiedades);
    return (
      <Document>
        <Page size="A4" style={styles.page}>
          {/* Encabezado del PDF con logo, fecha y datos de la campaña */}
          <View style={styles.encabezado}>
            {addLogotipo(imagenPath)}
            <View style={styles.cajaDatos}>
            <Text style={styles.fecha}>{obtenerFechaHoraActual()}</Text>
            {addCaja(cam, data)}
            </View>
          </View>
          {/* Recorremos los viviendas (propiedades) y mostramos sus detalles */}
          <View><Text style={styles.tituloLista}>LISTA DE PRECIOS</Text></View>


          {/* Recorremos los viviendas (propiedades) y mostramos sus detalles */}

          {pisosOrdenados.map((casa, index) => {
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
                    <Text style={styles.texto}>Trasteros: 1 
                    </Text>
                  ) : (
                    <></>
                  )}
                  {casa.plazaParking2 != null ? ( // Si el numero de plaza de parking está definida, muestra la etiqueta y el valor.
                    <Text style={styles.texto}>Parkings: 2</Text>
                  ) : casa.plazaParking1 != null ? (
                    <Text style={styles.texto}>Parkings: 1</Text>
                  ) : null}
                </View>
              </View>
            );
          })}
          {addObservaciones(cam,data)}
        </Page>
      </Document>
    );
  } else {
    // Mostramos mensaje de error si no hay viviendas para mostrar
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
