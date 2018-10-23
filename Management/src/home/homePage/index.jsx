import React from 'react';
import webApi from '../share/webApi';
import { Button, Card, Row, Col,Divider } from 'antd';
import urls from '../urls/url';
import ChartData from './components/chartData';
import ListData from './components/listData';
import LineCharts from './components/lineCharts'

export default class Index extends React.Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }
    componentDidMount() {

    }
    click() {
        webApi.get(urls.getValue()).then(data => {
            this.setState({ data })
        })
    }

    render() {
        return (
            <Row>
                <div style={{ marginTop: 5 }}>
                    <ChartData />
                </div>
                <div>
                   <LineCharts/>
                </div>
                <div style={{marginTop:5}}>
                    <ListData/>
                </div>
            </Row>
        )
    }
}