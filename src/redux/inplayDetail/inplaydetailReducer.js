import {
  FETCH_INPLAYDETAILS_REQUEST,
  FETCH_INPLAYDETAILS_SUCCESS,
  FETCH_INPLAYDETAILS_FAILURE,
  FETCH_INPLAYDETAIL_REQUEST,
  FETCH_INPLAYDETAIL_SUCCESS,
  FETCH_INPLAYDETAIL_FAILURE,
  CREATE_INPLAYDETAIL_REQUEST,
  CREATE_INPLAYDETAIL_SUCCESS,
  CREATE_INPLAYDETAIL_FAILURE,
  UPDATE_INPLAYDETAIL_REQUEST,
  UPDATE_INPLAYDETAIL_SUCCESS,
  UPDATE_INPLAYDETAIL_FAILURE,
  DELETE_INPLAYDETAILS_REQUEST,
  DELETE_INPLAYDETAILS_SUCCESS,
  DELETE_INPLAYDETAILS_FAILURE,
} from "./inplaydetailTypes";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const inplaydetailReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case FETCH_INPLAYDETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_INPLAYDETAILS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_INPLAYDETAILS_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case FETCH_INPLAYDETAIL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_INPLAYDETAIL_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_INPLAYDETAIL_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case CREATE_INPLAYDETAIL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_INPLAYDETAIL_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case CREATE_INPLAYDETAIL_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case UPDATE_INPLAYDETAIL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_INPLAYDETAIL_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case UPDATE_INPLAYDETAIL_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case DELETE_INPLAYDETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_INPLAYDETAILS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case DELETE_INPLAYDETAILS_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default inplaydetailReducer;
