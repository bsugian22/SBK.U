import * as types from "./esportTypes";

const initialState = {
  loading: false,
  matches: [],
  currentPage: 1,
  lastPage: 1,
  matches: { data: [] },
  mainMarkets: [],
  sideMarket: [],
  sportsTypeId: null,
  sportsMatches: { data: [] },
  prematchMatches: [],
  inplayMatches: { data: [] },
  sportTypeIds: [1, 2, 3],
  tournamentIds: [1],
  activeMatches: "prematch"
};

const esportReducer = (state = initialState, action) => {
  switch (action.type) {

    case types.SET_SPORTS_TYPE_ESPORTS:
      let lastPageType = Math.ceil(action.payload.matches.length / 30)

      return {
        ...state,
        lastPage: lastPageType,
        sportsTypeId: action.payload.id,
        sportsMatches: { data: action.payload.matches },
      };

    case types.SET_ACTIVE_MATCHES:
      return {
        ...state,
        activeMatches: action.payload,
      }
    case types.FETCH_ESPORTS_REQUEST:
      return {
        ...state,
        matches: { data: [] },
      }
    case types.FETCH_PREMATCH:
      let prematchDatas = [];
      let prematch = action.payload.data

      state.sportTypeIds.map((id) => {
        let data = prematch.filter((x) => {
          return x.type == id;
        });
        prematchDatas.push(...data)
      })

      state.tournamentIds.map((id) => {
        let data = prematch.filter((x) => {
          return x.tournamentId == id;
        });
        prematchDatas.push(...data)
      })

      state.matches.data.push(...prematchDatas)
      let lastPagePrematch = Math.ceil(state.matches.data.length / 30)
      return {
        ...state,
        prematchMatches: prematchDatas,
        lastPage:lastPagePrematch
      }
    case types.FETCH_INPLAY:

      let inplayDatas = [];
      let inplay = action.payload.data

      state.sportTypeIds.map((id) => {
        let data = inplay.filter((x) => {
          return x.type == id;
        });
        inplayDatas.push(...data)
      })

      state.tournamentIds.map((id) => {
        let data = inplay.filter((x) => {
          return x.tournamentId == id;
        });
        inplayDatas.push(...data)
      })
      state.matches.data.push(...inplayDatas)
      let lastPageInplay = Math.ceil(state.matches.data.length / 30)
      return {
        ...state,
        inplayMatches: inplayDatas,
        lastPage:lastPageInplay
      }



    case types.FETCH_MARKET_PER_MATCHES_SUCCESS_ESPORTS:
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



    default:
      return state;
  }
};

export default esportReducer;
