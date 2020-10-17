// import { Redirect } from "react-router-dom";

const initState = {
  authError: null,
};

const authReducer = (state = [], action) => {
  switch (action.type) {
    case "SIGNIN_ERROR":
      return {
        ...state,
        authError: "Incorrect combination of email and password",
      };
    case "SIGNIN_SUCCESS":
      return {
        ...state,
        authError: null,
      };
    case "SIGNOUT_SUCCESS":
      return state;

    case "SIGNUP_SUCCESS":
      return {
        ...state,
        authError: null,
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
