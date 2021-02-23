import * as types from "./depositTypes";
import sweetalert from "../../../plugins/sweetalert";
const swal = new sweetalert();
const initialState = {
  loading: false,
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
  deposits: {
    data: [],
    total: 0,
    count: 0,
    perPage: 0,
    page: 0,
    lastPage: 0,
    amount: 0,
    list_pages: [],
    pages: [],
    totalPages: [],
  },
};

const depositReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_DEPOSITS_REQUEST:
      return {
        ...state,
        loading: true,
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
    case types.FETCH_DEPOSITS_SUCCESS:
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
      console.log(state.deposits.list_pages);
      return {
        ...state,
        loading: false,
        deposits: {
          ...state.deposits,
          total: newData.total,
          data: newData.data,
          count: newData.count,
          perPage: newData.perPage,
          page: newData.page,
          lastPage: newData.lastPage,
        },
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
    case types.FETCH_DEPOSITS_FAILURE:
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

    case types.FETCH_DEPOSIT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_DEPOSIT_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.FETCH_DEPOSIT_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.CREATE_DEPOSIT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.CREATE_DEPOSIT_SUCCESS:
      swal.success(action.payload);
      return {
        ...state,
        loading: false,
        error: "",
        showModal: false,
      };
    case types.CREATE_DEPOSIT_FAILURE:
      swal.showError(action.payload);
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.UPDATE_DEPOSIT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.UPDATE_DEPOSIT_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.UPDATE_DEPOSIT_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.DELETE_DEPOSITS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.DELETE_DEPOSITS_SUCCESS:
      swal.success(action.payload.message);
      return {
        ...state,
        loading: false,
        error: "",
        newDepositToDeleteList: {
          deposit_activities: [],
        },
      };
    case types.DELETE_DEPOSITS_FAILURE:
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
    case types.CHANGE_DEPOSIT_AMOUNT:
      return {
        ...state,
        createDeposit: { ...state.createDeposit, amount: action.payload },
      };

    case types.CHANGE_DEPOSIT_CATEGORY:
      return {
        ...state,
        createDeposit: { ...state.createDeposit, category: action.payload },
      };
    case types.CHANGE_DEPOSIT_IDS:
      return {
        ...state,
        createDeposit: { ...state.createDeposit, outcomes: action.payload },
      };
    case types.FILTERED_PROCEEDING_LIST:
      let data = state.depositMainList.data.filter(
        (o) => o.status == "WAITING"
      );
      return {
        ...state,
        deposits: { ...state.deposits, data: data },
        list: "WAITING",
      };
    case types.LIST_OF_DEPOSIT:
      return {
        ...state,
        deposits: { ...state.deposits, data: state.depositMainList.data },
        list: "ALL",
      };
    case types.FILTERED_HIT_LIST:
      let hit = state.depositMainList.data.filter((o) => o.status == "WINNING");
      return {
        ...state,
        deposits: { ...state.deposits, data: hit },
        list: "WINNING",
      };
    case types.FILTERED_AESTHETIC_LIST:
      let defeated = state.depositMainList.data.filter(
        (o) => o.status == "DEFEATED"
      );
      return {
        ...state,
        deposits: { ...state.deposits, data: defeated },
        list: "DEFEATED",
      };
    case types.CHECK_DEPOSIT_CERTAIN_ITEM:
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
    case types.LIST_OF_TODELETE_DEPOSITS:
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
    case types.SELECT_DEPOSIT_METHOD:
      return {
        ...state,
        createDepositStatus: action.payload,
        createDeposit: { ...state.createDeposit, method: action.payload },
      };
    case types.CHANGE_CREATE_DEPOSIT_AMOUNT:
      return {
        ...state,
        createDeposit: {
          ...state.createDeposit,
          amount: action.payload.toString(),
        },
      };
    case types.INCREMENT_DEPOSIT_AMOUNT:
      let inc = Number(state.createDeposit.amount) + 1000;
      return {
        ...state,
        createDeposit: {
          ...state.createDeposit,
          amount: inc.toString(),
        },
      };
    case types.DECREMENT_DEPOSIT_AMOUNT:
      let dec = Number(state.createDeposit.amount) - 1000;
      return {
        ...state,
        createDeposit: {
          ...state.createDeposit,
          amount: dec.toString(),
        },
      };
    case types.RESET_CREATE_DEPOSIT:
      return {
        ...state,
        createDeposit: {
          ...state.createDeposit,
          amount: "0",
          method: "CASH",
        },
        createDepositStatus: "CASH",
      };
    case types.CHECK_ALL_DEPOSIT:
      state.deposits.data.map((i) => {
        i.isChecked = !i.isChecked;
      });
      return {
        ...state,
        deposits: { ...state.deposits, data: state.deposits.data },
      };

    case types.PAGINATION_REQUEST_DEPOSIT:
      return {
        ...state,
        loading: true,
      };

    case types.PAGINATION_SUCCESS_DEPOSIT:
      let paginationData = {
        amount: action.payload.data,
        count: action.payload.count,
        data: action.payload.data,
        lastPage: action.payload.lastPage,
        list_pages: state.deposits.list_pages,
        pages: state.deposits.pages,
        page: action.payload.page,
        perPage: action.payload.perPage,
        total: action.payload.total,
      };
      return {
        ...state,
        loading: false,
        deposits: action.payload,
      };
    case types.PAGINATION_FAILURE_DEPOSIT:
      swal.error(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case types.SET_DEPOSIT_PAGE:
      var total = state.deposits.total;
      state.deposits.list_pages = [];
      if (total != null) {
        for (let index = 1; index < Math.ceil(total / 5) + 1; index++) {
          state.deposits.list_pages.push(index);
        }
      }
      console.log(state.deposits.list_pages);
      return {
        ...state,
        deposits: {
          ...state.deposits,
          list_pages: state.deposits.list_pages,
          pages: state.deposits.pages,
          totalPages: state.deposits.list_pages,
        },
      };

    case types.NEXT_PAGE_DEPOSIT:
      console.log(action.payload);
      return {
        ...state,
        loading: true,
        deposits: {
          ...state.deposits,
          page: action.payload,
        },
      };

    case types.PREV_PAGE_DEPOSIT:
      return {
        ...state,
        loading: true,
        deposits: {
          ...state.deposits,
          page: action.payload,
        },
      };
    case types.CHANGE_DEPOSIT_PAGE:
      return {
        ...state,
        deposits: { ...state.deposits, page: action.payload },
      };
    default:
      return state;
  }
};

export default depositReducer;
