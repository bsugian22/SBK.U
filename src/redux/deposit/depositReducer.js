import {
  FETCH_DEPOSITS_REQUEST,
  FETCH_DEPOSITS_SUCCESS,
  FETCH_DEPOSITS_FAILURE,
} from "./depositTypes";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const depositReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case FETCH_DEPOSITS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_DEPOSITS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_DEPOSITS_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default depositReducer;
