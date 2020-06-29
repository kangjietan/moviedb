import * as actions from "../actions/types.js";

let initialState = {
  searchInput: "",
  searchResults: [],
  genres: {},
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

    case actions.GENRES_FROM_API:
      return {
        ...state,
        genres: action.payload,
      };

    default:
      return state;
  }
}
