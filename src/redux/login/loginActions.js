import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from "./loginTypes";
import axios from "axios";

export const loginUserRequest = () => {
  return {
    type: LOGIN_USER_REQUEST,
  };
};

export const loginUserSuccess = (user) => {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: user,
  };
};

export const loginUserFailure = (error) => {
  return {
    type: LOGIN_USER_FAILURE,
    payload: error,
  };
};

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

  export const loginUser = () => {
    return (dispatch) => {
      dispatch(loginUserRequest);
      await axios.get(`/api/admin/users`)
                  .then(response => {
                    const user = response.data;
                    dispatch(loginUserSuccess(user))
              }).catch(error => {
                    const errorMsg = error.message;
                    dispatch(loginUserFailure(errorMsg))
              })
      };
};

export const fetchUsers = () => {
    return (dispatch) => {
      dispatch(fetchUsersRequest);
      await axios.get(`/api/admin/users`)
                  .then(response => {
                    const users = response.data;
                    dispatch(fetchUsersSuccess(users))
              }).catch(error => {
                    const errorMsg = error.message;
                    dispatch(fetchUsersFailure(errorMsg))
              })
      };
};
