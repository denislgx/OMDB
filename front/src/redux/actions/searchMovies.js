import axios from "axios";
import { SEARCH_MOVIES } from "../constants";

export function searchMovies(moviesFound) {
  return {
    type: SEARCH_MOVIES,
    moviesFound
  };
}

export const fetchMovies = movie => dispatch =>
  axios
    .get(`https://www.omdbapi.com/?apikey=20dac387&s=${movie}`)
    .then(movies => dispatch(searchMovies(movies.data)));
