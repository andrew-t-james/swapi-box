import React from 'react';
import { shallow, mount } from 'enzyme';
import { StaticRouter } from 'react-router';
import { Route } from 'react-router-dom';
import App from '../components/App/App';

describe('Router', () => {
  const mockFunc = jest.fn();
  let wrapper;

  beforeEach(() => wrapper = mount(
    <StaticRouter context={{ path: '/' }}>
      <App/>
    </StaticRouter>
  ));

  afterEach(() => wrapper.unmount());

  test('should not redirect to 404', () => {
    expect(wrapper.find(App)).toHaveLength(1);
  });
});
