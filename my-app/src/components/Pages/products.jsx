import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CardList from '../Card/CardList'
import './Products.css'
import { Cascader } from 'antd'

const Products = () => {
  const [products, setProducts] = useState([])

  const options = [
    {
      value: 'Aspersores',
      label: 'Aspersores',
    },
    {
      value: 'Plantas',
      label: 'Plantas', 
    },
    {
      value: 'Macetas',
      label: 'Macetas', 
    },
    {
      value: 'Todos',
      label: 'Todos', 
    },
  ];
       
  function onChange(value) {
    console.log('options', options)
    
    if (value[0]){
      const query = value[0];
      console.log('value',value[0]);
      getProducts(query)
    }else if(value[1]){
      const query = value[1];
      console.log('value',value[1]);
      getProducts(query)
    }else if(value[2]){
      const query = value[2];
      console.log('value',value[2]);
      getProducts(query)
    }
  }
  
  const getProducts = async (query) => {
    
    const resp = await axios.get('http://localhost:8080/api/products',{ params: { category: query } })
    console.log('resp.data',resp.data)
    setProducts(resp.data)
    console.log('products',products)
    
  }

  useEffect(() =>{
    getProducts()
  },[]
  )
  
  return (
    <div>
      <div className="header">
        <div>
          <h1>PRODUCTOS</h1>
        </div>
        <div>
          <Cascader options={options} onChange={onChange} placeholder="Please select" />
        </div>
      </div>
        <CardList data={products}/>
    </div>
  )}
 
  export default Products




