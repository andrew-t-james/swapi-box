import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App/App';

describe('App', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<App />));

  afterEach(() => wrapper.unmount());

  test('should have default state', async () => {
    const mockState = {
      people: [],
      isLoading: false,
      hasError: false
    };
    expect(wrapper.state()).toEqual(mockState);
  });

  test('should return a people data', async () => {
    const apiEndPoint = 'https://swapi.co/api/people';

    const fetchSpy = jest.spyOn(global, 'fetch')
      .mockImplementation(() => Promise.resolve({
        json: () => ({ results: [{species: ['mock-api-endpoint']}] })
      }));

    await wrapper.instance().fetchPeopleData();
    expect(fetchSpy).toHaveBeenCalledTimes(3);
    expect(fetchSpy).toHaveBeenCalledWith(apiEndPoint);
  });

  test('should handle errors when fetching data fails', async () => {
    const apiEndPoint = 'https://swapi.co/api/people';

    const fetchSpy = jest.spyOn(global, 'fetch')
      .mockImplementation(() => Promise.reject({}));

    await wrapper.instance().fetchPeopleData();
    expect(fetchSpy).toHaveBeenCalledWith(apiEndPoint);
    expect(wrapper.state('hasError')).toBe(true);
  });

  test('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
