import React, { useState } from 'react';
import PropTypes from 'prop-types';

import MovieModal from './modal/MovieModal.jsx';

function MobileMovie({ movie, genres, component }) {
  const imageUrl = movie.poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}` : "./no-image.jpg";
  let movieGenres = movie.genre_ids.map((id) => `${genres[id]}`);

  const [contentModalIsOpen, setContentModalIsOpen] = useState(false);

  return (
    <div>
      <div className="card m-3" style={{ width: '12rem', cursor: 'pointer' }} onClick={() => { setContentModalIsOpen(true); }}>
        <img src={imageUrl} className="card-img-top" />
        <div className="card-body">
          <h4 className="card-title">{movie.title}</h4>
        </div>
      </div>
      <MovieModal
        imageUrl={imageUrl}
        movieGenres={movieGenres}
        movie={movie}
        contentModalIsOpen={contentModalIsOpen}
        setContentModalIsOpen={setContentModalIsOpen}
        component={component}
      />
    </div>
  );
}

MobileMovie.propTypes = {
  movie: PropTypes.object.isRequired,
  genres: PropTypes.object.isRequired,
}

export default MobileMovie;
