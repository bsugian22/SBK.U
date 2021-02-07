import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";

import rootReducer from "./rootReducer";
import * as userActions from "../redux/user/userActions";
import * as preferencesAction from "../redux/preference/preferenceActions";

const persistConfig = {
  key: "root",
  storage,
};

const enhancedReducer = persistReducer(persistConfig, rootReducer);
const middleWare = applyMiddleware(logger, thunk);

export const mapStateToProps = (state) => {
  return {
    preferences: state.preferencesStore.preferences,
    user: state.userStore.user,
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
      dispatch(preferencesAction.setPreferences(payload));
    },
  };
};

const store = createStore(enhancedReducer, composeWithDevTools(middleWare));

export default store;
