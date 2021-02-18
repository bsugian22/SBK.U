import {
  FETCH_EXCHANGES_REQUEST,
  FETCH_EXCHANGES_SUCCESS,
  FETCH_EXCHANGES_FAILURE,
  FETCH_EXCHANGE_REQUEST,
  FETCH_EXCHANGE_SUCCESS,
  FETCH_EXCHANGE_FAILURE,
  CREATE_EXCHANGE_REQUEST,
  CREATE_EXCHANGE_SUCCESS,
  CREATE_EXCHANGE_FAILURE,
  UPDATE_EXCHANGE_REQUEST,
  UPDATE_EXCHANGE_SUCCESS,
  UPDATE_EXCHANGE_FAILURE,
  DELETE_EXCHANGES_REQUEST,
  DELETE_EXCHANGES_SUCCESS,
  DELETE_EXCHANGES_FAILURE,
  OPEN_CREATE_MODAL,
  CLOSE_CREATE_MODAL,
  CHANGE_EXCHANGE_AMOUNT,
  CHANGE_EXCHANGE_CATEGORY,
  CHANGE_EXCHANGE_IDS,
  FILTERED_AESTHETIC_LIST,
  FILTERED_HIT_LIST,
  FILTERED_PROCEEDING_LIST,
  LIST_OF_EXCHANGE,
  CHECK_EXCHANGE_CERTAIN_ITEM,
  LIST_OF_TODELETE_EXCHANGES,
  SELECT_EXCHANGE_METHOD,
  CHANGE_CREATE_EXCHANGE_AMOUNT,
  INCREMENT_EXCHANGE_AMOUNT,
  DECREMENT_EXCHANGE_AMOUNT,
  FROM_CASH_TO_CASINO_EXCHANGE,
  FROM_CASINO_TO_CASH_EXCHANGE,
  RESET_CREATE_EXCHANGE,
  CHECK_ALL_EXCHANGE,
} from "./exchangeTypes";
import axios from "../../../plugins/axios";
import { camelize } from "../../../helpers/object";
export const fetchExchangesRequest = () => {
  return {
    type: FETCH_EXCHANGES_REQUEST,
  };
};

export const fetchExchangesSuccess = (exchanges) => {
  return {
    type: FETCH_EXCHANGES_SUCCESS,
    payload: exchanges,
  };
};

export const fetchExchangesFailure = (error) => {
  return {
    type: FETCH_EXCHANGES_FAILURE,
    payload: error,
  };
};

export const fetchExchangeRequest = () => {
  return {
    type: FETCH_EXCHANGE_REQUEST,
  };
};

export const fetchExchangesuccess = (Exchange) => {
  return {
    type: FETCH_EXCHANGE_SUCCESS,
    payload: Exchange,
  };
};

export const fetchExchangeFailure = (error) => {
  return {
    type: FETCH_EXCHANGE_FAILURE,
    payload: error,
  };
};

export const createExchangeRequest = () => {
  return {
    type: CREATE_EXCHANGE_REQUEST,
  };
};

export const createExchangesuccess = (message) => {
  return {
    type: CREATE_EXCHANGE_SUCCESS,
    payload: message,
  };
};

export const createExchangeFailure = (error) => {
  return {
    type: CREATE_EXCHANGE_FAILURE,
    payload: error,
  };
};

export const updateExchangeRequest = () => {
  return {
    type: UPDATE_EXCHANGE_REQUEST,
  };
};

export const updateExchangesuccess = (Exchange) => {
  return {
    type: UPDATE_EXCHANGE_SUCCESS,
    payload: Exchange,
  };
};

export const updateExchangeFailure = (error) => {
  return {
    type: UPDATE_EXCHANGE_FAILURE,
    payload: error,
  };
};

export const deleteExchangesRequest = () => {
  return {
    type: DELETE_EXCHANGES_REQUEST,
  };
};

export const deleteExchangesSuccess = (Exchanges) => {
  return {
    type: DELETE_EXCHANGES_SUCCESS,
    payload: Exchanges,
  };
};

export const deleteExchangesFailure = (error) => {
  return {
    type: DELETE_EXCHANGES_FAILURE,
    payload: error,
  };
};
export const openModal = () => {
  return {
    type: OPEN_CREATE_MODAL,
  };
};
export const closeModal = () => {
  return {
    type: CLOSE_CREATE_MODAL,
  };
};

export const changeExchangeCategory = (category) => {
  return {
    type: CHANGE_EXCHANGE_CATEGORY,
    payload: category,
  };
};

export const changeExchangeAmount = (amount) => {
  return {
    type: CHANGE_EXCHANGE_AMOUNT,
    payload: amount,
  };
};

export const changeExchangeIds = (ids) => {
  return {
    type: CHANGE_EXCHANGE_IDS,
    payload: ids,
  };
};
export const filteredProceeding = () => {
  return {
    type: FILTERED_PROCEEDING_LIST,
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
    type: FILTERED_HIT_LIST,
  };
};

export const filteredAesthetic = () => {
  return {
    type: FILTERED_AESTHETIC_LIST,
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
    type: LIST_OF_DEPOSIT,
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
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchExchangesFailure(errorMsg));
      });
  };
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
      });
  };
};

export const checkExchangeCertainItem = (data) => {
  return {
    type: CHECK_EXCHANGE_CERTAIN_ITEM,
    payload: data,
  };
};

export const listOfToDeleteExchanges = () => {
  return {
    type: LIST_OF_TODELETE_EXCHANGES,
  };
};

export const selectExchangeMethod = (status) => {
  return {
    type: SELECT_EXCHANGE_METHOD,
    payload: status,
  };
};

export const changeCreateExchangeAmount = (amount) => {
  return {
    type: CHANGE_CREATE_EXCHANGE_AMOUNT,
    payload: amount,
  };
};

export const incrementExchange = () => {
  return {
    type: INCREMENT_EXCHANGE_AMOUNT,
  };
};

export const decrementExchange = (message) => {
  return {
    type: DECREMENT_EXCHANGE_AMOUNT,
    payload: message,
  };
};

export const fromCashToCasinoExchange = () => {
  return {
    type: FROM_CASH_TO_CASINO_EXCHANGE,
  };
};

export const fromCasinoToCashExchange = () => {
  return {
    type: FROM_CASINO_TO_CASH_EXCHANGE,
  };
};

export const resetCreateExchange = () => {
  return {
    type: RESET_CREATE_EXCHANGE,
  };
};

export const selectAllExchange = () => {
  return {
    type: CHECK_ALL_EXCHANGE,
  };
};
