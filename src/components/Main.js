import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Host from './Host';
import Join from './Join';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/host' component={Host}/>
            <Route path='/join' component={Join}/>
        </Switch>
    </main>
);

export default Main;
