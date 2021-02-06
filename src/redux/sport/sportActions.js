import {
  FETCH_SPORTS_REQUEST,
  FETCH_SPORTS_SUCCESS,
  FETCH_SPORTS_FAILURE,
  FETCH_SPORT_REQUEST,
  FETCH_SPORT_SUCCESS,
  FETCH_SPORT_FAILURE,
  CREATE_SPORT_REQUEST,
  CREATE_SPORT_SUCCESS,
  CREATE_SPORT_FAILURE,
  UPDATE_SPORT_REQUEST,
  UPDATE_SPORT_SUCCESS,
  UPDATE_SPORT_FAILURE,
  DELETE_SPORTS_REQUEST,
  DELETE_SPORTS_SUCCESS,
  DELETE_SPORTS_FAILURE,
} from "./sportTypes";
import axios from "../../plugins/axios";

export const fetchSportsRequest = () => {
  return {
    type: FETCH_SPORTS_REQUEST,
  };
};

export const fetchSportsSuccess = (sports) => {
  return {
    type: FETCH_SPORTS_SUCCESS,
    payload: sports,
  };
};

export const fetchSportsFailure = (error) => {
  return {
    type: FETCH_SPORTS_FAILURE,
    payload: error,
  };
};

export const fetchSportRequest = () => {
  return {
    type: FETCH_SPORT_REQUEST,
  };
};

export const fetchSportSuccess = (sport) => {
  return {
    type: FETCH_SPORT_SUCCESS,
    payload: sport,
  };
};

export const fetchSportFailure = (error) => {
  return {
    type: FETCH_SPORT_FAILURE,
    payload: error,
  };
};

export const createSportRequest = () => {
  return {
    type: CREATE_SPORT_REQUEST,
  };
};

export const createSportSuccess = (sport) => {
  return {
    type: CREATE_SPORT_SUCCESS,
    payload: sport,
  };
};

export const createSportFailure = (error) => {
  return {
    type: CREATE_SPORT_FAILURE,
    payload: error,
  };
};

export const updateSportRequest = () => {
  return {
    type: UPDATE_SPORT_REQUEST,
  };
};

export const updateSportSuccess = (sport) => {
  return {
    type: UPDATE_SPORT_SUCCESS,
    payload: sport,
  };
};

export const updateSportFailure = (error) => {
  return {
    type: UPDATE_SPORT_FAILURE,
    payload: error,
  };
};

export const deleteSportsRequest = () => {
  return {
    type: DELETE_SPORTS_REQUEST,
  };
};

export const deleteSportsSuccess = (sports) => {
  return {
    type: DELETE_SPORTS_SUCCESS,
    payload: sports,
  };
};

export const deleteSportsFailure = (error) => {
  return {
    type: DELETE_SPORTS_FAILURE,
    payload: error,
  };
};


export const fetchSports = () => {
    return (dispatch) => {
      dispatch(fetchSportsRequest);
      axios.get(`/api/feed/sports`)
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
    axios.get(`/api/feed/sports`)
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
    axios.get(`/api/feed/sports`)
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
    axios.get(`/api/feed/sports`)
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
    axios.get(`/api/feed/sports`)
                .then(response => {
                  const sports = response.data;
                  dispatch(deleteSportsSuccess(sports))
            }).catch(error => {
                  const errorMsg = error.message;
                  dispatch(deleteSportsFailure(errorMsg))
            })
    };
};