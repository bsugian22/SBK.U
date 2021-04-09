import * as types from "./accountSummaryTypes";

const initialState = {
  loading: false,
  data: [{
        "users": {
            "cash": 148997,
            "casino_cash": 13925000,
            "point": 0
        },
        "deposit": [
            {
                "id": 105,
                "amount": 1000000,
                "applies_bonus": 0,
                "status": "REJECTED",
                "method": "CASH",
                "created_at": "2021-03-10T05:11:49.000000Z"
            },
            {
                "id": 104,
                "amount": 30000,
                "applies_bonus": 0,
                "status": "RECALLED",
                "method": "CASH",
                "created_at": "2021-03-10T05:11:19.000000Z"
            },
            {
                "id": 103,
                "amount": 2000,
                "applies_bonus": 0,
                "status": "RECALLED",
                "method": "CASH",
                "created_at": "2021-03-10T05:10:24.000000Z"
            }
        ],
        "withdrawal": [
            {
                "id": 32,
                "amount": 200000,
                "status": "ACCEPTED",
                "method": "PAYPAL",
                "created_at": "2021-02-20T00:26:19.000000Z"
            },
            {
                "id": 23,
                "amount": 50000,
                "status": "ACCEPTED",
                "method": "BITCOIN",
                "created_at": "2021-02-19T15:57:42.000000Z"
            }
        ],
        "bettings": [],
        "inquiries": [
            {
                "id": 98,
                "status": "PENDING",
                "title": "asdf",
                "content": "<p><strong>asdf</strong></p>",
                "fixed": 0,
                "hits": 11,
                "answer": null,
                "created_by_user": {
                    "username": "test",
                    "id": 1,
                    "level": 1,
                    "point": 0,
                    "cash": 148997,
                    "casino_cash": 13925000,
                    "nickname": "test",
                    "country_code": "KOR",
                    "language": "ko",
                    "tel_number": "+8201000000000",
                    "account_bank": "123123",
                    "account_number": "1112312311",
                    "account_holder": "홍길동",
                    "deposit_bonus": 0,
                    "allows_deposit_bonus": 0,
                    "logged_by_ip": "162.158.166.246",
                    "created_by_ip": null,
                    "logged_at": "2021-04-09T16:57:35.000000+09:00",
                    "created_at": null,
                    "updated_at": "2021-04-09T16:57:35.000000+09:00",
                    "unread_messages": 0
                },
                "created_at": "2021-03-21T21:19:39.000000+09:00"
            },
            {
                "id": 97,
                "status": "PENDING",
                "title": "ㅁㄴㅇㄹ",
                "content": "<p>ㅁㄴㅇㄹ</p><p>ㅁㄴㅇㄹ</p><p>ㅁㄴㅇㄹ</p><p>ㅁㄴㅇㄹ</p><p>ㅁㄴㅇㄹ</p><p>ㅁㄴㅇㄻㄴㅇㄹ</p><p>ㅁㄴㅇㄹ</p><p>ㅁㄴㅇㄹ</p><p>ㅁㄴㅇㄹ</p><p>ㅁㄴㅇㄹ</p><p>ㅁㄴㅇㄹ</p><p>ㅁㄴㅇㄹ</p>",
                "fixed": 0,
                "hits": 25,
                "answer": null,
                "created_by_user": {
                    "username": "test",
                    "id": 1,
                    "level": 1,
                    "point": 0,
                    "cash": 148997,
                    "casino_cash": 13925000,
                    "nickname": "test",
                    "country_code": "KOR",
                    "language": "ko",
                    "tel_number": "+8201000000000",
                    "account_bank": "123123",
                    "account_number": "1112312311",
                    "account_holder": "홍길동",
                    "deposit_bonus": 0,
                    "allows_deposit_bonus": 0,
                    "logged_by_ip": "162.158.166.246",
                    "created_by_ip": null,
                    "logged_at": "2021-04-09T16:57:35.000000+09:00",
                    "created_at": null,
                    "updated_at": "2021-04-09T16:57:35.000000+09:00",
                    "unread_messages": 0
                },
                "created_at": "2021-03-21T20:54:00.000000+09:00"
            },
            {
                "id": 88,
                "status": "PENDING",
                "title": "123",
                "content": "<p><strong>123</strong></p>",
                "fixed": 0,
                "hits": 45,
                "answer": null,
                "created_by_user": {
                    "username": "test",
                    "id": 1,
                    "level": 1,
                    "point": 0,
                    "cash": 148997,
                    "casino_cash": 13925000,
                    "nickname": "test",
                    "country_code": "KOR",
                    "language": "ko",
                    "tel_number": "+8201000000000",
                    "account_bank": "123123",
                    "account_number": "1112312311",
                    "account_holder": "홍길동",
                    "deposit_bonus": 0,
                    "allows_deposit_bonus": 0,
                    "logged_by_ip": "162.158.166.246",
                    "created_by_ip": null,
                    "logged_at": "2021-04-09T16:57:35.000000+09:00",
                    "created_at": null,
                    "updated_at": "2021-04-09T16:57:35.000000+09:00",
                    "unread_messages": 0
                },
                "created_at": "2021-03-19T22:42:02.000000+09:00"
            }
        ],
        "promotions": [
            {
                "id": 83,
                "category": "promo 3",
                "title": "fasd",
                "content": "adfs",
                "photo": "http://api.vosa.dev/storage/not indicated",
                "fixed": 0,
                "hits": 0,
                "created_at": "2021-03-12T20:30:00.000000+09:00"
            },
            {
                "id": 82,
                "category": "promo 1",
                "title": "11",
                "content": "1111111111111111",
                "photo": "http://api.vosa.dev/storage/not indicated",
                "fixed": 0,
                "hits": 0,
                "created_at": "2021-03-11T20:50:08.000000+09:00"
            },
            {
                "id": 81,
                "category": "promo 2",
                "title": "asdasd",
                "content": "asdasd",
                "photo": "http://api.vosa.dev/storage/not indicated",
                "fixed": 0,
                "hits": 0,
                "created_at": "2021-03-11T20:31:20.000000+09:00"
            }
        ]
    }
],
  error: "",
};

const accountSummaryReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case types.FETCH_SUMMARIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_SUMMARIES_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.FETCH_SUMMARIES_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
      
    case types.FETCH_SUMMARY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_SUMMARY_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.FETCH_SUMMARY_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.CREATE_SUMMARY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.CREATE_SUMMARY_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.CREATE_SUMMARY_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.UPDATE_SUMMARY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.UPDATE_SUMMARY_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.UPDATE_SUMMARY_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case types.DELETE_SUMMARIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.DELETE_SUMMARIES_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.DELETE_SUMMARIES_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default summaryReducer;
