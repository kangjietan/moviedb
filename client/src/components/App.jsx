import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { connect } from 'react-redux';
import { genresFromAPI, popularMoviesFromAPI, trendingDayMoviesFromAPI, trendingWeekMoviesFromAPI } from '../actions/searchActions';

import axios from 'axios';

import qs from 'qs';

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

    window.addEventListener('beforeunload', this.updateUserList);
  }

  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.updateUserList);
  }

  updateUserList(event) {
    event.preventDefault();
    event.returnValue = false;
    axios.post("/user/watchedlist/update")
    .then((response) => {

    })
    .catch((err) => console.log(err));
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
  popularMoviesFromAPI: PropTypes.func.isRequired,
  trendingDayMoviesFromAPI: PropTypes.func.isRequired,
  trendingWeekMoviesFromAPI: PropTypes.func.isRequired,
  watchedList: PropTypes.object.isRequired,
  toWatchList: PropTypes.object.isRequired,
  userLoggedIn: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  watchedList: state.movie.watchedList,
  toWatchList: state.movie.toWatchList,
  userLoggedIn: state.session.userLoggedIn,
});

const mapDispatchToProps = { genresFromAPI, popularMoviesFromAPI, trendingDayMoviesFromAPI, trendingWeekMoviesFromAPI };

export default connect(mapStateToProps, mapDispatchToProps)(App);
