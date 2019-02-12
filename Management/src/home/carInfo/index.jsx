import React from 'react';
import { Tabs } from 'antd';

const TabPane = Tabs.TabPane;

export default class Index extends React.Component {
    constructor() {
        super();
        this.state = {
            activeKey: "audi"
        }
    }1

    handleChange(key){
       this.setState({activeKey:key}) 
    }

    render() {
        const tabPaneList = [
            { key: "audi", label: "奥迪" },
            { key: "dz", label: "大众" },
            { key: "bsj", label: "保时捷" },
            { key: "lsls", label: "劳斯莱斯" },
            { key: "mzd", label: "马自达" },
            { key: "bm", label: "宝马" },
        ]
        return (
            <Tabs defaultActiveKey={this.state.activeKey}
                tabPosition="left"
                onChange={this.handleChange.bind(this)}
                animated={true}
                style={{ marginTop: 15, marginLeft: 30 }}>
                {
                    tabPaneList.map(item => {
                       return <TabPane tab={item.label} key={item.key}>{item.label}</TabPane>
                    })
                }
            </Tabs>
        )
    }
}