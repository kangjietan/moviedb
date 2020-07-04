import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

class MobileWatchedMovie extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { movie, genres } = this.props;
    const imageUrl = movie.poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}` : "./no-image.jpg";

    return (
      <div className="card m-3" style={{ width: '12rem', cursor: 'pointer' }}>
        <img src={imageUrl} className="card-img-top" />
        <div className="card-body">
          <h4 className="card-title">{movie.title}</h4>
        </div>
      </div>
    );
  }
}

MobileWatchedMovie.propTypes = {
  movie: PropTypes.object.isRequired,
  genres: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  genres: state.search.genres,
});

export default connect(mapStateToProps)(MobileWatchedMovie);
