import React from 'react';
import PropTypes from 'prop-types';

import Modal from 'react-modal';

function TrailerModal({ movieTrailerUrl, trailerModalIsOpen, setTrailerModalIsOpen }) {
  const modalStyle = {
    overlay: {
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      backgroundColor: 'rgba(255, 255, 255, 0.75)',
    },
    content: {
      position: 'absolute',
      top: '5vh',
      left: '10vh',
      right: '10vh',
      bottom: '5vh',
      border: '1px solid #ccc',
      background: '#fff',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      borderRadius: '4px',
      outline: 'none',
      padding: '20px',
    }
  };

  return (
    <Modal isOpen={trailerModalIsOpen} onRequestClose={setTrailerModalIsOpen} style={modalStyle}>
      <button
        className="btn btn-link"
        style={{ position: 'absolute', top: '0px', right: '0px', padding: '0px' }}
        onClick={setTrailerModalIsOpen}>
        X
    </button>
      <iframe
        style={{ height: '85vh', width: '100%' }}
        allowFullScreen="allowFullScreen"
        allow="autoplay"
        title="trailer"
        src={`https://www.youtube.com/embed/${movieTrailerUrl}?autoplay=1`}
      />
    </Modal>
  );
}

TrailerModal.propTypes = {
  movieTrailerUrl: PropTypes.string.isRequired,
  modalIsOpen: PropTypes.bool.isRequired,
  setModalIsOpen: PropTypes.func.isRequired,
}

export default TrailerModal;
