import React from 'react';
import PropTypes from 'prop-types';

const PlanetCard = ({climate, planet, population, residents, terrain}) => {
  return (
    <div>
      <h2>{planet}</h2>
      <p>{climate}</p>
      <p>{population}</p>
      <p>{residents}</p>
      <p>{terrain}</p>
    </div>
  );
};

PlanetCard.propTypes = {
  climate: PropTypes.string,
  planet: PropTypes.string,
  population: PropTypes.string,
  residents: PropTypes.array,
  terrain: PropTypes.string
};

export default PlanetCard;