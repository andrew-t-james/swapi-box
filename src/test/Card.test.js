import React from 'react';
import { shallow } from 'enzyme';
import Card from '../components/Card/Card';

describe('Card', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Card />));

  afterEach(() => wrapper.unmount());

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
