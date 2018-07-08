import React from 'react';
import PropTypes from 'prop-types';

import './SideBar.css';

const SideBar = ({ movie }) => {
  const { name, releaseDate, episode, crawl } = movie;

  return (
    <aside className="side-bar">
      <div className="side-bar__content">
        <h2>{name}</h2>
        <br/>
        <p>Episode: {episode}</p>
        <br/>
        <p>Released: {releaseDate}</p>
        <br/>
        <p>{crawl}</p>
      </div>
    </aside>
  );
};

SideBar.propTypes = {
  movie: PropTypes.object
};

export default SideBar;
