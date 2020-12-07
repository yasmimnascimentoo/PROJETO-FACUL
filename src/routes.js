import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon/index';
import Register from './pages/Register/index';
import Poster from './pages/Poster/index';
import Profile from './pages/Profile/index';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon}/>
                <Route path="/register" exact component={Register} />
                <Route path="/poster" exact component = {Poster} />
                <Route path="/profile" exact component = {Profile} />
            </Switch>
        </BrowserRouter>
    );
}