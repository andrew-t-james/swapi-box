import React from 'react';
import { shallow, mount } from 'enzyme';
import CardContainer from '../components/CardContainer/CardContainer';
import  { cleanedPeople, mockCleanedPlanet, mockCleanedVehicle } from '../mock-data/cleaned-data';

describe('CardContainer', () => {
  let wrapper;
  const mockPeople = [];
  const mockPlanets = [];
  const mockVehicles = [];
  const mockSelected = null;
  const mockFunc = jest.fn();

  beforeEach(() => wrapper = mount(
    <CardContainer
      people={mockPeople}
      planets={mockPlanets}
      vehicles={mockVehicles}
      selected={mockSelected}
      fetchPeopleData={mockFunc}
      fetchPlanetData={mockFunc}
      fetchVehicleData={mockFunc}
    />
  ));

  afterEach(() => wrapper.unmount());

  test('should match call fetchPeopleData onClick', async () =>  {

    wrapper.find('.people').simulate('click');
    expect(mockFunc).toHaveBeenCalled();
  });

  test('should match call fetchPlanetsData onClick', async () =>  {

    wrapper.find('.planets').simulate('click');
    expect(mockFunc).toHaveBeenCalled();
  });

  test('should match call fetchVehicleData onClick', async () =>  {

    wrapper.find('.vehicles').simulate('click');
    expect(mockFunc).toHaveBeenCalled();
  });

  test('should match shapshot when people array has been populated', async () => {
    wrapper = shallow(
      <CardContainer
        people={cleanedPeople}
        planets={mockPlanets}
        vehicles={mockVehicles}
        selected={mockSelected}
        fetchPeopleData={mockFunc}
        fetchPlanetData={mockFunc}
        fetchVehicleData={mockFunc}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('should match shapshot when planet array has been populated', async () => {
    wrapper = shallow(
      <CardContainer
        people={mockPeople}
        planets={mockCleanedPlanet}
        vehicles={mockVehicles}
        selected={mockSelected}
        fetchPeopleData={mockFunc}
        fetchPlanetData={mockFunc}
        fetchVehicleData={mockFunc}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('should match shapshot when vehicle array has been populated', async () => {
    wrapper = shallow(
      <CardContainer
        people={mockPeople}
        planets={mockPlanets}
        vehicles={mockCleanedVehicle}
        selected={mockSelected}
        fetchPeopleData={mockFunc}
        fetchPlanetData={mockFunc}
        fetchVehicleData={mockFunc}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});