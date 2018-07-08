import React from 'react';
import { shallow } from 'enzyme';
import FavoriteCard from '../components/FavoriteCard/FavoriteCard';

describe('FavoriteCard', () => {
  let wrapper;
  const mockFunc = jest.fn();
  const mockProps = {
    name: 'Wookie'
  };

  beforeEach(() => wrapper = shallow(<FavoriteCard {...mockProps} updateFavorites={mockFunc} />));

  afterEach(() => wrapper.unmount());

  test('should call updateFavorites onClick', () => {
    wrapper.find('.favorite__card--button').first().simulate('click');
    expect(mockFunc).toHaveBeenCalledWith(mockProps);
  });

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
