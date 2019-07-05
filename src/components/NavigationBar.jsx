import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';

function NavigationBar() {
    return (
      <div>
        <Menu mode="horizontal">
            <Menu.Item> 
                <Link to="/today"> 
                    <Icon type="smile"/> Today
                </Link>
            </Menu.Item>
            <Menu.Item> 
                <Link to="/calendar">
                <Icon type="calendar"/> Calendar
                </Link>
            </Menu.Item>
            <Menu.Item> 
                <Link to="/data">
                <Icon type="bar-chart"/> Data
                </Link>
            </Menu.Item>
        </Menu>
      </div>
    );
}
    
export default NavigationBar;