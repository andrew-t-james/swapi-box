export const mockCleanHomeWorldResponse = [
  {
    birth_year: "19BBY",
    created: "2014-12-09T13:50:51.644000Z",
    edited: "2014-12-20T21:17:56.891000Z",
    eye_color: "blue",
    films: [
      "https://swapi.co/api/films/2/",
      "https://swapi.co/api/films/6/",
      "https://swapi.co/api/films/3/",
      "https://swapi.co/api/films/1/",
      "https://swapi.co/api/films/7/"
    ],
    gender: "male",
    hair_color: "blond",
    height: "172",
    homeworld: "Tatooine",
    mass: "77",
    name: "Luke Skywalker",
    population: "200000",
    skin_color: "fair",
    species: [
      "https://swapi.co/api/species/1/"
    ],
    starships: [
      "https://swapi.co/api/starships/12/",
      "https://swapi.co/api/starships/22/"
    ],
    url: "https://swapi.co/api/people/1/",
    vehicles: [
      "https://swapi.co/api/vehicles/14/",
      "https://swapi.co/api/vehicles/30/"
    ]
  }
];

export const mockMovieFetchResponse = {
  title: 'A New Hope',
  episode_id: 4,
  opening_crawl: 'A new hope...',
  director: 'George Lucas',
  producer: 'Gary Kurtz, Rick McCallum',
  release_date: '1977-05-25',
  characters:[
    'https://swapi.co/api/people/1/',
    'https://swapi.co/api/people/2/',
    'https://swapi.co/api/people/3/',
    'https://swapi.co/api/people/4/',
    'https://swapi.co/api/people/5/',
    'https://swapi.co/api/people/6/',
    'https://swapi.co/api/people/7/',
    'https://swapi.co/api/people/8/',
    'https://swapi.co/api/people/9/',
    'https://swapi.co/api/people/10/',
    'https://swapi.co/api/people/12/',
    'https://swapi.co/api/people/13/',
    'https://swapi.co/api/people/14/',
    'https://swapi.co/api/people/15/',
    'https://swapi.co/api/people/16/',
    'https://swapi.co/api/people/18/',
    'https://swapi.co/api/people/19/',
    'https://swapi.co/api/people/81/'
  ],
  planets:[
    'https://swapi.co/api/planets/2/',
    'https://swapi.co/api/planets/3/',
    'https://swapi.co/api/planets/1/'
  ],
  starships:[
    'https://swapi.co/api/starships/2/',
    'https://swapi.co/api/starships/3/',
    'https://swapi.co/api/starships/5/',
    'https://swapi.co/api/starships/9/',
    'https://swapi.co/api/starships/10/',
    'https://swapi.co/api/starships/11/',
    'https://swapi.co/api/starships/12/',
    'https://swapi.co/api/starships/13/'
  ],
  vehicles:[
    'https://swapi.co/api/vehicles/4/',
    'https://swapi.co/api/vehicles/6/',
    'https://swapi.co/api/vehicles/7/',
    'https://swapi.co/api/vehicles/8/'
  ],
  species:[
    'https://swapi.co/api/species/5/',
    'https://swapi.co/api/species/3/',
    'https://swapi.co/api/species/2/',
    'https://swapi.co/api/species/1/',
    'https://swapi.co/api/species/4/'
  ],
  created: '2014-12-10T14:23:31.880000Z',
  edited: '2015-04-11T09:46:52.774897Z',
  url: 'https://swapi.co/api/films/1/'
};

export const mockPlanetsResponse = {
  count: 61,
  next: 'https://swapi.co/api/planets/?page=2',
  previous: null,
  results: [
    {
      name: 'Alderaan',
      rotation_period: '24',
      orbital_period: '364',
      diameter: '12500',
      climate: 'temperate',
      gravity: '1 standard',
      terrain: 'grasslands, mountains',
      surface_water: '40',
      population: '2000000000',
      residents: [
        'https://swapi.co/api/people/5/',
        'https://swapi.co/api/people/68/',
        'https://swapi.co/api/people/81/'
      ],
      films: ['https://swapi.co/api/films/6/', 'https://swapi.co/api/films/1/'],
      created: '2014-12-10T11:35:48.479000Z',
      edited: '2014-12-20T20:58:18.420000Z',
      url: 'https://swapi.co/api/planets/2/'
    }
  ]
};

export const mockResidentResponse = {
  name: 'Leia Organa',
  height: '150',
  mass: '49',
  hair_color: 'brown',
  skin_color: 'light',
  eye_color: 'brown',
  birth_year: '19BBY',
  gender: 'female',
  homeworld: 'https://swapi.co/api/planets/2/',
  films:[
    'https://swapi.co/api/films/2/',
    'https://swapi.co/api/films/6/',
    'https://swapi.co/api/films/3/',
    'https://swapi.co/api/films/1/',
    'https://swapi.co/api/films/7/'
  ],
  species: ['https://swapi.co/api/species/1/'],
  vehicles: ['https://swapi.co/api/vehicles/30/'],
  starships: [],
  created: '2014-12-10T15:20:09.791000Z',
  edited: '2014-12-20T21:17:50.315000Z',
  url: 'https://swapi.co/api/people/5/'
};

export const mockVehicleResponse = {
  count: 39,
  next: 'https://swapi.co/api/vehicles/?page=2',
  previous: null,
  results: [
    {
      name: 'Sand Crawler',
      model: 'Digger Crawler',
      manufacturer: 'Corellia Mining Corporation',
      cost_in_credits: '150000',
      length: '36.8',
      max_atmosphering_speed: '30',
      crew: '46',
      passengers: '30',
      cargo_capacity: '50000',
      consumables: '2 months',
      vehicle_class: 'wheeled',
      pilots: [],
      films: ['https://swapi.co/api/films/5/', 'https://swapi.co/api/films/1/'],
      created: '2014-12-10T15:36:25.724000Z',
      edited: '2014-12-22T18:21:15.523587Z',
      url: 'https://swapi.co/api/vehicles/4/'
    }
  ]
};