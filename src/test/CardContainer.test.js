import React from 'react';
import { shallow } from 'enzyme';
import CardContainer from '../components/CardContainer/CardContainer';

describe('CardContainer', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<CardContainer />));

  afterEach(() => wrapper.unmount());

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
