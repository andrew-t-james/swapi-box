import React, { Component } from 'react';
import { PulseLoader } from 'halogenium';

class Loader extends Component {
  render() {
    return (
      <div className="loader">
        <PulseLoader color="#F9D749" size="16px" margin="4px" />
      </div>
    );
  }
}

export default Loader;