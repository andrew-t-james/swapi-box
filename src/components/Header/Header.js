import React from 'react';
import Button from '../Button/Button';
import PropTypes from 'prop-types';

import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h2 className="header__title">Header</h2>
      <Button name="Favorites"/>
    </header>
  );
};

Header.propTypes = {

};

export default Header;
