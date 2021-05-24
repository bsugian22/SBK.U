import * as types from "./sportTypes";
import axios from "../../plugins/axios";
import { fetchMarketPerMatchesSuccessInplay, fetchMarketPerMatchesFailureInplay, setWSMarketInplay } from "../inplay/inplayActions";
import moment from "moment";
import { camelize, snakelize } from "../../helpers/object";
import { fetchMarketPerMatchesSuccesEsports, fetchPrematches } from "../esport/esportActions";
import socketIOClient from "socket.io-client";

export const socket = socketIOClient("wss://io.vosa.dev");

export const setWSMarket = (market) => {
  return {
    type: types.SET_WS_MARKET,
    payload: market
  };
};

export const showSidebarBookmark = () => {
  return {
    type: types.SHOW_SIDEBAR_BOOKMARK,
  };
};

export const sortByLeague = () => {
  return {
    type: types.SORT_BY_LEAGUE,
  };
};

export const setSideBarLeagueId = (data) => {
  return {
    type: types.SET_SIDEBAR_LEAGUE_ID,
    payload: data
  };
};

export const setSideBarCountryId = (data) => {
  return {
    type: types.SET_SIDEBAR_COUNTRY_ID,
    payload: data
  };
};

export const setSideBarSportsId = (data) => {
  return {
    type: types.SET_SIDEBAR_SPORTS_ID,
    payload: data
  };
};

export const originalMatches = (matches) => {
  return {
    type: types.SET_ORIGINAL_MATCHES,
    payload: matches
  };
};

export const setMarketType = (type) => {
  return {
    type: types.SET_MARKET_TYPE,
    payload: type
  };
};

export const setSearchOff = () => {
  return {
    type: types.SET_SEARCH_OFF,
  };
};

export const setSearchMatches = (matches) => {
  return {
    type: types.SET_SEARCH_MATCHES,
    payload: matches
  };
};

export const setSearch = (id) => {
  return {
    type: types.SET_SEARCH,
    payload: id
  };
};


export const setBookmark = (id) => {
  return {
    type: types.SET_BOOKMARK,
    payload: id
  };
};

export const setBookmarkMatches = (matches) => {
  return {
    type: types.SET_BOOKMARK_MATCHES,
    payload: matches
  };
};
export const setBookmarkOff = () => {
  return {
    type: types.SET_BOOKMARK_OFF,
  };
};

export const resetAllData = (matches) => {
  return {
    type: types.RESET_SETTINGS,
    payload: matches
  };
};

export const sortByTime = () => {
  return {
    type: types.SORT_BY_TIME,
  };
};

export const setSportsType = (id) => {
  return {
    type: types.SET_SPORTS_TYPE,
    payload: id
  };
};

export const resetSideMarkets = () => {
  return {
    type: types.RESET_SIDE_MARKETS,
  };
};

export const fetchMatchesRequest = () => {
  return {
    type: types.FETCH_MATCHES_REQUEST,
  };
};

export const fetchMatchesSuccess = (data) => {
  return {
    type: types.FETCH_MATCHES_SUCCESS,
    payload: data,
  };
};

export const fetchMatchesFailure = (data) => {
  return {
    type: types.FETCH_MATCHES_FAILURE,
    payload: data,
  };
};

export const fetchTournamentsSuccess = (data) => {
  return {
    type: types.FETCH_TOURNAMENTS_SUCCESS,
    payload: data,
  };
};

export const fetchTournamentsFailure = (data) => {
  return {
    type: types.FETCH_TOURNAMENTS_FAILURE,
    payload: data,
  };
};

export const fetchCompetitorsSuccess = (data) => {
  return {
    type: types.FETCH_COMPETITORS_SUCCESS,
    payload: data,
  };
};

export const fetchCompetitorsFailure = (data) => {
  return {
    type: types.FETCH_COMPETITORS_FAILURE,
    payload: data,
  };
};

export const fetchOutcomesSuccess = (data) => {
  return {
    type: types.FETCH_OUTCOMES_SUCCESS,
    payload: data,
  };
};

export const fetchOutcomesFailure = (data) => {
  return {
    type: types.FETCH_OUTCOMES_FAILURE,
    payload: data,
  };
};

export const fetchMarketsSuccess = (data) => {
  return {
    type: types.FETCH_MARKETS_SUCCESS,
    payload: data,
  };
};

export const fetchMarketsFailure = (data) => {
  return {
    type: types.FETCH_MARKETS_FAILURE,
    payload: data,
  };
};

export const fetchSportsSuccess = (data) => {
  return {
    type: types.FETCH_SPORTS_SUCCESS,
    payload: data,
  };
};

export const fetchSportsFailure = (data) => {
  return {
    type: types.FETCH_SPORTS_FAILURE,
    payload: data,
  };
};

export const fetchMarketPerMatchesSuccess = (data) => {
  return {
    type: types.FETCH_MARKET_PER_MATCHES_SUCCESS,
    payload: data,
  };
};

export const fetchMarketPerMatchesFailure = (data) => {
  return {
    type: types.FETCH_MARKET_PER_MATCHES_FAILURE,
    payload: data,
  };
};

export const fetchMarketPerMatchSuccess = (data) => {
  return {
    type: types.FETCH_MARKET_PER_MATCH_SUCCESS,
    payload: data,
  };
};

export const fetchMarketPerMatchFailure = (data) => {
  return {
    type: types.FETCH_MARKET_PER_MATCH_FAILURE,
    payload: data,
  };
};

export const noMatches = () => {
  return {
    type: types.NO_MATCHES,
  };
};



export const searchMatches = (text, matches, competitors, tournaments, type) => {
  return (dispatch) => {

    dispatch(setBookmarkOff())
    dispatch(setSearchOff())

    const searchMatches = { data: [] }

    let tournamentsData = tournaments.filter(x => x.tournament.name.ko.toLowerCase().includes(text.toLowerCase()));
    let competitorsData = competitors.filter(x => x.competitor?.name?.ko ? x.competitor.name.ko.toLowerCase().includes(text.toLowerCase()) : "");


    tournamentsData.map((tournament) => {
      let tournamentMatchesData = matches.filter(x => x.tournamentId == tournament.id);
      let simpleTournamentMatchesData = matches.filter(x => x.simpleTournamentId == tournament.id);
      searchMatches.data.push(...tournamentMatchesData)
      searchMatches.data.push(...simpleTournamentMatchesData)
    })

    competitorsData.map((competitor) => {
      let matchesDataHome = matches.filter(x => x.homeTeamId == competitor.id);
      let matchesDataAway = matches.filter(x => x.awayTeamId == competitor.id);
      searchMatches.data.push(...matchesDataHome)
      searchMatches.data.push(...matchesDataAway)
    })


    if (type == 'prematch') {
      dispatch(setMatchIds(searchMatches, 1, type))
      dispatch(setSearchMatches(searchMatches))
    }
  };
};


export const sortMatchesByTime = (matches, type, sportsTypeId, page, isSearching) => {
  return (dispatch) => {
    dispatch(setBookmarkOff())

    matches.data.sort(function compare(a, b) {
      var dateA = new Date(a.startAt);
      var dateB = new Date(b.startAt);
      return dateA - dateB;
    });


    if (type == 'prematch') {
      if (isSearching) {
        dispatch(setMatchIds(matches, page, type))
        dispatch(setSearchMatches(matches))
      } else {
        if (sportsTypeId == null) {
          dispatch(setMatchIds(matches, page, type))
        } else {
          dispatch(setSportsType({ id: sportsTypeId, matches: matches.data }))
          dispatch(setMatchIds(matches, page, type))
        }
      }


    }
  };
};

export const sortByBookmarked = (matches, type) => {
  return (dispatch) => {
    if (type == 'prematch') {
      dispatch(setBookmarkMatches(matches))
      dispatch(setMatchIds(matches, 1, type)) 
    }
  };
};



export const sortMatchesByLeague = (matches, type, sportsTypeId, isSearching) => {

  return (dispatch) => {
    dispatch(setBookmarkOff())
    let sortedMatches = matches.data.sort(function (a, b) {
      return a.tournamentId - b.tournamentId 
    });


    if (type == 'prematch') {
      if (isSearching) {
        dispatch(setMatchIds({ data: sortedMatches }, 1, type))
        dispatch(setSearchMatches(matches))
      } else {
        if (sportsTypeId == null) {
          dispatch(setMatchIds({ data: sortedMatches }, 1, type))
        } else {
          dispatch(setMatchIds({ data: sortedMatches }, 1, type))
          dispatch(setSportsType({ id: sportsTypeId, matches: sortedMatches }))
        }
      }
    }

  };
};

export const resetAll = (matches) => {
  return (dispatch) => {
    dispatch(resetAllData(matches));
    matches.data.sort(function compare(a, b) {
      var dateA = new Date(a.startAt);
      var dateB = new Date(b.startAt);
      return dateA - dateB;
    });
    dispatch(setMatchIds(matches, 1, 'prematch'))
  };
};


export const fetchMatches = (esports) => {
  return (dispatch) => {
    dispatch(fetchMatchesRequest())
    axios.get(`/api/feed/matches`)
      .then(response => {
        const matches = camelize(response.data);
        
        matches.data.sort(function(a,b){
          return new Date(a.dateAt) - new Date(b.dateAt);
        });


        var defaultMatches = matches.data.filter((x) => {
          return x.type == 1;
        });

        if (esports) {
          dispatch(fetchPrematches(matches))
          dispatch(setMatchIds(matches, 1, 'esports'))
        } else {
          dispatch(fetchMatchesSuccess(matches))
          dispatch(setMatchIds({ data: defaultMatches }, 1, 'prematch'))
          dispatch(setSportsType({ id: 1, matches: defaultMatches }))
        }

      }).catch(error => {
        const errorMsg = error.message;
        dispatch(fetchMatchesFailure(errorMsg))
      })
  };
};


export const setMatchIds = (matches, pageNumber, type) => {
  return (dispatch) => {
    let index = (pageNumber * 30) - 30
    let perPage = pageNumber * 30;
    const matchIds = [];
    for (let i = index; i < perPage; i++) {
      if (matches.data[i]?.id) {
        let id = matches.data[i].id
        matchIds.push({ id: id });
      }
    }

    if (matchIds.length) {
      if (type == 'prematch') {
        dispatch(fetchMarketPerMatches(matchIds, pageNumber, type))
      }
      if (type == 'live') {
        dispatch(fetchMarketPerMatches(matchIds, pageNumber, type))
      }
      if (type == 'esports') {
        dispatch(fetchMarketPerMatches(matchIds, pageNumber, type))
      }
    } else {
      dispatch(noMatches())
    }
  };
};

export const fetchMarketPerMatches = (ids, pageNumber, type) => {
  return (dispatch) => {
    axios.post(`/api/feed/market`, { matches: ids })
      .then(response => {
        const markets = camelize(response.data);
        markets.pageNumber = pageNumber
        dispatch(sportWebSocket(ids))
        if (type == 'prematch') {
          dispatch(fetchMarketPerMatchesSuccess(markets))
        }
        if (type == 'live') {
          dispatch(fetchMarketPerMatchesSuccessInplay(markets))
        }
        if (type == 'esports') {
          dispatch(fetchMarketPerMatchesSuccesEsports(markets))
        }
      }).catch(error => {
        const errorMsg = error.message;
        if (type == 'prematch') {
          dispatch(fetchMarketPerMatchesFailure(errorMsg))
        }
        if (type == 'live') {
          dispatch(fetchMarketPerMatchesFailureInplay(errorMsg))
        }
        if (type == 'esports') {
          dispatch(fetchMarketPerMatchesFailureEsports(errorMsg))
        }
      })
  };
};

export const fetchMarketPerMatch = (id) => {
  return (dispatch) => {
    axios.get(`/api/feed/market/` + id)
      .then(response => {
        const markets = camelize(response.data);

        dispatch(fetchMarketPerMatchSuccess(markets))
      }).catch(error => {
        const errorMsg = error.message;
        dispatch(fetchMarketPerMatchFailure(errorMsg))
      })
  };
};

export const fetchTournaments = () => {
  return (dispatch) => {
    axios.get(`/api/feed/tournament/description`)
      .then(response => {
        const sports = camelize(response.data);
        dispatch(fetchTournamentsSuccess(sports))
      }).catch(error => {
        const errorMsg = error.message;
        dispatch(fetchTournamentsFailure(errorMsg))
      })
  };
};

export const fetchCompetitors = () => {
  return (dispatch) => {
    axios.get(`/api/feed/competitor/description`)
      .then(response => {
        const sports = camelize(response.data);
        dispatch(fetchCompetitorsSuccess(sports))
      }).catch(error => {
        const errorMsg = error.message;
        dispatch(fetchCompetitorsFailure(errorMsg))
      })
  };
};

export const fetchOutcomes = () => {
  return (dispatch) => {
    axios.get(`/api/feed/outcome/description`)
      .then(response => {
        const sports = camelize(response.data);
        dispatch(fetchOutcomesSuccess(sports))
      }).catch(error => {
        const errorMsg = error.message;
        dispatch(fetchOutcomesFailure(errorMsg))
      })
  };
};

export const fetchMarkets = () => {
  return (dispatch) => {
    axios.get(`/api/feed/market/description`)
      .then(response => {
        const sports = camelize(response.data);
        dispatch(fetchMarketsSuccess(sports))
      }).catch(error => {
        const errorMsg = error.message;
        dispatch(fetchMarketsFailure(errorMsg))
      })
  };
};

export const fetchSports = () => {
  return (dispatch) => {
    axios.get(`/api/feed/sports/description`)
      .then(response => {
        const sports = response.data;
        dispatch(fetchSportsSuccess(sports))
      }).catch(error => {
        const errorMsg = error.message;
        dispatch(fetchSportsFailure(errorMsg))
      })
  };
};

export const sportWebSocket = (matches) => {
  return (dispatch) => {
    const ids = matches.map((match) => {
      return match.id;
    });
    socket.emit('book', ids);

    socket.on('changed', (match) => {
      dispatch(setWSMarket(camelize(match)))
      dispatch(setWSMarketInplay(camelize(match)))

     
    });
  }
};