import { combineReducers } from "redux";
import casinoReducer from "./casino/casinoReducer";
import esportReducer from "./esport/esportReducer";
import esportsdetailReducer from "./esportsdetail/esportsdetailReducer";
import esportsliveReducer from "./esportslive/esportsliveReducer";
import findReducer from "./find/findReducer";
import gameReducer from "./game/gameReducer";
import gamesviewReducer from "./gamesview/gamesviewReducer";
import inplayReducer from "./inplay/inplayReducer";
import inplaydetailReducer from "./inplaydetail/inplaydetailReducer";
import loginReducer from "./login/loginReducer";
import mainReducer from "./main/mainReducer";
import promoReducer from "./promo/promoReducer";
import promopostReducer from "./promopost/promopostReducer";
import registerReducer from "./register/registerReducer";
import sportReducer from "./sport/sportReducer";
import sportsdetailReducer from "./sportsdetail/sportsdetailReducer";
import swipermainReducer from "./swipermain/swipermainReducer";

const rootReducer = combineReducers({
  casino: casinoReducer,
  esport: esportReducer,
  esportsdetail: esportsdetailReducer,
  esportslive: esportsliveReducer,
  find: findReducer,
  game: gameReducer,
  gamesview: gamesviewReducer,
  inplay: inplayReducer,
  inplaydetail: inplaydetailReducer,
  login: loginReducer,
  main: mainReducer,
  promo: promoReducer,
  promopost: promopostReducer,
  register: registerReducer,
  sport: sportReducer,
  sportsdetail: sportsdetailReducer,
  swipermain: swipermainReducer,
});

export default rootReducer;
