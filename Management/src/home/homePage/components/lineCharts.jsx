import React from 'react';
import echarts from 'echarts';
import ReactEcharts from 'echarts-for-react';
import { Card } from 'antd';

export default class LineCharts extends React.Component {
    constructor() {
        super()
        this.state = {}
    }
    getOption(){
        return   {
            title: {
                left: 'center',
                text: '订单',
                textStyle: {
                    color: '#235894'
                }
            },
            tooltip: { trigger: 'axis', },
            xAxis: {
                name:"日期",
                type: 'category',
                data: ['2018-10-1','2018-10-2','2018-10-3','2018-10-4','2018-10-5','2018-10-6','2018-10-7',]
            },
            yAxis: {
                name:"数量",
                type: 'value'
            },
            series: [
                {
                    name:'数量',
                    data: [123151,45545,453213,5565,456465,12313,32132],
                    type: 'line',
                }
            ]
        }
    }
    render() {
        return (
            <Card bordered={false}>
                <ReactEcharts
                    option={this.getOption()}
                    //style={{ height: '500px', width: '800px' }}
                    className={'react_for_echarts'}
                />
            </Card>
        )
    }
}