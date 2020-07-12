import React from 'react';
import PropTypes from 'prop-types';

import HomePageMovie from './HomePageMovie';

function TrendingMovies({ dayTrendingMoviesList, genres }) {
  let list = dayTrendingMoviesList ? dayTrendingMoviesList : [];

  return (
    <div>
      <h2>Trending</h2>
      <div style={{ height: "30vh" }}>
        <HomePageMovie list={list} genres={genres} />
      </div>
    </div>
  );
}

TrendingMovies.propTypes = {

};

export default TrendingMovies;
