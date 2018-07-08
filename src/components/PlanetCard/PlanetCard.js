import React from 'react';
import Button from '../Button/Button';
import PropTypes from 'prop-types';

const PlanetCard = ({ climate, name, population, favorite, residents, terrain, updateFavorites }) => {
  const planet = {
    name,
    favorite
  };

  return (
    <div className="card-container__card">
      <div className="card-container__card--header">
        <h2 className="card-container__card--heading">{name}</h2>
        <span className="card__favorite" onClick={() => updateFavorites(planet)}>
          <Button name="⭐" customStyle={"btn favorite--button"} />
        </span>
      </div>
      <p>Climate: {climate}</p>
      <p>Population: {population}</p>
      <p>Residents: {residents.length ? residents.slice(0, 3) : 'none'}</p>
      <p>Terrain: {terrain}</p>

    </div>
  );
};

PlanetCard.propTypes = {
  climate: PropTypes.string,
  name: PropTypes.string,
  population: PropTypes.string,
  residents: PropTypes.array,
  terrain: PropTypes.string,
  favorite: PropTypes.bool,
  updateFavorites: PropTypes.func
};

export default PlanetCard;
