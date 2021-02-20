import * as types from "./preferenceTypes";
import axios from "../../plugins/axios";
import { camelize } from "../../helpers/object";
export const setPreferences = (payload) => ({
  type: types.SET_PREFERENCES,
  payload,
});

export const setDarkmode = (toggle) => ({
  type: types.SET_DARKMODE,
  toggle,
});

export const fetchCountriesRequest = () => {
  return {
    type: types.FETCH_COUNTRIES_REQUEST,
  };
};

export const fetchCountriesSuccess = (data) => {
  return {
    type: types.FETCH_COUNTRIES_SUCCESS,
    payload: data,
  };
};

export const fetchCountriesFailure = (error) => {
  return {
    type: types.FETCH_COUNTRIES_FAILURE,
    payload: error,
  };
};

export const setCountries = () => {
  return (dispatch) => {
    dispatch(fetchCountriesRequest(0));
    axios
      .get(`/api/countries`)
      .then((response) => {
        const countries = camelize(response.data);
        dispatch(fetchCountriesSuccess(countries));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchCountriesFailure(errorMsg));
      });
  };
};

export const handleUsername = (username) => {
  return {
    type: types.HANDLE_USER_USERNAME,
    payload: username,
  };
};

export const handleUserPassword = (pass) => {
  return {
    type: types.HANDLE_USER_PASSWORD,
    payload: pass,
  };
};

export const handleUserPhoneNumber = (number) => {
  return {
    type: types.HANDLE_USER_PHONENUMBER,
    payload: number,
  };
};

export const userForgotPassword = (data) => {
  return (dispatch) => {
    dispatch(forgotPassRequest(0));
    axios
      .patch(`/api/users/forgot-password`, data)
      .then((response) => {
        console.log(response);
        dispatch(forgotPassSuccess(response.data.message));
      })
      .catch((error) => {
        console.log(error.response.data);
        const errorMsg = error.response.data;
        let forgotPassErrorMessage = {
          html: ` ${errorMsg.message} <br />  ${
            errorMsg?.errors?.username
              ? errorMsg?.errors?.username[0] + " <br /> "
              : ""
          }
            ${errorMsg?.errors?.password ? errorMsg?.errors?.password[0] : ""}
            ${
              errorMsg?.errors?.verify_token
                ? errorMsg?.errors?.verify_token[0]
                : ""
            }
            ${
              errorMsg?.errors?.tel_number
                ? errorMsg?.errors?.tel_number[0]
                : ""
            }
            `,

          icon: "error",
          confirmButtonText: "확인",
        };

        dispatch(forgotPassFailure(forgotPassErrorMessage));
      });
  };
};

export const forgotPassRequest = () => {
  return {
    type: types.FORGOT_PASSWORD_REQUEST,
  };
};

export const forgotPassSuccess = (message) => {
  return {
    type: types.FORGOT_PASSWORD_SUCCESS,
    payload: message,
  };
};

export const forgotPassFailure = (error) => {
  return {
    type: types.FORGOT_PASSWORD_FAILURE,
    payload: error,
  };
};
