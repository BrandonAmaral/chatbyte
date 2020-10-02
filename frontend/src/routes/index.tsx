import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';
import Home from '../pages/Home';
import Main from '../pages/Main';
import Login from '../pages/Login';
import Register from '../pages/Register';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/chat" component={Main} isPrivate />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
  </Switch>
);

export default Routes;
