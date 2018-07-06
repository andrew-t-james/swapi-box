import React from 'react';
import PropTypes from 'prop-types';

import './SideBar.css';

const SideBar = ({ movie }) => {
  const { title, releaseDate, episode, crawl } = movie;
  return (
    <aside className="side-bar">
      { title &&
      <h2>{title}</h2>
      }
      <p>{episode}</p>
      <p>{releaseDate}</p>
      <p>{crawl}</p>
    </aside>
  );
};

SideBar.propTypes = {
  movie: PropTypes.object
};

export default SideBar;
