import * as actions from "../actions/types.js";

let initialState = {
  searchInput: "",
  searchResults: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actions.UPDATE_SEARCH:
      return {
        ...state,
        searchInput: action.payload,
      };
    case actions.SEARCH_API:
      return {
        ...state,
        searchResults: action.payload,
      };
    default:
      return state;
  }
}
