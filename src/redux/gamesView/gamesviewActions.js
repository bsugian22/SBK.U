import * as types from "./gamesviewTypes";
import axios from "axios";

export const fetchGamesviewsRequest = () => {
  return {
    type: types.FETCH_GAMESVIEWS_REQUEST,
  };
};

export const fetchGamesviewsSuccess = (gamesviews) => {
  return {
    type: types.FETCH_GAMESVIEWS_SUCCESS,
    payload: gamesviews,
  };
};

export const fetchGamesviewsFailure = (error) => {
  return {
    type: types.FETCH_GAMESVIEWS_FAILURE,
    payload: error,
  };
};

export const fetchGamesviewRequest = () => {
  return {
    type: types.FETCH_GAMESVIEW_REQUEST,
  };
};

export const fetchGamesviewSuccess = (gamesview) => {
  return {
    type: types.FETCH_GAMESVIEW_SUCCESS,
    payload: gamesview,
  };
};

export const fetchGamesviewFailure = (error) => {
  return {
    type: types.FETCH_GAMESVIEW_FAILURE,
    payload: error,
  };
};

export const createGamesviewRequest = () => {
  return {
    type: types.CREATE_GAMESVIEW_REQUEST,
  };
};

export const createGamesviewSuccess = (gamesview) => {
  return {
    type: types.CREATE_GAMESVIEW_SUCCESS,
    payload: gamesview,
  };
};

export const createGamesviewFailure = (error) => {
  return {
    type: types.CREATE_GAMESVIEW_FAILURE,
    payload: error,
  };
};

export const updateGamesviewRequest = () => {
  return {
    type: types.UPDATE_GAMESVIEW_REQUEST,
  };
};

export const updateGamesviewSuccess = (gamesview) => {
  return {
    type: types.UPDATE_GAMESVIEW_SUCCESS,
    payload: gamesview,
  };
};

export const updateGamesviewFailure = (error) => {
  return {
    type: types.UPDATE_GAMESVIEW_FAILURE,
    payload: error,
  };
};

export const deleteGamesviewsRequest = () => {
  return {
    type: types.DELETE_GAMESVIEWS_REQUEST,
  };
};

export const deleteGamesviewsSuccess = (gamesviews) => {
  return {
    type: types.DELETE_GAMESVIEWS_SUCCESS,
    payload: gamesviews,
  };
};

export const deleteGamesviewsFailure = (error) => {
  return {
    type: types.DELETE_GAMESVIEWS_FAILURE,
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