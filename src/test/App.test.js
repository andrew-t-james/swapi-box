import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App/App';
import { peopleDataWithName, mockCleanedMovie } from '../mock-data/cleaned-data';
import { mockMovieFetchResponse } from '../mock-data/mock-responses';

describe('App', () => {
  let wrapper;
  let mockState;
  beforeEach(() => {
    mockState = {
      people: [],
      movie: {},
      isLoading: false,
      hasError: false
    };

    wrapper = shallow(<App />);
  });


  afterEach(() => wrapper.unmount());

  test('should have default state', async () => {
    expect(wrapper.state()).toEqual(mockState);
  });

  test('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('fetchMoveScroll', () => {
    test('should make a fetch call', async () => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          ok: true,
          json: () =>
            Promise.resolve(mockMovieFetchResponse)
        }));

      await wrapper.instance().fetchMovieScroll();

      expect(window.fetch).toHaveBeenCalledTimes(1);
    });

    test('should updated state', async () => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockMovieFetchResponse)
        }));

      await wrapper.instance().fetchMovieScroll();
      expect(wrapper.state('movie')).toEqual(mockCleanedMovie);
    });

    test('should handle errors when fetching data fails', async () => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.reject({
          ok: false
        }));

      await wrapper.instance().fetchMovieScroll();
      expect(window.fetch).toHaveBeenCalled();
      expect(wrapper.state('hasError')).toBe(true);
    });
  });

  describe('fetchPeopleData', () => {
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
          ok: false
        }));

      await wrapper.instance().fetchPeopleData();
      expect(window.fetch).toHaveBeenCalled();
      expect(wrapper.state('hasError')).toBe(true);
    });
  });
});
