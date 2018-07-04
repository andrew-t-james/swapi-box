import React from 'react';
import PropTypes from 'prop-types';

const PersonCard = ({ name, species, homeworld, population }) => {
  return (
    <div>
      <p>
        {name}
      </p>
      <p>
        {species}
      </p>
      <p>
        {population}
      </p>
      <p>
        {homeworld}
      </p>
    </div>
  );
};

PersonCard.propTypes = {

};

export default PersonCard;
