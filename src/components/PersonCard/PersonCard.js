import React from 'react';
import Button from '../Button/Button';
import PropTypes from 'prop-types';

const PersonCard = props => {
  const { name, species, homeworld, population, favorite, updateFavorites } = props;
  const person = {
    name,
    favorite
  };

  return (
    <div className="card-container__card">
      <div className="card-container__card--header">
        <h2 className="card-container__card--heading">{name}</h2>
        <span className="card__favorite" onClick={() => updateFavorites(person)}>
          <Button name="⭐" customStyle={"btn favorite--button"}/>
        </span>
      </div>
      <p>Species: {species}</p>
      <p>Homeworld: {homeworld}</p>
      <p>Population: {population}</p>
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
