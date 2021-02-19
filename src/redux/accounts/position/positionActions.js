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
export const setPositions = () => {
  return (dispatch) => {
    dispatch(fetchPositionsRequest());
    axios
      .get(`/api/positions`)
      .then((response) => {
        const positions = camelize(response.data);
        dispatch(fetchPositionsSuccess(positions));
      })
      .catch((error) => {
        console.log(error);

        dispatch(fetchPositionsFailure(error.message));
      });
  };
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
    let newList = [];
    outcomes.map((o) => {
      let item = { id: " " + o };
      newList.push(item);
    });

    position.outcomes = [];
    position.outcomes = [...newList];
    console.log(position);
    dispatch(createPositionRequest());
    axios
      .post(`/api/positions`, position)
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
