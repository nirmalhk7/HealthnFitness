// import { Redirect } from "react-router-dom";

const initState = {
  authError: null,
  token: null,
  id: null,
  type: null,
  name: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "SIGNIN_ERROR":
      return {
        ...state,
        authError: "Incorrect combination of email and password",
      };
    case "SIGNIN_SUCCESS":
      state.id = action._id;
      state.authError = null;
      state.type = action.accountType;
      state.token = action.token;
      console.log("SUCCESS", state);
      return { ...state };
    case "SIGNOUT_SUCCESS":
      return state;

    case "SIGNUP_SUCCESS":
      state.id = action._id;
      state.authError = null;
      state.type = action.accountType;
      state.token = action.token;
      state.name = action.name;
      return {
        ...state,
      };
    case "SIGNUP_FAILED":
      return {
        ...state,
        // authError:action.err.message
        authError: "Sign Up Failed . Try Again Later",
      };

    default:
      return state;
  }
};
export default authReducer;
