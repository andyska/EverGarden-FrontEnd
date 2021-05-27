import React , {useState , useEffect} from 'react';
import { Form, Input, Button, Checkbox, Space } from 'antd';
import './Login.css'
import LayoutAdmin from '../Layout/LayoutAdmin'
import  {NavLink,  Routes, Route} from 'react-router-dom'

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
  const [isModalVisible, setIsModalVisible] = useState(false);
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const HandleOnClick =() => {
    setIsModalVisible(true)
    console.log('visible:', isModalVisible);
    return(
      <>
        <LayoutAdmin/>
      </>
    );  
  }

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
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please enter your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please enter your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" onClick={() => HandleOnClick()}>
          Submit
        </Button>
      </Form.Item>
    </Form>
    </Space>
  );
};

export default MyLogin
