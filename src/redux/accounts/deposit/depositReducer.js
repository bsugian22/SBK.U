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
  CHECK_DEPOSIT_CERTAIN_ITEM,
  LIST_OF_TODELETE_DEPOSITS,
  SELECT_DEPOSIT_METHOD,
  CHANGE_CREATE_DEPOSIT_AMOUNT,
  INCREMENT_DEPOSIT_AMOUNT,
  DECREMENT_DEPOSIT_AMOUNT,
} from "./depositTypes";
import sweetalert from "../../../plugins/sweetalert";
const swal = new sweetalert();
const initialState = {
  loading: false,
  deposits: {
    data: [],
    total: 0,
    count: 0,
    perPage: 0,
    page: 0,
    lastPage: 0,
    amount: 0,
  },
  error: "",
  createDeposit: {
    agreed: true,
    amount: "0",
    method: "",
  },
  showModal: false,
  openModal: false,
  closeModal: false,
  list: "",
  depositMainList: { data: [] },
  newDepositToDeleteList: {
    deposit_activities: [],
  },
  createDepositStatus: "CASH",
};

const depositReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DEPOSITS_REQUEST:
      return {
        ...state,
        loading: true,
        deposits: {
          data: [],
          total: 0,
          count: 0,
          perPage: 0,
          page: 0,
          lastPage: 0,
          amount: 0,
        },
        createDeposit: {
          agreed: true,
          amount: "0",
          method: "CASH",
        },

        showModal: false,
        openModal: false,
        closeModal: false,
        createDepositStatus: "CASH",
      };
    case FETCH_DEPOSITS_SUCCESS:
      let newData = {
        data: [],
        total: 0,
        count: 0,
        perPage: 0,
        page: 0,
        lastPage: 0,
        amount: 0,
      };
      newData.data = action.payload.data.map((o) => {
        return {
          isChecked: false,
          ...o,
        };
      });
      newData.total = action.payload.total;
      newData.count = action.payload.count;
      newData.perPage = action.payload.perPage;
      newData.page = action.payload.page;
      newData.lastPage = action.payload.lastPage;
      newData.amount = action.payload.amount;
      console.log(newData);
      return {
        ...state,
        loading: false,
        deposits: newData,
        depositMainList: action.payload,
        list: "ALL",
        error: "",

        newDepositToDeleteList: {
          deposit_activities: [],
        },
        showModal: false,
        openModal: false,
        closeModal: false,
        createDepositStatus: "CASH",
      };
    case FETCH_DEPOSITS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        showModal: false,
        openModal: false,
        closeModal: false,
        newDepositToDeleteList: {
          deposit_activities: [],
        },
        createDepositStatus: "CASH",
        createDeposit: {
          agreed: true,
          amount: "0",
          method: "",
        },
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
      swal.success(action.payload);
      return {
        ...state,
        loading: false,
        error: "",
        showModal: false,
      };
    case CREATE_DEPOSIT_FAILURE:
      swal.showError(action.payload);
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
      swal.success(action.payload.message);
      return {
        ...state,
        loading: false,
        error: "",
        newDepositToDeleteList: {
          deposit_activities: [],
        },
      };
    case DELETE_DEPOSITS_FAILURE:
      return {
        ...state,
        loading: false,
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
    case CHECK_DEPOSIT_CERTAIN_ITEM:
      state.deposits.data.map((i) => {
        if (i.id == action.payload.id) {
          i.isChecked = action.payload.status;
        }
      });
      console.log(state.deposits.data);
      return {
        ...state,
        deposits: { ...state.deposits, data: state.deposits.data },
      };
    case LIST_OF_TODELETE_DEPOSITS:
      let newList = {
        deposit_activities: [],
      };

      state.deposits.data.map((o) => {
        if (o.isChecked == true) {
          let item = { id: "" + o.id };
          newList.deposit_activities.push(item);
        }
      });
      state.newDepositToDeleteList = {
        ...state.newDepositToDeleteList,
        deposit_activities: [...newList.deposit_activities],
      };
      console.log(newList.deposit_activities);
      return {
        ...state,
        deposits: { ...state.deposits, data: state.deposits.data },
        newDepositToDeleteList: {
          ...state.newDepositToDeleteList,
          deposit_activities: [
            ...state.newDepositToDeleteList.deposit_activities,
          ],
        },
      };
    case SELECT_DEPOSIT_METHOD:
      return {
        ...state,
        createDepositStatus: action.payload,
        createDeposit: { ...state.createDeposit, method: action.payload },
      };
    case CHANGE_CREATE_DEPOSIT_AMOUNT:
      return {
        ...state,
        createDeposit: {
          ...state.createDeposit,
          amount: action.payload.toString(),
        },
      };
    case INCREMENT_DEPOSIT_AMOUNT:
      let inc = Number(state.createDeposit.amount) + 1000;
      return {
        ...state,
        createDeposit: {
          ...state.createDeposit,
          amount: inc.toString(),
        },
      };
    case DECREMENT_DEPOSIT_AMOUNT:
      let dec = Number(state.createDeposit.amount) - 1000;
      return {
        ...state,
        createDeposit: {
          ...state.createDeposit,
          amount: dec.toString(),
        },
      };
    default:
      return state;
  }
};

export default depositReducer;
