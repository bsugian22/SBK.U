import {
  FETCH_SWIPERMAINS_REQUEST,
  FETCH_SWIPERMAINS_SUCCESS,
  FETCH_SWIPERMAINS_FAILURE,
  FETCH_SWIPERMAIN_REQUEST,
  FETCH_SWIPERMAIN_SUCCESS,
  FETCH_SWIPERMAIN_FAILURE,
  CREATE_SWIPERMAIN_REQUEST,
  CREATE_SWIPERMAIN_SUCCESS,
  CREATE_SWIPERMAIN_FAILURE,
  UPDATE_SWIPERMAIN_REQUEST,
  UPDATE_SWIPERMAIN_SUCCESS,
  UPDATE_SWIPERMAIN_FAILURE,
  DELETE_SWIPERMAINS_REQUEST,
  DELETE_SWIPERMAINS_SUCCESS,
  DELETE_SWIPERMAINS_FAILURE,
} from "./swipermainTypes";
import axios from "../../plugins/axios";

export const fetchSwipermainsRequest = () => {
  return {
    type: FETCH_SWIPERMAINS_REQUEST,
  };
};

export const fetchSwipermainsSuccess = (swipermains) => {
  return {
    type: FETCH_SWIPERMAINS_SUCCESS,
    payload: swipermains,
  };
};

export const fetchSwipermainsFailure = (error) => {
  return {
    type: FETCH_SWIPERMAINS_FAILURE,
    payload: error,
  };
};

export const fetchSwipermainRequest = () => {
  return {
    type: FETCH_SWIPERMAIN_REQUEST,
  };
};

export const fetchSwipermainSuccess = (swipermain) => {
  return {
    type: FETCH_SWIPERMAIN_SUCCESS,
    payload: swipermain,
  };
};

export const fetchSwipermainFailure = (error) => {
  return {
    type: FETCH_SWIPERMAIN_FAILURE,
    payload: error,
  };
};

export const createSwipermainRequest = () => {
  return {
    type: CREATE_SWIPERMAIN_REQUEST,
  };
};

export const createSwipermainSuccess = (swipermain) => {
  return {
    type: CREATE_SWIPERMAIN_SUCCESS,
    payload: swipermain,
  };
};

export const createSwipermainFailure = (error) => {
  return {
    type: CREATE_SWIPERMAIN_FAILURE,
    payload: error,
  };
};

export const updateSwipermainRequest = () => {
  return {
    type: UPDATE_SWIPERMAIN_REQUEST,
  };
};

export const updateSwipermainSuccess = (swipermain) => {
  return {
    type: UPDATE_SWIPERMAIN_SUCCESS,
    payload: swipermain,
  };
};

export const updateSwipermainFailure = (error) => {
  return {
    type: UPDATE_SWIPERMAIN_FAILURE,
    payload: error,
  };
};

export const deleteSwipermainsRequest = () => {
  return {
    type: DELETE_SWIPERMAINS_REQUEST,
  };
};

export const deleteSwipermainsSuccess = (swipermains) => {
  return {
    type: DELETE_SWIPERMAINS_SUCCESS,
    payload: swipermains,
  };
};

export const deleteSwipermainsFailure = (error) => {
  return {
    type: DELETE_SWIPERMAINS_FAILURE,
    payload: error,
  };
};

export const fetchSwipermains = () => {
    return (dispatch) => {
      dispatch(fetchSwipermainsRequest);
      axios.get(`/api/`)
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
    axios.get(`/api/`)
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
    axios.get(`/api/`)
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
    axios.get(`/api/`)
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
    axios.get(`/api/`)
                .then(response => {
                  const swipermains = response.data;
                  dispatch(deleteSwipermainsSuccess(swipermains))
            }).catch(error => {
                  const errorMsg = error.message;
                  dispatch(deleteSwipermainsFailure(errorMsg))
            })
    };
};