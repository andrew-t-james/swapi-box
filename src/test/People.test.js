import React from 'react';
import { shallow } from 'enzyme';
import PersonCard from '../components/PersonCard/PersonCard';

describe('PersonCard', () => {
  let wrapper;
  const mockFunc = jest.fn();

  beforeEach(() => wrapper = shallow(<PersonCard fetchPeopleData={mockFunc}/>));

  afterEach(() => wrapper.unmount());

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
