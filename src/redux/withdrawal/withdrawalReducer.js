import {
  FETCH_WITHDRAWALS_REQUEST,
  FETCH_WITHDRAWALS_SUCCESS,
  FETCH_WITHDRAWALS_FAILURE,
} from "./withdrawalTypes";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const withdrawalReducer = (state = initialState, action) => {
  switch (action.type) {

    case FETCH_WITHDRAWALS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_WITHDRAWALS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_WITHDRAWALS_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default withdrawalReducer;
