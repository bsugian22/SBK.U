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


// export const fetchEsports = () => {
//   return (dispatch) => {
//     dispatch(fetchEsportsRequest());
//     axios.get(`/api/feed/matches`, {
//       params: snakelize({ event_status: 'Esports' })
//     })
//       .then(response => {
//         const inplays = camelize(response.data);
//         // const matches = []
//         console.log(inplays)

//         // console.log(matches)
//         // inplayWebSocket(matches)
//         // dispatch(inplayWebSocket(matches));
//         dispatch(setMatchIds(inplays, 1, 'live'))
//         // dispatch(setMatchIds(inplays,1))
//         dispatch(fetchInplaysSuccess(inplays))
//       }).catch(error => {
//         const errorMsg = error.message;
//         dispatch(fetchInplaysFailure(errorMsg))
//       })
//   };
// };


// export const fetchEsport = () => {
//   return (dispatch) => {
//     dispatch(fetchEsportRequest);
//     await axios.get(`/api/`)
//       .then(response => {
//         const branches = response.data;
//         dispatch(fetchEsportSuccess(branches))
//       }).catch(error => {
//         const errorMsg = error.message;
//         dispatch(fetchEsportFailure(errorMsg))
//       })
//   };
// };
