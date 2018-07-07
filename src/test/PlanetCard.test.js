import React from 'react';
import { shallow } from 'enzyme';
import PlanetCard from '../components/PlanetCard/PlanetCard';
import { mockCleanedPlanet } from '../mock-data/cleaned-data';
describe('PlanetCard', () => {
  let wrapper;
  const mockFunc = jest.fn();
  const mockProps = {
    name: 'Alderaan',
    population: '2000000000',
    climate: 'temperate',
    terrain: 'grasslands, mountains',
    residents: [undefined, undefined, undefined],
    favorite: false
  };

  beforeEach(() => wrapper = shallow(
    <PlanetCard
      {...mockProps}
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