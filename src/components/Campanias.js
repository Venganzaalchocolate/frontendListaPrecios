import { useState } from "react"
import style from '../styles/Campanias.module.css'

export default function Campanias({data, addCampania}) {
    const [selectedOption, setSelectedOption]=useState('')

    const camCampania=()=>{
        if(selectedOption!=''){
            addCampania(selectedOption)
        }
        
    }

    const handleChange = (event) => {
        
        setSelectedOption(event.target.value);
    };

    return (
        <div id={style.contenedorcampanias}>
            <select name='cam' value={selectedOption} onChange={handleChange}>
                {data.map((x)=>{
                    return <option value={x.idCampania}>{x.nombreCampania}</option>
                })}
            </select>
            <button onClick={()=>camCampania()}>Ver Precios</button>
        </div>
   
  )
}
