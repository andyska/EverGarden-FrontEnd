import React , {useState} from 'react';
import { Form, Input, Button, Checkbox, Space } from 'antd';
import './Login.css'
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

    const response = await axios.post('http://localhost:8080/users/login/', userObject );
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

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
        <Button type="primary" htmlType="submit">
          Ingresar
        </Button>
      </Form.Item>
    </Form>
    </Space>
  );
};

export default MyLogin
