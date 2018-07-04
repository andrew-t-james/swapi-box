import { getPeopleData, cleanHomeworld, cleanSpecies, fetchHelper } from '../helper/helper';
import mockPeople from '../mock-data/mock-people';
import cleanedPeople from '../mock-data/cleaned-people';
import mockSpecies from '../mock-data/mock-species';
import homeworld from '../mock-data/mock-homeworld';


describe('Helpers', () => {
  test('getSpecies return cleaned people data', async () => {
    const url = 'some-url-here';
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        status: 200,
        json: () =>
          Promise.resolve({
            status:200,
            results: mockPeople
          })
      }));
    const response = await fetchHelper(url);
    expect(response.results).toEqual(mockPeople);
  });
});
