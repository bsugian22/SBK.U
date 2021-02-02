import {
  FETCH_ESPORTS_REQUEST,
  FETCH_ESPORTS_SUCCESS,
  FETCH_ESPORTS_FAILURE,
  FETCH_ESPORT_REQUEST,
  FETCH_ESPORT_SUCCESS,
  FETCH_ESPORT_FAILURE,
  CREATE_ESPORT_REQUEST,
  CREATE_ESPORT_SUCCESS,
  CREATE_ESPORT_FAILURE,
  UPDATE_ESPORT_REQUEST,
  UPDATE_ESPORT_SUCCESS,
  UPDATE_ESPORT_FAILURE,
  DELETE_ESPORTS_REQUEST,
  DELETE_ESPORTS_SUCCESS,
  DELETE_ESPORTS_FAILURE,
} from "./esportTypes";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const esportReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ESPORTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ESPORTS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_ESPORTS_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case FETCH_ESPORT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ESPORT_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_ESPORT_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case CREATE_ESPORT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_ESPORT_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case CREATE_ESPORT_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case UPDATE_ESPORT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_ESPORT_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case UPDATE_ESPORT_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case DELETE_ESPORTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_ESPORTS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case DELETE_ESPORTS_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default esportReducer;
