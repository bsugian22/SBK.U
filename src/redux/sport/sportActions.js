import * as types from "./sportTypes";
import axios from "axios";

export const fetchSportsRequest = () => {
  return {
    type: types.FETCH_SPORTS_REQUEST,
  };
};

export const fetchSportsSuccess = (sports) => {
  return {
    type: types.FETCH_SPORTS_SUCCESS,
    payload: sports,
  };
};

export const fetchSportsFailure = (error) => {
  return {
    type: types.FETCH_SPORTS_FAILURE,
    payload: error,
  };
};

export const fetchSportRequest = () => {
  return {
    type: types.FETCH_SPORT_REQUEST,
  };
};

export const fetchSportSuccess = (sport) => {
  return {
    type: types.FETCH_SPORT_SUCCESS,
    payload: sport,
  };
};

export const fetchSportFailure = (error) => {
  return {
    type: types.FETCH_SPORT_FAILURE,
    payload: error,
  };
};

export const createSportRequest = () => {
  return {
    type: types.CREATE_SPORT_REQUEST,
  };
};

export const createSportSuccess = (sport) => {
  return {
    type: types.CREATE_SPORT_SUCCESS,
    payload: sport,
  };
};

export const createSportFailure = (error) => {
  return {
    type: types.CREATE_SPORT_FAILURE,
    payload: error,
  };
};

export const updateSportRequest = () => {
  return {
    type: types.UPDATE_SPORT_REQUEST,
  };
};

export const updateSportSuccess = (sport) => {
  return {
    type: types.UPDATE_SPORT_SUCCESS,
    payload: sport,
  };
};

export const updateSportFailure = (error) => {
  return {
    type: types.UPDATE_SPORT_FAILURE,
    payload: error,
  };
};

export const deleteSportsRequest = () => {
  return {
    type: types.DELETE_SPORTS_REQUEST,
  };
};

export const deleteSportsSuccess = (sports) => {
  return {
    type: types.DELETE_SPORTS_SUCCESS,
    payload: sports,
  };
};

export const deleteSportsFailure = (error) => {
  return {
    type: types.DELETE_SPORTS_FAILURE,
    payload: error,
  };
};


export const fetchSports = () => {
    return (dispatch) => {
      dispatch(fetchSportsRequest);
      await axios.get(`/api/feed/sports`)
                  .then(response => {
                    const sports = response.data;
                    dispatch(fetchSportsSuccess(sports))
              }).catch(error => {
                    const errorMsg = error.message;
                    dispatch(fetchSportsFailure(errorMsg))
              })
      };
};

export const fetchSport = () => {
  return (dispatch) => {
    dispatch(fetchSportRequest);
    await axios.get(`/api/feed/sports`)
                .then(response => {
                  const sport = response.data;
                  dispatch(fetchSportSuccess(sport))
            }).catch(error => {
                  const errorMsg = error.message;
                  dispatch(fetchSportFailure(errorMsg))
            })
    };
};

export const createSport = () => {
  return (dispatch) => {
    dispatch(createSportRequest);
    await axios.get(`/api/feed/sports`)
                .then(response => {
                  const sport = response.data;
                  dispatch(createSportSuccess(sport))
            }).catch(error => {
                  const errorMsg = error.message;
                  dispatch(createSportFailure(errorMsg))
            })
    };
};

export const updateSport = () => {
  return (dispatch) => {
    dispatch(updateSportRequest);
    await axios.get(`/api/feed/sports`)
                .then(response => {
                  const sport = response.data;
                  dispatch(updateSportSuccess(sport))
            }).catch(error => {
                  const errorMsg = error.message;
                  dispatch(updateSportFailure(errorMsg))
            })
    };
};

export const deleteSports = () => {
  return (dispatch) => {
    dispatch(deleteSportsRequest);
    await axios.get(`/api/feed/sports`)
                .then(response => {
                  const sports = response.data;
                  dispatch(deleteSportsSuccess(sports))
            }).catch(error => {
                  const errorMsg = error.message;
                  dispatch(deleteSportsFailure(errorMsg))
            })
    };
};