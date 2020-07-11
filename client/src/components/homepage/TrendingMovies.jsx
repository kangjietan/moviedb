import React from 'react';
import PropTypes from 'prop-types';

import HomePageMovie from './HomePageMovie';

function TrendingMovies({ dayTrendingMoviesList }) {
  let list = dayTrendingMoviesList ? dayTrendingMoviesList : [];

  return (
    <div>
      <h2>Trending</h2>
      <div style={{ height: "30vh" }}>
        <HomePageMovie list={list} />
      </div>
    </div>
  );
}

TrendingMovies.propTypes = {

};

export default TrendingMovies;
