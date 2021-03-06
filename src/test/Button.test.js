import React from 'react';
import { shallow } from 'enzyme';
import Button from '../components/Button/Button';

describe('Button', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Button name="button" amount={2}/>));

  afterEach(() => wrapper.unmount());

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
