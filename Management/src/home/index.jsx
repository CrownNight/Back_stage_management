import React from 'react';
import webApi from '../share/webApi';
import {Button} from 'antd';
import urls from './urls/url'

export default class Index extends React.Component{
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){
       
    }
    click(){
        webApi.get(urls.getValue()).then(data=>{ 
            this.setState({data})
        })
    }

    render(){
        return(
            <div>
                <Button onClick={this.click.bind(this)} type="primary">点击执行123</Button>
                {this.state.data[0]}
            </div>
        )
    }
}