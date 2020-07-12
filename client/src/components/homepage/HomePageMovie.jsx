import React from 'react';
import PropTypes from 'prop-types';

import ResultMovie from '../movies/ResultMovie';

function HomePageMovie({ list, genres }) {
  return (
    <div style={{ height: "100%", display: "flex", overflow: "auto" }}>
      {list.map((movie) => <ResultMovie movie={movie} genres={genres} />)}
    </div>
  );
}

HomePageMovie.propTypes = {
  list: PropTypes.array.isRequired,
  genres: PropTypes.object.isRequired,
};

export default HomePageMovie;
