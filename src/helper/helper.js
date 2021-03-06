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
    name: movie.title,
    episode: movie.episode_id,
    crawl: movie.opening_crawl,
    releaseDate: movie.release_date
  };
};

export const getPlanetData = async () => {
  const url = 'https://swapi.co/api/planets';
  const getPlanetList = await fetchHelper(url);
  const cleanedPlanets = await cleanPlanet(getPlanetList.results);

  return cleanedPlanets;
};

export const cleanPlanet = planetList => {
  const unresolvedPeopleList = planetList.map(async planet => {
    const { name, population, climate, terrain, residents } = planet;
    const cleanedResidents = await cleanResidents(residents);

    return {
      name,
      population,
      climate,
      terrain,
      residents: cleanedResidents,
      favorite: false
    };
  });
  return Promise.all(unresolvedPeopleList);
};

export const cleanResidents = async residents => {
  const unresolvedResidents = await residents.map(async resident => {
    const cleanedResident = await fetchHelper(resident);
    return cleanedResident.name;
  });
  return Promise.all(unresolvedResidents);
};

export const getVehicleData = async () => {
  const url = 'https://swapi.co/api/vehicles/';
  const getVehicleList = await fetchHelper(url);
  const cleanedVehicles = await cleanVehicleData(getVehicleList.results);

  return cleanedVehicles;
};

const cleanVehicleData = vehicles => {
  const cleanedVehicles = vehicles.map(vehicle => {
    return {
      name: vehicle.name,
      model: vehicle.model,
      vehicleClass: vehicle.vehicle_class,
      passengers: vehicle.passengers,
      favorite: false
    };
  });
  return Promise.all(cleanedVehicles);
};
