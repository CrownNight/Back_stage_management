import React from 'react';
import ReactDOM from 'react-dom';
import './index.less'
import Index from './menu/index';
import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';

ReactDOM.render(
    <LocaleProvider locale={zh_CN}>
        <Index />
    </LocaleProvider>,
    document.getElementById('app')
)