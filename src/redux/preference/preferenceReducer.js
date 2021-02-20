import * as types from "./preferenceTypes";

const initialState = {
  preferences: [],
  forgotPassword: {
    username: "",
    password: "",
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
          password: "",
          verify_token: "",
          tel_number: "",
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
          password: action.payload,
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
    default:
      return state;
  }
}

export default preferencesReducer;
