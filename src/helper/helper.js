export const fetchHelper = async url => {
  const getData = await fetch(url);
  const response = await getData.json();
  return response;
};

export const getPeopleData = async (url) => {
  const getPeopleList = await fetchHelper(url);
  const cleanedHomeworld = await cleanHomeWord(getPeopleList.results);
  const cleanedSpecies = await cleanSpecies(cleanedHomeworld);
  return cleanedSpecies;
};

export const cleanHomeWord = async peopleList => {
  const unresolvedPeopleList = await peopleList.map(async person => {
    const homeworld = await fetchHelper(person.homeworld);
    const { name, population } = homeworld;
    return {
      ...person,
      homeworld:
      name,
      population
    };
  });
  return Promise.all(unresolvedPeopleList);
};

export const cleanSpecies = async peopleList => {
  const unresolvedPeople = await peopleList.map(async person => {
    const species = await fetchHelper(person.species);
    const { homeworld, population, name } = person;
    return {
      name,
      homeworld,
      population,
      species: species.name,
      favorite: false
    };
  });
  return Promise.all(unresolvedPeople);
};
