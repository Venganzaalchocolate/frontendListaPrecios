import { useState } from "react"; // Importa el hook useState de React para manejar estados del componente.
import style from '../styles/Campanias.module.css'; // Importa los estilos CSS definidos en el archivo ../styles/Campanias.module.css.

export default function Campanias({ data, addCampania }) { // Define un componente funcional por defecto llamado Campanias que recibe dos props: data (un array de datos) y addCampania (una función para agregar campañas).
  const [selectedOption, setSelectedOption] = useState(''); // Crea un estado usando useState para almacenar la opción seleccionada (inicialmente vacía).

  const handleCampania = () => { // Define una función llamada handleCampania.
    if (selectedOption !== '') { // Comprueba si la opción seleccionada no está vacía.
      addCampania(selectedOption); // Si hay una opción seleccionada, llama a la función addCampania pasándole la opción.
    }
  };

  const handleChange = (event) => { // Define una función llamada handleChange para manejar el cambio de selección.
    setSelectedOption(event.target.value); // Actualiza el estado selectedOption con el valor del elemento seleccionado (event.target.value).
  };

    return (
        <div id={style.contenedorcampanias}>  {/* Crea un div con el id definido en el CSS */}
            <h2>LISTA DE PRECIOS</h2>  {/* Muestra un título "LISTA DE PRECIOS" */}
            <div>  {/* Crea otro div contenedor */}
           
                <select name='cam' value={selectedOption} onChange={handleChange}> {/* Crea un elemento select para la lista desplegable */}
                {data.map((x,index)=>{ // Recorre el array de datos (data) con map.
                    return <option key={index} value={x.idCampania}>{x.nombreCampania}</option> //Por cada elemento del array, retorna una opción con el valor del id y el nombre de la campaña 
                })}
                </select>
                <button onClick={() => handleCampania()}>CONSULTAR PRECIO</button>  {/* Crea un botón que llama a la función handleCampania al hacer clic */}
            </div>
            
        </div>
   
  )
}
