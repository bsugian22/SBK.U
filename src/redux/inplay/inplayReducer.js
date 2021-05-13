import { camelize } from "../../helpers/object";
import * as types from "./inplayTypes";

const initialState = {
  loading: false,
  error: "",
  active_index: null,
  matches: [],
  currentPage: 1,
  lastPage: 1,
  mainMarkets: [],
  sideMarket: [],
  sportsTypeId: null,
  sportsMatches: { data: [] },
  sportTypeIds: [ 137],
  tournamentIds: [210, 921],
};

const inplayReducer = (state = initialState, action) => {
  switch (action.type) {

    case types.SET_SPORTS_TYPE_INPLAY:
      let lastPageType = Math.ceil(action.payload.matches.length / 30)

      return {
        ...state,
        lastPage: lastPageType,
        sportsTypeId: action.payload.id,
        sportsMatches: { data: action.payload.matches },
      };

    case types.SET_WS_MARKETS_INPLAY:
      const wsData = action.payload
      const wsMatchId = wsData.matchId
      state.mainMarkets.map((match, index) => {
        if (match.id == wsMatchId) {

          wsData.markets.map((wsMarket) => {

            let wsOutcomes = wsMarket.outcomes; // list of outcomes comeing from the ws
            let wsSpecifier = JSON.stringify(wsMarket.specifier)
            let wsMarketId = wsMarket.marketId;
            let wsStatus = wsMarket.status

            match.mainMarkets['1X2'].map((wwl) => {
              let marketId = wwl.marketId
              let detailsSpecifier = JSON.stringify(wwl.market.specifier)
              let detailsOutcomes = wwl.outcomes;
              if (marketId == wsMarketId) {
                wwl.status = wsStatus;

                if (wsSpecifier == "{}") { // check if the specifer is only one 

                  wsOutcomes.map((data, index) => {
                    let ws_outcome_id = data.outcomeId;
                    let ws_new_outcome_odds = data.odds;
                    let ws_active_status = data.active;

                    detailsOutcomes.map((data, index) => {
                      // check if the outcomes has the same id and name

                      if (ws_outcome_id == data.outcomeId) {
                        let old_value = data.odds;
                        data.odds = ws_new_outcome_odds // changing value of the state of the outcomes odds
                        data.oldOdds = old_value // changing value of the state of the outcomes old odds
                        data.active = ws_active_status // changing of active stat
                      }
                    })
                  })

                } else {
                  if (wsSpecifier === detailsSpecifier) {

                    wsOutcomes.map((data, index) => {
                      let ws_outcome_id = data.outcomeId;
                      let ws_new_outcome_odds = data.odds;
                      let ws_active_status = data.active;
                      detailsOutcomes.map((data, index) => {
                        // check if the outcomes has the same id and name

                        if (ws_outcome_id == data.outcomeId) {
                          let old_value = data.odds;
                          data.odds = ws_new_outcome_odds // changing value of the state of the outcomes odds
                          data.oldOdds = old_value // changing value of the state of the outcomes old odds
                          data.active = ws_active_status
                        }
                      })

                    })
                  }
                }

              }
            })
            match.mainMarkets['hcp'].map((hcp) => {
              let marketId = hcp.marketId
              let detailsSpecifier = JSON.stringify(hcp.market.specifier)
              let detailsOutcomes = hcp.outcomes;
              if (marketId == wsMarketId) {
                hcp.status = wsStatus;

                if (wsSpecifier == "{}") { // check if the specifer is only one 

                  wsOutcomes.map((data, index) => {
                    let ws_outcome_id = data.outcomeId;
                    let ws_new_outcome_odds = data.odds;
                    let ws_active_status = data.active;

                    detailsOutcomes.map((data, index) => {
                      // check if the outcomes has the same id and name

                      if (ws_outcome_id == data.outcomeId) {
                        let old_value = data.odds;
                        data.odds = ws_new_outcome_odds // changing value of the state of the outcomes odds
                        data.oldOdds = old_value // changing value of the state of the outcomes old odds
                        data.active = ws_active_status // changing of active stat
                      }
                    })
                  })

                } else {
                  if (wsSpecifier === detailsSpecifier) {

                    wsOutcomes.map((data, index) => {
                      let ws_outcome_id = data.outcomeId;
                      let ws_new_outcome_odds = data.odds;
                      let ws_active_status = data.active;
                      detailsOutcomes.map((data, index) => {
                        // check if the outcomes has the same id and name

                        if (ws_outcome_id == data.outcomeId) {
                          let old_value = data.odds;
                          data.odds = ws_new_outcome_odds // changing value of the state of the outcomes odds
                          data.oldOdds = old_value // changing value of the state of the outcomes old odds
                          data.active = ws_active_status
                        }
                      })

                    })
                  }
                }

              }
            })

            match.mainMarkets['total'].map((total) => {
              let marketId = total.marketId
              let detailsSpecifier = JSON.stringify(total.market.specifier)
              let detailsOutcomes = total.outcomes;
              if (marketId == wsMarketId) {
                total.status = wsStatus;

                if (wsSpecifier == "{}") { // check if the specifer is only one 

                  wsOutcomes.map((data, index) => {
                    let ws_outcome_id = data.outcomeId;
                    let ws_new_outcome_odds = data.odds;
                    let ws_active_status = data.active;

                    detailsOutcomes.map((data, index) => {
                      // check if the outcomes has the same id and name

                      if (ws_outcome_id == data.outcomeId) {
                        let old_value = data.odds;
                        data.odds = ws_new_outcome_odds // changing value of the state of the outcomes odds
                        data.oldOdds = old_value // changing value of the state of the outcomes old odds
                        data.active = ws_active_status // changing of active stat
                      }
                    })
                  })

                } else {
                  if (wsSpecifier === detailsSpecifier) {

                    wsOutcomes.map((data, index) => {
                      let ws_outcome_id = data.outcomeId;
                      let ws_new_outcome_odds = data.odds;
                      let ws_active_status = data.active;
                      detailsOutcomes.map((data, index) => {
                        // check if the outcomes has the same id and name

                        if (ws_outcome_id == data.outcomeId) {
                          let old_value = data.odds;
                          data.odds = ws_new_outcome_odds // changing value of the state of the outcomes odds
                          data.oldOdds = old_value // changing value of the state of the outcomes old odds
                          data.active = ws_active_status
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
        ...state
      }
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
      const state_details_market = state.data.detail_data;
      const state_details_match_id = state.data.detail

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



    case types.FETCH_INPLAYS_REQUEST:
      return {
        ...state,
        mainMarkets: [],
        sideMarket: []
      };
    case types.FETCH_INPLAYS_SUCCESS:
      // add logic for pagination number and showing per table,
      let lastPage = Math.ceil(action.payload.data.length / 30)

      let matches = action.payload.data
      let inplayDatas = [];
      let inplay = action.payload.data



      state.sportTypeIds.map((id) => {
        console.log(id);
        let data = inplay.filter((x) => {
          return x.type == id;
        });
        inplayDatas.push(...data)
      })

      state.tournamentIds.map((id) => {
        console.log(id);
        let data = inplay.filter((x) => {
          return x.tournamentId == id;
        });
        inplayDatas.push(...data)
      })

      console.log(matches)
      console.log(inplayDatas)

      matches = matches.reduce(function (prev, value) {

        var isDuplicate = false;
        for (var i = 0; i < inplayDatas.length; i++) {
          if (value == inplayDatas[i]) {
            isDuplicate = true;
            break;
          }
        }

        if (!isDuplicate) {
          prev.push(value);
        }

        return prev;

      }, []);

      console.log(matches)

      return {
        ...state,
        matches: { data: matches },
        lastPage: lastPage
      };
    case types.FETCH_INPLAYS_FAILURE:
      return {
        ...state,
      };

    case types.FETCH_INPLAY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_INPLAY_SUCCESS:
      return {
        ...state,
        data: {
          ...state.data,
          detail_data: action.payload.data,
          detail: action.payload.data.id,
        },
      };
    case types.FETCH_INPLAY_FAILURE:
      return {
        ...state,
        loading: false,
        data: {
          "data": [],
          "total": 0,
          "count": 1,
          "perPage": 15,
          "page": 1,
          "lastPage": 1,
          detail: null,
          detail_data: null,
        },
        error: action.payload,
      };

    case types.FETCH_MARKET_PER_MATCHES_SUCCESS_INPLAY:
      const mainMarkets = action.payload
      let currentPage = action.payload.pageNumber
      let mainMarketsToDisplay = [];
      mainMarkets.data.map((market, index) => {
        let data = state.matches.data.find(x => x.id == market.id)

        market['1X2'].map((market, index) => {
          market.outcomes.map((outcome, outcome_index) => {
            outcome.oldOdds = null;
          })
        })

        market['hcp'].map((market, index) => {
          market.outcomes.map((outcome, outcome_index) => {
            outcome.oldOdds = null;
          })
        })

        market['total'].map((market, index) => {
          market.outcomes.map((outcome, outcome_index) => {
            outcome.oldOdds = null;
          })
        })
        mainMarketsToDisplay.push({ ...data, mainMarkets: market });
      })

      return {
        ...state,
        mainMarkets: mainMarketsToDisplay,
        currentPage: currentPage
      };

    case types.FETCH_MARKET_PER_MATCHES_FAILURE_INPLAY:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default inplayReducer;
