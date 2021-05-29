import React from 'react';
import { Button } from 'antd';

const MenuAdmin = () => {

    const handleOnClick =() => {
    window.location.href= '/ProductsCrud' 
  }

  const handleUsersClick =() => {
    window.location.href= '/Users' 
  }


     console.log("entró a MenuAdmin")
     return (
         <div>
         <h1>MENU ADMINISTRADOR</h1>
         <Button onClick={handleOnClick}>
             Product CRUD
         </Button >
         <Button onClick={handleUsersClick}>
         Users CRUD
        </Button>
        </div>
          )
 }
 
 export default MenuAdmin