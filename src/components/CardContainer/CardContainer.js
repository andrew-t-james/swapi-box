import React from 'react';
import Button from '../Button/Button';
import PersonCard from '../PersonCard/PersonCard';
import PlanetCard from '../PlanetCard/PlanetCard';
import VehicleCard from '../VehicleCard/VehicleCard';
import FavoriteCard from '../FavoriteCard/FavoriteCard';
import PropTypes from 'prop-types';

import './CardContainer.css';

const CardContainer = props => {
  const { people,
    planets,
    selected,
    vehicles,
    fetchVehicleData,
    fetchPeopleData,
    fetchPlanetData,
    favorites,
    updateFavorites } = props;

  const peopleCards = people.map((person, index) =>
    <PersonCard
      key={index}
      {...person}
      updateFavorites={updateFavorites}
    />
  );

  const planetsCards = planets.map((planet, index) =>
    <PlanetCard
      key={index}
      {...planet}
      updateFavorites={updateFavorites}
    />
  );

  const vehicleCards = vehicles.map(vehicle =>
    <VehicleCard
      key={vehicle.name}
      {...vehicle}
      updateFavorites={updateFavorites}
    />
  );

  const favoriteCards = favorites.map((favorite, index) =>
    <FavoriteCard
      key={index}
      {...favorite}
      updateFavorites={updateFavorites}
    />
  );

  const noFavorites = () => (
    <div>
      <h2>No Favorites</h2>
      <p>Please add Favorites</p>
    </div>
  );

  return (
    <section className="main-container">
      <div>
        <nav>
          <ul className="card-container__nav">
            <li
              className={`${selected === 'people' ? 'btn-active' : ''}`}
              onClick={() => fetchPeopleData()}>
              <Button
                customStyle={'card-container__nav--button btn'}
                name={'People'}
                className="people"
              />
            </li>
            <li
              className={`${selected === 'planets' ? 'btn-active' : ''}`}
              onClick={() => fetchPlanetData()}>
              <Button
                customStyle={'card-container__nav--button btn'}
                name={'Planets'}
                className="planets"
              />
            </li>
            <li
              className={`${selected === 'vehicles' ? 'btn-active' : ''}`}
              onClick={() => fetchVehicleData()}>
              <Button
                customStyle={'card-container__nav--button btn'}
                name={'Vehicles'}
                className="vehicles"
              />
            </li>
          </ul>
        </nav>
        <section className="card-container">
          {selected === 'people'  && peopleCards}
          {selected === 'planets'  && planetsCards}
          {selected === 'vehicles'  && vehicleCards}
          {selected === 'favorites' && favoriteCards}
          {selected === 'favorites' && !favorites.length && noFavorites()}
        </section>
      </div>
    </section>
  );
};

CardContainer.propTypes = {
  people: PropTypes.arrayOf(PropTypes.object),
  planets: PropTypes.arrayOf(PropTypes.object),
  vehicles: PropTypes.arrayOf(PropTypes.object),
  favorites: PropTypes.arrayOf(PropTypes.object),
  selected: PropTypes.string,
  fetchPeopleData: PropTypes.func,
  fetchVehicleData: PropTypes.func,
  fetchPlanetData: PropTypes.func,
  updateFavorites: PropTypes.func
};

export default CardContainer;
