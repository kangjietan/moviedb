import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Modal from 'react-modal';

import { connect } from 'react-redux';
import { addWatchedMovie, addToWatchMovie, removeWatchedMovie, removeToWatchMovie } from '../../actions/movieActions.js';

Modal.setAppElement('#app');

const removeMovieIfInList = (movie, event, cb) => {
  if (event.target.name === 'watched') {
    cb(movie);
  }

  if (event.target.name === 'toWatch') {
    cb(movie);
  }
}

const modalStyle = {
  overlay: {
    position: 'fixed',
    top: '15vh',
    left: '15vw',
    right: '15vw',
    bottom: '15vh',
    backgroundColor: 'rgba(255, 255, 255, 0.75)'
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

function ResultMovie({ movie, addWatchedMovie, addToWatchMovie, removeWatchedMovie, removeToWatchMovie }) {
  const imageUrl = movie.poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}` : "./no-image.jpg";

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [watchedClicked, setWatchedClicked] = useState(false);
  const [toWatchClicked, setToWatchClicked] = useState(false);

  return (
    <div className="card m-3" style={{ width: '18rem' }} onClick={() => setModalIsOpen(true)}>
      <img src={imageUrl} className="card-img-top" />
      <div className="card-body">
        <h4 className="card-title">{movie.title}</h4>
      </div>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} style={modalStyle}>
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
              onClick={(e) => {
                if (watchedClicked) {
                  removeWatchedMovie(movie);
                  setWatchedClicked(false);
                } else {
                  removeMovieIfInList(movie, e, removeToWatchMovie);
                  addWatchedMovie(movie);
                  setWatchedClicked(true);
                  setToWatchClicked(false);
                }
              }}
              name="watched">
              Add to Watched list
          </button>
            <button
              className={toWatchClicked ? "btn btn-outline-success mr-1 mt-1" : "btn btn-outline-primary mr-1 mt-1"}
              onClick={(e) => {
                if (toWatchClicked) {
                  removeToWatchMovie(movie);
                  setToWatchClicked(false);
                } else {
                  removeMovieIfInList(movie, e, removeWatchedMovie);
                  addToWatchMovie(movie);
                  setToWatchClicked(true);
                  setWatchedClicked(false);
                }
              }}
              name="toWatch">
              Add to Watch list
          </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

ResultMovie.propTypes = {
  movie: PropTypes.object.isRequired,
};

const mapDispatchToProps = { addWatchedMovie, addToWatchMovie, removeWatchedMovie, removeToWatchMovie };

export default connect(null, mapDispatchToProps)(ResultMovie);
