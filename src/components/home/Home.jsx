import React from 'react'
import { useState } from "react";
import bateria from '../../icons/bateria.png'
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Ej from '../minisEX/Ej';
import Ej2 from '../minisEX/Ej2';
import Ej3 from '../minisEX/Ej3';

const Home = () => {
  let listaIzquierda=['Sobre mi','Educación','Habilidades']
  const initialState=< ><div style={{display:'flex',flexDirection:'column',alignItems:'center'}}><h2> Siempre dispuesto a entregar una ayuda efectiva.</h2> </div>  </>
    const [info , setInfo] = useState(initialState)
    const  changetittle=(cambio)=>{
      if (cambio==="Sobre mi") { setInfo( <Ej/> )
          
      }
      else if(cambio==="Educación"){
        setInfo(<Ej2/>)
          
  
      }
      else if(cambio==="Habilidades"){
        setInfo(<Ej3/>)

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
    {info} 
    
        <Footer/>
    </div>

    </main>
  )

}

export default Home