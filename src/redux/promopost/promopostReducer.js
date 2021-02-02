import {
  FETCH_PROMOPOSTS_REQUEST,
  FETCH_PROMOPOSTS_SUCCESS,
  FETCH_PROMOPOSTS_FAILURE,
  FETCH_PROMOPOST_REQUEST,
  FETCH_PROMOPOST_SUCCESS,
  FETCH_PROMOPOST_FAILURE,
  CREATE_PROMOPOST_REQUEST,
  CREATE_PROMOPOST_SUCCESS,
  CREATE_PROMOPOST_FAILURE,
  UPDATE_PROMOPOST_REQUEST,
  UPDATE_PROMOPOST_SUCCESS,
  UPDATE_PROMOPOST_FAILURE,
  DELETE_PROMOPOSTS_REQUEST,
  DELETE_PROMOPOSTS_SUCCESS,
  DELETE_PROMOPOSTS_FAILURE,
} from "./promopostTypes";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const promopostReducer = (state = initialState, action) => {
  switch (action.type) {

    case FETCH_PROMOPOSTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PROMOPOSTS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_PROMOPOSTS_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case FETCH_PROMOPOST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PROMOPOST_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_PROMOPOST_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case CREATE_PROMOPOST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_PROMOPOST_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case CREATE_PROMOPOST_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case UPDATE_PROMOPOST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_PROMOPOST_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case UPDATE_PROMOPOST_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case DELETE_PROMOPOSTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_PROMOPOSTS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case DELETE_PROMOPOSTS_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };


    default:
      return state;
  }
};

export default promopostReducer;
