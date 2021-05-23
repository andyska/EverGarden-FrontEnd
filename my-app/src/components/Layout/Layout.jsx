import React, { useState } from 'react'
import { Layout, Menu } from 'antd'
import './Layout.css'
import {Routes, Route} from 'react-router-dom'
import {NavLink } from 'react-router-dom'
import { Divider } from 'antd'
//import Books from '../Books'
//import Users from '../Users'
import imgHeader from '../../images/header_a.jpg'
import iconFacebook from "../../images/facebook.png"
import iconInstagram from "../../images/instagram.png"
import iconMail from "../../images/mail.png"
import iconMap from "../../images/ubicacion.png"
import iconPlanta from '../../images/planta.png'
import {
  HomeOutlined,
  IdcardOutlined,
  PictureOutlined,
  TeamOutlined,
  ShopOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;


const MyLayout = () => {
  const [collapsed, setCollapsed] = useState(false)

  const handleOnCollapsed = (collapsed) => {
    console.log(collapsed);
    setCollapsed(collapsed);
  };


  return (
    <Layout style={{ minHeight: '100vh' }}>
      
      <Layout>

        <Sider className="sider" collapsible collapsed={collapsed} onCollapse={handleOnCollapsed}>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">

          <Menu.Item className="item" key="1" >
              
            </Menu.Item>
          <Menu.Item className="item" key="1" icon={<HomeOutlined />}>
              <NavLink to="/">
                Inicio
              </NavLink>
            </Menu.Item>

            <Menu.Item className="item" key="1" icon={<TeamOutlined />}>
              <NavLink to="/">
                Nosotros
              </NavLink>
            </Menu.Item>

            <Menu.Item className="item" key="1" icon={<PictureOutlined />}>
              <NavLink to="/">
                Galeria
              </NavLink>
            </Menu.Item>

            <Menu.Item className="item" key="1" icon={<ShopOutlined />}>
              <NavLink to="/">
                Producto
              </NavLink>
            </Menu.Item>

            <Menu.Item className="item" key="1" icon={<IdcardOutlined />}>
              <NavLink to="/">
                Contacto
              </NavLink>
            </Menu.Item>  
            </Menu>
        </Sider>

        <Layout>
          <Header>
            <div>
              <img className="img" src={imgHeader} alt=""/>
            </div>
          </Header>
          <Content>Content

          </Content>
          <Footer>
            <div className="container-all">
              <div className="container-body">
               
              <div class="column1">
                
                <h4>EVER GARDEN</h4>
                <p>
                  <img src={iconPlanta}/>
                   Sistema Modulares 
                </p>
                <p>
                de Jardineria Vertical
                </p>
              </div>
                <div className="column2">
                <h4>Redes Sociales</h4>
                    <div className="row">
                      <img src={iconFacebook}/>
                      <label>Seguinos en Facebook</label>
                    </div>

                    <div class="row">
                      <img src={iconInstagram}/>
                      <label>Seguinos en Instagram</label>
                    </div>
                </div>

                <div className="column3">
                  <h4>Informacion Contactos</h4>
                    <div class="row2">
                        <img src={iconMail}/>
                        <label>skamelka@gmail.com</label>
                    </div>

                    <div class="row2">
                        <img src={iconMap}/>
                        <label>Tucuman Argentina</label>
                    </div>
                </div>
              </div>

              <div class="container-footer">
                <div class="footer">
                  <div class="copyright">
                    Developed By GAS © 2021 Todos los Derechos Reservados | <a href="/">Inicio</a>
                  </div>

                  <div class="information">
                    <a href="">Informacion de la Empresa</a> | 
                    <a href="">Politicas y Privacidad</a> |
                    <a href="">Terminos y Condiciones</a>   
                  </div>
                </div>
              </div>

            </div>
          </Footer>
        </Layout>
      </Layout>

    </Layout>
  );
}

  export default MyLayout