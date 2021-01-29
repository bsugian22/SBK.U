import {
  FETCH_EXCHANGES_REQUEST,
  FETCH_EXCHANGES_SUCCESS,
  FETCH_EXCHANGES_FAILURE,
} from "./exchangeTypes";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const exchangeReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case FETCH_EXCHANGES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_EXCHANGES_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_EXCHANGES_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default exchangeReducer;
