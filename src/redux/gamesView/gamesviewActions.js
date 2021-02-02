import {
  FETCH_GAMESVIEWS_REQUEST,
  FETCH_GAMESVIEWS_SUCCESS,
  FETCH_GAMESVIEWS_FAILURE,
  FETCH_GAMESVIEW_REQUEST,
  FETCH_GAMESVIEW_SUCCESS,
  FETCH_GAMESVIEW_FAILURE,
  CREATE_GAMESVIEW_REQUEST,
  CREATE_GAMESVIEW_SUCCESS,
  CREATE_GAMESVIEW_FAILURE,
  UPDATE_GAMESVIEW_REQUEST,
  UPDATE_GAMESVIEW_SUCCESS,
  UPDATE_GAMESVIEW_FAILURE,
  DELETE_GAMESVIEWS_REQUEST,
  DELETE_GAMESVIEWS_SUCCESS,
  DELETE_GAMESVIEWS_FAILURE,
} from "./gamesviewTypes";
import axios from "axios";

export const fetchGamesviewsRequest = () => {
  return {
    type: FETCH_GAMESVIEWS_REQUEST,
  };
};

export const fetchGamesviewsSuccess = (gamesviews) => {
  return {
    type: FETCH_GAMESVIEWS_SUCCESS,
    payload: gamesviews,
  };
};

export const fetchGamesviewsFailure = (error) => {
  return {
    type: FETCH_GAMESVIEWS_FAILURE,
    payload: error,
  };
};

export const fetchGamesviewRequest = () => {
  return {
    type: FETCH_GAMESVIEW_REQUEST,
  };
};

export const fetchGamesviewSuccess = (gamesview) => {
  return {
    type: FETCH_GAMESVIEW_SUCCESS,
    payload: gamesview,
  };
};

export const fetchGamesviewFailure = (error) => {
  return {
    type: FETCH_GAMESVIEW_FAILURE,
    payload: error,
  };
};

export const createGamesviewRequest = () => {
  return {
    type: CREATE_GAMESVIEW_REQUEST,
  };
};

export const createGamesviewSuccess = (gamesview) => {
  return {
    type: CREATE_GAMESVIEW_SUCCESS,
    payload: gamesview,
  };
};

export const createGamesviewFailure = (error) => {
  return {
    type: CREATE_GAMESVIEW_FAILURE,
    payload: error,
  };
};

export const updateGamesviewRequest = () => {
  return {
    type: UPDATE_GAMESVIEW_REQUEST,
  };
};

export const updateGamesviewSuccess = (gamesview) => {
  return {
    type: UPDATE_GAMESVIEW_SUCCESS,
    payload: gamesview,
  };
};

export const updateGamesviewFailure = (error) => {
  return {
    type: UPDATE_GAMESVIEW_FAILURE,
    payload: error,
  };
};

export const deleteGamesviewsRequest = () => {
  return {
    type: DELETE_GAMESVIEWS_REQUEST,
  };
};

export const deleteGamesviewsSuccess = (gamesviews) => {
  return {
    type: DELETE_GAMESVIEWS_SUCCESS,
    payload: gamesviews,
  };
};

export const deleteGamesviewsFailure = (error) => {
  return {
    type: DELETE_GAMESVIEWS_FAILURE,
    payload: error,
  };
};

export const fetchGamesviews = () => {
    return (dispatch) => {
      dispatch(fetchGamesviewsRequest);
      await axios.get(`/api/`)
                  .then(response => {
                    const gamesviews = response.data;
                    dispatch(fetchGamesviewsSuccess(gamesviews))
              }).catch(error => {
                    const errorMsg = error.message;
                    dispatch(fetchGamesviewsFailure(errorMsg))
              })
      };
};

export const fetchGamesview = () => {
  return (dispatch) => {
    dispatch(fetchGamesviewRequest);
    await axios.get(`/api/`)
                .then(response => {
                  const gamesview = response.data;
                  dispatch(fetchGamesviewSuccess(gamesview))
            }).catch(error => {
                  const errorMsg = error.message;
                  dispatch(fetchGamesviewFailure(errorMsg))
            })
    };
};

export const createGamesview = () => {
  return (dispatch) => {
    dispatch(createGamesviewRequest);
    await axios.get(`/api/`)
                .then(response => {
                  const gamesview = response.data;
                  dispatch(createGamesviewSuccess(gamesview))
            }).catch(error => {
                  const errorMsg = error.message;
                  dispatch(createGamesviewFailure(errorMsg))
            })
    };
};

export const updateGamesview = () => {
  return (dispatch) => {
    dispatch(updateGamesviewRequest);
    await axios.get(`/api/`)
                .then(response => {
                  const gamesview = response.data;
                  dispatch(updateGamesviewSuccess(gamesview))
            }).catch(error => {
                  const errorMsg = error.message;
                  dispatch(updateGamesviewFailure(errorMsg))
            })
    };
};

export const deleteGamesviews = () => {
  return (dispatch) => {
    dispatch(deleteGamesviewsRequest);
    await axios.get(`/api/`)
                .then(response => {
                  const gamesviews = response.data;
                  dispatch(deleteGamesviewsSuccess(gamesviews))
            }).catch(error => {
                  const errorMsg = error.message;
                  dispatch(deleteGamesviewsFailure(errorMsg))
            })
    };
};