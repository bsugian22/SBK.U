import * as types from "./positionTypes";
import axios from "../../../plugins/axios";
import { camelize } from "../../../helpers/object";
export const fetchPositionsRequest = () => {
  return {
    type: types.FETCH_POSITIONS_REQUEST,
  };
};

export const fetchPositionsSuccess = (positions) => {
  return {
    type: types.FETCH_POSITIONS_SUCCESS,
    payload: positions,
  };
};

export const fetchPositionsFailure = (error) => {
  return {
    type: types.FETCH_POSITIONS_FAILURE,
    payload: error,
  };
};

export const fetchPositionRequest = () => {
  return {
    type: types.FETCH_POSITION_REQUEST,
  };
};

export const fetchPositionSuccess = (position) => {
  return {
    type: types.FETCH_POSITION_SUCCESS,
    payload: position,
  };
};

export const fetchPositionFailure = (error) => {
  return {
    type: types.FETCH_POSITION_FAILURE,
    payload: error,
  };
};

export const createPositionRequest = () => {
  return {
    type: types.CREATE_POSITION_REQUEST,
  };
};

export const createPositionSuccess = (message) => {
  return {
    type: types.CREATE_POSITION_SUCCESS,
    payload: message,
  };
};

export const createPositionFailure = (error) => {
  return {
    type: types.CREATE_POSITION_FAILURE,
    payload: error,
  };
};

export const updatePositionRequest = () => {
  return {
    type: types.UPDATE_POSITION_REQUEST,
  };
};

export const updatePositionSuccess = (position) => {
  return {
    type: types.UPDATE_POSITION_SUCCESS,
    payload: position,
  };
};

export const updatePositionFailure = (error) => {
  return {
    type: types.UPDATE_POSITION_FAILURE,
    payload: error,
  };
};

export const deletePositionsRequest = () => {
  return {
    type: types.DELETE_POSITIONS_REQUEST,
  };
};

export const deletePositionsSuccess = (positions) => {
  return {
    type: types.DELETE_POSITIONS_SUCCESS,
    payload: positions,
  };
};

export const deletePositionsFailure = (error) => {
  return {
    type: types.DELETE_POSITIONS_FAILURE,
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

export const changePositionCategory = (category) => {
  return {
    type: types.CHANGE_POSITION_CATEGORY,
    payload: category,
  };
};

export const changePositionAmount = (amount) => {
  return {
    type: types.CHANGE_POSITION_AMOUNT,
    payload: amount,
  };
};

export const changePositionIds = (ids) => {
  return {
    type: types.CHANGE_POSITION_IDS,
    payload: ids,
  };
};
export const filteredProceedingPosition = () => {
  return {
    type: types.FILTERED_PROCEEDING_LIST,
  };
};

export const proceedingList = () => {
  return (dispatch) => {
    dispatch(filteredProceeding());
  };
};

export const allPositions = () => {
  return (dispatch) => {
    dispatch(unfilteredAll());
  };
};

export const filteredHitPosition = () => {
  return {
    type: types.FILTERED_HIT_LIST,
  };
};

export const filteredAestheticPosition = () => {
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
    type: types.LIST_OF_POSITION,
  };
};
export const setPositions = (params) => {
  return (dispatch) => {
    dispatch(fetchPositionsRequest());
    axios
      .get(`/api/positions`, { params: params })
      .then((response) => {
        const positions = camelize(response.data);
        dispatch(fetchPositionsSuccess(positions));
        dispatch(setPagesOfPosition());
      })
      .catch((error) => {
        console.log(error);

        dispatch(fetchPositionsFailure(error.message));
      });
  };
};

export const setPagesOfPosition = () => {
  return (dispatch) => {
    dispatch(setPagePosition());
  };
};

export const setPagePosition = () => {
  return {
    type: types.SET_POSITION_PAGE,
  };
};

export const onClickPagePosition = (data) => {
  return (dispatch) => {
    dispatch(setPositions(data));
  };
};

export const nextPositionPage = (page) => {
  return {
    type: types.NEXT_PAGE_POSITION,
    payload: page,
  };
};

export const nextPagePosition = (data) => {
  var page_number = data.page;
  var last_page = data.list_pages[data.list_pages.length - 1];
  if (last_page >= page_number + 1) {
    return (dispatch) => {
      let page = page_number + 1;
      dispatch(nextPositionPage(page));
      dispatch(setPositions({ page: page, per_page: data.per_page }));
    };
  }
};
export const prevPositionPage = (page) => {
  return {
    type: types.PREV_PAGE_POSITION,
    payload: page,
  };
};

export const prevPagePosition = (data) => {
  var page_number = data.page;
  var first_page = data.list_pages[0];
  if (first_page <= page_number - 1) {
    return (dispatch) => {
      let page = page_number - 1;
      dispatch(prevPositionPage(page));
      dispatch(setPositions({ page: page, per_page: data.per_page }));
    };
  }
};

export const fetchPosition = () => {
  return (dispatch) => {
    dispatch(fetchPositionRequest);
    axios
      .get(`/api/`)
      .then((response) => {
        const position = response.data;
        dispatch(fetchPositionSuccess(position));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchPositionFailure(errorMsg));
      });
  };
};

export const createPositionAction = (position) => {
  return (dispatch) => {
    let outcomes = position.outcomes.split(",");
    let newList = {
      category: "",
      amount: "",
      outcomes: [],
    };
    outcomes.map((o) => {
      let item = { id: " " + o };
      newList.outcomes.push(item);
    });
    newList.category = position.category;
    newList.amount = position.amount;

    console.log(newList);
    dispatch(createPositionRequest());
    axios
      .post(`/api/positions`, newList)
      .then((response) => {
        dispatch(createPositionSuccess(response.data.message));
        dispatch(setPositions());
      })
      .catch((error) => {
        const errorMsg = error.response.data;
        console.log("error is" + error);
        let positionErrorMessage = {
          html: ` ${errorMsg.message} <br />  ${
            errorMsg?.errors?.category
              ? errorMsg?.errors?.category[0] + " <br /> "
              : ""
          }
            ${errorMsg?.errors?.amount ? errorMsg?.errors?.amount[0] : ""} ${
            errorMsg?.errors?.outcomes ? errorMsg?.errors?.outcomes[0] : ""
          }`,

          icon: "error",
          confirmButtonText: "확인",
        };
        let data = { message: positionErrorMessage, outcomes: outcomes };
        dispatch(createPositionFailure(data));
      });
  };
};

export const updatePosition = () => {
  return (dispatch) => {
    dispatch(updatePositionRequest);
    axios
      .get(`/api/`)
      .then((response) => {
        const position = response.data;
        dispatch(updatePositionSuccess(position));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(updatePositionFailure(errorMsg));
      });
  };
};

export const deletePositions = () => {
  return (dispatch) => {
    dispatch(deletePositionsRequest);
    axios
      .get(`/api/`)
      .then((response) => {
        const positions = response.data;
        dispatch(deletePositionsSuccess(positions));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(deletePositionsFailure(errorMsg));
      });
  };
};
