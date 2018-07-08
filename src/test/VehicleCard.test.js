import React from 'react';
import { shallow } from 'enzyme';
import VehicleCard from '../components/VehicleCard/VehicleCard';
import { mockCleanedVehicle } from '../mock-data/cleaned-data';

describe('VehicleCard', () => {
  let wrapper;
  const mockFunc = jest.fn();

  beforeEach(() => wrapper = shallow(<VehicleCard updateFavorites={mockFunc}/>));

  afterEach(() => wrapper.unmount());

  test('should match sanpshot when mockdata preset', () => {
    wrapper = shallow(<VehicleCard {...mockCleanedVehicle} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should call updateFavorites on click', () => {
    wrapper.find('.card__favorite').first().simulate('click');
    expect(mockFunc).toHaveBeenCalled();
  });

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
