import React from 'react';
import { List, Row, Col, Card } from 'antd';

export default class ListData extends React.Component {
    constructor() {
        super()
    }

    render() {
        const data = [
            'Racing car sprays burning fuel into crowd.',
            'Japanese princess to wed commoner.',
            'Australian walks 100km after outback crash.',
            'Man charged over missing wedding girl.',
            'Los Angeles battles huge wildfires.',
          ];
        return (
            <Row>
                <Col span={8}>
                    <Card hoverable={true}>
                        <List
                        dataSource={data}
                        renderItem={item => (<List.Item>{item}</List.Item>)}
                        />
                    </Card>
                </Col>
                <Col span={8}><Card hoverable={true}> <List dataSource={data} renderItem={item => (<List.Item>{item}</List.Item>)}/></Card></Col>
                <Col span={8}><Card hoverable={true}> <List dataSource={data} renderItem={item => (<List.Item>{item}</List.Item>)}/></Card></Col>
            </Row>
        )
    }
}