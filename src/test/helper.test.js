import {
  getPeopleData,
  cleanHomeWord,
  cleanSpecies,
  fetchHelper,
  cleanMovieScroll,
  getPlanetData
} from '../helper/helper';
import { mockPeople } from '../mock-data/mock-data';
import { cleanedPeople, peopleDataWithName, mockCleanedMovie, mockCleanedPlanet } from '../mock-data/cleaned-data';
import { mockCleanHomeWorldResponse, mockMovieFetchResponse, mockPlanetsResponse } from '../mock-data/mock-responses';

describe('Helpers', () => {

  describe('GetPeopleData ', () => {
    test('cleanHomeWorld returns sanitized people data with name and population', async () => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          ok: true,
          json: () =>
            Promise.resolve({
              ok: true,
              name: 'Tatooine',
              population: '200000'
            })
        }));

      const result = await cleanHomeWord(mockPeople);
      // console.log(result);
      expect(result).toEqual(mockCleanHomeWorldResponse);
    });

    test('cleanSpecies returns sanitized data with cleaned species data', async () => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          ok: true,
          json: () =>
            Promise.resolve({
              ok: true,
              name: 'Human'
            })
        }));
      const result = await cleanSpecies(mockCleanHomeWorldResponse);
      // console.log(result);
      expect(result).toEqual(cleanedPeople);
    });

    test('should return initial data structure for peopleData set', async () => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve({
            ok: true,
            results: mockPeople
          })
        }));

      const response = await getPeopleData();
      expect(window.fetch).toHaveBeenCalledTimes(3);
      await expect(response).toEqual(peopleDataWithName);
    });
  });

  describe('FetchHelper', () => {

    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve()
        }));
    });

    test('should have been called with correct api endpoint', async () => {
      const url = 'some-api-here';
      await fetchHelper(url);

      expect(window.fetch).toHaveBeenCalledWith(url);
    });

    test('should ', async () => {
      const url = 'some-api-here';

      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          ok: false,
          json: () => Promise.reject('Error')
        }));

      await expect(fetchHelper(url)).rejects.toEqual(Error('failed fetch request'));
    });
  });

  describe('MoveScroll', () => {
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockMovieFetchResponse)
        }));
    });

    test('should fetch a movie scroll and clean data when cleanMovieScroll is called', async () => {
      const result = await cleanMovieScroll(mockMovieFetchResponse);
      expect(result).toEqual(mockCleanedMovie);
    });
  });

  describe('GetPlanetData', () => {
    test('should return data from vehicles endpoint', async () => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockPlanetsResponse)
        }));

      const response = await getPlanetData();
      expect(window.fetch).toHaveBeenCalledTimes(2);
      await expect(response).toEqual(mockCleanedPlanet);
    });

  });

});
