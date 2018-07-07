import React from 'react';
import Button from '../Button/Button';
import PropTypes from 'prop-types';

const VehicleCard = ({ model, name, passengers, vehicleClass }) => {
  return (
    <div>
      <h2>{model}</h2>
      <p>{name}</p>
      <p>{passengers}</p>
      <p>{vehicleClass}</p>
      <span>
        <Button name="⭐" />
      </span>
    </div>
  );
};

VehicleCard.propTypes = {
  model: PropTypes.string,
  name: PropTypes.string,
  passengers: PropTypes.string,
  vehicleClass: PropTypes.string
};

export default VehicleCard;
