import React from 'react';
import PropTypes from 'prop-types';

import List from './List';

import { connect } from 'react-redux';

function WatchedList({ watchedList, genres }) {
  return (
    <div>
      <List list={watchedList} genres={genres} component="watched" />
    </div >
  );
}

WatchedList.propTypes = {
  watchedList: PropTypes.object.isRequired,
  genres: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  watchedList: state.movie.watchedList,
  genres: state.search.genres,
});

export default connect(mapStateToProps, null)(WatchedList);
