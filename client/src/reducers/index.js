import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import movieReducer from "./movieReducer";
import sessionReducer from "./sessionReducer";

export default combineReducers({
  search: searchReducer,
  movie: movieReducer,
  session: sessionReducer,
});
