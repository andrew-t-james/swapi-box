import React from 'react';
import Button from '../Button/Button';
import PropTypes from 'prop-types';

const FavoriteCard = ({ name }) => {
  return (
    <div>
      <h2>{name}</h2>
      <span>
        <Button name="⭐" />
      </span>
    </div>
  );
};

FavoriteCard.propTypes = {
  name: PropTypes.string
};

export default FavoriteCard;
