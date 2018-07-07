import React from 'react';
import Button from '../Button/Button';
import PropTypes from 'prop-types';

const FavoriteCard = props => {
  return (
    <div>
      <h2>{props.name}</h2>
      <span>
        <Button name="⭐" />
      </span>
    </div>
  );
};

FavoriteCard.propTypes = {

};

export default FavoriteCard;
