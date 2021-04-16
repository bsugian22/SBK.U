import sweetalert from "../../plugins/sweetalert";
import * as types from "./sportsdetailTypes";

const swal = new sweetalert();
const initialState = {
  loading: false,
  loadingBet: false,
  data: {
    data: [],
    total: null,
    count: null,
    per_page: null,
    page: 1,
    last_page: null,
    detail: null,
    detail_data: null,
    bet: {
      category: "SPORTS",
      amount: 0,
      outcomes: [],
      total_odds: 0,
    }
  },
  error: "",
};

const sportsdetailReducer = (state = initialState, action) => {
  switch (action.type) {

    case types.BET_CHECK:
      let invalid_outcomes = action.payload.data
      let invalid_outcomes_message = action.payload.message
      // console.log(state.data.bet.outcomes)
      // console.log(action.payload)
      let message = "";

      invalid_outcomes.map((outcome) => {
        let data = state.data.bet.outcomes.find(x => x.id == outcome)
        console.log(data)
        message = message + data.home_team + " vs " + data.away_team + "<br>"

        let index = state.data.bet.outcomes.findIndex(x => x.id == outcome)
        state.data.bet.outcomes.splice(index, 1)
        console.log(index)
      })

      // console.log(message);

      // console.log(invalid_outcomes)

      swal.fire({
        title: invalid_outcomes_message,
        icon: 'warning',
        html: message,
      })

      return {
        ...state,
      };
    case types.RESET_OUTCOME:
      state.data.bet = {
        category: "SPORTS",
        amount: 0,
        outcomes: [],
        total_odds: 0,
      };

      return {
        ...state,
      };

    case types.SPLICE_OUTCOME:
      state.data.bet.outcomes.splice(action.payload, 1)

      let total_odds_x = 1;
      state.data.bet.outcomes.forEach(e => {
        total_odds_x *= e.odds;
      });
      state.data.bet.total_odds = total_odds_x

      return {
        ...state,
      };
    case types.SET_BET_AMOUNT:
      state.data.bet.amount = action.payload

      return {
        ...state,
      };

    case types.SET_BET_OUTCOMES:
      console.log(action.payload)
      const set_outcome_id = action.payload.outcome_id;
      const set_match_id = action.payload.match_id;
      const set_odds = action.payload.odds;
      const set_home = action.payload.home_team;
      const set_away = action.payload.away_team;
      const set_market_name = action.payload.market_name;
      const set_outcome_name = action.payload.outcome_name;

      const set_old_odds = action.payload.oldOdds;
      const set_specifier = action.payload.specifier;
      const set_market_type = action.payload.market_type;
      const set_outcome_name_id = action.payload.outcome_name_id;

      let total_odds = 1;
      const existing_outcome = state.data.bet.outcomes.findIndex(x => x.id == set_outcome_id)

      // check if the outcome exists
      if (existing_outcome == "-1") {

        let existing_match = state.data.bet.outcomes.findIndex(x => x.match_id == set_match_id)

        // check if the match exists 
        if (existing_match == "-1") {
          state.data.bet.outcomes.push({
            id: set_outcome_id,
            match_id: set_match_id,
            odds: set_odds,
            home_team: set_home,
            away_team: set_away,
            market_name: set_market_name,
            outcome_name: set_outcome_name,
            oldOdds: set_old_odds,
            specifier: set_specifier,
            market_type: set_market_type,
            outcome_name_id: set_outcome_name_id
          })
        } else {
          state.data.bet.outcomes.splice(existing_match, 1)
          state.data.bet.outcomes.push({
            id: set_outcome_id,
            match_id: set_match_id,
            odds: set_odds,
            home_team: set_home,
            away_team: set_away,
            market_name: set_market_name,
            outcome_name: set_outcome_name,
            oldOdds: set_old_odds,
            specifier: set_specifier,
            market_type: set_market_type,
            outcome_name_id: set_outcome_name_id
          })
        }

      } else {
        state.data.bet.outcomes.splice(existing_outcome, 1)
      }

      state.data.bet.outcomes.forEach(e => {
        total_odds *= e.odds;
      });

      state.data.bet.total_odds = total_odds

      return {
        ...state,
      };

    case types.GET_SPORTSDETAILS:
      const market = action.payload; // ws main data
      console.log(market)
      const match_id = market.match_id
      console.log("match_id:" + match_id)

      const state_data = state.data.data;
      const state_bet = state.data.bet.outcomes;
      const state_details_market = state.data.detail_data;
      const state_details_match_id = state.data.detail

      state_bet.map((data, index) => {
        // console.log(data.match_id);
        let details_specifier = data.specifier
        let market_type = data.market_type
        let details_name_id = data.outcome_name_id

        if (match_id == data.match_id) {
          console.log("ws bet slip")
          console.log(data);
          console.log(market)
          market.markets.map((ws_data, index) => {

            let ws_data_market_outcomes = ws_data.outcomes; // list of outcomes comeing from the ws
            let ws_specifier = JSON.stringify(ws_data.specifier)
            let ws_market_type = ws_data.market_id;
            let ws_status = ws_data.status

            // check if the market is same with the ws data and details data
            if (ws_market_type == market_type) {

              if (ws_specifier == "{}") { // check if the specifer is only one 

                ws_data_market_outcomes.map((ws_market_data, index) => {
                  let ws_outcome_id = ws_market_data.outcome_id;
                  let ws_new_outcome_odds = ws_market_data.odds;


                  // check if the outcomes has the same id and name

                  if (ws_outcome_id == details_name_id) {
                    let old_value = data.odds;
                    data.odds = ws_new_outcome_odds
                    data.oldOdds = old_value
                  }
                })


              } else {

                if (ws_specifier === details_specifier) {

                  ws_data_market_outcomes.map((ws_market_data, index) => {
                    let ws_outcome_id = ws_market_data.outcome_id;
                    let ws_new_outcome_odds = ws_market_data.odds;

                    // check if the outcomes has the same id and name

                    if (ws_outcome_id == details_name_id) {
                      let old_value = data.odds;
                      data.oldOdds = old_value
                      data.odds = ws_new_outcome_odds // changing value of the state of the outcomes odds
                    }

                  })
                }
              }

            }

          })
        }
      })

      state_data.map((data, index) => {

        data.matches.map((data, index) => {
          // console.log (data);

          if (match_id == data.id) {
            // console.log(data.id);
            // console.log(market)
            // console.log(data.market)
            market.markets.map((ws_data, index) => {

              let ws_data_market_outcomes = ws_data.outcomes; // list of outcomes comeing from the ws
              let ws_specifier = JSON.stringify(ws_data.specifier)
              let ws_market_type = ws_data.market_id;
              let ws_status = ws_data.status

              data.market.map((data, index) => {
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


      })


      // for (var i = 0; i < state_data.length; i++) {

      //   let market_data = state_data[i].matches.find(x => x.id == match_id); // find specific data 
      //   if (market_data) {
      //     // look for market_id to the websocket data 
      //     let market_type = market_data.market.type

      //     // update data from ws
      //     let ws_data_market = market.markets.find(x => x.market_id == market_type)
      //     let outcomes = market_data.market.outcomes;

      //     //check if the markets ws has the same market type on sports page data
      //     if (ws_data_market) {
      //       let ws_data_market_status = ws_data_market.status;
      //       market_data.market.status = ws_data_market_status
      //       ws_data_market.outcomes.map((data, index) => {
      //         let ws_outcome_id = data.outcome_id;
      //         let ws_new_outcome_odds = data.odds;
      //         let ws_active_status = data.active;
      //         // look for the outcomes->name-> id to match with ws_outcome_id
      //         outcomes.map((data, index) => {
      //           if (ws_outcome_id == data.name.id) {
      //             let old_value = data.odds;
      //             data.odds = ws_new_outcome_odds // changing value of the state of the outcomes odds
      //             data.oldOdds = old_value // changing value of the state of the outcomes old odds
      //             data.active = ws_active_status;
      //           }
      //         })
      //       })
      //     } else {
      //       break; // nothing to update here ( didnt fine any same (market_id != market type) )
      //     }
      //     break; // stop loop if find the market on the list on the sports page
      //   }
      // }




      if (state_details_match_id == match_id) {
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

      return {
        ...state,
      };
    case types.FETCH_SPORTSDETAILS_REQUEST:
      return {
        ...state,
        data: {
          ...state.data,
          data: [],
          total: null,
          count: null,
          per_page: null,
          page: 1,
          last_page: null,
          detail: null,
          detail_data: null,
        },
          loading: true,
        };
        case types.FETCH_SPORTSDETAILS_SUCCESS:
        console.log(action.payload)

      // return {...state}
      return {
          ...state,
          loading: false,
          data: {
            ...state.data,
            data: action.payload.data,
            count: action.payload.count,
            lastPage: action.payload.lastPage,
            page: action.payload.page,
            perPage: action.payload.perPage,
            total: action.payload.total,
          },
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

        case types.BET_REQUEST:
        return {
          ...state,
          loadingBet: true,
        };
        case types.BET_SUCCESS:
        return {
          ...state,
          loadingBet: false,
        };
        case types.BET_FAILURE:
        return {
          ...state,
          loadingBet: false,
        };

        default:
      return state;
      }
  };

  export default sportsdetailReducer;
