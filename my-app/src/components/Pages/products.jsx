import React, { useState } from 'react'
import imgProduct from '../../images/cubo2_a.jpg'

import './Products.css'

const Products = () => {

  return (
    <article>
      <section className="columns-desktop">
        <div className="article">
          <img className="img-article" src={imgProduct} alt=""/>
          <div className="columns">
            Cubo ...
          </div>
          <button data-order= "ver-mas">
              Ver Mas...
          </button>
        </div>
      </section>
    </article>
      
  );
  }

  export default Products