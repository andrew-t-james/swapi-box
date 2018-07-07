import React from 'react';
import { shallow, mount } from 'enzyme';
import CardContainer from '../components/CardContainer/CardContainer';
import  { cleanedPeople, mockCleanedPlanet } from '../mock-data/cleaned-data';

describe('CardContainer', () => {
  let wrapper;
  const mockPeople = [];
  const mockPlanets = [];
  const mockSelected = null;
  const mockFunc = jest.fn();

  beforeEach(() => wrapper = mount(
    <CardContainer
      people={mockPeople}
      planets={mockPlanets}
      selected={mockSelected}
      fetchPeopleData={mockFunc}
      fetchPlanetData={mockFunc}
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

  test('should match shapshot when people array has been populated', async () => {
    wrapper = shallow(
      <CardContainer
        planets={mockPlanets}
        selected={mockSelected}
        fetchPeopleData={mockFunc}
        fetchPlanetData={mockFunc}
        people={cleanedPeople}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('should match shapshot when planet array has been populated', async () => {
    wrapper = shallow(
      <CardContainer
        planets={mockCleanedPlanet}
        selected={mockSelected}
        fetchPeopleData={mockFunc}
        fetchPlanetData={mockFunc}
        people={mockPeople}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});