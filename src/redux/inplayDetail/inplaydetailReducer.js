import {
  FETCH_MAINS_REQUEST,
  FETCH_MAINS_SUCCESS,
  FETCH_MAINS_FAILURE,
} from "./mainTypes";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case FETCH_MAINS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_MAINS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_MAINS_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default mainReducer;
