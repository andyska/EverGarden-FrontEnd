import React, {  useState } from 'react'
import { Modal , Button, Form , Input} from 'antd'
import axios from 'axios'
import './ProductModal.css'
const {Item}=Form

const ModalUpDate = ({isModalVisible ,setIsModalVisible ,  getAllProducts , productdetails}) => {
  console.log('ModalUpDate-productdetails - 1', productdetails)
  const productid =  'http://localhost:8080/api/products/' + productdetails._id
  console.log('ModalUpDate-productdetails -2 ',productid)

  const [newproduct, setNewProduct] = useState({
    product: '',
    brand: '',
    category: '',
    description: '',
    dimensions: '',
    use: '',
    photo_url: '',
    price:0
  } )
    
  const handleCancel = ()=>{
    setIsModalVisible(false)
  }



  const handleOnUpDate = async (hhh) => {
    console.log('ModalUpDate-productdetails -3 ',hhh)
    try{
      hhh.preventDefault();
      const response = await axios.put(productid, newproduct)
      //validar que salio ok el put para refrescar la tabla
      console.log('despues de editar',response)
      getAllProducts()
      setIsModalVisible(false)
    } catch (error){
      console.log('handleOnUpDate-error', error)
      throw error
    }
  }

  const formview={
    labelCol:{
    span:8},
    wrapperCol:{
      span:16
      },
  }

return (
    <div>
      <Modal title='Editar Producto' 
        visible={isModalVisible}
        width={1000}
        onOk={handleOnUpDate}
        onCancel={handleCancel}
        >
         <Form {...formview}>
             <Item label="Producto">
                 <Input name="product" onChange={productdetails.product} value={productdetails.product}/>
             </Item>
             <Item label="Marca">
                 <Input name="brand" onChange={productdetails.brand}/>
             </Item>
             <Item label="Categoria">
                 <Input name="category" onChange={productdetails.category}/>
             </Item>
             <Item label="Descripcion">
                 <Input name="description" onChange={productdetails.description}/>
             </Item>
             <Item label="Dimensiones">
                 <Input name="dimensions" onChange={productdetails.dimensions}/>
             </Item>
             <Item label="Uso">
                 <Input name="use" onChange={productdetails.use}/>
             </Item>
             <Item label="Imagen">
                 <Input name="photo_url" onChange={productdetails.photo_url}/>
             </Item>
             <Item label="Precio">
                 <Input name="price" onChange={productdetails.price}/>
             </Item>
         </Form>
      </Modal>
    </div>
)
}

export default ModalUpDate;