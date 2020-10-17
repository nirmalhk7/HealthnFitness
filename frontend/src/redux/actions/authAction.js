import axios from "axios";
import { SERVER } from "../const";

export const signIn = (credentials) => {
  return (dispatch) => {
    axios
      .post(`${SERVER}/auth/signin`, credentials)
      .then((res) => {
        if (res.status === 200) {
          dispatch({
            type: "SIGNIN_SUCCESS",
            _id: res.data._id,
            token: res.data.token,
            accountType: res.data.accountType,
          });
        } else {
          dispatch({ type: "SIGNIN_ERROR" });
        }
      })
      .catch((err) => console.error(err));
  };
};

export const signUp = (credentials) => {
  return (dispatch) => {
    axios
      .post(`${SERVER}/auth/signup`, credentials)
      .then((res) => {
        if (res.status === 200) {
          dispatch({
            type: "SIGNUP_SUCCESS",
            _id: res.data._id,
            token: res.data.token,
            accountType: res.data.accountType,
            name: res.data.name,
          });
        } else {
          // alert("Invalid Username or Password")
          dispatch({ type: "SIGNUP_ERROR" });
          // dispatch({err: "Invalid username or password"})
        }
      })
      .catch((err) => console.error(err));
  };
};
