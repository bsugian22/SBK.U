import * as types from "./inplayTypes";
import axios from "../../plugins/axios";
import { camelize, snakelize, socket } from "../../helpers/object";
import { getSportsDetails } from "../sportsdetail/sportsdetailActions";


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

export const createInplayRequest = () => {
  return {
    type: types.CREATE_INPLAY_REQUEST,
  };
};

export const createInplaySuccess = (inplay) => {
  return {
    type: types.CREATE_INPLAY_SUCCESS,
    payload: inplay,
  };
};

export const createInplayFailure = (error) => {
  return {
    type: types.CREATE_INPLAY_FAILURE,
    payload: error,
  };
};

export const updateInplayRequest = () => {
  return {
    type: types.UPDATE_INPLAY_REQUEST,
  };
};

export const updateInplaySuccess = (inplay) => {
  return {
    type: types.UPDATE_INPLAY_SUCCESS,
    payload: inplay,
  };
};

export const updateInplayFailure = (error) => {
  return {
    type: types.UPDATE_INPLAY_FAILURE,
    payload: error,
  };
};

export const deleteInplaysRequest = () => {
  return {
    type: types.DELETE_INPLAYS_REQUEST,
  };
};

export const deleteInplaysSuccess = (inplays) => {
  return {
    type: types.DELETE_INPLAYS_SUCCESS,
    payload: inplays,
  };
};

export const deleteInplaysFailure = (error) => {
  return {
    type: types.DELETE_INPLAYS_FAILURE,
    payload: error,
  };
};

export const fetchInplays = (params) => {
  return (dispatch) => {
    dispatch(fetchInplaysRequest());
    axios.get(`/api/feed/inplays`, {
      params: snakelize(params)
    })
      .then(response => {
        const inplays = response.data;
        const matches = []

        inplays.data.map((data, index) => {
          matches.push(data.id)
          // console.log(data.market)
          data.markets.map((data, index) => {
            // console.log(data)
            // data.oldOdds = null;
            data.outcomes.map((data, index) => {
              // console.log(data)
              data.oldOdds = null;
            })
          })
        })
        console.log(matches)
        // inplayWebSocket(matches)
        dispatch(inplayWebSocket(matches));

        dispatch(fetchInplaysSuccess(camelize(inplays)))
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

export const fetchInplay = (matchId) => {

  return (dispatch) => {
    dispatch(fetchInplayRequest);
    axios.get(`/api/feed/matches/${matchId}`)
      .then(response => {
        const sportsdetail = camelize(response.data);
        // console.log(sportsdetail.data.markets)
        sportsdetail.data.markets.map((data, index) => {
          data.outcomes.map((data, index) => {
            // console.log(data.id)
            data.oldOdds = null;
          })
        })
        dispatch(fetchInplaySuccess(sportsdetail))
      }).catch(error => {
        const errorMsg = error.message;
        dispatch(fetchInplayFailure(errorMsg))
      })
  };
};

export const createInplay = () => {
  return (dispatch) => {
    dispatch(createInplayRequest);
    axios.get(`/api/`)
      .then(response => {
        const inplay = response.data;
        dispatch(createInplaySuccess(inplay))
      }).catch(error => {
        const errorMsg = error.message;
        dispatch(createInplayFailure(errorMsg))
      })
  };
};

export const updateInplay = () => {
  return (dispatch) => {
    dispatch(updateInplayRequest);
    axios.get(`/api/`)
      .then(response => {
        const inplay = response.data;
        dispatch(updateInplaySuccess(inplay))
      }).catch(error => {
        const errorMsg = error.message;
        dispatch(updateInplayFailure(errorMsg))
      })
  };
};

export const deleteInplays = () => {
  return (dispatch) => {
    dispatch(deleteInplaysRequest);
    axios.get(`/api/`)
      .then(response => {
        const inplays = response.data;
        dispatch(deleteInplaysSuccess(inplays))
      }).catch(error => {
        const errorMsg = error.message;
        dispatch(deleteInplaysFailure(errorMsg))
      })
  };
};

