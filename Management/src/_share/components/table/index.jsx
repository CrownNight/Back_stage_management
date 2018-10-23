import React from 'react';
import { Table, Pagination } from 'antd';
import PropTypes from 'prop-types';


export default class Index extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    handlePageChange(current, pageSize) {
        this.props.onChange && this.props.onChange(current, pageSize);
    }
    showTotal(total){
        return `共${total}条`
    }
    render() {
        const { columns, dataSource, size, onChange, pageSize, rowSelection, total, current, showSizeChanger, noPagintion, pageSizeOptions, scroll } = this.props;
        const table = { columns, dataSource, rowSelection, size, scroll };
        const pagin = { onChange, pageSize, total, current, showSizeChanger, pageSizeOptions, }
        return (
            <div className={'tableWrapper'}>
                <Table
                    {...table}
                    columns={columns}
                    dataSource={dataSource}
                    pagination={false}
                />
                {noPagintion ? <div className={'pageWrapper'} style={{marginTop:5,float:'right'}}>
                    <Pagination
                        {...pagin}
                        onChange={this.handlePageChange.bind(this)}
                        showTotal={this.showTotal.bind(this)}
                    />
                </div> : ''}

            </div>
        )
    }
}
Index.PropTypes={
    noPagintion:PropTypes.bool,//是否显示分页
}
Index.defaultProps={
    size:'normal',
    pageSize:10,
    total:5,
    current:1,
    rowSelection:null,
    noPagintion:true,
    pageSizeOptions:['10','20','30','40','50'],
    showSizeChanger:true,
    columns: [{
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
    }, {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
    }, {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
    }],
    dataSource : [{
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号'
    }, {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号'
    }]
}