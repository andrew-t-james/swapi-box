import React from 'react';
import PropTypes from 'prop-types';

const PersonCard = ({ name, species, homeworld, population }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{species}</p>
      <p>{homeworld}</p>
      <p>{population}</p>
    </div>
  );
};

PersonCard.propTypes = {
  name: PropTypes.string,
  species: PropTypes.string,
  homeworld: PropTypes.string,
  population: PropTypes.string
};

export default PersonCard;
