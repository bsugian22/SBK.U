import * as types from "./esportTypes";

const initialState = {
  loading: false,
  matches: [],
  currentPage: 1,
  lastPage: 1,
  matches: [],
  sideMarket: [],
  sportsTypeId: null,
  sportsMatches: { data: [] },
  prematchMatches: {data:[
    {
      "id": 20521201,
      "type": "esportst", // dummy for prematch,
      "homeTeamId": 4717,
      "awayTeamId": 4694,
      "tournamentId": "esports", // dummy for prematch
      "simpleTournamentId": null,
      "homeScore": null,
      "awayScore": null,
      "matchStatus": null,
      "properties": null,
      "eventClock": null,
      "eventResults": "NotAvailable",
      "reportingStatus": null,
      "winnerCompetitor": null,
      "eventStatus": "Not_Started",
      "dateAt": "2021-06-13",
      "timeAt": "04:00:00",
      "startAt": "2021-06-12T19:00:00.000000Z",
      "createdAt": "2021-05-07 19:42:29",
      "updatedAt": "2021-05-07T10:42:30.000000Z",
      "readAt": null
  }
  ]},
  inplayMatches: {
    data: [
      {
        "id": 26292358,
        "type": 'esports',// dummy data for inplay
        "homeTeamId": 271173,
        "awayTeamId": 271165,
        "tournamentId": 'esports', // dummy data for inplay
        "simpleTournamentId": null,
        "homeScore": "31",
        "awayScore": "47",
        "matchStatus": {
          "en": "3rd quarter",
          "ko": "3쿼터",
          "zh": "第三节"
        },
        "properties": "{\"Period\":\"3\",\"WinnerId\":\"null\",\"WinningReason\":\"null\",\"AggregateWinnerId\":\"null\",\"AwayScore\":\"47.0\",\"HomeScore\":\"31.0\",\"Status\":\"1\",\"MatchStatus\":\"15\"}",
        "eventClock": {},
        "eventResults": "[]",
        "reportingStatus": null,
        "winnerCompetitor": null,
        "eventStatus": "Live",
        "dateAt": "2021-05-09",
        "timeAt": "20:00:00",
        "startAt": "2021-05-09T11:00:00.000000Z",
        "createdAt": "2021-05-09 21:02:27",
        "updatedAt": "2021-05-09T12:05:15.000000Z",
        "readAt": null
      }
    ]
  },
};

const esportReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_ESPORTS_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case types.FETCH_PREMATCH:
      return {
        ...state,
        prematchMatches: action.payload,
      }
    case types.FETCH_INPLAY:
      return {
        ...state,
        inplayMatches: action.payload,
      }
    default:
      return state;
  }
};

export default esportReducer;
