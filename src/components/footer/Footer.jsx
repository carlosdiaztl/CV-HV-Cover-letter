import React from 'react'
import pc from '../../icons/pc.png'
import engranaje from '../../icons/engranaje.png'
import lapiz from '../../icons/lapiz.png'
const Footer = () => {
    let listaFooter=[
        {img:pc,text:'Desarrolo front end'},
        {img:engranaje,text:'Progamador web'},
        {img:lapiz,text:'Diseño web'}
    ]
  return (
    <div className='footer'>
    {
        listaFooter.map((item,index)=>(
        <section key={index}>
                <img src={item.img} />
                <h6> {item.text} </h6>

        </section>

        ))
      
    }
    
    </div>
  )
}

export default Footer