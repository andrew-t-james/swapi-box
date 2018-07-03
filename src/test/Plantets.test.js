import React from 'react';
import { shallow } from 'enzyme';
import Planets from '../components/Planets/Planets';

describe('Planets', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Planets />));

  afterEach(() => wrapper.unmount());

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
