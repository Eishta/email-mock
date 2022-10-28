import {
  GET_ALL_EMAILS,
  GET_EMAIL_DETAIL_BY_ID,
  SELECT_EMAIL
} from "./actionTypes";
import axios from "axios";

export const getAllEmails = () => {
  return (dispatch) => {
    dispatch({ type: "LOADING", value: true });
    axios
      .get("https://flipkart-email-mock.now.sh/")
      .then((res) => {
        dispatch({ type: GET_ALL_EMAILS, data: res.data.list });
      })
      .catch((err) => console.log(err));
  };
};

export const selectEmail = (email) => {
  return (dispatch) => {
    dispatch({ type: SELECT_EMAIL, email: email });
    axios
      .get(`https://flipkart-email-mock.now.sh/?id=${email.id}`)
      .then((res) => {
        dispatch({
          type: GET_EMAIL_DETAIL_BY_ID,
          id: email.id,
          detail: { ...email, body: res.data.body }
        });
      });
  };
};
