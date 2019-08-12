import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';


class NavigationBar extends React.Component {


    render() {
        return (
            <div>
                <Menu mode="horizontal" selectedKeys={[this.props.current]} onClick={this.props.handleClick}>
                    <Menu.Item key="log">
                        <Link to="/log">
                            <Icon type="smile" /> Log
                </Link>
                    </Menu.Item>
                    <Menu.Item key="plan">
                        <Link to="/plan">
                            <Icon type="calendar" /> Plan
                </Link>
                    </Menu.Item>
                    <Menu.Item key="data">
                        <Link to="/data">
                            <Icon type="bar-chart" /> Data
                </Link>
                    </Menu.Item>
                </Menu>
            </div>
        );
    }
}

export default NavigationBar;