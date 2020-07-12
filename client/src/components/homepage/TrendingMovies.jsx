import React, { useState } from 'react';
import PropTypes from 'prop-types';

import HomePageMovie from './HomePageMovie';

function TrendingMovies({ dayTrendingMoviesList, weekTrendingMoviesList, genres }) {
  const [showWeekTrendingMovies, setShowWeekTrendingMovies] = useState(false);
  let list;
  if (showWeekTrendingMovies) {
    list = weekTrendingMoviesList ? weekTrendingMoviesList : [];
  } else {
    list = dayTrendingMoviesList ? dayTrendingMoviesList : [];
  }

  return (
    <div>
      <div className="d-flex flex-row">
        <h2>Trending</h2>
        <button className={`btn btn-${showWeekTrendingMovies ? "link" : "success"} ml-2`} onClick={() => { setShowWeekTrendingMovies(false) }}>Day</button>
        <button className={`btn btn-${showWeekTrendingMovies ? "success" : "link"}`} onClick={() => { setShowWeekTrendingMovies(true) }}>Week</button>
      </div>
      <div style={{ height: "36rem", marginBottom: "10px" }}>
        <HomePageMovie list={list} genres={genres} />
      </div>
    </div>
  );
}

TrendingMovies.propTypes = {
  dayTrendingMoviesList: PropTypes.array.isRequired,
  weekTrendingMoviesList: PropTypes.array.isRequired,
  genres: PropTypes.object.isRequired,
};

export default TrendingMovies;
