import {
  FETCH_FINDS_REQUEST,
  FETCH_FINDS_SUCCESS,
  FETCH_FINDS_FAILURE,
  FETCH_FIND_REQUEST,
  FETCH_FIND_SUCCESS,
  FETCH_FIND_FAILURE,
  CREATE_FIND_REQUEST,
  CREATE_FIND_SUCCESS,
  CREATE_FIND_FAILURE,
  UPDATE_FIND_REQUEST,
  UPDATE_FIND_SUCCESS,
  UPDATE_FIND_FAILURE,
  DELETE_FINDS_REQUEST,
  DELETE_FINDS_SUCCESS,
  DELETE_FINDS_FAILURE,
} from "./findTypes";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const findReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case FETCH_FINDS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_FINDS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_FINDS_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case FETCH_FIND_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_FIND_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_FIND_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case CREATE_FIND_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_FIND_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case CREATE_FIND_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case UPDATE_FIND_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_FIND_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case UPDATE_FIND_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case DELETE_FINDS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_FINDS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case DELETE_FINDS_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default findReducer;
