import * as types from "./inplayTypes";
import axios from "../../plugins/axios";
import { camelize, snakelize, socket } from "../../helpers/object";
import { getSportsDetails } from "../sportsdetail/sportsdetailActions";
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
        // const matches = []

        if (esports) {
          //dispatch espoirts
          dispatch(fetchInplaysMatches(inplays))
        } else {
          dispatch(setMatchIds(inplays, 1, 'live'))
          dispatch(fetchInplaysSuccess(inplays))
        }
      }).catch(error => {
        const errorMsg = error.message;
        dispatch(fetchInplaysFailure(errorMsg))
      })
  };
};

export const inplayWebSocket = (matches) => {

  return (dispatch) => {
    // socket.onopen = function (e) {
    matches.map((data, index) => {
      console.log("sending:" + data)
      const match_data = {
        type: "book_match",
        match_id: data
      }
      socket.send(JSON.stringify(match_data));
    })
    socket.onmessage = function (event) {
      event.data.text().then((data) => {
        const market = JSON.parse(data)

        // console.log(market)
        dispatch(getInplayDetails(market));
        dispatch(getSportsDetails(market));
      });
    };


    socket.onclose = function (event) {
      if (event.wasClean) {
        console.log(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
      } else {
        // e.g. server process killed or network down
        // event.code is usually 1006 in this case
        console.log('[close] Connection died');
      }
    };

    socket.onerror = function (error) {
      console.log(`[error] ${error.message}`);
    };
  }
};

// export const fetchInplay = (matchId) => {

//   return (dispatch) => {
//     dispatch(fetchInplayRequest);
//     axios.get(`/api/feed/matches/${matchId}`)
//       .then(response => {
//         const sportsdetail = camelize(response.data);
//         // console.log(sportsdetail.data.markets)

//         let home_team = sportsdetail.data.homeTeam.name.ko;
//         let away_team = sportsdetail.data.awayTeam.name.ko
//         console.log(home_team)
//         console.log(away_team)

//         sportsdetail.data.markets.map((data, index) => {


//           if (data.title.marketName.ko.includes('{$competitor1}')) {
//             data.title.marketName.ko = data.title.marketName.ko.replaceAll('{$competitor1}', home_team)
//           }
//           if (data.title.marketName.ko.includes('{$competitor2}')) {
//             data.title.marketName.ko = data.title.marketName.ko.replaceAll('{$competitor2}', away_team)
//           }
//           // console.log(data.title.marketName.ko)

//           // console.log(data);
//           data.outcomes.map((data, index) => {
//             console.log(data)
//             if (data.name.outcomeName.ko.includes('{$competitor1}')) {
//               data.name.outcomeName.ko = data.name.outcomeName.ko.replaceAll('{$competitor1}', home_team)
//             }
//             if (data.name.outcomeName.ko.includes('{$competitor2}')) {
//               data.name.outcomeName.ko = data.name.outcomeName.ko.replaceAll('{$competitor2}', away_team)
//             }
//             data.oldOdds = null;
//           })
//         })
//         dispatch(fetchInplaySuccess(sportsdetail))
//       }).catch(error => {
//         const errorMsg = error.message;
//         dispatch(fetchInplayFailure(errorMsg))
//       })
//   };
// };


