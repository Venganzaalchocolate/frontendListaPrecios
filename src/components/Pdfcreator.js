import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import datos from "../../public/datos.json";
import { obtenerFechaHoraActual } from '@/functions/date';

//Función para check si exxiste


const styles = StyleSheet.create({
    page: {
        display: 'flex',
        flexDirection: 'column',
        padding: '1.5cm'
    },
    section: {
        display: 'flex',
        flexDirection: 'row',
        fontSize: '11pt',
        paddingTop: '5px',
        paddingBottom: '2.5px',
    },
    sectiondos: {
        display: 'flex',
        flexDirection: 'row',
        fontSize: '8pt',
        borderBottom: '1px solid black',
        paddingBottom: '5px',
    },

    cajafoto: {
        display: 'flex',
        maxHeight: '100px'

    },
    texto: {
        textAlign: 'left',
        paddingLeft: '5px',

    },
    foto: {
        objectFit: 'contain'
    },
    datosTitulo: {
        fontSize:'12pt',
        backgroundColor:'black',
        color:'white',
        textAlign:'center',
        padding:'10px',
    },
    textocaja:{
        alignSelf:'flex-end',
        fontSize: '8pt',
        borderColor: 'black',
        border:'1px',
        width: '10cm'
    },
    contenedorTabla:{
        border: '1px solid black'
    },
    textolinea: {
        textAlign: 'left',
        padding: '10px',
        borderBottom: '1px solid black'
    },
    encabezado:{
        display:'flex'
    },
    tituloLista:{
        fontSize:'25pt',
        borderBottom:'1px solid black',
        paddingTop: '1cm',
    },
    fecha:{
        justifyContent:'flex-end',
        fontSize:'6pt',
        textAlign:'right'
    }

});

function imagenExiste(imagen) {
    try {
        require(`../../public${imagen}`);
        return true;
    } catch (error) {
        return false;
    }
}

function ponercaja(idCampania) {
    
    const campania = datos.find((campania) => campania.idCampania == idCampania);
    console.log(campania);
    //Si existe la campaña y si existen datos en el registro json
    if (campania && campania.contenidotabla) {
        const contenidoTabla = campania.contenidotabla;
        const lineasTabla = Object.keys(contenidoTabla);
        return (
            <View style={styles.textocaja}>
                <Text style={styles.datosTitulo}>
                    Datos - {campania.nombreCampania}
                </Text>
                <View >
                    {/* Map que recorre, si hay dato lo saca en un div */}
                    {lineasTabla.map((linea, index) => (
                        <Text style={styles.textolinea}>{linea}: {contenidoTabla[linea]}</Text>
                    ))}
                </View>
            </View>
        );
    }
}

const Pdf = ({ pisos, cam }) => {
    const imagenPath = `/images2/${cam}.png`;

    const ponerlogo = (path) => {
        if (imagenExiste(path)) {
            return <View style={styles.cajafoto}>
                <Image style={styles.foto} src={path} />
            </View>
        }
    }

    if (pisos != null && pisos != []) {
        return (
            <Document>
                <Page size="A4" style={styles.page}>
                    <View style={styles.encabezado}>
                        {ponerlogo(imagenPath)}
                        <Text style={styles.fecha}>{obtenerFechaHoraActual()}</Text>
                        {ponercaja(cam)}
                        <Text style={styles.tituloLista}>LISTA DE PRECIOS</Text>
                    </View>
                    
                    {pisos.map((casa) => {
                        return (
                            <View>
                                
                                <View style={styles.section}>
                                <Text style={styles.texto}>{casa.nombrePropiedad}</Text>
                                <Text style={styles.texto}>Precio: {casa.precioPropiedad}</Text>
                                {(casa.bloquePropiedad != null)
                                    ? <Text style={styles.texto}>Bloque: {casa.bloquePropiedad}</Text>
                                    : <></>}
                                {(casa.portalPropiedad != null)
                                    ? <Text style={styles.texto}>Portal: {casa.portalPropiedad}</Text>
                                    : <></>}
                                {(casa.planta != null)
                                    ? <Text style={styles.texto}>Planta: {casa.plantaPropiedad}</Text>
                                    : <></>}
                                {(casa.puerta != null)
                                    ? <Text style={styles.texto}>Puerta: {casa.puertaPropiedad}</Text>
                                    : <></>}
                            </View><View style={styles.sectiondos}>
                                    {(casa.habitacionesPropiedad != null)
                                        ? <Text style={styles.texto}>Habitaciones: {casa.habitacionesPropiedad}</Text>
                                        : <></>}
                                    {(casa.banosPropiedad != null)
                                        ? <Text style={styles.texto}>Baños: {casa.banosPropiedad}</Text>
                                        : <></>}
                                    {(casa.metrosPropiedad != null)
                                        ? <Text style={styles.texto}>Contruidos: {casa.metrosPropiedad} m2</Text>
                                        : <></>}
                                    {(casa.metrosUtilesPropiedad != null)
                                        ? <Text style={styles.texto}>Útiles: {casa.metrosUtilesPropiedad} m2</Text>
                                        : <></>}
                                    {(casa.jardinPropiedad != null)
                                        ? <Text style={styles.texto}>Jardin: {casa.jardinPropiedad} m2</Text>
                                        : <></>}
                                    {(casa.orientacionPropiedad != null)
                                        ? <Text style={styles.texto}>Orientacion: {casa.orientacionPropiedad}</Text>
                                        : <></>}
                                    {(casa.trasteroPropiedad != null)
                                        ? <Text style={styles.texto}>Trastero nº: {casa.trasteroPropiedad}</Text>
                                        : <></>}
                                    {(casa.plazaPropiedad != null)
                                        ? <Text style={styles.texto}>Plaza nº: {casa.plazaPropiedad}</Text>
                                        : <></>}
                                </View></View>
                        )

                    })}
                </Page>
            </Document>
        );
    } else {
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

}

export default Pdf;