import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import MovieModal from './modal/MovieModal.jsx';

const MovieContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0px 5px;
  font-size: 0.9em;
  margin-bottom: 5px;
  border-bottom: 0.5px solid;
  padding: 5px 0px;
`;

const MovieImgContainer = styled.div`
  width: 9%;
  margin: auto;
  margin-right: 20px;
  cursor: pointer;
`;

const MovieGenreContainer = styled.div`
  width: 25%;
  text-align: center;
  margin: auto;
`;

const MovieTitleContainer = styled.div`
  width: 25%;
  text-align: center;
  margin: auto;
`;

const MovieOverviewContainer = styled.div`
  width: 40%;
  text-align: center;
  margin: auto;
`;

function Movie({ movie, genres, component }) {
  const imageUrl = movie.poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}` : "./no-image.jpg";

  const [contentModalIsOpen, setContentModalIsOpen] = useState(false);

  let movieGenres = movie.genre_ids.map((id) => `${genres[id]}`);

  return (
    <div>
      <MovieContainer>
        <MovieImgContainer onClick={() => { setContentModalIsOpen(true) }}>
          <img src={imageUrl} className="img-fluid" />
        </MovieImgContainer>
        <MovieTitleContainer>
          {movie.title}
        </MovieTitleContainer>
        <MovieOverviewContainer>
          {movie.overview}
        </MovieOverviewContainer>
        <MovieGenreContainer>
          {movieGenres.map((genre, idx) => <div key={idx}>{genre}</div>)}
        </MovieGenreContainer>
      </MovieContainer>
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

Movie.propTypes = {
  movie: PropTypes.object.isRequired,
  genres: PropTypes.object.isRequired,
}

export default Movie;
