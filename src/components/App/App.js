import React, { Component } from 'react';
import Header from '../Header/Header';
import CardContainer from '../CardContainer/CardContainer';
import SideBar from '../SideBar/SideBar';

import { getPeopleData } from '../../helper/helper';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
      isLoading: false,
      hasError: false
    };
  }

  componentDidMount = () => {
    // TODO fetch random movie scroll here
  }

  fetchPeopleData = async () => {
    const url = 'https://swapi.co/api/people';
    try {
      const people = await getPeopleData(url);
      this.setState({ people });
    } catch (error) {
      this.setState({ hasError: true });
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
