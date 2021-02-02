import {
  FETCH_INPLAYS_REQUEST,
  FETCH_INPLAYS_SUCCESS,
  FETCH_INPLAYS_FAILURE,
  FETCH_INPLAY_REQUEST,
  FETCH_INPLAY_SUCCESS,
  FETCH_INPLAY_FAILURE,
  CREATE_INPLAY_REQUEST,
  CREATE_INPLAY_SUCCESS,
  CREATE_INPLAY_FAILURE,
  UPDATE_INPLAY_REQUEST,
  UPDATE_INPLAY_SUCCESS,
  UPDATE_INPLAY_FAILURE,
  DELETE_INPLAYS_REQUEST,
  DELETE_INPLAYS_SUCCESS,
  DELETE_INPLAYS_FAILURE,
} from "./inplayTypes";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const inplayReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case FETCH_INPLAYS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_INPLAYS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_INPLAYS_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case FETCH_INPLAY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_INPLAY_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_INPLAY_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case CREATE_INPLAY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_INPLAY_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case CREATE_INPLAY_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case UPDATE_INPLAY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_INPLAY_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case UPDATE_INPLAY_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case DELETE_INPLAYS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_INPLAYS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case DELETE_INPLAYS_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default inplayReducer;
