import React from 'react';
import { Button, Space } from 'antd';

const MenuAdmin = () => {

    const handleOnClick =() => {
    window.location.href= '/ProductsCrud' 
  }

  const handleUsersClick =() => {
    window.location.href= '/Users' 
  }

  const handleLogOutClick = () => {}

     console.log("entró a MenuAdmin")
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
          )
 }
 
 export default MenuAdmin