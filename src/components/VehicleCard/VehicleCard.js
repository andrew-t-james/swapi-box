import React from 'react';
import Button from '../Button/Button';
import PropTypes from 'prop-types';

const VehicleCard = ({ model, name, passengers, vehicleClass, updateFavorites }) => {
  const vehicle = {
    name
  };

  return (
    <div className="card-container__card">
      <div className="card-container__card--header">
        <h2>{model}</h2>
        <span className="card__favorite" onClick={() => updateFavorites(vehicle)}>
          <Button name="⭐" customStyle={"btn favorite--button"}/>
        </span>
      </div>
      <p>Name: {name}</p>
      <p>Passenger: {passengers}</p>
      <p>Class: {vehicleClass[0].toUpperCase() + vehicleClass.substring(1)}</p>
    </div>
  );
};

VehicleCard.propTypes = {
  model: PropTypes.string,
  name: PropTypes.string,
  updateFavorites: PropTypes.func,
  passengers: PropTypes.string,
  vehicleClass: PropTypes.string
};

export default VehicleCard;
