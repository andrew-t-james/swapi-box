import React from 'react';
import Button from '../Button/Button';
import PersonCard from '../PersonCard/PersonCard';
import Planets from '../Planets/Planets';
// import Vehicles from '../Vehicles/Vehicles';
// import Favorites from '../Favorites/Favorites';
import PropTypes from 'prop-types';

import './CardContainer.css';

const CardContainer = props => {
  const { people, planets, selected, fetchPeopleData, fetchPlanetData } = props;


  const peopleCards = people.map(person => <PersonCard key={person.name} {...person}/>);
  const planetsCards = planets.map(planet => <PersonCard key={planet.population} {...planet} />);

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
              <Button name={'Planets'} className="planets"/>
            </li>
            <li>
              <Button name={'Vehicles'} />
            </li>
          </ul>
        </nav>
        <section>
          {selected === 'people'  && peopleCards}
          {selected === 'planets'  && planetsCards}
        </section>
      </div>
    </section>
  );
};

CardContainer.propTypes = {
  people: PropTypes.arrayOf(PropTypes.object),
  planets: PropTypes.arrayOf(PropTypes.object),
  fetchPeopleData: PropTypes.func,
  fetchPlanetData: PropTypes.func
};

export default CardContainer;
