import React, {  useState } from 'react'
import { Modal , Button, Form , Input} from 'antd'
import axios from 'axios'

const {Item}=Form

const UserModal =({usermodal, setModal , getAllUsers}) =>{
    console.log('dentro del user modal- modal', usermodal)
    const [newuser, setNewuser] = useState({
        firstName: '',
        lastName: '',
        userName: '',
        password:'',
        email:  '' ,
        type: ''
    } )
    
    const closeModal = ()=>{
        setModal(false)
    }
    const handleNewUser=e=>{
        const {name, value } = e.target ;
        setNewuser({...newuser,
            [name]: value});
           // console.log('handlenewuser',newuser)
        }
    const saveModal = async ()=>{
        try{
           console.log('FRONT-save modal-newuser:', newuser)
            const response = await axios.post('http://localhost:8080/api/users/' , newuser )
            //validar que salio ok el post para refrescar la tabla
            console.log('Front-new USER -response',response)
            closeModal()
            getAllUsers()
        } catch (error) {
            console.log("POST newuser Failed", error)
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
             <Item label="Nombre">
                 <Input name="firstName" onChange={handleNewUser}/>
             </Item>
             <Item label="Apellido">
                 <Input name="lastName" onChange={handleNewUser}/>
             </Item>
             <Item label="Usuario">
                 <Input name="userName" onChange={handleNewUser}/>
             </Item>
             <Item label="Tipo">
                 <Input name="type" onChange={handleNewUser}/>
             </Item>
             <Item label="Mail">
                 <Input name="email" onChange={handleNewUser}/>
             </Item>
             <Item label="Password">
                 <Input name="password" onChange={handleNewUser}/>
             </Item>
         </Form>
      </Modal>
    </div>
)
}

export default UserModal;