import * as types from "./swipermainTypes";
import axios from "axios";

export const fetchSwipermainsRequest = () => {
  return {
    type: types.FETCH_SWIPERMAINS_REQUEST,
  };
};

export const fetchSwipermainsSuccess = (swipermains) => {
  return {
    type: types.FETCH_SWIPERMAINS_SUCCESS,
    payload: swipermains,
  };
};

export const fetchSwipermainsFailure = (error) => {
  return {
    type: types.FETCH_SWIPERMAINS_FAILURE,
    payload: error,
  };
};

export const fetchSwipermainRequest = () => {
  return {
    type: types.FETCH_SWIPERMAIN_REQUEST,
  };
};

export const fetchSwipermainSuccess = (swipermain) => {
  return {
    type: types.FETCH_SWIPERMAIN_SUCCESS,
    payload: swipermain,
  };
};

export const fetchSwipermainFailure = (error) => {
  return {
    type: types.FETCH_SWIPERMAIN_FAILURE,
    payload: error,
  };
};

export const createSwipermainRequest = () => {
  return {
    type: types.CREATE_SWIPERMAIN_REQUEST,
  };
};

export const createSwipermainSuccess = (swipermain) => {
  return {
    type: types.CREATE_SWIPERMAIN_SUCCESS,
    payload: swipermain,
  };
};

export const createSwipermainFailure = (error) => {
  return {
    type: types.CREATE_SWIPERMAIN_FAILURE,
    payload: error,
  };
};

export const updateSwipermainRequest = () => {
  return {
    type: types.UPDATE_SWIPERMAIN_REQUEST,
  };
};

export const updateSwipermainSuccess = (swipermain) => {
  return {
    type: types.UPDATE_SWIPERMAIN_SUCCESS,
    payload: swipermain,
  };
};

export const updateSwipermainFailure = (error) => {
  return {
    type: types.UPDATE_SWIPERMAIN_FAILURE,
    payload: error,
  };
};

export const deleteSwipermainsRequest = () => {
  return {
    type: types.DELETE_SWIPERMAINS_REQUEST,
  };
};

export const deleteSwipermainsSuccess = (swipermains) => {
  return {
    type: types.DELETE_SWIPERMAINS_SUCCESS,
    payload: swipermains,
  };
};

export const deleteSwipermainsFailure = (error) => {
  return {
    type: types.DELETE_SWIPERMAINS_FAILURE,
    payload: error,
  };
};

export const fetchSwipermains = () => {
    return (dispatch) => {
      dispatch(fetchSwipermainsRequest);
      await axios.get(`/api/`)
                  .then(response => {
                    const swipermains = response.data;
                    dispatch(fetchSwipermainsSuccess(swipermains))
              }).catch(error => {
                    const errorMsg = error.message;
                    dispatch(fetchSwipermainsFailure(errorMsg))
              })
      };
};

export const fetchSwipermain = () => {
  return (dispatch) => {
    dispatch(fetchSwipermainRequest);
    await axios.get(`/api/`)
                .then(response => {
                  const swipermain = response.data;
                  dispatch(fetchSwipermainSuccess(swipermain))
            }).catch(error => {
                  const errorMsg = error.message;
                  dispatch(fetchSwipermainFailure(errorMsg))
            })
    };
};

export const createSwipermain = () => {
  return (dispatch) => {
    dispatch(createSwipermainRequest);
    await axios.get(`/api/`)
                .then(response => {
                  const swipermain = response.data;
                  dispatch(createSwipermainSuccess(swipermain))
            }).catch(error => {
                  const errorMsg = error.message;
                  dispatch(createSwipermainFailure(errorMsg))
            })
    };
};

export const updateSwipermain = () => {
  return (dispatch) => {
    dispatch(updateSwipermainRequest);
    await axios.get(`/api/`)
                .then(response => {
                  const swipermain = response.data;
                  dispatch(updateSwipermainSuccess(swipermain))
            }).catch(error => {
                  const errorMsg = error.message;
                  dispatch(updateSwipermainFailure(errorMsg))
            })
    };
};

export const deleteSwipermains = () => {
  return (dispatch) => {
    dispatch(deleteSwipermainsRequest);
    await axios.get(`/api/`)
                .then(response => {
                  const swipermains = response.data;
                  dispatch(deleteSwipermainsSuccess(swipermains))
            }).catch(error => {
                  const errorMsg = error.message;
                  dispatch(deleteSwipermainsFailure(errorMsg))
            })
    };
};