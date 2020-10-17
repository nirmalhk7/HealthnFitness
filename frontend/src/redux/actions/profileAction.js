import axios from "axios";
import { SERVER } from "../const";

export const getAllProProfiles = () => {
  return (dispatch) => {
    axios
      .get(`${SERVER}/pros`)
      .then((res) => {
        if (res.status === 200) {
          dispatch({
            type: "GETPRO_SUCCESS",
            payload: res.data,
          });
        } else {
          dispatch({ type: "GETPRO_ERROR" });
        }
      })
      .catch((err) => console.error(err));
  };
};

export const getProProfile = (username) => {
  return (dispatch) => {
    axios
      .get(`${SERVER}/pros/${username}`)
      .then((res) => {
        if (res.status === 200) {
          console.log("SUCCESS", res.data);
          dispatch({
            type: "GETAPRO_SUCCESS",
            payload: res.data,
          });
        } else {
          dispatch({ type: "GETAPRO_ERROR" });
        }
      })
      .catch((err) => console.error(err));
  };
};
