import React from 'react';
import {Route} from 'react-router-dom';
import Index from '../home/index';

export default class IndexRoute extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div>
                <Route exact path='/personalBlog/homepage' component={Index}/>
            </div>
        )
    }
}