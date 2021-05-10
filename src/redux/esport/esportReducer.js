import * as types from "./esportTypes";

const initialState = {
  loading: false,
  matches: [],
  currentPage: 1,
  lastPage: 1,
  mainMarkets: [
    {
      "id": 21612117,
      "type": 1,
      "homeTeamId": 4703,
      "awayTeamId": 4697,
      "tournamentId": 1,
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
      "dateAt": "2021-06-15",
      "timeAt": "01:00:00",
      "startAt": "2021-06-14T16:00:00.000000Z",
      "createdAt": "2021-05-07 19:47:43",
      "updatedAt": "2021-05-07T10:47:44.000000Z",
      "readAt": null,
      "mainMarkets": {
        "id": 21612117,
        "count": 142,
        "1X2": [
          {
            "id": 51247,
            "marketId": 1,
            "producerId": 3,
            "market": {
              "specifier": {},
              "additionalInfo": {},
              "cashoutStatus": 0,
              "outcome": {}
            },
            "status": 1,
            "createdAt": "2021-05-07 19:47:45",
            "updatedAt": "2021-05-07T10:47:45.000000Z",
            "hash": "3c4851eb1ed25817a37ba1cc9f69fb23",
            "outcomes": [
              {
                "id": 242579,
                "outcomeId": "1",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 1.8,
                "enabled": 1,
                "oldOdds": null
              },
              {
                "id": 242566,
                "outcomeId": "2",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 3.5,
                "enabled": 1,
                "oldOdds": null
              },
              {
                "id": 242557,
                "outcomeId": "3",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 4.6,
                "enabled": 1,
                "oldOdds": null
              }
            ]
          }
        ],
        "total": [
          {
            "id": 51291,
            "marketId": 18,
            "producerId": 3,
            "market": {
              "specifier": {
                "total": "1.75"
              },
              "additionalInfo": {},
              "cashoutStatus": 0,
              "outcome": {}
            },
            "status": 1,
            "createdAt": "2021-05-07 19:47:45",
            "updatedAt": "2021-05-07T10:47:45.000000Z",
            "hash": "3cb9994e38745829cc75783737df5d68",
            "outcomes": [
              {
                "id": 242052,
                "outcomeId": "12",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 1.5,
                "enabled": 1,
                "oldOdds": null
              },
              {
                "id": 242049,
                "outcomeId": "13",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 2.55,
                "enabled": 1,
                "oldOdds": null
              }
            ]
          },
          {
            "id": 51300,
            "marketId": 18,
            "producerId": 3,
            "market": {
              "specifier": {
                "total": "2"
              },
              "additionalInfo": {},
              "cashoutStatus": 0,
              "outcome": {}
            },
            "status": 1,
            "createdAt": "2021-05-07 19:47:45",
            "updatedAt": "2021-05-07T10:47:45.000000Z",
            "hash": "5afbcef928cce96f722afa4ce4ebb53a",
            "outcomes": [
              {
                "id": 241953,
                "outcomeId": "12",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 1.67,
                "enabled": 1,
                "oldOdds": null
              },
              {
                "id": 241974,
                "outcomeId": "13",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 2.18,
                "enabled": 1,
                "oldOdds": null
              }
            ]
          },
          {
            "id": 51323,
            "marketId": 18,
            "producerId": 3,
            "market": {
              "specifier": {
                "total": "3.5"
              },
              "additionalInfo": {},
              "cashoutStatus": 0,
              "outcome": {}
            },
            "status": 1,
            "createdAt": "2021-05-07 19:47:45",
            "updatedAt": "2021-05-07T10:47:45.000000Z",
            "hash": "607e7265181ce2a3b0e18947f6afb6bf",
            "outcomes": [
              {
                "id": 242037,
                "outcomeId": "12",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 4.1,
                "enabled": 1,
                "oldOdds": null
              },
              {
                "id": 242033,
                "outcomeId": "13",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 1.23,
                "enabled": 1,
                "oldOdds": null
              }
            ]
          },
          {
            "id": 51325,
            "marketId": 18,
            "producerId": 3,
            "market": {
              "specifier": {
                "total": "2.25"
              },
              "additionalInfo": {},
              "cashoutStatus": 0,
              "outcome": {}
            },
            "status": 1,
            "createdAt": "2021-05-07 19:47:45",
            "updatedAt": "2021-05-07T10:47:45.000000Z",
            "hash": "8dec70e8902a9815aaffbf8bd15cbb2a",
            "outcomes": [
              {
                "id": 241946,
                "outcomeId": "12",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 1.95,
                "enabled": 1,
                "oldOdds": null
              },
              {
                "id": 241943,
                "outcomeId": "13",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 1.83,
                "enabled": 1,
                "oldOdds": null
              }
            ]
          },
          {
            "id": 51299,
            "marketId": 18,
            "producerId": 3,
            "market": {
              "specifier": {
                "total": "5.5"
              },
              "additionalInfo": {},
              "cashoutStatus": 0,
              "outcome": {}
            },
            "status": 1,
            "createdAt": "2021-05-07 19:47:45",
            "updatedAt": "2021-05-07T10:47:45.000000Z",
            "hash": "a90bd81d5c214e1684a711a8b32e277f",
            "outcomes": [
              {
                "id": 242043,
                "outcomeId": "12",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 13,
                "enabled": 1,
                "oldOdds": null
              },
              {
                "id": 242055,
                "outcomeId": "13",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 1.02,
                "enabled": 1,
                "oldOdds": null
              }
            ]
          },
          {
            "id": 51285,
            "marketId": 18,
            "producerId": 3,
            "market": {
              "specifier": {
                "total": "4.5"
              },
              "additionalInfo": {},
              "cashoutStatus": 0,
              "outcome": {}
            },
            "status": 1,
            "createdAt": "2021-05-07 19:47:45",
            "updatedAt": "2021-05-07T10:47:45.000000Z",
            "hash": "acf908109f8a7a2a69dc9778618e3e07",
            "outcomes": [
              {
                "id": 242028,
                "outcomeId": "12",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 8,
                "enabled": 1,
                "oldOdds": null
              },
              {
                "id": 242026,
                "outcomeId": "13",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 1.07,
                "enabled": 1,
                "oldOdds": null
              }
            ]
          },
          {
            "id": 51287,
            "marketId": 18,
            "producerId": 3,
            "market": {
              "specifier": {
                "total": "2.75"
              },
              "additionalInfo": {},
              "cashoutStatus": 0,
              "outcome": {}
            },
            "status": 1,
            "createdAt": "2021-05-07 19:47:45",
            "updatedAt": "2021-05-07T10:47:45.000000Z",
            "hash": "d30a7eaa36450aaeb951dd56ff3473e7",
            "outcomes": [
              {
                "id": 242024,
                "outcomeId": "12",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 2.6,
                "enabled": 1,
                "oldOdds": null
              },
              {
                "id": 242005,
                "outcomeId": "13",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 1.48,
                "enabled": 1,
                "oldOdds": null
              }
            ]
          },
          {
            "id": 51314,
            "marketId": 18,
            "producerId": 3,
            "market": {
              "specifier": {
                "total": "1.5"
              },
              "additionalInfo": {},
              "cashoutStatus": 0,
              "outcome": {}
            },
            "status": 1,
            "createdAt": "2021-05-07 19:47:45",
            "updatedAt": "2021-05-07T10:47:45.000000Z",
            "hash": "d4ee9a258c310a069af9c90ff6cb1d6e",
            "outcomes": [
              {
                "id": 241945,
                "outcomeId": "12",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 1.4,
                "enabled": 1,
                "oldOdds": null
              },
              {
                "id": 241952,
                "outcomeId": "13",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 2.9,
                "enabled": 1,
                "oldOdds": null
              }
            ]
          },
          {
            "id": 51294,
            "marketId": 18,
            "producerId": 3,
            "market": {
              "specifier": {
                "total": "0.5"
              },
              "additionalInfo": {},
              "cashoutStatus": 0,
              "outcome": {}
            },
            "status": 1,
            "createdAt": "2021-05-07 19:47:45",
            "updatedAt": "2021-05-07T10:47:45.000000Z",
            "hash": "d67640a41df6af485c1176170fd2a12a",
            "outcomes": [
              {
                "id": 241954,
                "outcomeId": "12",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 1.08,
                "enabled": 1,
                "oldOdds": null
              },
              {
                "id": 241939,
                "outcomeId": "13",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 7.6,
                "enabled": 1,
                "oldOdds": null
              }
            ]
          },
          {
            "id": 51317,
            "marketId": 18,
            "producerId": 3,
            "market": {
              "specifier": {
                "total": "2.5"
              },
              "additionalInfo": {},
              "cashoutStatus": 0,
              "outcome": {}
            },
            "status": 1,
            "createdAt": "2021-05-07 19:47:45",
            "updatedAt": "2021-05-07T10:47:45.000000Z",
            "hash": "df1c948702b1b2959030fb8204cfe327",
            "outcomes": [
              {
                "id": 241987,
                "outcomeId": "12",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 2.22,
                "enabled": 1,
                "oldOdds": null
              },
              {
                "id": 242023,
                "outcomeId": "13",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 1.64,
                "enabled": 1,
                "oldOdds": null
              }
            ]
          }
        ],
        "hcp": [
          {
            "id": 51184,
            "marketId": 16,
            "producerId": 3,
            "market": {
              "specifier": {
                "hcp": "0"
              },
              "additionalInfo": {},
              "cashoutStatus": 0,
              "outcome": {}
            },
            "status": 1,
            "createdAt": "2021-05-07 19:47:45",
            "updatedAt": "2021-05-07T10:47:45.000000Z",
            "hash": "3bf9e470e1b32e7d0c41f080fe532083",
            "outcomes": [
              {
                "id": 242493,
                "outcomeId": "1714",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 1.33,
                "enabled": 1,
                "oldOdds": null
              },
              {
                "id": 242495,
                "outcomeId": "1715",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 3.35,
                "enabled": 1,
                "oldOdds": null
              }
            ]
          },
          {
            "id": 51220,
            "marketId": 16,
            "producerId": 3,
            "market": {
              "specifier": {
                "hcp": "-0.25"
              },
              "additionalInfo": {},
              "cashoutStatus": 0,
              "outcome": {}
            },
            "status": 1,
            "createdAt": "2021-05-07 19:47:45",
            "updatedAt": "2021-05-07T10:47:45.000000Z",
            "hash": "52b97ebae376b8e4a7b17dda1343c9ce",
            "outcomes": [
              {
                "id": 242499,
                "outcomeId": "1714",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 1.57,
                "enabled": 1,
                "oldOdds": null
              },
              {
                "id": 242500,
                "outcomeId": "1715",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 2.43,
                "enabled": 1,
                "oldOdds": null
              }
            ]
          },
          {
            "id": 51206,
            "marketId": 16,
            "producerId": 3,
            "market": {
              "specifier": {
                "hcp": "-1"
              },
              "additionalInfo": {},
              "cashoutStatus": 0,
              "outcome": {}
            },
            "status": 1,
            "createdAt": "2021-05-07 19:47:45",
            "updatedAt": "2021-05-07T10:47:45.000000Z",
            "hash": "8f045bf3e41e22dbe44cf222494681cb",
            "outcomes": [
              {
                "id": 242505,
                "outcomeId": "1714",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 2.5,
                "enabled": 1,
                "oldOdds": null
              },
              {
                "id": 242496,
                "outcomeId": "1715",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 1.53,
                "enabled": 1,
                "oldOdds": null
              }
            ]
          },
          {
            "id": 51224,
            "marketId": 16,
            "producerId": 3,
            "market": {
              "specifier": {
                "hcp": "-0.75"
              },
              "additionalInfo": {},
              "cashoutStatus": 0,
              "outcome": {}
            },
            "status": 1,
            "createdAt": "2021-05-07 19:47:45",
            "updatedAt": "2021-05-07T10:47:45.000000Z",
            "hash": "9464b35e44ef87b099c381dabaafe296",
            "outcomes": [
              {
                "id": 242497,
                "outcomeId": "1714",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 2.05,
                "enabled": 1,
                "oldOdds": null
              },
              {
                "id": 242498,
                "outcomeId": "1715",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 1.78,
                "enabled": 1,
                "oldOdds": null
              }
            ]
          },
          {
            "id": 51222,
            "marketId": 16,
            "producerId": 3,
            "market": {
              "specifier": {
                "hcp": "-1.25"
              },
              "additionalInfo": {},
              "cashoutStatus": 0,
              "outcome": {}
            },
            "status": 0,
            "createdAt": "2021-05-07 19:47:45",
            "updatedAt": "2021-05-07T10:47:45.000000Z",
            "hash": "e84cc6a1208a7fbc43ed797c5af25598",
            "outcomes": []
          },
          {
            "id": 51218,
            "marketId": 16,
            "producerId": 3,
            "market": {
              "specifier": {
                "hcp": "-0.5"
              },
              "additionalInfo": {},
              "cashoutStatus": 0,
              "outcome": {}
            },
            "status": 1,
            "createdAt": "2021-05-07 19:47:45",
            "updatedAt": "2021-05-07T10:47:45.000000Z",
            "hash": "fa2f6b1a0b8a39251205a27794a21bd4",
            "outcomes": [
              {
                "id": 242501,
                "outcomeId": "1714",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 1.8,
                "enabled": 1,
                "oldOdds": null
              },
              {
                "id": 242502,
                "outcomeId": "1715",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 2.03,
                "enabled": 1,
                "oldOdds": null
              }
            ]
          }
        ]
      }
    },
    {
      "id": 20570279,
      "type": 1,
      "homeTeamId": 4748,
      "awayTeamId": 4722,
      "tournamentId": 133,
      "simpleTournamentId": null,
      "homeScore": null,
      "awayScore": null,
      "matchStatus": null,
      "properties": null,
      "eventClock": null,
      "eventResults": "Unknown",
      "reportingStatus": null,
      "winnerCompetitor": null,
      "eventStatus": "Not_Started",
      "dateAt": "2021-06-15",
      "timeAt": "08:00:00",
      "startAt": "2021-06-14T23:00:00.000000Z",
      "createdAt": "2021-05-09 18:51:37",
      "updatedAt": "2021-05-09T09:51:38.000000Z",
      "readAt": null,
      "mainMarkets": {
        "id": 20570279,
        "count": 0,
        "1X2": [],
        "total": [],
        "hcp": []
      }
    },
    {
      "id": 20569211,
      "type": 1,
      "homeTeamId": 4820,
      "awayTeamId": 4757,
      "tournamentId": 133,
      "simpleTournamentId": null,
      "homeScore": null,
      "awayScore": null,
      "matchStatus": null,
      "properties": null,
      "eventClock": null,
      "eventResults": "Unknown",
      "reportingStatus": null,
      "winnerCompetitor": null,
      "eventStatus": "Not_Started",
      "dateAt": "2021-06-15",
      "timeAt": "11:00:00",
      "startAt": "2021-06-15T02:00:00.000000Z",
      "createdAt": "2021-05-09 18:50:51",
      "updatedAt": "2021-05-09T09:50:53.000000Z",
      "readAt": null,
      "mainMarkets": {
        "id": 20569211,
        "count": 0,
        "1X2": [],
        "total": [],
        "hcp": []
      }
    },
    {
      "id": 26221262,
      "type": 1,
      "homeTeamId": 640672,
      "awayTeamId": 391986,
      "tournamentId": null,
      "simpleTournamentId": 100388,
      "homeScore": "0",
      "awayScore": "0",
      "matchStatus": {
        "en": "1st half",
        "ko": "전반전",
        "zh": "上半场"
      },
      "properties": "{\"Period\":\"1\",\"WinnerId\":\"null\",\"WinningReason\":\"null\",\"AggregateWinnerId\":\"null\",\"AwayScore\":\"0.0\",\"HomeScore\":\"0.0\",\"Status\":\"1\",\"MatchStatus\":\"6\"}",
      "eventClock": {},
      "eventResults": "[]",
      "reportingStatus": null,
      "winnerCompetitor": null,
      "eventStatus": "Live",
      "dateAt": "2021-05-09",
      "timeAt": "17:00:00",
      "startAt": "2021-05-09T08:00:00.000000Z",
      "createdAt": "2021-05-08 20:07:16",
      "updatedAt": "2021-05-09T08:21:15.000000Z",
      "readAt": null,
      "mainMarkets": {
        "id": 26221262,
        "count": 0,
        "1X2": [
          {
            "id": 51247,
            "marketId": 1,
            "producerId": 3,
            "market": {
              "specifier": {},
              "additionalInfo": {},
              "cashoutStatus": 0,
              "outcome": {}
            },
            "status": 1,
            "createdAt": "2021-05-07 19:47:45",
            "updatedAt": "2021-05-07T10:47:45.000000Z",
            "hash": "3c4851eb1ed25817a37ba1cc9f69fb23",
            "outcomes": [
              {
                "id": 242579,
                "outcomeId": "1",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 1.8,
                "enabled": 1,
                "oldOdds": null
              },
              {
                "id": 242566,
                "outcomeId": "2",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 3.5,
                "enabled": 1,
                "oldOdds": null
              },
              {
                "id": 242557,
                "outcomeId": "3",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 4.6,
                "enabled": 1,
                "oldOdds": null
              }
            ]
          }
        ],
        "total": [
          {
            "id": 51291,
            "marketId": 18,
            "producerId": 3,
            "market": {
              "specifier": {
                "total": "1.75"
              },
              "additionalInfo": {},
              "cashoutStatus": 0,
              "outcome": {}
            },
            "status": 1,
            "createdAt": "2021-05-07 19:47:45",
            "updatedAt": "2021-05-07T10:47:45.000000Z",
            "hash": "3cb9994e38745829cc75783737df5d68",
            "outcomes": [
              {
                "id": 242052,
                "outcomeId": "12",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 1.5,
                "enabled": 1,
                "oldOdds": null
              },
              {
                "id": 242049,
                "outcomeId": "13",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 2.55,
                "enabled": 1,
                "oldOdds": null
              }
            ]
          },
          {
            "id": 51300,
            "marketId": 18,
            "producerId": 3,
            "market": {
              "specifier": {
                "total": "2"
              },
              "additionalInfo": {},
              "cashoutStatus": 0,
              "outcome": {}
            },
            "status": 1,
            "createdAt": "2021-05-07 19:47:45",
            "updatedAt": "2021-05-07T10:47:45.000000Z",
            "hash": "5afbcef928cce96f722afa4ce4ebb53a",
            "outcomes": [
              {
                "id": 241953,
                "outcomeId": "12",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 1.67,
                "enabled": 1,
                "oldOdds": null
              },
              {
                "id": 241974,
                "outcomeId": "13",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 2.18,
                "enabled": 1,
                "oldOdds": null
              }
            ]
          },
          {
            "id": 51323,
            "marketId": 18,
            "producerId": 3,
            "market": {
              "specifier": {
                "total": "3.5"
              },
              "additionalInfo": {},
              "cashoutStatus": 0,
              "outcome": {}
            },
            "status": 1,
            "createdAt": "2021-05-07 19:47:45",
            "updatedAt": "2021-05-07T10:47:45.000000Z",
            "hash": "607e7265181ce2a3b0e18947f6afb6bf",
            "outcomes": [
              {
                "id": 242037,
                "outcomeId": "12",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 4.1,
                "enabled": 1,
                "oldOdds": null
              },
              {
                "id": 242033,
                "outcomeId": "13",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 1.23,
                "enabled": 1,
                "oldOdds": null
              }
            ]
          },
          {
            "id": 51325,
            "marketId": 18,
            "producerId": 3,
            "market": {
              "specifier": {
                "total": "2.25"
              },
              "additionalInfo": {},
              "cashoutStatus": 0,
              "outcome": {}
            },
            "status": 1,
            "createdAt": "2021-05-07 19:47:45",
            "updatedAt": "2021-05-07T10:47:45.000000Z",
            "hash": "8dec70e8902a9815aaffbf8bd15cbb2a",
            "outcomes": [
              {
                "id": 241946,
                "outcomeId": "12",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 1.95,
                "enabled": 1,
                "oldOdds": null
              },
              {
                "id": 241943,
                "outcomeId": "13",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 1.83,
                "enabled": 1,
                "oldOdds": null
              }
            ]
          },
          {
            "id": 51299,
            "marketId": 18,
            "producerId": 3,
            "market": {
              "specifier": {
                "total": "5.5"
              },
              "additionalInfo": {},
              "cashoutStatus": 0,
              "outcome": {}
            },
            "status": 1,
            "createdAt": "2021-05-07 19:47:45",
            "updatedAt": "2021-05-07T10:47:45.000000Z",
            "hash": "a90bd81d5c214e1684a711a8b32e277f",
            "outcomes": [
              {
                "id": 242043,
                "outcomeId": "12",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 13,
                "enabled": 1,
                "oldOdds": null
              },
              {
                "id": 242055,
                "outcomeId": "13",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 1.02,
                "enabled": 1,
                "oldOdds": null
              }
            ]
          },
          {
            "id": 51285,
            "marketId": 18,
            "producerId": 3,
            "market": {
              "specifier": {
                "total": "4.5"
              },
              "additionalInfo": {},
              "cashoutStatus": 0,
              "outcome": {}
            },
            "status": 1,
            "createdAt": "2021-05-07 19:47:45",
            "updatedAt": "2021-05-07T10:47:45.000000Z",
            "hash": "acf908109f8a7a2a69dc9778618e3e07",
            "outcomes": [
              {
                "id": 242028,
                "outcomeId": "12",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 8,
                "enabled": 1,
                "oldOdds": null
              },
              {
                "id": 242026,
                "outcomeId": "13",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 1.07,
                "enabled": 1,
                "oldOdds": null
              }
            ]
          },
          {
            "id": 51287,
            "marketId": 18,
            "producerId": 3,
            "market": {
              "specifier": {
                "total": "2.75"
              },
              "additionalInfo": {},
              "cashoutStatus": 0,
              "outcome": {}
            },
            "status": 1,
            "createdAt": "2021-05-07 19:47:45",
            "updatedAt": "2021-05-07T10:47:45.000000Z",
            "hash": "d30a7eaa36450aaeb951dd56ff3473e7",
            "outcomes": [
              {
                "id": 242024,
                "outcomeId": "12",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 2.6,
                "enabled": 1,
                "oldOdds": null
              },
              {
                "id": 242005,
                "outcomeId": "13",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 1.48,
                "enabled": 1,
                "oldOdds": null
              }
            ]
          },
          {
            "id": 51314,
            "marketId": 18,
            "producerId": 3,
            "market": {
              "specifier": {
                "total": "1.5"
              },
              "additionalInfo": {},
              "cashoutStatus": 0,
              "outcome": {}
            },
            "status": 1,
            "createdAt": "2021-05-07 19:47:45",
            "updatedAt": "2021-05-07T10:47:45.000000Z",
            "hash": "d4ee9a258c310a069af9c90ff6cb1d6e",
            "outcomes": [
              {
                "id": 241945,
                "outcomeId": "12",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 1.4,
                "enabled": 1,
                "oldOdds": null
              },
              {
                "id": 241952,
                "outcomeId": "13",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 2.9,
                "enabled": 1,
                "oldOdds": null
              }
            ]
          },
          {
            "id": 51294,
            "marketId": 18,
            "producerId": 3,
            "market": {
              "specifier": {
                "total": "0.5"
              },
              "additionalInfo": {},
              "cashoutStatus": 0,
              "outcome": {}
            },
            "status": 1,
            "createdAt": "2021-05-07 19:47:45",
            "updatedAt": "2021-05-07T10:47:45.000000Z",
            "hash": "d67640a41df6af485c1176170fd2a12a",
            "outcomes": [
              {
                "id": 241954,
                "outcomeId": "12",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 1.08,
                "enabled": 1,
                "oldOdds": null
              },
              {
                "id": 241939,
                "outcomeId": "13",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 7.6,
                "enabled": 1,
                "oldOdds": null
              }
            ]
          },
          {
            "id": 51317,
            "marketId": 18,
            "producerId": 3,
            "market": {
              "specifier": {
                "total": "2.5"
              },
              "additionalInfo": {},
              "cashoutStatus": 0,
              "outcome": {}
            },
            "status": 1,
            "createdAt": "2021-05-07 19:47:45",
            "updatedAt": "2021-05-07T10:47:45.000000Z",
            "hash": "df1c948702b1b2959030fb8204cfe327",
            "outcomes": [
              {
                "id": 241987,
                "outcomeId": "12",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 2.22,
                "enabled": 1,
                "oldOdds": null
              },
              {
                "id": 242023,
                "outcomeId": "13",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 1.64,
                "enabled": 1,
                "oldOdds": null
              }
            ]
          }
        ],
        "hcp": [
          {
            "id": 51184,
            "marketId": 16,
            "producerId": 3,
            "market": {
              "specifier": {
                "hcp": "0"
              },
              "additionalInfo": {},
              "cashoutStatus": 0,
              "outcome": {}
            },
            "status": 1,
            "createdAt": "2021-05-07 19:47:45",
            "updatedAt": "2021-05-07T10:47:45.000000Z",
            "hash": "3bf9e470e1b32e7d0c41f080fe532083",
            "outcomes": [
              {
                "id": 242493,
                "outcomeId": "1714",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 1.33,
                "enabled": 1,
                "oldOdds": null
              },
              {
                "id": 242495,
                "outcomeId": "1715",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 3.35,
                "enabled": 1,
                "oldOdds": null
              }
            ]
          },
          {
            "id": 51220,
            "marketId": 16,
            "producerId": 3,
            "market": {
              "specifier": {
                "hcp": "-0.25"
              },
              "additionalInfo": {},
              "cashoutStatus": 0,
              "outcome": {}
            },
            "status": 1,
            "createdAt": "2021-05-07 19:47:45",
            "updatedAt": "2021-05-07T10:47:45.000000Z",
            "hash": "52b97ebae376b8e4a7b17dda1343c9ce",
            "outcomes": [
              {
                "id": 242499,
                "outcomeId": "1714",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 1.57,
                "enabled": 1,
                "oldOdds": null
              },
              {
                "id": 242500,
                "outcomeId": "1715",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 2.43,
                "enabled": 1,
                "oldOdds": null
              }
            ]
          },
          {
            "id": 51206,
            "marketId": 16,
            "producerId": 3,
            "market": {
              "specifier": {
                "hcp": "-1"
              },
              "additionalInfo": {},
              "cashoutStatus": 0,
              "outcome": {}
            },
            "status": 1,
            "createdAt": "2021-05-07 19:47:45",
            "updatedAt": "2021-05-07T10:47:45.000000Z",
            "hash": "8f045bf3e41e22dbe44cf222494681cb",
            "outcomes": [
              {
                "id": 242505,
                "outcomeId": "1714",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 2.5,
                "enabled": 1,
                "oldOdds": null
              },
              {
                "id": 242496,
                "outcomeId": "1715",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 1.53,
                "enabled": 1,
                "oldOdds": null
              }
            ]
          },
          {
            "id": 51224,
            "marketId": 16,
            "producerId": 3,
            "market": {
              "specifier": {
                "hcp": "-0.75"
              },
              "additionalInfo": {},
              "cashoutStatus": 0,
              "outcome": {}
            },
            "status": 1,
            "createdAt": "2021-05-07 19:47:45",
            "updatedAt": "2021-05-07T10:47:45.000000Z",
            "hash": "9464b35e44ef87b099c381dabaafe296",
            "outcomes": [
              {
                "id": 242497,
                "outcomeId": "1714",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 2.05,
                "enabled": 1,
                "oldOdds": null
              },
              {
                "id": 242498,
                "outcomeId": "1715",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 1.78,
                "enabled": 1,
                "oldOdds": null
              }
            ]
          },
          {
            "id": 51222,
            "marketId": 16,
            "producerId": 3,
            "market": {
              "specifier": {
                "hcp": "-1.25"
              },
              "additionalInfo": {},
              "cashoutStatus": 0,
              "outcome": {}
            },
            "status": 0,
            "createdAt": "2021-05-07 19:47:45",
            "updatedAt": "2021-05-07T10:47:45.000000Z",
            "hash": "e84cc6a1208a7fbc43ed797c5af25598",
            "outcomes": []
          },
          {
            "id": 51218,
            "marketId": 16,
            "producerId": 3,
            "market": {
              "specifier": {
                "hcp": "-0.5"
              },
              "additionalInfo": {},
              "cashoutStatus": 0,
              "outcome": {}
            },
            "status": 1,
            "createdAt": "2021-05-07 19:47:45",
            "updatedAt": "2021-05-07T10:47:45.000000Z",
            "hash": "fa2f6b1a0b8a39251205a27794a21bd4",
            "outcomes": [
              {
                "id": 242501,
                "outcomeId": "1714",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 1.8,
                "enabled": 1,
                "oldOdds": null
              },
              {
                "id": 242502,
                "outcomeId": "1715",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 2.03,
                "enabled": 1,
                "oldOdds": null
              }
            ]
          }
        ]
      }
    }, {
      "id": 26292358,
      "type": 2,
      "homeTeamId": 271173,
      "awayTeamId": 271165,
      "tournamentId": 33986,
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
      "readAt": null,
      "mainMarkets": {
        "id": 26292358,
        "count": 0,
        "1X2": [
          {
            "id": 51247,
            "marketId": 1,
            "producerId": 3,
            "market": {
              "specifier": {},
              "additionalInfo": {},
              "cashoutStatus": 0,
              "outcome": {}
            },
            "status": 1,
            "createdAt": "2021-05-07 19:47:45",
            "updatedAt": "2021-05-07T10:47:45.000000Z",
            "hash": "3c4851eb1ed25817a37ba1cc9f69fb23",
            "outcomes": [
              {
                "id": 242579,
                "outcomeId": "1",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 1.8,
                "enabled": 1,
                "oldOdds": null
              },
              {
                "id": 242566,
                "outcomeId": "2",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 3.5,
                "enabled": 1,
                "oldOdds": null
              },
              {
                "id": 242557,
                "outcomeId": "3",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 4.6,
                "enabled": 1,
                "oldOdds": null
              }
            ]
          }
        ],
        "total": [
          {
            "id": 51291,
            "marketId": 18,
            "producerId": 3,
            "market": {
              "specifier": {
                "total": "1.75"
              },
              "additionalInfo": {},
              "cashoutStatus": 0,
              "outcome": {}
            },
            "status": 1,
            "createdAt": "2021-05-07 19:47:45",
            "updatedAt": "2021-05-07T10:47:45.000000Z",
            "hash": "3cb9994e38745829cc75783737df5d68",
            "outcomes": [
              {
                "id": 242052,
                "outcomeId": "12",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 1.5,
                "enabled": 1,
                "oldOdds": null
              },
              {
                "id": 242049,
                "outcomeId": "13",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 2.55,
                "enabled": 1,
                "oldOdds": null
              }
            ]
          },
          {
            "id": 51300,
            "marketId": 18,
            "producerId": 3,
            "market": {
              "specifier": {
                "total": "2"
              },
              "additionalInfo": {},
              "cashoutStatus": 0,
              "outcome": {}
            },
            "status": 1,
            "createdAt": "2021-05-07 19:47:45",
            "updatedAt": "2021-05-07T10:47:45.000000Z",
            "hash": "5afbcef928cce96f722afa4ce4ebb53a",
            "outcomes": [
              {
                "id": 241953,
                "outcomeId": "12",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 1.67,
                "enabled": 1,
                "oldOdds": null
              },
              {
                "id": 241974,
                "outcomeId": "13",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 2.18,
                "enabled": 1,
                "oldOdds": null
              }
            ]
          },
          {
            "id": 51323,
            "marketId": 18,
            "producerId": 3,
            "market": {
              "specifier": {
                "total": "3.5"
              },
              "additionalInfo": {},
              "cashoutStatus": 0,
              "outcome": {}
            },
            "status": 1,
            "createdAt": "2021-05-07 19:47:45",
            "updatedAt": "2021-05-07T10:47:45.000000Z",
            "hash": "607e7265181ce2a3b0e18947f6afb6bf",
            "outcomes": [
              {
                "id": 242037,
                "outcomeId": "12",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 4.1,
                "enabled": 1,
                "oldOdds": null
              },
              {
                "id": 242033,
                "outcomeId": "13",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 1.23,
                "enabled": 1,
                "oldOdds": null
              }
            ]
          },
          {
            "id": 51325,
            "marketId": 18,
            "producerId": 3,
            "market": {
              "specifier": {
                "total": "2.25"
              },
              "additionalInfo": {},
              "cashoutStatus": 0,
              "outcome": {}
            },
            "status": 1,
            "createdAt": "2021-05-07 19:47:45",
            "updatedAt": "2021-05-07T10:47:45.000000Z",
            "hash": "8dec70e8902a9815aaffbf8bd15cbb2a",
            "outcomes": [
              {
                "id": 241946,
                "outcomeId": "12",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 1.95,
                "enabled": 1,
                "oldOdds": null
              },
              {
                "id": 241943,
                "outcomeId": "13",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 1.83,
                "enabled": 1,
                "oldOdds": null
              }
            ]
          },
          {
            "id": 51299,
            "marketId": 18,
            "producerId": 3,
            "market": {
              "specifier": {
                "total": "5.5"
              },
              "additionalInfo": {},
              "cashoutStatus": 0,
              "outcome": {}
            },
            "status": 1,
            "createdAt": "2021-05-07 19:47:45",
            "updatedAt": "2021-05-07T10:47:45.000000Z",
            "hash": "a90bd81d5c214e1684a711a8b32e277f",
            "outcomes": [
              {
                "id": 242043,
                "outcomeId": "12",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 13,
                "enabled": 1,
                "oldOdds": null
              },
              {
                "id": 242055,
                "outcomeId": "13",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 1.02,
                "enabled": 1,
                "oldOdds": null
              }
            ]
          },
          {
            "id": 51285,
            "marketId": 18,
            "producerId": 3,
            "market": {
              "specifier": {
                "total": "4.5"
              },
              "additionalInfo": {},
              "cashoutStatus": 0,
              "outcome": {}
            },
            "status": 1,
            "createdAt": "2021-05-07 19:47:45",
            "updatedAt": "2021-05-07T10:47:45.000000Z",
            "hash": "acf908109f8a7a2a69dc9778618e3e07",
            "outcomes": [
              {
                "id": 242028,
                "outcomeId": "12",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 8,
                "enabled": 1,
                "oldOdds": null
              },
              {
                "id": 242026,
                "outcomeId": "13",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 1.07,
                "enabled": 1,
                "oldOdds": null
              }
            ]
          },
          {
            "id": 51287,
            "marketId": 18,
            "producerId": 3,
            "market": {
              "specifier": {
                "total": "2.75"
              },
              "additionalInfo": {},
              "cashoutStatus": 0,
              "outcome": {}
            },
            "status": 1,
            "createdAt": "2021-05-07 19:47:45",
            "updatedAt": "2021-05-07T10:47:45.000000Z",
            "hash": "d30a7eaa36450aaeb951dd56ff3473e7",
            "outcomes": [
              {
                "id": 242024,
                "outcomeId": "12",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 2.6,
                "enabled": 1,
                "oldOdds": null
              },
              {
                "id": 242005,
                "outcomeId": "13",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 1.48,
                "enabled": 1,
                "oldOdds": null
              }
            ]
          },
          {
            "id": 51314,
            "marketId": 18,
            "producerId": 3,
            "market": {
              "specifier": {
                "total": "1.5"
              },
              "additionalInfo": {},
              "cashoutStatus": 0,
              "outcome": {}
            },
            "status": 1,
            "createdAt": "2021-05-07 19:47:45",
            "updatedAt": "2021-05-07T10:47:45.000000Z",
            "hash": "d4ee9a258c310a069af9c90ff6cb1d6e",
            "outcomes": [
              {
                "id": 241945,
                "outcomeId": "12",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 1.4,
                "enabled": 1,
                "oldOdds": null
              },
              {
                "id": 241952,
                "outcomeId": "13",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 2.9,
                "enabled": 1,
                "oldOdds": null
              }
            ]
          },
          {
            "id": 51294,
            "marketId": 18,
            "producerId": 3,
            "market": {
              "specifier": {
                "total": "0.5"
              },
              "additionalInfo": {},
              "cashoutStatus": 0,
              "outcome": {}
            },
            "status": 1,
            "createdAt": "2021-05-07 19:47:45",
            "updatedAt": "2021-05-07T10:47:45.000000Z",
            "hash": "d67640a41df6af485c1176170fd2a12a",
            "outcomes": [
              {
                "id": 241954,
                "outcomeId": "12",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 1.08,
                "enabled": 1,
                "oldOdds": null
              },
              {
                "id": 241939,
                "outcomeId": "13",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 7.6,
                "enabled": 1,
                "oldOdds": null
              }
            ]
          },
          {
            "id": 51317,
            "marketId": 18,
            "producerId": 3,
            "market": {
              "specifier": {
                "total": "2.5"
              },
              "additionalInfo": {},
              "cashoutStatus": 0,
              "outcome": {}
            },
            "status": 1,
            "createdAt": "2021-05-07 19:47:45",
            "updatedAt": "2021-05-07T10:47:45.000000Z",
            "hash": "df1c948702b1b2959030fb8204cfe327",
            "outcomes": [
              {
                "id": 241987,
                "outcomeId": "12",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 2.22,
                "enabled": 1,
                "oldOdds": null
              },
              {
                "id": 242023,
                "outcomeId": "13",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 1.64,
                "enabled": 1,
                "oldOdds": null
              }
            ]
          }
        ],
        "hcp": [
          {
            "id": 51184,
            "marketId": 16,
            "producerId": 3,
            "market": {
              "specifier": {
                "hcp": "0"
              },
              "additionalInfo": {},
              "cashoutStatus": 0,
              "outcome": {}
            },
            "status": 1,
            "createdAt": "2021-05-07 19:47:45",
            "updatedAt": "2021-05-07T10:47:45.000000Z",
            "hash": "3bf9e470e1b32e7d0c41f080fe532083",
            "outcomes": [
              {
                "id": 242493,
                "outcomeId": "1714",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 1.33,
                "enabled": 1,
                "oldOdds": null
              },
              {
                "id": 242495,
                "outcomeId": "1715",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 3.35,
                "enabled": 1,
                "oldOdds": null
              }
            ]
          },
          {
            "id": 51220,
            "marketId": 16,
            "producerId": 3,
            "market": {
              "specifier": {
                "hcp": "-0.25"
              },
              "additionalInfo": {},
              "cashoutStatus": 0,
              "outcome": {}
            },
            "status": 1,
            "createdAt": "2021-05-07 19:47:45",
            "updatedAt": "2021-05-07T10:47:45.000000Z",
            "hash": "52b97ebae376b8e4a7b17dda1343c9ce",
            "outcomes": [
              {
                "id": 242499,
                "outcomeId": "1714",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 1.57,
                "enabled": 1,
                "oldOdds": null
              },
              {
                "id": 242500,
                "outcomeId": "1715",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 2.43,
                "enabled": 1,
                "oldOdds": null
              }
            ]
          },
          {
            "id": 51206,
            "marketId": 16,
            "producerId": 3,
            "market": {
              "specifier": {
                "hcp": "-1"
              },
              "additionalInfo": {},
              "cashoutStatus": 0,
              "outcome": {}
            },
            "status": 1,
            "createdAt": "2021-05-07 19:47:45",
            "updatedAt": "2021-05-07T10:47:45.000000Z",
            "hash": "8f045bf3e41e22dbe44cf222494681cb",
            "outcomes": [
              {
                "id": 242505,
                "outcomeId": "1714",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 2.5,
                "enabled": 1,
                "oldOdds": null
              },
              {
                "id": 242496,
                "outcomeId": "1715",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 1.53,
                "enabled": 1,
                "oldOdds": null
              }
            ]
          },
          {
            "id": 51224,
            "marketId": 16,
            "producerId": 3,
            "market": {
              "specifier": {
                "hcp": "-0.75"
              },
              "additionalInfo": {},
              "cashoutStatus": 0,
              "outcome": {}
            },
            "status": 1,
            "createdAt": "2021-05-07 19:47:45",
            "updatedAt": "2021-05-07T10:47:45.000000Z",
            "hash": "9464b35e44ef87b099c381dabaafe296",
            "outcomes": [
              {
                "id": 242497,
                "outcomeId": "1714",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 2.05,
                "enabled": 1,
                "oldOdds": null
              },
              {
                "id": 242498,
                "outcomeId": "1715",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 1.78,
                "enabled": 1,
                "oldOdds": null
              }
            ]
          },
          {
            "id": 51222,
            "marketId": 16,
            "producerId": 3,
            "market": {
              "specifier": {
                "hcp": "-1.25"
              },
              "additionalInfo": {},
              "cashoutStatus": 0,
              "outcome": {}
            },
            "status": 0,
            "createdAt": "2021-05-07 19:47:45",
            "updatedAt": "2021-05-07T10:47:45.000000Z",
            "hash": "e84cc6a1208a7fbc43ed797c5af25598",
            "outcomes": []
          },
          {
            "id": 51218,
            "marketId": 16,
            "producerId": 3,
            "market": {
              "specifier": {
                "hcp": "-0.5"
              },
              "additionalInfo": {},
              "cashoutStatus": 0,
              "outcome": {}
            },
            "status": 1,
            "createdAt": "2021-05-07 19:47:45",
            "updatedAt": "2021-05-07T10:47:45.000000Z",
            "hash": "fa2f6b1a0b8a39251205a27794a21bd4",
            "outcomes": [
              {
                "id": 242501,
                "outcomeId": "1714",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 1.8,
                "enabled": 1,
                "oldOdds": null
              },
              {
                "id": 242502,
                "outcomeId": "1715",
                "createdAt": "2021-05-07 19:47:45",
                "updatedAt": "2021-05-07T10:47:45.000000Z",
                "odds": 2.03,
                "enabled": 1,
                "oldOdds": null
              }
            ]
          }
        ]
      }
    }
  ],
  sideMarket: [],
  sportsTypeId: null,
  sportsMatches: { data: [] },
};

const esportReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_ESPORTS_REQUEST:
      return {
        ...state,
        loading: true,
      }
    default:
      return state;
  }
};

export default esportReducer;
