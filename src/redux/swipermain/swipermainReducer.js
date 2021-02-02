import {
  FETCH_SWIPERMAINS_REQUEST,
  FETCH_SWIPERMAINS_SUCCESS,
  FETCH_SWIPERMAINS_FAILURE,
  FETCH_SWIPERMAIN_REQUEST,
  FETCH_SWIPERMAIN_SUCCESS,
  FETCH_SWIPERMAIN_FAILURE,
  CREATE_SWIPERMAIN_REQUEST,
  CREATE_SWIPERMAIN_SUCCESS,
  CREATE_SWIPERMAIN_FAILURE,
  UPDATE_SWIPERMAIN_REQUEST,
  UPDATE_SWIPERMAIN_SUCCESS,
  UPDATE_SWIPERMAIN_FAILURE,
  DELETE_SWIPERMAINS_REQUEST,
  DELETE_SWIPERMAINS_SUCCESS,
  DELETE_SWIPERMAINS_FAILURE,
} from "./swipermainTypes";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const swipermainReducer = (state = initialState, action) => {
  switch (action.type) {

    case FETCH_SWIPERMAINS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SWIPERMAINS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_SWIPERMAINS_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case FETCH_SWIPERMAIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SWIPERMAIN_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_SWIPERMAIN_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case CREATE_SWIPERMAIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_SWIPERMAIN_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case CREATE_SWIPERMAIN_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case UPDATE_SWIPERMAIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_SWIPERMAIN_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case UPDATE_SWIPERMAIN_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case DELETE_SWIPERMAINS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_SWIPERMAINS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case DELETE_SWIPERMAINS_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default swipermainReducer;
