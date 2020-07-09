import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import ResultMovie from './movies/ResultMovie.jsx';

function Results(props) {
  const results = props.searchResults.results || [];
  return (
    <div className="container">
      <h2 className="m-2">{`Results for ${props.searchInput}`}</h2>
      <div className="d-flex flex-row flex-wrap justify-content-between">
        {results.map((movie) => <ResultMovie movie={movie} key={movie.id} />)}
      </div>
    </div>
  );
}

Results.propTypes = {
  searchResults: PropTypes.array.isRequired,
  searchInput: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  searchResults: state.search.searchResults,
  searchInput: state.search.searchInput,
});

export default connect(mapStateToProps)(Results);
