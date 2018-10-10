import React from 'react';
import {Route} from 'react-router-dom';
import homePage from '../home/homePage';

export default class IndexRoute extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div>
                <Route exact path='/management/homepage' component={homePage}/>
            </div>
        )
    }
}