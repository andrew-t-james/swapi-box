import React from 'react';
import { shallow } from 'enzyme';
import VehicleCard from '../components/VehicleCard/VehicleCard';

describe('VehicleCard', () => {
  let wrapper;
  const mockFunc = jest.fn();
  const mockCleanedVehicle = {
    name: 'Sand Crawler',
    model: 'Digger Crawler',
    vehicleClass: 'wheeled',
    passengers: '30',
    favorite: false
  };

  beforeEach(() => wrapper = shallow(
    <VehicleCard
      updateFavorites={mockFunc}
      {...mockCleanedVehicle}
    />
  ));

  afterEach(() => wrapper.unmount());

  test('should call updateFavorites on click', () => {
    wrapper.find('.card__favorite').first().simulate('click');
    expect(mockFunc).toHaveBeenCalled();
  });

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
