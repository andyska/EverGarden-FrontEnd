import React, { useState } from 'react'
import { Layout, Menu } from 'antd'
import {Routes, Route} from 'react-router-dom'
import {NavLink } from 'react-router-dom'
import { Divider } from 'antd'
import ProductsCrud from '../../ProductsCrud'
import Users from '../../Users'
import {
  BookOutlined,
  GithubOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
//const { SubMenu } = Menu;

const LayoutAdmin = (visible) => {
  const [collapsed, setCollapsed] = useState(false)


  const handleOnCollapsed = (collapsed) => {
    console.log(collapsed);
    setCollapsed(collapsed);
  };

  return (
    <Layout style={{ minHeight: '100vh' }} visible={visible}>
      <Sider collapsible collapsed={collapsed} onCollapse={handleOnCollapsed}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">

          <Menu.ItemGroup className="itemGroup" key="g1" title="Menu" >
            <Divider style={{ borderColor: 'white' }} />
            
            <Menu.Item className="item" key="1" icon={<GithubOutlined />}>
              <NavLink to="/menuadmin">
                Usuario
              </NavLink>
            </Menu.Item>

            <Menu.Item className="item" key="2" icon={<GithubOutlined />}>
              <NavLink to="/users">
                Usuario
              </NavLink>
            </Menu.Item>

            <Menu.Item className="item" key="3" icon={<BookOutlined />}>
              <NavLink to="/productocrud">
                Productos
              </NavLink>
            </Menu.Item>
          </Menu.ItemGroup>

        </Menu>
      </Sider>

      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <Routes>
              <Route path="/menuadmin" element={<IndexPage/>}/>
              <Route path="/users" element={<Users/>}/>
              <Route path="/productocrud" element={<ProductsCrud/>}/>
            </Routes>
          </div>
        </Content>
        <Footer>
          Developed By GAS © 2021 Todos los Derechos Reservados
        </Footer>
      </Layout>

    </Layout>
  );
  }

  export default LayoutAdmin