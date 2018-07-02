import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from '../components/App/App';

const Router = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" exact component={App} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Router;
