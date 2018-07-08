import React, { Component } from 'react';
import { PulseLoader } from 'halogenium';

export default class Loader extends Component {
  render() {
    return (
      <PulseLoader color="#26A65B" size="16px" margin="4px" />
    );
  }
}