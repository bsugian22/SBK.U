import * as types from "./betTypes";
import axios from "../../plugins/axios";
import sweetalert from "../../plugins/sweetalert";
import echo from "../../plugins/echo";

const swal = new sweetalert();

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
          if (response_data.status == 0) {
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
  bet.outcomes.map((outcome, index) => {
    details.outcomes.push({ id: outcome.id })
  })
  details.amount = bet.amount;
  return (dispatch) => {
    dispatch(betRequest())
    axios.post(`/api/positions`, details)
      .then(response => {
        dispatch(resetOutcome());
        const interval_id = setTimeout(() => {
          dispatch(betSucess())
        }, 30000);

        echo.private(`users.${user_id}`).listen('MTS\\BetAccepted', (e) => {
          swal.success("Bet Success")
          dispatch(betSucess())
          clearInterval(interval_id)
        })

        echo.private(`users.${user_id}`).listen('MTS\\BetRejected', (e) => {
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