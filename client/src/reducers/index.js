import { combineReducers } from "redux";
import searchReducer from "./searchReducer.js";

export default combineReducers({
  search: searchReducer,
});
