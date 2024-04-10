import Image from 'next/image';
import React from 'react'

//Función que busca una imagen la cual coincide con el id
//lo renderiza si existe
export default function Constructor({idCampania}) {
 console.log("buscar idImagen" + idCampania)
 //Construyo ruta de imagen
 const imagenPath= `/images/${idCampania}.png`;
 
 //Función para check si exxiste
 function imagenExiste(imagen) {
  try {
      require(`../../public${imagen}`);
      return true;
  } catch (error) {
      return false;
  }
}
 //Miro si existe
 const imagenPNGExiste = imagenExiste(imagenPath);

 //Retornamos dependiendo de si existe o no.
 if (imagenPNGExiste) {
  return (
      <div>
          
          <Image src={imagenPath} alt="Imagen de la campaña" width={500} height={500} />
      </div>
  );
} else {
  return (
    null
      // <div>
      //     <h2>Imagen de la Campaña</h2>
      //     <p>No se encontró ninguna imagen para la campaña.</p>
      // </div>
  );
}
}
