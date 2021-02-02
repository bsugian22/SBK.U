import {
  FETCH_MAINS_REQUEST,
  FETCH_MAINS_SUCCESS,
  FETCH_MAINS_FAILURE,
  FETCH_MAIN_REQUEST,
  FETCH_MAIN_SUCCESS,
  FETCH_MAIN_FAILURE,
  CREATE_MAIN_REQUEST,
  CREATE_MAIN_SUCCESS,
  CREATE_MAIN_FAILURE,
  UPDATE_MAIN_REQUEST,
  UPDATE_MAIN_SUCCESS,
  UPDATE_MAIN_FAILURE,
  DELETE_MAINS_REQUEST,
  DELETE_MAINS_SUCCESS,
  DELETE_MAINS_FAILURE,
} from "./mainTypes";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case FETCH_MAINS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_MAINS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_MAINS_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
      
    case FETCH_MAIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_MAIN_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_MAIN_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case CREATE_MAIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_MAIN_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case CREATE_MAIN_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case UPDATE_MAIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_MAIN_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case UPDATE_MAIN_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case DELETE_MAINS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_MAINS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case DELETE_MAINS_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default mainReducer;
