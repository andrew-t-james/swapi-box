import React, { Component } from 'react';
import Header from '../Header/Header';
import CardContainer from '../CardContainer/CardContainer';
import SideBar from '../SideBar/SideBar';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <main className="grid-container">
        <Header />
        <SideBar />
        <CardContainer />
      </main>
    );
  }
}

export default App;
