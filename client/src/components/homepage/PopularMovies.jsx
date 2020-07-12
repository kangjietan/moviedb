import React from 'react';
import PropTypes from 'prop-types';

import HomePageMovie from './HomePageMovie';

function PopularMovies({ popularMovieList, genres }) {
  let list = popularMovieList ? popularMovieList : [];
  return (
    <div>
      <h2>What's Popular</h2>
      <div style={{ height: "35rem" }}>
        <HomePageMovie list={list} genres={genres} />
      </div>
    </div>
  );
}

PopularMovies.propTypes = {

};

export default PopularMovies;
