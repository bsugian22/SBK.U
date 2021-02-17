import * as types from "./userTypes";
import { camelize } from "../../helpers/object";
import axios from "../../plugins/axios";

export const setUser = (payload) => ({
  type: types.SET_USER,
  payload,
});

export const setAccessToken = (payload) => ({
  type: types.SET_ACCESS_TOKEN,
  payload,
});

export const setLogout = () => ({
  type: types.SET_LOGOUT,
});

export const fetchUsersRequest = () => {
  return {
    type: types.FETCH_USERS_REQUEST,
  };
};

export const fetchUsersSuccess = (users) => {
  return {
    type: types.FETCH_USERS_SUCCESS,
    payload: users,
  };
};

export const fetchUsersFailure = (error) => {
  return {
    type: types.FETCH_USERS_FAILURE,
    payload: error,
  };
};
export const setUserStatus = (status) => {
  return {
    type: types.SET_USER_STATUS,
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
