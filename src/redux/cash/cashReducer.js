import {
  FETCH_CASHES_REQUEST,
  FETCH_CASHES_SUCCESS,
  FETCH_CASHES_FAILURE,
} from "./cashTypes";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const cashReducer = (state = initialState, action) => {
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
