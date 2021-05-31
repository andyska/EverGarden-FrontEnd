import React from 'react';
import { Button, Space, message } from 'antd';
import GoToMain from '../GoToMain'

const MenuAdmin = () => {

  const token = localStorage.getItem('Token') 
  
    const handleOnClick =() => {
    window.location.href= '/ProductsCrud' 
  }

  const handleUsersClick =() => {
    window.location.href= '/Users' 
  }

  const handleLogOutClick = () => {
    localStorage.removeItem('Token')
    GoToMain()
  }
     console.log("entró a MenuAdmin")
     if (token){
     return (
         <div>
         <h1>MENU ADMINISTRADOR</h1>
         <Space>
         <Button onClick={handleOnClick} >
          Configurar Productos
         </Button >
         <Button onClick={handleUsersClick}>
         Configurar Usuarios
        </Button>
        <Button onClick={handleLogOutClick}>
         Cerrar Sesión
        </Button>
        </Space>
        </div>
          )}
          else {
            GoToMain()
            alert ('Debe iniciar sesion como usuario administrador para acceder a esta ruta')
            return null
          }
 }
 
 export default MenuAdmin