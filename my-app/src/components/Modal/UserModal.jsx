import React, {  useState, useEffect } from 'react'
import { Modal , Button, Form , Input, message, Select} from 'antd'
import axios from 'axios'
import './UserModal.css'

const {Item}=Form
const { Option } = Select;

const UserModal =({usermodal, setModal , getAllUsers}) =>{
    const [formadd] = Form.useForm();
    const token = localStorage.getItem('Token')
    //este use efect limpia el form al entrar
    useEffect(()=>{
        console.log('useEffect','adentro')
        formadd.setFieldsValue ({
            firstName : '',
            lastName : '',
            userName :'',
            type : '',
            email : '' ,
            password: ''})
    } )

    const [newtype,setNewType] =useState('visitor')
    const handletype = t =>{
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
           console.log('FRONT-save modal-newuser:', newuser)
            const response = await axios.post('http://localhost:8080/api/admin/users/' , newuser ,{headers: {Authorization: 'Bearer ' + token}});
            //validar que salio ok el post para refrescar la tabla
            //console.log('Front-new USER -response',response)
            message.success("Se creo usuario: " + response.data.userName)
            closeModal()
            getAllUsers()
        } catch (error) {
            console.log("POST newuser Failed", error)
            
            message.error("Fallo la Grabacion del usuario - Error:"  + error)
            throw error
        }
    }
    
    const formview={
        labelCol:{ span:8}, wrapperCol:{ span:16 },
    }
      
return (
    <div>
      <Modal title='Creacion Nuevo Usuario' 
        visible={usermodal}
        width={1000}
        footer={[
            <Button onClick={closeModal}>Cancelar</Button>,
            <Button type="primary" onClick={saveModal}>Guardar</Button>
        ]}>
         <Form  {...formview}
          form={formadd}
          >
             <Item label="Nombre" //name="firstName" 
             rules={[{ required: true, message: 'Ingrese el NOMBRE(min:3-max:20)' , min:3 , max:20 }]}
             >
                 <Input name="firstName" onChange={handleNewUser} allowClear/>
             </Item>
             <Item label="Apellido" //name="lastName" 
             rules={[{ required: true, message: 'Ingrese el APELLIDO(min:3-max:20)', min:3 , max:20 }]}
             >
                 <Input name="lastName" onChange={handleNewUser} allowClear/>
             </Item>
             <Item label="Tipo" name="type" rules={[{ required: true, message: 'Seleccione el TIPO de usuario' }]}>
                <Select width="100px"
                    placeholder="Seleccione Tipo de Usuario"
                    onChange={handletype}
                >
                    <Option value="admin">admin</Option>
                    <Option value="visitor">visita</Option>
                </Select>
             </Item>
             <Item label="Mail"// name="email" 
             rules={[{ required: true, message: 'Ingrese el Mail(max:100)' , min:9 , max:100 }]}
             >
                 <Input name="email" onChange={handleNewUser} allowClear/>
             </Item>
             <Item label="Password" // name="password" 
             rules={[{ required: true, message: 'Ingrese PASSWORD (min:3-max:10)', min:3 , max:10 }]}
             >
                 <Input.Password name="password" onChange={handleNewUser} allowClear/>
             </Item>
         </Form>
      </Modal>
    </div>
)
}

export default UserModal;