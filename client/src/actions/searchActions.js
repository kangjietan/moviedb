import * as actions from "../actions/types";
import axios from "axios";

const serverUrl = "http://localhost:3000";

export const updateSearch = (searchData) => (dispatch) => {
  dispatch({
    type: actions.UPDATE_SEARCH,
    payload: searchData,
  });
};

export const searchAPI = (query) => (dispatch) => {
  axios
    .get(`${serverUrl}/tmdb/search`, {
      params: { query },
    })
    .then((response) => {
      dispatch({
        type: actions.SEARCH_API,
        payload: response.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const genresFromAPI = () => (dispatch) => {
  axios
    .get(`${serverUrl}/tmdb/genres`)
    .then((response) => {
      const data = response.data.genres;
      let formattedData = {};

      data.forEach((genre) => {
        formattedData[genre.id] = genre.name;
      });

      dispatch({
        type: actions.GENRES_FROM_API,
        payload: formattedData,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const popularMoviesFromAPI = (page = 1) => (dispatch) => {
  axios
    .get(`${serverUrl}/tmdb/movie/popular/`, {
      params: { page },
    })
    .then((response) => {
      dispatch({
        type: actions.GET_POPULAR_MOVIES_FROM_API,
        payload: response.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const trendingDayMoviesFromAPI = () => (dispatch) => {
  axios
    .get(`${serverUrl}/tmdb/movie/trending/day`)
    .then((response) => {
      dispatch({
        type: actions.GET_DAY_TRENDING_MOVIES_FROM_API,
        payload: response.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const trendingWeekMoviesFromAPI = () => (dispatch) => {
  axios
    .get(`${serverUrl}/tmdb/movie/trending/week`)
    .then((response) => {
      dispatch({
        type: actions.GET_WEEK_TRENDING_MOVIES_FROM_API,
        payload: response.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
