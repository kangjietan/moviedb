import * as actions from "../actions/types";

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
