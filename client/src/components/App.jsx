import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { connect } from 'react-redux';
import { genresFromAPI, popularMoviesFromAPI, trendingDayMoviesFromAPI, trendingWeekMoviesFromAPI } from '../actions/searchActions';
import { getUserToWatchList, getUserWatchedList, clearWatchedList, clearToWatchList } from '../actions/movieActions';
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
    this.updateLists = this.updateLists.bind(this);
    this.checkUserLoggedIn = this.checkUserLoggedIn.bind(this);
  }

  componentDidMount() {
    // Redux
    this.props.genresFromAPI();
    this.props.popularMoviesFromAPI();
    this.props.trendingDayMoviesFromAPI();
    this.props.trendingWeekMoviesFromAPI();
    // Check session
    this.checkUserLoggedIn();
    // When user closes/refreshes browser
    window.addEventListener('beforeunload', this.updateUserList);
  }

  componentDidUpdate(prevProps) {
    if (this.props.userLoggedIn === false && prevProps.userLoggedIn === true) {
      this.updateLists();
    }
  }

  componentWillUnmount() {
    this.updateUserList();
    window.removeEventListener('beforeunload', this.updateUserList);
  }

  updateUserList() {
    if (this.props.userLoggedIn) {
      this.updateLists();
    }
  }

  updateLists() {
    const { watchedList, toWatchList, userLoggedIn, clearToWatchList, clearWatchedList } = this.props;
    let watchedListKeys = Object.keys(watchedList);
    let toWatchListKeys = Object.keys(toWatchList);

    // Update watched list and then clear if user is logged out
    let promise = new Promise((resolve, reject) => {
      if (watchedListKeys) {
        axios.post("/user/watchedlist/update", qs.stringify(watchedListKeys))
          .then(() => {
            if (!userLoggedIn) {
              clearWatchedList();
              resolve("Done")
            }
          })
          .catch((err) => console.log(err));
      }
    });

    // Update to watch list and then clear if user is logged out
    let promise2 = new Promise((resolve, reject) => {
      if (toWatchListKeys) {
        axios.post("/user/towatchlist/update", qs.stringify(toWatchListKeys))
          .then(() => {
            if (!userLoggedIn) {
              clearToWatchList();
              resolve("Done");
            }
          })
          .catch((err) => console.log(err));
      }
    });

    // Wait for updating and clearing of lists before logging out
    Promise.all([promise, promise2])
      .then(() => {
        if (!userLoggedIn) {
          axios.get('/user/logout')
            .then((response) => console.log(response))
            .catch((err) => console.log(err));
        }
      })
  }

  checkUserLoggedIn() {
    // If user reloads page, check session
    axios.get('/user/authenticated')
      .then((response) => {
        if (response.data.success) {
          this.props.setUserIsLoggedIn(true);
          this.props.getUserWatchedList();
          this.props.getUserToWatchList();
        }
      })
      .catch((err) => {
        console.log(err);
      });
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
  getUserToWatchList: PropTypes.func.isRequired,
  getUserWatchedList: PropTypes.func.isRequired,
  setUserIsLoggedIn: PropTypes.func.isRequired,
  clearWatchedList: PropTypes.func.isRequired,
  clearToWatchList: PropTypes.func.isRequired,
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
  setUserIsLoggedIn,
  clearWatchedList,
  clearToWatchList,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
