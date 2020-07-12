import React from 'react';
import PropTypes from 'prop-types';

import HomePageMovie from './HomePageMovie';

function TrendingMovies({ list, genres, showWeekTrendingMovies, setShowWeekTrendingMovies }) {
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
  list: PropTypes.array.isRequired,
  genres: PropTypes.object.isRequired,
};

export default TrendingMovies;
