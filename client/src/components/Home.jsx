import React from 'react';
import PropTypes from 'prop-types';

import PopularMovies from './homepage/PopularMovies';
import TrendingMovies from './homepage/TrendingMovies';

import { connect } from 'react-redux';

function Home({ popularMoviesResult, dayTrendingMoviesResult, genres }) {
  return (
    <div className="container">
      <PopularMovies popularMovieList={popularMoviesResult.results} genres={genres} />
      <TrendingMovies dayTrendingMoviesList={dayTrendingMoviesResult.results} genres={genres} />
    </div>
  );
}

Home.propTypes = {
  popularMoviesResult: PropTypes.object.isRequired,
  dayTrendingMoviesResult: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  popularMoviesResult: state.search.popularMoviesResult,
  dayTrendingMoviesResult: state.search.dayTrendingMoviesResult,
  genres: state.search.genres,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
