const API_ENDPOINT = 'https://swapi.dev/api';

export const fetchHelper = async url => {
  const response = await fetch(url);

  if (!response.ok) {
    throw Error('failed fetch request');
  }

  const data = await response.json();
  return data;
};

export const getPeopleData = async () => {
  try {
    const url = `${API_ENDPOINT}/people`;
    const getPeopleList = await fetchHelper(url);
    const cleanedHomeworld = await cleanHomeWord(getPeopleList.results);
    const cleanedSpecies = await cleanSpecies(cleanedHomeworld);

    return cleanedSpecies;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
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
    try {
      if (person.species.length > 0) {
        const species = await fetchHelper(person.species[0]);
        const { name,  homeworld, population } = species;
        return {
          ...person,
          species: name,
          name,
          homeworld,
          population,
          favorite: false
        };
      } else {
        return {
          ...person,
          species: 'unknown',
          favorite: false
        };
      }
    } catch (error) {
    // eslint-disable-next-line no-console
      console.log(error);
    }
  });
  return Promise.all(unresolvedPeopleList);
};


export const cleanMovieScroll = async () => {
  const randomNum = Math.floor(Math.random() * 6) + 1;
  const movie = await fetchHelper(`${API_ENDPOINT}/films/${randomNum}/`);
  return {
    name: movie.title,
    episode: movie.episode_id,
    crawl: movie.opening_crawl,
    releaseDate: movie.release_date
  };
};

export const getPlanetData = async () => {
  const url = `${API_ENDPOINT}/planets`;
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
  const url = `${API_ENDPOINT}/vehicles/`;
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
