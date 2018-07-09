import React from 'react';
import Button from '../Button/Button';
import PropTypes from 'prop-types';

import './FavoriteCard.css';

const FavoriteCard = ({ name, updateFavorites }) => {
  const favorite = {
    name
  };

  return (
    <div className="favorite__card">
      <h2 className="favorite__card--heading">{name}</h2>
      <span className="favorite__card--button" onClick={() => updateFavorites(favorite)}>
        <Button name="⭐" customStyle={'btn favorite--button'}/>
      </span>
    </div>
  );
};

FavoriteCard.propTypes = {
  name: PropTypes.string,
  updateFavorites: PropTypes.func
};

export default FavoriteCard;
