import { combineReducers } from "redux";
import moviesReducer from "./moviesReducer";
import registerReducer from "./registerReducer";
import logUserReducer from "./logUserReducer";
import favoritesReducer from "./favsReducer";

export default combineReducers({
  moviesReducer,
  registerReducer,
  logUserReducer,
  favoritesReducer
});
