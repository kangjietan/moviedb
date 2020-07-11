import React from 'react';
import PropTypes from 'prop-types';

import PopularMovies from './homepage/PopularMovies';
import TrendingMovies from './homepage/TrendingMovies';

import { connect } from 'react-redux';

function Home({ popularMovieResults }) {
  return (
    <div className="container">
      <PopularMovies popularMovieList={popularMovieResults.results} />
      <TrendingMovies />
    </div>
  );
}

Home.propTypes = {

};

const mapStateToProps = state => ({
  popularMovieResults: state.search.popularMovieResults,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
