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
  activeMatches: "prematch",
  noMatches: false
};

const esportReducer = (state = initialState, action) => {
  switch (action.type) {

    case types.NO_MATCHES:
      return {
        ...state,
        mainMarkets: [],
        noMatches: true
      };

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

      state.matches.data.push(...prematchDatas)
      let lastPagePrematch = Math.ceil(state.matches.data.length / 30)
      return {
        ...state,
        prematchMatches: prematchDatas,
        lastPage: lastPagePrematch
      }
    case types.FETCH_INPLAY:

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
      state.matches.data.push(...inplayDatas)
      let lastPageInplay = Math.ceil(state.matches.data.length / 30)
      return {
        ...state,
        inplayMatches: inplayDatas,
        lastPage: lastPageInplay
      }



    case types.FETCH_MARKET_PER_MATCHES_SUCCESS_ESPORTS:
      const mainMarkets = action.payload
      let currentPage = action.payload.pageNumber
      let mainMarketsToDisplay = [];
      for (let mainIndex = 0; mainIndex < mainMarkets.data.length; mainIndex++) {

        let market = mainMarkets.data[mainIndex]

        let data = state.matches.data.find(x => x.id == market.id)
        if (data) {

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
      }

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
