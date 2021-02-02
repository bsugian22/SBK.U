import {
  FETCH_ESPORTSLIVES_REQUEST,
  FETCH_ESPORTSLIVES_SUCCESS,
  FETCH_ESPORTSLIVES_FAILURE,
  FETCH_ESPORTSLIVE_REQUEST,
  FETCH_ESPORTSLIVE_SUCCESS,
  FETCH_ESPORTSLIVE_FAILURE,
  CREATE_ESPORTSLIVE_REQUEST,
  CREATE_ESPORTSLIVE_SUCCESS,
  CREATE_ESPORTSLIVE_FAILURE,
  UPDATE_ESPORTSLIVE_REQUEST,
  UPDATE_ESPORTSLIVE_SUCCESS,
  UPDATE_ESPORTSLIVE_FAILURE,
  DELETE_ESPORTSLIVES_REQUEST,
  DELETE_ESPORTSLIVES_SUCCESS,
  DELETE_ESPORTSLIVES_FAILURE,
} from "./esportsliveTypes";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const esportsliveReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case FETCH_ESPORTSLIVES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ESPORTSLIVES_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_ESPORTSLIVES_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case FETCH_ESPORTSLIVE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ESPORTSLIVE_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_ESPORTSLIVE_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case CREATE_ESPORTSLIVE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_ESPORTSLIVE_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case CREATE_ESPORTSLIVE_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case UPDATE_ESPORTSLIVE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_ESPORTSLIVE_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case UPDATE_ESPORTSLIVE_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case DELETE_ESPORTSLIVES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_ESPORTSLIVES_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case DELETE_ESPORTSLIVES_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default esportsliveReducer;
