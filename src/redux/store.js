import { applyMiddleware, createStore } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./rootReducer";
import logger from "redux-logger";
import thunk from "redux-thunk";
import * as userActions from "./user/userActions";
import * as preferencesActions from "./preference/preferenceActions";
import * as registerActions from "./register/registerActions";
import { fetchSummary } from "./navigations/accountSummary/accountSummaryActions";
import { fetchCompetitors, fetchMarkets, fetchOutcomes, fetchSports, fetchTournaments, sportWebSocket } from "./sport/sportActions";
import { resetLoadingBet, validateBet } from "./bet/betActions";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ['preference', 'user', 'sportsdetail']
};

let sports = {};
let betslipMatches = []



const enhancedReducer = persistReducer(persistConfig, rootReducer);
const middleWare = applyMiddleware(logger, thunk);

export const mapStateToProps = (state) => {
  sports = state.sportsdetail;
  let result = sports.data.bet.outcomes.map( data => ({id:parseInt(data.match_id)}))
  betslipMatches = result
  return {
    preferences: state.preference.preferences,
    forgotPassword: state.preference.forgotPassword,
    user: state.user.user,
    register: state.register,
    modal: state.modal,
  };

};

export const mapDispatchProps = (dispatch) => {
  return {
    setUser: (payload) => {
      dispatch(userActions.setUser(payload));
      dispatch(fetchSummary());
    },
    setAccessToken: (payload) => {
      localStorage.setItem("ACCESS_TOKEN", payload.access_token);
      dispatch(userActions.setAccessToken(payload));
    },
    setLogout: () => {
      localStorage.removeItem("ACCESS_TOKEN");
      dispatch(userActions.setLogout());
    },
    setSports: () => {
      dispatch(fetchTournaments());
      dispatch(fetchCompetitors());
      dispatch(fetchOutcomes());
      dispatch(fetchMarkets());
      dispatch(fetchSports());
      dispatch(resetLoadingBet())
      dispatch(validateBet(sports?.data?.bet))
      dispatch(sportWebSocket(betslipMatches))
    },
    setPreferences: (payload) => {
      dispatch(preferencesActions.setPreferences(payload));
    },
    handleUsernameOnChange: (payload) => {
      dispatch(preferencesActions.handleUsername(payload));
    },
    handlePassword: (payload) => {
      dispatch(preferencesActions.handleUserPassword(payload));
    },
    handleUserPhoneNumber: (payload) => {
      dispatch(preferencesActions.handleUserPhoneNumber(payload));
    },

    resetRegisterForm: () => {
      dispatch(registerActions.resetRegisterForm());
    },

    setDarkmode: (toggle) => {
      dispatch(preferencesActions.setDarkmode(toggle));
    },
  };
};

export default createStore(enhancedReducer, composeWithDevTools(middleWare));
