export const listaPrecios = async (cam) => { // Define una función asíncrona llamada listaPrecios que recibe un parámetro "cam".
    try { // Bloque para manejar intentos correctos.
        const response = await fetch( // Realiza una petición HTTP GET asíncrona.
            `http://127.0.0.1:8000/api/obtenercasasdisponibles/${cam}` // URL de la API para obtener casas disponibles, incluyendo el parámetro "cam" en la ruta.
        );
        if (!response.ok) { // Comprueba si la respuesta de la API es exitosa.
            throw new Error("Error al obtener los datos"); // Si no es exitosa, lanza una excepción con un mensaje de error.
        }
        return await response.json(); // Si la respuesta es exitosa, espera a que se convierta en JSON y lo retorna.
    } catch (error) { // Bloque para manejar errores.
        console.error('Error al obtener los datos:', error); // En caso de error, lo imprime en la consola.
        return []; // Retorna un array vacío para indicar que no se pudieron obtener datos.
    }
};

export const obtenerCampaniasActivas = async () => { // Define una función asíncrona llamada obtenerCampaniasActivas.
    const res = await fetch("http://localhost:8000/api/obtenercampaniasactivas"); // Realiza una petición HTTP GET asíncrona a la URL de la API para obtener campañas activas.
    return await res.json(); // Espera a que la respuesta se convierta en JSON y lo retorna.
};
