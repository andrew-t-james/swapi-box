import React from 'react';
import { shallow } from 'enzyme';
import Router from '../Router/Router';

describe('Router', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Router />));

  afterEach(() => wrapper.unmount());

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
