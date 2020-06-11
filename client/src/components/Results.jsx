import React from 'react';
import PropTypes from 'prop-types';

import { connect, useSelector } from 'react-redux';


function Results(props) {
  const results = props.searchResults.results || [];
  return (
    <div>
      <h1>Results Page</h1>
      <div>
        {results.map((movie) => <div key={movie.id}>{movie.title}</div>)}
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  searchResults: state.search.searchResults
});

export default connect(mapStateToProps)(Results);
