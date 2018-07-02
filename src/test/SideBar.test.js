import React from 'react';
import { shallow } from 'enzyme';
import SideBar from '../components/SideBar/SideBar';

describe('SideBar', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<SideBar />));

  afterEach(() => wrapper.unmount());

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
