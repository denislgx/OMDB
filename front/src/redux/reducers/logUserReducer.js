import { LOG_IN, LOG_OUT, PERSIST_SESSION } from "../constants";

const initialState = {
  isLogged: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return Object.assign({}, state, { isLogged: action.isLogged });
    case LOG_OUT:
      return Object.assign({}, state, { isLogged: false });
    case PERSIST_SESSION:
      return Object.assign({}, state, { isLogged: action.isLogged });
  }
  return state;
};
