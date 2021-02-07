import { camelize } from "../../helpers/object";
import axios from "../../plugins/axios";

export const SET_USER = "SET_USER";
export const SET_ACCESS_TOKEN = "SET_ACCESS_TOKEN";
export const SET_LOGOUT = "SET_LOGOUT";
export const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";
export const SET_USER_STATUS = "SET_USER_STATUS";
export const setUser = (payload) => ({
  type: SET_USER,
  payload,
});

export const setAccessToken = (payload) => ({
  type: SET_ACCESS_TOKEN,
  payload,
});

export const setLogout = () => ({
  type: SET_LOGOUT,
});

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

export const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};
export const setUserStatus = (status) => {
  return {
    type: SET_USER_STATUS,
    payload: status,
  };
};
export const setUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest);
    axios
      .get(`/api/branch/users`)
      .then((response) => {
        const users = camelize(response.data);
        console.log("data" + response.data);
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchUsersFailure(errorMsg));
      });
  };
};
