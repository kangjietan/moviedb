import { combineReducers } from "redux";
import searchReducer from "./searchReducer.js";
import movieReducer from "./movieReducer.js";

export default combineReducers({
  search: searchReducer,
  movie: movieReducer,
});
