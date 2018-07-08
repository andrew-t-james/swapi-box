import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, customStyle }) => {
  return (
    <button className={customStyle}>
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string,
  customStyle: PropTypes.string
};

export default Button;
