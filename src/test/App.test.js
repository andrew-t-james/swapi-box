import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App/App';

describe('App', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<App />));

  afterEach(() => wrapper.unmount());

  test('should return a people data', async () => {
    const apiEndPoint = 'https://swapi.co/api/people';

    const fetchSpy = jest.spyOn(global, 'fetch')
      .mockImplementation(() => Promise.resolve({
        json: () => ({ results: [{species: ['api-endpoint']}] })
      }));

    await wrapper.instance().fetchPeopleData();
    expect(fetchSpy).toHaveBeenCalledTimes(3);
    expect(fetchSpy).toHaveBeenCalledWith(apiEndPoint);
  });

  test('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
