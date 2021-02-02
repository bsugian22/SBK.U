import {
  FETCH_NOTICES_REQUEST,
  FETCH_NOTICES_SUCCESS,
  FETCH_NOTICES_FAILURE,
} from "./noticeTypes";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const noticeReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case FETCH_NOTICES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_NOTICES_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_NOTICES_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default noticeReducer;
