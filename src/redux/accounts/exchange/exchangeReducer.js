import * as types from "./exchangeTypes";
import sweetalert from "../../../plugins/sweetalert";
const swal = new sweetalert();
const initialState = {
  loading: false,
  error: "",
  createExchange: {
    agreed: true,
    amount: "0",
    from: "cash",
    to: "casino _cash",
  },
  showModal: false,
  openModal: false,
  closeModal: false,
  list: "",
  exchangeMainList: { data: [] },
  newExchangeToDeleteList: {
    exchange_activities: [],
  },
  createExchangeStatus: "cash",
  exchanges: {
    data: [],
    total: 0,
    count: 0,
    perPage: 0,
    page: 0,
    lastPage: 0,
    amount: 0,
  },
};

const exchangeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_EXCHANGES_REQUEST:
      return {
        ...state,
        loading: true,
        createExchange: {
          agreed: true,
          amount: "0",
          from: "cash",
          to: "casino_cash",
        },
        exchanges: {
          data: [],
          total: 0,
          count: 0,
          perPage: 0,
          page: 0,
          lastPage: 0,
          amount: 0,
        },
        showModal: false,
        openModal: false,
        closeModal: false,
        createExchangeStatus: "cash",
      };
    case types.FETCH_EXCHANGES_SUCCESS:
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
        exchanges: newData,
        exchangeMainList: action.payload,
        list: "ALL",
        error: "",

        newExchangeToDeleteList: {
          exchange_activities: [],
        },
        showModal: false,
        openModal: false,
        closeModal: false,
        createExchangeStatus: "cash",
      };
    case types.FETCH_EXCHANGES_FAILURE:
      swal.error(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
        showModal: false,
        openModal: false,
        closeModal: false,
        newExchangeToDeleteList: {
          exchange_activities: [],
        },
        createExchangeStatus: "cash",
        createExchange: {
          agreed: true,
          amount: "0",
          from: "cash",
          to: "casino_cash",
        },
      };

    case types.FETCH_EXCHANGE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_EXCHANGE_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.FETCH_EXCHANGE_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.CREATE_EXCHANGE_REQUEST:
      return {
        ...state,
        loading: true,
        createExchange: {
          ...state.createExchange,
          from: state.createExchange.from,
          to: state.createExchange.to,
        },
      };
    case types.CREATE_EXCHANGE_SUCCESS:
      swal.success(action.payload);
      return {
        ...state,
        loading: false,
        error: "",
        showModal: false,
      };
    case types.CREATE_EXCHANGE_FAILURE:
      swal.showError(action.payload);
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.UPDATE_EXCHANGE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.UPDATE_EXCHANGE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.UPDATE_EXCHANGE_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.DELETE_EXCHANGES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.DELETE_EXCHANGES_SUCCESS:
      swal.success(action.payload.message);
      return {
        ...state,
        loading: false,
        error: "",
        newExchangeToDeleteList: {
          exchange_activities: [],
        },
      };
    case types.DELETE_EXCHANGES_FAILURE:
      swal.showError(action.payload);
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
    case types.CHANGE_EXCHANGE_AMOUNT:
      return {
        ...state,
        createExchange: { ...state.createExchange, amount: action.payload },
      };

    case types.CHANGE_EXCHANGE_CATEGORY:
      return {
        ...state,
        createExchange: { ...state.createExchange, category: action.payload },
      };
    case types.CHANGE_EXCHANGE_IDS:
      return {
        ...state,
        createExchange: { ...state.createExchange, outcomes: action.payload },
      };
    case types.FILTERED_PROCEEDING_LIST:
      let data = state.exchangeMainList.data.filter(
        (o) => o.status == "WAITING"
      );
      return {
        ...state,
        exchanges: { ...state.exchanges, data: data },
        list: "WAITING",
      };
    case types.LIST_OF_EXCHANGE:
      return {
        ...state,
        exchanges: { ...state.exchanges, data: state.exchangeMainList.data },
        list: "ALL",
      };
    case types.FILTERED_HIT_LIST:
      let hit = state.exchangeMainList.data.filter(
        (o) => o.status == "WINNING"
      );
      return {
        ...state,
        exchanges: { ...state.exchanges, data: hit },
        list: "WINNING",
      };
    case types.FILTERED_AESTHETIC_LIST:
      let defeated = state.exchangeMainList.data.filter(
        (o) => o.status == "DEFEATED"
      );
      return {
        ...state,
        exchanges: { ...state.exchanges, data: defeated },
        list: "DEFEATED",
      };
    case types.CHECK_EXCHANGE_CERTAIN_ITEM:
      state.exchanges.data.map((i) => {
        if (i.id == action.payload.id) {
          i.isChecked = action.payload.status;
        }
      });
      console.log(state.exchanges.data);
      return {
        ...state,
        exchanges: { ...state.exchanges, data: state.exchanges.data },
      };
    case types.LIST_OF_TODELETE_EXCHANGES:
      let newList = {
        exchange_activities: [],
      };

      state.exchanges.data.map((o) => {
        if (o.isChecked == true) {
          let item = { id: "" + o.id };
          newList.exchange_activities.push(item);
        }
      });

      state.newExchangeToDeleteList = {
        ...state.newExchangeToDeleteList,
        exchange_activities: [...newList.exchange_activities],
      };

      console.log(newList.exchange_activities);
      return {
        ...state,
        exchanges: { ...state.exchanges, data: state.exchanges.data },
        newExchangeToDeleteList: {
          ...state.newExchangeToDeleteList,
          exchange_activities: [
            ...state.newExchangeToDeleteList.exchange_activities,
          ],
        },
      };
    case types.SELECT_EXCHANGE_METHOD:
      return {
        ...state,
        createExchangeStatus: action.payload,
      };
    case types.CHANGE_CREATE_EXCHANGE_AMOUNT:
      return {
        ...state,
        createExchange: {
          ...state.createExchange,
          amount: action.payload.toString(),
        },
      };
    case types.INCREMENT_EXCHANGE_AMOUNT:
      let inc = Number(state.createExchange.amount) + 1000;
      return {
        ...state,
        createExchange: {
          ...state.createExchange,
          amount: inc.toString(),
        },
      };
    case types.DECREMENT_EXCHANGE_AMOUNT:
      let dec = Number(state.createExchange.amount) - 1000;
      return {
        ...state,
        createExchange: {
          ...state.createExchange,
          amount: dec.toString(),
        },
      };
    case types.FROM_CASH_TO_CASINO_EXCHANGE:
      return {
        ...state,
        createExchange: {
          ...state.createExchange,
          from: "cash",
          to: "casino_cash",
        },
      };
    case types.FROM_CASINO_TO_CASH_EXCHANGE:
      return {
        ...state,
        createExchange: {
          ...state.createExchange,
          from: "casino_cash",
          to: "cash",
        },
      };
    case types.RESET_CREATE_EXCHANGE:
      return {
        ...state,
        createExchange: {
          agreed: true,
          amount: "0",
          from: "cash",
          to: "casino_cash",
        },
        createExchangeStatus: "cash",
      };
    case types.CHECK_ALL_EXCHANGE:
      state.exchanges.data.map((i) => {
        i.isChecked = true;
      });
      return {
        ...state,
        exchanges: { ...state.exchanges, data: state.exchanges.data },
      };
    default:
      return state;
  }
};

export default exchangeReducer;
