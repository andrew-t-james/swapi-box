import React from 'react';
import Button from '../Button/Button';
import PropTypes from 'prop-types';

const PlanetCard = ({ climate, name, population, residents, terrain, updateFavorites }) => {
  const planet = {
    name
  };

  return (
    <div>
      <h2>{name}</h2>
      <p>{climate}</p>
      <p>{population}</p>
      <p>{residents}</p>
      <p>{terrain}</p>
      <span className="person-card__favorite" onClick={() => updateFavorites(planet)}>
        <Button name="⭐" />
      </span>
    </div>
  );
};

PlanetCard.propTypes = {
  climate: PropTypes.string,
  name: PropTypes.string,
  population: PropTypes.string,
  residents: PropTypes.array,
  terrain: PropTypes.string,
  updateFavorites: PropTypes.func
};

export default PlanetCard;
