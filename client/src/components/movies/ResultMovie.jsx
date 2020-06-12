import React, { useState } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

Modal.setAppElement('#app');

function ResultMovie({ movie }) {
  const imageUrl = movie.poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}` : "./no-image.jpg";

  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="card m-3" style={{ width: '18rem' }} onClick={() => setModalIsOpen(true)}>
      <img src={imageUrl} className="card-img-top" />
      <div className="card-body">
        <h4 className="card-title">{movie.title}</h4>
      </div>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} shouldCloseOnOverlayClick={true}>

      </Modal>
    </div>
  );
}

export default ResultMovie;
