import React from 'react';
import { shallow } from 'enzyme';
import Header from '../components/Header/Header';

describe('Header', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Header />));

  afterEach(() => wrapper.unmount());

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
