import React from 'react';
import Button from '../Button/Button';
import PersonCard from '../PersonCard/PersonCard';
// import Planets from '../Planets/Planets';
// import Vehicles from '../Vehicles/Vehicles';
// import Favorites from '../Favorites/Favorites';
import PropTypes from 'prop-types';

import './CardContainer.css';

const CardContainer = props => {
  const { people, fetchPeopleData } = props;

  const peopleCards = people.map(person => <PersonCard key={person.name} {...person}/>);

  return (
    <section className="main-container">
      <div className="card-container">
        <h1>CardContainer</h1>
        <nav className="card-container__nav">
          <ul>
            <li onClick={() => fetchPeopleData()}>
              <Button name={'People'} />
            </li>
            <li>
              <Button name={'Planets'} />
            </li>
            <li>
              <Button name={'Vehicles'} />
            </li>
          </ul>
        </nav>
        <section>
          {
            people && peopleCards
          }
        </section>
      </div>
    </section>
  );
};

CardContainer.propTypes = {
  people: PropTypes.arrayOf(PropTypes.object),
  fetchPeopleData: PropTypes.func
};

export default CardContainer;
