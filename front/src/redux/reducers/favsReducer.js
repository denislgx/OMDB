import { ADD_FAV, FETCH_FAVS, REMOVE_FAV } from "../constants";

const initialState = {
  favorites: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return Object.assign({}, state, {
        favorites: [...state.favorites, action.favorites]
      });
    case FETCH_FAVS:
      return Object.assign({}, state, { favorites: action.favorites });
    case REMOVE_FAV:
      return Object.assign({}, state, {
        favorites: state.favorites.filter(movie => movie !== action.favorites)
      });
  }
  return state;
};
