import * as actions from "../actions/types.js";
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
