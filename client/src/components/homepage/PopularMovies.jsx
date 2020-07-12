import React from 'react';
import PropTypes from 'prop-types';

import HomePageMovie from './HomePageMovie';

function PopularMovies({ popularMovieList, genres }) {
  let list = popularMovieList ? popularMovieList : [];
  return (
    <div>
      <h2>What's Popular</h2>
      <div style={{ height: "36rem", marginBottom: "10px" }}>
        <HomePageMovie list={list} genres={genres} />
      </div>
    </div>
  );
}

PopularMovies.propTypes = {
  popularMovieList: PropTypes.array.isRequired,
  genres: PropTypes.object.isRequired,
};

export default PopularMovies;
