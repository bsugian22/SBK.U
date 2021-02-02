import {
  FETCH_BETTINGS_REQUEST,
  FETCH_BETTINGS_SUCCESS,
  FETCH_BETTINGS_FAILURE,
  FETCH_CASINO_REQUEST,
  FETCH_CASINO_SUCCESS,
  FETCH_CASINO_FAILURE,
  CREATE_CASINO_REQUEST,
  CREATE_CASINO_SUCCESS,
  CREATE_CASINO_FAILURE,
  UPDATE_CASINO_REQUEST,
  UPDATE_CASINO_SUCCESS,
  UPDATE_CASINO_FAILURE,
  DELETE_CASINOS_REQUEST,
  DELETE_CASINOS_SUCCESS,
  DELETE_CASINOS_FAILURE,
} from "./casinoTypes";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const casinoReducer = (state = initialState, action) => {
  switch (action.type) {

    case FETCH_CASINOS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CASINOS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_CASINOS_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case FETCH_CASINO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CASINO_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_CASINO_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case CREATE_CASINO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_CASINO_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case CREATE_CASINO_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case UPDATE_CASINO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_CASINO_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case UPDATE_CASINO_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case DELETE_CASINOS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_CASINOS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case DELETE_CASINOS_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
    
    default:
      return state;
  }
};

export default casinoReducer;
