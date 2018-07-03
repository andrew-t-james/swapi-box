import React from 'react';
import Button from '../Button/Button';
import { Route, NavLink } from 'react-router-dom';
import People from '../People/People';
import Planets from '../Planets/Planets';
import Vehicles from '../Vehicles/Vehicles';
import Favorites from '../Favorites/Favorites';
import PropTypes from 'prop-types';

import './CardContainer.css';

const CardContainer = () => {
  return (
    <section className="main-container">
      <div className="card-container">
        <h1>CardContainer</h1>
        <nav className="card-container__nav">
          <NavLink to="/people">
            <Button name={'People'}/>
          </NavLink>
          <NavLink to="/planets">
            <Button name={'Planets'}/>
          </NavLink>
          <NavLink to="/vehicles">
            <Button name={'Vehicles'}/>
          </NavLink>
        </nav>
      </div>
      <div>
        <Route path="/people" component={People} />
        <Route path="/planets" component={Planets} />
        <Route path="/vehicles" component={Vehicles} />
        <Route path="/favorites" component={Favorites} />
      </div>
    </section>
  );
};

CardContainer.propTypes = {

};

export default CardContainer;
