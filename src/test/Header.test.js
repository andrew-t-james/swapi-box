import React from 'react';
import { shallow } from 'enzyme';
import Header from '../components/Header/Header';

describe('Header', () => {
  let wrapper;
  const mockFunc = jest.fn();

  beforeEach(() => wrapper = shallow(<Header updateSelection={mockFunc} favorites={[{}, {}]}/>));

  afterEach(() => wrapper.unmount());

  test('should call selectFavorites on click', () => {
    wrapper.find('li').simulate('click');
    expect(mockFunc).toHaveBeenCalled();
  });

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
