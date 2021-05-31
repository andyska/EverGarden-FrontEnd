import React, {  useState } from 'react'
import { Modal , Button, Form , Input, message, Select} from 'antd'
import axios from 'axios'
import './ProductModal.css'
const {Item}=Form

const ProductModal =({productmodal, setProductModal , getAllProducts}) =>{
    console.log('dentro del product modal- modal', productmodal)
    const token = localStorage.getItem('Token')

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
    
    const closeModal = ()=>{
      setProductModal(false)
    }

    const handleNewProduct=e=>{
        const {name, value } = e.target ;
        setNewProduct({...newproduct, [name]: value});
        console.log('nuevo producto', newproduct)
    }

   /* const saveModal = async ()=>{
        console.log('save modal - newproduct', newproduct)
        const response = await axios.post('http://localhost:8080/api/admin/products/' , newproduct )
        //validar que salio ok el post para refrescar la tabla
        console.log('despues de dar de alta',response)
        closeModal()
        getAllProducts()
    }*/

    const saveModal = async e => {
        e.preventDefault();
        try{
            const resp = await axios.post('http://localhost:8080/api/admin/products', newproduct,{headers: {Authorization: 'Bearer ' + token}});
            console.log(resp)
            closeModal()
            getAllProducts()
        } catch (error){
            message.error("Fallo la Grabacion del Producto - Error:"  + error)
            throw error
        }
    };
        
    const formview={
        labelCol:{
            span:8},
        wrapperCol:{
            span:16
        },
    }
           
return (
    <div>
      <Modal title='Nuevo Producto' 
        visible={productmodal}
        width={1000}
        footer={[
            <Button onClick={closeModal}>Cancelar</Button>,
            <Button type="primary" onClick={saveModal}>Guardar</Button>
        ]}
        onCancel={closeModal}>
         <Form {...formview}>
            <Item label="Producto" 
              name="product" 
              rules={[{ required: true, message: 'Ingrese nombre del PRODUCTO (max:20)' , max:20 }]}
            >
                <Input name="product" onChange={handleNewProduct} allowClear/>
            </Item>

            <Item label="Marca" 
              name="brand" 
              rules={[{ required: true, message: 'Ingrese la MARCA (max:20)' , max:20}]}
            >
                 <Input name="brand" onChange={handleNewProduct} allowClear/>
             </Item>

             <Item label="Categoria" 
              name="category" 
              rules={[{ required: true, message: 'Ingrese CATEGORIA (max:20)' , max:20}]}
            >
                 <Input name="category" onChange={handleNewProduct} allowClear/>
             </Item>

              <Item label="Descripcion" 
              name="description" 
              rules={[{ required: true, message: 'Ingrese DESCRIPCION (max:200)' , max:200}]}
            >
                 <Input name="description" onChange={handleNewProduct} allowClear/>
             </Item>

             <Item label="Dimensiones" 
              name="dimensions" 
              rules={[{ required: true, message: 'Ingrese DIMENSIONES (max:15)' , max:15}]}
            >
                 <Input name="dimensions" onChange={handleNewProduct} allowClear/>
             </Item>

             <Item label="Tipo de Uso" 
              name="use" 
              rules={[{ required: true, message: 'Ingrese tipo de USO (max:15)' , max:15}]}
            >
                 <Input name="use" onChange={handleNewProduct} allowClear/>
             </Item>

             <Item label="Url Imagen" 
              name="photo_url" 
              rules={[{ required: true, message: 'Ingrese URL (max:200)' , max:200}]}
            >
                 <Input name="photo_url" onChange={handleNewProduct} allowClear/>
             </Item>

              <Item label="Precio" 
              name="price" 
              rules={[{ required: true, message: 'Ingrese PRECIO'}]}
            >
                 <Input name="price" onChange={handleNewProduct} allowClear/>
             </Item>
         </Form>
      </Modal>
    </div>
)
}

export default ProductModal;