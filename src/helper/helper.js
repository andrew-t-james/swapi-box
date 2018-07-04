export const fetchHelper = async url => {
  const getData = await fetch(url);
  const response = await getData.json();
  return response;
};

export const getPersonData = async personData => {
  const personSpecies = personData.map(async people => {
    const getPersonSpecies = await fetchHelper(people.species[0]);
    const getHomeWorld = await fetchHelper(people.homeworld);
    return {
      name: people.name,
      species: getPersonSpecies.name,
      homeworld: getHomeWorld.name,
      population: getHomeWorld.population
    };
  });
  return Promise.all(personSpecies);
};