import { camelize } from "../../helpers/object";
import * as types from "./inplayTypes";

const initialState = {
  loading: false,
  data: {
    "data": [
      {
        "id": 26766684,
        "status": {
          "en": "2nd half",
          "ko": "후반전",
          "zh": "下半场"
        },
        "markets": [
          {
            "id": 2661191,
            "title": {
              "id": 29,
              "marketName": {
                "en": "Both teams to score",
                "ko": "두 팀 모두 득점",
                "zh": "两队都得分"
              },
              "disabled": 0,
              "createdAt": "2021-02-24 11:02:37",
              "updatedAt": "2021-02-24T02:02:37.000000Z"
            },
            "status": 1,
            "type": 29,
            "specifier": {},
            "outcomes": [
              {
                "id": 7821263,
                "odds": 3.55,
                "name": {
                  "id": "74",
                  "outcomeName": {
                    "en": "yes",
                    "ko": "예",
                    "zh": "是"
                  },
                  "createdAt": "2021-02-24 11:02:42",
                  "updatedAt": "2021-02-24T02:02:42.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:11.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7821262,
                "odds": 1.25,
                "name": {
                  "id": "76",
                  "outcomeName": {
                    "en": "no",
                    "ko": "아니오",
                    "zh": "否"
                  },
                  "createdAt": "2021-02-24 11:02:49",
                  "updatedAt": "2021-02-24T02:02:49.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:11.000000+09:00",
                "oldOdds": null
              }
            ],
            "updatedAt": "2021-04-14T21:32:11.000000+09:00"
          },
          {
            "id": 2661194,
            "title": {
              "id": 14,
              "marketName": {
                "en": "Handicap {hcp}",
                "ko": "핸디캡 {hcp}",
                "zh": "不利 {hcp}"
              },
              "disabled": 0,
              "createdAt": "2021-02-24 11:02:37",
              "updatedAt": "2021-02-24T02:02:37.000000Z"
            },
            "status": 1,
            "type": 14,
            "specifier": {
              "hcp": "0:1"
            },
            "outcomes": [
              {
                "id": 7821533,
                "odds": 1.1,
                "name": {
                  "id": "1711",
                  "outcomeName": {
                    "en": "{$competitor1} ({hcp})",
                    "ko": "{$competitor1} ({hcp})",
                    "zh": "{$competitor1} ({hcp})"
                  },
                  "createdAt": "2021-02-24 11:02:45",
                  "updatedAt": "2021-02-24T02:02:45.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:11.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7821534,
                "odds": 5.9,
                "name": {
                  "id": "1712",
                  "outcomeName": {
                    "en": "draw ({hcp})",
                    "ko": "드로 ({hcp})",
                    "zh": "平局 ({hcp})"
                  },
                  "createdAt": "2021-02-24 11:02:50",
                  "updatedAt": "2021-02-24T02:02:50.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:11.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7821535,
                "odds": 40,
                "name": {
                  "id": "1713",
                  "outcomeName": {
                    "en": "{$competitor2} ({hcp})",
                    "ko": "{$competitor2} ({hcp})",
                    "zh": "{$competitor2} ({hcp})"
                  },
                  "createdAt": "2021-02-24 11:02:49",
                  "updatedAt": "2021-02-24T02:02:49.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:11.000000+09:00",
                "oldOdds": null
              }
            ],
            "updatedAt": "2021-04-14T21:32:11.000000+09:00"
          },
          {
            "id": 2661209,
            "title": {
              "id": 10,
              "marketName": {
                "en": "Double chance",
                "ko": "더블 기회",
                "zh": "双胜彩"
              },
              "disabled": 0,
              "createdAt": "2021-02-24 11:02:37",
              "updatedAt": "2021-02-24T02:02:37.000000Z"
            },
            "status": 1,
            "type": 10,
            "specifier": {},
            "outcomes": [
              {
                "id": 7821175,
                "odds": 9.5,
                "name": {
                  "id": "11",
                  "outcomeName": {
                    "en": "draw or {$competitor2}",
                    "ko": "드로 또는 {$competitor2}",
                    "zh": "平局或 {$competitor2}"
                  },
                  "createdAt": "2021-02-24 11:02:48",
                  "updatedAt": "2021-02-24T02:02:48.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:11.000000+09:00",
                "oldOdds": null
              }
            ],
            "updatedAt": "2021-04-14T21:32:11.000000+09:00"
          },
          {
            "id": 2661229,
            "title": {
              "id": 11,
              "marketName": {
                "en": "Draw no bet",
                "ko": "드로 노 베트",
                "zh": "平局返还"
              },
              "disabled": 0,
              "createdAt": "2021-02-24 11:02:37",
              "updatedAt": "2021-02-24T02:02:37.000000Z"
            },
            "status": 1,
            "type": 11,
            "specifier": {},
            "outcomes": [
              {
                "id": 7821173,
                "odds": 11,
                "name": {
                  "id": "5",
                  "outcomeName": {
                    "en": "{$competitor2}",
                    "ko": "{$competitor2}",
                    "zh": "{$competitor2}"
                  },
                  "createdAt": "2021-02-24 11:02:42",
                  "updatedAt": "2021-02-24T02:02:42.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:11.000000+09:00",
                "oldOdds": null
              }
            ],
            "updatedAt": "2021-04-14T21:32:11.000000+09:00"
          },
          {
            "id": 2661259,
            "title": {
              "id": 18,
              "marketName": {
                "en": "Total",
                "ko": "토탈",
                "zh": "合计"
              },
              "disabled": 0,
              "createdAt": "2021-02-24 11:02:37",
              "updatedAt": "2021-02-24T02:02:37.000000Z"
            },
            "status": 1,
            "type": 18,
            "specifier": {
              "total": "2.5"
            },
            "outcomes": [
              {
                "id": 7821561,
                "odds": 1.57,
                "name": {
                  "id": "12",
                  "outcomeName": {
                    "en": "over {total}",
                    "ko": "오버 {total}",
                    "zh": "高于{total}"
                  },
                  "createdAt": "2021-02-24 11:02:42",
                  "updatedAt": "2021-02-24T02:02:42.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:11.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7821562,
                "odds": 2.2,
                "name": {
                  "id": "13",
                  "outcomeName": {
                    "en": "under {total}",
                    "ko": "언더 {total}",
                    "zh": "低于{total}"
                  },
                  "createdAt": "2021-02-24 11:02:44",
                  "updatedAt": "2021-02-24T02:02:44.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:11.000000+09:00",
                "oldOdds": null
              }
            ],
            "updatedAt": "2021-04-14T21:32:11.000000+09:00"
          },
          {
            "id": 2661260,
            "title": {
              "id": 18,
              "marketName": {
                "en": "Total",
                "ko": "토탈",
                "zh": "合计"
              },
              "disabled": 0,
              "createdAt": "2021-02-24 11:02:37",
              "updatedAt": "2021-02-24T02:02:37.000000Z"
            },
            "status": 1,
            "type": 18,
            "specifier": {
              "total": "3.5"
            },
            "outcomes": [
              {
                "id": 7821563,
                "odds": 3.65,
                "name": {
                  "id": "12",
                  "outcomeName": {
                    "en": "over {total}",
                    "ko": "오버 {total}",
                    "zh": "高于{total}"
                  },
                  "createdAt": "2021-02-24 11:02:42",
                  "updatedAt": "2021-02-24T02:02:42.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:11.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7821564,
                "odds": 1.22,
                "name": {
                  "id": "13",
                  "outcomeName": {
                    "en": "under {total}",
                    "ko": "언더 {total}",
                    "zh": "低于{total}"
                  },
                  "createdAt": "2021-02-24 11:02:44",
                  "updatedAt": "2021-02-24T02:02:44.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:11.000000+09:00",
                "oldOdds": null
              }
            ],
            "updatedAt": "2021-04-14T21:32:11.000000+09:00"
          },
          {
            "id": 2661261,
            "title": {
              "id": 18,
              "marketName": {
                "en": "Total",
                "ko": "토탈",
                "zh": "合计"
              },
              "disabled": 0,
              "createdAt": "2021-02-24 11:02:37",
              "updatedAt": "2021-02-24T02:02:37.000000Z"
            },
            "status": 1,
            "type": 18,
            "specifier": {
              "total": "4.5"
            },
            "outcomes": [
              {
                "id": 7821565,
                "odds": 8.25,
                "name": {
                  "id": "12",
                  "outcomeName": {
                    "en": "over {total}",
                    "ko": "오버 {total}",
                    "zh": "高于{total}"
                  },
                  "createdAt": "2021-02-24 11:02:42",
                  "updatedAt": "2021-02-24T02:02:42.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:11.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7821566,
                "odds": 1.03,
                "name": {
                  "id": "13",
                  "outcomeName": {
                    "en": "under {total}",
                    "ko": "언더 {total}",
                    "zh": "低于{total}"
                  },
                  "createdAt": "2021-02-24 11:02:44",
                  "updatedAt": "2021-02-24T02:02:44.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:11.000000+09:00",
                "oldOdds": null
              }
            ],
            "updatedAt": "2021-04-14T21:32:11.000000+09:00"
          },
          {
            "id": 2661275,
            "title": {
              "id": 1,
              "marketName": {
                "en": "1x2",
                "ko": "1x2",
                "zh": "胜平负"
              },
              "disabled": 0,
              "createdAt": "2021-02-24 11:02:37",
              "updatedAt": "2021-02-24T02:02:37.000000Z"
            },
            "status": 1,
            "type": 1,
            "specifier": {},
            "outcomes": [
              {
                "id": 7821053,
                "odds": 10.5,
                "name": {
                  "id": "2",
                  "outcomeName": {
                    "en": "draw",
                    "ko": "드로",
                    "zh": "平局"
                  },
                  "createdAt": "2021-02-24 11:02:42",
                  "updatedAt": "2021-02-24T02:02:42.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:11.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7821057,
                "odds": 100,
                "name": {
                  "id": "3",
                  "outcomeName": {
                    "en": "{$competitor2}",
                    "ko": "{$competitor2}",
                    "zh": "{$competitor2}"
                  },
                  "createdAt": "2021-02-24 11:02:42",
                  "updatedAt": "2021-02-24T02:02:42.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:11.000000+09:00",
                "oldOdds": null
              }
            ],
            "updatedAt": "2021-04-14T21:32:11.000000+09:00"
          },
          {
            "id": 2661298,
            "title": {
              "id": 45,
              "marketName": {
                "en": "Correct score",
                "ko": "정확한 스코어",
                "zh": "正确进球"
              },
              "disabled": 0,
              "createdAt": "2021-02-24 11:02:37",
              "updatedAt": "2021-02-24T02:02:37.000000Z"
            },
            "status": 1,
            "type": 45,
            "specifier": {},
            "outcomes": [
              {
                "id": 7821407,
                "odds": 2.05,
                "name": {
                  "id": "278",
                  "outcomeName": {
                    "en": "2:0",
                    "ko": "2:0",
                    "zh": "2:0"
                  },
                  "createdAt": "2021-02-24 11:02:43",
                  "updatedAt": "2021-02-24T02:02:43.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:11.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7821393,
                "odds": 3.05,
                "name": {
                  "id": "280",
                  "outcomeName": {
                    "en": "3:0",
                    "ko": "3:0",
                    "zh": "3:0"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:11.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7821396,
                "odds": 9,
                "name": {
                  "id": "282",
                  "outcomeName": {
                    "en": "4:0",
                    "ko": "4:0",
                    "zh": "4:0"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:11.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7821392,
                "odds": 6.75,
                "name": {
                  "id": "288",
                  "outcomeName": {
                    "en": "2:1",
                    "ko": "2:1",
                    "zh": "2:1"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:11.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7821394,
                "odds": 10.5,
                "name": {
                  "id": "290",
                  "outcomeName": {
                    "en": "3:1",
                    "ko": "3:1",
                    "zh": "3:1"
                  },
                  "createdAt": "2021-02-24 11:02:50",
                  "updatedAt": "2021-02-24T02:02:50.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:11.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7821397,
                "odds": 33,
                "name": {
                  "id": "292",
                  "outcomeName": {
                    "en": "4:1",
                    "ko": "4:1",
                    "zh": "4:1"
                  },
                  "createdAt": "2021-02-24 11:02:50",
                  "updatedAt": "2021-02-24T02:02:50.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:11.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7821401,
                "odds": 50,
                "name": {
                  "id": "298",
                  "outcomeName": {
                    "en": "2:2",
                    "ko": "2:2",
                    "zh": "2:2"
                  },
                  "createdAt": "2021-02-24 11:02:50",
                  "updatedAt": "2021-02-24T02:02:50.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:11.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7821395,
                "odds": 80,
                "name": {
                  "id": "300",
                  "outcomeName": {
                    "en": "3:2",
                    "ko": "3:2",
                    "zh": "3:2"
                  },
                  "createdAt": "2021-02-24 11:02:51",
                  "updatedAt": "2021-02-24T02:02:51.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:11.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7821398,
                "odds": 100,
                "name": {
                  "id": "302",
                  "outcomeName": {
                    "en": "4:2",
                    "ko": "4:2",
                    "zh": "4:2"
                  },
                  "createdAt": "2021-02-24 11:02:51",
                  "updatedAt": "2021-02-24T02:02:51.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:11.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7821353,
                "odds": 100,
                "name": {
                  "id": "308",
                  "outcomeName": {
                    "en": "2:3",
                    "ko": "2:3",
                    "zh": "2:3"
                  },
                  "createdAt": "2021-02-24 11:02:51",
                  "updatedAt": "2021-02-24T02:02:51.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:11.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7821402,
                "odds": 100,
                "name": {
                  "id": "310",
                  "outcomeName": {
                    "en": "3:3",
                    "ko": "3:3",
                    "zh": "3:3"
                  },
                  "createdAt": "2021-02-24 11:02:52",
                  "updatedAt": "2021-02-24T02:02:52.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:11.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7821301,
                "odds": 100,
                "name": {
                  "id": "312",
                  "outcomeName": {
                    "en": "4:3",
                    "ko": "4:3",
                    "zh": "4:3"
                  },
                  "createdAt": "2021-02-24 11:02:52",
                  "updatedAt": "2021-02-24T02:02:52.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:11.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7821299,
                "odds": 100,
                "name": {
                  "id": "318",
                  "outcomeName": {
                    "en": "2:4",
                    "ko": "2:4",
                    "zh": "2:4"
                  },
                  "createdAt": "2021-02-24 11:02:52",
                  "updatedAt": "2021-02-24T02:02:52.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:11.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7821300,
                "odds": 100,
                "name": {
                  "id": "320",
                  "outcomeName": {
                    "en": "3:4",
                    "ko": "3:4",
                    "zh": "3:4"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:11.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7821302,
                "odds": 100,
                "name": {
                  "id": "322",
                  "outcomeName": {
                    "en": "4:4",
                    "ko": "4:4",
                    "zh": "4:4"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:11.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7821303,
                "odds": 27,
                "name": {
                  "id": "324",
                  "outcomeName": {
                    "en": "other",
                    "ko": "기타",
                    "zh": "其他"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:11.000000+09:00",
                "oldOdds": null
              }
            ],
            "updatedAt": "2021-04-14T21:32:11.000000+09:00"
          },
          {
            "id": 2691165,
            "title": {
              "id": 14,
              "marketName": {
                "en": "Handicap {hcp}",
                "ko": "핸디캡 {hcp}",
                "zh": "不利 {hcp}"
              },
              "disabled": 0,
              "createdAt": "2021-02-24 11:02:37",
              "updatedAt": "2021-02-24T02:02:37.000000Z"
            },
            "status": 1,
            "type": 14,
            "specifier": {
              "hcp": "0:3"
            },
            "outcomes": [
              {
                "id": 7903536,
                "odds": 8,
                "name": {
                  "id": "1711",
                  "outcomeName": {
                    "en": "{$competitor1} ({hcp})",
                    "ko": "{$competitor1} ({hcp})",
                    "zh": "{$competitor1} ({hcp})"
                  },
                  "createdAt": "2021-02-24 11:02:45",
                  "updatedAt": "2021-02-24T02:02:45.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:11.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7903537,
                "odds": 3.15,
                "name": {
                  "id": "1712",
                  "outcomeName": {
                    "en": "draw ({hcp})",
                    "ko": "드로 ({hcp})",
                    "zh": "平局 ({hcp})"
                  },
                  "createdAt": "2021-02-24 11:02:50",
                  "updatedAt": "2021-02-24T02:02:50.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:11.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7903538,
                "odds": 1.52,
                "name": {
                  "id": "1713",
                  "outcomeName": {
                    "en": "{$competitor2} ({hcp})",
                    "ko": "{$competitor2} ({hcp})",
                    "zh": "{$competitor2} ({hcp})"
                  },
                  "createdAt": "2021-02-24 11:02:49",
                  "updatedAt": "2021-02-24T02:02:49.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:11.000000+09:00",
                "oldOdds": null
              }
            ],
            "updatedAt": "2021-04-14T21:32:11.000000+09:00"
          },
          {
            "id": 2692423,
            "title": {
              "id": 14,
              "marketName": {
                "en": "Handicap {hcp}",
                "ko": "핸디캡 {hcp}",
                "zh": "不利 {hcp}"
              },
              "disabled": 0,
              "createdAt": "2021-02-24 11:02:37",
              "updatedAt": "2021-02-24T02:02:37.000000Z"
            },
            "status": 1,
            "type": 14,
            "specifier": {
              "hcp": "0:4"
            },
            "outcomes": [
              {
                "id": 7908226,
                "odds": 29,
                "name": {
                  "id": "1711",
                  "outcomeName": {
                    "en": "{$competitor1} ({hcp})",
                    "ko": "{$competitor1} ({hcp})",
                    "zh": "{$competitor1} ({hcp})"
                  },
                  "createdAt": "2021-02-24 11:02:45",
                  "updatedAt": "2021-02-24T02:02:45.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:11.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7908227,
                "odds": 7.5,
                "name": {
                  "id": "1712",
                  "outcomeName": {
                    "en": "draw ({hcp})",
                    "ko": "드로 ({hcp})",
                    "zh": "平局 ({hcp})"
                  },
                  "createdAt": "2021-02-24 11:02:50",
                  "updatedAt": "2021-02-24T02:02:50.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:11.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7908228,
                "odds": 1.07,
                "name": {
                  "id": "1713",
                  "outcomeName": {
                    "en": "{$competitor2} ({hcp})",
                    "ko": "{$competitor2} ({hcp})",
                    "zh": "{$competitor2} ({hcp})"
                  },
                  "createdAt": "2021-02-24 11:02:49",
                  "updatedAt": "2021-02-24T02:02:49.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:11.000000+09:00",
                "oldOdds": null
              }
            ],
            "updatedAt": "2021-04-14T21:32:11.000000+09:00"
          },
          {
            "id": 2693024,
            "title": {
              "id": 16,
              "marketName": {
                "en": "Handicap",
                "ko": "핸디캡",
                "zh": "欧洲让球盘"
              },
              "disabled": 0,
              "createdAt": "2021-02-24 11:02:37",
              "updatedAt": "2021-02-24T02:02:37.000000Z"
            },
            "status": 1,
            "type": 16,
            "specifier": {
              "hcp": "-2.5"
            },
            "outcomes": [
              {
                "id": 7910220,
                "odds": 2.3,
                "name": {
                  "id": "1714",
                  "outcomeName": {
                    "en": "{$competitor1} ({+hcp})",
                    "ko": "{$competitor1} ({+hcp})",
                    "zh": "{$competitor1} ({+hcp})"
                  },
                  "createdAt": "2021-02-24 11:02:50",
                  "updatedAt": "2021-02-24T02:02:50.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:11.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7910221,
                "odds": 1.52,
                "name": {
                  "id": "1715",
                  "outcomeName": {
                    "en": "{$competitor2} ({-hcp})",
                    "ko": "{$competitor2} ({-hcp})",
                    "zh": "{$competitor2} ({-hcp})"
                  },
                  "createdAt": "2021-02-24 11:02:49",
                  "updatedAt": "2021-02-24T02:02:49.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:11.000000+09:00",
                "oldOdds": null
              }
            ],
            "updatedAt": "2021-04-14T21:32:11.000000+09:00"
          },
          {
            "id": 2693025,
            "title": {
              "id": 41,
              "marketName": {
                "en": "Correct score [{score}]",
                "ko": "정확한 스코어 [{score}]",
                "zh": "正确进球 [{score}]"
              },
              "disabled": 0,
              "createdAt": "2021-02-24 11:02:37",
              "updatedAt": "2021-02-24T02:02:37.000000Z"
            },
            "status": 1,
            "type": 41,
            "specifier": {
              "score": "2:0"
            },
            "outcomes": [
              {
                "id": 7910237,
                "odds": 1.9,
                "name": {
                  "id": "110",
                  "outcomeName": {
                    "en": "0:0",
                    "ko": "0:0",
                    "zh": "0:0"
                  },
                  "createdAt": "2021-02-24 11:02:52",
                  "updatedAt": "2021-02-24T02:02:52.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:11.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7910204,
                "odds": 2.8,
                "name": {
                  "id": "114",
                  "outcomeName": {
                    "en": "1:0",
                    "ko": "1:0",
                    "zh": "1:0"
                  },
                  "createdAt": "2021-02-24 11:02:52",
                  "updatedAt": "2021-02-24T02:02:52.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:11.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7910202,
                "odds": 8,
                "name": {
                  "id": "116",
                  "outcomeName": {
                    "en": "2:0",
                    "ko": "2:0",
                    "zh": "2:0"
                  },
                  "createdAt": "2021-02-24 11:02:52",
                  "updatedAt": "2021-02-24T02:02:52.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:11.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7910203,
                "odds": 35,
                "name": {
                  "id": "118",
                  "outcomeName": {
                    "en": "3:0",
                    "ko": "3:0",
                    "zh": "3:0"
                  },
                  "createdAt": "2021-02-24 11:02:52",
                  "updatedAt": "2021-02-24T02:02:52.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:11.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7910206,
                "odds": 100,
                "name": {
                  "id": "120",
                  "outcomeName": {
                    "en": "4:0",
                    "ko": "4:0",
                    "zh": "4:0"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:11.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7910235,
                "odds": 100,
                "name": {
                  "id": "122",
                  "outcomeName": {
                    "en": "5:0",
                    "ko": "5:0",
                    "zh": "5:0"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:11.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7910234,
                "odds": 100,
                "name": {
                  "id": "124",
                  "outcomeName": {
                    "en": "6:0",
                    "ko": "6:0",
                    "zh": "6:0"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:11.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7910233,
                "odds": 6,
                "name": {
                  "id": "126",
                  "outcomeName": {
                    "en": "0:1",
                    "ko": "0:1",
                    "zh": "0:1"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:11.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7910232,
                "odds": 9.5,
                "name": {
                  "id": "128",
                  "outcomeName": {
                    "en": "1:1",
                    "ko": "1:1",
                    "zh": "1:1"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:11.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7910231,
                "odds": 29,
                "name": {
                  "id": "130",
                  "outcomeName": {
                    "en": "2:1",
                    "ko": "2:1",
                    "zh": "2:1"
                  },
                  "createdAt": "2021-02-24 11:02:47",
                  "updatedAt": "2021-02-24T02:02:47.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:11.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7910230,
                "odds": 100,
                "name": {
                  "id": "132",
                  "outcomeName": {
                    "en": "3:1",
                    "ko": "3:1",
                    "zh": "3:1"
                  },
                  "createdAt": "2021-02-24 11:02:47",
                  "updatedAt": "2021-02-24T02:02:47.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:11.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7910229,
                "odds": 100,
                "name": {
                  "id": "134",
                  "outcomeName": {
                    "en": "4:1",
                    "ko": "4:1",
                    "zh": "4:1"
                  },
                  "createdAt": "2021-02-24 11:02:47",
                  "updatedAt": "2021-02-24T02:02:47.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:11.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7910228,
                "odds": 100,
                "name": {
                  "id": "136",
                  "outcomeName": {
                    "en": "5:1",
                    "ko": "5:1",
                    "zh": "5:1"
                  },
                  "createdAt": "2021-02-24 11:02:47",
                  "updatedAt": "2021-02-24T02:02:47.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:11.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7910227,
                "odds": 40,
                "name": {
                  "id": "138",
                  "outcomeName": {
                    "en": "0:2",
                    "ko": "0:2",
                    "zh": "0:2"
                  },
                  "createdAt": "2021-02-24 11:02:47",
                  "updatedAt": "2021-02-24T02:02:47.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:11.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7910226,
                "odds": 70,
                "name": {
                  "id": "140",
                  "outcomeName": {
                    "en": "1:2",
                    "ko": "1:2",
                    "zh": "1:2"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:11.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7910225,
                "odds": 100,
                "name": {
                  "id": "142",
                  "outcomeName": {
                    "en": "2:2",
                    "ko": "2:2",
                    "zh": "2:2"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:11.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7910224,
                "odds": 100,
                "name": {
                  "id": "144",
                  "outcomeName": {
                    "en": "3:2",
                    "ko": "3:2",
                    "zh": "3:2"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:11.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7910223,
                "odds": 100,
                "name": {
                  "id": "146",
                  "outcomeName": {
                    "en": "4:2",
                    "ko": "4:2",
                    "zh": "4:2"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:11.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7910222,
                "odds": 100,
                "name": {
                  "id": "148",
                  "outcomeName": {
                    "en": "0:3",
                    "ko": "0:3",
                    "zh": "0:3"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:11.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7910219,
                "odds": 100,
                "name": {
                  "id": "150",
                  "outcomeName": {
                    "en": "1:3",
                    "ko": "1:3",
                    "zh": "1:3"
                  },
                  "createdAt": "2021-02-24 11:02:47",
                  "updatedAt": "2021-02-24T02:02:47.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:11.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7910215,
                "odds": 100,
                "name": {
                  "id": "152",
                  "outcomeName": {
                    "en": "2:3",
                    "ko": "2:3",
                    "zh": "2:3"
                  },
                  "createdAt": "2021-02-24 11:02:47",
                  "updatedAt": "2021-02-24T02:02:47.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:11.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7910211,
                "odds": 100,
                "name": {
                  "id": "154",
                  "outcomeName": {
                    "en": "3:3",
                    "ko": "3:3",
                    "zh": "3:3"
                  },
                  "createdAt": "2021-02-24 11:02:47",
                  "updatedAt": "2021-02-24T02:02:47.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:11.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7910236,
                "odds": 100,
                "name": {
                  "id": "156",
                  "outcomeName": {
                    "en": "0:4",
                    "ko": "0:4",
                    "zh": "0:4"
                  },
                  "createdAt": "2021-02-24 11:02:47",
                  "updatedAt": "2021-02-24T02:02:47.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:11.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7910205,
                "odds": 100,
                "name": {
                  "id": "158",
                  "outcomeName": {
                    "en": "1:4",
                    "ko": "1:4",
                    "zh": "1:4"
                  },
                  "createdAt": "2021-02-24 11:02:47",
                  "updatedAt": "2021-02-24T02:02:47.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:11.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7910207,
                "odds": 100,
                "name": {
                  "id": "160",
                  "outcomeName": {
                    "en": "2:4",
                    "ko": "2:4",
                    "zh": "2:4"
                  },
                  "createdAt": "2021-02-24 11:02:41",
                  "updatedAt": "2021-02-24T02:02:41.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:11.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7910208,
                "odds": 100,
                "name": {
                  "id": "162",
                  "outcomeName": {
                    "en": "0:5",
                    "ko": "0:5",
                    "zh": "0:5"
                  },
                  "createdAt": "2021-02-24 11:02:41",
                  "updatedAt": "2021-02-24T02:02:41.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:11.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7910209,
                "odds": 100,
                "name": {
                  "id": "164",
                  "outcomeName": {
                    "en": "1:5",
                    "ko": "1:5",
                    "zh": "1:5"
                  },
                  "createdAt": "2021-02-24 11:02:41",
                  "updatedAt": "2021-02-24T02:02:41.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:11.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7910210,
                "odds": 100,
                "name": {
                  "id": "166",
                  "outcomeName": {
                    "en": "0:6",
                    "ko": "0:6",
                    "zh": "0:6"
                  },
                  "createdAt": "2021-02-24 11:02:41",
                  "updatedAt": "2021-02-24T02:02:41.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:11.000000+09:00",
                "oldOdds": null
              }
            ],
            "updatedAt": "2021-04-14T21:32:11.000000+09:00"
          },
          {
            "id": 2693026,
            "title": {
              "id": 7,
              "marketName": {
                "en": "Which team wins the rest of the match",
                "ko": "남은 매치에서 어느 팀이 이길가요?",
                "zh": "剩余时间内哪队获胜"
              },
              "disabled": 0,
              "createdAt": "2021-02-24 11:02:37",
              "updatedAt": "2021-02-24T02:02:37.000000Z"
            },
            "status": 1,
            "type": 7,
            "specifier": {
              "score": "2:0"
            },
            "outcomes": [
              {
                "id": 7910212,
                "odds": 2.35,
                "name": {
                  "id": "1",
                  "outcomeName": {
                    "en": "{$competitor1}",
                    "ko": "{$competitor1}",
                    "zh": "{$competitor1}"
                  },
                  "createdAt": "2021-02-24 11:02:42",
                  "updatedAt": "2021-02-24T02:02:42.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:11.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7910213,
                "odds": 1.95,
                "name": {
                  "id": "2",
                  "outcomeName": {
                    "en": "draw",
                    "ko": "드로",
                    "zh": "平局"
                  },
                  "createdAt": "2021-02-24 11:02:42",
                  "updatedAt": "2021-02-24T02:02:42.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:11.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7910214,
                "odds": 6.5,
                "name": {
                  "id": "3",
                  "outcomeName": {
                    "en": "{$competitor2}",
                    "ko": "{$competitor2}",
                    "zh": "{$competitor2}"
                  },
                  "createdAt": "2021-02-24 11:02:42",
                  "updatedAt": "2021-02-24T02:02:42.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:11.000000+09:00",
                "oldOdds": null
              }
            ],
            "updatedAt": "2021-04-14T21:32:11.000000+09:00"
          }
        ],
        "homeScore": "2",
        "awayScore": "0",
        "homeTeam": {
          "id": 53841,
          "name": {
            "en": "Gjorce Petrov",
            "ko": "FK 메이크도니야 그요르세 페트로브",
            "zh": "佐塞彼得罗夫马其顿尼亚"
          }
        },
        "awayTeam": {
          "id": 110823,
          "name": {
            "en": "FK Borec",
            "ko": "FK 보레츠",
            "zh": "伯雷茨"
          }
        },
        "tournament": {
          "id": 199,
          "title": {
            "en": "1. MFL",
            "ko": "1. MFL",
            "zh": "马其顿足球甲级联赛"
          },
          "country": null
        },
        "startAt": "2021-04-14T20:00:00.000000+09:00",
        "updatedAt": "2021-04-14T21:32:10.000000+09:00"
      },
      {
        "id": 23422395,
        "status": {
          "en": "1st half",
          "ko": "전반전",
          "zh": "上半场"
        },
        "markets": [
          {
            "id": 2604812,
            "title": {
              "id": 10,
              "marketName": {
                "en": "Double chance",
                "ko": "더블 기회",
                "zh": "双胜彩"
              },
              "disabled": 0,
              "createdAt": "2021-02-24 11:02:37",
              "updatedAt": "2021-02-24T02:02:37.000000Z"
            },
            "status": 1,
            "type": 10,
            "specifier": {},
            "outcomes": [
              {
                "id": 7666770,
                "odds": 1.45,
                "name": {
                  "id": "10",
                  "outcomeName": {
                    "en": "{$competitor1} or {$competitor2}",
                    "ko": "{$competitor1} 또는 {$competitor2}",
                    "zh": "{$competitor1} 或 {$competitor2}"
                  },
                  "createdAt": "2021-02-24 11:02:47",
                  "updatedAt": "2021-02-24T02:02:47.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:08.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7666771,
                "odds": 1.22,
                "name": {
                  "id": "11",
                  "outcomeName": {
                    "en": "draw or {$competitor2}",
                    "ko": "드로 또는 {$competitor2}",
                    "zh": "平局或 {$competitor2}"
                  },
                  "createdAt": "2021-02-24 11:02:48",
                  "updatedAt": "2021-02-24T02:02:48.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:08.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7666769,
                "odds": 1.45,
                "name": {
                  "id": "9",
                  "outcomeName": {
                    "en": "{$competitor1} or draw",
                    "ko": "{$competitor1} 또는 드로",
                    "zh": "{$competitor1} 或平局"
                  },
                  "createdAt": "2021-02-24 11:02:42",
                  "updatedAt": "2021-02-24T02:02:42.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:08.000000+09:00",
                "oldOdds": null
              }
            ],
            "updatedAt": "2021-04-14T21:32:08.000000+09:00"
          },
          {
            "id": 2604813,
            "title": {
              "id": 11,
              "marketName": {
                "en": "Draw no bet",
                "ko": "드로 노 베트",
                "zh": "平局返还"
              },
              "disabled": 0,
              "createdAt": "2021-02-24 11:02:37",
              "updatedAt": "2021-02-24T02:02:37.000000Z"
            },
            "status": 1,
            "type": 11,
            "specifier": {},
            "outcomes": [
              {
                "id": 7666772,
                "odds": 2.2,
                "name": {
                  "id": "4",
                  "outcomeName": {
                    "en": "{$competitor1}",
                    "ko": "{$competitor1}",
                    "zh": "{$competitor1}"
                  },
                  "createdAt": "2021-02-24 11:02:42",
                  "updatedAt": "2021-02-24T02:02:42.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:09.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7666773,
                "odds": 1.57,
                "name": {
                  "id": "5",
                  "outcomeName": {
                    "en": "{$competitor2}",
                    "ko": "{$competitor2}",
                    "zh": "{$competitor2}"
                  },
                  "createdAt": "2021-02-24 11:02:42",
                  "updatedAt": "2021-02-24T02:02:42.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:09.000000+09:00",
                "oldOdds": null
              }
            ],
            "updatedAt": "2021-04-14T21:32:09.000000+09:00"
          },
          {
            "id": 2604814,
            "title": {
              "id": 1,
              "marketName": {
                "en": "1x2",
                "ko": "1x2",
                "zh": "胜平负"
              },
              "disabled": 0,
              "createdAt": "2021-02-24 11:02:37",
              "updatedAt": "2021-02-24T02:02:37.000000Z"
            },
            "status": 1,
            "type": 1,
            "specifier": {},
            "outcomes": [
              {
                "id": 7666774,
                "odds": 3.5,
                "name": {
                  "id": "1",
                  "outcomeName": {
                    "en": "{$competitor1}",
                    "ko": "{$competitor1}",
                    "zh": "{$competitor1}"
                  },
                  "createdAt": "2021-02-24 11:02:42",
                  "updatedAt": "2021-02-24T02:02:42.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:09.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7666775,
                "odds": 2.45,
                "name": {
                  "id": "2",
                  "outcomeName": {
                    "en": "draw",
                    "ko": "드로",
                    "zh": "平局"
                  },
                  "createdAt": "2021-02-24 11:02:42",
                  "updatedAt": "2021-02-24T02:02:42.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:09.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7666776,
                "odds": 2.45,
                "name": {
                  "id": "3",
                  "outcomeName": {
                    "en": "{$competitor2}",
                    "ko": "{$competitor2}",
                    "zh": "{$competitor2}"
                  },
                  "createdAt": "2021-02-24 11:02:42",
                  "updatedAt": "2021-02-24T02:02:42.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:09.000000+09:00",
                "oldOdds": null
              }
            ],
            "updatedAt": "2021-04-14T21:32:09.000000+09:00"
          },
          {
            "id": 2618923,
            "title": {
              "id": 16,
              "marketName": {
                "en": "Handicap",
                "ko": "핸디캡",
                "zh": "欧洲让球盘"
              },
              "disabled": 0,
              "createdAt": "2021-02-24 11:02:37",
              "updatedAt": "2021-02-24T02:02:37.000000Z"
            },
            "status": 1,
            "type": 16,
            "specifier": {
              "hcp": "0.5"
            },
            "outcomes": [
              {
                "id": 7711927,
                "odds": 1.5,
                "name": {
                  "id": "1714",
                  "outcomeName": {
                    "en": "{$competitor1} ({+hcp})",
                    "ko": "{$competitor1} ({+hcp})",
                    "zh": "{$competitor1} ({+hcp})"
                  },
                  "createdAt": "2021-02-24 11:02:50",
                  "updatedAt": "2021-02-24T02:02:50.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:09.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7711926,
                "odds": 2.4,
                "name": {
                  "id": "1715",
                  "outcomeName": {
                    "en": "{$competitor2} ({-hcp})",
                    "ko": "{$competitor2} ({-hcp})",
                    "zh": "{$competitor2} ({-hcp})"
                  },
                  "createdAt": "2021-02-24 11:02:49",
                  "updatedAt": "2021-02-24T02:02:49.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:09.000000+09:00",
                "oldOdds": null
              }
            ],
            "updatedAt": "2021-04-14T21:32:09.000000+09:00"
          },
          {
            "id": 2618930,
            "title": {
              "id": 45,
              "marketName": {
                "en": "Correct score",
                "ko": "정확한 스코어",
                "zh": "正确进球"
              },
              "disabled": 0,
              "createdAt": "2021-02-24 11:02:37",
              "updatedAt": "2021-02-24T02:02:37.000000Z"
            },
            "status": 1,
            "type": 45,
            "specifier": {},
            "outcomes": [
              {
                "id": 7712070,
                "odds": 3.6,
                "name": {
                  "id": "286",
                  "outcomeName": {
                    "en": "1:1",
                    "ko": "1:1",
                    "zh": "1:1"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:09.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7712062,
                "odds": 5.5,
                "name": {
                  "id": "288",
                  "outcomeName": {
                    "en": "2:1",
                    "ko": "2:1",
                    "zh": "2:1"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:09.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7712064,
                "odds": 16,
                "name": {
                  "id": "290",
                  "outcomeName": {
                    "en": "3:1",
                    "ko": "3:1",
                    "zh": "3:1"
                  },
                  "createdAt": "2021-02-24 11:02:50",
                  "updatedAt": "2021-02-24T02:02:50.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:09.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7712067,
                "odds": 70,
                "name": {
                  "id": "292",
                  "outcomeName": {
                    "en": "4:1",
                    "ko": "4:1",
                    "zh": "4:1"
                  },
                  "createdAt": "2021-02-24 11:02:50",
                  "updatedAt": "2021-02-24T02:02:50.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:09.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7712022,
                "odds": 4.3,
                "name": {
                  "id": "296",
                  "outcomeName": {
                    "en": "1:2",
                    "ko": "1:2",
                    "zh": "1:2"
                  },
                  "createdAt": "2021-02-24 11:02:50",
                  "updatedAt": "2021-02-24T02:02:50.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:09.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7712071,
                "odds": 6,
                "name": {
                  "id": "298",
                  "outcomeName": {
                    "en": "2:2",
                    "ko": "2:2",
                    "zh": "2:2"
                  },
                  "createdAt": "2021-02-24 11:02:50",
                  "updatedAt": "2021-02-24T02:02:50.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:09.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7712066,
                "odds": 18.5,
                "name": {
                  "id": "300",
                  "outcomeName": {
                    "en": "3:2",
                    "ko": "3:2",
                    "zh": "3:2"
                  },
                  "createdAt": "2021-02-24 11:02:51",
                  "updatedAt": "2021-02-24T02:02:51.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:09.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7712068,
                "odds": 80,
                "name": {
                  "id": "302",
                  "outcomeName": {
                    "en": "4:2",
                    "ko": "4:2",
                    "zh": "4:2"
                  },
                  "createdAt": "2021-02-24 11:02:51",
                  "updatedAt": "2021-02-24T02:02:51.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:09.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7711970,
                "odds": 9.5,
                "name": {
                  "id": "306",
                  "outcomeName": {
                    "en": "1:3",
                    "ko": "1:3",
                    "zh": "1:3"
                  },
                  "createdAt": "2021-02-24 11:02:51",
                  "updatedAt": "2021-02-24T02:02:51.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:09.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7711971,
                "odds": 14,
                "name": {
                  "id": "308",
                  "outcomeName": {
                    "en": "2:3",
                    "ko": "2:3",
                    "zh": "2:3"
                  },
                  "createdAt": "2021-02-24 11:02:51",
                  "updatedAt": "2021-02-24T02:02:51.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:09.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7712072,
                "odds": 40,
                "name": {
                  "id": "310",
                  "outcomeName": {
                    "en": "3:3",
                    "ko": "3:3",
                    "zh": "3:3"
                  },
                  "createdAt": "2021-02-24 11:02:52",
                  "updatedAt": "2021-02-24T02:02:52.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:09.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7711977,
                "odds": 100,
                "name": {
                  "id": "312",
                  "outcomeName": {
                    "en": "4:3",
                    "ko": "4:3",
                    "zh": "4:3"
                  },
                  "createdAt": "2021-02-24 11:02:52",
                  "updatedAt": "2021-02-24T02:02:52.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:09.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7711973,
                "odds": 32,
                "name": {
                  "id": "316",
                  "outcomeName": {
                    "en": "1:4",
                    "ko": "1:4",
                    "zh": "1:4"
                  },
                  "createdAt": "2021-02-24 11:02:52",
                  "updatedAt": "2021-02-24T02:02:52.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:09.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7711974,
                "odds": 50,
                "name": {
                  "id": "318",
                  "outcomeName": {
                    "en": "2:4",
                    "ko": "2:4",
                    "zh": "2:4"
                  },
                  "createdAt": "2021-02-24 11:02:52",
                  "updatedAt": "2021-02-24T02:02:52.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:09.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7711975,
                "odds": 100,
                "name": {
                  "id": "320",
                  "outcomeName": {
                    "en": "3:4",
                    "ko": "3:4",
                    "zh": "3:4"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:09.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7711984,
                "odds": 100,
                "name": {
                  "id": "322",
                  "outcomeName": {
                    "en": "4:4",
                    "ko": "4:4",
                    "zh": "4:4"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:09.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7711978,
                "odds": 45,
                "name": {
                  "id": "324",
                  "outcomeName": {
                    "en": "other",
                    "ko": "기타",
                    "zh": "其他"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:09.000000+09:00",
                "oldOdds": null
              }
            ],
            "updatedAt": "2021-04-14T21:32:09.000000+09:00"
          },
          {
            "id": 2618954,
            "title": {
              "id": 14,
              "marketName": {
                "en": "Handicap {hcp}",
                "ko": "핸디캡 {hcp}",
                "zh": "不利 {hcp}"
              },
              "disabled": 0,
              "createdAt": "2021-02-24 11:02:37",
              "updatedAt": "2021-02-24T02:02:37.000000Z"
            },
            "status": 1,
            "type": 14,
            "specifier": {
              "hcp": "0:1"
            },
            "outcomes": [
              {
                "id": 7712172,
                "odds": 11,
                "name": {
                  "id": "1711",
                  "outcomeName": {
                    "en": "{$competitor1} ({hcp})",
                    "ko": "{$competitor1} ({hcp})",
                    "zh": "{$competitor1} ({hcp})"
                  },
                  "createdAt": "2021-02-24 11:02:45",
                  "updatedAt": "2021-02-24T02:02:45.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:09.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7712166,
                "odds": 4.45,
                "name": {
                  "id": "1712",
                  "outcomeName": {
                    "en": "draw ({hcp})",
                    "ko": "드로 ({hcp})",
                    "zh": "平局 ({hcp})"
                  },
                  "createdAt": "2021-02-24 11:02:50",
                  "updatedAt": "2021-02-24T02:02:50.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:09.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7712167,
                "odds": 1.27,
                "name": {
                  "id": "1713",
                  "outcomeName": {
                    "en": "{$competitor2} ({hcp})",
                    "ko": "{$competitor2} ({hcp})",
                    "zh": "{$competitor2} ({hcp})"
                  },
                  "createdAt": "2021-02-24 11:02:49",
                  "updatedAt": "2021-02-24T02:02:49.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:09.000000+09:00",
                "oldOdds": null
              }
            ],
            "updatedAt": "2021-04-14T21:32:09.000000+09:00"
          },
          {
            "id": 2618956,
            "title": {
              "id": 14,
              "marketName": {
                "en": "Handicap {hcp}",
                "ko": "핸디캡 {hcp}",
                "zh": "不利 {hcp}"
              },
              "disabled": 0,
              "createdAt": "2021-02-24 11:02:37",
              "updatedAt": "2021-02-24T02:02:37.000000Z"
            },
            "status": 1,
            "type": 14,
            "specifier": {
              "hcp": "1:0"
            },
            "outcomes": [
              {
                "id": 7712168,
                "odds": 1.5,
                "name": {
                  "id": "1711",
                  "outcomeName": {
                    "en": "{$competitor1} ({hcp})",
                    "ko": "{$competitor1} ({hcp})",
                    "zh": "{$competitor1} ({hcp})"
                  },
                  "createdAt": "2021-02-24 11:02:45",
                  "updatedAt": "2021-02-24T02:02:45.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:09.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7712169,
                "odds": 3.6,
                "name": {
                  "id": "1712",
                  "outcomeName": {
                    "en": "draw ({hcp})",
                    "ko": "드로 ({hcp})",
                    "zh": "平局 ({hcp})"
                  },
                  "createdAt": "2021-02-24 11:02:50",
                  "updatedAt": "2021-02-24T02:02:50.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:09.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7712170,
                "odds": 6.5,
                "name": {
                  "id": "1713",
                  "outcomeName": {
                    "en": "{$competitor2} ({hcp})",
                    "ko": "{$competitor2} ({hcp})",
                    "zh": "{$competitor2} ({hcp})"
                  },
                  "createdAt": "2021-02-24 11:02:49",
                  "updatedAt": "2021-02-24T02:02:49.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:09.000000+09:00",
                "oldOdds": null
              }
            ],
            "updatedAt": "2021-04-14T21:32:09.000000+09:00"
          },
          {
            "id": 2618961,
            "title": {
              "id": 14,
              "marketName": {
                "en": "Handicap {hcp}",
                "ko": "핸디캡 {hcp}",
                "zh": "不利 {hcp}"
              },
              "disabled": 0,
              "createdAt": "2021-02-24 11:02:37",
              "updatedAt": "2021-02-24T02:02:37.000000Z"
            },
            "status": 1,
            "type": 14,
            "specifier": {
              "hcp": "2:0"
            },
            "outcomes": [
              {
                "id": 7712174,
                "odds": 1.1,
                "name": {
                  "id": "1711",
                  "outcomeName": {
                    "en": "{$competitor1} ({hcp})",
                    "ko": "{$competitor1} ({hcp})",
                    "zh": "{$competitor1} ({hcp})"
                  },
                  "createdAt": "2021-02-24 11:02:45",
                  "updatedAt": "2021-02-24T02:02:45.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:09.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7712175,
                "odds": 7.25,
                "name": {
                  "id": "1712",
                  "outcomeName": {
                    "en": "draw ({hcp})",
                    "ko": "드로 ({hcp})",
                    "zh": "平局 ({hcp})"
                  },
                  "createdAt": "2021-02-24 11:02:50",
                  "updatedAt": "2021-02-24T02:02:50.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:09.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7712176,
                "odds": 20,
                "name": {
                  "id": "1713",
                  "outcomeName": {
                    "en": "{$competitor2} ({hcp})",
                    "ko": "{$competitor2} ({hcp})",
                    "zh": "{$competitor2} ({hcp})"
                  },
                  "createdAt": "2021-02-24 11:02:49",
                  "updatedAt": "2021-02-24T02:02:49.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:09.000000+09:00",
                "oldOdds": null
              }
            ],
            "updatedAt": "2021-04-14T21:32:09.000000+09:00"
          },
          {
            "id": 2618962,
            "title": {
              "id": 18,
              "marketName": {
                "en": "Total",
                "ko": "토탈",
                "zh": "合计"
              },
              "disabled": 0,
              "createdAt": "2021-02-24 11:02:37",
              "updatedAt": "2021-02-24T02:02:37.000000Z"
            },
            "status": 1,
            "type": 18,
            "specifier": {
              "total": "2.5"
            },
            "outcomes": [
              {
                "id": 7712228,
                "odds": 1.22,
                "name": {
                  "id": "12",
                  "outcomeName": {
                    "en": "over {total}",
                    "ko": "오버 {total}",
                    "zh": "高于{total}"
                  },
                  "createdAt": "2021-02-24 11:02:42",
                  "updatedAt": "2021-02-24T02:02:42.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:09.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7712229,
                "odds": 3.7,
                "name": {
                  "id": "13",
                  "outcomeName": {
                    "en": "under {total}",
                    "ko": "언더 {total}",
                    "zh": "低于{total}"
                  },
                  "createdAt": "2021-02-24 11:02:44",
                  "updatedAt": "2021-02-24T02:02:44.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:09.000000+09:00",
                "oldOdds": null
              }
            ],
            "updatedAt": "2021-04-14T21:32:09.000000+09:00"
          },
          {
            "id": 2618964,
            "title": {
              "id": 18,
              "marketName": {
                "en": "Total",
                "ko": "토탈",
                "zh": "合计"
              },
              "disabled": 0,
              "createdAt": "2021-02-24 11:02:37",
              "updatedAt": "2021-02-24T02:02:37.000000Z"
            },
            "status": 1,
            "type": 18,
            "specifier": {
              "total": "3.5"
            },
            "outcomes": [
              {
                "id": 7712230,
                "odds": 2,
                "name": {
                  "id": "12",
                  "outcomeName": {
                    "en": "over {total}",
                    "ko": "오버 {total}",
                    "zh": "高于{total}"
                  },
                  "createdAt": "2021-02-24 11:02:42",
                  "updatedAt": "2021-02-24T02:02:42.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:09.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7712231,
                "odds": 1.7,
                "name": {
                  "id": "13",
                  "outcomeName": {
                    "en": "under {total}",
                    "ko": "언더 {total}",
                    "zh": "低于{total}"
                  },
                  "createdAt": "2021-02-24 11:02:44",
                  "updatedAt": "2021-02-24T02:02:44.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:09.000000+09:00",
                "oldOdds": null
              }
            ],
            "updatedAt": "2021-04-14T21:32:09.000000+09:00"
          },
          {
            "id": 2618979,
            "title": {
              "id": 18,
              "marketName": {
                "en": "Total",
                "ko": "토탈",
                "zh": "合计"
              },
              "disabled": 0,
              "createdAt": "2021-02-24 11:02:37",
              "updatedAt": "2021-02-24T02:02:37.000000Z"
            },
            "status": 1,
            "type": 18,
            "specifier": {
              "total": "4.5"
            },
            "outcomes": [
              {
                "id": 7712232,
                "odds": 4.05,
                "name": {
                  "id": "12",
                  "outcomeName": {
                    "en": "over {total}",
                    "ko": "오버 {total}",
                    "zh": "高于{total}"
                  },
                  "createdAt": "2021-02-24 11:02:42",
                  "updatedAt": "2021-02-24T02:02:42.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:09.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7712233,
                "odds": 1.18,
                "name": {
                  "id": "13",
                  "outcomeName": {
                    "en": "under {total}",
                    "ko": "언더 {total}",
                    "zh": "低于{total}"
                  },
                  "createdAt": "2021-02-24 11:02:44",
                  "updatedAt": "2021-02-24T02:02:44.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:09.000000+09:00",
                "oldOdds": null
              }
            ],
            "updatedAt": "2021-04-14T21:32:09.000000+09:00"
          },
          {
            "id": 2618982,
            "title": {
              "id": 47,
              "marketName": {
                "en": "Halftime/fulltime",
                "ko": "하프타임/풀타임",
                "zh": "半场/全场"
              },
              "disabled": 0,
              "createdAt": "2021-02-24 11:02:37",
              "updatedAt": "2021-02-24T02:02:37.000000Z"
            },
            "status": 1,
            "type": 47,
            "specifier": {},
            "outcomes": [
              {
                "id": 7711890,
                "odds": 10,
                "name": {
                  "id": "418",
                  "outcomeName": {
                    "en": "{$competitor1}/{$competitor1}",
                    "ko": "{$competitor1}/{$competitor1}",
                    "zh": "{$competitor1}/{$competitor1}"
                  },
                  "createdAt": "2021-02-24 11:02:52",
                  "updatedAt": "2021-02-24T02:02:52.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:09.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7711887,
                "odds": 25,
                "name": {
                  "id": "420",
                  "outcomeName": {
                    "en": "{$competitor1}/draw",
                    "ko": "{$competitor1}/드로",
                    "zh": "{$competitor1}/平局"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:09.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7711916,
                "odds": 55,
                "name": {
                  "id": "422",
                  "outcomeName": {
                    "en": "{$competitor1}/{$competitor2}",
                    "ko": "{$competitor1}/{$competitor2}",
                    "zh": "{$competitor1}/{$competitor2}"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:09.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7711889,
                "odds": 4.35,
                "name": {
                  "id": "424",
                  "outcomeName": {
                    "en": "draw/{$competitor1}",
                    "ko": "드로/{$competitor1}",
                    "zh": "平局/{$competitor1}"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:09.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7711886,
                "odds": 2.55,
                "name": {
                  "id": "426",
                  "outcomeName": {
                    "en": "draw/draw",
                    "ko": "드로/드로",
                    "zh": "平局/平局"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:09.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7711917,
                "odds": 3.2,
                "name": {
                  "id": "428",
                  "outcomeName": {
                    "en": "draw/{$competitor2}",
                    "ko": "드로/{$competitor2}",
                    "zh": "平局/{$competitor2}"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:09.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7711888,
                "odds": 75,
                "name": {
                  "id": "430",
                  "outcomeName": {
                    "en": "{$competitor2}/{$competitor1}",
                    "ko": "{$competitor2}/{$competitor1}",
                    "zh": "{$competitor2}/{$competitor1}"
                  },
                  "createdAt": "2021-02-24 11:02:47",
                  "updatedAt": "2021-02-24T02:02:47.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:09.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7711915,
                "odds": 25,
                "name": {
                  "id": "432",
                  "outcomeName": {
                    "en": "{$competitor2}/draw",
                    "ko": "{$competitor2}/드로",
                    "zh": "{$competitor2}/平局"
                  },
                  "createdAt": "2021-02-24 11:02:47",
                  "updatedAt": "2021-02-24T02:02:47.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:09.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7711918,
                "odds": 6.5,
                "name": {
                  "id": "434",
                  "outcomeName": {
                    "en": "{$competitor2}/{$competitor2}",
                    "ko": "{$competitor2}/{$competitor2}",
                    "zh": "{$competitor2}/{$competitor2}"
                  },
                  "createdAt": "2021-02-24 11:02:47",
                  "updatedAt": "2021-02-24T02:02:47.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:09.000000+09:00",
                "oldOdds": null
              }
            ],
            "updatedAt": "2021-04-14T21:32:09.000000+09:00"
          },
          {
            "id": 2692970,
            "title": {
              "id": 7,
              "marketName": {
                "en": "Which team wins the rest of the match",
                "ko": "남은 매치에서 어느 팀이 이길가요?",
                "zh": "剩余时间内哪队获胜"
              },
              "disabled": 0,
              "createdAt": "2021-02-24 11:02:37",
              "updatedAt": "2021-02-24T02:02:37.000000Z"
            },
            "status": 1,
            "type": 7,
            "specifier": {
              "score": "1:1"
            },
            "outcomes": [
              {
                "id": 7910045,
                "odds": 3.5,
                "name": {
                  "id": "1",
                  "outcomeName": {
                    "en": "{$competitor1}",
                    "ko": "{$competitor1}",
                    "zh": "{$competitor1}"
                  },
                  "createdAt": "2021-02-24 11:02:42",
                  "updatedAt": "2021-02-24T02:02:42.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:09.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7910044,
                "odds": 2.45,
                "name": {
                  "id": "2",
                  "outcomeName": {
                    "en": "draw",
                    "ko": "드로",
                    "zh": "平局"
                  },
                  "createdAt": "2021-02-24 11:02:42",
                  "updatedAt": "2021-02-24T02:02:42.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:09.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7910043,
                "odds": 2.45,
                "name": {
                  "id": "3",
                  "outcomeName": {
                    "en": "{$competitor2}",
                    "ko": "{$competitor2}",
                    "zh": "{$competitor2}"
                  },
                  "createdAt": "2021-02-24 11:02:42",
                  "updatedAt": "2021-02-24T02:02:42.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:09.000000+09:00",
                "oldOdds": null
              }
            ],
            "updatedAt": "2021-04-14T21:32:09.000000+09:00"
          },
          {
            "id": 2692971,
            "title": {
              "id": 41,
              "marketName": {
                "en": "Correct score [{score}]",
                "ko": "정확한 스코어 [{score}]",
                "zh": "正确进球 [{score}]"
              },
              "disabled": 0,
              "createdAt": "2021-02-24 11:02:37",
              "updatedAt": "2021-02-24T02:02:37.000000Z"
            },
            "status": 1,
            "type": 41,
            "specifier": {
              "score": "1:1"
            },
            "outcomes": [
              {
                "id": 7910058,
                "odds": 3.35,
                "name": {
                  "id": "110",
                  "outcomeName": {
                    "en": "0:0",
                    "ko": "0:0",
                    "zh": "0:0"
                  },
                  "createdAt": "2021-02-24 11:02:52",
                  "updatedAt": "2021-02-24T02:02:52.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:08.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7910038,
                "odds": 5.1,
                "name": {
                  "id": "114",
                  "outcomeName": {
                    "en": "1:0",
                    "ko": "1:0",
                    "zh": "1:0"
                  },
                  "createdAt": "2021-02-24 11:02:52",
                  "updatedAt": "2021-02-24T02:02:52.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:08.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7910031,
                "odds": 14.5,
                "name": {
                  "id": "116",
                  "outcomeName": {
                    "en": "2:0",
                    "ko": "2:0",
                    "zh": "2:0"
                  },
                  "createdAt": "2021-02-24 11:02:52",
                  "updatedAt": "2021-02-24T02:02:52.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:08.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7910039,
                "odds": 65,
                "name": {
                  "id": "118",
                  "outcomeName": {
                    "en": "3:0",
                    "ko": "3:0",
                    "zh": "3:0"
                  },
                  "createdAt": "2021-02-24 11:02:52",
                  "updatedAt": "2021-02-24T02:02:52.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:08.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7910028,
                "odds": 100,
                "name": {
                  "id": "120",
                  "outcomeName": {
                    "en": "4:0",
                    "ko": "4:0",
                    "zh": "4:0"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:08.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7910029,
                "odds": 100,
                "name": {
                  "id": "122",
                  "outcomeName": {
                    "en": "5:0",
                    "ko": "5:0",
                    "zh": "5:0"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:08.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7910030,
                "odds": 100,
                "name": {
                  "id": "124",
                  "outcomeName": {
                    "en": "6:0",
                    "ko": "6:0",
                    "zh": "6:0"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:08.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7910040,
                "odds": 4,
                "name": {
                  "id": "126",
                  "outcomeName": {
                    "en": "0:1",
                    "ko": "0:1",
                    "zh": "0:1"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:09.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7910032,
                "odds": 5.5,
                "name": {
                  "id": "128",
                  "outcomeName": {
                    "en": "1:1",
                    "ko": "1:1",
                    "zh": "1:1"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:09.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7910033,
                "odds": 16.5,
                "name": {
                  "id": "130",
                  "outcomeName": {
                    "en": "2:1",
                    "ko": "2:1",
                    "zh": "2:1"
                  },
                  "createdAt": "2021-02-24 11:02:47",
                  "updatedAt": "2021-02-24T02:02:47.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:09.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7910034,
                "odds": 75,
                "name": {
                  "id": "132",
                  "outcomeName": {
                    "en": "3:1",
                    "ko": "3:1",
                    "zh": "3:1"
                  },
                  "createdAt": "2021-02-24 11:02:47",
                  "updatedAt": "2021-02-24T02:02:47.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:09.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7910035,
                "odds": 100,
                "name": {
                  "id": "134",
                  "outcomeName": {
                    "en": "4:1",
                    "ko": "4:1",
                    "zh": "4:1"
                  },
                  "createdAt": "2021-02-24 11:02:47",
                  "updatedAt": "2021-02-24T02:02:47.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:09.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7910036,
                "odds": 100,
                "name": {
                  "id": "136",
                  "outcomeName": {
                    "en": "5:1",
                    "ko": "5:1",
                    "zh": "5:1"
                  },
                  "createdAt": "2021-02-24 11:02:47",
                  "updatedAt": "2021-02-24T02:02:47.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:09.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7910037,
                "odds": 8.75,
                "name": {
                  "id": "138",
                  "outcomeName": {
                    "en": "0:2",
                    "ko": "0:2",
                    "zh": "0:2"
                  },
                  "createdAt": "2021-02-24 11:02:47",
                  "updatedAt": "2021-02-24T02:02:47.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:09.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7910049,
                "odds": 13,
                "name": {
                  "id": "140",
                  "outcomeName": {
                    "en": "1:2",
                    "ko": "1:2",
                    "zh": "1:2"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:09.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7910041,
                "odds": 35,
                "name": {
                  "id": "142",
                  "outcomeName": {
                    "en": "2:2",
                    "ko": "2:2",
                    "zh": "2:2"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:09.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7910042,
                "odds": 100,
                "name": {
                  "id": "144",
                  "outcomeName": {
                    "en": "3:2",
                    "ko": "3:2",
                    "zh": "3:2"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:09.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7910056,
                "odds": 100,
                "name": {
                  "id": "146",
                  "outcomeName": {
                    "en": "4:2",
                    "ko": "4:2",
                    "zh": "4:2"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:09.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7910055,
                "odds": 29,
                "name": {
                  "id": "148",
                  "outcomeName": {
                    "en": "0:3",
                    "ko": "0:3",
                    "zh": "0:3"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:09.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7910054,
                "odds": 45,
                "name": {
                  "id": "150",
                  "outcomeName": {
                    "en": "1:3",
                    "ko": "1:3",
                    "zh": "1:3"
                  },
                  "createdAt": "2021-02-24 11:02:47",
                  "updatedAt": "2021-02-24T02:02:47.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:09.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7910053,
                "odds": 100,
                "name": {
                  "id": "152",
                  "outcomeName": {
                    "en": "2:3",
                    "ko": "2:3",
                    "zh": "2:3"
                  },
                  "createdAt": "2021-02-24 11:02:47",
                  "updatedAt": "2021-02-24T02:02:47.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:09.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7910052,
                "odds": 100,
                "name": {
                  "id": "154",
                  "outcomeName": {
                    "en": "3:3",
                    "ko": "3:3",
                    "zh": "3:3"
                  },
                  "createdAt": "2021-02-24 11:02:47",
                  "updatedAt": "2021-02-24T02:02:47.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:09.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7910051,
                "odds": 100,
                "name": {
                  "id": "156",
                  "outcomeName": {
                    "en": "0:4",
                    "ko": "0:4",
                    "zh": "0:4"
                  },
                  "createdAt": "2021-02-24 11:02:47",
                  "updatedAt": "2021-02-24T02:02:47.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:09.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7910057,
                "odds": 100,
                "name": {
                  "id": "158",
                  "outcomeName": {
                    "en": "1:4",
                    "ko": "1:4",
                    "zh": "1:4"
                  },
                  "createdAt": "2021-02-24 11:02:47",
                  "updatedAt": "2021-02-24T02:02:47.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:09.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7910050,
                "odds": 100,
                "name": {
                  "id": "160",
                  "outcomeName": {
                    "en": "2:4",
                    "ko": "2:4",
                    "zh": "2:4"
                  },
                  "createdAt": "2021-02-24 11:02:41",
                  "updatedAt": "2021-02-24T02:02:41.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:09.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7910048,
                "odds": 100,
                "name": {
                  "id": "162",
                  "outcomeName": {
                    "en": "0:5",
                    "ko": "0:5",
                    "zh": "0:5"
                  },
                  "createdAt": "2021-02-24 11:02:41",
                  "updatedAt": "2021-02-24T02:02:41.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:09.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7910047,
                "odds": 100,
                "name": {
                  "id": "164",
                  "outcomeName": {
                    "en": "1:5",
                    "ko": "1:5",
                    "zh": "1:5"
                  },
                  "createdAt": "2021-02-24 11:02:41",
                  "updatedAt": "2021-02-24T02:02:41.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:09.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7910046,
                "odds": 100,
                "name": {
                  "id": "166",
                  "outcomeName": {
                    "en": "0:6",
                    "ko": "0:6",
                    "zh": "0:6"
                  },
                  "createdAt": "2021-02-24 11:02:41",
                  "updatedAt": "2021-02-24T02:02:41.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:09.000000+09:00",
                "oldOdds": null
              }
            ],
            "updatedAt": "2021-04-14T21:32:08.000000+09:00"
          }
        ],
        "homeScore": "1",
        "awayScore": "1",
        "homeTeam": {
          "id": 170406,
          "name": {
            "en": "Halide Edip Adivarspor",
            "ko": "할리데 에디프 아드바르스포르",
            "zh": "哈莉黛·埃迪布·阿迪瓦尔体育"
          }
        },
        "awayTeam": {
          "id": 7041,
          "name": {
            "en": "Fethiyespor",
            "ko": "페씨에스스포르",
            "zh": "费特希耶体育"
          }
        },
        "tournament": {
          "id": 26388,
          "title": {
            "en": "3. Lig, Group 2",
            "ko": "3. 리가, 그룹 2",
            "zh": "土耳其足球丙级联赛， 第2组"
          },
          "country": null
        },
        "startAt": "2021-04-14T21:00:00.000000+09:00",
        "updatedAt": "2021-04-14T21:32:08.000000+09:00"
      },
      {
        "id": 23422943,
        "status": {
          "en": "1st half",
          "ko": "전반전",
          "zh": "上半场"
        },
        "markets": [
          {
            "id": 2604815,
            "title": {
              "id": 10,
              "marketName": {
                "en": "Double chance",
                "ko": "더블 기회",
                "zh": "双胜彩"
              },
              "disabled": 0,
              "createdAt": "2021-02-24 11:02:37",
              "updatedAt": "2021-02-24T02:02:37.000000Z"
            },
            "status": 1,
            "type": 10,
            "specifier": {},
            "outcomes": [
              {
                "id": 7666778,
                "odds": 1.42,
                "name": {
                  "id": "10",
                  "outcomeName": {
                    "en": "{$competitor1} or {$competitor2}",
                    "ko": "{$competitor1} 또는 {$competitor2}",
                    "zh": "{$competitor1} 或 {$competitor2}"
                  },
                  "createdAt": "2021-02-24 11:02:47",
                  "updatedAt": "2021-02-24T02:02:47.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7666779,
                "odds": 1.52,
                "name": {
                  "id": "11",
                  "outcomeName": {
                    "en": "draw or {$competitor2}",
                    "ko": "드로 또는 {$competitor2}",
                    "zh": "平局或 {$competitor2}"
                  },
                  "createdAt": "2021-02-24 11:02:48",
                  "updatedAt": "2021-02-24T02:02:48.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7666777,
                "odds": 1.2,
                "name": {
                  "id": "9",
                  "outcomeName": {
                    "en": "{$competitor1} or draw",
                    "ko": "{$competitor1} 또는 드로",
                    "zh": "{$competitor1} 或平局"
                  },
                  "createdAt": "2021-02-24 11:02:42",
                  "updatedAt": "2021-02-24T02:02:42.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              }
            ],
            "updatedAt": "2021-04-14T21:32:28.000000+09:00"
          },
          {
            "id": 2604816,
            "title": {
              "id": 11,
              "marketName": {
                "en": "Draw no bet",
                "ko": "드로 노 베트",
                "zh": "平局返还"
              },
              "disabled": 0,
              "createdAt": "2021-02-24 11:02:37",
              "updatedAt": "2021-02-24T02:02:37.000000Z"
            },
            "status": 1,
            "type": 11,
            "specifier": {},
            "outcomes": [
              {
                "id": 7666780,
                "odds": 1.5,
                "name": {
                  "id": "4",
                  "outcomeName": {
                    "en": "{$competitor1}",
                    "ko": "{$competitor1}",
                    "zh": "{$competitor1}"
                  },
                  "createdAt": "2021-02-24 11:02:42",
                  "updatedAt": "2021-02-24T02:02:42.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7666781,
                "odds": 2.4,
                "name": {
                  "id": "5",
                  "outcomeName": {
                    "en": "{$competitor2}",
                    "ko": "{$competitor2}",
                    "zh": "{$competitor2}"
                  },
                  "createdAt": "2021-02-24 11:02:42",
                  "updatedAt": "2021-02-24T02:02:42.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              }
            ],
            "updatedAt": "2021-04-14T21:32:28.000000+09:00"
          },
          {
            "id": 2604817,
            "title": {
              "id": 1,
              "marketName": {
                "en": "1x2",
                "ko": "1x2",
                "zh": "胜平负"
              },
              "disabled": 0,
              "createdAt": "2021-02-24 11:02:37",
              "updatedAt": "2021-02-24T02:02:37.000000Z"
            },
            "status": 1,
            "type": 1,
            "specifier": {},
            "outcomes": [
              {
                "id": 7666782,
                "odds": 2.3,
                "name": {
                  "id": "1",
                  "outcomeName": {
                    "en": "{$competitor1}",
                    "ko": "{$competitor1}",
                    "zh": "{$competitor1}"
                  },
                  "createdAt": "2021-02-24 11:02:42",
                  "updatedAt": "2021-02-24T02:02:42.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7666783,
                "odds": 2.55,
                "name": {
                  "id": "2",
                  "outcomeName": {
                    "en": "draw",
                    "ko": "드로",
                    "zh": "平局"
                  },
                  "createdAt": "2021-02-24 11:02:42",
                  "updatedAt": "2021-02-24T02:02:42.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7666784,
                "odds": 3.75,
                "name": {
                  "id": "3",
                  "outcomeName": {
                    "en": "{$competitor2}",
                    "ko": "{$competitor2}",
                    "zh": "{$competitor2}"
                  },
                  "createdAt": "2021-02-24 11:02:42",
                  "updatedAt": "2021-02-24T02:02:42.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              }
            ],
            "updatedAt": "2021-04-14T21:32:28.000000+09:00"
          },
          {
            "id": 2618789,
            "title": {
              "id": 47,
              "marketName": {
                "en": "Halftime/fulltime",
                "ko": "하프타임/풀타임",
                "zh": "半场/全场"
              },
              "disabled": 0,
              "createdAt": "2021-02-24 11:02:37",
              "updatedAt": "2021-02-24T02:02:37.000000Z"
            },
            "status": 1,
            "type": 47,
            "specifier": {},
            "outcomes": [
              {
                "id": 7711426,
                "odds": 6.5,
                "name": {
                  "id": "418",
                  "outcomeName": {
                    "en": "{$competitor1}/{$competitor1}",
                    "ko": "{$competitor1}/{$competitor1}",
                    "zh": "{$competitor1}/{$competitor1}"
                  },
                  "createdAt": "2021-02-24 11:02:52",
                  "updatedAt": "2021-02-24T02:02:52.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7711422,
                "odds": 27,
                "name": {
                  "id": "420",
                  "outcomeName": {
                    "en": "{$competitor1}/draw",
                    "ko": "{$competitor1}/드로",
                    "zh": "{$competitor1}/平局"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7711433,
                "odds": 80,
                "name": {
                  "id": "422",
                  "outcomeName": {
                    "en": "{$competitor1}/{$competitor2}",
                    "ko": "{$competitor1}/{$competitor2}",
                    "zh": "{$competitor1}/{$competitor2}"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7711425,
                "odds": 2.9,
                "name": {
                  "id": "424",
                  "outcomeName": {
                    "en": "draw/{$competitor1}",
                    "ko": "드로/{$competitor1}",
                    "zh": "平局/{$competitor1}"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7711421,
                "odds": 2.6,
                "name": {
                  "id": "426",
                  "outcomeName": {
                    "en": "draw/draw",
                    "ko": "드로/드로",
                    "zh": "平局/平局"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7711390,
                "odds": 4.6,
                "name": {
                  "id": "428",
                  "outcomeName": {
                    "en": "draw/{$competitor2}",
                    "ko": "드로/{$competitor2}",
                    "zh": "平局/{$competitor2}"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7711424,
                "odds": 50,
                "name": {
                  "id": "430",
                  "outcomeName": {
                    "en": "{$competitor2}/{$competitor1}",
                    "ko": "{$competitor2}/{$competitor1}",
                    "zh": "{$competitor2}/{$competitor1}"
                  },
                  "createdAt": "2021-02-24 11:02:47",
                  "updatedAt": "2021-02-24T02:02:47.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7711391,
                "odds": 26,
                "name": {
                  "id": "432",
                  "outcomeName": {
                    "en": "{$competitor2}/draw",
                    "ko": "{$competitor2}/드로",
                    "zh": "{$competitor2}/平局"
                  },
                  "createdAt": "2021-02-24 11:02:47",
                  "updatedAt": "2021-02-24T02:02:47.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7711374,
                "odds": 11,
                "name": {
                  "id": "434",
                  "outcomeName": {
                    "en": "{$competitor2}/{$competitor2}",
                    "ko": "{$competitor2}/{$competitor2}",
                    "zh": "{$competitor2}/{$competitor2}"
                  },
                  "createdAt": "2021-02-24 11:02:47",
                  "updatedAt": "2021-02-24T02:02:47.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              }
            ],
            "updatedAt": "2021-04-14T21:32:28.000000+09:00"
          },
          {
            "id": 2618793,
            "title": {
              "id": 29,
              "marketName": {
                "en": "Both teams to score",
                "ko": "두 팀 모두 득점",
                "zh": "两队都得分"
              },
              "disabled": 0,
              "createdAt": "2021-02-24 11:02:37",
              "updatedAt": "2021-02-24T02:02:37.000000Z"
            },
            "status": 1,
            "type": 29,
            "specifier": {},
            "outcomes": [
              {
                "id": 7711435,
                "odds": 2.9,
                "name": {
                  "id": "74",
                  "outcomeName": {
                    "en": "yes",
                    "ko": "예",
                    "zh": "是"
                  },
                  "createdAt": "2021-02-24 11:02:42",
                  "updatedAt": "2021-02-24T02:02:42.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7711447,
                "odds": 1.35,
                "name": {
                  "id": "76",
                  "outcomeName": {
                    "en": "no",
                    "ko": "아니오",
                    "zh": "否"
                  },
                  "createdAt": "2021-02-24 11:02:49",
                  "updatedAt": "2021-02-24T02:02:49.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              }
            ],
            "updatedAt": "2021-04-14T21:32:28.000000+09:00"
          },
          {
            "id": 2618798,
            "title": {
              "id": 14,
              "marketName": {
                "en": "Handicap {hcp}",
                "ko": "핸디캡 {hcp}",
                "zh": "不利 {hcp}"
              },
              "disabled": 0,
              "createdAt": "2021-02-24 11:02:37",
              "updatedAt": "2021-02-24T02:02:37.000000Z"
            },
            "status": 1,
            "type": 14,
            "specifier": {
              "hcp": "0:1"
            },
            "outcomes": [
              {
                "id": 7711682,
                "odds": 5.8,
                "name": {
                  "id": "1711",
                  "outcomeName": {
                    "en": "{$competitor1} ({hcp})",
                    "ko": "{$competitor1} ({hcp})",
                    "zh": "{$competitor1} ({hcp})"
                  },
                  "createdAt": "2021-02-24 11:02:45",
                  "updatedAt": "2021-02-24T02:02:45.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7711672,
                "odds": 3.5,
                "name": {
                  "id": "1712",
                  "outcomeName": {
                    "en": "draw ({hcp})",
                    "ko": "드로 ({hcp})",
                    "zh": "平局 ({hcp})"
                  },
                  "createdAt": "2021-02-24 11:02:50",
                  "updatedAt": "2021-02-24T02:02:50.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7711666,
                "odds": 1.55,
                "name": {
                  "id": "1713",
                  "outcomeName": {
                    "en": "{$competitor2} ({hcp})",
                    "ko": "{$competitor2} ({hcp})",
                    "zh": "{$competitor2} ({hcp})"
                  },
                  "createdAt": "2021-02-24 11:02:49",
                  "updatedAt": "2021-02-24T02:02:49.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              }
            ],
            "updatedAt": "2021-04-14T21:32:28.000000+09:00"
          },
          {
            "id": 2618800,
            "title": {
              "id": 14,
              "marketName": {
                "en": "Handicap {hcp}",
                "ko": "핸디캡 {hcp}",
                "zh": "不利 {hcp}"
              },
              "disabled": 0,
              "createdAt": "2021-02-24 11:02:37",
              "updatedAt": "2021-02-24T02:02:37.000000Z"
            },
            "status": 1,
            "type": 14,
            "specifier": {
              "hcp": "1:0"
            },
            "outcomes": [
              {
                "id": 7711667,
                "odds": 1.25,
                "name": {
                  "id": "1711",
                  "outcomeName": {
                    "en": "{$competitor1} ({hcp})",
                    "ko": "{$competitor1} ({hcp})",
                    "zh": "{$competitor1} ({hcp})"
                  },
                  "createdAt": "2021-02-24 11:02:45",
                  "updatedAt": "2021-02-24T02:02:45.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7711668,
                "odds": 4.65,
                "name": {
                  "id": "1712",
                  "outcomeName": {
                    "en": "draw ({hcp})",
                    "ko": "드로 ({hcp})",
                    "zh": "平局 ({hcp})"
                  },
                  "createdAt": "2021-02-24 11:02:50",
                  "updatedAt": "2021-02-24T02:02:50.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7711669,
                "odds": 12,
                "name": {
                  "id": "1713",
                  "outcomeName": {
                    "en": "{$competitor2} ({hcp})",
                    "ko": "{$competitor2} ({hcp})",
                    "zh": "{$competitor2} ({hcp})"
                  },
                  "createdAt": "2021-02-24 11:02:49",
                  "updatedAt": "2021-02-24T02:02:49.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              }
            ],
            "updatedAt": "2021-04-14T21:32:28.000000+09:00"
          },
          {
            "id": 2618801,
            "title": {
              "id": 14,
              "marketName": {
                "en": "Handicap {hcp}",
                "ko": "핸디캡 {hcp}",
                "zh": "不利 {hcp}"
              },
              "disabled": 0,
              "createdAt": "2021-02-24 11:02:37",
              "updatedAt": "2021-02-24T02:02:37.000000Z"
            },
            "status": 1,
            "type": 14,
            "specifier": {
              "hcp": "0:2"
            },
            "outcomes": [
              {
                "id": 7711670,
                "odds": 17,
                "name": {
                  "id": "1711",
                  "outcomeName": {
                    "en": "{$competitor1} ({hcp})",
                    "ko": "{$competitor1} ({hcp})",
                    "zh": "{$competitor1} ({hcp})"
                  },
                  "createdAt": "2021-02-24 11:02:45",
                  "updatedAt": "2021-02-24T02:02:45.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7711671,
                "odds": 6.75,
                "name": {
                  "id": "1712",
                  "outcomeName": {
                    "en": "draw ({hcp})",
                    "ko": "드로 ({hcp})",
                    "zh": "平局 ({hcp})"
                  },
                  "createdAt": "2021-02-24 11:02:50",
                  "updatedAt": "2021-02-24T02:02:50.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7711673,
                "odds": 1.12,
                "name": {
                  "id": "1713",
                  "outcomeName": {
                    "en": "{$competitor2} ({hcp})",
                    "ko": "{$competitor2} ({hcp})",
                    "zh": "{$competitor2} ({hcp})"
                  },
                  "createdAt": "2021-02-24 11:02:49",
                  "updatedAt": "2021-02-24T02:02:49.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              }
            ],
            "updatedAt": "2021-04-14T21:32:28.000000+09:00"
          },
          {
            "id": 2618802,
            "title": {
              "id": 41,
              "marketName": {
                "en": "Correct score [{score}]",
                "ko": "정확한 스코어 [{score}]",
                "zh": "正确进球 [{score}]"
              },
              "disabled": 0,
              "createdAt": "2021-02-24 11:02:37",
              "updatedAt": "2021-02-24T02:02:37.000000Z"
            },
            "status": 1,
            "type": 41,
            "specifier": {
              "score": "0:0"
            },
            "outcomes": [
              {
                "id": 7711332,
                "odds": 3.55,
                "name": {
                  "id": "110",
                  "outcomeName": {
                    "en": "0:0",
                    "ko": "0:0",
                    "zh": "0:0"
                  },
                  "createdAt": "2021-02-24 11:02:52",
                  "updatedAt": "2021-02-24T02:02:52.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7711263,
                "odds": 3.95,
                "name": {
                  "id": "114",
                  "outcomeName": {
                    "en": "1:0",
                    "ko": "1:0",
                    "zh": "1:0"
                  },
                  "createdAt": "2021-02-24 11:02:52",
                  "updatedAt": "2021-02-24T02:02:52.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7711262,
                "odds": 8,
                "name": {
                  "id": "116",
                  "outcomeName": {
                    "en": "2:0",
                    "ko": "2:0",
                    "zh": "2:0"
                  },
                  "createdAt": "2021-02-24 11:02:52",
                  "updatedAt": "2021-02-24T02:02:52.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7711259,
                "odds": 25,
                "name": {
                  "id": "118",
                  "outcomeName": {
                    "en": "3:0",
                    "ko": "3:0",
                    "zh": "3:0"
                  },
                  "createdAt": "2021-02-24 11:02:52",
                  "updatedAt": "2021-02-24T02:02:52.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7711256,
                "odds": 100,
                "name": {
                  "id": "120",
                  "outcomeName": {
                    "en": "4:0",
                    "ko": "4:0",
                    "zh": "4:0"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7711251,
                "odds": 100,
                "name": {
                  "id": "122",
                  "outcomeName": {
                    "en": "5:0",
                    "ko": "5:0",
                    "zh": "5:0"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7711389,
                "odds": 100,
                "name": {
                  "id": "124",
                  "outcomeName": {
                    "en": "6:0",
                    "ko": "6:0",
                    "zh": "6:0"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7711412,
                "odds": 5.5,
                "name": {
                  "id": "126",
                  "outcomeName": {
                    "en": "0:1",
                    "ko": "0:1",
                    "zh": "0:1"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7711415,
                "odds": 5.5,
                "name": {
                  "id": "128",
                  "outcomeName": {
                    "en": "1:1",
                    "ko": "1:1",
                    "zh": "1:1"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7711261,
                "odds": 12,
                "name": {
                  "id": "130",
                  "outcomeName": {
                    "en": "2:1",
                    "ko": "2:1",
                    "zh": "2:1"
                  },
                  "createdAt": "2021-02-24 11:02:47",
                  "updatedAt": "2021-02-24T02:02:47.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7711258,
                "odds": 35,
                "name": {
                  "id": "132",
                  "outcomeName": {
                    "en": "3:1",
                    "ko": "3:1",
                    "zh": "3:1"
                  },
                  "createdAt": "2021-02-24 11:02:47",
                  "updatedAt": "2021-02-24T02:02:47.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7711254,
                "odds": 100,
                "name": {
                  "id": "134",
                  "outcomeName": {
                    "en": "4:1",
                    "ko": "4:1",
                    "zh": "4:1"
                  },
                  "createdAt": "2021-02-24 11:02:47",
                  "updatedAt": "2021-02-24T02:02:47.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7711312,
                "odds": 100,
                "name": {
                  "id": "136",
                  "outcomeName": {
                    "en": "5:1",
                    "ko": "5:1",
                    "zh": "5:1"
                  },
                  "createdAt": "2021-02-24 11:02:47",
                  "updatedAt": "2021-02-24T02:02:47.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7711410,
                "odds": 16,
                "name": {
                  "id": "138",
                  "outcomeName": {
                    "en": "0:2",
                    "ko": "0:2",
                    "zh": "0:2"
                  },
                  "createdAt": "2021-02-24 11:02:47",
                  "updatedAt": "2021-02-24T02:02:47.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7711409,
                "odds": 17,
                "name": {
                  "id": "140",
                  "outcomeName": {
                    "en": "1:2",
                    "ko": "1:2",
                    "zh": "1:2"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7711414,
                "odds": 34,
                "name": {
                  "id": "142",
                  "outcomeName": {
                    "en": "2:2",
                    "ko": "2:2",
                    "zh": "2:2"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7711257,
                "odds": 100,
                "name": {
                  "id": "144",
                  "outcomeName": {
                    "en": "3:2",
                    "ko": "3:2",
                    "zh": "3:2"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7711253,
                "odds": 100,
                "name": {
                  "id": "146",
                  "outcomeName": {
                    "en": "4:2",
                    "ko": "4:2",
                    "zh": "4:2"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7711408,
                "odds": 70,
                "name": {
                  "id": "148",
                  "outcomeName": {
                    "en": "0:3",
                    "ko": "0:3",
                    "zh": "0:3"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7711407,
                "odds": 75,
                "name": {
                  "id": "150",
                  "outcomeName": {
                    "en": "1:3",
                    "ko": "1:3",
                    "zh": "1:3"
                  },
                  "createdAt": "2021-02-24 11:02:47",
                  "updatedAt": "2021-02-24T02:02:47.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7711405,
                "odds": 100,
                "name": {
                  "id": "152",
                  "outcomeName": {
                    "en": "2:3",
                    "ko": "2:3",
                    "zh": "2:3"
                  },
                  "createdAt": "2021-02-24 11:02:47",
                  "updatedAt": "2021-02-24T02:02:47.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7711331,
                "odds": 100,
                "name": {
                  "id": "154",
                  "outcomeName": {
                    "en": "3:3",
                    "ko": "3:3",
                    "zh": "3:3"
                  },
                  "createdAt": "2021-02-24 11:02:47",
                  "updatedAt": "2021-02-24T02:02:47.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7711404,
                "odds": 100,
                "name": {
                  "id": "156",
                  "outcomeName": {
                    "en": "0:4",
                    "ko": "0:4",
                    "zh": "0:4"
                  },
                  "createdAt": "2021-02-24 11:02:47",
                  "updatedAt": "2021-02-24T02:02:47.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7711403,
                "odds": 100,
                "name": {
                  "id": "158",
                  "outcomeName": {
                    "en": "1:4",
                    "ko": "1:4",
                    "zh": "1:4"
                  },
                  "createdAt": "2021-02-24 11:02:47",
                  "updatedAt": "2021-02-24T02:02:47.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7711401,
                "odds": 100,
                "name": {
                  "id": "160",
                  "outcomeName": {
                    "en": "2:4",
                    "ko": "2:4",
                    "zh": "2:4"
                  },
                  "createdAt": "2021-02-24 11:02:41",
                  "updatedAt": "2021-02-24T02:02:41.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7711400,
                "odds": 100,
                "name": {
                  "id": "162",
                  "outcomeName": {
                    "en": "0:5",
                    "ko": "0:5",
                    "zh": "0:5"
                  },
                  "createdAt": "2021-02-24 11:02:41",
                  "updatedAt": "2021-02-24T02:02:41.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7711399,
                "odds": 100,
                "name": {
                  "id": "164",
                  "outcomeName": {
                    "en": "1:5",
                    "ko": "1:5",
                    "zh": "1:5"
                  },
                  "createdAt": "2021-02-24 11:02:41",
                  "updatedAt": "2021-02-24T02:02:41.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7711398,
                "odds": 100,
                "name": {
                  "id": "166",
                  "outcomeName": {
                    "en": "0:6",
                    "ko": "0:6",
                    "zh": "0:6"
                  },
                  "createdAt": "2021-02-24 11:02:41",
                  "updatedAt": "2021-02-24T02:02:41.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              }
            ],
            "updatedAt": "2021-04-14T21:32:28.000000+09:00"
          },
          {
            "id": 2618817,
            "title": {
              "id": 16,
              "marketName": {
                "en": "Handicap",
                "ko": "핸디캡",
                "zh": "欧洲让球盘"
              },
              "disabled": 0,
              "createdAt": "2021-02-24 11:02:37",
              "updatedAt": "2021-02-24T02:02:37.000000Z"
            },
            "status": 1,
            "type": 16,
            "specifier": {
              "hcp": "-0.5"
            },
            "outcomes": [
              {
                "id": 7711377,
                "odds": 2.25,
                "name": {
                  "id": "1714",
                  "outcomeName": {
                    "en": "{$competitor1} ({+hcp})",
                    "ko": "{$competitor1} ({+hcp})",
                    "zh": "{$competitor1} ({+hcp})"
                  },
                  "createdAt": "2021-02-24 11:02:50",
                  "updatedAt": "2021-02-24T02:02:50.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7711376,
                "odds": 1.55,
                "name": {
                  "id": "1715",
                  "outcomeName": {
                    "en": "{$competitor2} ({-hcp})",
                    "ko": "{$competitor2} ({-hcp})",
                    "zh": "{$competitor2} ({-hcp})"
                  },
                  "createdAt": "2021-02-24 11:02:49",
                  "updatedAt": "2021-02-24T02:02:49.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              }
            ],
            "updatedAt": "2021-04-14T21:32:28.000000+09:00"
          },
          {
            "id": 2618832,
            "title": {
              "id": 18,
              "marketName": {
                "en": "Total",
                "ko": "토탈",
                "zh": "合计"
              },
              "disabled": 0,
              "createdAt": "2021-02-24 11:02:37",
              "updatedAt": "2021-02-24T02:02:37.000000Z"
            },
            "status": 1,
            "type": 18,
            "specifier": {
              "total": "0.5"
            },
            "outcomes": [
              {
                "id": 7711723,
                "odds": 1.2,
                "name": {
                  "id": "12",
                  "outcomeName": {
                    "en": "over {total}",
                    "ko": "오버 {total}",
                    "zh": "高于{total}"
                  },
                  "createdAt": "2021-02-24 11:02:42",
                  "updatedAt": "2021-02-24T02:02:42.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7711724,
                "odds": 3.9,
                "name": {
                  "id": "13",
                  "outcomeName": {
                    "en": "under {total}",
                    "ko": "언더 {total}",
                    "zh": "低于{total}"
                  },
                  "createdAt": "2021-02-24 11:02:44",
                  "updatedAt": "2021-02-24T02:02:44.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              }
            ],
            "updatedAt": "2021-04-14T21:32:28.000000+09:00"
          },
          {
            "id": 2618833,
            "title": {
              "id": 18,
              "marketName": {
                "en": "Total",
                "ko": "토탈",
                "zh": "合计"
              },
              "disabled": 0,
              "createdAt": "2021-02-24 11:02:37",
              "updatedAt": "2021-02-24T02:02:37.000000Z"
            },
            "status": 1,
            "type": 18,
            "specifier": {
              "total": "1.5"
            },
            "outcomes": [
              {
                "id": 7711725,
                "odds": 1.95,
                "name": {
                  "id": "12",
                  "outcomeName": {
                    "en": "over {total}",
                    "ko": "오버 {total}",
                    "zh": "高于{total}"
                  },
                  "createdAt": "2021-02-24 11:02:42",
                  "updatedAt": "2021-02-24T02:02:42.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7711727,
                "odds": 1.75,
                "name": {
                  "id": "13",
                  "outcomeName": {
                    "en": "under {total}",
                    "ko": "언더 {total}",
                    "zh": "低于{total}"
                  },
                  "createdAt": "2021-02-24 11:02:44",
                  "updatedAt": "2021-02-24T02:02:44.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              }
            ],
            "updatedAt": "2021-04-14T21:32:28.000000+09:00"
          },
          {
            "id": 2618858,
            "title": {
              "id": 18,
              "marketName": {
                "en": "Total",
                "ko": "토탈",
                "zh": "合计"
              },
              "disabled": 0,
              "createdAt": "2021-02-24 11:02:37",
              "updatedAt": "2021-02-24T02:02:37.000000Z"
            },
            "status": 1,
            "type": 18,
            "specifier": {
              "total": "2.5"
            },
            "outcomes": [
              {
                "id": 7711729,
                "odds": 3.8,
                "name": {
                  "id": "12",
                  "outcomeName": {
                    "en": "over {total}",
                    "ko": "오버 {total}",
                    "zh": "高于{total}"
                  },
                  "createdAt": "2021-02-24 11:02:42",
                  "updatedAt": "2021-02-24T02:02:42.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7711730,
                "odds": 1.2,
                "name": {
                  "id": "13",
                  "outcomeName": {
                    "en": "under {total}",
                    "ko": "언더 {total}",
                    "zh": "低于{total}"
                  },
                  "createdAt": "2021-02-24 11:02:44",
                  "updatedAt": "2021-02-24T02:02:44.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              }
            ],
            "updatedAt": "2021-04-14T21:32:28.000000+09:00"
          },
          {
            "id": 2618905,
            "title": {
              "id": 45,
              "marketName": {
                "en": "Correct score",
                "ko": "정확한 스코어",
                "zh": "正确进球"
              },
              "disabled": 0,
              "createdAt": "2021-02-24 11:02:37",
              "updatedAt": "2021-02-24T02:02:37.000000Z"
            },
            "status": 1,
            "type": 45,
            "specifier": {},
            "outcomes": [
              {
                "id": 7711567,
                "odds": 3.55,
                "name": {
                  "id": "274",
                  "outcomeName": {
                    "en": "0:0",
                    "ko": "0:0",
                    "zh": "0:0"
                  },
                  "createdAt": "2021-02-24 11:02:43",
                  "updatedAt": "2021-02-24T02:02:43.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7711558,
                "odds": 3.95,
                "name": {
                  "id": "276",
                  "outcomeName": {
                    "en": "1:0",
                    "ko": "1:0",
                    "zh": "1:0"
                  },
                  "createdAt": "2021-02-24 11:02:43",
                  "updatedAt": "2021-02-24T02:02:43.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7711559,
                "odds": 8,
                "name": {
                  "id": "278",
                  "outcomeName": {
                    "en": "2:0",
                    "ko": "2:0",
                    "zh": "2:0"
                  },
                  "createdAt": "2021-02-24 11:02:43",
                  "updatedAt": "2021-02-24T02:02:43.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7711561,
                "odds": 25,
                "name": {
                  "id": "280",
                  "outcomeName": {
                    "en": "3:0",
                    "ko": "3:0",
                    "zh": "3:0"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7711565,
                "odds": 100,
                "name": {
                  "id": "282",
                  "outcomeName": {
                    "en": "4:0",
                    "ko": "4:0",
                    "zh": "4:0"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7711571,
                "odds": 5.5,
                "name": {
                  "id": "284",
                  "outcomeName": {
                    "en": "0:1",
                    "ko": "0:1",
                    "zh": "0:1"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7711568,
                "odds": 5.5,
                "name": {
                  "id": "286",
                  "outcomeName": {
                    "en": "1:1",
                    "ko": "1:1",
                    "zh": "1:1"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7711560,
                "odds": 12,
                "name": {
                  "id": "288",
                  "outcomeName": {
                    "en": "2:1",
                    "ko": "2:1",
                    "zh": "2:1"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7711562,
                "odds": 35,
                "name": {
                  "id": "290",
                  "outcomeName": {
                    "en": "3:1",
                    "ko": "3:1",
                    "zh": "3:1"
                  },
                  "createdAt": "2021-02-24 11:02:50",
                  "updatedAt": "2021-02-24T02:02:50.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7711572,
                "odds": 100,
                "name": {
                  "id": "292",
                  "outcomeName": {
                    "en": "4:1",
                    "ko": "4:1",
                    "zh": "4:1"
                  },
                  "createdAt": "2021-02-24 11:02:50",
                  "updatedAt": "2021-02-24T02:02:50.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7711521,
                "odds": 16,
                "name": {
                  "id": "294",
                  "outcomeName": {
                    "en": "0:2",
                    "ko": "0:2",
                    "zh": "0:2"
                  },
                  "createdAt": "2021-02-24 11:02:50",
                  "updatedAt": "2021-02-24T02:02:50.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7711520,
                "odds": 17,
                "name": {
                  "id": "296",
                  "outcomeName": {
                    "en": "1:2",
                    "ko": "1:2",
                    "zh": "1:2"
                  },
                  "createdAt": "2021-02-24 11:02:50",
                  "updatedAt": "2021-02-24T02:02:50.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7711569,
                "odds": 34,
                "name": {
                  "id": "298",
                  "outcomeName": {
                    "en": "2:2",
                    "ko": "2:2",
                    "zh": "2:2"
                  },
                  "createdAt": "2021-02-24 11:02:50",
                  "updatedAt": "2021-02-24T02:02:50.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7711563,
                "odds": 100,
                "name": {
                  "id": "300",
                  "outcomeName": {
                    "en": "3:2",
                    "ko": "3:2",
                    "zh": "3:2"
                  },
                  "createdAt": "2021-02-24 11:02:51",
                  "updatedAt": "2021-02-24T02:02:51.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7711566,
                "odds": 100,
                "name": {
                  "id": "302",
                  "outcomeName": {
                    "en": "4:2",
                    "ko": "4:2",
                    "zh": "4:2"
                  },
                  "createdAt": "2021-02-24 11:02:51",
                  "updatedAt": "2021-02-24T02:02:51.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7711519,
                "odds": 70,
                "name": {
                  "id": "304",
                  "outcomeName": {
                    "en": "0:3",
                    "ko": "0:3",
                    "zh": "0:3"
                  },
                  "createdAt": "2021-02-24 11:02:51",
                  "updatedAt": "2021-02-24T02:02:51.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7711501,
                "odds": 75,
                "name": {
                  "id": "306",
                  "outcomeName": {
                    "en": "1:3",
                    "ko": "1:3",
                    "zh": "1:3"
                  },
                  "createdAt": "2021-02-24 11:02:51",
                  "updatedAt": "2021-02-24T02:02:51.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7711468,
                "odds": 100,
                "name": {
                  "id": "308",
                  "outcomeName": {
                    "en": "2:3",
                    "ko": "2:3",
                    "zh": "2:3"
                  },
                  "createdAt": "2021-02-24 11:02:51",
                  "updatedAt": "2021-02-24T02:02:51.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7711570,
                "odds": 100,
                "name": {
                  "id": "310",
                  "outcomeName": {
                    "en": "3:3",
                    "ko": "3:3",
                    "zh": "3:3"
                  },
                  "createdAt": "2021-02-24 11:02:52",
                  "updatedAt": "2021-02-24T02:02:52.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7711473,
                "odds": 100,
                "name": {
                  "id": "312",
                  "outcomeName": {
                    "en": "4:3",
                    "ko": "4:3",
                    "zh": "4:3"
                  },
                  "createdAt": "2021-02-24 11:02:52",
                  "updatedAt": "2021-02-24T02:02:52.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7711469,
                "odds": 100,
                "name": {
                  "id": "314",
                  "outcomeName": {
                    "en": "0:4",
                    "ko": "0:4",
                    "zh": "0:4"
                  },
                  "createdAt": "2021-02-24 11:02:52",
                  "updatedAt": "2021-02-24T02:02:52.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7711470,
                "odds": 100,
                "name": {
                  "id": "316",
                  "outcomeName": {
                    "en": "1:4",
                    "ko": "1:4",
                    "zh": "1:4"
                  },
                  "createdAt": "2021-02-24 11:02:52",
                  "updatedAt": "2021-02-24T02:02:52.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7711471,
                "odds": 100,
                "name": {
                  "id": "318",
                  "outcomeName": {
                    "en": "2:4",
                    "ko": "2:4",
                    "zh": "2:4"
                  },
                  "createdAt": "2021-02-24 11:02:52",
                  "updatedAt": "2021-02-24T02:02:52.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7711472,
                "odds": 100,
                "name": {
                  "id": "320",
                  "outcomeName": {
                    "en": "3:4",
                    "ko": "3:4",
                    "zh": "3:4"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7711475,
                "odds": 100,
                "name": {
                  "id": "322",
                  "outcomeName": {
                    "en": "4:4",
                    "ko": "4:4",
                    "zh": "4:4"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7711482,
                "odds": 100,
                "name": {
                  "id": "324",
                  "outcomeName": {
                    "en": "other",
                    "ko": "기타",
                    "zh": "其他"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              }
            ],
            "updatedAt": "2021-04-14T21:32:28.000000+09:00"
          },
          {
            "id": 2692417,
            "title": {
              "id": 7,
              "marketName": {
                "en": "Which team wins the rest of the match",
                "ko": "남은 매치에서 어느 팀이 이길가요?",
                "zh": "剩余时间内哪队获胜"
              },
              "disabled": 0,
              "createdAt": "2021-02-24 11:02:37",
              "updatedAt": "2021-02-24T02:02:37.000000Z"
            },
            "status": 1,
            "type": 7,
            "specifier": {
              "score": "0:0"
            },
            "outcomes": [
              {
                "id": 7908197,
                "odds": 2.3,
                "name": {
                  "id": "1",
                  "outcomeName": {
                    "en": "{$competitor1}",
                    "ko": "{$competitor1}",
                    "zh": "{$competitor1}"
                  },
                  "createdAt": "2021-02-24 11:02:42",
                  "updatedAt": "2021-02-24T02:02:42.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7908195,
                "odds": 2.55,
                "name": {
                  "id": "2",
                  "outcomeName": {
                    "en": "draw",
                    "ko": "드로",
                    "zh": "平局"
                  },
                  "createdAt": "2021-02-24 11:02:42",
                  "updatedAt": "2021-02-24T02:02:42.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7908196,
                "odds": 3.75,
                "name": {
                  "id": "3",
                  "outcomeName": {
                    "en": "{$competitor2}",
                    "ko": "{$competitor2}",
                    "zh": "{$competitor2}"
                  },
                  "createdAt": "2021-02-24 11:02:42",
                  "updatedAt": "2021-02-24T02:02:42.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:28.000000+09:00",
                "oldOdds": null
              }
            ],
            "updatedAt": "2021-04-14T21:32:28.000000+09:00"
          }
        ],
        "homeScore": "0",
        "awayScore": "0",
        "homeTeam": {
          "id": 170402,
          "name": {
            "en": "Catalcaspor",
            "ko": "차탈자스포르",
            "zh": "恰塔尔贾体育"
          }
        },
        "awayTeam": {
          "id": 625712,
          "name": {
            "en": "Isparta 32 Spor",
            "ko": "이스파르타 32 스포르",
            "zh": "伊斯帕塔32"
          }
        },
        "tournament": {
          "id": 26390,
          "title": {
            "en": "3. Lig, Group 3",
            "ko": "3. 리가, 그룹 3",
            "zh": "土耳其足球丙级联赛， 第3组"
          },
          "country": null
        },
        "startAt": "2021-04-14T21:00:00.000000+09:00",
        "updatedAt": "2021-04-14T21:32:28.000000+09:00"
      },
      {
        "id": 23421843,
        "status": {
          "en": "1st half",
          "ko": "전반전",
          "zh": "上半场"
        },
        "markets": [
          {
            "id": 2604622,
            "title": {
              "id": 11,
              "marketName": {
                "en": "Draw no bet",
                "ko": "드로 노 베트",
                "zh": "平局返还"
              },
              "disabled": 0,
              "createdAt": "2021-02-24 11:02:37",
              "updatedAt": "2021-02-24T02:02:37.000000Z"
            },
            "status": 1,
            "type": 11,
            "specifier": {},
            "outcomes": [
              {
                "id": 7666175,
                "odds": 1.65,
                "name": {
                  "id": "4",
                  "outcomeName": {
                    "en": "{$competitor1}",
                    "ko": "{$competitor1}",
                    "zh": "{$competitor1}"
                  },
                  "createdAt": "2021-02-24 11:02:42",
                  "updatedAt": "2021-02-24T02:02:42.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7666174,
                "odds": 2.1,
                "name": {
                  "id": "5",
                  "outcomeName": {
                    "en": "{$competitor2}",
                    "ko": "{$competitor2}",
                    "zh": "{$competitor2}"
                  },
                  "createdAt": "2021-02-24 11:02:42",
                  "updatedAt": "2021-02-24T02:02:42.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              }
            ],
            "updatedAt": "2021-04-14T21:31:48.000000+09:00"
          },
          {
            "id": 2604625,
            "title": {
              "id": 10,
              "marketName": {
                "en": "Double chance",
                "ko": "더블 기회",
                "zh": "双胜彩"
              },
              "disabled": 0,
              "createdAt": "2021-02-24 11:02:37",
              "updatedAt": "2021-02-24T02:02:37.000000Z"
            },
            "status": 1,
            "type": 10,
            "specifier": {},
            "outcomes": [
              {
                "id": 7666181,
                "odds": 1.45,
                "name": {
                  "id": "10",
                  "outcomeName": {
                    "en": "{$competitor1} or {$competitor2}",
                    "ko": "{$competitor1} 또는 {$competitor2}",
                    "zh": "{$competitor1} 或 {$competitor2}"
                  },
                  "createdAt": "2021-02-24 11:02:47",
                  "updatedAt": "2021-02-24T02:02:47.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7666182,
                "odds": 1.4,
                "name": {
                  "id": "11",
                  "outcomeName": {
                    "en": "draw or {$competitor2}",
                    "ko": "드로 또는 {$competitor2}",
                    "zh": "平局或 {$competitor2}"
                  },
                  "createdAt": "2021-02-24 11:02:48",
                  "updatedAt": "2021-02-24T02:02:48.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7666180,
                "odds": 1.25,
                "name": {
                  "id": "9",
                  "outcomeName": {
                    "en": "{$competitor1} or draw",
                    "ko": "{$competitor1} 또는 드로",
                    "zh": "{$competitor1} 或平局"
                  },
                  "createdAt": "2021-02-24 11:02:42",
                  "updatedAt": "2021-02-24T02:02:42.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              }
            ],
            "updatedAt": "2021-04-14T21:31:48.000000+09:00"
          },
          {
            "id": 2604626,
            "title": {
              "id": 1,
              "marketName": {
                "en": "1x2",
                "ko": "1x2",
                "zh": "胜平负"
              },
              "disabled": 0,
              "createdAt": "2021-02-24 11:02:37",
              "updatedAt": "2021-02-24T02:02:37.000000Z"
            },
            "status": 1,
            "type": 1,
            "specifier": {},
            "outcomes": [
              {
                "id": 7666183,
                "odds": 2.55,
                "name": {
                  "id": "1",
                  "outcomeName": {
                    "en": "{$competitor1}",
                    "ko": "{$competitor1}",
                    "zh": "{$competitor1}"
                  },
                  "createdAt": "2021-02-24 11:02:42",
                  "updatedAt": "2021-02-24T02:02:42.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7666184,
                "odds": 2.45,
                "name": {
                  "id": "2",
                  "outcomeName": {
                    "en": "draw",
                    "ko": "드로",
                    "zh": "平局"
                  },
                  "createdAt": "2021-02-24 11:02:42",
                  "updatedAt": "2021-02-24T02:02:42.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7666185,
                "odds": 3.3,
                "name": {
                  "id": "3",
                  "outcomeName": {
                    "en": "{$competitor2}",
                    "ko": "{$competitor2}",
                    "zh": "{$competitor2}"
                  },
                  "createdAt": "2021-02-24 11:02:42",
                  "updatedAt": "2021-02-24T02:02:42.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              }
            ],
            "updatedAt": "2021-04-14T21:31:48.000000+09:00"
          },
          {
            "id": 2617480,
            "title": {
              "id": 47,
              "marketName": {
                "en": "Halftime/fulltime",
                "ko": "하프타임/풀타임",
                "zh": "半场/全场"
              },
              "disabled": 0,
              "createdAt": "2021-02-24 11:02:37",
              "updatedAt": "2021-02-24T02:02:37.000000Z"
            },
            "status": 1,
            "type": 47,
            "specifier": {},
            "outcomes": [
              {
                "id": 7707331,
                "odds": 7,
                "name": {
                  "id": "418",
                  "outcomeName": {
                    "en": "{$competitor1}/{$competitor1}",
                    "ko": "{$competitor1}/{$competitor1}",
                    "zh": "{$competitor1}/{$competitor1}"
                  },
                  "createdAt": "2021-02-24 11:02:52",
                  "updatedAt": "2021-02-24T02:02:52.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7707299,
                "odds": 24,
                "name": {
                  "id": "420",
                  "outcomeName": {
                    "en": "{$competitor1}/draw",
                    "ko": "{$competitor1}/드로",
                    "zh": "{$competitor1}/平局"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7707267,
                "odds": 70,
                "name": {
                  "id": "422",
                  "outcomeName": {
                    "en": "{$competitor1}/{$competitor2}",
                    "ko": "{$competitor1}/{$competitor2}",
                    "zh": "{$competitor1}/{$competitor2}"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7707301,
                "odds": 3.3,
                "name": {
                  "id": "424",
                  "outcomeName": {
                    "en": "draw/{$competitor1}",
                    "ko": "드로/{$competitor1}",
                    "zh": "平局/{$competitor1}"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7707270,
                "odds": 2.55,
                "name": {
                  "id": "426",
                  "outcomeName": {
                    "en": "draw/draw",
                    "ko": "드로/드로",
                    "zh": "平局/平局"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7707266,
                "odds": 4.1,
                "name": {
                  "id": "428",
                  "outcomeName": {
                    "en": "draw/{$competitor2}",
                    "ko": "드로/{$competitor2}",
                    "zh": "平局/{$competitor2}"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7707300,
                "odds": 55,
                "name": {
                  "id": "430",
                  "outcomeName": {
                    "en": "{$competitor2}/{$competitor1}",
                    "ko": "{$competitor2}/{$competitor1}",
                    "zh": "{$competitor2}/{$competitor1}"
                  },
                  "createdAt": "2021-02-24 11:02:47",
                  "updatedAt": "2021-02-24T02:02:47.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7707268,
                "odds": 25,
                "name": {
                  "id": "432",
                  "outcomeName": {
                    "en": "{$competitor2}/draw",
                    "ko": "{$competitor2}/드로",
                    "zh": "{$competitor2}/平局"
                  },
                  "createdAt": "2021-02-24 11:02:47",
                  "updatedAt": "2021-02-24T02:02:47.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7707265,
                "odds": 9.5,
                "name": {
                  "id": "434",
                  "outcomeName": {
                    "en": "{$competitor2}/{$competitor2}",
                    "ko": "{$competitor2}/{$competitor2}",
                    "zh": "{$competitor2}/{$competitor2}"
                  },
                  "createdAt": "2021-02-24 11:02:47",
                  "updatedAt": "2021-02-24T02:02:47.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              }
            ],
            "updatedAt": "2021-04-14T21:31:48.000000+09:00"
          },
          {
            "id": 2617486,
            "title": {
              "id": 29,
              "marketName": {
                "en": "Both teams to score",
                "ko": "두 팀 모두 득점",
                "zh": "两队都得分"
              },
              "disabled": 0,
              "createdAt": "2021-02-24 11:02:37",
              "updatedAt": "2021-02-24T02:02:37.000000Z"
            },
            "status": 1,
            "type": 29,
            "specifier": {},
            "outcomes": [
              {
                "id": 7707341,
                "odds": 2.9,
                "name": {
                  "id": "74",
                  "outcomeName": {
                    "en": "yes",
                    "ko": "예",
                    "zh": "是"
                  },
                  "createdAt": "2021-02-24 11:02:42",
                  "updatedAt": "2021-02-24T02:02:42.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7707340,
                "odds": 1.35,
                "name": {
                  "id": "76",
                  "outcomeName": {
                    "en": "no",
                    "ko": "아니오",
                    "zh": "否"
                  },
                  "createdAt": "2021-02-24 11:02:49",
                  "updatedAt": "2021-02-24T02:02:49.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              }
            ],
            "updatedAt": "2021-04-14T21:31:48.000000+09:00"
          },
          {
            "id": 2617492,
            "title": {
              "id": 14,
              "marketName": {
                "en": "Handicap {hcp}",
                "ko": "핸디캡 {hcp}",
                "zh": "不利 {hcp}"
              },
              "disabled": 0,
              "createdAt": "2021-02-24 11:02:37",
              "updatedAt": "2021-02-24T02:02:37.000000Z"
            },
            "status": 1,
            "type": 14,
            "specifier": {
              "hcp": "0:1"
            },
            "outcomes": [
              {
                "id": 7707585,
                "odds": 7,
                "name": {
                  "id": "1711",
                  "outcomeName": {
                    "en": "{$competitor1} ({hcp})",
                    "ko": "{$competitor1} ({hcp})",
                    "zh": "{$competitor1} ({hcp})"
                  },
                  "createdAt": "2021-02-24 11:02:45",
                  "updatedAt": "2021-02-24T02:02:45.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7707584,
                "odds": 3.7,
                "name": {
                  "id": "1712",
                  "outcomeName": {
                    "en": "draw ({hcp})",
                    "ko": "드로 ({hcp})",
                    "zh": "平局 ({hcp})"
                  },
                  "createdAt": "2021-02-24 11:02:50",
                  "updatedAt": "2021-02-24T02:02:50.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7707583,
                "odds": 1.45,
                "name": {
                  "id": "1713",
                  "outcomeName": {
                    "en": "{$competitor2} ({hcp})",
                    "ko": "{$competitor2} ({hcp})",
                    "zh": "{$competitor2} ({hcp})"
                  },
                  "createdAt": "2021-02-24 11:02:49",
                  "updatedAt": "2021-02-24T02:02:49.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              }
            ],
            "updatedAt": "2021-04-14T21:31:48.000000+09:00"
          },
          {
            "id": 2617493,
            "title": {
              "id": 41,
              "marketName": {
                "en": "Correct score [{score}]",
                "ko": "정확한 스코어 [{score}]",
                "zh": "正确进球 [{score}]"
              },
              "disabled": 0,
              "createdAt": "2021-02-24 11:02:37",
              "updatedAt": "2021-02-24T02:02:37.000000Z"
            },
            "status": 1,
            "type": 41,
            "specifier": {
              "score": "0:0"
            },
            "outcomes": [
              {
                "id": 7707322,
                "odds": 3.45,
                "name": {
                  "id": "110",
                  "outcomeName": {
                    "en": "0:0",
                    "ko": "0:0",
                    "zh": "0:0"
                  },
                  "createdAt": "2021-02-24 11:02:52",
                  "updatedAt": "2021-02-24T02:02:52.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7707174,
                "odds": 4.2,
                "name": {
                  "id": "114",
                  "outcomeName": {
                    "en": "1:0",
                    "ko": "1:0",
                    "zh": "1:0"
                  },
                  "createdAt": "2021-02-24 11:02:52",
                  "updatedAt": "2021-02-24T02:02:52.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7707173,
                "odds": 9.25,
                "name": {
                  "id": "116",
                  "outcomeName": {
                    "en": "2:0",
                    "ko": "2:0",
                    "zh": "2:0"
                  },
                  "createdAt": "2021-02-24 11:02:52",
                  "updatedAt": "2021-02-24T02:02:52.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7707170,
                "odds": 32,
                "name": {
                  "id": "118",
                  "outcomeName": {
                    "en": "3:0",
                    "ko": "3:0",
                    "zh": "3:0"
                  },
                  "createdAt": "2021-02-24 11:02:52",
                  "updatedAt": "2021-02-24T02:02:52.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7707229,
                "odds": 100,
                "name": {
                  "id": "120",
                  "outcomeName": {
                    "en": "4:0",
                    "ko": "4:0",
                    "zh": "4:0"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7707326,
                "odds": 100,
                "name": {
                  "id": "122",
                  "outcomeName": {
                    "en": "5:0",
                    "ko": "5:0",
                    "zh": "5:0"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7707242,
                "odds": 100,
                "name": {
                  "id": "124",
                  "outcomeName": {
                    "en": "6:0",
                    "ko": "6:0",
                    "zh": "6:0"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7707317,
                "odds": 5,
                "name": {
                  "id": "126",
                  "outcomeName": {
                    "en": "0:1",
                    "ko": "0:1",
                    "zh": "0:1"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7707321,
                "odds": 5.4,
                "name": {
                  "id": "128",
                  "outcomeName": {
                    "en": "1:1",
                    "ko": "1:1",
                    "zh": "1:1"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7707171,
                "odds": 13,
                "name": {
                  "id": "130",
                  "outcomeName": {
                    "en": "2:1",
                    "ko": "2:1",
                    "zh": "2:1"
                  },
                  "createdAt": "2021-02-24 11:02:47",
                  "updatedAt": "2021-02-24T02:02:47.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7707168,
                "odds": 45,
                "name": {
                  "id": "132",
                  "outcomeName": {
                    "en": "3:1",
                    "ko": "3:1",
                    "zh": "3:1"
                  },
                  "createdAt": "2021-02-24 11:02:47",
                  "updatedAt": "2021-02-24T02:02:47.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7707343,
                "odds": 100,
                "name": {
                  "id": "134",
                  "outcomeName": {
                    "en": "4:1",
                    "ko": "4:1",
                    "zh": "4:1"
                  },
                  "createdAt": "2021-02-24 11:02:47",
                  "updatedAt": "2021-02-24T02:02:47.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7707325,
                "odds": 100,
                "name": {
                  "id": "136",
                  "outcomeName": {
                    "en": "5:1",
                    "ko": "5:1",
                    "zh": "5:1"
                  },
                  "createdAt": "2021-02-24 11:02:47",
                  "updatedAt": "2021-02-24T02:02:47.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7707315,
                "odds": 13.5,
                "name": {
                  "id": "138",
                  "outcomeName": {
                    "en": "0:2",
                    "ko": "0:2",
                    "zh": "0:2"
                  },
                  "createdAt": "2021-02-24 11:02:47",
                  "updatedAt": "2021-02-24T02:02:47.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7707314,
                "odds": 15.5,
                "name": {
                  "id": "140",
                  "outcomeName": {
                    "en": "1:2",
                    "ko": "1:2",
                    "zh": "1:2"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7707319,
                "odds": 33,
                "name": {
                  "id": "142",
                  "outcomeName": {
                    "en": "2:2",
                    "ko": "2:2",
                    "zh": "2:2"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7707167,
                "odds": 100,
                "name": {
                  "id": "144",
                  "outcomeName": {
                    "en": "3:2",
                    "ko": "3:2",
                    "zh": "3:2"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7707243,
                "odds": 100,
                "name": {
                  "id": "146",
                  "outcomeName": {
                    "en": "4:2",
                    "ko": "4:2",
                    "zh": "4:2"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7707313,
                "odds": 55,
                "name": {
                  "id": "148",
                  "outcomeName": {
                    "en": "0:3",
                    "ko": "0:3",
                    "zh": "0:3"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7707312,
                "odds": 65,
                "name": {
                  "id": "150",
                  "outcomeName": {
                    "en": "1:3",
                    "ko": "1:3",
                    "zh": "1:3"
                  },
                  "createdAt": "2021-02-24 11:02:47",
                  "updatedAt": "2021-02-24T02:02:47.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7707310,
                "odds": 100,
                "name": {
                  "id": "152",
                  "outcomeName": {
                    "en": "2:3",
                    "ko": "2:3",
                    "zh": "2:3"
                  },
                  "createdAt": "2021-02-24 11:02:47",
                  "updatedAt": "2021-02-24T02:02:47.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7707318,
                "odds": 100,
                "name": {
                  "id": "154",
                  "outcomeName": {
                    "en": "3:3",
                    "ko": "3:3",
                    "zh": "3:3"
                  },
                  "createdAt": "2021-02-24 11:02:47",
                  "updatedAt": "2021-02-24T02:02:47.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7707309,
                "odds": 100,
                "name": {
                  "id": "156",
                  "outcomeName": {
                    "en": "0:4",
                    "ko": "0:4",
                    "zh": "0:4"
                  },
                  "createdAt": "2021-02-24 11:02:47",
                  "updatedAt": "2021-02-24T02:02:47.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7707308,
                "odds": 100,
                "name": {
                  "id": "158",
                  "outcomeName": {
                    "en": "1:4",
                    "ko": "1:4",
                    "zh": "1:4"
                  },
                  "createdAt": "2021-02-24 11:02:47",
                  "updatedAt": "2021-02-24T02:02:47.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7707306,
                "odds": 100,
                "name": {
                  "id": "160",
                  "outcomeName": {
                    "en": "2:4",
                    "ko": "2:4",
                    "zh": "2:4"
                  },
                  "createdAt": "2021-02-24 11:02:41",
                  "updatedAt": "2021-02-24T02:02:41.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7707305,
                "odds": 100,
                "name": {
                  "id": "162",
                  "outcomeName": {
                    "en": "0:5",
                    "ko": "0:5",
                    "zh": "0:5"
                  },
                  "createdAt": "2021-02-24 11:02:41",
                  "updatedAt": "2021-02-24T02:02:41.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7707304,
                "odds": 100,
                "name": {
                  "id": "164",
                  "outcomeName": {
                    "en": "1:5",
                    "ko": "1:5",
                    "zh": "1:5"
                  },
                  "createdAt": "2021-02-24 11:02:41",
                  "updatedAt": "2021-02-24T02:02:41.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7707302,
                "odds": 100,
                "name": {
                  "id": "166",
                  "outcomeName": {
                    "en": "0:6",
                    "ko": "0:6",
                    "zh": "0:6"
                  },
                  "createdAt": "2021-02-24 11:02:41",
                  "updatedAt": "2021-02-24T02:02:41.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              }
            ],
            "updatedAt": "2021-04-14T21:31:48.000000+09:00"
          },
          {
            "id": 2617494,
            "title": {
              "id": 14,
              "marketName": {
                "en": "Handicap {hcp}",
                "ko": "핸디캡 {hcp}",
                "zh": "不利 {hcp}"
              },
              "disabled": 0,
              "createdAt": "2021-02-24 11:02:37",
              "updatedAt": "2021-02-24T02:02:37.000000Z"
            },
            "status": 1,
            "type": 14,
            "specifier": {
              "hcp": "1:0"
            },
            "outcomes": [
              {
                "id": 7707582,
                "odds": 1.3,
                "name": {
                  "id": "1711",
                  "outcomeName": {
                    "en": "{$competitor1} ({hcp})",
                    "ko": "{$competitor1} ({hcp})",
                    "zh": "{$competitor1} ({hcp})"
                  },
                  "createdAt": "2021-02-24 11:02:45",
                  "updatedAt": "2021-02-24T02:02:45.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7707581,
                "odds": 4.3,
                "name": {
                  "id": "1712",
                  "outcomeName": {
                    "en": "draw ({hcp})",
                    "ko": "드로 ({hcp})",
                    "zh": "平局 ({hcp})"
                  },
                  "createdAt": "2021-02-24 11:02:50",
                  "updatedAt": "2021-02-24T02:02:50.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7707580,
                "odds": 10,
                "name": {
                  "id": "1713",
                  "outcomeName": {
                    "en": "{$competitor2} ({hcp})",
                    "ko": "{$competitor2} ({hcp})",
                    "zh": "{$competitor2} ({hcp})"
                  },
                  "createdAt": "2021-02-24 11:02:49",
                  "updatedAt": "2021-02-24T02:02:49.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              }
            ],
            "updatedAt": "2021-04-14T21:31:48.000000+09:00"
          },
          {
            "id": 2617495,
            "title": {
              "id": 14,
              "marketName": {
                "en": "Handicap {hcp}",
                "ko": "핸디캡 {hcp}",
                "zh": "不利 {hcp}"
              },
              "disabled": 0,
              "createdAt": "2021-02-24 11:02:37",
              "updatedAt": "2021-02-24T02:02:37.000000Z"
            },
            "status": 1,
            "type": 14,
            "specifier": {
              "hcp": "0:2"
            },
            "outcomes": [
              {
                "id": 7707579,
                "odds": 21,
                "name": {
                  "id": "1711",
                  "outcomeName": {
                    "en": "{$competitor1} ({hcp})",
                    "ko": "{$competitor1} ({hcp})",
                    "zh": "{$competitor1} ({hcp})"
                  },
                  "createdAt": "2021-02-24 11:02:45",
                  "updatedAt": "2021-02-24T02:02:45.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7707578,
                "odds": 7.5,
                "name": {
                  "id": "1712",
                  "outcomeName": {
                    "en": "draw ({hcp})",
                    "ko": "드로 ({hcp})",
                    "zh": "平局 ({hcp})"
                  },
                  "createdAt": "2021-02-24 11:02:50",
                  "updatedAt": "2021-02-24T02:02:50.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7707577,
                "odds": 1.09,
                "name": {
                  "id": "1713",
                  "outcomeName": {
                    "en": "{$competitor2} ({hcp})",
                    "ko": "{$competitor2} ({hcp})",
                    "zh": "{$competitor2} ({hcp})"
                  },
                  "createdAt": "2021-02-24 11:02:49",
                  "updatedAt": "2021-02-24T02:02:49.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              }
            ],
            "updatedAt": "2021-04-14T21:31:48.000000+09:00"
          },
          {
            "id": 2617506,
            "title": {
              "id": 16,
              "marketName": {
                "en": "Handicap",
                "ko": "핸디캡",
                "zh": "欧洲让球盘"
              },
              "disabled": 0,
              "createdAt": "2021-02-24 11:02:37",
              "updatedAt": "2021-02-24T02:02:37.000000Z"
            },
            "status": 1,
            "type": 16,
            "specifier": {
              "hcp": "-0.5"
            },
            "outcomes": [
              {
                "id": 7707283,
                "odds": 2.5,
                "name": {
                  "id": "1714",
                  "outcomeName": {
                    "en": "{$competitor1} ({+hcp})",
                    "ko": "{$competitor1} ({+hcp})",
                    "zh": "{$competitor1} ({+hcp})"
                  },
                  "createdAt": "2021-02-24 11:02:50",
                  "updatedAt": "2021-02-24T02:02:50.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7707282,
                "odds": 1.45,
                "name": {
                  "id": "1715",
                  "outcomeName": {
                    "en": "{$competitor2} ({-hcp})",
                    "ko": "{$competitor2} ({-hcp})",
                    "zh": "{$competitor2} ({-hcp})"
                  },
                  "createdAt": "2021-02-24 11:02:49",
                  "updatedAt": "2021-02-24T02:02:49.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              }
            ],
            "updatedAt": "2021-04-14T21:31:48.000000+09:00"
          },
          {
            "id": 2617523,
            "title": {
              "id": 18,
              "marketName": {
                "en": "Total",
                "ko": "토탈",
                "zh": "合计"
              },
              "disabled": 0,
              "createdAt": "2021-02-24 11:02:37",
              "updatedAt": "2021-02-24T02:02:37.000000Z"
            },
            "status": 1,
            "type": 18,
            "specifier": {
              "total": "0.5"
            },
            "outcomes": [
              {
                "id": 7707630,
                "odds": 1.22,
                "name": {
                  "id": "12",
                  "outcomeName": {
                    "en": "over {total}",
                    "ko": "오버 {total}",
                    "zh": "高于{total}"
                  },
                  "createdAt": "2021-02-24 11:02:42",
                  "updatedAt": "2021-02-24T02:02:42.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7707631,
                "odds": 3.8,
                "name": {
                  "id": "13",
                  "outcomeName": {
                    "en": "under {total}",
                    "ko": "언더 {total}",
                    "zh": "低于{total}"
                  },
                  "createdAt": "2021-02-24 11:02:44",
                  "updatedAt": "2021-02-24T02:02:44.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              }
            ],
            "updatedAt": "2021-04-14T21:31:48.000000+09:00"
          },
          {
            "id": 2617524,
            "title": {
              "id": 18,
              "marketName": {
                "en": "Total",
                "ko": "토탈",
                "zh": "合计"
              },
              "disabled": 0,
              "createdAt": "2021-02-24 11:02:37",
              "updatedAt": "2021-02-24T02:02:37.000000Z"
            },
            "status": 1,
            "type": 18,
            "specifier": {
              "total": "1.5"
            },
            "outcomes": [
              {
                "id": 7707633,
                "odds": 1.95,
                "name": {
                  "id": "12",
                  "outcomeName": {
                    "en": "over {total}",
                    "ko": "오버 {total}",
                    "zh": "高于{total}"
                  },
                  "createdAt": "2021-02-24 11:02:42",
                  "updatedAt": "2021-02-24T02:02:42.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7707640,
                "odds": 1.75,
                "name": {
                  "id": "13",
                  "outcomeName": {
                    "en": "under {total}",
                    "ko": "언더 {total}",
                    "zh": "低于{total}"
                  },
                  "createdAt": "2021-02-24 11:02:44",
                  "updatedAt": "2021-02-24T02:02:44.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              }
            ],
            "updatedAt": "2021-04-14T21:31:48.000000+09:00"
          },
          {
            "id": 2617549,
            "title": {
              "id": 18,
              "marketName": {
                "en": "Total",
                "ko": "토탈",
                "zh": "合计"
              },
              "disabled": 0,
              "createdAt": "2021-02-24 11:02:37",
              "updatedAt": "2021-02-24T02:02:37.000000Z"
            },
            "status": 1,
            "type": 18,
            "specifier": {
              "total": "2.5"
            },
            "outcomes": [
              {
                "id": 7707636,
                "odds": 3.9,
                "name": {
                  "id": "12",
                  "outcomeName": {
                    "en": "over {total}",
                    "ko": "오버 {total}",
                    "zh": "高于{total}"
                  },
                  "createdAt": "2021-02-24 11:02:42",
                  "updatedAt": "2021-02-24T02:02:42.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7707637,
                "odds": 1.2,
                "name": {
                  "id": "13",
                  "outcomeName": {
                    "en": "under {total}",
                    "ko": "언더 {total}",
                    "zh": "低于{total}"
                  },
                  "createdAt": "2021-02-24 11:02:44",
                  "updatedAt": "2021-02-24T02:02:44.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              }
            ],
            "updatedAt": "2021-04-14T21:31:48.000000+09:00"
          },
          {
            "id": 2617571,
            "title": {
              "id": 45,
              "marketName": {
                "en": "Correct score",
                "ko": "정확한 스코어",
                "zh": "正确进球"
              },
              "disabled": 0,
              "createdAt": "2021-02-24 11:02:37",
              "updatedAt": "2021-02-24T02:02:37.000000Z"
            },
            "status": 1,
            "type": 45,
            "specifier": {},
            "outcomes": [
              {
                "id": 7707476,
                "odds": 3.45,
                "name": {
                  "id": "274",
                  "outcomeName": {
                    "en": "0:0",
                    "ko": "0:0",
                    "zh": "0:0"
                  },
                  "createdAt": "2021-02-24 11:02:43",
                  "updatedAt": "2021-02-24T02:02:43.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7707467,
                "odds": 4.2,
                "name": {
                  "id": "276",
                  "outcomeName": {
                    "en": "1:0",
                    "ko": "1:0",
                    "zh": "1:0"
                  },
                  "createdAt": "2021-02-24 11:02:43",
                  "updatedAt": "2021-02-24T02:02:43.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7707468,
                "odds": 9.25,
                "name": {
                  "id": "278",
                  "outcomeName": {
                    "en": "2:0",
                    "ko": "2:0",
                    "zh": "2:0"
                  },
                  "createdAt": "2021-02-24 11:02:43",
                  "updatedAt": "2021-02-24T02:02:43.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7707470,
                "odds": 32,
                "name": {
                  "id": "280",
                  "outcomeName": {
                    "en": "3:0",
                    "ko": "3:0",
                    "zh": "3:0"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7707480,
                "odds": 100,
                "name": {
                  "id": "282",
                  "outcomeName": {
                    "en": "4:0",
                    "ko": "4:0",
                    "zh": "4:0"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7707430,
                "odds": 5,
                "name": {
                  "id": "284",
                  "outcomeName": {
                    "en": "0:1",
                    "ko": "0:1",
                    "zh": "0:1"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7707477,
                "odds": 5.4,
                "name": {
                  "id": "286",
                  "outcomeName": {
                    "en": "1:1",
                    "ko": "1:1",
                    "zh": "1:1"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7707469,
                "odds": 13,
                "name": {
                  "id": "288",
                  "outcomeName": {
                    "en": "2:1",
                    "ko": "2:1",
                    "zh": "2:1"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7707471,
                "odds": 45,
                "name": {
                  "id": "290",
                  "outcomeName": {
                    "en": "3:1",
                    "ko": "3:1",
                    "zh": "3:1"
                  },
                  "createdAt": "2021-02-24 11:02:50",
                  "updatedAt": "2021-02-24T02:02:50.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7707474,
                "odds": 100,
                "name": {
                  "id": "292",
                  "outcomeName": {
                    "en": "4:1",
                    "ko": "4:1",
                    "zh": "4:1"
                  },
                  "createdAt": "2021-02-24 11:02:50",
                  "updatedAt": "2021-02-24T02:02:50.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7707429,
                "odds": 13.5,
                "name": {
                  "id": "294",
                  "outcomeName": {
                    "en": "0:2",
                    "ko": "0:2",
                    "zh": "0:2"
                  },
                  "createdAt": "2021-02-24 11:02:50",
                  "updatedAt": "2021-02-24T02:02:50.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7707428,
                "odds": 15.5,
                "name": {
                  "id": "296",
                  "outcomeName": {
                    "en": "1:2",
                    "ko": "1:2",
                    "zh": "1:2"
                  },
                  "createdAt": "2021-02-24 11:02:50",
                  "updatedAt": "2021-02-24T02:02:50.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7707478,
                "odds": 33,
                "name": {
                  "id": "298",
                  "outcomeName": {
                    "en": "2:2",
                    "ko": "2:2",
                    "zh": "2:2"
                  },
                  "createdAt": "2021-02-24 11:02:50",
                  "updatedAt": "2021-02-24T02:02:50.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7707473,
                "odds": 100,
                "name": {
                  "id": "300",
                  "outcomeName": {
                    "en": "3:2",
                    "ko": "3:2",
                    "zh": "3:2"
                  },
                  "createdAt": "2021-02-24 11:02:51",
                  "updatedAt": "2021-02-24T02:02:51.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7707475,
                "odds": 100,
                "name": {
                  "id": "302",
                  "outcomeName": {
                    "en": "4:2",
                    "ko": "4:2",
                    "zh": "4:2"
                  },
                  "createdAt": "2021-02-24 11:02:51",
                  "updatedAt": "2021-02-24T02:02:51.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7707393,
                "odds": 55,
                "name": {
                  "id": "304",
                  "outcomeName": {
                    "en": "0:3",
                    "ko": "0:3",
                    "zh": "0:3"
                  },
                  "createdAt": "2021-02-24 11:02:51",
                  "updatedAt": "2021-02-24T02:02:51.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7707378,
                "odds": 65,
                "name": {
                  "id": "306",
                  "outcomeName": {
                    "en": "1:3",
                    "ko": "1:3",
                    "zh": "1:3"
                  },
                  "createdAt": "2021-02-24 11:02:51",
                  "updatedAt": "2021-02-24T02:02:51.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7707379,
                "odds": 100,
                "name": {
                  "id": "308",
                  "outcomeName": {
                    "en": "2:3",
                    "ko": "2:3",
                    "zh": "2:3"
                  },
                  "createdAt": "2021-02-24 11:02:51",
                  "updatedAt": "2021-02-24T02:02:51.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7707479,
                "odds": 100,
                "name": {
                  "id": "310",
                  "outcomeName": {
                    "en": "3:3",
                    "ko": "3:3",
                    "zh": "3:3"
                  },
                  "createdAt": "2021-02-24 11:02:52",
                  "updatedAt": "2021-02-24T02:02:52.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7707385,
                "odds": 100,
                "name": {
                  "id": "312",
                  "outcomeName": {
                    "en": "4:3",
                    "ko": "4:3",
                    "zh": "4:3"
                  },
                  "createdAt": "2021-02-24 11:02:52",
                  "updatedAt": "2021-02-24T02:02:52.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7707380,
                "odds": 100,
                "name": {
                  "id": "314",
                  "outcomeName": {
                    "en": "0:4",
                    "ko": "0:4",
                    "zh": "0:4"
                  },
                  "createdAt": "2021-02-24 11:02:52",
                  "updatedAt": "2021-02-24T02:02:52.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7707381,
                "odds": 100,
                "name": {
                  "id": "316",
                  "outcomeName": {
                    "en": "1:4",
                    "ko": "1:4",
                    "zh": "1:4"
                  },
                  "createdAt": "2021-02-24 11:02:52",
                  "updatedAt": "2021-02-24T02:02:52.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7707382,
                "odds": 100,
                "name": {
                  "id": "318",
                  "outcomeName": {
                    "en": "2:4",
                    "ko": "2:4",
                    "zh": "2:4"
                  },
                  "createdAt": "2021-02-24 11:02:52",
                  "updatedAt": "2021-02-24T02:02:52.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7707383,
                "odds": 100,
                "name": {
                  "id": "320",
                  "outcomeName": {
                    "en": "3:4",
                    "ko": "3:4",
                    "zh": "3:4"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7707392,
                "odds": 100,
                "name": {
                  "id": "322",
                  "outcomeName": {
                    "en": "4:4",
                    "ko": "4:4",
                    "zh": "4:4"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7707386,
                "odds": 100,
                "name": {
                  "id": "324",
                  "outcomeName": {
                    "en": "other",
                    "ko": "기타",
                    "zh": "其他"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              }
            ],
            "updatedAt": "2021-04-14T21:31:48.000000+09:00"
          },
          {
            "id": 2692428,
            "title": {
              "id": 7,
              "marketName": {
                "en": "Which team wins the rest of the match",
                "ko": "남은 매치에서 어느 팀이 이길가요?",
                "zh": "剩余时间内哪队获胜"
              },
              "disabled": 0,
              "createdAt": "2021-02-24 11:02:37",
              "updatedAt": "2021-02-24T02:02:37.000000Z"
            },
            "status": 1,
            "type": 7,
            "specifier": {
              "score": "0:0"
            },
            "outcomes": [
              {
                "id": 7908253,
                "odds": 2.55,
                "name": {
                  "id": "1",
                  "outcomeName": {
                    "en": "{$competitor1}",
                    "ko": "{$competitor1}",
                    "zh": "{$competitor1}"
                  },
                  "createdAt": "2021-02-24 11:02:42",
                  "updatedAt": "2021-02-24T02:02:42.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7908252,
                "odds": 2.45,
                "name": {
                  "id": "2",
                  "outcomeName": {
                    "en": "draw",
                    "ko": "드로",
                    "zh": "平局"
                  },
                  "createdAt": "2021-02-24 11:02:42",
                  "updatedAt": "2021-02-24T02:02:42.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7908251,
                "odds": 3.3,
                "name": {
                  "id": "3",
                  "outcomeName": {
                    "en": "{$competitor2}",
                    "ko": "{$competitor2}",
                    "zh": "{$competitor2}"
                  },
                  "createdAt": "2021-02-24 11:02:42",
                  "updatedAt": "2021-02-24T02:02:42.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:31:48.000000+09:00",
                "oldOdds": null
              }
            ],
            "updatedAt": "2021-04-14T21:31:48.000000+09:00"
          }
        ],
        "homeScore": "0",
        "awayScore": "0",
        "homeTeam": {
          "id": 496574,
          "name": {
            "en": "Edirnespor",
            "ko": "에디르네스포르",
            "zh": "埃迪尔内"
          }
        },
        "awayTeam": {
          "id": 743099,
          "name": {
            "en": "Arnavutkoy Belediyesi Genclik Ve Spor",
            "ko": "Arnavutkoy Belediyesi Genclik Ve Spor",
            "zh": "Arnavutkoy Belediyesi Genclik Ve Spor"
          }
        },
        "tournament": {
          "id": 26386,
          "title": {
            "en": "3. Lig, Group 1",
            "ko": "3. 리가, 그룹 1",
            "zh": "土耳其足球丙级联赛， 第1组"
          },
          "country": null
        },
        "startAt": "2021-04-14T21:00:00.000000+09:00",
        "updatedAt": "2021-04-14T21:31:48.000000+09:00"
      },
      {
        "id": 23421847,
        "status": {
          "en": "1st half",
          "ko": "전반전",
          "zh": "上半场"
        },
        "markets": [
          {
            "id": 2604623,
            "title": {
              "id": 11,
              "marketName": {
                "en": "Draw no bet",
                "ko": "드로 노 베트",
                "zh": "平局返还"
              },
              "disabled": 0,
              "createdAt": "2021-02-24 11:02:37",
              "updatedAt": "2021-02-24T02:02:37.000000Z"
            },
            "status": 1,
            "type": 11,
            "specifier": {},
            "outcomes": [
              {
                "id": 7666177,
                "odds": 3.1,
                "name": {
                  "id": "4",
                  "outcomeName": {
                    "en": "{$competitor1}",
                    "ko": "{$competitor1}",
                    "zh": "{$competitor1}"
                  },
                  "createdAt": "2021-02-24 11:02:42",
                  "updatedAt": "2021-02-24T02:02:42.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7666176,
                "odds": 1.3,
                "name": {
                  "id": "5",
                  "outcomeName": {
                    "en": "{$competitor2}",
                    "ko": "{$competitor2}",
                    "zh": "{$competitor2}"
                  },
                  "createdAt": "2021-02-24 11:02:42",
                  "updatedAt": "2021-02-24T02:02:42.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              }
            ],
            "updatedAt": "2021-04-14T21:32:24.000000+09:00"
          },
          {
            "id": 2604627,
            "title": {
              "id": 10,
              "marketName": {
                "en": "Double chance",
                "ko": "더블 기회",
                "zh": "双胜彩"
              },
              "disabled": 0,
              "createdAt": "2021-02-24 11:02:37",
              "updatedAt": "2021-02-24T02:02:37.000000Z"
            },
            "status": 1,
            "type": 10,
            "specifier": {},
            "outcomes": [
              {
                "id": 7666187,
                "odds": 1.3,
                "name": {
                  "id": "10",
                  "outcomeName": {
                    "en": "{$competitor1} or {$competitor2}",
                    "ko": "{$competitor1} 또는 {$competitor2}",
                    "zh": "{$competitor1} 或 {$competitor2}"
                  },
                  "createdAt": "2021-02-24 11:02:47",
                  "updatedAt": "2021-02-24T02:02:47.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7666188,
                "odds": 1.14,
                "name": {
                  "id": "11",
                  "outcomeName": {
                    "en": "draw or {$competitor2}",
                    "ko": "드로 또는 {$competitor2}",
                    "zh": "平局或 {$competitor2}"
                  },
                  "createdAt": "2021-02-24 11:02:48",
                  "updatedAt": "2021-02-24T02:02:48.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7666186,
                "odds": 1.8,
                "name": {
                  "id": "9",
                  "outcomeName": {
                    "en": "{$competitor1} or draw",
                    "ko": "{$competitor1} 또는 드로",
                    "zh": "{$competitor1} 或平局"
                  },
                  "createdAt": "2021-02-24 11:02:42",
                  "updatedAt": "2021-02-24T02:02:42.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              }
            ],
            "updatedAt": "2021-04-14T21:32:24.000000+09:00"
          },
          {
            "id": 2604628,
            "title": {
              "id": 1,
              "marketName": {
                "en": "1x2",
                "ko": "1x2",
                "zh": "胜平负"
              },
              "disabled": 0,
              "createdAt": "2021-02-24 11:02:37",
              "updatedAt": "2021-02-24T02:02:37.000000Z"
            },
            "status": 1,
            "type": 1,
            "specifier": {},
            "outcomes": [
              {
                "id": 7666189,
                "odds": 4.5,
                "name": {
                  "id": "1",
                  "outcomeName": {
                    "en": "{$competitor1}",
                    "ko": "{$competitor1}",
                    "zh": "{$competitor1}"
                  },
                  "createdAt": "2021-02-24 11:02:42",
                  "updatedAt": "2021-02-24T02:02:42.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7666190,
                "odds": 3.05,
                "name": {
                  "id": "2",
                  "outcomeName": {
                    "en": "draw",
                    "ko": "드로",
                    "zh": "平局"
                  },
                  "createdAt": "2021-02-24 11:02:42",
                  "updatedAt": "2021-02-24T02:02:42.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7666191,
                "odds": 1.8,
                "name": {
                  "id": "3",
                  "outcomeName": {
                    "en": "{$competitor2}",
                    "ko": "{$competitor2}",
                    "zh": "{$competitor2}"
                  },
                  "createdAt": "2021-02-24 11:02:42",
                  "updatedAt": "2021-02-24T02:02:42.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              }
            ],
            "updatedAt": "2021-04-14T21:32:24.000000+09:00"
          },
          {
            "id": 2618179,
            "title": {
              "id": 18,
              "marketName": {
                "en": "Total",
                "ko": "토탈",
                "zh": "合计"
              },
              "disabled": 0,
              "createdAt": "2021-02-24 11:02:37",
              "updatedAt": "2021-02-24T02:02:37.000000Z"
            },
            "status": 1,
            "type": 18,
            "specifier": {
              "total": "1.5"
            },
            "outcomes": [
              {
                "id": 7709733,
                "odds": 1.6,
                "name": {
                  "id": "12",
                  "outcomeName": {
                    "en": "over {total}",
                    "ko": "오버 {total}",
                    "zh": "高于{total}"
                  },
                  "createdAt": "2021-02-24 11:02:42",
                  "updatedAt": "2021-02-24T02:02:42.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7709732,
                "odds": 2.15,
                "name": {
                  "id": "13",
                  "outcomeName": {
                    "en": "under {total}",
                    "ko": "언더 {total}",
                    "zh": "低于{total}"
                  },
                  "createdAt": "2021-02-24 11:02:44",
                  "updatedAt": "2021-02-24T02:02:44.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              }
            ],
            "updatedAt": "2021-04-14T21:32:24.000000+09:00"
          },
          {
            "id": 2618184,
            "title": {
              "id": 18,
              "marketName": {
                "en": "Total",
                "ko": "토탈",
                "zh": "合计"
              },
              "disabled": 0,
              "createdAt": "2021-02-24 11:02:37",
              "updatedAt": "2021-02-24T02:02:37.000000Z"
            },
            "status": 1,
            "type": 18,
            "specifier": {
              "total": "2.5"
            },
            "outcomes": [
              {
                "id": 7709729,
                "odds": 2.8,
                "name": {
                  "id": "12",
                  "outcomeName": {
                    "en": "over {total}",
                    "ko": "오버 {total}",
                    "zh": "高于{total}"
                  },
                  "createdAt": "2021-02-24 11:02:42",
                  "updatedAt": "2021-02-24T02:02:42.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7709728,
                "odds": 1.37,
                "name": {
                  "id": "13",
                  "outcomeName": {
                    "en": "under {total}",
                    "ko": "언더 {total}",
                    "zh": "低于{total}"
                  },
                  "createdAt": "2021-02-24 11:02:44",
                  "updatedAt": "2021-02-24T02:02:44.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              }
            ],
            "updatedAt": "2021-04-14T21:32:24.000000+09:00"
          },
          {
            "id": 2618193,
            "title": {
              "id": 18,
              "marketName": {
                "en": "Total",
                "ko": "토탈",
                "zh": "合计"
              },
              "disabled": 0,
              "createdAt": "2021-02-24 11:02:37",
              "updatedAt": "2021-02-24T02:02:37.000000Z"
            },
            "status": 1,
            "type": 18,
            "specifier": {
              "total": "0.5"
            },
            "outcomes": [
              {
                "id": 7709737,
                "odds": 1.12,
                "name": {
                  "id": "12",
                  "outcomeName": {
                    "en": "over {total}",
                    "ko": "오버 {total}",
                    "zh": "高于{total}"
                  },
                  "createdAt": "2021-02-24 11:02:42",
                  "updatedAt": "2021-02-24T02:02:42.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7709736,
                "odds": 5.2,
                "name": {
                  "id": "13",
                  "outcomeName": {
                    "en": "under {total}",
                    "ko": "언더 {total}",
                    "zh": "低于{total}"
                  },
                  "createdAt": "2021-02-24 11:02:44",
                  "updatedAt": "2021-02-24T02:02:44.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              }
            ],
            "updatedAt": "2021-04-14T21:32:24.000000+09:00"
          },
          {
            "id": 2618196,
            "title": {
              "id": 14,
              "marketName": {
                "en": "Handicap {hcp}",
                "ko": "핸디캡 {hcp}",
                "zh": "不利 {hcp}"
              },
              "disabled": 0,
              "createdAt": "2021-02-24 11:02:37",
              "updatedAt": "2021-02-24T02:02:37.000000Z"
            },
            "status": 1,
            "type": 14,
            "specifier": {
              "hcp": "0:1"
            },
            "outcomes": [
              {
                "id": 7709747,
                "odds": 14.5,
                "name": {
                  "id": "1711",
                  "outcomeName": {
                    "en": "{$competitor1} ({hcp})",
                    "ko": "{$competitor1} ({hcp})",
                    "zh": "{$competitor1} ({hcp})"
                  },
                  "createdAt": "2021-02-24 11:02:45",
                  "updatedAt": "2021-02-24T02:02:45.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7709746,
                "odds": 5.5,
                "name": {
                  "id": "1712",
                  "outcomeName": {
                    "en": "draw ({hcp})",
                    "ko": "드로 ({hcp})",
                    "zh": "平局 ({hcp})"
                  },
                  "createdAt": "2021-02-24 11:02:50",
                  "updatedAt": "2021-02-24T02:02:50.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7709745,
                "odds": 1.18,
                "name": {
                  "id": "1713",
                  "outcomeName": {
                    "en": "{$competitor2} ({hcp})",
                    "ko": "{$competitor2} ({hcp})",
                    "zh": "{$competitor2} ({hcp})"
                  },
                  "createdAt": "2021-02-24 11:02:49",
                  "updatedAt": "2021-02-24T02:02:49.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              }
            ],
            "updatedAt": "2021-04-14T21:32:24.000000+09:00"
          },
          {
            "id": 2618199,
            "title": {
              "id": 14,
              "marketName": {
                "en": "Handicap {hcp}",
                "ko": "핸디캡 {hcp}",
                "zh": "不利 {hcp}"
              },
              "disabled": 0,
              "createdAt": "2021-02-24 11:02:37",
              "updatedAt": "2021-02-24T02:02:37.000000Z"
            },
            "status": 1,
            "type": 14,
            "specifier": {
              "hcp": "2:0"
            },
            "outcomes": [
              {
                "id": 7709744,
                "odds": 1.25,
                "name": {
                  "id": "1711",
                  "outcomeName": {
                    "en": "{$competitor1} ({hcp})",
                    "ko": "{$competitor1} ({hcp})",
                    "zh": "{$competitor1} ({hcp})"
                  },
                  "createdAt": "2021-02-24 11:02:45",
                  "updatedAt": "2021-02-24T02:02:45.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7709743,
                "odds": 5.3,
                "name": {
                  "id": "1712",
                  "outcomeName": {
                    "en": "draw ({hcp})",
                    "ko": "드로 ({hcp})",
                    "zh": "平局 ({hcp})"
                  },
                  "createdAt": "2021-02-24 11:02:50",
                  "updatedAt": "2021-02-24T02:02:50.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7709742,
                "odds": 9.25,
                "name": {
                  "id": "1713",
                  "outcomeName": {
                    "en": "{$competitor2} ({hcp})",
                    "ko": "{$competitor2} ({hcp})",
                    "zh": "{$competitor2} ({hcp})"
                  },
                  "createdAt": "2021-02-24 11:02:49",
                  "updatedAt": "2021-02-24T02:02:49.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              }
            ],
            "updatedAt": "2021-04-14T21:32:24.000000+09:00"
          },
          {
            "id": 2618200,
            "title": {
              "id": 41,
              "marketName": {
                "en": "Correct score [{score}]",
                "ko": "정확한 스코어 [{score}]",
                "zh": "正确进球 [{score}]"
              },
              "disabled": 0,
              "createdAt": "2021-02-24 11:02:37",
              "updatedAt": "2021-02-24T02:02:37.000000Z"
            },
            "status": 1,
            "type": 41,
            "specifier": {
              "score": "0:0"
            },
            "outcomes": [
              {
                "id": 7709715,
                "odds": 5.1,
                "name": {
                  "id": "110",
                  "outcomeName": {
                    "en": "0:0",
                    "ko": "0:0",
                    "zh": "0:0"
                  },
                  "createdAt": "2021-02-24 11:02:52",
                  "updatedAt": "2021-02-24T02:02:52.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7709685,
                "odds": 7.5,
                "name": {
                  "id": "114",
                  "outcomeName": {
                    "en": "1:0",
                    "ko": "1:0",
                    "zh": "1:0"
                  },
                  "createdAt": "2021-02-24 11:02:52",
                  "updatedAt": "2021-02-24T02:02:52.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7709710,
                "odds": 22,
                "name": {
                  "id": "116",
                  "outcomeName": {
                    "en": "2:0",
                    "ko": "2:0",
                    "zh": "2:0"
                  },
                  "createdAt": "2021-02-24 11:02:52",
                  "updatedAt": "2021-02-24T02:02:52.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7709723,
                "odds": 95,
                "name": {
                  "id": "118",
                  "outcomeName": {
                    "en": "3:0",
                    "ko": "3:0",
                    "zh": "3:0"
                  },
                  "createdAt": "2021-02-24 11:02:52",
                  "updatedAt": "2021-02-24T02:02:52.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7709720,
                "odds": 100,
                "name": {
                  "id": "120",
                  "outcomeName": {
                    "en": "4:0",
                    "ko": "4:0",
                    "zh": "4:0"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7709718,
                "odds": 100,
                "name": {
                  "id": "122",
                  "outcomeName": {
                    "en": "5:0",
                    "ko": "5:0",
                    "zh": "5:0"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7709716,
                "odds": 100,
                "name": {
                  "id": "124",
                  "outcomeName": {
                    "en": "6:0",
                    "ko": "6:0",
                    "zh": "6:0"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7709724,
                "odds": 4.1,
                "name": {
                  "id": "126",
                  "outcomeName": {
                    "en": "0:1",
                    "ko": "0:1",
                    "zh": "0:1"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7709714,
                "odds": 5.8,
                "name": {
                  "id": "128",
                  "outcomeName": {
                    "en": "1:1",
                    "ko": "1:1",
                    "zh": "1:1"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7709697,
                "odds": 17,
                "name": {
                  "id": "130",
                  "outcomeName": {
                    "en": "2:1",
                    "ko": "2:1",
                    "zh": "2:1"
                  },
                  "createdAt": "2021-02-24 11:02:47",
                  "updatedAt": "2021-02-24T02:02:47.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7709722,
                "odds": 75,
                "name": {
                  "id": "132",
                  "outcomeName": {
                    "en": "3:1",
                    "ko": "3:1",
                    "zh": "3:1"
                  },
                  "createdAt": "2021-02-24 11:02:47",
                  "updatedAt": "2021-02-24T02:02:47.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7709696,
                "odds": 100,
                "name": {
                  "id": "134",
                  "outcomeName": {
                    "en": "4:1",
                    "ko": "4:1",
                    "zh": "4:1"
                  },
                  "createdAt": "2021-02-24 11:02:47",
                  "updatedAt": "2021-02-24T02:02:47.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7709717,
                "odds": 100,
                "name": {
                  "id": "136",
                  "outcomeName": {
                    "en": "5:1",
                    "ko": "5:1",
                    "zh": "5:1"
                  },
                  "createdAt": "2021-02-24 11:02:47",
                  "updatedAt": "2021-02-24T02:02:47.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7709711,
                "odds": 6.25,
                "name": {
                  "id": "138",
                  "outcomeName": {
                    "en": "0:2",
                    "ko": "0:2",
                    "zh": "0:2"
                  },
                  "createdAt": "2021-02-24 11:02:47",
                  "updatedAt": "2021-02-24T02:02:47.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7709709,
                "odds": 9,
                "name": {
                  "id": "140",
                  "outcomeName": {
                    "en": "1:2",
                    "ko": "1:2",
                    "zh": "1:2"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7709713,
                "odds": 26,
                "name": {
                  "id": "142",
                  "outcomeName": {
                    "en": "2:2",
                    "ko": "2:2",
                    "zh": "2:2"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7709721,
                "odds": 100,
                "name": {
                  "id": "144",
                  "outcomeName": {
                    "en": "3:2",
                    "ko": "3:2",
                    "zh": "3:2"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7709719,
                "odds": 100,
                "name": {
                  "id": "146",
                  "outcomeName": {
                    "en": "4:2",
                    "ko": "4:2",
                    "zh": "4:2"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7709708,
                "odds": 14,
                "name": {
                  "id": "148",
                  "outcomeName": {
                    "en": "0:3",
                    "ko": "0:3",
                    "zh": "0:3"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7709707,
                "odds": 21,
                "name": {
                  "id": "150",
                  "outcomeName": {
                    "en": "1:3",
                    "ko": "1:3",
                    "zh": "1:3"
                  },
                  "createdAt": "2021-02-24 11:02:47",
                  "updatedAt": "2021-02-24T02:02:47.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7709706,
                "odds": 60,
                "name": {
                  "id": "152",
                  "outcomeName": {
                    "en": "2:3",
                    "ko": "2:3",
                    "zh": "2:3"
                  },
                  "createdAt": "2021-02-24 11:02:47",
                  "updatedAt": "2021-02-24T02:02:47.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7709712,
                "odds": 100,
                "name": {
                  "id": "154",
                  "outcomeName": {
                    "en": "3:3",
                    "ko": "3:3",
                    "zh": "3:3"
                  },
                  "createdAt": "2021-02-24 11:02:47",
                  "updatedAt": "2021-02-24T02:02:47.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7709705,
                "odds": 45,
                "name": {
                  "id": "156",
                  "outcomeName": {
                    "en": "0:4",
                    "ko": "0:4",
                    "zh": "0:4"
                  },
                  "createdAt": "2021-02-24 11:02:47",
                  "updatedAt": "2021-02-24T02:02:47.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7709704,
                "odds": 65,
                "name": {
                  "id": "158",
                  "outcomeName": {
                    "en": "1:4",
                    "ko": "1:4",
                    "zh": "1:4"
                  },
                  "createdAt": "2021-02-24 11:02:47",
                  "updatedAt": "2021-02-24T02:02:47.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7709703,
                "odds": 100,
                "name": {
                  "id": "160",
                  "outcomeName": {
                    "en": "2:4",
                    "ko": "2:4",
                    "zh": "2:4"
                  },
                  "createdAt": "2021-02-24 11:02:41",
                  "updatedAt": "2021-02-24T02:02:41.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7709702,
                "odds": 100,
                "name": {
                  "id": "162",
                  "outcomeName": {
                    "en": "0:5",
                    "ko": "0:5",
                    "zh": "0:5"
                  },
                  "createdAt": "2021-02-24 11:02:41",
                  "updatedAt": "2021-02-24T02:02:41.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7709701,
                "odds": 100,
                "name": {
                  "id": "164",
                  "outcomeName": {
                    "en": "1:5",
                    "ko": "1:5",
                    "zh": "1:5"
                  },
                  "createdAt": "2021-02-24 11:02:41",
                  "updatedAt": "2021-02-24T02:02:41.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:25.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7709700,
                "odds": 100,
                "name": {
                  "id": "166",
                  "outcomeName": {
                    "en": "0:6",
                    "ko": "0:6",
                    "zh": "0:6"
                  },
                  "createdAt": "2021-02-24 11:02:41",
                  "updatedAt": "2021-02-24T02:02:41.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:25.000000+09:00",
                "oldOdds": null
              }
            ],
            "updatedAt": "2021-04-14T21:32:24.000000+09:00"
          },
          {
            "id": 2618202,
            "title": {
              "id": 14,
              "marketName": {
                "en": "Handicap {hcp}",
                "ko": "핸디캡 {hcp}",
                "zh": "不利 {hcp}"
              },
              "disabled": 0,
              "createdAt": "2021-02-24 11:02:37",
              "updatedAt": "2021-02-24T02:02:37.000000Z"
            },
            "status": 1,
            "type": 14,
            "specifier": {
              "hcp": "1:0"
            },
            "outcomes": [
              {
                "id": 7709777,
                "odds": 1.9,
                "name": {
                  "id": "1711",
                  "outcomeName": {
                    "en": "{$competitor1} ({hcp})",
                    "ko": "{$competitor1} ({hcp})",
                    "zh": "{$competitor1} ({hcp})"
                  },
                  "createdAt": "2021-02-24 11:02:45",
                  "updatedAt": "2021-02-24T02:02:45.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7709749,
                "odds": 3.3,
                "name": {
                  "id": "1712",
                  "outcomeName": {
                    "en": "draw ({hcp})",
                    "ko": "드로 ({hcp})",
                    "zh": "平局 ({hcp})"
                  },
                  "createdAt": "2021-02-24 11:02:50",
                  "updatedAt": "2021-02-24T02:02:50.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7709748,
                "odds": 3.7,
                "name": {
                  "id": "1713",
                  "outcomeName": {
                    "en": "{$competitor2} ({hcp})",
                    "ko": "{$competitor2} ({hcp})",
                    "zh": "{$competitor2} ({hcp})"
                  },
                  "createdAt": "2021-02-24 11:02:49",
                  "updatedAt": "2021-02-24T02:02:49.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              }
            ],
            "updatedAt": "2021-04-14T21:32:24.000000+09:00"
          },
          {
            "id": 2618481,
            "title": {
              "id": 29,
              "marketName": {
                "en": "Both teams to score",
                "ko": "두 팀 모두 득점",
                "zh": "两队都得分"
              },
              "disabled": 0,
              "createdAt": "2021-02-24 11:02:37",
              "updatedAt": "2021-02-24T02:02:37.000000Z"
            },
            "status": 1,
            "type": 29,
            "specifier": {},
            "outcomes": [
              {
                "id": 7709795,
                "odds": 2.5,
                "name": {
                  "id": "74",
                  "outcomeName": {
                    "en": "yes",
                    "ko": "예",
                    "zh": "是"
                  },
                  "createdAt": "2021-02-24 11:02:42",
                  "updatedAt": "2021-02-24T02:02:42.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7709811,
                "odds": 1.45,
                "name": {
                  "id": "76",
                  "outcomeName": {
                    "en": "no",
                    "ko": "아니오",
                    "zh": "否"
                  },
                  "createdAt": "2021-02-24 11:02:49",
                  "updatedAt": "2021-02-24T02:02:49.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              }
            ],
            "updatedAt": "2021-04-14T21:32:24.000000+09:00"
          },
          {
            "id": 2618515,
            "title": {
              "id": 47,
              "marketName": {
                "en": "Halftime/fulltime",
                "ko": "하프타임/풀타임",
                "zh": "半场/全场"
              },
              "disabled": 0,
              "createdAt": "2021-02-24 11:02:37",
              "updatedAt": "2021-02-24T02:02:37.000000Z"
            },
            "status": 1,
            "type": 47,
            "specifier": {},
            "outcomes": [
              {
                "id": 7709805,
                "odds": 13.5,
                "name": {
                  "id": "418",
                  "outcomeName": {
                    "en": "{$competitor1}/{$competitor1}",
                    "ko": "{$competitor1}/{$competitor1}",
                    "zh": "{$competitor1}/{$competitor1}"
                  },
                  "createdAt": "2021-02-24 11:02:52",
                  "updatedAt": "2021-02-24T02:02:52.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7709809,
                "odds": 26,
                "name": {
                  "id": "420",
                  "outcomeName": {
                    "en": "{$competitor1}/draw",
                    "ko": "{$competitor1}/드로",
                    "zh": "{$competitor1}/平局"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7709839,
                "odds": 35,
                "name": {
                  "id": "422",
                  "outcomeName": {
                    "en": "{$competitor1}/{$competitor2}",
                    "ko": "{$competitor1}/{$competitor2}",
                    "zh": "{$competitor1}/{$competitor2}"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7709806,
                "odds": 5.7,
                "name": {
                  "id": "424",
                  "outcomeName": {
                    "en": "draw/{$competitor1}",
                    "ko": "드로/{$competitor1}",
                    "zh": "平局/{$competitor1}"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7709810,
                "odds": 3.25,
                "name": {
                  "id": "426",
                  "outcomeName": {
                    "en": "draw/draw",
                    "ko": "드로/드로",
                    "zh": "平局/平局"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7709840,
                "odds": 2.5,
                "name": {
                  "id": "428",
                  "outcomeName": {
                    "en": "draw/{$competitor2}",
                    "ko": "드로/{$competitor2}",
                    "zh": "平局/{$competitor2}"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7709808,
                "odds": 75,
                "name": {
                  "id": "430",
                  "outcomeName": {
                    "en": "{$competitor2}/{$competitor1}",
                    "ko": "{$competitor2}/{$competitor1}",
                    "zh": "{$competitor2}/{$competitor1}"
                  },
                  "createdAt": "2021-02-24 11:02:47",
                  "updatedAt": "2021-02-24T02:02:47.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7709833,
                "odds": 25,
                "name": {
                  "id": "432",
                  "outcomeName": {
                    "en": "{$competitor2}/draw",
                    "ko": "{$competitor2}/드로",
                    "zh": "{$competitor2}/平局"
                  },
                  "createdAt": "2021-02-24 11:02:47",
                  "updatedAt": "2021-02-24T02:02:47.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7709891,
                "odds": 4.5,
                "name": {
                  "id": "434",
                  "outcomeName": {
                    "en": "{$competitor2}/{$competitor2}",
                    "ko": "{$competitor2}/{$competitor2}",
                    "zh": "{$competitor2}/{$competitor2}"
                  },
                  "createdAt": "2021-02-24 11:02:47",
                  "updatedAt": "2021-02-24T02:02:47.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              }
            ],
            "updatedAt": "2021-04-14T21:32:24.000000+09:00"
          },
          {
            "id": 2618528,
            "title": {
              "id": 45,
              "marketName": {
                "en": "Correct score",
                "ko": "정확한 스코어",
                "zh": "正确进球"
              },
              "disabled": 0,
              "createdAt": "2021-02-24 11:02:37",
              "updatedAt": "2021-02-24T02:02:37.000000Z"
            },
            "status": 1,
            "type": 45,
            "specifier": {},
            "outcomes": [
              {
                "id": 7710030,
                "odds": 5.1,
                "name": {
                  "id": "274",
                  "outcomeName": {
                    "en": "0:0",
                    "ko": "0:0",
                    "zh": "0:0"
                  },
                  "createdAt": "2021-02-24 11:02:43",
                  "updatedAt": "2021-02-24T02:02:43.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7710021,
                "odds": 7.5,
                "name": {
                  "id": "276",
                  "outcomeName": {
                    "en": "1:0",
                    "ko": "1:0",
                    "zh": "1:0"
                  },
                  "createdAt": "2021-02-24 11:02:43",
                  "updatedAt": "2021-02-24T02:02:43.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7710022,
                "odds": 22,
                "name": {
                  "id": "278",
                  "outcomeName": {
                    "en": "2:0",
                    "ko": "2:0",
                    "zh": "2:0"
                  },
                  "createdAt": "2021-02-24 11:02:43",
                  "updatedAt": "2021-02-24T02:02:43.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7710024,
                "odds": 95,
                "name": {
                  "id": "280",
                  "outcomeName": {
                    "en": "3:0",
                    "ko": "3:0",
                    "zh": "3:0"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7710034,
                "odds": 100,
                "name": {
                  "id": "282",
                  "outcomeName": {
                    "en": "4:0",
                    "ko": "4:0",
                    "zh": "4:0"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7709984,
                "odds": 4.1,
                "name": {
                  "id": "284",
                  "outcomeName": {
                    "en": "0:1",
                    "ko": "0:1",
                    "zh": "0:1"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7710031,
                "odds": 5.8,
                "name": {
                  "id": "286",
                  "outcomeName": {
                    "en": "1:1",
                    "ko": "1:1",
                    "zh": "1:1"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7710023,
                "odds": 17,
                "name": {
                  "id": "288",
                  "outcomeName": {
                    "en": "2:1",
                    "ko": "2:1",
                    "zh": "2:1"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7710025,
                "odds": 75,
                "name": {
                  "id": "290",
                  "outcomeName": {
                    "en": "3:1",
                    "ko": "3:1",
                    "zh": "3:1"
                  },
                  "createdAt": "2021-02-24 11:02:50",
                  "updatedAt": "2021-02-24T02:02:50.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7710028,
                "odds": 100,
                "name": {
                  "id": "292",
                  "outcomeName": {
                    "en": "4:1",
                    "ko": "4:1",
                    "zh": "4:1"
                  },
                  "createdAt": "2021-02-24 11:02:50",
                  "updatedAt": "2021-02-24T02:02:50.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7710035,
                "odds": 6.25,
                "name": {
                  "id": "294",
                  "outcomeName": {
                    "en": "0:2",
                    "ko": "0:2",
                    "zh": "0:2"
                  },
                  "createdAt": "2021-02-24 11:02:50",
                  "updatedAt": "2021-02-24T02:02:50.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7709983,
                "odds": 9,
                "name": {
                  "id": "296",
                  "outcomeName": {
                    "en": "1:2",
                    "ko": "1:2",
                    "zh": "1:2"
                  },
                  "createdAt": "2021-02-24 11:02:50",
                  "updatedAt": "2021-02-24T02:02:50.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7710032,
                "odds": 26,
                "name": {
                  "id": "298",
                  "outcomeName": {
                    "en": "2:2",
                    "ko": "2:2",
                    "zh": "2:2"
                  },
                  "createdAt": "2021-02-24 11:02:50",
                  "updatedAt": "2021-02-24T02:02:50.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7710027,
                "odds": 100,
                "name": {
                  "id": "300",
                  "outcomeName": {
                    "en": "3:2",
                    "ko": "3:2",
                    "zh": "3:2"
                  },
                  "createdAt": "2021-02-24 11:02:51",
                  "updatedAt": "2021-02-24T02:02:51.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7710029,
                "odds": 100,
                "name": {
                  "id": "302",
                  "outcomeName": {
                    "en": "4:2",
                    "ko": "4:2",
                    "zh": "4:2"
                  },
                  "createdAt": "2021-02-24 11:02:51",
                  "updatedAt": "2021-02-24T02:02:51.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7709964,
                "odds": 14,
                "name": {
                  "id": "304",
                  "outcomeName": {
                    "en": "0:3",
                    "ko": "0:3",
                    "zh": "0:3"
                  },
                  "createdAt": "2021-02-24 11:02:51",
                  "updatedAt": "2021-02-24T02:02:51.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7709931,
                "odds": 21,
                "name": {
                  "id": "306",
                  "outcomeName": {
                    "en": "1:3",
                    "ko": "1:3",
                    "zh": "1:3"
                  },
                  "createdAt": "2021-02-24 11:02:51",
                  "updatedAt": "2021-02-24T02:02:51.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7709932,
                "odds": 60,
                "name": {
                  "id": "308",
                  "outcomeName": {
                    "en": "2:3",
                    "ko": "2:3",
                    "zh": "2:3"
                  },
                  "createdAt": "2021-02-24 11:02:51",
                  "updatedAt": "2021-02-24T02:02:51.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7710033,
                "odds": 100,
                "name": {
                  "id": "310",
                  "outcomeName": {
                    "en": "3:3",
                    "ko": "3:3",
                    "zh": "3:3"
                  },
                  "createdAt": "2021-02-24 11:02:52",
                  "updatedAt": "2021-02-24T02:02:52.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7709938,
                "odds": 100,
                "name": {
                  "id": "312",
                  "outcomeName": {
                    "en": "4:3",
                    "ko": "4:3",
                    "zh": "4:3"
                  },
                  "createdAt": "2021-02-24 11:02:52",
                  "updatedAt": "2021-02-24T02:02:52.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7709933,
                "odds": 45,
                "name": {
                  "id": "314",
                  "outcomeName": {
                    "en": "0:4",
                    "ko": "0:4",
                    "zh": "0:4"
                  },
                  "createdAt": "2021-02-24 11:02:52",
                  "updatedAt": "2021-02-24T02:02:52.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7709934,
                "odds": 65,
                "name": {
                  "id": "316",
                  "outcomeName": {
                    "en": "1:4",
                    "ko": "1:4",
                    "zh": "1:4"
                  },
                  "createdAt": "2021-02-24 11:02:52",
                  "updatedAt": "2021-02-24T02:02:52.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7709935,
                "odds": 100,
                "name": {
                  "id": "318",
                  "outcomeName": {
                    "en": "2:4",
                    "ko": "2:4",
                    "zh": "2:4"
                  },
                  "createdAt": "2021-02-24 11:02:52",
                  "updatedAt": "2021-02-24T02:02:52.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7709936,
                "odds": 100,
                "name": {
                  "id": "320",
                  "outcomeName": {
                    "en": "3:4",
                    "ko": "3:4",
                    "zh": "3:4"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7709945,
                "odds": 100,
                "name": {
                  "id": "322",
                  "outcomeName": {
                    "en": "4:4",
                    "ko": "4:4",
                    "zh": "4:4"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7709939,
                "odds": 65,
                "name": {
                  "id": "324",
                  "outcomeName": {
                    "en": "other",
                    "ko": "기타",
                    "zh": "其他"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              }
            ],
            "updatedAt": "2021-04-14T21:32:24.000000+09:00"
          },
          {
            "id": 2682971,
            "title": {
              "id": 16,
              "marketName": {
                "en": "Handicap",
                "ko": "핸디캡",
                "zh": "欧洲让球盘"
              },
              "disabled": 0,
              "createdAt": "2021-02-24 11:02:37",
              "updatedAt": "2021-02-24T02:02:37.000000Z"
            },
            "status": 1,
            "type": 16,
            "specifier": {
              "hcp": "0.5"
            },
            "outcomes": [
              {
                "id": 7878248,
                "odds": 1.85,
                "name": {
                  "id": "1714",
                  "outcomeName": {
                    "en": "{$competitor1} ({+hcp})",
                    "ko": "{$competitor1} ({+hcp})",
                    "zh": "{$competitor1} ({+hcp})"
                  },
                  "createdAt": "2021-02-24 11:02:50",
                  "updatedAt": "2021-02-24T02:02:50.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7878247,
                "odds": 1.8,
                "name": {
                  "id": "1715",
                  "outcomeName": {
                    "en": "{$competitor2} ({-hcp})",
                    "ko": "{$competitor2} ({-hcp})",
                    "zh": "{$competitor2} ({-hcp})"
                  },
                  "createdAt": "2021-02-24 11:02:49",
                  "updatedAt": "2021-02-24T02:02:49.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              }
            ],
            "updatedAt": "2021-04-14T21:32:24.000000+09:00"
          },
          {
            "id": 2692427,
            "title": {
              "id": 7,
              "marketName": {
                "en": "Which team wins the rest of the match",
                "ko": "남은 매치에서 어느 팀이 이길가요?",
                "zh": "剩余时间内哪队获胜"
              },
              "disabled": 0,
              "createdAt": "2021-02-24 11:02:37",
              "updatedAt": "2021-02-24T02:02:37.000000Z"
            },
            "status": 1,
            "type": 7,
            "specifier": {
              "score": "0:0"
            },
            "outcomes": [
              {
                "id": 7908249,
                "odds": 4.5,
                "name": {
                  "id": "1",
                  "outcomeName": {
                    "en": "{$competitor1}",
                    "ko": "{$competitor1}",
                    "zh": "{$competitor1}"
                  },
                  "createdAt": "2021-02-24 11:02:42",
                  "updatedAt": "2021-02-24T02:02:42.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7908248,
                "odds": 3.05,
                "name": {
                  "id": "2",
                  "outcomeName": {
                    "en": "draw",
                    "ko": "드로",
                    "zh": "平局"
                  },
                  "createdAt": "2021-02-24 11:02:42",
                  "updatedAt": "2021-02-24T02:02:42.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7908247,
                "odds": 1.8,
                "name": {
                  "id": "3",
                  "outcomeName": {
                    "en": "{$competitor2}",
                    "ko": "{$competitor2}",
                    "zh": "{$competitor2}"
                  },
                  "createdAt": "2021-02-24 11:02:42",
                  "updatedAt": "2021-02-24T02:02:42.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              }
            ],
            "updatedAt": "2021-04-14T21:32:24.000000+09:00"
          }
        ],
        "homeScore": "0",
        "awayScore": "0",
        "homeTeam": {
          "id": 116294,
          "name": {
            "en": "Cankaya FK",
            "ko": "칸카야",
            "zh": "钱卡亚"
          }
        },
        "awayTeam": {
          "id": 170434,
          "name": {
            "en": "1928 Bucaspor",
            "ko": "1928 Bucaspor",
            "zh": "1928 Bucaspor"
          }
        },
        "tournament": {
          "id": 26386,
          "title": {
            "en": "3. Lig, Group 1",
            "ko": "3. 리가, 그룹 1",
            "zh": "土耳其足球丙级联赛， 第1组"
          },
          "country": null
        },
        "startAt": "2021-04-14T21:00:00.000000+09:00",
        "updatedAt": "2021-04-14T21:32:24.000000+09:00"
      },
      {
        "id": 23421853,
        "status": {
          "en": "1st half",
          "ko": "전반전",
          "zh": "上半场"
        },
        "markets": [
          {
            "id": 2604624,
            "title": {
              "id": 11,
              "marketName": {
                "en": "Draw no bet",
                "ko": "드로 노 베트",
                "zh": "平局返还"
              },
              "disabled": 0,
              "createdAt": "2021-02-24 11:02:37",
              "updatedAt": "2021-02-24T02:02:37.000000Z"
            },
            "status": 1,
            "type": 11,
            "specifier": {},
            "outcomes": [
              {
                "id": 7666179,
                "odds": 1.5,
                "name": {
                  "id": "4",
                  "outcomeName": {
                    "en": "{$competitor1}",
                    "ko": "{$competitor1}",
                    "zh": "{$competitor1}"
                  },
                  "createdAt": "2021-02-24 11:02:42",
                  "updatedAt": "2021-02-24T02:02:42.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7666178,
                "odds": 2.4,
                "name": {
                  "id": "5",
                  "outcomeName": {
                    "en": "{$competitor2}",
                    "ko": "{$competitor2}",
                    "zh": "{$competitor2}"
                  },
                  "createdAt": "2021-02-24 11:02:42",
                  "updatedAt": "2021-02-24T02:02:42.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              }
            ],
            "updatedAt": "2021-04-14T21:32:24.000000+09:00"
          },
          {
            "id": 2604747,
            "title": {
              "id": 10,
              "marketName": {
                "en": "Double chance",
                "ko": "더블 기회",
                "zh": "双胜彩"
              },
              "disabled": 0,
              "createdAt": "2021-02-24 11:02:37",
              "updatedAt": "2021-02-24T02:02:37.000000Z"
            },
            "status": 1,
            "type": 10,
            "specifier": {},
            "outcomes": [
              {
                "id": 7666716,
                "odds": 1.4,
                "name": {
                  "id": "10",
                  "outcomeName": {
                    "en": "{$competitor1} or {$competitor2}",
                    "ko": "{$competitor1} 또는 {$competitor2}",
                    "zh": "{$competitor1} 或 {$competitor2}"
                  },
                  "createdAt": "2021-02-24 11:02:47",
                  "updatedAt": "2021-02-24T02:02:47.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7666717,
                "odds": 1.55,
                "name": {
                  "id": "11",
                  "outcomeName": {
                    "en": "draw or {$competitor2}",
                    "ko": "드로 또는 {$competitor2}",
                    "zh": "平局或 {$competitor2}"
                  },
                  "createdAt": "2021-02-24 11:02:48",
                  "updatedAt": "2021-02-24T02:02:48.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7666715,
                "odds": 1.22,
                "name": {
                  "id": "9",
                  "outcomeName": {
                    "en": "{$competitor1} or draw",
                    "ko": "{$competitor1} 또는 드로",
                    "zh": "{$competitor1} 或平局"
                  },
                  "createdAt": "2021-02-24 11:02:42",
                  "updatedAt": "2021-02-24T02:02:42.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              }
            ],
            "updatedAt": "2021-04-14T21:32:24.000000+09:00"
          },
          {
            "id": 2604748,
            "title": {
              "id": 1,
              "marketName": {
                "en": "1x2",
                "ko": "1x2",
                "zh": "胜平负"
              },
              "disabled": 0,
              "createdAt": "2021-02-24 11:02:37",
              "updatedAt": "2021-02-24T02:02:37.000000Z"
            },
            "status": 1,
            "type": 1,
            "specifier": {},
            "outcomes": [
              {
                "id": 7666718,
                "odds": 2.25,
                "name": {
                  "id": "1",
                  "outcomeName": {
                    "en": "{$competitor1}",
                    "ko": "{$competitor1}",
                    "zh": "{$competitor1}"
                  },
                  "createdAt": "2021-02-24 11:02:42",
                  "updatedAt": "2021-02-24T02:02:42.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7666719,
                "odds": 2.65,
                "name": {
                  "id": "2",
                  "outcomeName": {
                    "en": "draw",
                    "ko": "드로",
                    "zh": "平局"
                  },
                  "createdAt": "2021-02-24 11:02:42",
                  "updatedAt": "2021-02-24T02:02:42.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7666720,
                "odds": 3.7,
                "name": {
                  "id": "3",
                  "outcomeName": {
                    "en": "{$competitor2}",
                    "ko": "{$competitor2}",
                    "zh": "{$competitor2}"
                  },
                  "createdAt": "2021-02-24 11:02:42",
                  "updatedAt": "2021-02-24T02:02:42.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              }
            ],
            "updatedAt": "2021-04-14T21:32:24.000000+09:00"
          },
          {
            "id": 2618556,
            "title": {
              "id": 45,
              "marketName": {
                "en": "Correct score",
                "ko": "정확한 스코어",
                "zh": "正确进球"
              },
              "disabled": 0,
              "createdAt": "2021-02-24 11:02:37",
              "updatedAt": "2021-02-24T02:02:37.000000Z"
            },
            "status": 1,
            "type": 45,
            "specifier": {},
            "outcomes": [
              {
                "id": 7710518,
                "odds": 4.15,
                "name": {
                  "id": "276",
                  "outcomeName": {
                    "en": "1:0",
                    "ko": "1:0",
                    "zh": "1:0"
                  },
                  "createdAt": "2021-02-24 11:02:43",
                  "updatedAt": "2021-02-24T02:02:43.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7710519,
                "odds": 9.25,
                "name": {
                  "id": "278",
                  "outcomeName": {
                    "en": "2:0",
                    "ko": "2:0",
                    "zh": "2:0"
                  },
                  "createdAt": "2021-02-24 11:02:43",
                  "updatedAt": "2021-02-24T02:02:43.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7710521,
                "odds": 40,
                "name": {
                  "id": "280",
                  "outcomeName": {
                    "en": "3:0",
                    "ko": "3:0",
                    "zh": "3:0"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7710525,
                "odds": 100,
                "name": {
                  "id": "282",
                  "outcomeName": {
                    "en": "4:0",
                    "ko": "4:0",
                    "zh": "4:0"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7710528,
                "odds": 2.9,
                "name": {
                  "id": "286",
                  "outcomeName": {
                    "en": "1:1",
                    "ko": "1:1",
                    "zh": "1:1"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7710520,
                "odds": 8,
                "name": {
                  "id": "288",
                  "outcomeName": {
                    "en": "2:1",
                    "ko": "2:1",
                    "zh": "2:1"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7710522,
                "odds": 35,
                "name": {
                  "id": "290",
                  "outcomeName": {
                    "en": "3:1",
                    "ko": "3:1",
                    "zh": "3:1"
                  },
                  "createdAt": "2021-02-24 11:02:50",
                  "updatedAt": "2021-02-24T02:02:50.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7710532,
                "odds": 100,
                "name": {
                  "id": "292",
                  "outcomeName": {
                    "en": "4:1",
                    "ko": "4:1",
                    "zh": "4:1"
                  },
                  "createdAt": "2021-02-24 11:02:50",
                  "updatedAt": "2021-02-24T02:02:50.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7710480,
                "odds": 5.4,
                "name": {
                  "id": "296",
                  "outcomeName": {
                    "en": "1:2",
                    "ko": "1:2",
                    "zh": "1:2"
                  },
                  "createdAt": "2021-02-24 11:02:50",
                  "updatedAt": "2021-02-24T02:02:50.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7710529,
                "odds": 10.5,
                "name": {
                  "id": "298",
                  "outcomeName": {
                    "en": "2:2",
                    "ko": "2:2",
                    "zh": "2:2"
                  },
                  "createdAt": "2021-02-24 11:02:50",
                  "updatedAt": "2021-02-24T02:02:50.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7710523,
                "odds": 60,
                "name": {
                  "id": "300",
                  "outcomeName": {
                    "en": "3:2",
                    "ko": "3:2",
                    "zh": "3:2"
                  },
                  "createdAt": "2021-02-24 11:02:51",
                  "updatedAt": "2021-02-24T02:02:51.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7710526,
                "odds": 100,
                "name": {
                  "id": "302",
                  "outcomeName": {
                    "en": "4:2",
                    "ko": "4:2",
                    "zh": "4:2"
                  },
                  "createdAt": "2021-02-24 11:02:51",
                  "updatedAt": "2021-02-24T02:02:51.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7710461,
                "odds": 14.5,
                "name": {
                  "id": "306",
                  "outcomeName": {
                    "en": "1:3",
                    "ko": "1:3",
                    "zh": "1:3"
                  },
                  "createdAt": "2021-02-24 11:02:51",
                  "updatedAt": "2021-02-24T02:02:51.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7710428,
                "odds": 30,
                "name": {
                  "id": "308",
                  "outcomeName": {
                    "en": "2:3",
                    "ko": "2:3",
                    "zh": "2:3"
                  },
                  "createdAt": "2021-02-24 11:02:51",
                  "updatedAt": "2021-02-24T02:02:51.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7710530,
                "odds": 100,
                "name": {
                  "id": "310",
                  "outcomeName": {
                    "en": "3:3",
                    "ko": "3:3",
                    "zh": "3:3"
                  },
                  "createdAt": "2021-02-24 11:02:52",
                  "updatedAt": "2021-02-24T02:02:52.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7710433,
                "odds": 100,
                "name": {
                  "id": "312",
                  "outcomeName": {
                    "en": "4:3",
                    "ko": "4:3",
                    "zh": "4:3"
                  },
                  "createdAt": "2021-02-24 11:02:52",
                  "updatedAt": "2021-02-24T02:02:52.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7710430,
                "odds": 50,
                "name": {
                  "id": "316",
                  "outcomeName": {
                    "en": "1:4",
                    "ko": "1:4",
                    "zh": "1:4"
                  },
                  "createdAt": "2021-02-24 11:02:52",
                  "updatedAt": "2021-02-24T02:02:52.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7710431,
                "odds": 100,
                "name": {
                  "id": "318",
                  "outcomeName": {
                    "en": "2:4",
                    "ko": "2:4",
                    "zh": "2:4"
                  },
                  "createdAt": "2021-02-24 11:02:52",
                  "updatedAt": "2021-02-24T02:02:52.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7710432,
                "odds": 100,
                "name": {
                  "id": "320",
                  "outcomeName": {
                    "en": "3:4",
                    "ko": "3:4",
                    "zh": "3:4"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7710435,
                "odds": 100,
                "name": {
                  "id": "322",
                  "outcomeName": {
                    "en": "4:4",
                    "ko": "4:4",
                    "zh": "4:4"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7710442,
                "odds": 95,
                "name": {
                  "id": "324",
                  "outcomeName": {
                    "en": "other",
                    "ko": "기타",
                    "zh": "其他"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              }
            ],
            "updatedAt": "2021-04-14T21:32:24.000000+09:00"
          },
          {
            "id": 2618574,
            "title": {
              "id": 18,
              "marketName": {
                "en": "Total",
                "ko": "토탈",
                "zh": "合计"
              },
              "disabled": 0,
              "createdAt": "2021-02-24 11:02:37",
              "updatedAt": "2021-02-24T02:02:37.000000Z"
            },
            "status": 1,
            "type": 18,
            "specifier": {
              "total": "3.5"
            },
            "outcomes": [
              {
                "id": 7710689,
                "odds": 3.75,
                "name": {
                  "id": "12",
                  "outcomeName": {
                    "en": "over {total}",
                    "ko": "오버 {total}",
                    "zh": "高于{total}"
                  },
                  "createdAt": "2021-02-24 11:02:42",
                  "updatedAt": "2021-02-24T02:02:42.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7710690,
                "odds": 1.22,
                "name": {
                  "id": "13",
                  "outcomeName": {
                    "en": "under {total}",
                    "ko": "언더 {total}",
                    "zh": "低于{total}"
                  },
                  "createdAt": "2021-02-24 11:02:44",
                  "updatedAt": "2021-02-24T02:02:44.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              }
            ],
            "updatedAt": "2021-04-14T21:32:24.000000+09:00"
          },
          {
            "id": 2618576,
            "title": {
              "id": 18,
              "marketName": {
                "en": "Total",
                "ko": "토탈",
                "zh": "合计"
              },
              "disabled": 0,
              "createdAt": "2021-02-24 11:02:37",
              "updatedAt": "2021-02-24T02:02:37.000000Z"
            },
            "status": 1,
            "type": 18,
            "specifier": {
              "total": "2.5"
            },
            "outcomes": [
              {
                "id": 7710694,
                "odds": 1.95,
                "name": {
                  "id": "12",
                  "outcomeName": {
                    "en": "over {total}",
                    "ko": "오버 {total}",
                    "zh": "高于{total}"
                  },
                  "createdAt": "2021-02-24 11:02:42",
                  "updatedAt": "2021-02-24T02:02:42.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7710688,
                "odds": 1.75,
                "name": {
                  "id": "13",
                  "outcomeName": {
                    "en": "under {total}",
                    "ko": "언더 {total}",
                    "zh": "低于{total}"
                  },
                  "createdAt": "2021-02-24 11:02:44",
                  "updatedAt": "2021-02-24T02:02:44.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              }
            ],
            "updatedAt": "2021-04-14T21:32:24.000000+09:00"
          },
          {
            "id": 2618581,
            "title": {
              "id": 29,
              "marketName": {
                "en": "Both teams to score",
                "ko": "두 팀 모두 득점",
                "zh": "两队都得分"
              },
              "disabled": 0,
              "createdAt": "2021-02-24 11:02:37",
              "updatedAt": "2021-02-24T02:02:37.000000Z"
            },
            "status": 1,
            "type": 29,
            "specifier": {},
            "outcomes": [
              {
                "id": 7710356,
                "odds": 1.32,
                "name": {
                  "id": "74",
                  "outcomeName": {
                    "en": "yes",
                    "ko": "예",
                    "zh": "是"
                  },
                  "createdAt": "2021-02-24 11:02:42",
                  "updatedAt": "2021-02-24T02:02:42.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7710355,
                "odds": 3.05,
                "name": {
                  "id": "76",
                  "outcomeName": {
                    "en": "no",
                    "ko": "아니오",
                    "zh": "否"
                  },
                  "createdAt": "2021-02-24 11:02:49",
                  "updatedAt": "2021-02-24T02:02:49.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              }
            ],
            "updatedAt": "2021-04-14T21:32:24.000000+09:00"
          },
          {
            "id": 2618583,
            "title": {
              "id": 18,
              "marketName": {
                "en": "Total",
                "ko": "토탈",
                "zh": "合计"
              },
              "disabled": 0,
              "createdAt": "2021-02-24 11:02:37",
              "updatedAt": "2021-02-24T02:02:37.000000Z"
            },
            "status": 1,
            "type": 18,
            "specifier": {
              "total": "1.5"
            },
            "outcomes": [
              {
                "id": 7710683,
                "odds": 1.16,
                "name": {
                  "id": "12",
                  "outcomeName": {
                    "en": "over {total}",
                    "ko": "오버 {total}",
                    "zh": "高于{total}"
                  },
                  "createdAt": "2021-02-24 11:02:42",
                  "updatedAt": "2021-02-24T02:02:42.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7710684,
                "odds": 4.3,
                "name": {
                  "id": "13",
                  "outcomeName": {
                    "en": "under {total}",
                    "ko": "언더 {total}",
                    "zh": "低于{total}"
                  },
                  "createdAt": "2021-02-24 11:02:44",
                  "updatedAt": "2021-02-24T02:02:44.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              }
            ],
            "updatedAt": "2021-04-14T21:32:24.000000+09:00"
          },
          {
            "id": 2618584,
            "title": {
              "id": 14,
              "marketName": {
                "en": "Handicap {hcp}",
                "ko": "핸디캡 {hcp}",
                "zh": "不利 {hcp}"
              },
              "disabled": 0,
              "createdAt": "2021-02-24 11:02:37",
              "updatedAt": "2021-02-24T02:02:37.000000Z"
            },
            "status": 1,
            "type": 14,
            "specifier": {
              "hcp": "0:2"
            },
            "outcomes": [
              {
                "id": 7710630,
                "odds": 28,
                "name": {
                  "id": "1711",
                  "outcomeName": {
                    "en": "{$competitor1} ({hcp})",
                    "ko": "{$competitor1} ({hcp})",
                    "zh": "{$competitor1} ({hcp})"
                  },
                  "createdAt": "2021-02-24 11:02:45",
                  "updatedAt": "2021-02-24T02:02:45.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7710631,
                "odds": 6.75,
                "name": {
                  "id": "1712",
                  "outcomeName": {
                    "en": "draw ({hcp})",
                    "ko": "드로 ({hcp})",
                    "zh": "平局 ({hcp})"
                  },
                  "createdAt": "2021-02-24 11:02:50",
                  "updatedAt": "2021-02-24T02:02:50.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7710633,
                "odds": 1.09,
                "name": {
                  "id": "1713",
                  "outcomeName": {
                    "en": "{$competitor2} ({hcp})",
                    "ko": "{$competitor2} ({hcp})",
                    "zh": "{$competitor2} ({hcp})"
                  },
                  "createdAt": "2021-02-24 11:02:49",
                  "updatedAt": "2021-02-24T02:02:49.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              }
            ],
            "updatedAt": "2021-04-14T21:32:24.000000+09:00"
          },
          {
            "id": 2618586,
            "title": {
              "id": 14,
              "marketName": {
                "en": "Handicap {hcp}",
                "ko": "핸디캡 {hcp}",
                "zh": "不利 {hcp}"
              },
              "disabled": 0,
              "createdAt": "2021-02-24 11:02:37",
              "updatedAt": "2021-02-24T02:02:37.000000Z"
            },
            "status": 1,
            "type": 14,
            "specifier": {
              "hcp": "2:0"
            },
            "outcomes": [
              {
                "id": 7710640,
                "odds": 1.04,
                "name": {
                  "id": "1711",
                  "outcomeName": {
                    "en": "{$competitor1} ({hcp})",
                    "ko": "{$competitor1} ({hcp})",
                    "zh": "{$competitor1} ({hcp})"
                  },
                  "createdAt": "2021-02-24 11:02:45",
                  "updatedAt": "2021-02-24T02:02:45.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7710634,
                "odds": 9.75,
                "name": {
                  "id": "1712",
                  "outcomeName": {
                    "en": "draw ({hcp})",
                    "ko": "드로 ({hcp})",
                    "zh": "平局 ({hcp})"
                  },
                  "createdAt": "2021-02-24 11:02:50",
                  "updatedAt": "2021-02-24T02:02:50.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7710635,
                "odds": 25,
                "name": {
                  "id": "1713",
                  "outcomeName": {
                    "en": "{$competitor2} ({hcp})",
                    "ko": "{$competitor2} ({hcp})",
                    "zh": "{$competitor2} ({hcp})"
                  },
                  "createdAt": "2021-02-24 11:02:49",
                  "updatedAt": "2021-02-24T02:02:49.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              }
            ],
            "updatedAt": "2021-04-14T21:32:24.000000+09:00"
          },
          {
            "id": 2618590,
            "title": {
              "id": 14,
              "marketName": {
                "en": "Handicap {hcp}",
                "ko": "핸디캡 {hcp}",
                "zh": "不利 {hcp}"
              },
              "disabled": 0,
              "createdAt": "2021-02-24 11:02:37",
              "updatedAt": "2021-02-24T02:02:37.000000Z"
            },
            "status": 1,
            "type": 14,
            "specifier": {
              "hcp": "1:0"
            },
            "outcomes": [
              {
                "id": 7710627,
                "odds": 1.25,
                "name": {
                  "id": "1711",
                  "outcomeName": {
                    "en": "{$competitor1} ({hcp})",
                    "ko": "{$competitor1} ({hcp})",
                    "zh": "{$competitor1} ({hcp})"
                  },
                  "createdAt": "2021-02-24 11:02:45",
                  "updatedAt": "2021-02-24T02:02:45.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7710628,
                "odds": 4.95,
                "name": {
                  "id": "1712",
                  "outcomeName": {
                    "en": "draw ({hcp})",
                    "ko": "드로 ({hcp})",
                    "zh": "平局 ({hcp})"
                  },
                  "createdAt": "2021-02-24 11:02:50",
                  "updatedAt": "2021-02-24T02:02:50.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7710629,
                "odds": 10,
                "name": {
                  "id": "1713",
                  "outcomeName": {
                    "en": "{$competitor2} ({hcp})",
                    "ko": "{$competitor2} ({hcp})",
                    "zh": "{$competitor2} ({hcp})"
                  },
                  "createdAt": "2021-02-24 11:02:49",
                  "updatedAt": "2021-02-24T02:02:49.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              }
            ],
            "updatedAt": "2021-04-14T21:32:24.000000+09:00"
          },
          {
            "id": 2618604,
            "title": {
              "id": 47,
              "marketName": {
                "en": "Halftime/fulltime",
                "ko": "하프타임/풀타임",
                "zh": "半场/全场"
              },
              "disabled": 0,
              "createdAt": "2021-02-24 11:02:37",
              "updatedAt": "2021-02-24T02:02:37.000000Z"
            },
            "status": 1,
            "type": 47,
            "specifier": {},
            "outcomes": [
              {
                "id": 7710350,
                "odds": 2.1,
                "name": {
                  "id": "418",
                  "outcomeName": {
                    "en": "{$competitor1}/{$competitor1}",
                    "ko": "{$competitor1}/{$competitor1}",
                    "zh": "{$competitor1}/{$competitor1}"
                  },
                  "createdAt": "2021-02-24 11:02:52",
                  "updatedAt": "2021-02-24T02:02:52.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7710348,
                "odds": 3.1,
                "name": {
                  "id": "420",
                  "outcomeName": {
                    "en": "{$competitor1}/draw",
                    "ko": "{$competitor1}/드로",
                    "zh": "{$competitor1}/平局"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7710345,
                "odds": 5.7,
                "name": {
                  "id": "422",
                  "outcomeName": {
                    "en": "{$competitor1}/{$competitor2}",
                    "ko": "{$competitor1}/{$competitor2}",
                    "zh": "{$competitor1}/{$competitor2}"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7710277,
                "odds": 31,
                "name": {
                  "id": "424",
                  "outcomeName": {
                    "en": "draw/{$competitor1}",
                    "ko": "드로/{$competitor1}",
                    "zh": "平局/{$competitor1}"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7710347,
                "odds": 8,
                "name": {
                  "id": "426",
                  "outcomeName": {
                    "en": "draw/draw",
                    "ko": "드로/드로",
                    "zh": "平局/平局"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7710374,
                "odds": 8.5,
                "name": {
                  "id": "428",
                  "outcomeName": {
                    "en": "draw/{$competitor2}",
                    "ko": "드로/{$competitor2}",
                    "zh": "平局/{$competitor2}"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7710349,
                "odds": 100,
                "name": {
                  "id": "430",
                  "outcomeName": {
                    "en": "{$competitor2}/{$competitor1}",
                    "ko": "{$competitor2}/{$competitor1}",
                    "zh": "{$competitor2}/{$competitor1}"
                  },
                  "createdAt": "2021-02-24 11:02:47",
                  "updatedAt": "2021-02-24T02:02:47.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7710346,
                "odds": 100,
                "name": {
                  "id": "432",
                  "outcomeName": {
                    "en": "{$competitor2}/draw",
                    "ko": "{$competitor2}/드로",
                    "zh": "{$competitor2}/平局"
                  },
                  "createdAt": "2021-02-24 11:02:47",
                  "updatedAt": "2021-02-24T02:02:47.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7710376,
                "odds": 26,
                "name": {
                  "id": "434",
                  "outcomeName": {
                    "en": "{$competitor2}/{$competitor2}",
                    "ko": "{$competitor2}/{$competitor2}",
                    "zh": "{$competitor2}/{$competitor2}"
                  },
                  "createdAt": "2021-02-24 11:02:47",
                  "updatedAt": "2021-02-24T02:02:47.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              }
            ],
            "updatedAt": "2021-04-14T21:32:24.000000+09:00"
          },
          {
            "id": 2692976,
            "title": {
              "id": 41,
              "marketName": {
                "en": "Correct score [{score}]",
                "ko": "정확한 스코어 [{score}]",
                "zh": "正确进球 [{score}]"
              },
              "disabled": 0,
              "createdAt": "2021-02-24 11:02:37",
              "updatedAt": "2021-02-24T02:02:37.000000Z"
            },
            "status": 1,
            "type": 41,
            "specifier": {
              "score": "1:0"
            },
            "outcomes": [
              {
                "id": 7910099,
                "odds": 3.95,
                "name": {
                  "id": "110",
                  "outcomeName": {
                    "en": "0:0",
                    "ko": "0:0",
                    "zh": "0:0"
                  },
                  "createdAt": "2021-02-24 11:02:52",
                  "updatedAt": "2021-02-24T02:02:52.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7910071,
                "odds": 8.75,
                "name": {
                  "id": "114",
                  "outcomeName": {
                    "en": "1:0",
                    "ko": "1:0",
                    "zh": "1:0"
                  },
                  "createdAt": "2021-02-24 11:02:52",
                  "updatedAt": "2021-02-24T02:02:52.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7910069,
                "odds": 40,
                "name": {
                  "id": "116",
                  "outcomeName": {
                    "en": "2:0",
                    "ko": "2:0",
                    "zh": "2:0"
                  },
                  "createdAt": "2021-02-24 11:02:52",
                  "updatedAt": "2021-02-24T02:02:52.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7910070,
                "odds": 100,
                "name": {
                  "id": "118",
                  "outcomeName": {
                    "en": "3:0",
                    "ko": "3:0",
                    "zh": "3:0"
                  },
                  "createdAt": "2021-02-24 11:02:52",
                  "updatedAt": "2021-02-24T02:02:52.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7910085,
                "odds": 100,
                "name": {
                  "id": "120",
                  "outcomeName": {
                    "en": "4:0",
                    "ko": "4:0",
                    "zh": "4:0"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7910097,
                "odds": 100,
                "name": {
                  "id": "122",
                  "outcomeName": {
                    "en": "5:0",
                    "ko": "5:0",
                    "zh": "5:0"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7910096,
                "odds": 100,
                "name": {
                  "id": "124",
                  "outcomeName": {
                    "en": "6:0",
                    "ko": "6:0",
                    "zh": "6:0"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7910095,
                "odds": 2.8,
                "name": {
                  "id": "126",
                  "outcomeName": {
                    "en": "0:1",
                    "ko": "0:1",
                    "zh": "0:1"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7910094,
                "odds": 7.5,
                "name": {
                  "id": "128",
                  "outcomeName": {
                    "en": "1:1",
                    "ko": "1:1",
                    "zh": "1:1"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7910093,
                "odds": 34,
                "name": {
                  "id": "130",
                  "outcomeName": {
                    "en": "2:1",
                    "ko": "2:1",
                    "zh": "2:1"
                  },
                  "createdAt": "2021-02-24 11:02:47",
                  "updatedAt": "2021-02-24T02:02:47.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7910092,
                "odds": 100,
                "name": {
                  "id": "132",
                  "outcomeName": {
                    "en": "3:1",
                    "ko": "3:1",
                    "zh": "3:1"
                  },
                  "createdAt": "2021-02-24 11:02:47",
                  "updatedAt": "2021-02-24T02:02:47.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7910073,
                "odds": 100,
                "name": {
                  "id": "134",
                  "outcomeName": {
                    "en": "4:1",
                    "ko": "4:1",
                    "zh": "4:1"
                  },
                  "createdAt": "2021-02-24 11:02:47",
                  "updatedAt": "2021-02-24T02:02:47.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7910072,
                "odds": 100,
                "name": {
                  "id": "136",
                  "outcomeName": {
                    "en": "5:1",
                    "ko": "5:1",
                    "zh": "5:1"
                  },
                  "createdAt": "2021-02-24 11:02:47",
                  "updatedAt": "2021-02-24T02:02:47.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7910074,
                "odds": 5.1,
                "name": {
                  "id": "138",
                  "outcomeName": {
                    "en": "0:2",
                    "ko": "0:2",
                    "zh": "0:2"
                  },
                  "createdAt": "2021-02-24 11:02:47",
                  "updatedAt": "2021-02-24T02:02:47.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7910075,
                "odds": 10,
                "name": {
                  "id": "140",
                  "outcomeName": {
                    "en": "1:2",
                    "ko": "1:2",
                    "zh": "1:2"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7910076,
                "odds": 55,
                "name": {
                  "id": "142",
                  "outcomeName": {
                    "en": "2:2",
                    "ko": "2:2",
                    "zh": "2:2"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7910077,
                "odds": 100,
                "name": {
                  "id": "144",
                  "outcomeName": {
                    "en": "3:2",
                    "ko": "3:2",
                    "zh": "3:2"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7910078,
                "odds": 100,
                "name": {
                  "id": "146",
                  "outcomeName": {
                    "en": "4:2",
                    "ko": "4:2",
                    "zh": "4:2"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7910079,
                "odds": 13.5,
                "name": {
                  "id": "148",
                  "outcomeName": {
                    "en": "0:3",
                    "ko": "0:3",
                    "zh": "0:3"
                  },
                  "createdAt": "2021-02-24 11:02:46",
                  "updatedAt": "2021-02-24T02:02:46.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7910080,
                "odds": 29,
                "name": {
                  "id": "150",
                  "outcomeName": {
                    "en": "1:3",
                    "ko": "1:3",
                    "zh": "1:3"
                  },
                  "createdAt": "2021-02-24 11:02:47",
                  "updatedAt": "2021-02-24T02:02:47.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7910081,
                "odds": 100,
                "name": {
                  "id": "152",
                  "outcomeName": {
                    "en": "2:3",
                    "ko": "2:3",
                    "zh": "2:3"
                  },
                  "createdAt": "2021-02-24 11:02:47",
                  "updatedAt": "2021-02-24T02:02:47.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7910082,
                "odds": 100,
                "name": {
                  "id": "154",
                  "outcomeName": {
                    "en": "3:3",
                    "ko": "3:3",
                    "zh": "3:3"
                  },
                  "createdAt": "2021-02-24 11:02:47",
                  "updatedAt": "2021-02-24T02:02:47.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7910083,
                "odds": 45,
                "name": {
                  "id": "156",
                  "outcomeName": {
                    "en": "0:4",
                    "ko": "0:4",
                    "zh": "0:4"
                  },
                  "createdAt": "2021-02-24 11:02:47",
                  "updatedAt": "2021-02-24T02:02:47.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7910084,
                "odds": 100,
                "name": {
                  "id": "158",
                  "outcomeName": {
                    "en": "1:4",
                    "ko": "1:4",
                    "zh": "1:4"
                  },
                  "createdAt": "2021-02-24 11:02:47",
                  "updatedAt": "2021-02-24T02:02:47.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7910086,
                "odds": 100,
                "name": {
                  "id": "160",
                  "outcomeName": {
                    "en": "2:4",
                    "ko": "2:4",
                    "zh": "2:4"
                  },
                  "createdAt": "2021-02-24 11:02:41",
                  "updatedAt": "2021-02-24T02:02:41.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7910098,
                "odds": 100,
                "name": {
                  "id": "162",
                  "outcomeName": {
                    "en": "0:5",
                    "ko": "0:5",
                    "zh": "0:5"
                  },
                  "createdAt": "2021-02-24 11:02:41",
                  "updatedAt": "2021-02-24T02:02:41.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7910087,
                "odds": 100,
                "name": {
                  "id": "164",
                  "outcomeName": {
                    "en": "1:5",
                    "ko": "1:5",
                    "zh": "1:5"
                  },
                  "createdAt": "2021-02-24 11:02:41",
                  "updatedAt": "2021-02-24T02:02:41.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7910088,
                "odds": 100,
                "name": {
                  "id": "166",
                  "outcomeName": {
                    "en": "0:6",
                    "ko": "0:6",
                    "zh": "0:6"
                  },
                  "createdAt": "2021-02-24 11:02:41",
                  "updatedAt": "2021-02-24T02:02:41.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              }
            ],
            "updatedAt": "2021-04-14T21:32:24.000000+09:00"
          },
          {
            "id": 2692977,
            "title": {
              "id": 7,
              "marketName": {
                "en": "Which team wins the rest of the match",
                "ko": "남은 매치에서 어느 팀이 이길가요?",
                "zh": "剩余时间内哪队获胜"
              },
              "disabled": 0,
              "createdAt": "2021-02-24 11:02:37",
              "updatedAt": "2021-02-24T02:02:37.000000Z"
            },
            "status": 1,
            "type": 7,
            "specifier": {
              "score": "1:0"
            },
            "outcomes": [
              {
                "id": 7910089,
                "odds": 7,
                "name": {
                  "id": "1",
                  "outcomeName": {
                    "en": "{$competitor1}",
                    "ko": "{$competitor1}",
                    "zh": "{$competitor1}"
                  },
                  "createdAt": "2021-02-24 11:02:42",
                  "updatedAt": "2021-02-24T02:02:42.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7910090,
                "odds": 3.05,
                "name": {
                  "id": "2",
                  "outcomeName": {
                    "en": "draw",
                    "ko": "드로",
                    "zh": "平局"
                  },
                  "createdAt": "2021-02-24 11:02:42",
                  "updatedAt": "2021-02-24T02:02:42.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7910091,
                "odds": 1.6,
                "name": {
                  "id": "3",
                  "outcomeName": {
                    "en": "{$competitor2}",
                    "ko": "{$competitor2}",
                    "zh": "{$competitor2}"
                  },
                  "createdAt": "2021-02-24 11:02:42",
                  "updatedAt": "2021-02-24T02:02:42.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              }
            ],
            "updatedAt": "2021-04-14T21:32:24.000000+09:00"
          },
          {
            "id": 2692980,
            "title": {
              "id": 16,
              "marketName": {
                "en": "Handicap",
                "ko": "핸디캡",
                "zh": "欧洲让球盘"
              },
              "disabled": 0,
              "createdAt": "2021-02-24 11:02:37",
              "updatedAt": "2021-02-24T02:02:37.000000Z"
            },
            "status": 1,
            "type": 16,
            "specifier": {
              "hcp": "-0.5"
            },
            "outcomes": [
              {
                "id": 7910106,
                "odds": 2.2,
                "name": {
                  "id": "1714",
                  "outcomeName": {
                    "en": "{$competitor1} ({+hcp})",
                    "ko": "{$competitor1} ({+hcp})",
                    "zh": "{$competitor1} ({+hcp})"
                  },
                  "createdAt": "2021-02-24 11:02:50",
                  "updatedAt": "2021-02-24T02:02:50.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              },
              {
                "id": 7910105,
                "odds": 1.57,
                "name": {
                  "id": "1715",
                  "outcomeName": {
                    "en": "{$competitor2} ({-hcp})",
                    "ko": "{$competitor2} ({-hcp})",
                    "zh": "{$competitor2} ({-hcp})"
                  },
                  "createdAt": "2021-02-24 11:02:49",
                  "updatedAt": "2021-02-24T02:02:49.000000Z"
                },
                "active": 1,
                "updatedAt": "2021-04-14T21:32:24.000000+09:00",
                "oldOdds": null
              }
            ],
            "updatedAt": "2021-04-14T21:32:24.000000+09:00"
          }
        ],
        "homeScore": "1",
        "awayScore": "0",
        "homeTeam": {
          "id": 24760,
          "name": {
            "en": "Ofspor AS",
            "ko": "오프스포르",
            "zh": "奥夫体育"
          }
        },
        "awayTeam": {
          "id": 743101,
          "name": {
            "en": "Diyarbakir Fk As 1977",
            "ko": "Diyarbakir Fk As 1977",
            "zh": "Diyarbakir Fk As 1977"
          }
        },
        "tournament": {
          "id": 26386,
          "title": {
            "en": "3. Lig, Group 1",
            "ko": "3. 리가, 그룹 1",
            "zh": "土耳其足球丙级联赛， 第1组"
          },
          "country": null
        },
        "startAt": "2021-04-14T21:00:00.000000+09:00",
        "updatedAt": "2021-04-14T21:32:24.000000+09:00"
      }
    ],
    "total": 6,
    "count": 6,
    "perPage": 15,
    "page": 1,
    "lastPage": 1,
  },
  error: "",
  active_index : null,
};

const inplayReducer = (state = initialState, action) => {
  switch (action.type) {

    case types.SET_MARKETS:
      
      let current_index = state.active_index;
      let set_index = action.payload;

      // if (current_index == set_index){
      //   set_index = null;
      // }
      return {
        ...state,
        active_index: set_index,
      };

    case types.GET_INPLAYDETAILS:
      const market = action.payload; // ws main data
      // console.log(market)
      const match_id = market.match_id
      // console.log("match_id:" + match_id)
      // console.log("kelvin")

      const state_data = state.data.data;

      state_data.map((data, index) => {

        if (match_id == data.id) {
          console.log("inplay");
          console.log(market)
          console.log(data.status)
          data.status = JSON.parse(market.match_status);
          console.log(JSON.parse(market.match_status))
          market.markets.map((ws_data, index) => {

            let ws_data_market_outcomes = ws_data.outcomes; // list of outcomes comeing from the ws
            let ws_specifier = JSON.stringify(ws_data.specifier)
            let ws_market_type = ws_data.market_id;
            let ws_status = ws_data.status

            data.markets.map((data, index) => {
              let details_specifier = JSON.stringify(data.specifier)
              let details_outcomes = data.outcomes;
              let market_type = data.type

              // check if the market is same with the ws data and details data
              if (ws_market_type == market_type) {
                data.status = ws_status;

                if (ws_specifier == "{}") { // check if the specifer is only one 

                  ws_data_market_outcomes.map((data, index) => {
                    let ws_outcome_id = data.outcome_id;
                    let ws_new_outcome_odds = data.odds;
                    let ws_active_status = data.active;

                    details_outcomes.map((data, index) => {
                      // check if the outcomes has the same id and name

                      if (ws_outcome_id == data.name.id) {
                        let old_value = data.odds;

                        data.odds = ws_new_outcome_odds // changing value of the state of the outcomes odds
                        data.oldOdds = old_value // changing value of the state of the outcomes old odds
                        data.active = ws_active_status // changing of active stat
                      }
                    })
                  })

                } else {

                  if (ws_specifier === details_specifier) {

                    ws_data_market_outcomes.map((data, index) => {
                      let ws_outcome_id = data.outcome_id;
                      let ws_new_outcome_odds = data.odds;
                      let ws_active_status = data.active;
                      details_outcomes.map((data, index) => {
                        // check if the outcomes has the same id and name

                        if (ws_outcome_id == data.name.id) {
                          let old_value = data.odds;
                          data.active = ws_active_status
                          data.odds = ws_new_outcome_odds // changing value of the state of the outcomes odds
                          data.oldOdds = old_value // changing value of the state of the outcomes old odds
                        }
                      })

                    })
                  }
                }

              }
            })
          })
        }

      })



      return {
        ...state,
      };



    case types.FETCH_INPLAYS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_INPLAYS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.FETCH_INPLAYS_FAILURE:
      return {
        ...state,
        loading: false,

        error: action.payload,
      };

    case types.FETCH_INPLAY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_INPLAY_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.FETCH_INPLAY_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.CREATE_INPLAY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.CREATE_INPLAY_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.CREATE_INPLAY_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.UPDATE_INPLAY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.UPDATE_INPLAY_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.UPDATE_INPLAY_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.DELETE_INPLAYS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.DELETE_INPLAYS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.DELETE_INPLAYS_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default inplayReducer;
