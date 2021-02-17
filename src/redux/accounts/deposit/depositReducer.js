import {
  FETCH_DEPOSITS_REQUEST,
  FETCH_DEPOSITS_SUCCESS,
  FETCH_DEPOSITS_FAILURE,
  FETCH_DEPOSIT_REQUEST,
  FETCH_DEPOSIT_SUCCESS,
  FETCH_DEPOSIT_FAILURE,
  CREATE_DEPOSIT_REQUEST,
  CREATE_DEPOSIT_SUCCESS,
  CREATE_DEPOSIT_FAILURE,
  UPDATE_DEPOSIT_REQUEST,
  UPDATE_DEPOSIT_SUCCESS,
  UPDATE_DEPOSIT_FAILURE,
  DELETE_DEPOSITS_REQUEST,
  DELETE_DEPOSITS_SUCCESS,
  DELETE_DEPOSITS_FAILURE,
  OPEN_CREATE_MODAL,
  CLOSE_CREATE_MODAL,
  CHANGE_DEPOSIT_AMOUNT,
  CHANGE_DEPOSIT_CATEGORY,
  CHANGE_DEPOSIT_IDS,
  FILTERED_AESTHETIC_LIST,
  FILTERED_HIT_LIST,
  FILTERED_PROCEEDING_LIST,
  LIST_OF_DEPOSIT,
} from "./depositTypes";

const initialState = {
  loading: false,
  deposits: { data: [] },
  error: "",
  createDeposit: {
    category: "",
    amount: "",
    outcomes: "",
  },
  showModal: false,
  openModal: false,
  closeModal: false,
  list: "",
  depositMainList: { data: [] },
};

const depositReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DEPOSITS_REQUEST:
      return {
        ...state,
        loading: true,
        deposits: { data: [] },
        createDeposit: {
          category: "",
          amount: "",
          outcomes: [],
        },
        showModal: false,
        openModal: false,
        closeModal: false,
      };
    case FETCH_DEPOSITS_SUCCESS:
      return {
        ...state,
        loading: false,
        deposits: action.payload,
        depositMainList: action.payload,
        list: "ALL",
        error: "",
        createDeposit: {
          category: "",
          amount: "",
          outcomes: [],
        },
        showModal: false,
        openModal: false,
        closeModal: false,
      };
    case FETCH_DEPOSITS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        showModal: false,
        openModal: false,
        closeModal: false,
      };

    case FETCH_DEPOSIT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_DEPOSIT_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_DEPOSIT_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case CREATE_DEPOSIT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_DEPOSIT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        showModal: false,
      };
    case CREATE_DEPOSIT_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };

    case UPDATE_DEPOSIT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_DEPOSIT_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    case UPDATE_DEPOSIT_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };

    case DELETE_DEPOSITS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_DEPOSITS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    case DELETE_DEPOSITS_FAILURE:
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
    case CHANGE_DEPOSIT_AMOUNT:
      return {
        ...state,
        createDeposit: { ...state.createDeposit, amount: action.payload },
      };

    case CHANGE_DEPOSIT_CATEGORY:
      return {
        ...state,
        createDeposit: { ...state.createDeposit, category: action.payload },
      };
    case CHANGE_DEPOSIT_IDS:
      return {
        ...state,
        createDeposit: { ...state.createDeposit, outcomes: action.payload },
      };
    case FILTERED_PROCEEDING_LIST:
      let data = state.depositMainList.data.filter(
        (o) => o.status == "WAITING"
      );
      return {
        ...state,
        deposits: { ...state.deposits, data: data },
        list: "WAITING",
      };
    case LIST_OF_DEPOSIT:
      return {
        ...state,
        deposits: { ...state.deposits, data: state.depositMainList.data },
        list: "ALL",
      };
    case FILTERED_HIT_LIST:
      let hit = state.depositMainList.data.filter((o) => o.status == "WINNING");
      return {
        ...state,
        deposits: { ...state.deposits, data: hit },
        list: "WINNING",
      };
    case FILTERED_AESTHETIC_LIST:
      let defeated = state.depositMainList.data.filter(
        (o) => o.status == "DEFEATED"
      );
      return {
        ...state,
        deposits: { ...state.deposits, data: defeated },
        list: "DEFEATED",
      };
    default:
      return state;
  }
};

export default depositReducer;
