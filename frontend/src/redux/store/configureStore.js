import { applyMiddleware, combineReducers, createStore } from "redux";

import thunkMiddleware from "redux-thunk";
import authReducer from "../reducers/authReducer";
import proReducer from "../reducers/proReducer";
export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      pros: proReducer,
    }),
    // initialState, // our initialState
    applyMiddleware(thunkMiddleware)
  );

  return store;
};
