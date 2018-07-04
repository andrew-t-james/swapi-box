import React from 'react';
import { shallow } from 'enzyme';
import { StaticRouter } from 'react-router';
import Router from '../router/Router';
import { Route } from 'react-router-dom';
import App from '../components/App/App';

describe('Router', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(
    <Router>
      <App/>
    </Router>
  ));

  afterEach(() => wrapper.unmount());

  test('should ', () => {
    expect(wrapper.find(Route).props().path).toEqual('/');
  });

  test('should not redirect to 404', () => {
    expect(wrapper.find(App)).toHaveLength(1);
  });
});
