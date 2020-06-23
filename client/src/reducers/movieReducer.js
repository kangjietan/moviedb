import * as actions from "../actions/types.js";

let initialState = {
  watchedList: [],
  toWatchList: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actions.ADD_WATCHED_MOVIE:
      let watchedMovie = action.payload;

      for (let i = 0; i < state.watchedList.length; i++) {
        if (state.watchedList[i].id === watchedMovie.id) {
          return {
            ...state,
          };
        }
      }

      return {
        ...state,
        watchedList: [...state.watchedList, action.payload],
      };

    case actions.ADD_TO_WATCH_MOVIE:
      let toWatchMovie = action.payload;

      for (let i = 0; i < state.toWatchList.length; i++) {
        if (state.toWatchList[i].id === toWatchMovie.id) {
          return {
            ...state,
          };
        }
      }

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
