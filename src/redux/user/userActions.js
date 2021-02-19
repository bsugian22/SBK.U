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

export const handleNewPass = (newpass) => {
  return {
    type: types.CHANGE_USER_NEWPASSWORD,
    payload: newpass,
  };
};

export const handleConfirmNewPass = (pass) => {
  return {
    type: types.CHANGE_USER_PASSCONFIRMATION,
    payload: pass,
  };
};

export const handleOldPassword = (oldpass) => {
  return {
    type: types.HANDLE_USER_OLDPASSWORD,
    payload: oldpass,
  };
};

export const changePassRequest = () => {
  return {
    type: types.CHANGE_PASSWORD_REQUEST,
  };
};

export const changePassSuccess = (msg) => {
  return {
    type: types.CHANGE_PASSWORD_SUCCESS,
    payload: msg,
  };
};

export const changePassFailure = (message) => {
  return {
    type: types.CHANGE_PASSWORD_FAILURE,
    payload: message,
  };
};

export const changePassWord = (pass) => {
  return (dispatch) => {
    console.log(pass);
    dispatch(changePassRequest());
    axios
      .patch(`/api/users/password`, pass)
      .then((response) => {
        // const users = camelize(response.data);
        console.log(response);
        dispatch(changePassSuccess(response.data.message));
      })
      .catch((error) => {
        console.log(error);
        const errorMsg = error.response.data;
        let changePassErrorMessage = {
          html: ` ${errorMsg.message} <br />  ${
            errorMsg?.errors?.password
              ? errorMsg?.errors?.password[0] + " <br /> "
              : ""
          }
            ${
              errorMsg?.errors?.password_confirmation
                ? errorMsg?.errors?.password_confirmation[0]
                : ""
            }
            ${
              errorMsg?.errors?.old_password
                ? errorMsg?.errors?.old_password[0]
                : ""
            }
            `,

          icon: "error",
          confirmButtonText: "확인",
        };
        // const errorMsg = error.message;
        dispatch(changePassFailure(changePassErrorMessage));
      });
  };
};
