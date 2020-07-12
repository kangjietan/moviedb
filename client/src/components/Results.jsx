import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import ResultMovie from './movies/ResultMovie';

function Results({ searchResults, searchInput, genres }) {
  const results = searchResults.results || [];
  return (
    <div className="container">
      <h2 className="m-2">{`Results for ${searchInput}`}</h2>
      <div className="d-flex flex-row flex-wrap justify-content-between results-container">
        {results.map((movie) => <ResultMovie movie={movie} key={movie.id} genres={genres} />)}
      </div>
    </div>
  );
}

Results.propTypes = {
  searchResults: PropTypes.object.isRequired,
  searchInput: PropTypes.string.isRequired,
  genres: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  searchResults: state.search.searchResults,
  searchInput: state.search.searchInput,
  genres: state.search.genres,
});

export default connect(mapStateToProps)(Results);
