import * as actions from "../actions/types";

let initialState = {
  watchedList: {},
  toWatchList: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actions.ADD_WATCHED_MOVIE:
      return {
        ...state,
        watchedList: Object.assign(state.watchedList, {
          [action.payload.id]: action.payload,
        }),
      };

    case actions.ADD_TO_WATCH_MOVIE:
      return {
        ...state,
        toWatchList: Object.assign(state.toWatchList, {
          [action.payload.id]: action.payload,
        }),
      };

    case actions.REMOVE_WATCHED_MOVIE:
      let newWatched = Object.assign(state.watchedList);
      delete newWatched[action.payload.id];

      return {
        ...state,
        watchedList: newWatched,
      };

    case actions.REMOVE_TO_WATCH_MOVIE:
      let newToWatch = Object.assign(state.toWatchList);
      delete newToWatch[action.payload.id];

      return {
        ...state,
        toWatchList: newToWatch,
      };

    case actions.GET_USER_WATCHED_LIST:
      return {
        ...state,
        watchedList: action.payload,
      };

    case actions.GET_USER_TO_WATCH_LIST:
      return {
        ...state,
        toWatchList: action.payload,
      };

    case actions.CLEAR_WATCHED_LIST:
      return {
        ...state,
        watchedList: {},
      };

    case actions.CLEAR_TO_WATCH_LIST:
      return {
        ...state,
        toWatchList: {},
      };

    default:
      return state;
  }
}
