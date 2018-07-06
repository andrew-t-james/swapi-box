import React from 'react';
import { shallow } from 'enzyme';
import SideBar from '../components/SideBar/SideBar';
import { mockCleanedMovie } from '../mock-data/cleaned-data';

describe('SideBar', () => {
  let wrapper;
  const mockMovie = mockCleanedMovie;
  beforeEach(() => wrapper = shallow(<SideBar movie={mockMovie}/>));

  afterEach(() => wrapper.unmount());

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
