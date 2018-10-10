import React from 'react';
import { Card, Row, Col } from 'antd';



export default class ChartData extends React.Component {
    constructor() {
        super()
    }

    render() {
        const data = [
            { title: '收入', count: 192323, },
            { title: '订单', count: 12312, },
            { title: '访客', count: 16546, },
            { title: '活跃用户', count: 156613, }
        ]
        return (
            <Row>
                {data.map(item => {
                    return (
                        <Col span={6}>
                            <Card hoverable={true}>
                                <ul>
                                    <li style={{ listStyle: "none" }}>
                                        <span>{item.title}</span>
                                        <h1>{item.count}</h1>
                                    </li>
                                </ul>
                            </Card>
                        </Col>
                    )
                })}
            </Row>
        )
    }
}