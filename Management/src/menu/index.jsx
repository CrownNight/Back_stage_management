import React from 'react';
import ReactDOM from 'react-dom';
import { Layout, Menu,Button,Icon } from 'antd';
import { HashRouter as Router, Link, Route, hashHistory } from 'react-router-dom';
import menu from './menu';
import IndexRoute from '../route/index'

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
export default class Index extends React.Component {
    constructor() {
        super()
        this.state={
            
        }
    }

    renderSider() {
        let dom = [];
        menu.map((k, index) => {
            if (k.children == null) {
                dom.push(<Menu.Item key={index}><Link to={k.path} /><Icon type={k.icon}/><span>{k.title}</span></Menu.Item>)
            } else {
                dom.push(<SubMenu key={k.order} title={<span>{k.title}</span>}>
                    <MenuItemGroup>
                        {k.children.map((rh) => {
                            return (<Menu.Item key={rh.index}><Link to={rh.path} /><span>{rh.title}</span></Menu.Item>)
                        })}
                    </MenuItemGroup>
                </SubMenu>)
            }
        })
        return dom;
    }

    render() {
        return (
            <Router history={hashHistory}>
                <div>
                    <Layout style={{ minHeight: '91.5vh' }}>
                        <Sider>
                           <Menu theme="dark" defaultSelectedKeys={['0']} mode="inline" >
                                {this.renderSider()}
                            </Menu>
                        </Sider>
                        <Layout>
                        {/* <Header  theme="light"></Header> */}
                            <Content>
                                <IndexRoute />
                            </Content>
                        </Layout>
                    </Layout>
                </div>
            </Router>
        )
    }
}