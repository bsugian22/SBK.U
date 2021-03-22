import * as types from "./sportsdetailTypes";

const initialState = {
  loading: false,
  data: {
    data: [],
    total: null,
    count: null,
    per_page: null,
    page: 1,
    last_page: null,
    detail: null,
    detail_data: null,
  },
  error: "",
};

const sportsdetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_SPORTSDETAILS:
      console.log("connnected");
      const market = action.payload;
      // console.log(state)
      console.log(market)
      let match_id = market.match_id
      console.log("match_id:" + match_id)

      // state.data.data.map((data, index) => {
      let state_data = state.data.data;
      for (var i = 0; i < state_data.length; i++) {

        const market_data = state_data[i].matches.find(x => x.id == match_id); // find specific data 
        if (market_data) {
          console.log(market_data);
          // look for market_id to the websocket data 
          const market_type = market_data.market.type
          console.log("amrket_type :" + market_type);

          // update data from ws
          const ws_data_market = market.markets.find(x => x.market_id == market_type)
          const outcomes = market_data.market.outcomes;

          //check if the markets ws has the same market type on sports page data
          if (ws_data_market) {
            console.log(ws_data_market);
            ws_data_market.outcomes.map((data, index) => {
              const ws_outcome_id = data.outcome_id;
              const ws_new_outcome_odds = data.odds;
              // look for the outcomes->name-> id to match with ws_outcome_id
              outcomes.map((data, index) => {
                if (ws_outcome_id == data.name.id) {
                  console.log(data.name.id + " - " + ws_outcome_id)
                  console.log(data.odds + " - " + ws_new_outcome_odds)
                  data.odds = ws_new_outcome_odds
                  console.log(data.odds + " new data - " + ws_new_outcome_odds)
                }
              })
            })
          } else {
            break; // nothing to update here ( no market_id 1 market type)
          }
          //current market outcomes 

          break; // stop loop if find the market on the list on the sports page
        }



      }

      // market.markets.map((data, index) => {
      //   let specifier = "";
      //   let market_id = data.market_id;
      //   data.specifier.hcp ? specifier = data.specifier.hcp : specifier = " wlang laman"
      //   console.log("market_id[type_id]: " + market_id + " - spec: " + specifier)
      //   data.outcomes.map((data, index) => {
      //     // console.log("outcome_id[outcomes->name->id]: " + data.outcome_id + " - value of odds:" + data.odds)
      //   })

      // })

      return {
        ...state,
      };

      // checking if the scoket has acctive shwoing market
      if (state.data.detail == market.match_id) {
        console.log("match_id:" + market.match_id)
        console.log("market active");
      } else {
        console.log("no market active");
      }
      return {
        ...state,
      };
    case types.FETCH_SPORTSDETAILS_REQUEST:
      return {
        ...state,
        loading: true,
        data: {
          data: [],
          total: null,
          count: null,
          per_page: null,
          page: 1,
          last_page: null,
          detail: null,
          detail_data: null,
        },
      };
    case types.FETCH_SPORTSDETAILS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case types.FETCH_SPORTSDETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case types.FETCH_SPORTSDETAIL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_SPORTSDETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        data: {
          ...state.data,
          detail_data: action.payload.data,
          detail: action.payload.data.id,
        },
        error: "",
      };
    case types.FETCH_SPORTSDETAIL_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case types.SPORTSDETAIL_RESET:
      return {
        ...state,
        loading: false,
        data: {
          ...state.data,
          detail_data: null,
          detail: null,
        },
        error: "",
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
