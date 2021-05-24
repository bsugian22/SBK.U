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
      const set_match_id = action.payload.match_id;
      const set_odds = action.payload.odds;
      const set_home = action.payload.home_team;
      const set_away = action.payload.away_team;
      const set_market_name = action.payload.market_name;
      let set_outcome_name = action.payload.outcome_name;

      const set_old_odds = action.payload.oldOdds;
      // const set_specifier = action.payload.specifier;
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
            // specifier: set_specifier,
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
            // specifier: set_specifier,
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
