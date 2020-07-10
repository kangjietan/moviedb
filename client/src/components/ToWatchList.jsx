import React from 'react';
import PropTypes from 'prop-types';

import List from './List';

import { connect } from 'react-redux';

function ToWatchList({ toWatchList, genres }) {
  return (
    <div>
      <List list={toWatchList} genres={genres} component="toWatch" />
    </div >
  );
}

ToWatchList.propTypes = {
  toWatchList: PropTypes.object.isRequired,
  genres: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  toWatchList: state.movie.toWatchList,
  genres: state.search.genres,
});

export default connect(mapStateToProps, null)(ToWatchList);
