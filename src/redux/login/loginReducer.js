import * as types from "./loginTypes";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.LOGIN_USER_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.LOGIN_USER_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };


    case types.FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_USERS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.FETCH_USERS_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };


    case types.FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_USER_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.FETCH_USER_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };


    case types.CREATE_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.CREATE_USER_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.CREATE_USER_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.UPDATE_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.UPDATE_USER_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.UPDATE_USER_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.DELETE_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.DELETE_USERS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.DELETE_USERS_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default loginReducer;
