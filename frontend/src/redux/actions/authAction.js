// import { nodeAPIkey, nodeAPIurl, getEnvironment } from "../../config/shared";
import axios from "axios";
import { createNotification } from "../../App";
import { SERVER } from "../const";

export const signIn = (credentials) => {
  return (dispatch) => {
    axios
      .post(`${SERVER}/auth/signin`, credentials)
      .then((res) => {
        console.log(res.data, res.status);
        if (res.status === 200) {
          console.log("NAME", res.data.name);
          dispatch({
            type: "SIGNIN_SUCCESS",
            _id: res.data._id,
            token: res.data.token,
            accountType: res.data.accountType,
            username: res.data.name,
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
