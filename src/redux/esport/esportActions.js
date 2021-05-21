import * as types from "./esportTypes";
import axios from "axios";

export const setSportsTypeEsports = (data) => {
  return {
    type: types.SET_SPORTS_TYPE_ESPORTS,
    payload: data
  };
};

export const fetchEsportsRequest = () => {
  return {
    type: types.FETCH_ESPORTS_REQUEST,
  };
};

export const fetchInplaysMatches = (data) => {
  return {
    type: types.FETCH_INPLAY,
    payload: data
  };
}; 

export const fetchPrematches = (data) => {
  return {
    type: types.FETCH_PREMATCH,
    payload: data
  };
};

export const setActiveMatches = (data) => {
  return {
    type: types.SET_ACTIVE_MATCHES,
    payload: data
  };
};


export const fetchMarketPerMatchesSuccesEsports = (data) => {
  return {
    type: types.FETCH_MARKET_PER_MATCHES_SUCCESS_ESPORTS,
    payload: data,
  };
};

export const noMatchesEsports = () => {
  return {
    type: types.NO_MATCHES,
  };
};

