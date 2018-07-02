import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App/App';


describe('App', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<App />));

  afterEach(() => wrapper.unmount());

  it('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
