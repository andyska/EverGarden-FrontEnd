import React, {  useState } from 'react'
import { Modal , Button, Form , Input, message, Select} from 'antd'
import axios from 'axios'

const {Item}=Form
const { Option } = Select;

const UserModal =({usermodal, setModal , getAllUsers}) =>{
    const [form] = Form.useForm();
    
    const [newtype,setNewType] =useState('')
    const handletype = t =>{
       // console.log('habndletype t',t )
        setNewType(t);
    }

    const [newuser, setNewuser] = useState({
        firstName: '',
        lastName: '',
        userName: 'X',
        password:'',
        email:  '' 
    } )

    
    const closeModal = ()=>{
        setModal(false)
    }
    
    const handleNewUser=e=>{
       // console.log('target- e',e , 'name' ,name )
        const {name, value } = e.target ;
        setNewuser({...newuser,
            [name]: value});
          //  console.log('handlenewuser-name', name, '-',newuser)
    }

    const saveModal = async ()=>{
        setNewuser({...newuser, type:newtype})
        //console.log(form.validateFields)
        try{
           //console.log('FRONT-save modal-newuser:', newuser)
            const response = await axios.post('http://localhost:8080/api/users/' , newuser )
            //validar que salio ok el post para refrescar la tabla
            //console.log('Front-new USER -response',response)
            message.success("Se creo usuario: " + response.data.userName)
            closeModal()
            getAllUsers()
        } catch (error) {
            //console.log("POST newuser Failed", error)
            message.error("Fallo la Grabacion del usuario - Error:"  + error)
            throw error
        }
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
      <Modal title='Datos del Usuario' 
        visible={usermodal}
        width={1000}
        footer={[
            <Button onClick={closeModal}>Cancelar</Button>,
            <Button type="primary" onClick={saveModal}>Guardar</Button>
        ]}>
         <Form {...formview}>
             <Item label="Nombre" name="firstName" rules={[{ required: true, message: 'Por favor ingrese el NOMBRE' }]}>
                 <Input name="firstName" onChange={handleNewUser} allowClear/>
             </Item>
             <Item label="Apellido" name="lastName" rules={[{ required: true, message: 'Por favor ingrese el APELLIDO' }]}>
                 <Input name="lastName" onChange={handleNewUser} allowClear/>
             </Item>
             <Item label="Tipo" name="type" rules={[{ required: true, message: 'Seleccione el TIPO de usuario' }]}>
                <Select width="80%"
                    placeholder="Seleccione Tipo de Usuario"
                    onChange={handletype}
                    allowClear
                    >
                    <Option value="admin">admin</Option>
                    <Option value="visita">visita</Option>
                </Select>
             </Item>
             <Item label="Mail" name="email" rules={[{ required: true, message: 'Por favor ingrese el Mail' }]}>
                 <Input name="email" onChange={handleNewUser} allowClear/>
             </Item>
             <Item label="Password"  name="password" rules={[{ required: true, message: 'Ingrese PASSWORD (max. 10 Caracteres)' }]}>
                 <Input.Password name="password" onChange={handleNewUser} allowClear/>
             </Item>
         </Form>
      </Modal>
    </div>
)
}

export default UserModal;