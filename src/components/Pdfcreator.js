import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import datos from "../../public/datos.json";


//Función para check si exxiste
function imagenExiste(imagen) {
 try {
     require(`../../public${imagen}`);
     return true;
 } catch (error) {
     return false;
 }
}

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
        paddingTop: '10px',
        paddingBottom: '5px',
    },
    sectiondos: {
        display: 'flex',
        flexDirection: 'row',
        fontSize: '8pt',
        borderBottom: '1px solid black',
        paddingBottom: '10px',
    },
    texto: {
        textAlign: 'left',
        paddingLeft: '5px',
        
    },
    foto: {
        maxHeight:'200px',
        width:'auto'
    }
    
});

const Pdf = ({ pisos, cam }) => {
    const imagenPath= `/images/${cam}.png`;

    const ponerlogo=(path)=>{
        if (imagenExiste(path)){
            return <View>
                <Image style={styles.foto} src={path}/>
            </View>
        }
    }

    if (pisos != null && pisos != []) {
        return (
            <Document>
                <Page size="A4" style={styles.page}>
                    {ponerlogo(imagenPath)}
                    {pisos.map((casa) => {
                        return (
                            <View><View style={styles.section}>
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
                                    ?<Text style={styles.texto}>Jardin: {casa.jardinPropiedad} m2</Text>
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