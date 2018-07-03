import React from 'react';
import { shallow } from 'enzyme';
import People from '../components/People/People';

describe('People', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<People />));

  afterEach(() => wrapper.unmount());

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
