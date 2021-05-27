import * as types from "./inplayTypes";
import axios from "../../plugins/axios";
import { camelize, snakelize, socket } from "../../helpers/object";
import { setMatchIds } from "../sport/sportActions";
import { fetchInplaysMatches } from "../esport/esportActions";


export const setWSMarketInplay = (market) => {
  return {
    type: types.SET_WS_MARKETS_INPLAY,
    payload: market
  };
};

export const setMarkets = (index) => {
  return {
    type: types.SET_MARKETS,
    payload: index
  };
};

export const fetchInplaysRequest = () => {
  return {
    type: types.FETCH_INPLAYS_REQUEST,
  };
};

export const fetchInplaysSuccess = (inplays) => {
  return {
    type: types.FETCH_INPLAYS_SUCCESS,
    payload: inplays,
  };
};

export const fetchInplaysFailure = (error) => {
  return {
    type: types.FETCH_INPLAYS_FAILURE,
    payload: error,
  };
};

export const getInplayDetails = (details) => {
  return {
    type: types.GET_INPLAYDETAILS,
    payload: details
  };
};

export const fetchInplayRequest = () => {
  return {
    type: types.FETCH_INPLAY_REQUEST,
  };
};

export const fetchInplaySuccess = (inplay) => {
  return {
    type: types.FETCH_INPLAY_SUCCESS,
    payload: inplay,
  };
};

export const fetchInplayFailure = (error) => {
  return {
    type: types.FETCH_INPLAY_FAILURE,
    payload: error,
  };
};

export const fetchMarketPerMatchesSuccessInplay = (data) => {
  return {
    type: types.FETCH_MARKET_PER_MATCHES_SUCCESS_INPLAY,
    payload: data,
  };
};

export const fetchMarketPerMatchesFailureInplay = (data) => {
  return {
    type: types.FETCH_MARKET_PER_MATCHES_FAILURE_INPLAY,
    payload: data,
  };
};

export const setSportsTypeInplay = (data) => {
  return {
    type: types.SET_SPORTS_TYPE_INPLAY,
    payload: data
  };
};


export const fetchInplays = (esports) => {
  return (dispatch) => {
    dispatch(fetchInplaysRequest());
    axios.get(`/api/feed/matches`, {
      params: snakelize({ event_status: 'Live' })
    })
      .then(response => {
        const inplays = camelize(response.data);
        let typeId = "";
        inplays.data.sort(function compare(a, b) {
          return a.type - b.type;
        });

        if (inplays.data[0]?.type) {
          console.log(inplays.data[0].type)
          typeId = inplays.data[0].type

          var defaultMatches = inplays.data.filter((x) => {
            return x.type == typeId;
          });
        }

        if (esports) {
          dispatch(fetchInplaysMatches(inplays))
        } else {
          
          dispatch(fetchInplaysSuccess(inplays))
          if (typeId != "") {
            dispatch(setSportsTypeInplay({ id: typeId, matches: defaultMatches }))
            dispatch(setMatchIds({ data: defaultMatches }, 1, 'live'))
          }else {
            dispatch(setMatchIds(inplays, 1, 'live'))
          }
        }
      }).catch(error => {
        const errorMsg = error.message;
        dispatch(fetchInplaysFailure(errorMsg))
      })
  };
};




