import React from 'react';
import Button from '../Button/Button';
import PropTypes from 'prop-types';

const VehicleCard = ({ model, name, passengers, favorite, vehicleClass, updateFavorites }) => {
  const vehicle = {
    name,
    favorite
  };

  return (
    <div>
      <h2>{model}</h2>
      <p>{name}</p>
      <p>{passengers}</p>
      <p>{vehicleClass}</p>
      <span className="card__favorite" onClick={() => updateFavorites(vehicle)}>
        <Button name="⭐" />
      </span>
    </div>
  );
};

VehicleCard.propTypes = {
  model: PropTypes.string,
  name: PropTypes.string,
  favorite: PropTypes.bool,
  updateFavorites: PropTypes.func,
  passengers: PropTypes.string,
  vehicleClass: PropTypes.string
};

export default VehicleCard;
