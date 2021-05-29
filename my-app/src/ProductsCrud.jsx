import React, { useEffect, useState } from 'react'
import { Table , Button} from 'antd'
import axios from 'axios'
import {DeleteOutlined , EditOutlined, PlusCircleOutlined} from '@ant-design/icons';
import ProductModal from '../src/components/Modal/ProductModal'
import ModalConfirm from '../src/components/Modal/ModalConfirm'
import ModalUpDate from '../src/components/Modal/ModalUpDate'

const ProductsCrud = () => {

  const [products, setProducts] = useState([])
  const [productmodal, setProductModal] = useState(false)

  const getAllProducts = async () => {
    const resp = await axios.get('http://localhost:8080/api/products');
    console.log(resp.data)
    setProducts(resp.data)
  }

  useEffect(() =>{
    getAllProducts()
  },[]
  )

  const openModal = ()=>{
    setProductModal(true)
   }
 
  const [ isModalVisible, setIsModalVisible] = useState(false)
  const [ productdetails, setProductdetails]  = useState({})
    
  const handleOnDelete = (event) => {
        //antes de borrar llamar a un modal que confirme que quiere borrar ese libro
    setProductdetails (event)
       // console.log('books-handleOnDelete', bookdetails)
    setIsModalVisible(true)
    //const deleteId = event._id
          /*  const response = await axios.delete('http://localhost:8080/api/books/' + deleteId)
            //validar que salio ok el delete para refrescar la tabla
            console.log(response)
            getAllBooks()*/
    } 

  const handleOnUpDate= (event) => {
      //antes de borrar llamar a un modal que confirme que quiere borrar ese libro
    setProductdetails (event)
     // console.log('books-handleOnDelete', bookdetails)
    setIsModalVisible(true)
    //const deleteId = event._id
        /*  const response = await axios.delete('http://localhost:8080/api/books/' + deleteId)
          //validar que salio ok el delete para refrescar la tabla
          console.log(response)
          getAllBooks()*/
  } 

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
          <DeleteOutlined style={{fontSize:'25px', color:'red'}} onClick={()=>handleOnDelete(row)}/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <EditOutlined style={{fontSize:'25px', color:'blue'}} onClick={() =>handleOnUpDate(row)} />
        </>
    },

  ];
  
  
  return (
    <div>
      <Button type="primary" icon={<PlusCircleOutlined/>} onClick={openModal} >Nuevo Producto</Button>
      <ProductModal productmodal={productmodal} setProductModal={setProductModal} getAllProducts={getAllProducts} />
      <ModalConfirm isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} getAllProducts={getAllProducts} productdetails={productdetails} />
      <ModalUpDate isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} getAllProducts={getAllProducts} productdetails={productdetails} />
      <Table dataSource={products} columns={columns} rowKey="_id"/>
    </div>

  )
}

export default ProductsCrud

