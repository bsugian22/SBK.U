import * as types from "./preferenceTypes";
import sweetalert from "../../plugins/sweetalert";
const swal = new sweetalert();
const initialState = {
  preferences: [],
  forgotPassword: {
    username: "",
    password: "0000",
    verify_token: "",
    tel_number: "",
  },
  countries: { data: [] },
  error: "",
};

function preferencesReducer(state = initialState, action) {
  const { preferences } = state;

  switch (action.type) {
    case types.SET_PREFERENCES:
      return {
        preferences: action.payload,
        countries: { data: [] },
        countries: [],
        error: "",
        forgotPassword: {
          username: "",
          password: "0000",
          verify_token: "",
          tel_number: "",
        },
      };
    case types.SET_DARKMODE:
      return {
        preferences: {
          ...preferences,
          darkmode: action.toggle,
        },
      };
    case types.FETCH_COUNTRIES_REQUEST:
      return {
        ...state,
        countries: [],
        error: "",
      };
    case types.FETCH_COUNTRIES_SUCCESS:
      return {
        ...state,
        countries: action.payload,
      };
    case types.FETCH_COUNTRIES_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case types.HANDLE_USER_USERNAME:
      return {
        ...state,
        forgotPassword: {
          ...state.forgotPassword,
          username: action.payload,
        },
      };
    case types.HANDLE_USER_PASSWORD:
      return {
        ...state,
        forgotPassword: {
          ...state.forgotPassword,
          verify_token: action.payload,
        },
      };
    case types.HANDLE_USER_PHONENUMBER:
      return {
        ...state,
        forgotPassword: {
          ...state.forgotPassword,
          tel_number: action.payload,
        },
      };
    case types.FORGOT_PASSWORD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FORGOT_PASSWORD_SUCCESS:
      swal.success(action.payload);
      return {
        ...state,
        loading: false,
      };
    case types.FORGOT_PASSWORD_FAILURE:
      swal.showError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

export default preferencesReducer;
