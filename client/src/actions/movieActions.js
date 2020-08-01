import * as actions from "../actions/types";

import axios from 'axios';

const serverUrl = "http://localhost:3000";

export const addWatchedMovie = (movie) => (dispatch) => {
  dispatch({
    type: actions.ADD_WATCHED_MOVIE,
    payload: movie,
  });
};

export const addToWatchMovie = (movie) => (dispatch) => {
  dispatch({
    type: actions.ADD_TO_WATCH_MOVIE,
    payload: movie,
  });
};

export const removeWatchedMovie = (movie) => (dispatch) => {
  dispatch({
    type: actions.REMOVE_WATCHED_MOVIE,
    payload: { id: movie.id },
  });
};

export const removeToWatchMovie = (movie) => (dispatch) => {
  dispatch({
    type: actions.REMOVE_TO_WATCH_MOVIE,
    payload: { id: movie.id },
  });
};

export const getUserWatchedList = () => (dispatch) => {
  axios.get(`${serverUrl}/user/watchedlist`)
  .then((response) => {
    dispatch({
      type: actions.GET_USER_WATCHED_LIST,
      payload: response.data,
    });
  })
  .catch((err) => console.log(err));
}

export const getUserToWatchList = () => (dispatch) => {
  axios.get(`${serverUrl}/user/towatchlist`)
  .then((response) => {
    dispatch({
      type: actions.GET_USER_TO_WATCH_LIST,
      payload: response.data,
    });
  })
  .catch((err) => console.log(err));
}
