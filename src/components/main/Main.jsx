import React from "react";
import '../../styles/style.scss'
import { useState } from "react";
import Ej from "../minisEX/Ej";
import Ej2 from "../minisEX/Ej2";




const Main=()=>{
const [titulo , setTitulo] = useState( <> aqui un super mega diseño<div> <h1> con todos los juegutes</h1></div></>)

   const  changetittle=(cambio)=>{
    if (cambio==="si") { setTitulo(<> aqui un super mega diseño<div> <h1> sin todos los juegutes</h1><Ej/></div></>)
        
    }
    else if(cambio==="no"){
        setTitulo(<> aqui un super mega diseño<div> <h1> los juegutes</h1><Ej2/></div></>)

    }
    else{}
   

   }
    return(
        <>
        <main className="main">
        <h1>{titulo} </h1>
        <button onClick={()=>{changetittle('si')}}> cambiar titulo1</button>
        <button onClick={()=>{changetittle('no')}}> cambiar titulo2</button>
        
           
           

        </main>
    
        </>

    )
}
export default Main