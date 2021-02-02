import {
  FETCH_BRANCHES_REQUEST,
  FETCH_BRANCHES_SUCCESS,
  FETCH_BRANCHES_FAILURE,
} from "./branchTypes";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const branchReducer = (state = initialState, action) => {
  switch (action.type) {

    case FETCH_BRANCHES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_BRANCHES_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_BRANCHES_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default branchReducer;
