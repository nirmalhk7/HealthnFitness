// import { nodeAPIkey, nodeAPIurl, getEnvironment } from "../../config/shared";
import axios from "axios";
import { createNotification } from "../../App";
import { SERVER } from "../const";
import Cookies from "js-cookie";

export const signIn = (credentials) => {
  return (dispatch) => {
    axios
      .post(`${SERVER}/auth/signin`, credentials)
      .then((res) => {
        console.log(res, res.status);
        if (res.status === 200) {
          console.log(res.data);
          Cookies.set("id", res.data._id, { expires: 7 });
          Cookies.set("hckcToken", res.data.token, { expires: 7 });
          dispatch({ type: "SIGNIN_SUCCESS" });
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
