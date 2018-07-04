import React from 'react';
import { shallow } from 'enzyme';
import CardContainer from '../components/CardContainer/CardContainer';

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

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});