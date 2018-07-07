import React, { Component } from 'react';
import Header from '../Header/Header';
import CardContainer from '../CardContainer/CardContainer';
import SideBar from '../SideBar/SideBar';

import { cleanMovieScroll, getPeopleData, getPlanetData, getVehicleData } from '../../helper/helper';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
      movie: {},
      planets: [],
      vehicles: [],
      isLoading: false,
      hasError: false,
      selected: null
    };
  }

  componentDidMount = () => {
    // TODO fetch random movie scroll here
  }

  fetchMovieScroll = async () =>  {
    try {
      const movie = await cleanMovieScroll();
      this.setState({ movie });
    } catch (error) {
      this.setState({ hasError: true, movie: {} });
    }
  }

  fetchPeopleData = async () => {
    try {
      const people = await getPeopleData();
      this.setState({ people, selected: 'people' });
    } catch (error) {
      this.setState({ hasError: true });
    }
  }

  fetchPlanetData = async () => {
    try {
      const planets = await getPlanetData();
      this.setState({ planets, selected: 'planets' });
    } catch (error) {
      this.setState({ hasError: true });
    }
  }

  fetchVehicleData = async () => {
    try {
      const vehicles = await getVehicleData();
      this.setState({ vehicles, selected: 'vehicles' });
    } catch (error) {
      this.setState({ hasError: true });
    }
  }

  render() {
    const { people, movie, planets, selected, vehicles } = this.state;

    return (
      <main className="grid-container">
        <Header />
        <SideBar movie={movie}/>
        <CardContainer
          people={people}
          planets={planets}
          selected={selected}
          vehicles={vehicles}
          fetchPeopleData={this.fetchPeopleData}
          fetchPlanetData={this.fetchPlanetData}
          fetchVehicleData={this.fetchVehicleData}
        />
      </main>
    );
  }
}

export default App;
