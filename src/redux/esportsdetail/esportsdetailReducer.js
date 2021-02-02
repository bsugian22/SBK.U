import {
  FETCH_ESPORTSDETAILS_REQUEST,
  FETCH_ESPORTSDETAILS_SUCCESS,
  FETCH_ESPORTSDETAILS_FAILURE,
  FETCH_ESPORTSDETAIL_REQUEST,
  FETCH_ESPORTSDETAIL_SUCCESS,
  FETCH_ESPORTSDETAIL_FAILURE,
  CREATE_ESPORTSDETAIL_REQUEST,
  CREATE_ESPORTSDETAIL_SUCCESS,
  CREATE_ESPORTSDETAIL_FAILURE,
  UPDATE_ESPORTSDETAIL_REQUEST,
  UPDATE_ESPORTSDETAIL_SUCCESS,
  UPDATE_ESPORTSDETAIL_FAILURE,
  DELETE_ESPORTSDETAILS_REQUEST,
  DELETE_ESPORTSDETAILS_SUCCESS,
  DELETE_ESPORTSDETAILS_FAILURE,
} from "./esportsdetailTypes";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const esportsdetailReducer = (state = initialState, action) => {
  switch (action.type) {

    case FETCH_CASHES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CASHES_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_CASHES_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default cashReducer;
