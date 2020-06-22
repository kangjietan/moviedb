import React, { useState, Component } from 'react';
import PropTypes from 'prop-types';

import Modal from 'react-modal';

import { connect } from 'react-redux';
import { addWatchedMovie, addToWatchMovie, removeWatchedMovie, removeToWatchMovie } from '../../actions/movieActions.js';

Modal.setAppElement('#app');

class ResultMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      watchedClicked: false,
      toWatchClicked: false,
    }

    this.setModalIsOpen = this.setModalIsOpen.bind(this);
    this.handleAddMovies = this.handleAddMovies.bind(this);
    this.setWatchedClicked = this.setWatchedClicked.bind(this);
    this.setToWatchClicked = this.setToWatchClicked.bind(this);
  }

  setModalIsOpen(status) {
    this.setState({ modalIsOpen: status });
  }

  setWatchedClicked(status) {
    this.setState({ watchedClicked: status });
  }

  setToWatchClicked(status) {
    this.setState({ toWatchClicked: status });
  }

  handleAddMovies(event) {
    const { name } = event.target;
    const { watchedClicked, toWatchClicked } = this.state;
    const { addWatchedMovie, addToWatchMovie, removeWatchedMovie, removeToWatchMovie, movie } = this.props;

    if (name === 'watched') {
      if (watchedClicked) {
        removeWatchedMovie(movie);
        this.setWatchedClicked(false);
      } else {
        removeToWatchMovie(movie);
        addWatchedMovie(movie);
        this.setWatchedClicked(true);
        this.setToWatchClicked(false);
      }
    } else if (name === 'toWatch') {
      if (toWatchClicked) {
        removeToWatchMovie(movie);
        this.setToWatchClicked(false);
      } else {
        removeWatchedMovie(movie);
        addToWatchMovie(movie);
        this.setToWatchClicked(true);
        this.setWatchedClicked(false);
      }
    }
  }

  render() {
    const { watchedClicked, toWatchClicked, modalIsOpen } = this.state;
    const { movie } = this.props;

    const imageUrl = movie.poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}` : "./no-image.jpg";

    const modalStyle = {
      overlay: {
        position: 'fixed',
        top: '15vh',
        left: '15vw',
        right: '15vw',
        bottom: '15vh',
      },
      content: {
        position: 'absolute',
        top: '0px',
        left: '0px',
        right: '0px',
        bottom: '0px',
        border: '1px solid #ccc',
        background: '#fff',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        borderRadius: '4px',
        outline: 'none',
        padding: '20px',
        fontSize: '1.3rem'
      }
    };

    return (
      <div className="card m-3" style={{ width: '18rem' }} onClick={() => this.setModalIsOpen(true)}>
        <img src={imageUrl} className="card-img-top" />
        <div className="card-body">
          <h4 className="card-title">{movie.title}</h4>
        </div>
        <Modal isOpen={modalIsOpen} onRequestClose={() => this.setModalIsOpen(false)} style={modalStyle}>
          <button
            className="btn btn-link"
            style={{ position: 'absolute', top: '0px', right: '0px' }}
            onClick={() => this.setModalIsOpen(false)}>
            X
        </button>
          <div className="d-flex flex-row" id="modal-content">
            <div className="mr-2 modal-image" style={{ width: '40%' }}>
              <img src={imageUrl} className="img-fluid" />
            </div>
            <div className="modal-info" style={{ width: '55%' }}>
              <div><strong>Title: </strong>{movie.title}</div>
              <div><strong>Release date: </strong>{movie.release_date}</div>
              <div><strong>Overview: </strong>{movie.overview}</div>
              <div><strong>Voting: </strong>{`${movie.vote_average}/10, ${movie.vote_count} votes`}</div>
              <button
                className={watchedClicked ? "btn btn-outline-success mr-1 mt-1" : "btn btn-outline-primary mr-1 mt-1"}
                onClick={(e) => { this.handleAddMovies(e) }}
                name="watched">
                Add to Watched list
            </button>
              <button
                className={toWatchClicked ? "btn btn-outline-success mr-1 mt-1" : "btn btn-outline-primary mr-1 mt-1"}
                onClick={(e) => { this.handleAddMovies(e) }}
                name="toWatch">
                Add to Watch list
            </button>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

ResultMovie.propTypes = {
  movie: PropTypes.object.isRequired,
  addWatchedMovie: PropTypes.func.isRequired,
  addToWatchMovie: PropTypes.func.isRequired,
  removeWatchedMovie: PropTypes.func.isRequired,
  removeToWatchMovie: PropTypes.func.isRequired,
};

const mapDispatchToProps = { addWatchedMovie, addToWatchMovie, removeWatchedMovie, removeToWatchMovie };

export default connect(null, mapDispatchToProps)(ResultMovie);
