import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CardList from '../Card/CardList'
import './Products.css'

const Products = () => {
  const [products, setProducts] = useState([])
  
  const getAllProducts = async () => {
    const resp = await axios.get('http://localhost:8080/api/admin/products')
    console.log('resp.data',resp.data)
    setProducts(resp.data)
    console.log('products',products)
  }
   
  useEffect(() =>{
    getAllProducts()
  },[]
  )

  return (
    <div>
      <div className="header">Products</div>
        <CardList data={products}/>
      </div>
  )}
 
  export default Products