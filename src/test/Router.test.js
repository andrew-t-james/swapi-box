import React from 'react';
import { shallow } from 'enzyme';
import { StaticRouter } from 'react-router';
import App from '../components/App/App';

describe('Router', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(
    <StaticRouter context={{ path: '/' }}>
      <App/>
    </StaticRouter>
  ));

  afterEach(() => wrapper.unmount());

  test('should not redirect to 404', () => {
    expect(wrapper.find(App)).toHaveLength(1);
  });
});
