import React, { useState } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

Modal.setAppElement('#app');

const modalStyle = {
  overlay: {
    position: 'fixed',
    top: '15vh',
    left: '20vw',
    right: '20vw',
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
    fontSize: '1.5rem'
  }
};

function ResultMovie({ movie }) {
  const imageUrl = movie.poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}` : "./no-image.jpg";

  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="card m-3" style={{ width: '18rem' }} onClick={() => setModalIsOpen(true)}>
      <img src={imageUrl} className="card-img-top" />
      <div className="card-body">
        <h4 className="card-title">{movie.title}</h4>
      </div>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} style={modalStyle}>
        <div className="d-flex flex-row flex-wrap">
          <div className="mr-2" style={{ width: '50%', height: '75%' }}>
            <img src={imageUrl} className="img-fluid" />
          </div>
          <div className="">
            <div><strong>Title: </strong>{movie.title}</div>
            <div><strong>Release date: </strong>{movie.release_date}</div>
            <div><strong>Overview: </strong>{movie.overview}</div>
            <div><strong>Voting: </strong>{`${movie.vote_average}/10, ${movie.vote_count} votes`}</div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

ResultMovie.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default ResultMovie;
