import React from 'react';
import PropTypes from 'prop-types';

function HomePageMovie({ list }) {
  return (
    <div className="carousel-item active" style={{ height: "30vh", display: "flex", overflow: "auto" }}>
      {list.map((movie) => {
        const imageUrl = movie.poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}` : "./no-image.jpg";

        return <img src={imageUrl} className="d-block img-fluid" style={{ height: "100%" }} />
      })}
    </div>
  );
}

HomePageMovie.propTypes = {};

export default HomePageMovie;
