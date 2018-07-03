import React from 'react';
import { shallow } from 'enzyme';
import Vehicles from '../components/Vehicles/Vehicles';

describe('Vehicles', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Vehicles />));

  afterEach(() => wrapper.unmount());

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
