import * as types from "./sportTypes";
import axios from "../../plugins/axios";
import { camelize } from "../../helpers/object";

export const fetchMatchesRequest = () => {
  return {
    type: types.FETCH_MATCHES_REQUEST,
  };
};

export const fetchMatchesSuccess = (data) => {
  return {
    type: types.FETCH_MATCHES_SUCCESS,
    payload: data,
  };
};

export const fetchMatchesFailure = (data) => {
  return {
    type: types.FETCH_MATCHES_FAILURE,
    payload: data,
  };
};

export const fetchTournamentsSuccess = (data) => {
  return {
    type: types.FETCH_TOURNAMENTS_SUCCESS,
    payload: data,
  };
};

export const fetchTournamentsFailure = (data) => {
  return {
    type: types.FETCH_TOURNAMENTS_FAILURE,
    payload: data,
  };
};

export const fetchCompetitorsSuccess = (data) => {
  return {
    type: types.FETCH_COMPETITORS_SUCCESS,
    payload: data,
  };
};

export const fetchCompetitorsFailure = (data) => {
  return {
    type: types.FETCH_COMPETITORS_FAILURE,
    payload: data,
  };
};

export const fetchOutcomesSuccess = (data) => {
  return {
    type: types.FETCH_OUTCOMES_SUCCESS,
    payload: data,
  };
};

export const fetchOutcomesFailure = (data) => {
  return {
    type: types.FETCH_OUTCOMES_FAILURE,
    payload: data,
  };
};

export const fetchMarketsSuccess = (data) => {
  return {
    type: types.FETCH_MARKETS_SUCCESS,
    payload: data,
  };
};

export const fetchMarketsFailure = (data) => {
  return {
    type: types.FETCH_MARKETS_FAILURE,
    payload: data,
  };
};

export const fetchSportsSuccess = (data) => {
  return {
    type: types.FETCH_SPORTS_SUCCESS,
    payload: data,
  };
};

export const fetchSportsFailure = (data) => {
  return {
    type: types.FETCH_SPORTS_FAILURE,
    payload: data,
  };
};

export const fetchMarketPerMatchesSuccess = (data) => {
  return {
    type: types.FETCH_MARKET_PER_MATCHES_SUCCESS,
    payload: data,
  };
};

export const fetchMarketPerMatchesFailure = (data) => {
  return {
    type: types.FETCH_MARKET_PER_MATCHES_FAILURE,
    payload: data,
  };
};


export const fetchMatches = () => {
  return (dispatch) => {
    dispatch(fetchMatchesRequest())
     axios.get(`/api/feed/matches`)
      .then(response => {
        const matches = camelize(response.data) ;
        const matchIds = [];
        console.log(matches.data.length);

        for (let i = 0; i < 15; i++) {
          let id = matches.data[i].id
          matchIds.push({id:id});
        }
        dispatch(fetchMatchesSuccess(matches))
        dispatch(fetchMarketPerMatches(matchIds))
      }).catch(error => {
        const errorMsg = error.message;
        dispatch(fetchMatchesFailure(errorMsg))
      })
  };
};

export const fetchMarketPerMatches = (ids) => {
  return (dispatch) => {
     axios.post(`/api/feed/market`,{matches:ids})
      .then(response => {
        const markets = camelize(response.data) ;
        // console.log(markets)
        dispatch(fetchMarketPerMatchesSuccess(markets))
      }).catch(error => {
        const errorMsg = error.message;
        dispatch(fetchMarketPerMatchesFailure(errorMsg))
      })
  };
};

export const fetchMarketPerMatch = (id) => {
  return (dispatch) => {
     axios.get(`/api/feed/market/`+id)
      .then(response => {
        const markets = camelize(response.data) ;
        console.log(markets)
        // dispatch(fetchMarketPerMatchesSuccess(markets))
      }).catch(error => {
        const errorMsg = error.message;
        // dispatch(fetchMarketPerMatchesFailure(errorMsg))
      })
  };
};

export const fetchTournaments = () => {
  return (dispatch) => {
     axios.get(`/api/feed/tournament/description`)
      .then(response => {
        const sports = camelize(response.data) ;
        dispatch(fetchTournamentsSuccess(sports))
      }).catch(error => {
        const errorMsg = error.message;
        dispatch(fetchTournamentsFailure(errorMsg))
      })
  };
};

export const fetchCompetitors = () => {
  return (dispatch) => {
    axios.get(`/api/feed/competitor/description`)
      .then(response => {
        const sports = camelize(response.data) ;
        dispatch(fetchCompetitorsSuccess(sports))
      }).catch(error => {
        const errorMsg = error.message;
        dispatch(fetchCompetitorsFailure(errorMsg))
      })
  };
};

export const fetchOutcomes = () => {
  return (dispatch) => {
     axios.get(`/api/feed/outcome/description`)
      .then(response => {
        const sports = camelize(response.data);
        dispatch(fetchOutcomesSuccess(sports))
      }).catch(error => {
        const errorMsg = error.message;
        dispatch(fetchOutcomesFailure(errorMsg))
      })
  };
};

export const fetchMarkets = () => {
  return (dispatch) => {
     axios.get(`/api/feed/market/description`)
      .then(response => {
        const sports = response.data;
        dispatch(fetchMarketsSuccess(sports))
      }).catch(error => {
        const errorMsg = error.message;
        dispatch(fetchMarketsFailure(errorMsg))
      })
  };
};

export const fetchSports = () => {
  return (dispatch) => {
     axios.get(`/api/feed/sports/description`)
      .then(response => {
        const sports = response.data;
        dispatch(fetchSportsSuccess(sports))
      }).catch(error => {
        const errorMsg = error.message;
        dispatch(fetchSportsFailure(errorMsg))
      })
  };
};