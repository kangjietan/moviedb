import React, { useState } from 'react';
import PropTypes from 'prop-types';

import PopularMovies from './homepage/PopularMovies';
import TrendingMovies from './homepage/TrendingMovies';

import { connect } from 'react-redux';

function Home({ popularMoviesResult, dayTrendingMoviesResult, weekTrendingMoviesResult, genres }) {
  const [showWeekTrendingMovies, setShowWeekTrendingMovies] = useState(false);

  let list;
  if (showWeekTrendingMovies) {
    list = weekTrendingMoviesResult.results ? weekTrendingMoviesResult.results : [];
  } else {
    list = dayTrendingMoviesResult.results ? dayTrendingMoviesResult.results : [];
  }

  return (
    <div className="container">
      <PopularMovies popularMovieList={popularMoviesResult.results} genres={genres} />
      <TrendingMovies
        list={list}
        showWeekTrendingMovies={showWeekTrendingMovies}
        setShowWeekTrendingMovies={setShowWeekTrendingMovies}
        genres={genres}
      />
    </div>
  );
}

Home.propTypes = {
  popularMoviesResult: PropTypes.object.isRequired,
  dayTrendingMoviesResult: PropTypes.object.isRequired,
  weekTrendingMoviesResult: PropTypes.object.isRequired,
  genres: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  popularMoviesResult: state.search.popularMoviesResult,
  dayTrendingMoviesResult: state.search.dayTrendingMoviesResult,
  weekTrendingMoviesResult: state.search.weekTrendingMoviesResult,
  genres: state.search.genres,
});

export default connect(mapStateToProps)(Home);
