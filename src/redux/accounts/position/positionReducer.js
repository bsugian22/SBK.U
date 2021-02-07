import {
  FETCH_POSITIONS_REQUEST,
  FETCH_POSITIONS_SUCCESS,
  FETCH_POSITIONS_FAILURE,
  FETCH_POSITION_REQUEST,
  FETCH_POSITION_SUCCESS,
  FETCH_POSITION_FAILURE,
  CREATE_POSITION_REQUEST,
  CREATE_POSITION_SUCCESS,
  CREATE_POSITION_FAILURE,
  UPDATE_POSITION_REQUEST,
  UPDATE_POSITION_SUCCESS,
  UPDATE_POSITION_FAILURE,
  DELETE_POSITIONS_REQUEST,
  DELETE_POSITIONS_SUCCESS,
  DELETE_POSITIONS_FAILURE,
  OPEN_CREATE_MODAL,
  CLOSE_CREATE_MODAL,
  CHANGE_POSITION_AMOUNT,
  CHANGE_POSITION_CATEGORY,
  CHANGE_POSITION_IDS,
  FILTERED_AESTHETIC_LIST,
  FILTERED_HIT_LIST,
  FILTERED_PROCEEDING_LIST,
  LIST_OF_POSITION,
} from "./positionTypes";

const initialState = {
  loading: false,
  positions: { data: [] },
  error: "",
  createPosition: {
    category: "",
    amount: "",
    outcomes: "",
  },
  showModal: false,
  openModal: false,
  closeModal: false,
  list: "",
  originalList: { data: [] },
};

const positionReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSITIONS_REQUEST:
      return {
        ...state,
        loading: true,
        createPosition: {
          category: "",
          amount: "",
          outcomes: [],
        },
        showModal: false,
        openModal: false,
        closeModal: false,
      };
    case FETCH_POSITIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        positions: action.payload,
        originalList: action.payload,
        list: "ALL",
        error: "",
        createPosition: {
          category: "",
          amount: "",
          outcomes: [],
        },
        showModal: false,
        openModal: false,
        closeModal: false,
      };
    case FETCH_POSITIONS_FAILURE:
      return {
        ...state,
        loading: false,
        positions: [],
        error: action.payload,
        showModal: false,
        openModal: false,
        closeModal: false,
      };

    case FETCH_POSITION_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_POSITION_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_POSITION_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case CREATE_POSITION_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_POSITION_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        showModal: false,
      };
    case CREATE_POSITION_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };

    case UPDATE_POSITION_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_POSITION_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    case UPDATE_POSITION_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };

    case DELETE_POSITIONS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_POSITIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    case DELETE_POSITIONS_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };
    case OPEN_CREATE_MODAL:
      return {
        ...state,
        loading: false,
        error: "",
        showModal: true,
      };
    case CLOSE_CREATE_MODAL:
      return {
        ...state,
        loading: false,
        error: "",
        showModal: false,
      };
    case CHANGE_POSITION_AMOUNT:
      return {
        ...state,
        createPosition: { ...state.createPosition, amount: action.payload },
      };

    case CHANGE_POSITION_CATEGORY:
      return {
        ...state,
        createPosition: { ...state.createPosition, category: action.payload },
      };
    case CHANGE_POSITION_IDS:
      return {
        ...state,
        createPosition: { ...state.createPosition, outcomes: action.payload },
      };
    case FILTERED_PROCEEDING_LIST:
      let data = state.originalList.data.filter((o) => o.status == "WAITING");
      return {
        ...state,
        positions: { ...state.positions, data: data },
        list: "WAITING",
      };
    case LIST_OF_POSITION:
      return {
        ...state,
        positions: { ...state.positions, data: state.originalList.data },
        list: "ALL",
      };
    case FILTERED_HIT_LIST:
      let hit = state.originalList.data.filter((o) => o.status == "WINNING");
      return {
        ...state,
        positions: { ...state.positions, data: hit },
        list: "WINNING",
      };
    case FILTERED_AESTHETIC_LIST:
      let defeated = state.originalList.data.filter(
        (o) => o.status == "DEFEATED"
      );
      return {
        ...state,
        positions: { ...state.positions, data: defeated },
        list: "DEFEATED",
      };
    default:
      return state;
  }
};

export default positionReducer;
