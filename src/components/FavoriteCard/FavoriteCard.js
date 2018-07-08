import React from 'react';
import Button from '../Button/Button';
import PropTypes from 'prop-types';

const FavoriteCard = ({ name, updateFavorites }) => {
  const favorite = {
    name
  };

  return (
    <div>
      <h2>{name}</h2>
      <span className="favorite__card--button" onClick={() => updateFavorites(favorite)}>
        <Button name="⭐" />
      </span>
    </div>
  );
};

FavoriteCard.propTypes = {
  name: PropTypes.string,
  updateFavorites: PropTypes.func
};

export default FavoriteCard;
