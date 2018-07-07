import React from 'react';
import { shallow } from 'enzyme';
import FavoriteCard from '../components/FavoriteCard/FavoriteCard';

describe('FavoriteCard', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<FavoriteCard />));

  afterEach(() => wrapper.unmount());

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
