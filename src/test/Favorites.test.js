import React from 'react';
import { shallow } from 'enzyme';
import Favorites from '../components/Favorites/Favorites';

describe('Favorites', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Favorites />));

  afterEach(() => wrapper.unmount());

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
