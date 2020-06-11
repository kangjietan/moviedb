import * as actions from "../actions/types.js";

export const updateSearch = (searchData) => (dispatch) => {
  console.log(searchData);
  dispatch({
    type: actions.UPDATE_SEARCH,
    payload: searchData,
  });
};
