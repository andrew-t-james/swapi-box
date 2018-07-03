import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import App from '../components/App/App';
import People from '../components/People/People';

const Router = () => (
  <BrowserRouter>
    <div>
      <App/>
      <Route path="/" exact component={App} />
    </div>
  </BrowserRouter>
);

export default Router;
