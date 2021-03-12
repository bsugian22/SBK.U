import * as types from "./sportsdetailTypes";

const initialState = {
  loading: false,
  data: {
    id: 0,
    markets: [
      {
        id: 101812,
        title: {
          id: 15,
          market_name: {
            en: "Winning margin",
            ko: "승차",
            zh: "输赢比数",
          },
          disabled: 0,
          created_at: "2020-10-23 11:33:42",
          updated_at: "2020-10-23T02:33:42.000000Z",
        },
        status: 1,
        type: 15,
        specifier: {
          variant: "sr:winning_margin:15+",
        },
        outcomes: [
          {
            id: 388686,
            odds: 12.39,
            name: null,
            enabled: 1,
            updated_at: "2021-01-14T17:06:53.000000+09:00",
          },
          {
            id: 388685,
            odds: 8.95,
            name: null,
            enabled: 1,
            updated_at: "2021-01-14T17:06:53.000000+09:00",
          },
          {
            id: 388684,
            odds: 6.99,
            name: null,
            enabled: 1,
            updated_at: "2021-01-14T17:06:53.000000+09:00",
          },
          {
            id: 388687,
            odds: 24.68,
            name: null,
            enabled: 1,
            updated_at: "2021-01-14T17:06:53.000000+09:00",
          },
          {
            id: 388683,
            odds: 5.52,
            name: null,
            enabled: 1,
            updated_at: "2021-01-14T17:06:53.000000+09:00",
          },
          {
            id: 388682,
            odds: 4.71,
            name: null,
            enabled: 1,
            updated_at: "2021-01-14T17:06:53.000000+09:00",
          },
          {
            id: 388730,
            odds: 3.22,
            name: null,
            enabled: 1,
            updated_at: "2021-01-14T17:06:53.000000+09:00",
          },
        ],
        updated_at: "2021-01-14T17:06:53.000000+09:00",
      },
      {
        id: 101813,
        title: {
          id: 16,
          market_name: {
            en: "Handicap",
            ko: "핸디캡",
            zh: "欧洲让球盘",
          },
          disabled: 0,
          created_at: "2020-10-23 11:33:42",
          updated_at: "2020-10-23T02:33:42.000000Z",
        },
        status: 1,
        type: 16,
        specifier: {
          hcp: "6.5",
        },
        outcomes: [
          {
            id: 388677,
            odds: 1.84,
            name: {
              id: 1714,
              outcome_name: {
                en: "{$competitor1} ({+hcp})",
                ko: "{$competitor1} ({+hcp})",
                zh: "{$competitor1} ({+hcp})",
              },
              created_at: "2020-10-23 11:35:38",
              updated_at: "2020-10-23T02:35:38.000000Z",
            },
            enabled: 1,
            updated_at: "2021-01-14T17:06:53.000000+09:00",
          },
          {
            id: 388701,
            odds: 1.87,
            name: {
              id: 1715,
              outcome_name: {
                en: "{$competitor2} ({-hcp})",
                ko: "{$competitor2} ({-hcp})",
                zh: "{$competitor2} ({-hcp})",
              },
              created_at: "2020-10-23 11:35:38",
              updated_at: "2020-10-23T02:35:38.000000Z",
            },
            enabled: 1,
            updated_at: "2021-01-14T17:06:53.000000+09:00",
          },
        ],
        updated_at: "2021-01-14T17:06:53.000000+09:00",
      },
      {
        id: 101814,
        title: {
          id: 47,
          market_name: {
            en: "Halftime/fulltime",
            ko: "하프타임/풀타임",
            zh: "半场/全场",
          },
          disabled: 0,
          created_at: "2020-10-23 11:33:43",
          updated_at: "2020-10-23T02:33:43.000000Z",
        },
        status: 1,
        type: 47,
        specifier: {},
        outcomes: [
          {
            id: 388706,
            odds: 3.88,
            name: {
              id: 418,
              outcome_name: {
                en: "{$competitor1}/{$competitor1}",
                ko: "{$competitor1}/{$competitor1}",
                zh: "{$competitor1}/{$competitor1}",
              },
              created_at: "2020-10-23 11:35:35",
              updated_at: "2020-10-23T02:35:35.000000Z",
            },
            enabled: 1,
            updated_at: "2021-01-14T17:06:53.000000+09:00",
          },
          {
            id: 388725,
            odds: 45.41,
            name: {
              id: 420,
              outcome_name: {
                en: "{$competitor1}/draw",
                ko: "{$competitor1}/드로",
                zh: "{$competitor1}/平局",
              },
              created_at: "2020-10-23 11:35:35",
              updated_at: "2020-10-23T02:35:35.000000Z",
            },
            enabled: 1,
            updated_at: "2021-01-14T17:06:53.000000+09:00",
          },
          {
            id: 388747,
            odds: 6.71,
            name: {
              id: 422,
              outcome_name: {
                en: "{$competitor1}/{$competitor2}",
                ko: "{$competitor1}/{$competitor2}",
                zh: "{$competitor1}/{$competitor2}",
              },
              created_at: "2020-10-23 11:35:35",
              updated_at: "2020-10-23T02:35:35.000000Z",
            },
            enabled: 1,
            updated_at: "2021-01-14T17:06:53.000000+09:00",
          },
          {
            id: 388705,
            odds: 30.68,
            name: {
              id: 424,
              outcome_name: {
                en: "draw/{$competitor1}",
                ko: "드로/{$competitor1}",
                zh: "平局/{$competitor1}",
              },
              created_at: "2020-10-23 11:35:35",
              updated_at: "2020-10-23T02:35:35.000000Z",
            },
            enabled: 1,
            updated_at: "2021-01-14T17:06:53.000000+09:00",
          },
          {
            id: 388726,
            odds: 232,
            name: {
              id: 426,
              outcome_name: {
                en: "draw/draw",
                ko: "드로/드로",
                zh: "平局/平局",
              },
              created_at: "2020-10-23 11:35:35",
              updated_at: "2020-10-23T02:35:35.000000Z",
            },
            enabled: 1,
            updated_at: "2021-01-14T17:06:53.000000+09:00",
          },
          {
            id: 388746,
            odds: 16.11,
            name: {
              id: 428,
              outcome_name: {
                en: "draw/{$competitor2}",
                ko: "드로/{$competitor2}",
                zh: "平局/{$competitor2}",
              },
              created_at: "2020-10-23 11:35:35",
              updated_at: "2020-10-23T02:35:35.000000Z",
            },
            enabled: 1,
            updated_at: "2021-01-14T17:06:53.000000+09:00",
          },
          {
            id: 388724,
            odds: 10.61,
            name: {
              id: 430,
              outcome_name: {
                en: "{$competitor2}/{$competitor1}",
                ko: "{$competitor2}/{$competitor1}",
                zh: "{$competitor2}/{$competitor1}",
              },
              created_at: "2020-10-23 11:35:35",
              updated_at: "2020-10-23T02:35:35.000000Z",
            },
            enabled: 1,
            updated_at: "2021-01-14T17:06:53.000000+09:00",
          },
          {
            id: 388727,
            odds: 45.74,
            name: {
              id: 432,
              outcome_name: {
                en: "{$competitor2}/draw",
                ko: "{$competitor2}/드로",
                zh: "{$competitor2}/平局",
              },
              created_at: "2020-10-23 11:35:35",
              updated_at: "2020-10-23T02:35:35.000000Z",
            },
            enabled: 1,
            updated_at: "2021-01-14T17:06:53.000000+09:00",
          },
          {
            id: 388745,
            odds: 1.8,
            name: {
              id: 434,
              outcome_name: {
                en: "{$competitor2}/{$competitor2}",
                ko: "{$competitor2}/{$competitor2}",
                zh: "{$competitor2}/{$competitor2}",
              },
              created_at: "2020-10-23 11:35:35",
              updated_at: "2020-10-23T02:35:35.000000Z",
            },
            enabled: 1,
            updated_at: "2021-01-14T17:06:53.000000+09:00",
          },
        ],
        updated_at: "2021-01-14T17:06:53.000000+09:00",
      },
      {
        id: 101815,
        title: {
          id: 16,
          market_name: {
            en: "Handicap",
            ko: "핸디캡",
            zh: "欧洲让球盘",
          },
          disabled: 0,
          created_at: "2020-10-23 11:33:42",
          updated_at: "2020-10-23T02:33:42.000000Z",
        },
        status: 1,
        type: 16,
        specifier: {
          hcp: "18.5",
        },
        outcomes: [
          {
            id: 388672,
            odds: 1.2,
            name: {
              id: 1714,
              outcome_name: {
                en: "{$competitor1} ({+hcp})",
                ko: "{$competitor1} ({+hcp})",
                zh: "{$competitor1} ({+hcp})",
              },
              created_at: "2020-10-23 11:35:38",
              updated_at: "2020-10-23T02:35:38.000000Z",
            },
            enabled: 1,
            updated_at: "2021-01-14T17:06:53.000000+09:00",
          },
          {
            id: 388673,
            odds: 4.03,
            name: {
              id: 1715,
              outcome_name: {
                en: "{$competitor2} ({-hcp})",
                ko: "{$competitor2} ({-hcp})",
                zh: "{$competitor2} ({-hcp})",
              },
              created_at: "2020-10-23 11:35:38",
              updated_at: "2020-10-23T02:35:38.000000Z",
            },
            enabled: 1,
            updated_at: "2021-01-14T17:06:53.000000+09:00",
          },
        ],
        updated_at: "2021-01-14T17:06:53.000000+09:00",
      },
      {
        id: 101816,
        title: {
          id: 74,
          market_name: {
            en: "1st half - odd/even",
            ko: "전반전 - 오드/이븐",
            zh: "上半场 - 奇数/偶数",
          },
          disabled: 0,
          created_at: "2020-10-23 11:33:43",
          updated_at: "2020-10-23T02:33:43.000000Z",
        },
        status: 1,
        type: 74,
        specifier: {},
        outcomes: [
          {
            id: 388742,
            odds: 4.7,
            name: {
              id: 70,
              outcome_name: {
                en: "odd",
                ko: "오드",
                zh: "奇数",
              },
              created_at: "2020-10-23 11:35:35",
              updated_at: "2020-10-23T02:35:35.000000Z",
            },
            enabled: 1,
            updated_at: "2021-01-14T17:06:53.000000+09:00",
          },
          {
            id: 388741,
            odds: 1.02,
            name: {
              id: 72,
              outcome_name: {
                en: "even",
                ko: "이븐",
                zh: "偶数",
              },
              created_at: "2020-10-23 11:35:35",
              updated_at: "2020-10-23T02:35:35.000000Z",
            },
            enabled: 1,
            updated_at: "2021-01-14T17:06:53.000000+09:00",
          },
        ],
        updated_at: "2021-01-14T17:06:53.000000+09:00",
      },
      {
        id: 101817,
        title: {
          id: 16,
          market_name: {
            en: "Handicap",
            ko: "핸디캡",
            zh: "欧洲让球盘",
          },
          disabled: 0,
          created_at: "2020-10-23 11:33:42",
          updated_at: "2020-10-23T02:33:42.000000Z",
        },
        status: 1,
        type: 16,
        specifier: {
          hcp: "12.5",
        },
        outcomes: [
          {
            id: 388681,
            odds: 1.43,
            name: {
              id: 1714,
              outcome_name: {
                en: "{$competitor1} ({+hcp})",
                ko: "{$competitor1} ({+hcp})",
                zh: "{$competitor1} ({+hcp})",
              },
              created_at: "2020-10-23 11:35:38",
              updated_at: "2020-10-23T02:35:38.000000Z",
            },
            enabled: 1,
            updated_at: "2021-01-14T17:06:53.000000+09:00",
          },
          {
            id: 388700,
            odds: 2.64,
            name: {
              id: 1715,
              outcome_name: {
                en: "{$competitor2} ({-hcp})",
                ko: "{$competitor2} ({-hcp})",
                zh: "{$competitor2} ({-hcp})",
              },
              created_at: "2020-10-23 11:35:38",
              updated_at: "2020-10-23T02:35:38.000000Z",
            },
            enabled: 1,
            updated_at: "2021-01-14T17:06:53.000000+09:00",
          },
        ],
        updated_at: "2021-01-14T17:06:53.000000+09:00",
      },
      {
        id: 101818,
        title: {
          id: 65,
          market_name: {
            en: "1st half - handicap {hcp}",
            ko: "전반전 - 핸티캡 {hcp}",
            zh: "上半场 - 不利{hcp}",
          },
          disabled: 0,
          created_at: "2020-10-23 11:33:43",
          updated_at: "2020-10-23T02:33:43.000000Z",
        },
        status: 1,
        type: 65,
        specifier: {
          hcp: "10:0",
        },
        outcomes: [
          {
            id: 388704,
            odds: 1.32,
            name: {
              id: 1711,
              outcome_name: {
                en: "{$competitor1} ({hcp})",
                ko: "{$competitor1} ({hcp})",
                zh: "{$competitor1} ({hcp})",
              },
              created_at: "2020-10-23 11:35:38",
              updated_at: "2020-10-23T02:35:38.000000Z",
            },
            enabled: 1,
            updated_at: "2021-01-14T17:06:53.000000+09:00",
          },
          {
            id: 388737,
            odds: 14.44,
            name: {
              id: 1712,
              outcome_name: {
                en: "draw ({hcp})",
                ko: "드로 ({hcp})",
                zh: "平局 ({hcp})",
              },
              created_at: "2020-10-23 11:35:38",
              updated_at: "2020-10-23T02:35:38.000000Z",
            },
            enabled: 1,
            updated_at: "2021-01-14T17:06:53.000000+09:00",
          },
          {
            id: 388702,
            odds: 3.5,
            name: {
              id: 1713,
              outcome_name: {
                en: "{$competitor2} ({hcp})",
                ko: "{$competitor2} ({hcp})",
                zh: "{$competitor2} ({hcp})",
              },
              created_at: "2020-10-23 11:35:38",
              updated_at: "2020-10-23T02:35:38.000000Z",
            },
            enabled: 1,
            updated_at: "2021-01-14T17:06:53.000000+09:00",
          },
        ],
        updated_at: "2021-01-14T17:06:53.000000+09:00",
      },
      {
        id: 101819,
        title: {
          id: 66,
          market_name: {
            en: "1st half - handicap",
            ko: "전반전 - 핸디캡",
            zh: "上半场 - 不利",
          },
          disabled: 0,
          created_at: "2020-10-23 11:33:43",
          updated_at: "2020-10-23T02:33:43.000000Z",
        },
        status: 1,
        type: 66,
        specifier: {
          hcp: "9.5",
        },
        outcomes: [
          {
            id: 388680,
            odds: 1.34,
            name: {
              id: 1714,
              outcome_name: {
                en: "{$competitor1} ({+hcp})",
                ko: "{$competitor1} ({+hcp})",
                zh: "{$competitor1} ({+hcp})",
              },
              created_at: "2020-10-23 11:35:38",
              updated_at: "2020-10-23T02:35:38.000000Z",
            },
            enabled: 1,
            updated_at: "2021-01-14T17:06:53.000000+09:00",
          },
          {
            id: 388699,
            odds: 2.99,
            name: {
              id: 1715,
              outcome_name: {
                en: "{$competitor2} ({-hcp})",
                ko: "{$competitor2} ({-hcp})",
                zh: "{$competitor2} ({-hcp})",
              },
              created_at: "2020-10-23 11:35:38",
              updated_at: "2020-10-23T02:35:38.000000Z",
            },
            enabled: 1,
            updated_at: "2021-01-14T17:06:53.000000+09:00",
          },
        ],
        updated_at: "2021-01-14T17:06:53.000000+09:00",
      },
      {
        id: 101820,
        title: {
          id: 16,
          market_name: {
            en: "Handicap",
            ko: "핸디캡",
            zh: "欧洲让球盘",
          },
          disabled: 0,
          created_at: "2020-10-23 11:33:42",
          updated_at: "2020-10-23T02:33:42.000000Z",
        },
        status: 1,
        type: 16,
        specifier: {
          hcp: "0.5",
        },
        outcomes: [
          {
            id: 388679,
            odds: 2.59,
            name: {
              id: 1714,
              outcome_name: {
                en: "{$competitor1} ({+hcp})",
                ko: "{$competitor1} ({+hcp})",
                zh: "{$competitor1} ({+hcp})",
              },
              created_at: "2020-10-23 11:35:38",
              updated_at: "2020-10-23T02:35:38.000000Z",
            },
            enabled: 1,
            updated_at: "2021-01-14T17:06:53.000000+09:00",
          },
          {
            id: 388675,
            odds: 1.44,
            name: {
              id: 1715,
              outcome_name: {
                en: "{$competitor2} ({-hcp})",
                ko: "{$competitor2} ({-hcp})",
                zh: "{$competitor2} ({-hcp})",
              },
              created_at: "2020-10-23 11:35:38",
              updated_at: "2020-10-23T02:35:38.000000Z",
            },
            enabled: 1,
            updated_at: "2021-01-14T17:06:53.000000+09:00",
          },
        ],
        updated_at: "2021-01-14T17:06:53.000000+09:00",
      },
      {
        id: 101821,
        title: {
          id: 66,
          market_name: {
            en: "1st half - handicap",
            ko: "전반전 - 핸디캡",
            zh: "上半场 - 不利",
          },
          disabled: 0,
          created_at: "2020-10-23 11:33:43",
          updated_at: "2020-10-23T02:33:43.000000Z",
        },
        status: 1,
        type: 66,
        specifier: {
          hcp: "-2.5",
        },
        outcomes: [
          {
            id: 388698,
            odds: 3.06,
            name: {
              id: 1714,
              outcome_name: {
                en: "{$competitor1} ({+hcp})",
                ko: "{$competitor1} ({+hcp})",
                zh: "{$competitor1} ({+hcp})",
              },
              created_at: "2020-10-23 11:35:38",
              updated_at: "2020-10-23T02:35:38.000000Z",
            },
            enabled: 1,
            updated_at: "2021-01-14T17:06:53.000000+09:00",
          },
          {
            id: 388697,
            odds: 1.33,
            name: {
              id: 1715,
              outcome_name: {
                en: "{$competitor2} ({-hcp})",
                ko: "{$competitor2} ({-hcp})",
                zh: "{$competitor2} ({-hcp})",
              },
              created_at: "2020-10-23 11:35:38",
              updated_at: "2020-10-23T02:35:38.000000Z",
            },
            enabled: 1,
            updated_at: "2021-01-14T17:06:53.000000+09:00",
          },
        ],
        updated_at: "2021-01-14T17:06:53.000000+09:00",
      },
      {
        id: 101822,
        title: {
          id: 60,
          market_name: {
            en: "1st half - 1x2",
            ko: "전반전 - 1x2",
            zh: "上半场 - 1x2",
          },
          disabled: 0,
          created_at: "2020-10-23 11:33:43",
          updated_at: "2020-10-23T02:33:43.000000Z",
        },
        status: 1,
        type: 60,
        specifier: {},
        outcomes: [
          {
            id: 388709,
            odds: 2.56,
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
            updated_at: "2021-01-14T17:06:53.000000+09:00",
          },
          {
            id: 388708,
            odds: 10.88,
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
            updated_at: "2021-01-14T17:06:53.000000+09:00",
          },
          {
            id: 388707,
            odds: 1.59,
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
            updated_at: "2021-01-14T17:06:53.000000+09:00",
          },
        ],
        updated_at: "2021-01-14T17:06:53.000000+09:00",
      },
      {
        id: 101823,
        title: {
          id: 10,
          market_name: {
            en: "Double chance",
            ko: "더블 기회",
            zh: "双胜彩",
          },
          disabled: 0,
          created_at: "2020-10-23 11:33:42",
          updated_at: "2020-10-23T02:33:42.000000Z",
        },
        status: 1,
        type: 10,
        specifier: {},
        outcomes: [
          {
            id: 388739,
            odds: 1.02,
            name: {
              id: 10,
              outcome_name: {
                en: "{$competitor1} or {$competitor2}",
                ko: "{$competitor1} 또는 {$competitor2}",
                zh: "{$competitor1} 或 {$competitor2}",
              },
              created_at: "2020-10-23 11:35:35",
              updated_at: "2020-10-23T02:35:35.000000Z",
            },
            enabled: 1,
            updated_at: "2021-01-14T17:06:53.000000+09:00",
          },
          {
            id: 388748,
            odds: 1.28,
            name: {
              id: 11,
              outcome_name: {
                en: "draw or {$competitor2}",
                ko: "드로 또는 {$competitor2}",
                zh: "平局或 {$competitor2}",
              },
              created_at: "2020-10-23 11:35:35",
              updated_at: "2020-10-23T02:35:35.000000Z",
            },
            enabled: 1,
            updated_at: "2021-01-14T17:06:53.000000+09:00",
          },
          {
            id: 388740,
            odds: 2.18,
            name: {
              id: 9,
              outcome_name: {
                en: "{$competitor1} or draw",
                ko: "{$competitor1} 또는 드로",
                zh: "{$competitor1} 或平局",
              },
              created_at: "2020-10-23 11:35:35",
              updated_at: "2020-10-23T02:35:35.000000Z",
            },
            enabled: 1,
            updated_at: "2021-01-14T17:06:53.000000+09:00",
          },
        ],
        updated_at: "2021-01-14T17:06:53.000000+09:00",
      },
      {
        id: 101824,
        title: {
          id: 66,
          market_name: {
            en: "1st half - handicap",
            ko: "전반전 - 핸디캡",
            zh: "上半场 - 不利",
          },
          disabled: 0,
          created_at: "2020-10-23 11:33:43",
          updated_at: "2020-10-23T02:33:43.000000Z",
        },
        status: 1,
        type: 66,
        specifier: {
          hcp: "3.5",
        },
        outcomes: [
          {
            id: 388696,
            odds: 1.88,
            name: {
              id: 1714,
              outcome_name: {
                en: "{$competitor1} ({+hcp})",
                ko: "{$competitor1} ({+hcp})",
                zh: "{$competitor1} ({+hcp})",
              },
              created_at: "2020-10-23 11:35:38",
              updated_at: "2020-10-23T02:35:38.000000Z",
            },
            enabled: 1,
            updated_at: "2021-01-14T17:06:53.000000+09:00",
          },
          {
            id: 388695,
            odds: 1.82,
            name: {
              id: 1715,
              outcome_name: {
                en: "{$competitor2} ({-hcp})",
                ko: "{$competitor2} ({-hcp})",
                zh: "{$competitor2} ({-hcp})",
              },
              created_at: "2020-10-23 11:35:38",
              updated_at: "2020-10-23T02:35:38.000000Z",
            },
            enabled: 1,
            updated_at: "2021-01-14T17:06:53.000000+09:00",
          },
        ],
        updated_at: "2021-01-14T17:06:53.000000+09:00",
      },
      {
        id: 101825,
        title: {
          id: 14,
          market_name: {
            en: "Handicap {hcp}",
            ko: "핸디캡 {hcp}",
            zh: "不利 {hcp}",
          },
          disabled: 0,
          created_at: "2020-10-23 11:33:42",
          updated_at: "2020-10-23T02:33:42.000000Z",
        },
        status: 1,
        type: 14,
        specifier: {
          hcp: "6:0",
        },
        outcomes: [
          {
            id: 388712,
            odds: 1.97,
            name: {
              id: 1711,
              outcome_name: {
                en: "{$competitor1} ({hcp})",
                ko: "{$competitor1} ({hcp})",
                zh: "{$competitor1} ({hcp})",
              },
              created_at: "2020-10-23 11:35:38",
              updated_at: "2020-10-23T02:35:38.000000Z",
            },
            enabled: 1,
            updated_at: "2021-01-14T17:06:53.000000+09:00",
          },
          {
            id: 388711,
            odds: 17.72,
            name: {
              id: 1712,
              outcome_name: {
                en: "draw ({hcp})",
                ko: "드로 ({hcp})",
                zh: "平局 ({hcp})",
              },
              created_at: "2020-10-23 11:35:38",
              updated_at: "2020-10-23T02:35:38.000000Z",
            },
            enabled: 1,
            updated_at: "2021-01-14T17:06:53.000000+09:00",
          },
          {
            id: 388710,
            odds: 1.83,
            name: {
              id: 1713,
              outcome_name: {
                en: "{$competitor2} ({hcp})",
                ko: "{$competitor2} ({hcp})",
                zh: "{$competitor2} ({hcp})",
              },
              created_at: "2020-10-23 11:35:38",
              updated_at: "2020-10-23T02:35:38.000000Z",
            },
            enabled: 1,
            updated_at: "2021-01-14T17:06:53.000000+09:00",
          },
        ],
        updated_at: "2021-01-14T17:06:53.000000+09:00",
      },
      {
        id: 101826,
        title: {
          id: 11,
          market_name: {
            en: "Draw no bet",
            ko: "드로 노 베트",
            zh: "平局返还",
          },
          disabled: 0,
          created_at: "2020-10-23 11:33:42",
          updated_at: "2020-10-23T02:33:42.000000Z",
        },
        status: 1,
        type: 11,
        specifier: {},
        outcomes: [
          {
            id: 388738,
            odds: 2.77,
            name: {
              id: 4,
              outcome_name: {
                en: "{$competitor1}",
                ko: "{$competitor1}",
                zh: "{$competitor1}",
              },
              created_at: "2020-10-23 11:35:35",
              updated_at: "2020-10-23T02:35:35.000000Z",
            },
            enabled: 1,
            updated_at: "2021-01-14T17:06:53.000000+09:00",
          },
          {
            id: 388736,
            odds: 1.39,
            name: {
              id: 5,
              outcome_name: {
                en: "{$competitor2}",
                ko: "{$competitor2}",
                zh: "{$competitor2}",
              },
              created_at: "2020-10-23 11:35:35",
              updated_at: "2020-10-23T02:35:35.000000Z",
            },
            enabled: 1,
            updated_at: "2021-01-14T17:06:53.000000+09:00",
          },
        ],
        updated_at: "2021-01-14T17:06:53.000000+09:00",
      },
      {
        id: 101827,
        title: {
          id: 65,
          market_name: {
            en: "1st half - handicap {hcp}",
            ko: "전반전 - 핸티캡 {hcp}",
            zh: "上半场 - 不利{hcp}",
          },
          disabled: 0,
          created_at: "2020-10-23 11:33:43",
          updated_at: "2020-10-23T02:33:43.000000Z",
        },
        status: 1,
        type: 65,
        specifier: {
          hcp: "4:0",
        },
        outcomes: [
          {
            id: 388674,
            odds: 1.85,
            name: {
              id: 1711,
              outcome_name: {
                en: "{$competitor1} ({hcp})",
                ko: "{$competitor1} ({hcp})",
                zh: "{$competitor1} ({hcp})",
              },
              created_at: "2020-10-23 11:35:38",
              updated_at: "2020-10-23T02:35:38.000000Z",
            },
            enabled: 1,
            updated_at: "2021-01-14T17:06:53.000000+09:00",
          },
          {
            id: 388676,
            odds: 13.04,
            name: {
              id: 1712,
              outcome_name: {
                en: "draw ({hcp})",
                ko: "드로 ({hcp})",
                zh: "平局 ({hcp})",
              },
              created_at: "2020-10-23 11:35:38",
              updated_at: "2020-10-23T02:35:38.000000Z",
            },
            enabled: 1,
            updated_at: "2021-01-14T17:06:53.000000+09:00",
          },
          {
            id: 388669,
            odds: 2.03,
            name: {
              id: 1713,
              outcome_name: {
                en: "{$competitor2} ({hcp})",
                ko: "{$competitor2} ({hcp})",
                zh: "{$competitor2} ({hcp})",
              },
              created_at: "2020-10-23 11:35:38",
              updated_at: "2020-10-23T02:35:38.000000Z",
            },
            enabled: 1,
            updated_at: "2021-01-14T17:06:53.000000+09:00",
          },
        ],
        updated_at: "2021-01-14T17:06:53.000000+09:00",
      },
      {
        id: 101828,
        title: {
          id: 26,
          market_name: {
            en: "Odd/even",
            ko: "오드/이븐",
            zh: "总进球数单/双",
          },
          disabled: 0,
          created_at: "2020-10-23 11:33:43",
          updated_at: "2020-10-23T02:33:43.000000Z",
        },
        status: 1,
        type: 26,
        specifier: {},
        outcomes: [
          {
            id: 388744,
            odds: 4.99,
            name: {
              id: 70,
              outcome_name: {
                en: "odd",
                ko: "오드",
                zh: "奇数",
              },
              created_at: "2020-10-23 11:35:35",
              updated_at: "2020-10-23T02:35:35.000000Z",
            },
            enabled: 1,
            updated_at: "2021-01-14T17:06:53.000000+09:00",
          },
          {
            id: 388743,
            odds: 1.14,
            name: {
              id: 72,
              outcome_name: {
                en: "even",
                ko: "이븐",
                zh: "偶数",
              },
              created_at: "2020-10-23 11:35:35",
              updated_at: "2020-10-23T02:35:35.000000Z",
            },
            enabled: 1,
            updated_at: "2021-01-14T17:06:53.000000+09:00",
          },
        ],
        updated_at: "2021-01-14T17:06:53.000000+09:00",
      },
      {
        id: 101829,
        title: {
          id: 64,
          market_name: {
            en: "1st half - draw no bet",
            ko: "전반전 - 드로 노 베트",
            zh: "上半场 - 平局返还",
          },
          disabled: 0,
          created_at: "2020-10-23 11:33:43",
          updated_at: "2020-10-23T02:33:43.000000Z",
        },
        status: 1,
        type: 64,
        specifier: {},
        outcomes: [
          {
            id: 388729,
            odds: 2.33,
            name: {
              id: 4,
              outcome_name: {
                en: "{$competitor1}",
                ko: "{$competitor1}",
                zh: "{$competitor1}",
              },
              created_at: "2020-10-23 11:35:35",
              updated_at: "2020-10-23T02:35:35.000000Z",
            },
            enabled: 1,
            updated_at: "2021-01-14T17:06:53.000000+09:00",
          },
          {
            id: 388728,
            odds: 1.47,
            name: {
              id: 5,
              outcome_name: {
                en: "{$competitor2}",
                ko: "{$competitor2}",
                zh: "{$competitor2}",
              },
              created_at: "2020-10-23 11:35:35",
              updated_at: "2020-10-23T02:35:35.000000Z",
            },
            enabled: 1,
            updated_at: "2021-01-14T17:06:53.000000+09:00",
          },
        ],
        updated_at: "2021-01-14T17:06:53.000000+09:00",
      },
      {
        id: 101830,
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
            id: 388735,
            odds: 2.76,
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
            updated_at: "2021-01-14T17:06:53.000000+09:00",
          },
          {
            id: 388734,
            odds: 22.65,
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
            updated_at: "2021-01-14T17:06:53.000000+09:00",
          },
          {
            id: 388733,
            odds: 1.48,
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
            updated_at: "2021-01-14T17:06:53.000000+09:00",
          },
        ],
        updated_at: "2021-01-14T17:06:53.000000+09:00",
      },
      {
        id: 101831,
        title: {
          id: 14,
          market_name: {
            en: "Handicap {hcp}",
            ko: "핸디캡 {hcp}",
            zh: "不利 {hcp}",
          },
          disabled: 0,
          created_at: "2020-10-23 11:33:42",
          updated_at: "2020-10-23T02:33:42.000000Z",
        },
        status: 1,
        type: 14,
        specifier: {
          hcp: "12:0",
        },
        outcomes: [
          {
            id: 388749,
            odds: 1.5,
            name: {
              id: 1711,
              outcome_name: {
                en: "{$competitor1} ({hcp})",
                ko: "{$competitor1} ({hcp})",
                zh: "{$competitor1} ({hcp})",
              },
              created_at: "2020-10-23 11:35:38",
              updated_at: "2020-10-23T02:35:38.000000Z",
            },
            enabled: 1,
            updated_at: "2021-01-14T17:06:53.000000+09:00",
          },
          {
            id: 388723,
            odds: 18.68,
            name: {
              id: 1712,
              outcome_name: {
                en: "draw ({hcp})",
                ko: "드로 ({hcp})",
                zh: "平局 ({hcp})",
              },
              created_at: "2020-10-23 11:35:38",
              updated_at: "2020-10-23T02:35:38.000000Z",
            },
            enabled: 1,
            updated_at: "2021-01-14T17:06:53.000000+09:00",
          },
          {
            id: 388722,
            odds: 2.58,
            name: {
              id: 1713,
              outcome_name: {
                en: "{$competitor2} ({hcp})",
                ko: "{$competitor2} ({hcp})",
                zh: "{$competitor2} ({hcp})",
              },
              created_at: "2020-10-23 11:35:38",
              updated_at: "2020-10-23T02:35:38.000000Z",
            },
            enabled: 1,
            updated_at: "2021-01-14T17:06:53.000000+09:00",
          },
        ],
        updated_at: "2021-01-14T17:06:53.000000+09:00",
      },
      {
        id: 101832,
        title: {
          id: 14,
          market_name: {
            en: "Handicap {hcp}",
            ko: "핸디캡 {hcp}",
            zh: "不利 {hcp}",
          },
          disabled: 0,
          created_at: "2020-10-23 11:33:42",
          updated_at: "2020-10-23T02:33:42.000000Z",
        },
        status: 1,
        type: 14,
        specifier: {
          hcp: "18:0",
        },
        outcomes: [
          {
            id: 388718,
            odds: 1.24,
            name: {
              id: 1711,
              outcome_name: {
                en: "{$competitor1} ({hcp})",
                ko: "{$competitor1} ({hcp})",
                zh: "{$competitor1} ({hcp})",
              },
              created_at: "2020-10-23 11:35:38",
              updated_at: "2020-10-23T02:35:38.000000Z",
            },
            enabled: 1,
            updated_at: "2021-01-14T17:06:53.000000+09:00",
          },
          {
            id: 388717,
            odds: 22.02,
            name: {
              id: 1712,
              outcome_name: {
                en: "draw ({hcp})",
                ko: "드로 ({hcp})",
                zh: "平局 ({hcp})",
              },
              created_at: "2020-10-23 11:35:38",
              updated_at: "2020-10-23T02:35:38.000000Z",
            },
            enabled: 1,
            updated_at: "2021-01-14T17:06:53.000000+09:00",
          },
          {
            id: 388716,
            odds: 3.91,
            name: {
              id: 1713,
              outcome_name: {
                en: "{$competitor2} ({hcp})",
                ko: "{$competitor2} ({hcp})",
                zh: "{$competitor2} ({hcp})",
              },
              created_at: "2020-10-23 11:35:38",
              updated_at: "2020-10-23T02:35:38.000000Z",
            },
            enabled: 1,
            updated_at: "2021-01-14T17:06:53.000000+09:00",
          },
        ],
        updated_at: "2021-01-14T17:06:53.000000+09:00",
      },
      {
        id: 101833,
        title: {
          id: 470,
          market_name: {
            en: "1st half - winning margin",
            ko: "전반전 - 승차",
            zh: "上半场 - 输赢比",
          },
          disabled: 0,
          created_at: "2020-10-23 11:33:44",
          updated_at: "2020-10-23T02:33:44.000000Z",
        },
        status: 1,
        type: 470,
        specifier: {
          variant: "sr:winning_margin:15+",
        },
        outcomes: [
          {
            id: 388693,
            odds: 19.78,
            name: null,
            enabled: 1,
            updated_at: "2021-01-14T17:06:53.000000+09:00",
          },
          {
            id: 388692,
            odds: 7.56,
            name: null,
            enabled: 1,
            updated_at: "2021-01-14T17:06:53.000000+09:00",
          },
          {
            id: 388691,
            odds: 4.97,
            name: null,
            enabled: 1,
            updated_at: "2021-01-14T17:06:53.000000+09:00",
          },
          {
            id: 388694,
            odds: 11.63,
            name: null,
            enabled: 1,
            updated_at: "2021-01-14T17:06:53.000000+09:00",
          },
          {
            id: 388690,
            odds: 3.98,
            name: null,
            enabled: 1,
            updated_at: "2021-01-14T17:06:53.000000+09:00",
          },
          {
            id: 388689,
            odds: 4.21,
            name: null,
            enabled: 1,
            updated_at: "2021-01-14T17:06:53.000000+09:00",
          },
          {
            id: 388688,
            odds: 6.61,
            name: null,
            enabled: 1,
            updated_at: "2021-01-14T17:06:53.000000+09:00",
          },
        ],
        updated_at: "2021-01-14T17:06:53.000000+09:00",
      },
      {
        id: 101834,
        title: {
          id: 65,
          market_name: {
            en: "1st half - handicap {hcp}",
            ko: "전반전 - 핸티캡 {hcp}",
            zh: "上半场 - 不利{hcp}",
          },
          disabled: 0,
          created_at: "2020-10-23 11:33:43",
          updated_at: "2020-10-23T02:33:43.000000Z",
        },
        status: 1,
        type: 65,
        specifier: {
          hcp: "0:2",
        },
        outcomes: [
          {
            id: 388670,
            odds: 3,
            name: {
              id: 1711,
              outcome_name: {
                en: "{$competitor1} ({hcp})",
                ko: "{$competitor1} ({hcp})",
                zh: "{$competitor1} ({hcp})",
              },
              created_at: "2020-10-23 11:35:38",
              updated_at: "2020-10-23T02:35:38.000000Z",
            },
            enabled: 1,
            updated_at: "2021-01-14T17:06:53.000000+09:00",
          },
          {
            id: 388671,
            odds: 14.85,
            name: {
              id: 1712,
              outcome_name: {
                en: "draw ({hcp})",
                ko: "드로 ({hcp})",
                zh: "平局 ({hcp})",
              },
              created_at: "2020-10-23 11:35:38",
              updated_at: "2020-10-23T02:35:38.000000Z",
            },
            enabled: 1,
            updated_at: "2021-01-14T17:06:53.000000+09:00",
          },
          {
            id: 388678,
            odds: 1.41,
            name: {
              id: 1713,
              outcome_name: {
                en: "{$competitor2} ({hcp})",
                ko: "{$competitor2} ({hcp})",
                zh: "{$competitor2} ({hcp})",
              },
              created_at: "2020-10-23 11:35:38",
              updated_at: "2020-10-23T02:35:38.000000Z",
            },
            enabled: 1,
            updated_at: "2021-01-14T17:06:53.000000+09:00",
          },
        ],
        updated_at: "2021-01-14T17:06:53.000000+09:00",
      },
      {
        id: 101835,
        title: {
          id: 14,
          market_name: {
            en: "Handicap {hcp}",
            ko: "핸디캡 {hcp}",
            zh: "不利 {hcp}",
          },
          disabled: 0,
          created_at: "2020-10-23 11:33:42",
          updated_at: "2020-10-23T02:33:42.000000Z",
        },
        status: 1,
        type: 14,
        specifier: {
          hcp: "0:6",
        },
        outcomes: [
          {
            id: 388715,
            odds: 4.29,
            name: {
              id: 1711,
              outcome_name: {
                en: "{$competitor1} ({hcp})",
                ko: "{$competitor1} ({hcp})",
                zh: "{$competitor1} ({hcp})",
              },
              created_at: "2020-10-23 11:35:38",
              updated_at: "2020-10-23T02:35:38.000000Z",
            },
            enabled: 1,
            updated_at: "2021-01-14T17:06:53.000000+09:00",
          },
          {
            id: 388714,
            odds: 22.83,
            name: {
              id: 1712,
              outcome_name: {
                en: "draw ({hcp})",
                ko: "드로 ({hcp})",
                zh: "平局 ({hcp})",
              },
              created_at: "2020-10-23 11:35:38",
              updated_at: "2020-10-23T02:35:38.000000Z",
            },
            enabled: 1,
            updated_at: "2021-01-14T17:06:53.000000+09:00",
          },
          {
            id: 388713,
            odds: 1.2,
            name: {
              id: 1713,
              outcome_name: {
                en: "{$competitor2} ({hcp})",
                ko: "{$competitor2} ({hcp})",
                zh: "{$competitor2} ({hcp})",
              },
              created_at: "2020-10-23 11:35:38",
              updated_at: "2020-10-23T02:35:38.000000Z",
            },
            enabled: 1,
            updated_at: "2021-01-14T17:06:53.000000+09:00",
          },
        ],
        updated_at: "2021-01-14T17:06:53.000000+09:00",
      },
      {
        id: 101836,
        title: {
          id: 14,
          market_name: {
            en: "Handicap {hcp}",
            ko: "핸디캡 {hcp}",
            zh: "不利 {hcp}",
          },
          disabled: 0,
          created_at: "2020-10-23 11:33:42",
          updated_at: "2020-10-23T02:33:42.000000Z",
        },
        status: 1,
        type: 14,
        specifier: {
          hcp: "0:0",
        },
        outcomes: [
          {
            id: 388721,
            odds: 2.78,
            name: {
              id: 1711,
              outcome_name: {
                en: "{$competitor1} ({hcp})",
                ko: "{$competitor1} ({hcp})",
                zh: "{$competitor1} ({hcp})",
              },
              created_at: "2020-10-23 11:35:38",
              updated_at: "2020-10-23T02:35:38.000000Z",
            },
            enabled: 1,
            updated_at: "2021-01-14T17:06:53.000000+09:00",
          },
          {
            id: 388720,
            odds: 21.71,
            name: {
              id: 1712,
              outcome_name: {
                en: "draw ({hcp})",
                ko: "드로 ({hcp})",
                zh: "平局 ({hcp})",
              },
              created_at: "2020-10-23 11:35:38",
              updated_at: "2020-10-23T02:35:38.000000Z",
            },
            enabled: 1,
            updated_at: "2021-01-14T17:06:53.000000+09:00",
          },
          {
            id: 388719,
            odds: 1.42,
            name: {
              id: 1713,
              outcome_name: {
                en: "{$competitor2} ({hcp})",
                ko: "{$competitor2} ({hcp})",
                zh: "{$competitor2} ({hcp})",
              },
              created_at: "2020-10-23 11:35:38",
              updated_at: "2020-10-23T02:35:38.000000Z",
            },
            enabled: 1,
            updated_at: "2021-01-14T17:06:53.000000+09:00",
          },
        ],
        updated_at: "2021-01-14T17:06:53.000000+09:00",
      },
      {
        id: 101837,
        title: {
          id: 63,
          market_name: {
            en: "1st half - double chance",
            ko: "전반전 - 더블찬스",
            zh: "上半场 - 双胜彩",
          },
          disabled: 0,
          created_at: "2020-10-23 11:33:43",
          updated_at: "2020-10-23T02:33:43.000000Z",
        },
        status: 1,
        type: 63,
        specifier: {},
        outcomes: [
          {
            id: 388731,
            odds: 1.06,
            name: {
              id: 10,
              outcome_name: {
                en: "{$competitor1} or {$competitor2}",
                ko: "{$competitor1} 또는 {$competitor2}",
                zh: "{$competitor1} 或 {$competitor2}",
              },
              created_at: "2020-10-23 11:35:35",
              updated_at: "2020-10-23T02:35:35.000000Z",
            },
            enabled: 1,
            updated_at: "2021-01-14T17:06:53.000000+09:00",
          },
          {
            id: 388703,
            odds: 1.39,
            name: {
              id: 11,
              outcome_name: {
                en: "draw or {$competitor2}",
                ko: "드로 또는 {$competitor2}",
                zh: "平局或 {$competitor2}",
              },
              created_at: "2020-10-23 11:35:35",
              updated_at: "2020-10-23T02:35:35.000000Z",
            },
            enabled: 1,
            updated_at: "2021-01-14T17:06:53.000000+09:00",
          },
          {
            id: 388732,
            odds: 2.01,
            name: {
              id: 9,
              outcome_name: {
                en: "{$competitor1} or draw",
                ko: "{$competitor1} 또는 드로",
                zh: "{$competitor1} 或平局",
              },
              created_at: "2020-10-23 11:35:35",
              updated_at: "2020-10-23T02:35:35.000000Z",
            },
            enabled: 1,
            updated_at: "2021-01-14T17:06:53.000000+09:00",
          },
        ],
        updated_at: "2021-01-14T17:06:53.000000+09:00",
      },
      {
        id: 202277,
        title: {
          id: 52,
          market_name: {
            en: "Highest scoring half",
            ko: "최고 득점 하프",
            zh: "最高得分半场",
          },
          disabled: 0,
          created_at: "2020-10-23 11:33:43",
          updated_at: "2020-10-23T02:33:43.000000Z",
        },
        status: 1,
        type: 52,
        specifier: {},
        outcomes: [
          {
            id: 750414,
            odds: 1.91,
            name: {
              id: 436,
              outcome_name: {
                en: "1st half",
                ko: "전반전",
                zh: "上半场",
              },
              created_at: "2020-10-23 11:35:35",
              updated_at: "2020-10-23T02:35:35.000000Z",
            },
            enabled: 1,
            updated_at: "2021-01-14T17:06:53.000000+09:00",
          },
          {
            id: 750413,
            odds: 1.51,
            name: {
              id: 438,
              outcome_name: {
                en: "2nd half",
                ko: "후반전",
                zh: "下半场",
              },
              created_at: "2020-10-23 11:35:35",
              updated_at: "2020-10-23T02:35:35.000000Z",
            },
            enabled: 1,
            updated_at: "2021-01-14T17:06:53.000000+09:00",
          },
          {
            id: 750412,
            odds: 13.36,
            name: {
              id: 440,
              outcome_name: {
                en: "equal",
                ko: "이쿠얼",
                zh: "等于",
              },
              created_at: "2020-10-23 11:35:35",
              updated_at: "2020-10-23T02:35:35.000000Z",
            },
            enabled: 1,
            updated_at: "2021-01-14T17:06:53.000000+09:00",
          },
        ],
        updated_at: "2021-01-14T17:06:53.000000+09:00",
      },
    ],
    home_score: null,
    away_score: null,
    home_team: {
      id: 4258,
      name: {
        en: "Brisbane Broncos",
        ko: "브리스베인 브롱코스",
        zh: "布里斯班野马",
      },
    },
    away_team: {
      id: 4261,
      name: {
        en: "Parramatta Eels",
        ko: "파라마타 일스",
        zh: "帕拉玛塔鳗鱼",
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
    start_at: "2021-03-12T18:05:00.000000+09:00",
    updated_at: "2021-01-14T17:06:52.000000+09:00",
  },
  error: "",
};

const sportsdetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_SPORTSDETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_SPORTSDETAILS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.FETCH_SPORTSDETAILS_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.FETCH_SPORTSDETAIL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_SPORTSDETAIL_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.FETCH_SPORTSDETAIL_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.CREATE_SPORTSDETAIL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.CREATE_SPORTSDETAIL_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.CREATE_SPORTSDETAIL_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.UPDATE_SPORTSDETAIL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.UPDATE_SPORTSDETAIL_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.UPDATE_SPORTSDETAIL_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.DELETE_SPORTSDETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.DELETE_SPORTSDETAILS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.DELETE_SPORTSDETAILS_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default sportsdetailReducer;
