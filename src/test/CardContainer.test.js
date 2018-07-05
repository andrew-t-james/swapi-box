import React from 'react';
import { shallow, mount } from 'enzyme';
import CardContainer from '../components/CardContainer/CardContainer';
import  { cleanedPeople } from '../mock-data/cleaned-data';

describe('CardContainer', () => {
  let wrapper;
  const mockPeople = [];
  const mockFunc = jest.fn();

  beforeEach(() => wrapper = mount(
    <CardContainer
      people={mockPeople}
      fetchPeopleData={mockFunc}
    />
  ));

  afterEach(() => wrapper.unmount());

  test('should match call fetchPeopleData onClick', async () =>  {

    wrapper.find('.people').simulate('click');
    expect(mockFunc).toHaveBeenCalled();
  });

  test('should match shapshot when people array has been populated', async () => {
    wrapper = shallow(<CardContainer people={cleanedPeople} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});