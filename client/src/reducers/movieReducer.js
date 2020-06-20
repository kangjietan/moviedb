import * as actions from "../actions/types.js";

let initialState = {
  watchedList: [],
  toWatchList: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actions.ADD_WATCHED_MOVIE:
      return {
        ...state,
        watchedList: [...state.watchedList, action.payload],
      };

    case actions.ADD_TO_WATCH_MOVIE:
      return {
        ...state,
        toWatchList: [...state.toWatchList, action.payload],
      };

    case actions.REMOVE_WATCHED_MOVIE:
      return {
        ...state,
        watchedList: state.watchedList.filter(
          (movie) => movie.id !== action.payload.id
        ),
      };

    case actions.REMOVE_TO_WATCH_MOVIE:
      return {
        ...state,
        toWatchList: state.toWatchList.filter(
          (movie) => movie.id !== action.payload.id
        ),
      };

    default:
      return state;
  }
}
