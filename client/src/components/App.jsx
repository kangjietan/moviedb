import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { connect } from 'react-redux';
import { genresFromAPI, popularMoviesFromAPI, trendingDayMoviesFromAPI, trendingWeekMoviesFromAPI } from '../actions/searchActions';
import { getUserToWatchList, getUserWatchedList } from '../actions/movieActions';
import { setUserIsLoggedIn } from '../actions/sessionActions';

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

    this.updateUserList = this.updateUserList.bind(this);
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
    this.updateUserList();
    window.removeEventListener('beforeunload', this.updateUserList);
  }

  updateUserList() {
    const { watchedList, toWatchList } = this.props;

    // axios.get("/authenticated");
    
    let watchedListKeys = Object.keys(watchedList);
    let toWatchListKeys = Object.keys(toWatchList);

    axios.post("/user/watchedlist/update", qs.stringify(watchedListKeys))
      .then((response) => {
        console.log(response.config.data);
        console.log(response.data);
      })
      .catch((err) => console.log(err));

    axios.post("/user/towatchlist/update", qs.stringify(toWatchListKeys))
      .then((response) => {
        console.log(response);
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
  getUserToWatchList: PropTypes.func.isRequired,
  getUserWatchedList: PropTypes.func.isRequired,
  setUserIsLoggedIn: PropTypes.func.isRequired,
  watchedList: PropTypes.object.isRequired,
  toWatchList: PropTypes.object.isRequired,
  userLoggedIn: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  watchedList: state.movie.watchedList,
  toWatchList: state.movie.toWatchList,
  userLoggedIn: state.session.userLoggedIn,
});

const mapDispatchToProps = {
  genresFromAPI,
  popularMoviesFromAPI,
  trendingDayMoviesFromAPI,
  trendingWeekMoviesFromAPI,
  getUserToWatchList,
  getUserWatchedList,
  setUserIsLoggedIn
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
