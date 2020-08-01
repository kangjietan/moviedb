import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { connect } from 'react-redux';
import { genresFromAPI, popularMoviesFromAPI, trendingDayMoviesFromAPI, trendingWeekMoviesFromAPI } from '../actions/searchActions';

import Navigation from './Navigation';
import Home from './Home';
import WatchedList from './WatchedList';
import ToWatchList from './ToWatchList';
import Results from './Results';
import Register from './Register';
import Login from './Login';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // Redux
    this.props.genresFromAPI();
    this.props.popularMoviesFromAPI();
    this.props.trendingDayMoviesFromAPI();
    this.props.trendingWeekMoviesFromAPI();
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
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
          </Switch>
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  genresFromAPI: PropTypes.func.isRequired,
}

const mapDispatchToProps = { genresFromAPI, popularMoviesFromAPI, trendingDayMoviesFromAPI, trendingWeekMoviesFromAPI };

export default connect(null, mapDispatchToProps)(App);
