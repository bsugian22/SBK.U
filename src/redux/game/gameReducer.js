import {
  FETCH_GAMES_REQUEST,
  FETCH_GAMES_SUCCESS,
  FETCH_GAMES_FAILURE,
  FETCH_GAME_REQUEST,
  FETCH_GAME_SUCCESS,
  FETCH_GAME_FAILURE,
  CREATE_GAME_REQUEST,
  CREATE_GAME_SUCCESS,
  CREATE_GAME_FAILURE,
  UPDATE_GAME_REQUEST,
  UPDATE_GAME_SUCCESS,
  UPDATE_GAME_FAILURE,
  DELETE_GAMES_REQUEST,
  DELETE_GAMES_SUCCESS,
  DELETE_GAMES_FAILURE,
} from "./gameTypes";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GAMES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_GAMES_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_GAMES_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case FETCH_GAME_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_GAME_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_GAME_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case CREATE_GAME_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_GAME_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case CREATE_GAME_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case UPDATE_GAME_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_GAME_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case UPDATE_GAME_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case DELETE_GAMES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_GAMES_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case DELETE_GAMES_FAILURE:
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
