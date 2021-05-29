import React, { useEffect, useState } from 'react'
import {Table} from 'antd'
import axios from 'axios'
import {DeleteOutlined , EditOutlined} from '@ant-design/icons';

const ProductsCrud = () => {

  const [products, setProducts] = useState([])
  const [isModalVisible, setIsModalVisible] = useState(true);
  //const token = Storage.getItem('Token') //, {headers:{'Authorization': 'bearer' + token}}

  const handleOnClick =() => {
    setIsModalVisible(true)
    console.log('visible:', isModalVisible)
  }
  
  const getAllProducts = async () => {
    const resp = await axios.get('http://localhost:8080/api/products');
    console.log(resp.data)
    setProducts(resp.data)
  }

  useEffect(() =>{
    getAllProducts()
  },[]
  )

  const columns = [
    {
      title: 'Producto',
      dataIndex: 'product',
      key: 'product',
    },
    {
      title: 'Marca',
      dataIndex: 'brand',
      key: 'brand',
    },
    {
      title: 'Categoria',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Descripcion',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Dimensiones',
      dataIndex: 'dimensions',
      key: 'dimensions',
    },
    {
      title: 'Uso',
      dataIndex: 'use',
      key: 'use',
    },
    {
      title: 'Imagen',
      dataIndex: 'photo_url',
      key: 'photo_url',
    },
    {
      title: 'Precio',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      key: 'actions',
      render: (text, row) =>
        <>
          <DeleteOutlined style={{fontSize:'25px', color:'red'}} />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <EditOutlined style={{fontSize:'25px', color:'blue'}} />
        </>
    },
  ];
  
  
  return (
    <div>
      
      <h1>Productos</h1>
      <Table dataSource={products} columns={columns} rowKey="_id"/>
    </div>

  )
}

export default ProductsCrud

