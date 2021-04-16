import { camelize } from "../../helpers/object";
import * as types from "./inplayTypes";

const initialState = {
  loading: false,
  data: {
    "data": [],
    "total": 0,
    "count": 1,
    "perPage": 15,
    "page": 1,
    "lastPage": 1,
  },
  error: "",
  active_index : null,
};

const inplayReducer = (state = initialState, action) => {
  switch (action.type) {

    case types.SET_MARKETS:
      
      let current_index = state.active_index;
      let set_index = action.payload;

      // if (current_index == set_index){
      //   set_index = null;
      // }
      return {
        ...state,
        active_index: set_index,
      };

    case types.GET_INPLAYDETAILS:
      const market = action.payload; // ws main data
      // console.log(market)
      const match_id = market.match_id
      // console.log("match_id:" + match_id)
      // console.log("kelvin")

      const state_data = state.data.data;

      state_data.map((data, index) => {

        if (match_id == data.id) {
          console.log("inplay");
          console.log(market)
          console.log(data.status)
          data.status = JSON.parse(market.match_status);
          console.log(JSON.parse(market.match_status))
          market.markets.map((ws_data, index) => {

            let ws_data_market_outcomes = ws_data.outcomes; // list of outcomes comeing from the ws
            let ws_specifier = JSON.stringify(ws_data.specifier)
            let ws_market_type = ws_data.market_id;
            let ws_status = ws_data.status

            data.markets.map((data, index) => {
              let details_specifier = JSON.stringify(data.specifier)
              let details_outcomes = data.outcomes;
              let market_type = data.type

              // check if the market is same with the ws data and details data
              if (ws_market_type == market_type) {
                data.status = ws_status;

                if (ws_specifier == "{}") { // check if the specifer is only one 

                  ws_data_market_outcomes.map((data, index) => {
                    let ws_outcome_id = data.outcome_id;
                    let ws_new_outcome_odds = data.odds;
                    let ws_active_status = data.active;

                    details_outcomes.map((data, index) => {
                      // check if the outcomes has the same id and name

                      if (ws_outcome_id == data.name.id) {
                        let old_value = data.odds;

                        data.odds = ws_new_outcome_odds // changing value of the state of the outcomes odds
                        data.oldOdds = old_value // changing value of the state of the outcomes old odds
                        data.active = ws_active_status // changing of active stat
                      }
                    })
                  })

                } else {

                  if (ws_specifier === details_specifier) {

                    ws_data_market_outcomes.map((data, index) => {
                      let ws_outcome_id = data.outcome_id;
                      let ws_new_outcome_odds = data.odds;
                      let ws_active_status = data.active;
                      details_outcomes.map((data, index) => {
                        // check if the outcomes has the same id and name

                        if (ws_outcome_id == data.name.id) {
                          let old_value = data.odds;
                          data.active = ws_active_status
                          data.odds = ws_new_outcome_odds // changing value of the state of the outcomes odds
                          data.oldOdds = old_value // changing value of the state of the outcomes old odds
                        }
                      })

                    })
                  }
                }

              }
            })
          })
        }

      })



      return {
        ...state,
      };



    case types.FETCH_INPLAYS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_INPLAYS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.FETCH_INPLAYS_FAILURE:
      return {
        ...state,
        loading: false,

        error: action.payload,
      };

    case types.FETCH_INPLAY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_INPLAY_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.FETCH_INPLAY_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.CREATE_INPLAY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.CREATE_INPLAY_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.CREATE_INPLAY_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.UPDATE_INPLAY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.UPDATE_INPLAY_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.UPDATE_INPLAY_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.DELETE_INPLAYS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.DELETE_INPLAYS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.DELETE_INPLAYS_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default inplayReducer;
