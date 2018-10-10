import React from 'react';
import ReactDOM from 'react-dom';
import './index.less'
import Index from './menu/index';
import { LocalProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';

ReactDOM.render(
    // <LocalProvider locale={zh_CN}>
    //     <Index />
    // </LocalProvider>,
    <Index/>,
    document.getElementById('app')
)