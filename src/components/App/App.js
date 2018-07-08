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
      favorites: [],
      isLoading: false,
      hasError: false,
      selected: null
    };
  }

  componentDidMount = () => {
    // TODO fetch random movie scroll here
    this.fetchMovieScroll();
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

  updateFavorites = newFavorite => {
    let allFavorites = this.state.favorites;
    const foundInFavorites = allFavorites.find(item => item.name === newFavorite.name);
    const removeFromFavorites = allFavorites.filter(item => item.name !== newFavorite.name);

    if (!foundInFavorites) {
      allFavorites = [...allFavorites, newFavorite];
    } else {
      allFavorites = removeFromFavorites;
    }

    this.setState({ favorites: [...allFavorites] });
  }

  updateSelection = () => {
    return this.setState({ selected: 'favorites' });
  }

  render() {
    const { people, movie, planets, selected, vehicles, favorites } = this.state;

    return (
      <main className="grid-container">
        <Header updateSelection={this.updateSelection} />
        <SideBar movie={movie} />
        <CardContainer
          people={people}
          planets={planets}
          selected={selected}
          vehicles={vehicles}
          favorites={favorites}
          fetchPeopleData={this.fetchPeopleData}
          fetchPlanetData={this.fetchPlanetData}
          fetchVehicleData={this.fetchVehicleData}
          updateFavorites={this.updateFavorites}
        />
      </main>
    );
  }
}

export default App;
