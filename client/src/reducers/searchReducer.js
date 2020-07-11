import * as actions from "../actions/types";

let initialState = {
  searchInput: "",
  searchResults: {},
  genres: {},
  popularMoviesResult: {},
  dayTrendingMoviesResult: {},
  weekTrendingMoviesResult: {},
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

    case actions.GET_POPULAR_MOVIES_FROM_API:
      return {
        ...state,
        popularMovieResults: action.payload,
      };

    case actions.GET_DAY_TRENDING_MOVIES_FROM_API:
      return {
        ...state,
        dayTrendingResults: action.payload,
      };

    case actions.GET_WEEK_TRENDING_MOVIES_FROM_API:
      return {
        ...state,
        weekTrendingResults: action.payload,
      };

    default:
      return state;
  }
}
