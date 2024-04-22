const config=require('@/config.js')


// Función auxiliar para manejar las peticiones HTTP y los errores
const handleRequest = async (url, errorMessage) => {
    try {
        const response = await fetch(url); // Realiza la petición HTTP GET asíncrona.
        if (!response.ok) { // Comprueba si la respuesta de la API es exitosa.
            throw new Error(errorMessage); // Si no es exitosa, lanza una excepción con el mensaje de error recibido.
        }
        return await response.json(); // Espera a que la respuesta se convierta en JSON y lo retorna.
    } catch (error) {
        console.error(`Error al obtener los datos: ${error}`); // En caso de error, imprime el mensaje de error en la consola.
        return []; // Retorna un array vacío para indicar que no se pudieron obtener datos.
    }
};

// Función que devuelve los datos de las propiedades activas.
export const listaPrecios = async (cam) => {
    const url = `${config}obtenercasasdisponibles/${cam}`; // URL de la API para obtener casas disponibles.
    return await handleRequest(url, "Error al obtener los datos de listaPrecios"); // Llama a la función auxiliar con la URL y el mensaje de error.
};

// Función que devuelve los datos de las campañas activas.
export const obtenerCampaniasActivas = async () => {
    const url = `${config}obtenercampaniasactivas`; // URL de la API para obtener campañas activas.
    return await handleRequest(url, "Error al obtener los datos de obtenerCampaniasActivas"); // Llama a la función auxiliar con la URL y el mensaje de error.
};


