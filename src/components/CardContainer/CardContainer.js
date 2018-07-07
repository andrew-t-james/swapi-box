import React from 'react';
import Button from '../Button/Button';
import PersonCard from '../PersonCard/PersonCard';
import PlanetCard from '../PlanetCard/PlanetCard';
import VehicleCard from '../VehicleCard/VehicleCard';
// import Favorites from '../Favorites/Favorites';
import PropTypes from 'prop-types';

import './CardContainer.css';

const CardContainer = props => {
  const { people, planets, selected, vehicles, fetchVehicleData, fetchPeopleData, fetchPlanetData } = props;

  const peopleCards = people.map(person => <PersonCard key={person.name} {...person} />);
  const planetsCards = planets.map(planet => <PlanetCard key={planet.population} {...planet} />);
  const vehicleCards = vehicles.map(vehicle => <VehicleCard key={vehicle.name} {...vehicle} />);

  return (
    <section className="main-container">
      <div className="card-container">
        <h1>CardContainer</h1>
        <nav className="card-container__nav">
          <ul>
            <li className="card-container__nav--button" onClick={() => fetchPeopleData()}>
              <Button name={'People'} className="people" />
            </li>
            <li className="card-container__nav--button"  onClick={() => fetchPlanetData()}>
              <Button name={'Planets'} className="planets" />
            </li>
            <li className="card-container__nav--button"  onClick={() => fetchVehicleData()}>
              <Button name={'Vehicles'} className="vehicles" />
            </li>
          </ul>
        </nav>
        <section>
          {selected === 'people'  && peopleCards}
          {selected === 'planets'  && planetsCards}
          {selected === 'vehicles'  && vehicleCards}
        </section>
      </div>
    </section>
  );
};

CardContainer.propTypes = {
  people: PropTypes.arrayOf(PropTypes.object),
  planets: PropTypes.arrayOf(PropTypes.object),
  vehicles: PropTypes.arrayOf(PropTypes.object),
  selected: PropTypes.string,
  fetchPeopleData: PropTypes.func,
  fetchVehicleData: PropTypes.func,
  fetchPlanetData: PropTypes.func
};

export default CardContainer;
