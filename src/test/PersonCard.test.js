import React from 'react';
import { shallow } from 'enzyme';
import PersonCard from '../components/PersonCard/PersonCard';

describe('PersonCard', () => {
  let wrapper;
  const mockFunc = jest.fn();
  const mockProps = {
    name: 'Wookie'
  };

  beforeEach(() => wrapper = shallow(
    <PersonCard
      props={{mockProps}}
      updateFavorites={mockFunc}
    />
  ));

  afterEach(() => wrapper.unmount());

  test('should call updateFavorites onClick', () => {
    wrapper.find('.card__favorite').first().simulate('click');
    expect(mockFunc).toHaveBeenCalled();
  });

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
