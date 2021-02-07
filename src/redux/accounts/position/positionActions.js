import {
  FETCH_POSITIONS_REQUEST,
  FETCH_POSITIONS_SUCCESS,
  FETCH_POSITIONS_FAILURE,
  FETCH_POSITION_REQUEST,
  FETCH_POSITION_SUCCESS,
  FETCH_POSITION_FAILURE,
  CREATE_POSITION_REQUEST,
  CREATE_POSITION_SUCCESS,
  CREATE_POSITION_FAILURE,
  UPDATE_POSITION_REQUEST,
  UPDATE_POSITION_SUCCESS,
  UPDATE_POSITION_FAILURE,
  DELETE_POSITIONS_REQUEST,
  DELETE_POSITIONS_SUCCESS,
  DELETE_POSITIONS_FAILURE,
  OPEN_CREATE_MODAL,
  CLOSE_CREATE_MODAL,
  CHANGE_POSITION_AMOUNT,
  CHANGE_POSITION_CATEGORY,
  CHANGE_POSITION_IDS,
  FILTERED_AESTHETIC_LIST,
  FILTERED_HIT_LIST,
  FILTERED_PROCEEDING_LIST,
  LIST_OF_POSITION,
} from "./positionTypes";
import axios from "../../../plugins/axios";
import { camelize } from "../../../helpers/object";
export const fetchPositionsRequest = () => {
  return {
    type: FETCH_POSITIONS_REQUEST,
  };
};

export const fetchPositionsSuccess = (positions) => {
  return {
    type: FETCH_POSITIONS_SUCCESS,
    payload: positions,
  };
};

export const fetchPositionsFailure = (error) => {
  return {
    type: FETCH_POSITIONS_FAILURE,
    payload: error,
  };
};

export const fetchPositionRequest = () => {
  return {
    type: FETCH_POSITION_REQUEST,
  };
};

export const fetchPositionSuccess = (position) => {
  return {
    type: FETCH_POSITION_SUCCESS,
    payload: position,
  };
};

export const fetchPositionFailure = (error) => {
  return {
    type: FETCH_POSITION_FAILURE,
    payload: error,
  };
};

export const createPositionRequest = () => {
  return {
    type: CREATE_POSITION_REQUEST,
  };
};

export const createPositionSuccess = () => {
  return {
    type: CREATE_POSITION_SUCCESS,
  };
};

export const createPositionFailure = (error) => {
  return {
    type: CREATE_POSITION_FAILURE,
    payload: error,
  };
};

export const updatePositionRequest = () => {
  return {
    type: UPDATE_POSITION_REQUEST,
  };
};

export const updatePositionSuccess = (position) => {
  return {
    type: UPDATE_POSITION_SUCCESS,
    payload: position,
  };
};

export const updatePositionFailure = (error) => {
  return {
    type: UPDATE_POSITION_FAILURE,
    payload: error,
  };
};

export const deletePositionsRequest = () => {
  return {
    type: DELETE_POSITIONS_REQUEST,
  };
};

export const deletePositionsSuccess = (positions) => {
  return {
    type: DELETE_POSITIONS_SUCCESS,
    payload: positions,
  };
};

export const deletePositionsFailure = (error) => {
  return {
    type: DELETE_POSITIONS_FAILURE,
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

export const changePositionCategory = (category) => {
  return {
    type: CHANGE_POSITION_CATEGORY,
    payload: category,
  };
};

export const changePositionAmount = (amount) => {
  return {
    type: CHANGE_POSITION_AMOUNT,
    payload: amount,
  };
};

export const changePositionIds = (ids) => {
  return {
    type: CHANGE_POSITION_IDS,
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

export const allPositions = () => {
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
    type: LIST_OF_POSITION,
  };
};
export const setPositions = () => {
  return (dispatch) => {
    dispatch(fetchPositionsRequest);
    axios
      .get(`/api/positions`)
      .then((response) => {
        const positions = camelize(response.data);
        dispatch(fetchPositionsSuccess(positions));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchPositionsFailure(errorMsg));
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
    dispatch(createPositionRequest);
    axios
      .post(`/api/positions`, position)
      .then((response) => {
        dispatch(setPositions());
        dispatch(createPositionSuccess());
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(createPositionailure(errorMsg));
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
