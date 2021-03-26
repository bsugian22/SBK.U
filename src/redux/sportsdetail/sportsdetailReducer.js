import * as types from "./sportsdetailTypes";

const initialState = {
  loading: false,
  data: {
    data: [],
    total: null,
    count: null,
    per_page: null,
    page: 1,
    last_page: null,
    detail: null,
    detail_data: null,
  },
  error: "",
};

const sportsdetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_SPORTSDETAILS:
      const market = action.payload;
      console.log(market)
      const match_id = market.match_id
      console.log("match_id:" + match_id)

      const state_data = state.data.data;
      const state_details_market = state.data.detail_data;
      const state_details_match_id = state.data.detail

      for (var i = 0; i < state_data.length; i++) {

        let market_data = state_data[i].matches.find(x => x.id == match_id); // find specific data 
        if (market_data) {
          // console.log(market_data);
          // look for market_id to the websocket data 
          let market_type = market_data.market.type
          // let market_status = market_data.market.status
          // console.log("market_status :" + market_data.market.status);

          // update data from ws
          let ws_data_market = market.markets.find(x => x.market_id == market_type)
          let outcomes = market_data.market.outcomes;

          //check if the markets ws has the same market type on sports page data
          if (ws_data_market) {
            // console.log(ws_data_market);
            let ws_data_market_status = ws_data_market.status;
            // console.log("ws_status: " + ws_data_market_status);
            market_data.market.status = ws_data_market_status
            // console.log(" new status : " + market_data.market.status)
            ws_data_market.outcomes.map((data, index) => {
              let ws_outcome_id = data.outcome_id;
              let ws_new_outcome_odds = data.odds;
              // look for the outcomes->name-> id to match with ws_outcome_id
              outcomes.map((data, index) => {
                if (ws_outcome_id == data.name.id) {
                  let old_value = data.odds;
                  // console.log("incoming odds - " + ws_new_outcome_odds)
                  data.odds = ws_new_outcome_odds // changing value of the state of the outcomes odds
                  data.oldOdds = old_value // changing value of the state of the outcomes old odds
                  // console.log(" old odds - " + old_value)
                  // console.log(" new odds - " + data.odds)
                }
              })
            })
          } else {
            break; // nothing to update here ( didnt fine any same (market_id != market type) )
          }
          break; // stop loop if find the market on the list on the sports page
        }
      }

      // console.log(state_details_match_id)
      if (state_details_match_id == match_id) {
        // console.log("match find")
        // console.log(state_details_market)

        market.markets.map((data, index) => {

          let ws_data_market_outcomes = data.outcomes; // list of outcomes comeing from the ws
          let ws_specifier = JSON.stringify(data.specifier)
          let ws_market_type = data.market_id;
          let ws_status = data.status

          state_details_market.markets.map((data, index) => {
            let details_specifier = JSON.stringify(data.specifier)
            let details_outcomes = data.outcomes;
            let market_type = data.type


            // check if the market is same with the ws data and details data
            if (ws_market_type == market_type) {
              data.status = ws_status;

              if (ws_specifier == "{}") { // check if the specifer is only one 
                // console.log("chekcing  ")
                // console.log(ws_market_type + " - " + market_type)

                ws_data_market_outcomes.map((data, index) => {
                  let ws_outcome_id = data.outcome_id;
                  let ws_new_outcome_odds = data.odds;

                  details_outcomes.map((data, index) => {
                    // check if the outcomes has the same id and name

                    if (ws_outcome_id == data.name.id) {
                      let old_value = data.odds;

                      // console.log("incoming odds - " + ws_new_outcome_odds)
                      data.odds = ws_new_outcome_odds // changing value of the state of the outcomes odds
                      data.oldOdds = old_value // changing value of the state of the outcomes old odds
                      // console.log(" old odds - " + old_value)
                      // console.log(" new odds - " + data.odds)
                    }
                  })
                })

              } else {

                if (ws_specifier === details_specifier) {
                  // console.log(ws_market_type + " - " + market_type)
                  // console.log(details_specifier + " - " + ws_specifier)
                  // console.log(data.outcomes)

                  ws_data_market_outcomes.map((data, index) => {
                    let ws_outcome_id = data.outcome_id;
                    let ws_new_outcome_odds = data.odds;

                    details_outcomes.map((data, index) => {
                      // check if the outcomes has the same id and name

                      if (ws_outcome_id == data.name.id) {
                        let old_value = data.odds;

                        // console.log("incoming odds - " + ws_new_outcome_odds)
                        data.odds = ws_new_outcome_odds // changing value of the state of the outcomes odds
                        data.oldOdds = old_value // changing value of the state of the outcomes old odds
                        // console.log(" old odds - " + old_value)
                        // console.log(" new odds - " + data.odds)
                      }
                    })

                  })
                }
              }

            }


          })

        })



      }

      return {
        ...state,
      };

      // checking if the scoket has acctive shwoing market
      if (state.data.detail == market.match_id) {
        console.log("match_id:" + market.match_id)
        console.log("market active");
      } else {
        console.log("no market active");
      }
      return {
        ...state,
      };
    case types.FETCH_SPORTSDETAILS_REQUEST:
      return {
        ...state,
        loading: true,
        data: {
          data: [],
          total: null,
          count: null,
          per_page: null,
          page: 1,
          last_page: null,
          detail: null,
          detail_data: null,
        },
      };
    case types.FETCH_SPORTSDETAILS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.FETCH_SPORTSDETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case types.FETCH_SPORTSDETAIL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_SPORTSDETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        data: {
          ...state.data,
          detail_data: action.payload.data,
          detail: action.payload.data.id,
        },
        error: "",
      };
    case types.FETCH_SPORTSDETAIL_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case types.SPORTSDETAIL_RESET:
      return {
        ...state,
        loading: false,
        data: {
          ...state.data,
          detail_data: null,
          detail: null,
        },
        error: "",
      };

    case types.CREATE_SPORTSDETAIL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.CREATE_SPORTSDETAIL_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.CREATE_SPORTSDETAIL_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.UPDATE_SPORTSDETAIL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.UPDATE_SPORTSDETAIL_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.UPDATE_SPORTSDETAIL_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.DELETE_SPORTSDETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.DELETE_SPORTSDETAILS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.DELETE_SPORTSDETAILS_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default sportsdetailReducer;
