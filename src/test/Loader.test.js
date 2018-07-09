import React from 'react';
import { shallow } from 'enzyme';
import Loader from '../components/Loader/Loader';

describe('Loader', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(
    <Loader />
  ));

  afterEach(() => wrapper.unmount());

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
