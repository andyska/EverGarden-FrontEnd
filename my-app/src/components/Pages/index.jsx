import React, { useState } from 'react'
import imgContent from '../../images/header_a.jpg'


const IndexPage = () => {
  

  return (
      <div className="container-fluid contenido">
        <div className="fila-1 row">
          
          <div className="col-1 col-sm-6">
            <div className="col-container">
              <h1>¡Hola!
                <br/>
                <strong>Soy Estefanía Beltrami</strong>
                <img src={imgContent} alt="" />
              </h1>
            </div>
          </div>
        </div>
      </div>
  );
  }

  export default IndexPage