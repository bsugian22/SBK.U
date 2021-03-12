import * as types from "./sportTypes";

const initialState = {
  loading: false,
  data: [
    {
      id: 0,
      type: 12,
      market: {
        id: 202244,
        title: {
          id: 1,
          market_name: {
            en: "1x2",
            ko: "승무패",
            zh: "胜平负",
          },
          disabled: 0,
          created_at: "2020-10-23 11:33:42",
          updated_at: "2020-10-23T02:33:42.000000Z",
        },
        status: 1,
        type: 1,
        specifier: {},
        outcomes: [
          {
            id: 750393,
            odds: 2.34,
            name: {
              id: 1,
              outcome_name: {
                en: "{$competitor1}",
                ko: "{$competitor1}",
                zh: "{$competitor1}",
              },
              created_at: "2020-10-23 11:35:35",
              updated_at: "2020-10-23T02:35:35.000000Z",
            },
            enabled: 1,
            updated_at: "2021-01-14T17:06:51.000000+09:00",
          },
          {
            id: 750392,
            odds: 21.11,
            name: {
              id: 2,
              outcome_name: {
                en: "draw",
                ko: "드로",
                zh: "平局",
              },
              created_at: "2020-10-23 11:35:35",
              updated_at: "2020-10-23T02:35:35.000000Z",
            },
            enabled: 1,
            updated_at: "2021-01-14T17:06:51.000000+09:00",
          },
          {
            id: 750391,
            odds: 1.65,
            name: {
              id: 3,
              outcome_name: {
                en: "{$competitor2}",
                ko: "{$competitor2}",
                zh: "{$competitor2}",
              },
              created_at: "2020-10-23 11:35:35",
              updated_at: "2020-10-23T02:35:35.000000Z",
            },
            enabled: 1,
            updated_at: "2021-01-14T17:06:51.000000+09:00",
          },
        ],
        updated_at: "2021-01-14T17:06:51.000000+09:00",
      },
      markets: 31,
      home_score: null,
      away_score: null,
      home_team: {
        id: 4267,
        name: {
          en: "New Zealand Warriors",
          ko: "뉴질랜드 워리어즈",
          zh: "新西兰勇士",
        },
      },
      away_team: {
        id: 7313,
        name: {
          en: "Gold Coast Titans",
          ko: "골드 코스트 타이탄즈",
          zh: "黄金海岸巨人",
        },
      },
      tournament: {
        id: 294,
        title: {
          en: "NRL",
          ko: "NRL",
          zh: "全国橄榄球联赛",
        },
        country: null,
      },
      start_at: "2021-03-13T13:00:00.000000+09:00",
      updated_at: "2021-01-14T17:06:51.000000+09:00",
    },
  ],
  error: "",
};

const sportReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_SPORTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_SPORTS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.FETCH_SPORTS_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.FETCH_SPORT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_SPORT_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.FETCH_SPORT_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.CREATE_SPORT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.CREATE_SPORT_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.CREATE_SPORT_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.UPDATE_SPORT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.UPDATE_SPORT_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.UPDATE_SPORT_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.DELETE_SPORTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.DELETE_SPORTS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.DELETE_SPORTS_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default sportReducer;
