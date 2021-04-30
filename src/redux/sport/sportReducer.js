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
  bookmarked: [],
  bookmarkedMatches: { data: [] },
  isBookmarkedCheck: false,
  search: "",
  searchMatches: { data: [] },
  isSearching: false
};

const sportReducer = (state = initialState, action) => {
  switch (action.type) {


    case types.SET_SEARCH_MATCHES:
      let lastPageSearch = Math.ceil(action.payload.data.length / 15)

      return {
        ...state,
        lastPage: lastPageSearch,
        searchMatches: action.payload,
        isSearching: true
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

      const bookmark_exists = state.bookmarked?.indexOf(action.payload)
      // Check if a value exists in the fruits array

      if (bookmark_exists !== -1) {
        state.bookmarked.splice(bookmark_exists, 1)
      } else {
        state.bookmarked.push(action.payload)
      }
      console.log(state.bookmarked)

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
      let lastPageBookmarked = Math.ceil(action.payload.data.length / 15)

      return {
        ...state,
        lastPage: lastPageBookmarked,
        bookmarkedMatches: action.payload,
        isBookmarkedCheck: true
      };

    case types.RESET_SETTINGS:
      let resetPage = Math.ceil(action.payload.data.length / 15)

      return {
        ...state,
        sportsTypeId: null,
        sportsMatches: { data: [] },
        sortBy: "asc",
        isBookmarkedCheck: false,
        isSearching: false,
        search: "",
        searchMatches: { data: [] },
        lastPage: resetPage
      };

    case types.SET_ORIGINAL_MATCHES:
      // console.log(action.payload)
      return {
        ...state,
        originalMatches: action.payload,
      };

    case types.SORT_BY_TIME:

      return {
        ...state,
        sortBy: action.payload
      };


    case types.SET_SPORTS_TYPE:
      let lastPageType = Math.ceil(action.payload.matches.length / 15)

      return {
        ...state,
        lastPage: lastPageType,
        sportsTypeId: action.payload.id,
        sportsMatches: { data: action.payload.matches },
        isBookmarkedCheck: false,
      };
    case types.FETCH_MATCHES_REQUEST:
      return {
        ...state,
        loading:true,
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
      let matches = action.payload
      // let lastPage = Math.ceil(action.payload.data.length / 15)
      return {
        ...state,
        matches: matches,
        // lastPage: lastPage,
      };

    case types.FETCH_MATCHES_FAILURE:
      return {
        ...state,
        loading:false,
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
      mainMarkets.data.map((market, index) => {
        let data = state.matches?.data?.find(x => x.id == market.id)

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

      console.log(mainMarketsToDisplay)
      mainMarketsToDisplay.sort(function (a, b) {
        return a.timeAt.localeCompare(b.timeAt);
      });
      console.log(mainMarketsToDisplay)

      mainMarketsToDisplay = chain(mainMarketsToDisplay)
        .groupBy((match) => moment(match.startAt).format("YYYY-MM-DD"))
        .map((matches, startAt) => ({ startAt, matches }))
        .value();



      // mainMarketsToDisplay.sort(function compare(a, b) {
      //   var dateA = new Date(a.startAt);
      //   var dateB = new Date(b.startAt);
      //   return dateA - dateB;
      // });

      // if (state.sortBy == 'asc') {
      //   mainMarketsToDisplay.sort(function compare(a, b) {
      //     var dateA = new Date(a.startAt);
      //     var dateB = new Date(b.startAt);
      //     return dateB - dateA;
      //   });
      // } else {
      //   mainMarketsToDisplay.sort(function compare(a, b) {
      //     var dateA = new Date(a.startAt);
      //     var dateB = new Date(b.startAt);
      //     return dateA - dateB;
      //   });
      // }

      return {
        ...state,
        mainMarkets: mainMarketsToDisplay,
        currentPage: currentPage,
        loading:false,
      };

    case types.FETCH_MARKET_PER_MATCHES_FAILURE:
      return {
        ...state,
      };
    case types.FETCH_MARKET_PER_MATCH_SUCCESS:
      let sideMarket = action.payload.data[0]
      // console.log(sideMarket)
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
