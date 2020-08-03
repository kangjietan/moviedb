import * as actions from "../actions/types";

import axios from "axios";

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
  axios
    .get(`${serverUrl}/user/watchedlist`)
    .then((response) => {
      if (response.data) {
        dispatch({
          type: actions.GET_USER_WATCHED_LIST,
          payload: getMovieListInfo(response.data),
        });
      }
    })
    .catch((err) => console.log(err));
};

export const getUserToWatchList = () => (dispatch) => {
  axios
    .get(`${serverUrl}/user/towatchlist`)
    .then((response) => {
      if (response.data) {
        dispatch({
          type: actions.GET_USER_TO_WATCH_LIST,
          payload: getMovieListInfo(response.data),
        });
      }
    })
    .catch((err) => console.log(err));
};

export const clearWatchedList = () => (dispatch) => {
  dispatch({
    type: actions.CLEAR_WATCHED_LIST,
  });
};

export const clearToWatchList = () => (dispatch) => {
  dispatch({
    type: actions.CLEAR_TO_WATCH_LIST,
  });
};

// Helper function
// Format movies into correct list and keys
const getMovieListInfo = (list) => {
  let movieList = {};
  list.forEach((id) => {
    axios
      .get(`${serverUrl}/tmdb/movie/${id}`)
      .then((response) => {
        let movie = response.data;
        let movieGenres = movie.genres.map((genre) => genre.id);
        movie["genre_ids"] = movieGenres;
        getMovieTrailerUrl(movie, id);
        movieList[id] = movie;
      })
      .catch((err) => console.log(err));
  });

  return movieList;
};

const getMovieTrailerUrl = (movie, id) => {
  axios
    .get(`${serverUrl}/tmdb/movie/${id}/trailer/`)
    .then((response) => {
      movie["movieTrailerUrl"] = response.data;
    })
    .catch((err) => console.log(err));
};
