import * as types from "./withdrawalTypes";
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
    list_pages: [],
    pages: [],
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
    case types.FETCH_WITHDRAWALS_REQUEST:
      return {
        ...state,
        loading: true,
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
    case types.FETCH_WITHDRAWALS_SUCCESS:
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

      console.log(newData);
      return {
        ...state,
        loading: false,
        withdrawals: {
          ...state.withdrawals,
          total: newData.total,
          data: newData.data,
          count: newData.count,
          perPage: newData.perPage,
          page: newData.page,
          lastPage: newData.lastPage,
        },
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
    case types.FETCH_WITHDRAWALS_FAILURE:
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

    case types.FETCH_WITHDRAWAL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_WITHDRAWAL_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.FETCH_WITHDRAWAL_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.CREATE_WITHDRAWAL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.CREATE_WITHDRAWAL_SUCCESS:
      swal.success(action.payload);
      return {
        ...state,
        loading: false,
        error: "",
        showModal: false,
      };
    case types.CREATE_WITHDRAWAL_FAILURE:
      swal.showError(action.payload);
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.UPDATE_WITHDRAWAL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.UPDATE_WITHDRAWAL_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.UPDATE_WITHDRAWAL_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.DELETE_WITHDRAWALS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.DELETE_WITHDRAWALS_SUCCESS:
      swal.success(action.payload.message);
      return {
        ...state,
        loading: false,
        error: "",
        newWithdrawalToDeleteList: {
          withdrawal_activities: [],
        },
      };
    case types.DELETE_WITHDRAWALS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.OPEN_CREATE_MODAL:
      return {
        ...state,
        loading: false,
        error: "",
        showModal: true,
      };
    case types.CLOSE_CREATE_MODAL:
      return {
        ...state,
        loading: false,
        error: "",
        showModal: false,
      };
    case types.CHANGE_WITHDRAWAL_AMOUNT:
      return {
        ...state,
        createWithdrawal: { ...state.createWithdrawal, amount: action.payload },
      };

    case types.CHANGE_WITHDRAWAL_CATEGORY:
      return {
        ...state,
        createWithdrawal: {
          ...state.createWithdrawal,
          category: action.payload,
        },
      };
    case types.CHANGE_WITHDRAWAL_IDS:
      return {
        ...state,
        createWithdrawal: {
          ...state.createWithdrawal,
          outcomes: action.payload,
        },
      };
    case types.FILTERED_PROCEEDING_LIST:
      let data = state.withdrawalMainList.data.filter(
        (o) => o.status == "WAITING"
      );
      return {
        ...state,
        withdrawals: { ...state.withdrawals, data: data },
        list: "WAITING",
      };
    case types.LIST_OF_WITHDRAWAL:
      return {
        ...state,
        withdrawals: {
          ...state.withdrawals,
          data: state.withdrawalMainList.data,
        },
        list: "ALL",
      };
    case types.FILTERED_HIT_LIST:
      let hit = state.withdrawalMainList.data.filter(
        (o) => o.status == "WINNING"
      );
      return {
        ...state,
        withdrawals: { ...state.withdrawals, data: hit },
        list: "WINNING",
      };
    case types.FILTERED_AESTHETIC_LIST:
      let defeated = state.withdrawalMainList.data.filter(
        (o) => o.status == "DEFEATED"
      );
      return {
        ...state,
        withdrawals: { ...state.withdrawals, data: defeated },
        list: "DEFEATED",
      };
    case types.CHECK_WITHDRAWAL_CERTAIN_ITEM:
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
    case types.LIST_OF_TODELETE_WITHDRAWALS:
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
    case types.SELECT_WITHDRAWAL_METHOD:
      return {
        ...state,
        createWithdrawalStatus: action.payload,
        createWithdrawal: { ...state.createWithdrawal, method: action.payload },
      };
    case types.CHANGE_CREATE_WITHDRAWAL_AMOUNT:
      return {
        ...state,
        createWithdrawal: {
          ...state.createWithdrawal,
          amount: action.payload.toString(),
        },
      };
    case types.INCREMENT_WITHDRAWAL_AMOUNT:
      let inc = Number(state.createWithdrawal.amount) + 1000;
      return {
        ...state,
        createWithdrawal: {
          ...state.createWithdrawal,
          amount: inc.toString(),
        },
      };
    case types.DECREMENT_WITHDRAWAL_AMOUNT:
      let dec = Number(state.createWithdrawal.amount) - 1000;
      return {
        ...state,
        createWithdrawal: {
          ...state.createWithdrawal,
          amount: dec.toString(),
        },
      };

    case types.ENTER_WITHDRAWAL_PASSWORD:
      return {
        ...state,
        createWithdrawal: {
          ...state.createWithdrawal,
          password: action.payload.toString(),
        },
      };
    case types.RESET_CREATE_WITHDRAWAL:
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
    case types.CHECK_ALL_WITHDRAWALS:
      state.withdrawals.data.map((i) => {
        i.isChecked = true;
      });
      return {
        ...state,
        withdrawals: { ...state.withdrawals, data: state.withdrawals.data },
      };

    case types.SET_WITHDRAWAL_PAGE:
      var total = state.withdrawals.total;
      state.withdrawals.list_pages = [];
      if (total != null) {
        for (let index = 1; index < Math.ceil(total / 5) + 1; index++) {
          state.withdrawals.list_pages.push(index);
        }
      }
      console.log(state.withdrawals.list_pages);
      return {
        ...state,
        withdrawals: {
          ...state.withdrawals,
          list_pages: state.withdrawals.list_pages,
          pages: state.withdrawals.pages,
        },
      };

    case types.NEXT_PAGE_WITHDRAWAL:
      console.log(action.payload);
      return {
        ...state,
        loading: true,
        withdrawals: {
          ...state.withdrawals,
          page: action.payload,
        },
      };

    case types.PREV_PAGE_WITHDRAWAL:
      return {
        ...state,
        loading: true,
        withdrawals: {
          ...state.withdrawals,
          page: action.payload,
        },
      };
    case types.CHANGE_WITHDRAWAL_PAGE:
      return {
        ...state,
        withdrawals: { ...state.withdrawals, page: action.payload },
      };

    default:
      return state;
  }
};

export default withdrawalReducer;
