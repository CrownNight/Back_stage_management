import React from 'react';
import {Route} from 'react-router-dom';
import homePage from '../home/homePage';
import CustomerInfo from '../home/customerInfo'
import CarInfo from '../home/carInfo'

export default class IndexRoute extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div>
                <Route exact path='/management/homepage' component={homePage}/>
                <Route exact path='/management/customer' component={CustomerInfo}/>
                <Route exact path='/management/carinfo' component={CarInfo}/>
            </div>
        )
    }
}