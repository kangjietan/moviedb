import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Modal from 'react-modal';

import TrailerModal from './TrailerModal.jsx';

import { connect } from 'react-redux';
import { removeWatchedMovie, addWatchedMovie } from '../../../actions/movieActions.js';

function WatchedListModal(props) {
  const {
    imageUrl,
    movieGenres,
    movie,
    contentModalIsOpen,
    setContentModalIsOpen,
    addWatchedMovie,
    removeWatchedMovie
  } = props;

  const [trailerModalIsOpen, setTrailerModalIsOpen] = useState(false);
  const [movieRemoved, setMovieRemoved] = useState(false);

  const handleRemoveMovie = () => {
    if (movieRemoved) {
      addWatchedMovie(movie);
      setMovieRemoved(false);
    } else {
      removeWatchedMovie(movie);
      setMovieRemoved(true);
    }
  }

  const contentModalStyle = {
    overlay: {
      position: 'fixed',
      top: '10vh',
      left: '15vw',
      right: '15vw',
      bottom: '10vh',
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
      fontSize: '1.25rem',
    }
  };

  return (
    <div>
      <Modal isOpen={contentModalIsOpen} onRequestClose={() => { setContentModalIsOpen(false) }} style={contentModalStyle}>
        <button
          className="btn btn-link"
          style={{ position: 'absolute', top: '0px', right: '0px' }}
          onClick={() => setContentModalIsOpen(false)}>
          X
        </button>
        <div className="d-flex flex-row" id="modal-content">
          <div className="mr-2 modal-image" style={{ width: '40%' }}>
            <img src={imageUrl} className="img-fluid" />
          </div>
          <div className="modal-info" style={{ width: '55%' }}>
            <div><strong>Title: </strong>{movie.title}</div>
            <div><strong>Release date: </strong>{movie.release_date}</div>
            <div><strong>Genres: </strong>{movieGenres.join(', ') || '-'}</div>
            <div><strong>Voting: </strong>{`${movie.vote_average}/10, ${movie.vote_count} votes`}</div>
            <div>
              <button className="btn btn-link" onClick={() => setTrailerModalIsOpen(true)}>Play Trailer</button>
            </div>
            <div>
              <button className={`btn ${movieRemoved ? "btn-success" : "btn-outline-primary"}`} onClick={handleRemoveMovie}>
                {movieRemoved ? "Undo" : "Remove from list"}
              </button>
            </div>
            <div><strong>Overview: </strong>{movie.overview}</div>
          </div>
        </div>
      </Modal>
      <TrailerModal
        movieTrailerUrl={movie.movieTrailerUrl}
        trailerModalIsOpen={trailerModalIsOpen}
        setTrailerModalIsOpen={() => { setTrailerModalIsOpen(false) }}
      />
    </div>
  );
}

WatchedListModal.propTypes = {
  movie: PropTypes.object.isRequired,
  imageUrl: PropTypes.string.isRequired,
  movieGenres: PropTypes.array.isRequired,
  contentModalIsOpen: PropTypes.bool.isRequired,
  setContentModalIsOpen: PropTypes.func.isRequired,
};

const mapDispatchToProps = { removeWatchedMovie, addWatchedMovie };

export default connect(null, mapDispatchToProps)(WatchedListModal);
