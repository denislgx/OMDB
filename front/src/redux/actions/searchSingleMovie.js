import axios from "axios";
import { SEARCH_SINGLE_MOVIE } from "../constants";

export function findSingleMovie(singleMovieFound) {
  return {
    type: SEARCH_SINGLE_MOVIE,
    singleMovieFound
  };
}

export const fetchSingleMovie = singleMovieId => dispatch =>
  axios
    .get(`https://www.omdbapi.com/?apikey=20dac387&i=${singleMovieId}`)
    .then(singleMovie => dispatch(findSingleMovie(singleMovie.data)));
