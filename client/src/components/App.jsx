import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { connect } from 'react-redux';
import { genresFromAPI, popularMoviesFromAPI } from '../actions/searchActions.js';

import Navigation from './Navigation';
import Home from './Home';
import WatchedList from './WatchedList';
import ToWatchList from './ToWatchList';
import Results from './Results';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.genresFromAPI();
    this.props.popularMoviesFromAPI();
  }

  render() {
    return (
      <Router>
        <div>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/watched" component={WatchedList} />
            <Route exact path="/watch-list" component={ToWatchList} />
            <Route path="/search" component={Results} />
          </Switch>
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  genresFromAPI: PropTypes.func.isRequired,
}

const mapDispatchToProps = { genresFromAPI, popularMoviesFromAPI };

export default connect(null, mapDispatchToProps)(App);
