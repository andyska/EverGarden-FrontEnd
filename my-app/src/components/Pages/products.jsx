import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CardList from '../Card/CardList'
import './Products.css'
import { Select } from 'antd'

const { Option } = Select

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

  const [value, setValue] =  useState("Jardin vertical")
  const onChange =e=>{
    console.log('value', value)
    console.log('e',e)
      setValue(e)
      getProducts(e)
      console.log('value', value)
  }

  
  const getProducts = async (e) => {
    console.log('value del get', e)
    const resp = await axios.get('http://localhost:8080/api/products',{ params: { category: e } })
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
          <Select value={value}
                  placeholder="Seleccione categoria"
                  onChange={onChange}
                  name="select"
          >
                  <Option value={"Jardin vertical"}>Jardin vertical</Option>
                  <Option value={"repuestos"}>repuestos</Option>
                  <Option value={"armado"}>armado</Option>
                  <Option value={"vegetal"}>vegetal</Option>
                  <Option value={"accesorios riego"}>accesorios riego</Option>
                  <Option value={"tierras"}>tierras</Option>
          </Select>
        </div>
      </div>
        <CardList data={products}/>
    </div>
  )}
 
  export default Products




