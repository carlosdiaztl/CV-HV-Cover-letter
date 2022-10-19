import React from 'react'
import { useState } from "react";
import bateria from '../../icons/bateria.png'
import youtube from '../../icons/YouTube-Logo.png'
import Header from '../header/Header';
const Home = () => {
  let listaIzquierda=['Sobre mi','Educación','Habilidades']
    const [titulo , setTitulo] = useState( <> aqui un super mega diseño<div> <h3> con todos los juegutes</h3></div></>)
    const  changetittle=(cambio)=>{
      if (cambio==="Sobre mi") { setTitulo(<> aqui un super mega diseño<div> <h3> sin todos los juegutes</h3>y</div></>)
          
      }
      else if(cambio==="Educación"){
          setTitulo(<> aqui un super mega diseño<div> <h3> los juegutes</h3>x</div></>)
          
  
      }
      else if(cambio==="Habilidades"){
        setTitulo(<> aqui un super mega diseño<div> <h3> los juegutes</h3>f</div></>)

    }
      else{}
    }
  return (
    
    <main>
    <div className='divRender'>
    <img src={bateria}  alt='bateria' /> 
    
        {
            listaIzquierda.map((item,index)=>(
              <>
              <section>
                <hr/>
                <button  key={index} onClick={()=>{changetittle(item)}}> {item} </button>
              </section>
              </>

            ))
        }
        
        
    </div>
    <div className='divToRender'> 
    <Header/>
    <h3>{titulo} </h3>
    
 
    </div>

    </main>
  )

}

export default Home