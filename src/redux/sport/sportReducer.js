import * as types from "./sportTypes";
import { chain } from "lodash";
import moment from "moment";


const initialState = {
  loading: false,
  data: [],
  originalMatches: [],
  matches: [],
  tournaments: [],
  competitors: [],
  outcomes: [],
  markets: [],
  sports: [],
  error: "",
  currentPage: 1,
  lastPage: 1,
  mainMarkets: [],
  sideMarket: [],
  sportsTypeId: null,
  sportsMatches: { data: [] },
  sortBy: "asc",
  bookmarkedMatches: { data: [] },
  isBookmarkedCheck: false,
  search: "",
  searchMatches: { data: [] },
  isSearching: false,
  marketType: "1x2",
  activeSideBarSportsId: null,
  activeSideBarSportsMatches: { data: [] },
  activeSideBarCountryId: null,
  activeSideBarCountryMatches: { data: [] },
  activeSideBarLeagueId: [],
  activeSideBarLeagueMatches: { data: [] },
  sidebarBookmarked: true,
  sortByLeague: false,
  sportTypeIds: [24, 3],
  tournamentIds: [210, 921],
};

const sportReducer = (state = initialState, action) => {
  switch (action.type) {


    case types.SET_WS_MARKET:
      const wsData = action.payload
      const wsMatchId = wsData.matchId

      // main markets

      for (let mainIndex = 0; mainIndex < state.mainMarkets.length; mainIndex++) {
        let main = state.mainMarkets[mainIndex];


        for (let matchIndex = 0; matchIndex < main.matches.length; matchIndex++) {
          let match = main.matches[matchIndex]

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
      }






      // sidemarkets

      if (state.sideMarket?.id == wsMatchId) {

        for (let marketIndex = 0; marketIndex < wsData.markets.length; marketIndex++) {
          const wsMarket = wsData.markets[marketIndex];
          let wsOutcomes = wsMarket.outcomes; // list of outcomes comeing from the ws
          let wsSpecifier = JSON.stringify(wsMarket.specifier)
          let wsMarketId = wsMarket.marketId;
          let wsStatus = wsMarket.status

          for (let sideMarketIndex = 0; sideMarketIndex < state.sideMarket.markets.length; sideMarketIndex++) {
            let market = state.sideMarket.markets[sideMarketIndex];
            let marketId = market.marketId
            let detailsSpecifier = JSON.stringify(market.market.specifier)
            let detailsOutcomes = market.outcomes;

            if (marketId == wsMarketId) {
              market.status = wsStatus;

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


      return {
        ...state,
      };

    case types.SORT_BY_LEAGUE:
      return {
        ...state,
        sortByLeague: true,
      };

    case types.SHOW_SIDEBAR_BOOKMARK:
      let toggleBookmark = !state.sidebarBookmarked
      return {
        ...state,
        sportsTypeId: null,
        sportsMatches: { data: [] },
        isBookmarkedCheck: false,
        search: "",
        searchMatches: { data: [] },
        isSearching: false,
        sidebarBookmarked: toggleBookmark
      };
    case types.SET_SIDEBAR_LEAGUE_ID:
      console.log(action.payload);
      console.log("action.payload");

      let lastPageLeagueSidebar = Math.ceil(action.payload.matches.length / 30)
     

      return {
        ...state,
        activeSideBarLeagueMatches: { data: action.payload.matches },
        activeSideBarLeagueId : [action.payload.id],
        lastPage: lastPageLeagueSidebar,
        sportsTypeId: null,
        sportsMatches: { data: [] },
        isBookmarkedCheck: false,
        search: "",
        searchMatches: { data: [] },
        isSearching: false,
      };

    case types.SET_SIDEBAR_COUNTRY_ID:
      let activeCountryId = null;
      let activeSidebarCountryMatches = { data: [] };
      let lastPageCountrySidebar = null
      if (action.payload.id != state.activeSideBarCountryId) {
        activeCountryId = action.payload.id
        activeSidebarCountryMatches = { data: action.payload.matches }
        lastPageCountrySidebar = Math.ceil(action.payload.matches.length / 30)
      }
      return {
        ...state,
        activeSideBarCountryId: activeCountryId,
        activeSideBarCountryMatches: activeSidebarCountryMatches,
        lastPage: lastPageCountrySidebar,
        isBookmarkedCheck: false,
        search: "",
        searchMatches: { data: [] },
        isSearching: false,
      };

    case types.SET_SIDEBAR_SPORTS_ID:
      let activeId = null;
      let activeSidebarSportsMatches = { data: [] };
      let lastPageSportsSidebar = null


      if (action.payload.id != state.activeSideBarSportsId) {
        activeId = action.payload.id
        activeSidebarSportsMatches = { data: action.payload.matches }
        lastPageSportsSidebar = Math.ceil(action.payload.matches.length / 30)
      }
      return {
        ...state,
        activeSideBarSportsId: activeId,
        activeSideBarSportsMatches: activeSidebarSportsMatches,
        lastPage: lastPageSportsSidebar,
        activeSideBarCountryId: null,
        activeSideBarCountryMatches: { data: [] },
        isBookmarkedCheck: false,
        search: "",
        searchMatches: { data: [] },
        isSearching: false,
      };

    case types.NO_MATCHES:
      return {
        ...state,
        mainMarkets: [],
      };
    case types.SET_MARKET_TYPE:
      return {
        ...state,
        marketType: action.payload,
      };
    case types.SET_SEARCH_MATCHES:
      let lastPageSearch = Math.ceil(action.payload.data.length / 30)

      return {
        ...state,
        lastPage: lastPageSearch,
        searchMatches: action.payload,
        isSearching: true,
        activeSideBarSportsId: null,
        activeSideBarSportsMatches: { data: [] },
        activeSideBarCountryId: null,
        activeSideBarCountryMatches: { data: [] },
      };

    case types.SET_SEARCH:
      return {
        ...state,
        search: action.payload,
        isSearching: true,
        sportsTypeId: null,
        sportsMatches: { data: [] },
      };

    case types.SET_BOOKMARK:


      let currentBookmarks = JSON.parse(localStorage.getItem("bookmarks"))

      if (currentBookmarks == null) {
        localStorage.setItem("bookmarks", JSON.stringify([action.payload]))
      } else {
        const bookmark_exists = currentBookmarks.indexOf(action.payload)
        if (bookmark_exists !== -1) {
          currentBookmarks.splice(bookmark_exists, 1)
        } else {
          currentBookmarks.push(action.payload)
        }
        localStorage.setItem("bookmarks", JSON.stringify(currentBookmarks))
      }

      return {
        ...state,
      };

    case types.SET_SEARCH_OFF:
      return {
        ...state,
        isSearching: false
      };
    case types.SET_BOOKMARK_OFF:
      return {
        ...state,
        isBookmarkedCheck: false
      };


    case types.SET_BOOKMARK_MATCHES:
      let lastPageBookmarked = Math.ceil(action.payload.data.length / 30)

      return {
        ...state,
        lastPage: lastPageBookmarked,
        bookmarkedMatches: action.payload,
        isBookmarkedCheck: true,
        search: "",
        searchMatches: { data: [] },
        isSearching: false,
        activeSideBarSportsId: null,
        activeSideBarSportsMatches: { data: [] },
        activeSideBarCountryId: null,
        activeSideBarCountryMatches: { data: [] },
      };

    case types.RESET_SETTINGS:
      let resetPage = Math.ceil(action.payload.data.length / 30)

      return {
        ...state,
        sortBy: "asc",
        isBookmarkedCheck: false,
        isSearching: false,
        search: "",
        searchMatches: { data: [] },
        lastPage: resetPage,
        activeSideBarSportsId: null,
        activeSideBarSportsMatches: { data: [] },
        activeSideBarCountryId: null,
        activeSideBarCountryMatches: { data: [] },
        sortByLeague: false,
      };

    case types.SET_ORIGINAL_MATCHES:
      return {
        ...state,
        originalMatches: action.payload,
      };

    case types.SORT_BY_TIME:

      return {
        ...state,
        sortByLeague: false,
      };


    case types.SET_SPORTS_TYPE:
      let lastPageType = Math.ceil(action.payload.matches.length / 30)

      return {
        ...state,
        lastPage: lastPageType,
        sportsTypeId: action.payload.id,
        sportsMatches: { data: action.payload.matches },
        isBookmarkedCheck: false,
        search: "",
        searchMatches: { data: [] },
        isSearching: false,
      };
    case types.FETCH_MATCHES_REQUEST:
      return {
        ...state,
        loading: true,
        mainMarkets: [],
        sideMarket: [],
        sportsTypeId: null,
        sportsMatches: { data: [] },
        sortBy: "asc",
        originalMatches: [],
        isSearching: false,
        search: "",
      };
    case types.FETCH_MATCHES_SUCCESS:
      let matches = action.payload.data
      // let lastPage = Math.ceil(action.payload.data.length / 15)

      let prematchDatas = [];
      let prematch = action.payload.data

      for (let i = 0; i < state.sportTypeIds.length; i++) {
        let id = state.sportTypeIds[i]

        for (let ii = 0; ii < prematch.length; ii++) {
          let prematchType = prematch[ii].type
          if (prematchType == id) {
            prematchDatas.push(prematch[ii])
          }
        }

      }

      for (let i = 0; i < state.tournamentIds.length; i++) {
        let id = state.tournamentIds[i]

        for (let ii = 0; ii < prematch.length; ii++) {
          let tournamentId = prematch[ii].tournamentId
          if (tournamentId == id) {
            prematchDatas.push(prematch[ii])
          }
        }

      }
      matches = matches.reduce(function (prev, value) {

        var isDuplicate = false;
        for (var i = 0; i < prematchDatas.length; i++) {
          if (value == prematchDatas[i]) {
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
        // lastPage: lastPage,
      };

    case types.FETCH_MATCHES_FAILURE:
      return {
        ...state,
        loading: false,
        matches: []
      };

    case types.FETCH_TOURNAMENTS_SUCCESS:
      return {
        ...state,
        tournaments: action.payload
      };

    case types.FETCH_TOURNAMENTS_FAILURE:
      return {
        ...state,
        tournaments: []
      };

    case types.FETCH_COMPETITORS_SUCCESS:
      return {
        ...state,
        competitors: action.payload
      };

    case types.FETCH_COMPETITORS_FAILURE:
      return {
        ...state,
        competitors: []
      };

    case types.FETCH_OUTCOMES_SUCCESS:
      return {
        ...state,
        outcomes: action.payload
      };

    case types.FETCH_OUTCOMES_FAILURE:
      return {
        ...state,
        outcomes: []
      };

    case types.FETCH_MARKETS_SUCCESS:
      return {
        ...state,
        markets: action.payload
      };

    case types.FETCH_MARKETS_FAILURE:
      return {
        ...state,
        markets: []
      };

    case types.FETCH_SPORTS_SUCCESS:
      let sports = action.payload
      return {
        ...state,
        sports: sports
      };

    case types.FETCH_SPORTS_FAILURE:
      return {
        ...state,
        sports: []
      };

    case types.FETCH_MARKET_PER_MATCHES_SUCCESS:
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


      if (state.sortByLeague) {
        mainMarketsToDisplay.sort(function (a, b) {
          return a.tournamentId - b.tournamentId
        });
        mainMarketsToDisplay = [{ startAt: null, matches: mainMarketsToDisplay }]
      } else {
        mainMarketsToDisplay.sort(function (a, b) {
          return a.timeAt?.localeCompare(b.timeAt);
        });
        mainMarketsToDisplay = chain(mainMarketsToDisplay)
          .groupBy((match) => moment(match.startAt).format("YYYY-MM-DD"))
          .map((matches, startAt) => ({ startAt, matches }))
          .orderBy("startAt")
          .value();
      }

      return {
        ...state,
        mainMarkets: mainMarketsToDisplay,
        currentPage: currentPage,
        loading: false,
      };

    case types.FETCH_MARKET_PER_MATCHES_FAILURE:
      return {
        ...state,
      };
    case types.FETCH_MARKET_PER_MATCH_SUCCESS:
      let sideMarket = action.payload.data[0]


      for (let i = 0; i < sideMarket.markets.length; i++) {
        for (let ii = 0; ii < sideMarket.markets[i].outcomes.length; ii++) {
          sideMarket.markets[i].outcomes[ii].oldOdds = null;
        }
      }

      return {
        ...state,
        sideMarket: sideMarket
      };
    case types.RESET_SIDE_MARKETS:
      return {
        ...state,
        sideMarket: []
      };
    case types.FETCH_MARKET_PER_MATCH_FAILURE:
      return {
        ...state,
        sideMarket: []
      };

    default:
      return state;
  }
};

export default sportReducer;
