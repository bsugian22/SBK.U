import * as types from "./accountSummaryTypes";

const initialState = {
  loading: false,
  data: {
    data: {
      users: {
        cash: "0",
        casino_cash: "0",
        point: "0",
      },
      deposit: [],
      withdrawal: [],
      bettings: [],
      inquiries: [],
      promotions: []
    },
  },
  error: "",
};

const accountSummaryReducer = (state = initialState, action) => {
  switch (action.type) {
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
        data: {
          data: {
            users: {
              cash: "0",
              casino_cash: "0",
              point: "0",
            },
            deposit: [],
            withdrawal: [],
            bettings: [],
            inquiries: [],
            promotions: []
          },
        },
        error: action.payload,
      };

    default:
      return state;
  }
};

export default accountSummaryReducer;
