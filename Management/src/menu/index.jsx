import React from 'react';
import ReactDOM from 'react-dom';
import { Layout, Menu } from 'antd';
import { HashRouter as Router, Link, Route, hashHistory } from 'react-router-dom';
import menu from './menu';
import IndexRoute from '../route/index'

const { Header, Content, Footer, Sider } = Layout;
export default class Index extends React.Component {
    constructor() {
        super()
    }

    renderSider() {
        let dom = [];
        menu.map((k, index) => {
            dom.push(<Menu.Item key={index}><Link to={k.path} />{k.title}</Menu.Item>)
        })
        return dom;
    }

    render() {
        return (
            <Router history={hashHistory}>
                <div>
                    <Header></Header>
                    <Layout style={{ minHeight: '91.5vh' }}>
                        <Sider>
                            <Menu theme="dark" defaultSelectedKeys={['0']} mode="inline">
                                {this.renderSider()}
                            </Menu>
                        </Sider>
                        <Layout>
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