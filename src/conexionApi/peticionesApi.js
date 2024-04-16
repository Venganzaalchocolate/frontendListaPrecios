export const listaPrecios = async (cam) => {
    try {
        const response = await fetch(
            `http://127.0.0.1:8000/api/obtenercasasdisponibles/${cam}`
        );
        if (!response.ok) {
            throw new Error("Error al obtener los datos");
        }
        return await response.json();

    } catch (error) {
        return []
        console.error('Error al obtener los datos:', error);
    }
}

export const  obtenerCampaniasActivas = async ()=>{
    const res = await fetch("http://localhost:8000/api/obtenercampaniasactivas");
    return await res.json();
    
}