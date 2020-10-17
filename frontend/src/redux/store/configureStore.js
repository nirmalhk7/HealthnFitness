import { applyMiddleware, combineReducers, createStore } from "redux";

import thunkMiddleware from "redux-thunk";
import authReducer from "../reducers/authReducer";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
    }),
    // initialState, // our initialState
    applyMiddleware(thunkMiddleware)
  );

  return store;
};
