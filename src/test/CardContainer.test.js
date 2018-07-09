import React from 'react';
import { shallow, mount } from 'enzyme';
import CardContainer from '../components/CardContainer/CardContainer';
import  { cleanedPeople, mockCleanedPlanet, mockCleanedVehicle, mockCleanedFavorite } from '../mock-data/cleaned-data';

describe('CardContainer', () => {
  let wrapper;
  const mockPeople = [];
  const mockPlanets = [];
  const mockVehicles = [];
  const mockFavorites = [];
  const mockSelected = null;
  const mockFunc = jest.fn();

  beforeEach(() => wrapper = mount(
    <CardContainer
      people={mockPeople}
      planets={mockPlanets}
      vehicles={mockVehicles}
      selected={mockSelected}
      favorites={mockFavorites}
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
        selected={'people'}
        favorites={mockFavorites}
        fetchPeopleData={mockFunc}
        fetchPlanetData={mockFunc}
        fetchVehicleData={mockFunc}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('should match shapshot when favorite array has been populated', async () => {
    wrapper = shallow(
      <CardContainer
        people={mockPlanets}
        planets={mockPlanets}
        vehicles={mockVehicles}
        selected={'favorites'}
        favorites={mockCleanedFavorite}
        fetchPeopleData={mockFunc}
        fetchPlanetData={mockFunc}
        fetchVehicleData={mockFunc}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('should match shapshot when favorite array is empty', async () => {
    wrapper = shallow(
      <CardContainer
        people={mockPlanets}
        planets={mockPlanets}
        vehicles={mockVehicles}
        selected={'favorites'}
        favorites={mockFavorites}
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
        selected={'planets'}
        favorites={mockFavorites}
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
        selected={'vehicles'}
        favorites={mockFavorites}
        fetchPeopleData={mockFunc}
        fetchPlanetData={mockFunc}
        fetchVehicleData={mockFunc}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('should match shapshot when vehicle isLoading is true', async () => {
    wrapper = shallow(
      <CardContainer
        people={mockPeople}
        planets={mockPlanets}
        vehicles={mockCleanedVehicle}
        selected={null}
        isLoading={true}
        favorites={mockFavorites}
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