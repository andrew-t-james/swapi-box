import React from 'react';
import Button from '../Button/Button';
import PropTypes from 'prop-types';

const PersonCard = props => {
  const { name, species, homeworld, population, favorite, updateFavorites } = props;
  const person = {
    name,
    species,
    homeworld,
    population,
    favorite: true
  };

  return (
    <div>
      <h2>{name}</h2>
      <p>{species}</p>
      <p>{homeworld}</p>
      <p>{population}</p>
      <span className="person-card__favorite" onClick={() => updateFavorites(person)}>
        <Button name="⭐" />
      </span>
    </div>
  );
};

PersonCard.propTypes = {
  name: PropTypes.string,
  species: PropTypes.string,
  favorite: PropTypes.bool,
  homeworld: PropTypes.string,
  population: PropTypes.string,
  updateFavorites: PropTypes.func
};

export default PersonCard;
