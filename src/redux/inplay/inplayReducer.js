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
  sportTypeIds: [137],
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
      for (let mainIndex = 0; mainIndex < state.mainMarkets.length; mainIndex++) {
        let match = state.mainMarkets[mainIndex];

        if (match.id == wsMatchId) {

          for (let marketIndex = 0; marketIndex < wsData.markets.length; marketIndex++) {
            let wsMarket = wsData.markets[marketIndex]
            let wsOutcomes = wsMarket.outcomes; // list of outcomes comeing from the ws
            let wsSpecifier = JSON.stringify(wsMarket.specifier)
            let wsMarketId = wsMarket.marketId;
            let wsStatus = wsMarket.status


            for (let wwlIndex = 0; wwlIndex < match.mainMarkets['1X2'].length; wwlIndex++) {
              let wwl = match.mainMarkets['1X2'][wwlIndex]
              let marketId = wwl.marketId
              let detailsSpecifier = JSON.stringify(wwl.market.specifier)
              let detailsOutcomes = wwl.outcomes;
              if (marketId == wsMarketId) {
                wwl.status = wsStatus;

                if (wsSpecifier == "{}") { // check if the specifer is only one 

                  for (let wsOutcomeIndex = 0; wsOutcomeIndex < wsOutcomes.length; wsOutcomeIndex++) {
                    let data = wsOutcomes[wsOutcomeIndex]
                    let ws_outcome_id = data.outcomeId;
                    let ws_new_outcome_odds = data.odds;
                    let ws_active_status = data.active;

                    for (let detailOutcomeIndex = 0; detailOutcomeIndex < detailsOutcomes.length; detailOutcomeIndex++) {
                      let data = detailsOutcomes[detailOutcomeIndex];
                      // check if the outcomes has the same id and name

                      if (ws_outcome_id == data.outcomeId) {
                        let old_value = data.odds;
                        data.odds = ws_new_outcome_odds // changing value of the state of the outcomes odds
                        data.oldOdds = old_value // changing value of the state of the outcomes old odds
                        data.active = ws_active_status // changing of active stat
                      }
                    }
                  }

                } else {
                  if (wsSpecifier === detailsSpecifier) {
                    for (let wsOutcomeIndex = 0; wsOutcomeIndex < wsOutcomes.length; wsOutcomeIndex++) {
                      let data = wsOutcomes[wsOutcomeIndex]
                      let ws_outcome_id = data.outcomeId;
                      let ws_new_outcome_odds = data.odds;
                      let ws_active_status = data.active;

                      for (let detailOutcomeIndex = 0; detailOutcomeIndex < detailsOutcomes.length; detailOutcomeIndex++) {
                        let data = detailsOutcomes[detailOutcomeIndex];
                        // check if the outcomes has the same id and name

                        if (ws_outcome_id == data.outcomeId) {
                          let old_value = data.odds;
                          data.odds = ws_new_outcome_odds // changing value of the state of the outcomes odds
                          data.oldOdds = old_value // changing value of the state of the outcomes old odds
                          data.active = ws_active_status
                        }
                      }

                    }
                  }
                }

              }
            }


            for (let hcpIndex = 0; hcpIndex < match.mainMarkets['hcp'].length; hcpIndex++) {
              let hcp = match.mainMarkets['hcp'][hcpIndex]
              let marketId = hcp.marketId
              let detailsSpecifier = JSON.stringify(hcp.market.specifier)
              let detailsOutcomes = hcp.outcomes;
              if (marketId == wsMarketId) {
                hcp.status = wsStatus;

                if (wsSpecifier == "{}") { // check if the specifer is only one 

                  for (let wsOutcomeIndex = 0; wsOutcomeIndex < wsOutcomes.length; wsOutcomeIndex++) {
                    let data = wsOutcomes[wsOutcomeIndex]
                    let ws_outcome_id = data.outcomeId;
                    let ws_new_outcome_odds = data.odds;
                    let ws_active_status = data.active;

                    for (let detailOutcomeIndex = 0; detailOutcomeIndex < detailsOutcomes.length; detailOutcomeIndex++) {
                      let data = detailsOutcomes[detailOutcomeIndex];
                      // check if the outcomes has the same id and name

                      if (ws_outcome_id == data.outcomeId) {
                        let old_value = data.odds;
                        data.odds = ws_new_outcome_odds // changing value of the state of the outcomes odds
                        data.oldOdds = old_value // changing value of the state of the outcomes old odds
                        data.active = ws_active_status // changing of active stat
                      }
                    }
                  }

                } else {
                  if (wsSpecifier === detailsSpecifier) {
                    for (let wsOutcomeIndex = 0; wsOutcomeIndex < wsOutcomes.length; wsOutcomeIndex++) {
                      let data = wsOutcomes[wsOutcomeIndex]
                      let ws_outcome_id = data.outcomeId;
                      let ws_new_outcome_odds = data.odds;
                      let ws_active_status = data.active;

                      for (let detailOutcomeIndex = 0; detailOutcomeIndex < detailsOutcomes.length; detailOutcomeIndex++) {
                        let data = detailsOutcomes[detailOutcomeIndex];
                        // check if the outcomes has the same id and name

                        if (ws_outcome_id == data.outcomeId) {
                          let old_value = data.odds;
                          data.odds = ws_new_outcome_odds // changing value of the state of the outcomes odds
                          data.oldOdds = old_value // changing value of the state of the outcomes old odds
                          data.active = ws_active_status
                        }
                      }

                    }
                  }
                }

              }
            }

            for (let totalIndex = 0; totalIndex < match.mainMarkets['total'].length; totalIndex++) {
              let total = match.mainMarkets['total'][totalIndex]
              let marketId = total.marketId
              let detailsSpecifier = JSON.stringify(total.market.specifier)
              let detailsOutcomes = total.outcomes;
              if (marketId == wsMarketId) {
                total.status = wsStatus;

                if (wsSpecifier == "{}") { // check if the specifer is only one 

                  for (let wsOutcomeIndex = 0; wsOutcomeIndex < wsOutcomes.length; wsOutcomeIndex++) {
                    let data = wsOutcomes[wsOutcomeIndex]
                    let ws_outcome_id = data.outcomeId;
                    let ws_new_outcome_odds = data.odds;
                    let ws_active_status = data.active;

                    for (let detailOutcomeIndex = 0; detailOutcomeIndex < detailsOutcomes.length; detailOutcomeIndex++) {
                      let data = detailsOutcomes[detailOutcomeIndex];
                      // check if the outcomes has the same id and name

                      if (ws_outcome_id == data.outcomeId) {
                        let old_value = data.odds;
                        data.odds = ws_new_outcome_odds // changing value of the state of the outcomes odds
                        data.oldOdds = old_value // changing value of the state of the outcomes old odds
                        data.active = ws_active_status // changing of active stat
                      }
                    }
                  }

                } else {
                  if (wsSpecifier === detailsSpecifier) {
                    for (let wsOutcomeIndex = 0; wsOutcomeIndex < wsOutcomes.length; wsOutcomeIndex++) {
                      let data = wsOutcomes[wsOutcomeIndex]
                      let ws_outcome_id = data.outcomeId;
                      let ws_new_outcome_odds = data.odds;
                      let ws_active_status = data.active;

                      for (let detailOutcomeIndex = 0; detailOutcomeIndex < detailsOutcomes.length; detailOutcomeIndex++) {
                        let data = detailsOutcomes[detailOutcomeIndex];
                        // check if the outcomes has the same id and name

                        if (ws_outcome_id == data.outcomeId) {
                          let old_value = data.odds;
                          data.odds = ws_new_outcome_odds // changing value of the state of the outcomes odds
                          data.oldOdds = old_value // changing value of the state of the outcomes old odds
                          data.active = ws_active_status
                        }
                      }

                    }
                  }
                }
              }

            }
          }


        }
      }

      return {
        ...state
      }

    case types.SET_MARKETS:

      let current_index = state.active_index;
      let set_index = action.payload;
      return {
        ...state,
        active_index: set_index,
      };


    case types.FETCH_INPLAYS_REQUEST:
      return {
        ...state,
        mainMarkets: [],
        sideMarket: []
      };
    case types.FETCH_INPLAYS_SUCCESS:
      let lastPage = Math.ceil(action.payload.data.length / 30)

      let matches = action.payload.data
      let inplayDatas = [];
      let inplay = action.payload.data


      for (let i = 0; i < state.sportTypeIds.length; i++) {
        let id = state.sportTypeIds[i]

        for (let ii = 0; ii < inplay.length; ii++) {
          let inplayType = inplay[ii].type
          if (inplayType == id) {
            inplayDatas.push(inplay[ii])
          }
        }

      }

      for (let i = 0; i < state.tournamentIds.length; i++) {
        let id = state.tournamentIds[i]

        for (let ii = 0; ii < inplay.length; ii++) {
          let tournamentId = inplay[ii].tournamentId
          if (tournamentId == id) {
            inplayDatas.push(inplay[ii])
          }
        }

      }


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
      for (let mainIndex = 0; mainIndex < mainMarkets.data.length; mainIndex++) {
        let market = mainMarkets.data[mainIndex]

        let data = state.matches?.data?.find(x => x.id == market.id)
        if (!data) {
          data = state.sportsMatches?.data?.find(x => x.id == market.id)
        }

        for (let i = 0; i < market['1X2'].length; i++) {
          for (let ii = 0; ii < market['1X2'][i].outcomes.length; ii++) {
            market['1X2'][i].outcomes[ii].oldOdds = null;
          }
        }

        for (let i = 0; i < market['hcp'].length; i++) {
          for (let ii = 0; ii < market['hcp'][i].outcomes.length; ii++) {
            market['hcp'][i].outcomes[ii].oldOdds = null;
          }
        }

        for (let i = 0; i < market['total'].length; i++) {
          for (let ii = 0; ii < market['total'][i].outcomes.length; ii++) {
            market['total'][i].outcomes[ii].oldOdds = null;
          }
        }
        mainMarketsToDisplay.push({ ...data, mainMarkets: market });

      }

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
