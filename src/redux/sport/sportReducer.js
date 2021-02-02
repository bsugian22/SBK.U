import {
  FETCH_SPORTS_REQUEST,
  FETCH_SPORTS_SUCCESS,
  FETCH_SPORTS_FAILURE,
  FETCH_SPORT_REQUEST,
  FETCH_SPORT_SUCCESS,
  FETCH_SPORT_FAILURE,
  CREATE_SPORT_REQUEST,
  CREATE_SPORT_SUCCESS,
  CREATE_SPORT_FAILURE,
  UPDATE_SPORT_REQUEST,
  UPDATE_SPORT_SUCCESS,
  UPDATE_SPORT_FAILURE,
  DELETE_SPORTS_REQUEST,
  DELETE_SPORTS_SUCCESS,
  DELETE_SPORTS_FAILURE,
} from "./sportTypes";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const sportReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SPORTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SPORTS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_SPORTS_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case FETCH_SPORT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SPORT_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_SPORT_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case CREATE_SPORT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_SPORT_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case CREATE_SPORT_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case UPDATE_SPORT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_SPORT_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case UPDATE_SPORT_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case DELETE_SPORTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_SPORTS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case DELETE_SPORTS_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default sportReducer;
