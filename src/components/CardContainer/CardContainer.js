import React from 'react';
import Button from '../Button/Button';
import { BrowserRouter, Route, NavLink, Link } from 'react-router-dom';
import People from '../People/People';
import Planets from '../Planets/Planets';
import Vehicles from '../Vehicles/Vehicles';
import PropTypes from 'prop-types';

import './CardContainer.css';

const CardContainer = () => {
  return (
    <section className="main-container">
      <h1>CardContainer</h1>
      <nav className="main-container__nav">
        <Link to="/people">
          <Button name={'People'}/>
        </Link>
        <NavLink to="/planets">
          <Button name={'Planets'}/>
        </NavLink>
        <NavLink to="/vehicles">
          <Button name={'Vehicles'}/>
        </NavLink>
      </nav>
      <div>
        <Route path="/people" component={People}/>
        <Route path="/planets" component={Planets}/>
        <Route path="/vehicles" component={Vehicles}/>
      </div>
    </section>
  );
};

CardContainer.propTypes = {

};

export default CardContainer;
