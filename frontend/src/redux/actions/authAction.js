// import { nodeAPIkey, nodeAPIurl, getEnvironment } from "../../config/shared";
import axios from "axios";
import { createNotification } from "../../App";
import { SERVER } from "../const";

export const signIn = (credentials) => {
  return (dispatch) => {
    axios
      .post(`${SERVER}/auth/signin`, credentials)
      .then((res) => {
        console.log(res, res.status);
        if (res.status === 200) {
          window.location.href = "/dashboard";
          dispatch({
            type: "SIGNIN_SUCCESS",
            _id: res.data._id,
            token: res.data.token,
            accountType: res.data.accountType,
          });
        } else {
          // alert("Invalid Username or Password")
          dispatch({ type: "SIGNIN_ERROR" });
          // dispatch({err: "Invalid username or password"})
        }
      })
      .catch((err) => console.error(err));
  };
};

export const signOut = () => {};

export const signUp = (newUser) => {};
