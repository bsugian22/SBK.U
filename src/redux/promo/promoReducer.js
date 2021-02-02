import {
  FETCH_PROMOS_REQUEST,
  FETCH_PROMOS_SUCCESS,
  FETCH_PROMOS_FAILURE,
  FETCH_PROMO_REQUEST,
  FETCH_PROMO_SUCCESS,
  FETCH_PROMO_FAILURE,
  CREATE_PROMO_REQUEST,
  CREATE_PROMO_SUCCESS,
  CREATE_PROMO_FAILURE,
  UPDATE_PROMO_REQUEST,
  UPDATE_PROMO_SUCCESS,
  UPDATE_PROMO_FAILURE,
  DELETE_PROMOS_REQUEST,
  DELETE_PROMOS_SUCCESS,
  DELETE_PROMOS_FAILURE,
} from "./promoTypes";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const promoReducer = (state = initialState, action) => {
  switch (action.type) {

    case FETCH_PROMOS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PROMOS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_PROMOS_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case FETCH_PROMO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PROMO_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_PROMO_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case CREATE_PROMO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_PROMO_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case CREATE_PROMO_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case UPDATE_PROMO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_PROMO_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case UPDATE_PROMO_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case DELETE_PROMOS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_PROMOS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case DELETE_PROMOS_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default promoReducer;
