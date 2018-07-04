import React from 'react';
import { shallow } from 'enzyme';
import People from '../components/People/People';

describe('People', () => {
  let wrapper;
  const mockFunc = jest.fn();

  beforeEach(() => wrapper = shallow(<People fetchPeopleData={mockFunc}/>));

  afterEach(() => wrapper.unmount());

  test('should invoke fetchPeopleData on mount ', () => {
    wrapper.instance().componentDidMount();
    expect(mockFunc).toHaveBeenCalled();
  });


  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
