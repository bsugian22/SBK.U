import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  DELETE_USERS_REQUEST,
  DELETE_USERS_SUCCESS,
  DELETE_USERS_FAILURE,
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


export const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};
export const fetchUserSuccess = (users) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users,
  };
};
export const fetchUserFailure = (error) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: error,
  };
};


export const createUserRequest = () => {
  return {
    type: CREATE_USER_REQUEST,
  };
};
export const createUserSuccess = (users) => {
  return {
    type: CREATE_USER_SUCCESS,
    payload: users,
  };
};
export const createUserFailure = (error) => {
  return {
    type: CREATE_USER_FAILURE,
    payload: error,
  };
};

export const updateUserRequest = () => {
  return {
    type: UPDATE_USER_REQUEST,
  };
};
export const updateUserSuccess = (users) => {
  return {
    type: UPDATE_USER_SUCCESS,
    payload: users,
  };
};
export const updateUserFailure = (error) => {
  return {
    type: UPDATE_USER_FAILURE,
    payload: error,
  };
};

export const deleteUsersRequest = () => {
  return {
    type: DELETE_USERS_REQUEST,
  };
};
export const deleteUsersSuccess = (users) => {
  return {
    type: DELETE_USERS_SUCCESS,
    payload: users,
  };
};
export const deleteUsersFailure = (error) => {
  return {
    type: DELETE_USERS_FAILURE,
    payload: error,
  };
};


export const loginUser = () => {
    return (dispatch) => {
      dispatch(loginUserRequest);
      await axios.get(`/api/users`)
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
      await axios.get(`/api/users`)
                  .then(response => {
                    const users = response.data;
                    dispatch(fetchUsersSuccess(users))
              }).catch(error => {
                    const errorMsg = error.message;
                    dispatch(fetchUsersFailure(errorMsg))
              })
      };
};

export const fetchUser = () => {
  return (dispatch) => {
    dispatch(fetchUserRequest);
    await axios.get(`/api/users`)
                .then(response => {
                  const user = response.data;
                  dispatch(fetchUserSuccess(user))
            }).catch(error => {
                  const errorMsg = error.message;
                  dispatch(fetchUserFailure(errorMsg))
            })
    };
};

export const createUser = () => {
  return (dispatch) => {
    dispatch(createUserRequest);
    await axios.get(`/api/users`)
                .then(response => {
                  const user = response.data;
                  dispatch(createUserSuccess(user))
            }).catch(error => {
                  const errorMsg = error.message;
                  dispatch(createUserFailure(errorMsg))
            })
    };
};

export const updateUser = () => {
  return (dispatch) => {
    dispatch(updateUserRequest);
    await axios.get(`/api/users`)
                .then(response => {
                  const user = response.data;
                  dispatch(updateUserSuccess(user))
            }).catch(error => {
                  const errorMsg = error.message;
                  dispatch(updateUserFailure(errorMsg))
            })
    };
};

export const deleteUsers = () => {
  return (dispatch) => {
    dispatch(deleteUsersRequest);
    await axios.get(`/api/users`)
                .then(response => {
                  const users = response.data;
                  dispatch(deleteUsersSuccess(users))
            }).catch(error => {
                  const errorMsg = error.message;
                  dispatch(deleteUsersFailure(errorMsg))
            })
    };
};