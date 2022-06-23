import React from 'react';
import "./index.css";
import { NavLink } from 'react-router-dom';

import { HomeOutlined,BellOutlined,CreditCardOutlined,MailOutlined, ContainerOutlined,SettingOutlined,SearchOutlined } from '@ant-design/icons';

function Navigation() {
    
    return(

        <div className="wrapper">
            <div className="sidebar" >
                <img className='sidebar-logo' src='' alt="logo" />
                <div  className='sidebar-ul'>     
                    <NavLink className="nav-link" to="/"><HomeOutlined /> Dashboard</NavLink>
                    <NavLink className="nav-link" to="/"><CreditCardOutlined />Thiết bị</NavLink>
                    <NavLink className="nav-link" to="/"><ContainerOutlined />Dịch Vụ</NavLink>
                    <NavLink className="nav-link" to="/"><SettingOutlined />Cấp số</NavLink>
                    <NavLink className="nav-link" to="/"><SettingOutlined />Báo Cáo</NavLink>
                    <NavLink className="nav-link" to="/"><SettingOutlined /> Cài đặt hệ thống</NavLink>
                </div>     
            </div>
            <div className="main_content">
                <div className="search">
                    <input  type="text" placeholder='Search'  /><a href="/"><SearchOutlined /></a>
                </div>  
                <div className="user">
                    <NavLink to="/Mail"><MailOutlined /></NavLink>
                    <NavLink to="/Bell"><BellOutlined /></NavLink>
                    <img src='' alt="User" />
                </div>
            </div>
        </div>
         
    );
}

export default Navigation;