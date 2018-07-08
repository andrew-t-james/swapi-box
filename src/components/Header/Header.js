import React from 'react';
import Button from '../Button/Button';
import PropTypes from 'prop-types';

import './Header.css';

const Header = ({ updateSelection }) => {
  return (
    <header className="header">
      <h2 className="header__title">Header</h2>
      <ul>
        <li onClick={() => updateSelection()}>
          <Button name="Favorites" />
        </li>
      </ul>
    </header>
  );
};

Header.propTypes = {
  updateSelection: PropTypes.func
};

export default Header;
