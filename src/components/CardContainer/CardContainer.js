import React from 'react';
import Button from '../Button/Button';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';
import People from '../People/People';
import Planets from '../Planets/Planets';
import Vehicles from '../Vehicles/Vehicles';
import Favorites from '../Favorites/Favorites';
import PropTypes from 'prop-types';

import './CardContainer.css';

const CardContainer = props => {
  const { people, fetchPeopleData } = props;

  return (
    <section className="main-container">
      <div className="card-container">
        <h1>CardContainer</h1>
        <nav className="card-container__nav">
          <NavLink to="/people">
            <Button name={'People'} className="people"/>
          </NavLink>
          <NavLink to="/planets">
            <Button name={'Planets'} className="planets" />
          </NavLink>
          <NavLink to="/vehicles">
            <Button name={'Vehicles'} />
          </NavLink>
        </nav>
      </div>
      <Switch>
        <Route
          path="/people"
          render={
            props => <People {...props} people={people} fetchPeopleData={fetchPeopleData} />
          }
        />
        <Route path="/planets" component={Planets} />
        <Route path="/vehicles" component={Vehicles} />
        <Route path="/favorites" component={Favorites} />
      </Switch>
    </section>
  );
};

CardContainer.propTypes = {
  people: PropTypes.arrayOf(PropTypes.object),
  fetchPeopleData: PropTypes.func
};

export default CardContainer;
