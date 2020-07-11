import React from 'react';
import PropTypes from 'prop-types';

import CarouselItem from './HomePageMovie';

function PopularMovies({ popularMovieList }) {
  console.log(popularMovieList);
  let list = popularMovieList ? popularMovieList : [];
  return (
    <div>
      <h2>What's Popular</h2>
      <div style={{ height: "30vh" }}>
        <CarouselItem list={list} />
      </div>
    </div>
  );
}

PopularMovies.propTypes = {

};

export default PopularMovies;
