import React, {  useState } from 'react'
import { Modal , Button, Form , Input} from 'antd'
import axios from 'axios'

const {Item}=Form

const ProductModal =({productmodal, setProductModal , getAllProducts}) =>{
    console.log('dentro del product modal- modal', productmodal)
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
        setNewProduct({...newproduct,
            [name]: value});
            console.log('handleNewProduct',newproduct)
        }
    const saveModal = async ()=>{
        console.log('save modal - newproduct', newproduct)
        const response = await axios.post('http://localhost:8080/api/products/' , newproduct )
        //validar que salio ok el post para refrescar la tabla
        console.log('despues de dar de alta',response)
        closeModal()
        getAllProducts()
    }
        
    const formview={
        labelCol:{
            span:4},
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
        ]}>
         <Form {...formview}>
             <Item label="Producto">
                 <Input name="product" onChange={handleNewProduct}/>
             </Item>
             <Item label="Marca">
                 <Input name="brand" onChange={handleNewProduct}/>
             </Item>
             <Item label="Categoria">
                 <Input name=" category" onChange={handleNewProduct}/>
             </Item>
             <Item label="Descripcion">
                 <Input name="description" onChange={handleNewProduct}/>
             </Item>
             <Item label="Dimensiones">
                 <Input name="dimensions" onChange={handleNewProduct}/>
             </Item>
             <Item label="Uso">
                 <Input name="use" onChange={handleNewProduct}/>
             </Item>
             <Item label="Imagen">
                 <Input name="photo_url" onChange={handleNewProduct}/>
             </Item>
             <Item label="Precio">
                 <Input name="price" onChange={handleNewProduct}/>
             </Item>
         </Form>
      </Modal>
    </div>
)
}

export default ProductModal;