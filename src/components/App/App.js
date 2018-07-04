import React, { Component } from 'react';
import Header from '../Header/Header';
import CardContainer from '../CardContainer/CardContainer';
import SideBar from '../SideBar/SideBar';

import { fetchHelper, getPersonData } from '../../helper/helper';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: []
    };
  }

  componentDidMount = () => {
    // TODO fetch random movie scroll here
  }

  fetchPeopleData = async () => {
    const url = 'https://swapi.co/api/people';
    try {
      const getPeople = await fetchHelper(url);
      const people = await getPersonData(getPeople.results);
      // debugger;
      this.setState({ people });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const { people } = this.state;

    return (
      <main className="grid-container">
        <Header />
        <SideBar />
        <CardContainer
          fetchPeopleData={this.fetchPeopleData}
          people={people}/>
      </main>
    );
  }
}

export default App;
