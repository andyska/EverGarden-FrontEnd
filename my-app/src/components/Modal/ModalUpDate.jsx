import React, {  useState , useEffect} from 'react'
import { Modal , Button, Form , Input} from 'antd'
import axios from 'axios'
import './ProductModal.css'
const {Item}=Form

const ModalUpDate = ({isModalVisible ,setIsModalVisible ,  getAllProducts , productdetails}) => {
  console.log('ModalUpDate-productdetails - 1', productdetails)
  const productid =  'http://localhost:8080/api/products/' + productdetails._id
  console.log('ModalUpDate-productdid -2 ',productid)
  const [formedit] = Form.useForm()

  const [editproduct, setEditProduct] = useState({
    product: productdetails.product,
    brand: productdetails.brand,
    category: productdetails.category,
    description: productdetails.description,
    dimensions: productdetails.dimensions,
    use: productdetails.use,
    photo_url: productdetails.photo_url,
    price: productdetails.price
  } )

  const handleCancel = ()=>{
    setIsModalVisible(false)
  }

 const handleEditProduct=e=>{
    const {name, value } = e.target ;
    setEditProduct({...editproduct, [name]: value});
    console.log('etarget',e.target);
    console.log('handleEdit',{...editproduct, [name]: value});
    console.log('edito producto', editproduct)
}

  const handleOnUpDate = async (hhh) => {
    console.log('ModalUpDate-productdetails -3 ',hhh)
    try{  
      hhh.preventDefault();
      const response = await axios.put(productid, editproduct)
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

  useEffect(() =>{
    getAllProducts()
  },[]
  )



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
                 <Input name="product" onChange={handleEditProduct} />
             </Item>
             <Item label="Marca">
                 <Input name="brand" onChange={handleEditProduct} value={productdetails.brand}/>
             </Item>
             <Item label="Categoria">
                 <Input name="category" onChange={handleEditProduct} value={productdetails.category}/>
             </Item>
             <Item label="Descripcion">
                 <Input name="description" onChange={handleEditProduct} value={productdetails.description}/>
             </Item>
             <Item label="Dimensiones">
                 <Input name="dimensions" onChange={handleEditProduct} value={productdetails.dimensions}/>
             </Item>
             <Item label="Uso">
                 <Input name="use" onChange={handleEditProduct} value={productdetails.use}/>
             </Item>
             <Item label="Imagen">
                 <Input name="photo_url" onChange={handleEditProduct} value={productdetails.photo_url}/>
             </Item>
             <Item label="Precio">
                 <Input name="price" onChange={handleEditProduct} value={productdetails.price}/>
             </Item>
         </Form>
      </Modal>
    </div>
)
}

export default ModalUpDate;