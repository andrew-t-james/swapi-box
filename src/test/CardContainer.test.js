import React from 'react';
import { shallow } from 'enzyme';
import CardContainer from '../components/CardContainer/CardContainer';
import { NavLink } from 'react-router-dom';

describe('CardContainer', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<CardContainer />));

  afterEach(() => wrapper.unmount());

  test('should render correct page based on route', () => {
    expect(wrapper.find(NavLink).first().props().to).toEqual("/people");
  });

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});