import React from 'react';
import Table from '../../_share/components/table';
import { Card, message } from 'antd';

export default class CustomerInfo extends React.Component {
    constructor() {
        super()
        this.state = {
            index: 1,
            size: 10,
            total: 0
        }
    }

    render() {
        return (
            <Card noHovering bordered={false}>
                <Table />
            </Card>
        )
    }
}