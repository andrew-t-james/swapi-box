import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router';
import App from '../components/App/App';

describe('Router', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(
    <MemoryRouter initialEntries={['/']}>
      <App/>
    </MemoryRouter>
  ));

  afterEach(() => wrapper.unmount());

  test('should not redirect to 404', () => {
    expect(wrapper.find(App)).toHaveLength(1);
  });
});
