import { LOG_IN } from "../constants";
import axios from "axios";

export function logIn(isLogged) {
  return {
    type: LOG_IN,
    isLogged
  };
}

export const doLogIn = logInUser => dispatch => {
  axios.post("/api/login", logInUser).then(user => dispatch(logIn(user.data)));
};

import { LOG_OUT } from "../constants";

export function logOut(isLogged) {
  return {
    type: LOG_OUT
  };
}

export const doLogOut = logOutUser => dispatch => {
  axios
    .get("/api/logout")
    .then(user => {
      dispatch(logOut(user.data));
    })
    .catch(console.log);
};

import { PERSIST_SESSION } from "../constants";

export const persistS = function(user) {
  return {
    type: PERSIST_SESSION,
    isLogged: user
  };
};

export const persistSession = user => dispatch => {
  axios
    .get("/api/me", user)
    .then(res => res.data)
    .then(user => dispatch(persistS(user)));
};
