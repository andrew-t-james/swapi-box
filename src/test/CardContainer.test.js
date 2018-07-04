import React from 'react';
import { shallow, mount } from 'enzyme';
import CardContainer from '../components/CardContainer/CardContainer';
import People from '../components/People/People';
import { NavLink, Route, withRouter, MemoryRouter } from 'react-router-dom';

describe('CardContainer', () => {
  let wrapper;
  const mockPeople = [];
  const mockFunc = jest.fn();

  beforeEach(() => wrapper = shallow(
    <CardContainer
      people={mockPeople}
      fetchPeopleData={mockFunc}
    />
  ));

  afterEach(() => wrapper.unmount());

  test('should render correct page based on route', () => {
    expect(wrapper.find(NavLink).first().props().to).toEqual("/people");
  });

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});