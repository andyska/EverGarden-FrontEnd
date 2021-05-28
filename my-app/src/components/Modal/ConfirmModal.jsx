import React from 'react';
import {Modal} from 'antd';
import axios from 'axios'

const ConfirmModal = ({isModalVisible ,setIsModalVisible ,  getAllUsers , userdetails}) => {
  console.log('ConfirmModal-usertails - 1', userdetails)
  const userid =  'http://localhost:8080/api/users/' + userdetails._id
  console.log('ConfirmModal-bookdetails -2 ',userid)
  
  const handleCancel = () => {
    setIsModalVisible(false)
  };

  const handleOnDelete = async (hhh) => {
    console.log('ModalConfirm-3 ',hhh)
    try{
      const response = await axios.delete(userid)
      //validar que salio ok el delete para refrescar la tabla
      console.log('despues de borrar',response)
      getAllUsers()
      setIsModalVisible(false)
    } catch (error){
      console.log('handleOndelete-error', error)
      throw error
    }
  } 
  return (
      <Modal title="Confirma Borrar este Usuario ?" visible={isModalVisible} onOk={handleOnDelete} onCancel={handleCancel}>
        <p>{userdetails.firstname}</p>
        <p>{userdetails.lastname}</p>
        <p>{userdetails.userName}</p>
        <p>{userdetails.email}</p>
      </Modal>
  );
};

export default ConfirmModal;
