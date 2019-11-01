import { SEARCH_MOVIES } from "../constants";
import { SEARCH_SINGLE_MOVIE } from "../constants";

const initialState = {
  moviesFound: [],
  singleMovie: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_MOVIES:
      return Object.assign({}, state, { moviesFound: action.moviesFound });
    case SEARCH_SINGLE_MOVIE:
      return Object.assign({}, state, { singleMovie: action.singleMovieFound });
  }
  return state;
};
