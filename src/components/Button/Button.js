import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, customStyle, amount }) => {
  return (
    <button className={customStyle}>
      {name} {amount}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string,
  customStyle: PropTypes.string,
  amount: PropTypes.number
};

export default Button;
