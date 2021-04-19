import * as types from "./sportsdetailTypes";
import axios from "../../plugins/axios";
import { camelize, snakelize, socket } from "../../helpers/object";
import { chain } from "lodash";
import moment from "moment";
import sweetalert from "../../plugins/sweetalert";
import { getInplayDetails } from "../inplay/inplayActions";
import echo from "../../plugins/echo";

const swal = new sweetalert();



export const fetchSportsdetailsRequest = () => {
  return {
    type: types.FETCH_SPORTSDETAILS_REQUEST,
  };
};

export const getSportsDetails = (details) => {
  return {
    type: types.GET_SPORTSDETAILS,
    payload: details
  };
};


export const setBetOutcome = (data) => {
  return {
    type: types.SET_BET_OUTCOMES,
    payload: data
  };
};

export const spliceOutcome = (index) => {
  return {
    type: types.SPLICE_OUTCOME,
    payload: index
  };
};

export const resetOutcome = () => {
  return {
    type: types.RESET_OUTCOME,
  };
};

export const setBetAmount = (amount) => {
  return {
    type: types.SET_BET_AMOUNT,
    payload: amount
  };
};

export const fetchSportsdetailsSuccess = (sportsdetails) => {
  return {
    type: types.FETCH_SPORTSDETAILS_SUCCESS,
    payload: sportsdetails,
  };
};

export const fetchSportsdetailsFailure = (error) => {
  return {
    type: types.FETCH_SPORTSDETAILS_FAILURE,
    payload: error,
  };
};

export const fetchSportsdetailRequest = () => {
  return {
    type: types.FETCH_SPORTSDETAIL_REQUEST,
  };
};

export const fetchSportsdetailSuccess = (sportsdetail) => {
  return {
    type: types.FETCH_SPORTSDETAIL_SUCCESS,
    payload: sportsdetail,
  };
};

export const fetchSportsdetailFailure = (error) => {
  return {
    type: types.FETCH_SPORTSDETAIL_FAILURE,
    payload: error,
  };
};
export const sportDetailReset = () => {
  return {
    type: types.SPORTSDETAIL_RESET,
  };
};

export const createSportsdetailRequest = () => {
  return {
    type: types.CREATE_SPORTSDETAIL_REQUEST,
  };
};

export const createSportsdetailSuccess = (sportsdetail) => {
  return {
    type: types.CREATE_SPORTSDETAIL_SUCCESS,
    payload: sportsdetail,
  };
};

export const createSportsdetailFailure = (error) => {
  return {
    type: types.CREATE_SPORTSDETAIL_FAILURE,
    payload: error,
  };
};

export const updateSportsdetailRequest = () => {
  return {
    type: types.UPDATE_SPORTSDETAIL_REQUEST,
  };
};

export const updateSportsdetailSuccess = (sportsdetail) => {
  return {
    type: types.UPDATE_SPORTSDETAIL_SUCCESS,
    payload: sportsdetail,
  };
};

export const updateSportsdetailFailure = (error) => {
  return {
    type: types.UPDATE_SPORTSDETAIL_FAILURE,
    payload: error,
  };
};

export const deleteSportsdetailsRequest = () => {
  return {
    type: types.DELETE_SPORTSDETAILS_REQUEST,
  };
};

export const deleteSportsdetailsSuccess = (sportsdetails) => {
  return {
    type: types.DELETE_SPORTSDETAILS_SUCCESS,
    payload: sportsdetails,
  };
};

export const deleteSportsdetailsFailure = (error) => {
  return {
    type: types.DELETE_SPORTSDETAILS_FAILURE,
    payload: error,
  };
};

export const betRequest = () => {
  return {
    type: types.BET_REQUEST,
  };
};

export const betCheck = (data) => {
  return {
    type: types.BET_CHECK,
    payload: data
  };
};

export const betSucess = () => {
  return {
    type: types.BET_SUCCESS,
  };
};

export const betFailure = () => {
  return {
    type: types.BET_FAILURE,
  };
};


// export const Sportsdetails = () => {
//   return (dispatch) => {
//     console.log( dispatch(getSportsdetails()) );
//   };
// };

export const fetchSportsdetails = (params) => {

  return (dispatch) => {
    dispatch(fetchSportsdetailsRequest());
    axios.get(`/api/feed/sports`, {
      params: snakelize(params)
    })
      .then(response => {
        const sportsdetails = camelize(response.data);
        const matches = []

        sportsdetails.data.map((data, index) => {
          matches.push(data.id)
          // console.log(data.market)
          data.market.map((data, index) => {
            // console.log(data)
            // data.oldOdds = null;
            data.outcomes.map((data, index) => {
              // console.log(data)
              data.oldOdds = null;
            })
          })
        })
        // console.log(sportsdetails.data)
        dispatch(sportWebSocket(matches));

        var data = chain(sportsdetails.data)
          .groupBy((match) => moment(match.startAt).format("YYYY-MM-DD"))
          .map((matches, startAt) => ({ startAt, matches }))
          .orderBy("startAt")
          .value();
        sportsdetails.data = data

        dispatch(fetchSportsdetailsSuccess(sportsdetails))

      }).catch(error => {
        const errorMsg = error.message;
        dispatch(fetchSportsdetailsFailure(errorMsg))
      })
  };
};



export const sportWebSocket = (matches) => {

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
    // };
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


export const fetchSportsdetail = (matchId) => {
  return (dispatch) => {
    dispatch(fetchSportsdetailRequest);
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

        dispatch(fetchSportsdetailSuccess(sportsdetail))
      }).catch(error => {
        const errorMsg = error.message;
        dispatch(fetchSportsdetailFailure(errorMsg))
      })
  };
};


export const validateBet = (data) => {
  return (dispatch) => {
    let details = {
      outcomes: [],
    }
    data.outcomes.map((outcome, index) => {
      details.outcomes.push({ id: outcome.id })
    })

    if (data.outcomes.length != 0) {

      axios.post(`/api/betslip`, details)
        .then(response => {
          const response_data = response.data
          // console.log(response_data)
          if (response_data.status == 0) {
            // console.log(response_data.data)
            dispatch(betCheck(response_data))
          }

        }).catch(error => {
          const errorMsg = error.message;
          dispatch(resetOutcome());
          swal.error(errorMsg)
        })

    }
  };
};

export const bet = (data,user_id) => {
  let bet = data;
  let details = {
    amount: 0,
    outcomes: [],
  }
  // delete bet.total_odds
  bet.outcomes.map((outcome, index) => {
    details.outcomes.push({ id: outcome.id })
  })
  details.amount = bet.amount;
  return (dispatch) => {
    dispatch(betRequest())
    axios.post(`/api/positions`, details)
      .then(response => {
        console.log(response.data)
        dispatch(resetOutcome());
        const interval_id = setTimeout(() => {
          dispatch(betSucess())
        }, 30000);

        echo.private(`users.${user_id}`).listen('MTS\\BetAccepted', (e) => {
          // console.log("bet accepted")
          // console.log(e);
          swal.success("Bet Success")
          dispatch(betSucess())
          clearInterval(interval_id)
        })

        echo.private(`users.${user_id}`).listen('MTS\\BetRejected', (e) => {
          // console.log(e);
          dispatch(betFailure())
          clearInterval(interval_id)
          swal.error(e.message)
        })

      }).catch(error => {
        const errorMsg = error.message;
        dispatch(betFailure())
        swal.error(errorMsg)
      })
  };

};

export const createSportsdetail = () => {
  return (dispatch) => {
    dispatch(createSportsdetailRequest);
    axios.get(`/api/`)
      .then(response => {
        const sportsdetail = response.data;
        dispatch(createSportsdetailSuccess(sportsdetail))
      }).catch(error => {
        const errorMsg = error.message;
        dispatch(createSportsdetailFailure(errorMsg))
      })
  };
};

export const updateSportsdetail = () => {
  return (dispatch) => {
    dispatch(updateSportsdetailRequest);
    axios.get(`/api/`)
      .then(response => {
        const sportsdetail = response.data;
        dispatch(updateSportsdetailSuccess(sportsdetail))
      }).catch(error => {
        const errorMsg = error.message;
        dispatch(updateSportsdetailFailure(errorMsg))
      })
  };
};

export const deleteSportsdetails = () => {
  return (dispatch) => {
    dispatch(deleteSportsdetailsRequest);
    axios.get(`/api/`)
      .then(response => {
        const sportsdetails = response.data;
        dispatch(deleteSportsdetailsSuccess(sportsdetails))
      }).catch(error => {
        const errorMsg = error.message;
        dispatch(deleteSportsdetailsFailure(errorMsg))
      })
  };
};