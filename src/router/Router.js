import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from '../components/App/App';

const Router = () => (
  <BrowserRouter>
    <div>
      <App/>
      <Route path="/" exact component={App} />
    </div>
  </BrowserRouter>
);

export default Router;
