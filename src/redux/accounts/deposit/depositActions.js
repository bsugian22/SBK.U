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
import axios from "../../../plugins/axios";
import { camelize } from "../../../helpers/object";
export const fetchDepositsRequest = () => {
  return {
    type: FETCH_DEPOSITS_REQUEST,
  };
};

export const fetchDepositsSuccess = (Deposits) => {
  return {
    type: FETCH_DEPOSITS_SUCCESS,
    payload: Deposits,
  };
};

export const fetchDepositsFailure = (error) => {
  return {
    type: FETCH_DEPOSITS_FAILURE,
    payload: error,
  };
};

export const fetchDepositRequest = () => {
  return {
    type: FETCH_DEPOSIT_REQUEST,
  };
};

export const fetchDepositsuccess = (Deposit) => {
  return {
    type: FETCH_DEPOSIT_SUCCESS,
    payload: Deposit,
  };
};

export const fetchDepositFailure = (error) => {
  return {
    type: FETCH_DEPOSIT_FAILURE,
    payload: error,
  };
};

export const createDepositRequest = () => {
  return {
    type: CREATE_DEPOSIT_REQUEST,
  };
};

export const createDepositsuccess = () => {
  return {
    type: CREATE_DEPOSIT_SUCCESS,
  };
};

export const createDepositFailure = (error) => {
  return {
    type: CREATE_DEPOSIT_FAILURE,
    payload: error,
  };
};

export const updateDepositRequest = () => {
  return {
    type: UPDATE_DEPOSIT_REQUEST,
  };
};

export const updateDepositsuccess = (Deposit) => {
  return {
    type: UPDATE_DEPOSIT_SUCCESS,
    payload: Deposit,
  };
};

export const updateDepositFailure = (error) => {
  return {
    type: UPDATE_DEPOSIT_FAILURE,
    payload: error,
  };
};

export const deleteDepositsRequest = () => {
  return {
    type: DELETE_DEPOSITS_REQUEST,
  };
};

export const deleteDepositsSuccess = (Deposits) => {
  return {
    type: DELETE_DEPOSITS_SUCCESS,
    payload: Deposits,
  };
};

export const deleteDepositsFailure = (error) => {
  return {
    type: DELETE_DEPOSITS_FAILURE,
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

export const changeDepositCategory = (category) => {
  return {
    type: CHANGE_DEPOSIT_CATEGORY,
    payload: category,
  };
};

export const changeDepositAmount = (amount) => {
  return {
    type: CHANGE_DEPOSIT_AMOUNT,
    payload: amount,
  };
};

export const changeDepositIds = (ids) => {
  return {
    type: CHANGE_DEPOSIT_IDS,
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

export const allDeposits = () => {
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
export const setDeposits = (params) => {
  return (dispatch) => {
    dispatch(fetchDepositsRequest(0));
    axios
      .get(`/api/deposit`, {
        params: params,
      })
      .then((response) => {
        const deposits = camelize(response.data);
        dispatch(fetchDepositsSuccess(deposits));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchDepositsFailure(errorMsg));
      });
  };
};

export const fetchDeposit = () => {
  return (dispatch) => {
    dispatch(fetchDepositRequest);
    axios
      .get(`/api/`)
      .then((response) => {
        const Deposit = response.data;
        dispatch(fetchDepositsuccess(Deposit));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchDepositFailure(errorMsg));
      });
  };
};

export const createDepositAction = (Deposit) => {
  return (dispatch) => {
    let outcomes = Deposit.outcomes.split(",");
    let newList = [];
    outcomes.map((o) => {
      let item = { id: " " + o };
      newList.push(item);
    });

    Deposit.outcomes = [];
    Deposit.outcomes = [...newList];
    console.log(Deposit);
    dispatch(createDepositRequest);
    axios
      .post(`/api/Deposits`, Deposit)
      .then((response) => {
        dispatch(setDeposits());
        dispatch(createDepositsuccess());
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(createDepositailure(errorMsg));
      });
  };
};

export const updateDeposit = () => {
  return (dispatch) => {
    dispatch(updateDepositRequest);
    axios
      .get(`/api/`)
      .then((response) => {
        const Deposit = response.data;
        dispatch(updateDepositsuccess(Deposit));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(updateDepositFailure(errorMsg));
      });
  };
};

export const deleteDeposits = () => {
  return (dispatch) => {
    dispatch(deleteDepositsRequest);
    axios
      .get(`/api/`)
      .then((response) => {
        const Deposits = response.data;
        dispatch(deleteDepositsSuccess(Deposits));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(deleteDepositsFailure(errorMsg));
      });
  };
};
