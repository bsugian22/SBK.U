import * as types from "./esportsliveTypes";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const esportsliveReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case types.FETCH_ESPORTSLIVES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_ESPORTSLIVES_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.FETCH_ESPORTSLIVES_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.FETCH_ESPORTSLIVE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_ESPORTSLIVE_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.FETCH_ESPORTSLIVE_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.CREATE_ESPORTSLIVE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.CREATE_ESPORTSLIVE_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.CREATE_ESPORTSLIVE_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.UPDATE_ESPORTSLIVE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.UPDATE_ESPORTSLIVE_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.UPDATE_ESPORTSLIVE_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.DELETE_ESPORTSLIVES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.DELETE_ESPORTSLIVES_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.DELETE_ESPORTSLIVES_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default esportsliveReducer;
