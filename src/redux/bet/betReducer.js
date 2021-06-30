import sweetalert from "../../plugins/sweetalert";
import * as types from "./betTypes";

const swal = new sweetalert();
const initialState = {
  loadingBet: false,
  data: {
    bet: {
      category: "SPORTS",
      amount: 0,
      outcomes: [],
      total_odds: 0,
    }
  },
};

const sportsdetailReducer = (state = initialState, action) => {
  switch (action.type) {

    case types.RESET_LOADING_BET:


      return {
        ...state,
        loadingBet: false
      };

    case types.SET_WS_BETSLIP:

      const wsData = action.payload
      const wsMatchId = wsData.matchId
      const state_bet = state.data.bet.outcomes;
      console.log(wsData)

      state_bet.map((data, index) => {
        let details_specifier = data.specifier
        // let details_name_id = data.outcome_name_id
        let message = data.home_team + " vs " + data.away_team
        let marketId = data.market_id
        let outcomeId = data.outcome_id_outcome

        if (wsMatchId == data.match_id) {

          wsData.markets.map((ws_data, index) => {

            let ws_data_market_outcomes = ws_data.outcomes; // list of outcomes comeing from the ws
            let wsSpecifier = JSON.stringify(ws_data.specifier)
            let wsMarketId = ws_data.marketId;
            let wsStatus = ws_data.status
            // console.log(wsStatus)

            // check if the market is same with the ws data and details data 
            if (marketId == wsMarketId) {
              
              console.log(wsMarketId)
              console.log(marketId)
              console.log(data)
              console.log(ws_data)
              
              if (wsSpecifier == "{}") { // check if the specifer is only one 


                ws_data_market_outcomes.map((wsOutcome) => {

                  if (wsOutcome.outcomeId == outcomeId) {
                    let old_value = data.odds;
                    data.odds = wsOutcome.odds
                    data.oldOdds = old_value
                  }

                })

                if (wsStatus != 1 && state_bet.find(x => x.market_id == wsMarketId)) {
                  state.data.bet.outcomes.splice(state_bet.findIndex(x => x.market_id == wsMarketId), 1)
                  swal.fire({
                    title: '이미 마감된 경기가 있습니다.',
                    icon: 'warning',
                    html: message,
                  })
                }


              } else {

                if (wsSpecifier === details_specifier) {

                  ws_data_market_outcomes.map((wsOutcome) => {

                    if (wsOutcome.outcomeId == outcomeId) {
                      let old_value = data.odds;
                      data.odds = wsOutcome.odds
                      data.oldOdds = old_value
                    }

                  })

                  if (wsStatus != 1 && state_bet.find(x => x.market_id == wsMarketId)) {
                    state.data.bet.outcomes.splice(state_bet.findIndex(x => x.market_id == wsMarketId), 1)
                    swal.fire({
                      title: '이미 마감된 경기가 있습니다.',
                      icon: 'warning',
                      html: message,
                    })
                  }


                }
              }
            }

            let total_odds = 1;
            state.data.bet.outcomes.forEach(e => {
              total_odds *= e.odds;
            });

            state.data.bet.total_odds = total_odds

          })
        }
      })
      return { ...state }
    case types.BET_CHECK:
      let invalid_outcomes = action.payload.data
      let invalid_outcomes_message = action.payload.message
      let message = "";

      invalid_outcomes.map((outcome) => {
        let data = state.data.bet.outcomes.find(x => x.id == outcome)
        message = message + data.home_team + " vs " + data.away_team + "<br>"

        let index = state.data.bet.outcomes.findIndex(x => x.id == outcome)
        state.data.bet.outcomes.splice(index, 1)
      })


      swal.fire({
        title: invalid_outcomes_message,
        icon: 'warning',
        html: message,
      })

      return {
        ...state,
      };
    case types.RESET_OUTCOME:
      state.data.bet = {
        category: "SPORTS",
        amount: 0,
        outcomes: [],
        total_odds: 0,
      };

      return {
        ...state,
      };

    case types.SPLICE_OUTCOME:
      state.data.bet.outcomes.splice(action.payload, 1)

      let total_odds_x = 1;
      state.data.bet.outcomes.forEach(e => {
        total_odds_x *= e.odds;
      });
      state.data.bet.total_odds = total_odds_x

      return {
        ...state,
      };
    case types.SET_BET_AMOUNT:
      state.data.bet.amount = action.payload

      return {
        ...state,
      };

    case types.SET_BET_OUTCOMES:
      const set_outcome_id = action.payload.outcome_id;
      const set_outcome_id_outcome = action.payload.outcome_id_outcome;
      const set_match_id = action.payload.match_id;
      const set_odds = action.payload.odds;
      const set_home = action.payload.home_team;
      const set_away = action.payload.away_team;
      const set_market_name = action.payload.market_name;
      let set_outcome_name = action.payload.outcome_name;
      const set_market_id = action.payload.market_id
      const set_old_odds = action.payload.oldOdds;
      const set_specifier = action.payload.specifier;
      // const set_market_type = action.payload.market_type;
      // const set_outcome_name_id = action.payload.outcome_name_id;

      let total_odds = 1;
      const existing_outcome = state.data.bet.outcomes.findIndex(x => x.id == set_outcome_id)


      // check if the outcome exists
      if (existing_outcome == "-1") {

        let existing_match = state.data.bet.outcomes.findIndex(x => x.match_id == set_match_id)

        // check if the match exists 
        if (existing_match == "-1") {
          state.data.bet.outcomes.push({
            id: set_outcome_id,
            match_id: set_match_id,
            odds: set_odds,
            home_team: set_home,
            away_team: set_away,
            market_name: set_market_name,
            outcome_name: set_outcome_name,
            oldOdds: set_old_odds,
            specifier: set_specifier,
            market_id: set_market_id,
            outcome_id_outcome: set_outcome_id_outcome
            // market_type: set_market_type,
            // outcome_name_id: set_outcome_name_id
          })
        } else {
          state.data.bet.outcomes.splice(existing_match, 1)
          state.data.bet.outcomes.push({
            id: set_outcome_id,
            match_id: set_match_id,
            odds: set_odds,
            home_team: set_home,
            away_team: set_away,
            market_name: set_market_name,
            outcome_name: set_outcome_name,
            oldOdds: set_old_odds,
            specifier: set_specifier,
            market_id: set_market_id,
            outcome_id_outcome: set_outcome_id_outcome
            // market_type: set_market_type,
            // outcome_name_id: set_outcome_name_id
          })
        }

      } else {
        state.data.bet.outcomes.splice(existing_outcome, 1)
      }

      state.data.bet.outcomes.forEach(e => {
        total_odds *= e.odds;
      });

      state.data.bet.total_odds = total_odds

      return {
        ...state,
      };


    case types.BET_REQUEST:
      return {
        ...state,
        loadingBet: true,
      };

    case types.BET_SUCCESS:
      return {
        ...state,
        loadingBet: false,
      };
    case types.BET_FAILURE:
      return {
        ...state,
        loadingBet: false,
      };

    default:
      return state;
  }
};

export default sportsdetailReducer;
