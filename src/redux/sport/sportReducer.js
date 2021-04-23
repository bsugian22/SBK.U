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
  lastPage: null,
  mainMarkets:[]
};

const sportReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_MATCHES_SUCCESS:
      return {
        ...state,
        matches: action.payload
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
      return {
        ...state,
        sports: action.payload
      };

    case types.FETCH_SPORTS_FAILURE:
      return {
        ...state,
        sports: []
      };

    case types.FETCH_MARKET_PER_MATCHES_SUCCESS:
      const mainMarkets = action.payload
      let mainMarketsToDisplay = [];
      mainMarkets.data.map((market,index)=>{
        let data = state.matches.data.find(x => x.id == market.id)
        mainMarketsToDisplay.push({...data,mainMarkets :market});
      })

      mainMarketsToDisplay = chain(mainMarketsToDisplay)
          .groupBy((match) => moment(match.startAt).format("YYYY-MM-DD"))
          .map((matches, startAt) => ({ startAt, matches }))
          .orderBy("startAt")
          .value();

      console.log(mainMarketsToDisplay);

      return {
        ...state,
        mainMarkets:mainMarketsToDisplay
      };

    case types.FETCH_MARKET_PER_MATCHES_FAILURE:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default sportReducer;
