import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Welcome from './views/Welcome.js';
import Home from './views/Home';


const Routes = () => {
    return(
        <Switch>
            <Route exact path='/' component={Welcome}/>
            <Route path='/home' component={Home}/>
        </Switch>
    );
}

export default Routes;