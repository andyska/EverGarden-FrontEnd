import React, { useEffect, useState } from 'react'
import {message,Table , Button} from 'antd'
import axios from 'axios'
import {DeleteOutlined , EditOutlined , PlusCircleOutlined} from '@ant-design/icons';
import UserModal from '../Modal/UserModal'
import ConfirmModal from '../Modal/ConfirmModal'

const UsersCrud = () => {
  const [users, setUsers] = useState([])
  const [isModalVisible, setIsModalVisible] = useState(true);
/*
  const handleOnClick =() => {
    setIsModalVisible(true)
    console.log('visible:', isModalVisible)
  }
  */
  const getAllUsers = async () => {
    try{
      //console.log("users - getallusers - ENTRO =============")
      const resp = await axios.get('http://localhost:8080/api/users');
      //console.log("Nuevo usuario", resp.data)
      setUsers(resp.data)
    } catch (error){
      //console.log("getAllUsers" , error)
      message.error("Fallo la conexion con el BackEnd:" + error)
      throw error
    }
  }

  useEffect(() =>{
    getAllUsers()
  },[]
  )

  const [usermodal, setModal] = useState(false)
  const openModal = ()=>{
      setModal(true)
   }
  const [ userdetails, setUsersdetails]  = useState({})

  const handleOnDelete = (event) => {
    //antes de borrar llamar a un modal que confirme que quiere borrar ese libro
    setUsersdetails (event)
    setIsModalVisible(true)
  } 
  
  const handleOnEdit = (event) => {
    console.log('front-users-handleOnedit', userdetails)
    console.log('front-users-handleOnedit ==== FALTA PROGRAMARLO!')
    message.error('SIN PROGRAMAR AUN');
    //llamar a un modal que confirme que quiere borrar ese libro
    //setUsersdetails (event)
    //setIsModalVisible(true)
  } 
  
    const columns = [
    {
      title: 'Accion',
      dataIndex: 'actions',
      key: 'actions',
      render: (text, row) =>
        <>
          <DeleteOutlined style={{fontSize:'25px', color:'red'}}  onClick={()=>handleOnDelete(row)}/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <EditOutlined style={{fontSize:'25px', color:'blue'}}  onClick={()=>handleOnEdit(row)} />
        </>
    },
    {
      title: 'Nombre',
      dataIndex: 'firstName',
      key: 'firstName',
    },
    {
      title: 'Apellido',
      dataIndex: 'lastName',
      key: 'lastName',
    },
    {
      title: 'Usuario',
      dataIndex: 'userName',
      key: 'userName',
    },
    {
      title: 'Mail',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Tipo',
      dataIndex: 'type',
      key: 'type',
    },
        
  ];
  
  
  return (
    <div>
      <h1>Administracion de Usuarios</h1>
      <Button type="primary" icon={<PlusCircleOutlined/>} onClick={ openModal} >Agregar Usuario</Button>
      <UserModal usermodal={usermodal} setModal={setModal} getAllUsers={getAllUsers} />
      <ConfirmModal isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} getAllUsers={getAllUsers} userdetails={userdetails} />
      <Table dataSource={users} columns={columns} rowKey="_id"/>
    </div>

  )
}

export default UsersCrud
