import axios from "axios";
import { ADD_FAV } from "../constants";

export const addFav = newFav => {
  return {
    type: ADD_FAV,
    favorites: newFav
  };
};

export const addFavCr = movie => dispatch => {
  axios.post("/api/addFav", movie).then(movie => dispatch(addFav(movie.data)));
  alert("La película se ha agregado a tus favoritos!");
};

import { FETCH_FAVS } from "../constants";

export const fetchFav = allFavs => {
  return {
    type: FETCH_FAVS,
    favorites: allFavs
  };
};

export const fetchFavCr = favs => dispatch => {
  axios.get("/api/myfavs").then(myFavs => dispatch(fetchFav(myFavs.data)));
};

import { REMOVE_FAV } from "../constants";

export const removeFav = remFav => {
  return {
    type: REMOVE_FAV,
    favorites: remFav
  };
};

export const removeFavCr = movie => dispatch => {
  axios
    .delete("/api/removeFav", { data: movie })
    .then(movie => dispatch(removeFav(movie.data)));
};
