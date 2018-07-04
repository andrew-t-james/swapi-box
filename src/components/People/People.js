import React, { Component } from 'react';
import Card from '../Card/Card';
import PropTypes from 'prop-types';

class People extends Component {
  constructor() {
    super();
  }

  componentDidMount = () => {
    this.props.fetchPeopleData();
  }


  render() {
    const { people } = this.props;
    return (
      <div>
        <h2>People Component</h2>
      </div>
    );
  }
}

People.propTypes = {
  fetchPeopleData: PropTypes.func
};

export default People;
