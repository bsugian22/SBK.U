import { applyMiddleware, createStore } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./rootReducer";
import logger from "redux-logger";
import thunk from "redux-thunk";
import * as userActions from "./user/userActions";
import * as preferencesActions from "./preference/preferenceActions";

const persistConfig = {
  key: "root",
  storage,
};

const enhancedReducer = persistReducer(persistConfig, rootReducer);
const middleWare = applyMiddleware(logger, thunk);
export const mapStateToProps = (state) => {
  return {
    preferences: state.preference.preferences,
    user: state.user.user,
  };
};

export const mapDispatchProps = (dispatch) => {
  return {
    setUser: (payload) => {
      dispatch(userActions.setUser(payload));
    },
    setAccessToken: (payload) => {
      localStorage.setItem("ACCESS_TOKEN", payload.access_token);
      dispatch(userActions.setAccessToken(payload));
    },
    setLogout: () => {
      localStorage.removeItem("ACCESS_TOKEN");
      dispatch(userActions.setLogout());
    },
    setPreferences: (payload) => {
      dispatch(preferencesActions.setPreferences(payload));
    },
    setDarkmode: (toggle) => {
      dispatch(preferencesActions.setDarkmode(toggle));
    },
  };
};

export default createStore(enhancedReducer, composeWithDevTools(middleWare));
