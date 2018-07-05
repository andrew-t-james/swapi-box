import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App/App';
import { peopleDataWithName } from '../mock-data/cleaned-data';

describe('App', () => {
  let wrapper;
  let mockState;
  beforeEach(() => {
    mockState = {
      people: [],
      isLoading: false,
      hasError: false
    };

    wrapper = shallow(<App />);
  });


  afterEach(() => wrapper.unmount());

  test('should have default state', async () => {
    expect(wrapper.state()).toEqual(mockState);
  });

  test('should make a fetch call', async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({
            ok: true
          })
      }));

    await wrapper.instance().fetchPeopleData();

    expect(window.fetch).toHaveBeenCalledTimes(1);
  });

  test('should update state on successfully fetch completion', async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({
          ok: true,
          results: peopleDataWithName
        })
      }));

    await wrapper.instance().fetchPeopleData();
    expect(wrapper.state('people')).toEqual(peopleDataWithName);
  });

  test('should handle errors when fetching data fails', async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.reject({
        status: 500
      }));

    await wrapper.instance().fetchPeopleData();
    expect(window.fetch).toHaveBeenCalled();
    expect(wrapper.state('hasError')).toBe(true);
  });

  test('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
