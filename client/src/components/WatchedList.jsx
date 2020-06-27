import React from 'react';
import PropTypes from 'prop-types';

import WatchedMovie from './movies/WatchedMovie.jsx';

import { connect } from 'react-redux';

function WatchedList({ watchedList }) {
  let movies = Object.keys(watchedList);
  return (
    <div className="container">
      {movies.map((id) => <WatchedMovie key={id} movie={watchedList[id]} />)}
    </div>
  );
}

const mapStateToProps = state => ({
  watchedList: state.movie.watchedList
});

export default connect(mapStateToProps, null)(WatchedList);
