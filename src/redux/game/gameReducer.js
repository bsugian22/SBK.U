import * as types from "./gameTypes";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_GAMES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_GAMES_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.FETCH_GAMES_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.FETCH_GAME_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_GAME_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.FETCH_GAME_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.CREATE_GAME_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.CREATE_GAME_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.CREATE_GAME_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.UPDATE_GAME_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.UPDATE_GAME_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.UPDATE_GAME_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.DELETE_GAMES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.DELETE_GAMES_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.DELETE_GAMES_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default gameReducer;
