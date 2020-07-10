import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import movieReducer from "./movieReducer";

export default combineReducers({
  search: searchReducer,
  movie: movieReducer,
});
