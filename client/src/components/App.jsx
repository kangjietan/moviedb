import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { connect } from 'react-redux';
import { genresFromAPI } from '../actions/searchActions.js';

import Navigation from './Navigation.jsx';
import Home from './Home.jsx';
import WatchedList from './WatchedList.jsx';
import ToWatchList from './ToWatchList.jsx';
import Results from './Results.jsx'

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.genresFromAPI();
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

const mapDispatchToProps = { genresFromAPI };

export default connect(null, mapDispatchToProps)(App);
