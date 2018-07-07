import React from 'react';
import Button from '../Button/Button';
import PropTypes from 'prop-types';

const PersonCard = props => {
  const { name, species, homeworld, population } = props;
  return (
    <div>
      <h2>{name}</h2>
      <p>{species}</p>
      <p>{homeworld}</p>
      <p>{population}</p>
      <span>
        <Button name="⭐" />
      </span>
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
