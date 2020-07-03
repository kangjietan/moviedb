import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import { connect } from 'react-redux';

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
`;

const MovieGenreContainer = styled.div`
  width: 25%;
  text-align: center;
`;

const MovieTitleContainer = styled.div`
  width: 25%;
  text-align: center;
`;

const MovieOverviewContainer = styled.div`
  width: 40%;
  text-align: center;
`;

function WatchedMovie({ movie, genres }) {
  const imageUrl = movie.poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}` : "./no-image.jpg";

  let movieGenres = movie.genre_ids.map((id) => `${genres[id]}`);

  return (
    <MovieContainer>
      <MovieImgContainer>
        <img src={imageUrl} className="img-fluid" />
      </MovieImgContainer>
      <MovieTitleContainer>
        {movie.title}
      </MovieTitleContainer>
      <MovieOverviewContainer>
        {movie.overview}
      </MovieOverviewContainer>
      <MovieGenreContainer>
        {movieGenres.map((genre) => <div>{genre}</div>)}
      </MovieGenreContainer>
    </MovieContainer>
  );
}

const mapStateToProps = state => ({
  genres: state.search.genres,
});

export default connect(mapStateToProps)(WatchedMovie);
