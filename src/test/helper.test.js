import { getPeopleData, cleanHomeWord, cleanSpecies } from '../helper/helper';
import { mockPeople } from '../mock-data/mock-data';
import { cleanedPeople } from '../mock-data/cleaned-data';
import { mockCleanHomeWorldResponse } from '../mock-data/mock-responses';
describe('Helpers', () => {

  test('cleanHomeWorld returns cleaned people data', async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        status: 200,
        json: () =>
          Promise.resolve({
            status: 200,
            results: mockPeople,
            name: 'Tatooine',
            population: '200000'
          })
      }));

    const response = await cleanHomeWord(mockPeople);
    console.log(response);
    expect(response).toEqual(mockCleanHomeWorldResponse);
  });

  test('cleanSpecies returns cleaned people data', async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        status: 200,
        json: () =>
          Promise.resolve({
            status:200,
            name: 'Human'
          })
      }));
    const results = await cleanSpecies(mockPeople);
    console.log(results);
    expect(results).toEqual(cleanedPeople);
  });
});
