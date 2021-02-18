import {
  FETCH_WITHDRAWALS_REQUEST,
  FETCH_WITHDRAWALS_SUCCESS,
  FETCH_WITHDRAWALS_FAILURE,
  FETCH_WITHDRAWAL_REQUEST,
  FETCH_WITHDRAWAL_SUCCESS,
  FETCH_WITHDRAWAL_FAILURE,
  CREATE_WITHDRAWAL_REQUEST,
  CREATE_WITHDRAWAL_SUCCESS,
  CREATE_WITHDRAWAL_FAILURE,
  UPDATE_WITHDRAWAL_REQUEST,
  UPDATE_WITHDRAWAL_SUCCESS,
  UPDATE_WITHDRAWAL_FAILURE,
  DELETE_WITHDRAWALS_REQUEST,
  DELETE_WITHDRAWALS_SUCCESS,
  DELETE_WITHDRAWALS_FAILURE,
  OPEN_CREATE_MODAL,
  CLOSE_CREATE_MODAL,
  CHANGE_WITHDRAWAL_AMOUNT,
  CHANGE_WITHDRAWAL_CATEGORY,
  CHANGE_WITHDRAWAL_IDS,
  FILTERED_AESTHETIC_LIST,
  FILTERED_HIT_LIST,
  FILTERED_PROCEEDING_LIST,
  LIST_OF_WITHDRAWAL,
  CHECK_WITHDRAWAL_CERTAIN_ITEM,
  LIST_OF_TODELETE_WITHDRAWALS,
  SELECT_WITHDRAWAL_METHOD,
  CHANGE_CREATE_WITHDRAWAL_AMOUNT,
  INCREMENT_WITHDRAWAL_AMOUNT,
  DECREMENT_WITHDRAWAL_AMOUNT,
  ENTER_WITHDRAWAL_PASSWORD,
  RESET_CREATE_WITHDRAWAL,
  CHECK_ALL_WITHDRAWALS 
} from "./withdrawalTypes";
import sweetalert from "../../../plugins/sweetalert";
const swal = new sweetalert();

const initialState = {
  loading: false,
  withdrawals: {
    data: [],
    total: 0,
    count: 0,
    perPage: 0,
    page: 0,
    lastPage: 0,
    amount: 0,
  },
  error: "",
  createWithdrawal: {
    agreed: true,
    amount: "0",
    method: "",
  },
  showModal: false,
  openModal: false,
  closeModal: false,
  list: "",
  withdrawalMainList: { data: [] },
  newWithdrawalToDeleteList: {
    withdrawal_activities: [],
  },
  createWithdrawalStatus: "CASH",
};

const withdrawalReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WITHDRAWALS_REQUEST:
      return {
        ...state,
        loading: true,
        withdrawals: {
          data: [],
          total: 0,
          count: 0,
          perPage: 0,
          page: 0,
          lastPage: 0,
          amount: 0,
        },
        createWithdrawal: {
          agreed: true,
          amount: "",
          method: "CASH",
          password: "",
        },

        showModal: false,
        openModal: false,
        closeModal: false,
        createWithdrawalStatus: "CASH",
      };
    case FETCH_WITHDRAWALS_SUCCESS:
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
        withdrawals: newData,
        withdrawalMainList: action.payload,
        list: "ALL",
        error: "",

        newWithdrawalToDeleteList: {
          withdrawal_activities: [],
        },
        showModal: false,
        openModal: false,
        closeModal: false,
        createWithdrawalStatus: "CASH",
      };
    case FETCH_WITHDRAWALS_FAILURE:
      swal.error(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
        showModal: false,
        openModal: false,
        closeModal: false,
        newWithdrawalToDeleteList: {
          withdrawal_activities: [],
        },
        createWithdrawalStatus: "CASH",
        createWithdrawal: {
          agreed: true,
          amount: "",
          method: "CASH",
          password: "",
        },
      };

    case FETCH_WITHDRAWAL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_WITHDRAWAL_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_WITHDRAWAL_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case CREATE_WITHDRAWAL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_WITHDRAWAL_SUCCESS:
      swal.success(action.payload);
      return {
        ...state,
        loading: false,
        error: "",
        showModal: false,
      };
    case CREATE_WITHDRAWAL_FAILURE:
      swal.showError(action.payload);
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };

    case UPDATE_WITHDRAWAL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_WITHDRAWAL_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    case UPDATE_WITHDRAWAL_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };

    case DELETE_WITHDRAWALS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_WITHDRAWALS_SUCCESS:
      swal.success(action.payload.message);
      return {
        ...state,
        loading: false,
        error: "",
        newWithdrawalToDeleteList: {
          withdrawal_activities: [],
        },
      };
    case DELETE_WITHDRAWALS_FAILURE:
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
    case CHANGE_WITHDRAWAL_AMOUNT:
      return {
        ...state,
        createWithdrawal: { ...state.createWithdrawal, amount: action.payload },
      };

    case CHANGE_WITHDRAWAL_CATEGORY:
      return {
        ...state,
        createWithdrawal: {
          ...state.createWithdrawal,
          category: action.payload,
        },
      };
    case CHANGE_WITHDRAWAL_IDS:
      return {
        ...state,
        createWithdrawal: {
          ...state.createWithdrawal,
          outcomes: action.payload,
        },
      };
    case FILTERED_PROCEEDING_LIST:
      let data = state.withdrawalMainList.data.filter(
        (o) => o.status == "WAITING"
      );
      return {
        ...state,
        withdrawals: { ...state.withdrawals, data: data },
        list: "WAITING",
      };
    case LIST_OF_WITHDRAWAL:
      return {
        ...state,
        withdrawals: {
          ...state.withdrawals,
          data: state.withdrawalMainList.data,
        },
        list: "ALL",
      };
    case FILTERED_HIT_LIST:
      let hit = state.withdrawalMainList.data.filter(
        (o) => o.status == "WINNING"
      );
      return {
        ...state,
        withdrawals: { ...state.withdrawals, data: hit },
        list: "WINNING",
      };
    case FILTERED_AESTHETIC_LIST:
      let defeated = state.withdrawalMainList.data.filter(
        (o) => o.status == "DEFEATED"
      );
      return {
        ...state,
        withdrawals: { ...state.withdrawals, data: defeated },
        list: "DEFEATED",
      };
    case CHECK_WITHDRAWAL_CERTAIN_ITEM:
      state.withdrawals.data.map((i) => {
        if (i.id == action.payload.id) {
          i.isChecked = action.payload.status;
        }
      });
      console.log(state.withdrawals.data);
      return {
        ...state,
        withdrawals: { ...state.withdrawals, data: state.withdrawals.data },
      };
    case LIST_OF_TODELETE_WITHDRAWALS:
      let newList = {
        withdrawal_activities: [],
      };

      state.withdrawals.data.map((o) => {
        if (o.isChecked == true) {
          let item = { id: "" + o.id };
          newList.withdrawal_activities.push(item);
        }
      });
      state.newWithdrawalToDeleteList = {
        ...state.newWithdrawalToDeleteList,
        withdrawal_activities: [...newList.withdrawal_activities],
      };
      console.log(newList.withdrawal_activities);
      return {
        ...state,
        withdrawals: { ...state.withdrawals, data: state.withdrawals.data },
        newWithdrawalToDeleteList: {
          ...state.newWithdrawalToDeleteList,
          withdrawal_activities: [
            ...state.newWithdrawalToDeleteList.withdrawal_activities,
          ],
        },
      };
    case SELECT_WITHDRAWAL_METHOD:
      return {
        ...state,
        createWithdrawalStatus: action.payload,
        createWithdrawal: { ...state.createWithdrawal, method: action.payload },
      };
    case CHANGE_CREATE_WITHDRAWAL_AMOUNT:
      return {
        ...state,
        createWithdrawal: {
          ...state.createWithdrawal,
          amount: action.payload.toString(),
        },
      };
    case INCREMENT_WITHDRAWAL_AMOUNT:
      let inc = Number(state.createWithdrawal.amount) + 1000;
      return {
        ...state,
        createWithdrawal: {
          ...state.createWithdrawal,
          amount: inc.toString(),
        },
      };
    case DECREMENT_WITHDRAWAL_AMOUNT:
      let dec = Number(state.createWithdrawal.amount) - 1000;
      return {
        ...state,
        createWithdrawal: {
          ...state.createWithdrawal,
          amount: dec.toString(),
        },
      };

    case ENTER_WITHDRAWAL_PASSWORD:
      return {
        ...state,
        createWithdrawal: {
          ...state.createWithdrawal,
          password: action.payload.toString(),
        },
      };
    case RESET_CREATE_WITHDRAWAL:
      return {
        ...state,
        createWithdrawal: {
          agreed: true,
          method: "CASH",
          amount: "",
          password: "",
        },
        createWithdrawalStatus: "CASH",
      };
    case CHECK_ALL_WITHDRAWALS:
      state.withdrawals.data.map((i) => {
        i.isChecked = true;
      });
      return {
        ...state,
        withdrawals: { ...state.withdrawals, data: state.withdrawals.data },
      };
    default:
      return state;
  }
};

export default withdrawalReducer;
