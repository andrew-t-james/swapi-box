export const fetchHelper = async url => {
  const response = await fetch(url);

  if (!response.ok) {
    throw Error('failed fetch request');
  }

  return await response.json();
};

export const getPeopleData = async () => {
  const url = 'https://swapi.co/api/people';
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
      homeworld: name,
      population
    };
  });
  return Promise.all(unresolvedPeopleList);
};

export const cleanSpecies = async peopleList => {
  const unresolvedPeopleList = await peopleList.map(async person => {
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
  return Promise.all(unresolvedPeopleList);
};


export const cleanMovieScroll = async () => {
  const randomNum = Math.floor(Math.random() * 7) + 1;
  const movie = await fetchHelper(`https://swapi.co/api/films/${randomNum}/`);
  return {
    title: movie.title,
    episode: movie.episode_id,
    crawl: movie.opening_crawl.replace(/[^a-zA-Z ]/g, ""),
    releaseDate: movie.release_date
  };
};