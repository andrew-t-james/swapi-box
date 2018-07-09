import React from 'react';
import { shallow } from 'enzyme';
import Particles from '../components/Particles/Particles';
import { particlesConfig } from '../helper/particlesjs-config';

describe('Particles', () => {
  let wrapper;


  beforeEach(() => wrapper = shallow(
    <Particles
      params={particlesConfig}
    />
  ));

  afterEach(() => wrapper.unmount());

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
