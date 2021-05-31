import React, { useState } from 'react'
//import imgContent from '../../images/fondo.png'
//import imgContent from '../../images/fondo5.png'
import imgContent from '../../images/fondo_4.png'
import imgIndex from '../../images/fotoinicial.jpg'
import './Index.css'

const containerStyle = {
  backgroundImage: "url(" + imgContent + ")",
  backgroundPosition: 'center',
  backgroundSize: '100%',
  backgroundRepeat: 'no-repeat'
};

const IndexPage = () => {

  return (
      <div className="container" style={containerStyle}>
        <div className="col">
          <div className="col2"/>
          <div className="col2">
            <p className="p-frase">"Planta tus sueños y crecerán días felices"</p>
            <p className="p-frase">"Ever Garden"</p>
          </div>
        
        </div>
        <div className="col">
          <img className="img-index" src={imgIndex} alt="" />
        </div>
        
      </div>
  );
  }

  export default IndexPage