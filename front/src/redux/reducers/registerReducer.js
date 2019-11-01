import { REGISTER, PERSIST_SESSION } from "../constants";

const initialState = {
  user: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTER:
      return Object.assign({}, state, { user: action.user });
  }
  return state;
};
