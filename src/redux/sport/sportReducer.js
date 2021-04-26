import * as types from "./sportTypes";
import { chain } from "lodash";
import moment from "moment";

const initialState = {
  loading: false,
  data: [],
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
  sportsMatches: {data:[]}
};

const sportReducer = (state = initialState, action) => {
  switch (action.type) {

    case types.SET_SPORTS_TYPE:
      let lastPageType = Math.ceil(action.payload.matches.length / 15)
      
      return {
        ...state,
        lastPage: lastPageType,
        sportsTypeId:action.payload.id,
        sportsMatches:{data:action.payload.matches}
      };
    case types.FETCH_MATCHES_REQUEST:
      return {
        ...state,
        mainMarkets: [],
        sideMarket: []
      };
    case types.FETCH_MATCHES_SUCCESS:
      let lastPage = Math.ceil(action.payload.data.length / 15)
      return {
        ...state,
        matches: action.payload,
        lastPage: lastPage
      };

    case types.FETCH_MATCHES_FAILURE:
      return {
        ...state,
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
      sports.data.map((sport, index) => {
        sport.count = 0
      })
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

      mainMarketsToDisplay = chain(mainMarketsToDisplay)
        .groupBy((match) => moment(match.startAt).format("YYYY-MM-DD"))
        .map((matches, startAt) => ({ startAt, matches }))
        .orderBy("startAt")
        .value();
      return {
        ...state,
        mainMarkets: mainMarketsToDisplay,
        currentPage: currentPage
      };

    case types.FETCH_MARKET_PER_MATCHES_FAILURE:
      return {
        ...state,
      };
    case types.FETCH_MARKET_PER_MATCH_SUCCESS:
      let sideMarket = action.payload.data[0]
      console.log(sideMarket)
      sideMarket.markets.map((market, index) => {
        market.outcomes.map((outcome, outcome_index) => {
          outcome.oldOdds = null
        })
      })
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
