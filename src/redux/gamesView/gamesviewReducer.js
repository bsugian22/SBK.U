import {
  FETCH_GAMESVIEWS_REQUEST,
  FETCH_GAMESVIEWS_SUCCESS,
  FETCH_GAMESVIEWS_FAILURE,
  FETCH_GAMESVIEW_REQUEST,
  FETCH_GAMESVIEW_SUCCESS,
  FETCH_GAMESVIEW_FAILURE,
  CREATE_GAMESVIEW_REQUEST,
  CREATE_GAMESVIEW_SUCCESS,
  CREATE_GAMESVIEW_FAILURE,
  UPDATE_GAMESVIEW_REQUEST,
  UPDATE_GAMESVIEW_SUCCESS,
  UPDATE_GAMESVIEW_FAILURE,
  DELETE_GAMESVIEWS_REQUEST,
  DELETE_GAMESVIEWS_SUCCESS,
  DELETE_GAMESVIEWS_FAILURE,
} from "./gamesviewTypes";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const gamesviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GAMESVIEWS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_GAMESVIEWS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_GAMESVIEWS_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case FETCH_GAMESVIEW_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_GAMESVIEW_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_GAMESVIEW_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case CREATE_GAMESVIEW_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_GAMESVIEW_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case CREATE_GAMESVIEW_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case UPDATE_GAMESVIEW_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_GAMESVIEW_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case UPDATE_GAMESVIEW_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case DELETE_GAMESVIEWS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_GAMESVIEWS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case DELETE_GAMESVIEWS_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default gamesviewReducer;
