import React from 'react';
import { shallow } from 'enzyme';
import PlanetCard from '../components/PlanetCard/PlanetCard';
import { mockCleanedPlanet } from '../mock-data/cleaned-data';
describe('PlanetCard', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<PlanetCard {...mockCleanedPlanet}/>));

  afterEach(() => wrapper.unmount());

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});