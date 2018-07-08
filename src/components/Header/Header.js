import React from 'react';
import Button from '../Button/Button';
import PropTypes from 'prop-types';

import './Header.css';

const Header = ({ updateSelection, selected }) => {
  return (
    <header className="header">
      <h2 className="header__title">SWapiBox</h2>
      <ul className="header__nav">
        <li className={`${selected === 'favorites' ? 'btn-active' : ''}`}
          onClick={() => updateSelection()}>
          <Button
            customStyle={'card-container__nav--button btn'}
            name="Favorites"
          />
        </li>
      </ul>
    </header>
  );
};

Header.propTypes = {
  updateSelection: PropTypes.func,
  selected: PropTypes.string
};

export default Header;
