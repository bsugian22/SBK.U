import * as types from "./exchangeTypes";
import axios from "../../../plugins/axios";
import { camelize } from "../../../helpers/object";
import { setLogout } from "../../user/userActions";
export const fetchExchangesRequest = () => {
  return {
    type: types.FETCH_EXCHANGES_REQUEST,
  };
};

export const fetchExchangesSuccess = (exchanges) => {
  return {
    type: types.FETCH_EXCHANGES_SUCCESS,
    payload: exchanges,
  };
};

export const fetchExchangesFailure = (error) => {
  return {
    type: types.FETCH_EXCHANGES_FAILURE,
    payload: error,
  };
};

export const fetchExchangeRequest = () => {
  return {
    type: types.FETCH_EXCHANGE_REQUEST,
  };
};

export const fetchExchangesuccess = (Exchange) => {
  return {
    type: types.FETCH_EXCHANGE_SUCCESS,
    payload: Exchange,
  };
};

export const fetchExchangeFailure = (error) => {
  return {
    type: types.FETCH_EXCHANGE_FAILURE,
    payload: error,
  };
};

export const createExchangeRequest = () => {
  return {
    type: types.CREATE_EXCHANGE_REQUEST,
  };
};

export const createExchangesuccess = (message) => {
  return {
    type: types.CREATE_EXCHANGE_SUCCESS,
    payload: message,
  };
};

export const createExchangeFailure = (error) => {
  return {
    type: types.CREATE_EXCHANGE_FAILURE,
    payload: error,
  };
};

export const updateExchangeRequest = () => {
  return {
    type: types.UPDATE_EXCHANGE_REQUEST,
  };
};

export const updateExchangesuccess = (Exchange) => {
  return {
    type: types.UPDATE_EXCHANGE_SUCCESS,
    payload: Exchange,
  };
};

export const updateExchangeFailure = (error) => {
  return {
    type: types.UPDATE_EXCHANGE_FAILURE,
    payload: error,
  };
};

export const deleteExchangesRequest = () => {
  return {
    type: types.DELETE_EXCHANGES_REQUEST,
  };
};

export const deleteExchangesSuccess = (Exchanges) => {
  return {
    type: types.DELETE_EXCHANGES_SUCCESS,
    payload: Exchanges,
  };
};

export const deleteExchangesFailure = (error) => {
  return {
    type: types.DELETE_EXCHANGES_FAILURE,
    payload: error,
  };
};
export const openModal = () => {
  return {
    type: types.OPEN_CREATE_MODAL,
  };
};
export const closeModal = () => {
  return {
    type: types.CLOSE_CREATE_MODAL,
  };
};

export const changeExchangeCategory = (category) => {
  return {
    type: types.CHANGE_EXCHANGE_CATEGORY,
    payload: category,
  };
};

export const changeExchangeAmount = (amount) => {
  return {
    type: types.CHANGE_EXCHANGE_AMOUNT,
    payload: amount,
  };
};

export const changeExchangeIds = (ids) => {
  return {
    type: types.CHANGE_EXCHANGE_IDS,
    payload: ids,
  };
};
export const filteredProceeding = () => {
  return {
    type: types.FILTERED_PROCEEDING_LIST,
  };
};

export const proceedingList = () => {
  return (dispatch) => {
    dispatch(filteredProceeding());
  };
};

export const allExchanges = () => {
  return (dispatch) => {
    dispatch(unfilteredAll());
  };
};

export const filteredHit = () => {
  return {
    type: types.FILTERED_HIT_LIST,
  };
};

export const filteredAesthetic = () => {
  return {
    type: types.FILTERED_AESTHETIC_LIST,
  };
};
export const aetheticList = () => {
  return (dispatch) => {
    dispatch(filteredAesthetic());
  };
};

export const hitList = () => {
  return (dispatch) => {
    dispatch(filteredHit());
  };
};

export const unfilteredAll = () => {
  return {
    type: types.LIST_OF_EXCHANGE,
  };
};
export const setExchanges = (params) => {
  return (dispatch) => {
    dispatch(fetchExchangesRequest(0));
    axios
      .get(`/api/exchange`, {
        params: params,
      })
      .then((response) => {
        const exchanges = camelize(response.data);
        console.log(exchanges);
        dispatch(fetchExchangesSuccess(exchanges));
        dispatch(setPagesOfExchange());
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchExchangesFailure(errorMsg));
        if (error.response.status == 401) {
          dispatch(setLogout());
        }
      });
  };
};

export const setPagesOfExchange = () => {
  return (dispatch) => {
    dispatch(setPageExchange());
  };
};

export const setPageExchange = () => {
  return {
    type: types.SET_EXCHANGE_PAGE,
  };
};

export const onClickPageExchange = (data) => {
  return (dispatch) => {
    dispatch(setExchanges(data));
  };
};

export const nextExchangePage = (page) => {
  return {
    type: types.NEXT_PAGE_EXCHANGE,
    payload: page,
  };
};

export const nextPageExchange = (data) => {
  var page_number = data.page;
  var last_page = data.list_pages[data.list_pages.length - 1];
  if (last_page >= page_number + 1) {
    return (dispatch) => {
      let page = page_number + 1;
      dispatch(nextExchangePage(page));
      dispatch(setExchanges({ page: page, per_page: data.per_page }));
    };
  }
};
export const prevExchangePage = (page) => {
  return {
    type: types.PREV_PAGE_EXCHANGE,
    payload: page,
  };
};

export const prevPageExchange = (data) => {
  var page_number = data.page;
  var first_page = data.list_pages[0];
  if (first_page <= page_number - 1) {
    return (dispatch) => {
      let page = page_number - 1;
      dispatch(prevExchangePage(page));
      dispatch(setExchanges({ page: page, per_page: data.per_page }));
    };
  }
};

export const fetchExchange = () => {
  return (dispatch) => {
    dispatch(fetchExchangeRequest);
    axios
      .get(`/api/`)
      .then((response) => {
        const Exchange = response.data;
        dispatch(fetchExchangesuccess(Exchange));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchExchangeFailure(errorMsg));
        if (error.response.status == 401) {
          dispatch(setLogout());
        }
      });
  };
};

export const createExchangeAction = (exchange) => {
  if (exchange.amount == 0) {
    exchange.amount = "";
  }
  return (dispatch) => {
    dispatch(createExchangeRequest());
    axios
      .post(`/api/exchange`, exchange)
      .then((response) => {
        dispatch(setExchanges());
        dispatch(createExchangesuccess(response.data.message));
      })
      .catch((error) => {
        const errorMsg = error.response.data;
        let exchangeErrorMessage = {
          html: ` ${errorMsg.message} <br />  ${
            errorMsg?.errors?.from ? errorMsg?.errors?.from[0] + " <br /> " : ""
          }
          ${errorMsg?.errors?.to ? errorMsg?.errors?.to[0] + " <br /> " : ""}
           ${errorMsg?.errors?.amount ? errorMsg?.errors?.amount[0] : ""}`,
          icon: "error",
          confirmButtonText: "확인",
        };
        dispatch(createExchangeFailure(exchangeErrorMessage));
      });
  };
};

export const updateExchange = () => {
  return (dispatch) => {
    dispatch(updateExchangeRequest);
    axios
      .get(`/api/`)
      .then((response) => {
        const Exchange = response.data;
        dispatch(updateExchangesuccess(Exchange));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(updateExchangeFailure(errorMsg));
        if (error.response.status == 401) {
          dispatch(setLogout());
        }
      });
  };
};

export const deleteExchanges = (list) => {
  return (dispatch) => {
    console.table(list);
    axios
      .delete(`/api/exchange`, { data: list })
      .then((response) => {
        const exchanges = response.data;
        dispatch(deleteExchangesSuccess(exchanges));
        dispatch(setExchanges());
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(deleteExchangesFailure(errorMsg));
        if (error.response.status == 401) {
          dispatch(setLogout());
        }
      });
  };
};

export const checkExchangeCertainItem = (data) => {
  return {
    type: types.CHECK_EXCHANGE_CERTAIN_ITEM,
    payload: data,
  };
};

export const listOfToDeleteExchanges = () => {
  return {
    type: types.LIST_OF_TODELETE_EXCHANGES,
  };
};

export const selectExchangeMethod = (status) => {
  return {
    type: types.SELECT_EXCHANGE_METHOD,
    payload: status,
  };
};

export const changeCreateExchangeAmount = (amount) => {
  return {
    type: types.CHANGE_CREATE_EXCHANGE_AMOUNT,
    payload: amount,
  };
};

export const incrementExchange = () => {
  return {
    type: types.INCREMENT_EXCHANGE_AMOUNT,
  };
};

export const decrementExchange = (message) => {
  return {
    type: types.DECREMENT_EXCHANGE_AMOUNT,
    payload: message,
  };
};

export const fromCashToCasinoExchange = () => {
  return {
    type: types.FROM_CASH_TO_CASINO_EXCHANGE,
  };
};

export const fromCasinoToCashExchange = () => {
  return {
    type: types.FROM_CASINO_TO_CASH_EXCHANGE,
  };
};

export const resetCreateExchange = () => {
  return {
    type: types.RESET_CREATE_EXCHANGE,
  };
};

export const selectAllExchange = () => {
  return {
    type: types.CHECK_ALL_EXCHANGE,
  };
};
