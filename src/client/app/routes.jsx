import React from 'react';
import { Route, IndexRoute } from 'react-router';

import AppLayout from './components/AppLayout/AppLayout.jsx';
import Home from './components/RouteHome.jsx';
import About from './components/RouteAbout.jsx';

export default (
  <Route path="/" component={AppLayout}>
    <IndexRoute component={Home} />
    <Route path="/about" component={About} />
  </Route>
);
