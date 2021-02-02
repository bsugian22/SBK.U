import {
  FETCH_SPORTSDETAILS_REQUEST,
  FETCH_SPORTSDETAILS_SUCCESS,
  FETCH_SPORTSDETAILS_FAILURE,
  FETCH_SPORTSDETAIL_REQUEST,
  FETCH_SPORTSDETAIL_SUCCESS,
  FETCH_SPORTSDETAIL_FAILURE,
  CREATE_SPORTSDETAIL_REQUEST,
  CREATE_SPORTSDETAIL_SUCCESS,
  CREATE_SPORTSDETAIL_FAILURE,
  UPDATE_SPORTSDETAIL_REQUEST,
  UPDATE_SPORTSDETAIL_SUCCESS,
  UPDATE_SPORTSDETAIL_FAILURE,
  DELETE_SPORTSDETAILS_REQUEST,
  DELETE_SPORTSDETAILS_SUCCESS,
  DELETE_SPORTSDETAILS_FAILURE,
} from "./sportsdetailTypes";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const sportsdetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SPORTSDETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SPORTSDETAILS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_SPORTSDETAILS_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case FETCH_SPORTSDETAIL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SPORTSDETAIL_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_SPORTSDETAIL_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case CREATE_SPORTSDETAIL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_SPORTSDETAIL_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case CREATE_SPORTSDETAIL_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case UPDATE_SPORTSDETAIL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_SPORTSDETAIL_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case UPDATE_SPORTSDETAIL_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case DELETE_SPORTSDETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_SPORTSDETAILS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case DELETE_SPORTSDETAILS_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default sportsdetailReducer;
