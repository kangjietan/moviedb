import React from 'react';
import PropTypes from 'prop-types';

function ResultMovie({ movie }) {
  const imageUrl = movie.poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}` : "./no-image.jpg";
  return (
    <div className="card m-3" style={{ width: '18rem' }}>
      <img src={imageUrl} className="card-img-top" />
      <div className="card-body">
        <h4 className="card-title">{movie.title}</h4>
      </div>
    </div>
  );
}

export default ResultMovie;
