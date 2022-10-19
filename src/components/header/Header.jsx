import React from 'react'
import linked from '../../icons/logo-linkedin-.png'
import github from '../../icons/github.png'
import youtube from '../../icons/YouTube-Logo.png'



let listaHeader=[
    {img:linked,link:'https:linkedin.com/in/carlos-díaz-alzate-937748233'},{
        img:github,link:'https://github.com/carlosdiaztl'},{
            img:youtube,link:'https://www.youtube.com/channel/UC_w4jLrLYukxQGcMTulDUSA/videos'}
        ]
const Header = () => {
  return (
    <>
    <h1>Carlos Andrés Díaz Álzate </h1>
    <div className='header'> 
    {
        listaHeader.map((item,index)=>(
            <section>
            <a href={item.link} ><img src={item.img} alt=""  /> </a>
                 
    

            </section>
        ))
    }
    
    
    
    


    </div>

    </>
    
  )
}

export default Header