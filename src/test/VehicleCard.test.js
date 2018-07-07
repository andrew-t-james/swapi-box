import React from 'react';
import { shallow } from 'enzyme';
import VehicleCard from '../components/VehicleCard/VehicleCard';
import { mockCleanedVehicle } from '../mock-data/cleaned-data';

describe('VehicleCard', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<VehicleCard />));

  afterEach(() => wrapper.unmount());

  test('should ', () => {
    wrapper = shallow(<VehicleCard {...mockCleanedVehicle} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
