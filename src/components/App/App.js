import React, { Component } from 'react';
import Header from '../Header/Header';
import CardContainer from '../CardContainer/CardContainer';
import SideBar from '../SideBar/SideBar';

import { cleanMovieScroll, getPeopleData } from '../../helper/helper';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
      movie: {},
      isLoading: false,
      hasError: false
    };
  }

  componentDidMount = () => {
    // TODO fetch random movie scroll here
    // this.fetchMovieScroll();
  }

  fetchMovieScroll = async () =>  {
    try {
      const movie = await cleanMovieScroll();
      this.setState({ movie });
    } catch (error) {
      this.setState({ hasError: true });
    }
  }

  fetchPeopleData = async () => {
    try {
      const people = await getPeopleData();
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
