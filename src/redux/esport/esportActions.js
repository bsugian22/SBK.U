import * as types from "./esportTypes";
import axios from "axios";

export const fetchEsportsRequest = () => {
  return {
    type: types.FETCH_ESPORTS_REQUEST,
  };
};



export const fetchEsports = () => {
  return (dispatch) => {
    dispatch(fetchEsportsRequest());
    axios.get(`/api/feed/matches`, {
      params: snakelize({ event_status: 'Esports' })
    })
      .then(response => {
        const inplays = camelize(response.data);
        // const matches = []
        console.log(inplays)

        // console.log(matches)
        // inplayWebSocket(matches)
        // dispatch(inplayWebSocket(matches));
        dispatch(setMatchIds(inplays, 1, 'live'))
        // dispatch(setMatchIds(inplays,1))
        dispatch(fetchInplaysSuccess(inplays))
      }).catch(error => {
        const errorMsg = error.message;
        dispatch(fetchInplaysFailure(errorMsg))
      })
  };
};


export const fetchEsport = () => {
  return (dispatch) => {
    dispatch(fetchEsportRequest);
    await axios.get(`/api/`)
      .then(response => {
        const branches = response.data;
        dispatch(fetchEsportSuccess(branches))
      }).catch(error => {
        const errorMsg = error.message;
        dispatch(fetchEsportFailure(errorMsg))
      })
  };
};
