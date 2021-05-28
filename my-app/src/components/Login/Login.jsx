import React , {useState , useEffect} from 'react';
import { Form, Input, Button, Checkbox, Space } from 'antd';
import './Login.css'
import LayoutAdmin from '../Layout/LayoutAdmin'
import  {NavLink,  Routes, Route} from 'react-router-dom'
import axios from 'axios'



const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const MyLogin = () => {
  const onFinish = async(values) => {
    console.log('Success:', values);
    const userObject = 
      {
        userName: values.username,
        password: values.password
      }
    console.log ('userObject:', userObject)
    const response = await axios.post('http://localhost:8080/api/users/login/', userObject );
    console.log ('repsonse:', response.data)
     window.location.href= '/MenuAdmin'  
     // no estoy segura que me este redirigiendo bien porque /MenuAdmin deberia ser una pagina en blanco que renderice un Hello World 
     // pruebo rediriegiendo a aboutus y veo que esta funcionando OK
     //window.location.href= '/AboutUs' 
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
 /*
  const HandleOnClick =() => {
    setIsModalVisible(true)
    console.log('visible:', isModalVisible);
    return(
      <>
        <LayoutAdmin/>
      </>
    );  
  }*/

  return (
    
    <Space>
        <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Usuario"
        name="username"
        rules={[
          {
            required: true,
            message: 'Ingrese su nombre de usuario',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Contraseña"
        name="password"
        rules={[
          {
            required: true,
            message: 'Ingrese su contraseña',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Recordarme</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>

        <Button type="primary" htmlType="submit" style={{backgroundColor: '#666600', border: 'none'}} >
          Ingresar

        </Button>
      </Form.Item>
    </Form>
    </Space>
  );
};

export default MyLogin
