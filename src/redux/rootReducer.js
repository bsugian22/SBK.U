import { combineReducers } from "redux";
import casinoReducer from "./casino/casinoReducer";
import esportReducer from "./esport/esportReducer";
import findReducer from "./find/findReducer";
import gameReducer from "./game/gameReducer";
import gamesviewReducer from "./gamesview/gamesviewReducer";
import inplayReducer from "./inplay/inplayReducer";
import loginReducer from "./login/loginReducer";
import mainReducer from "./main/mainReducer";
import preferenceReducer from "./preference/preferenceReducer";
import promoReducer from "./promo/promoReducer";
import promopostReducer from "./promopost/promopostReducer";
import registerReducer from "./register/registerReducer";
import sportReducer from "./sport/sportReducer";
import sportsdetailReducer from "./bet/betReducer";
import swipermainReducer from "./swipermain/swipermainReducer";
import userReducer from "./user/userReducer";
import depositReducer from "../redux/accounts/deposit/depositReducer";
import exchangeReducer from "../redux/accounts/exchange/exchangeReducer";
import withdrawalReducer from "../redux/accounts/withdrawal/withdrawalReducer";
import inquiryReducer from "../redux/accounts/inquiry/inquiryReducer";
import messageReducer from "../redux/accounts/message/messageReducer";
import positionReducer from "../redux/accounts/position/positionReducer";
import noticeReducer from "../redux/accounts/notice/noticeReducer";
import accountSummaryReducer from "../redux/navigations/accountSummary/accountSummaryReducer";
import modalReducer from "../redux/modal/modalReducer";

const rootReducer = combineReducers({
  casino: casinoReducer,
  esport: esportReducer,
  find: findReducer,
  game: gameReducer,
  gamesview: gamesviewReducer,
  inplay: inplayReducer,
  login: loginReducer,
  main: mainReducer,
  preference: preferenceReducer,
  promo: promoReducer,
  promopost: promopostReducer,
  register: registerReducer,
  sport: sportReducer,
  sportsdetail: sportsdetailReducer,
  swipermain: swipermainReducer,
  user: userReducer,
  deposit: depositReducer,
  exchange: exchangeReducer,
  withdraw: withdrawalReducer,
  inquiry: inquiryReducer,
  message: messageReducer,
  position: positionReducer,
  notice: noticeReducer,
  accountSummary: accountSummaryReducer,
  modal : modalReducer,
});

export default rootReducer;
