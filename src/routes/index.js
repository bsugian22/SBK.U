// import Main from "../components/pages/Main";
// import Sports from "../components/pages/Sports";
// import Inplay from "../components/pages/Inplay";
// import InplayDetail from "../components/pages/InplayDetail";
// import Esports from "../components/pages/Esports";
// import EsportsLive from "../components/pages/EsportsLive";
// import EsportsDetail from "../components/pages/EsportsDetail";
// import Games from "../components/pages/Games";
// import Casino from "../components/pages/Casino";
// import Promo from "../components/pages/Promo";
// import Deposit from "../components/accounts/Deposit";
// import Withdrawal from "../components/accounts/Withdrawal";
// import Exchange from "../components/accounts/Exchange";
// import Position from "../components/accounts/Position";
// import Notice from "../components/accounts/Notice";
// import Inquiry from "../components/accounts/Inquiry";
// import Message from "../components/accounts/Message";
// import Settings from "../components/accounts/Settings";
// import Login from "../components/pages/Login";
// import Find from "../components/pages/Find";
// import Register from "../components/pages/Register";

import Main from "../components/pages/MainContainer";
import Sports from "../components/pages/SportsContainer";
import Inplay from "../components/pages/InplayContainer";
import InplayDetail from "../components/pages/InplayDetailContainer";
import Esports from "../components/pages/EsportsContainer";
import EsportsLive from "../components/pages/EsportsLiveContainer";
import EsportsDetail from "../components/pages/EsportsDetailContainer";
import Games from "../components/pages/GamesContainer";
import Casino from "../components/pages/CasinoContainer";
import Promo from "../components/pages/PromoContainer";
import Deposit from "../components/accounts/DepositContainer";
import Withdrawal from "../components/accounts/WithdrawalContainer";
import Exchange from "../components/accounts/ExchangeContainer";
import Position from "../components/accounts/PositionContainer";
import Notice from "../components/accounts/NoticeContainer";
import Inquiry from "../components/accounts/InquiryContainer";
import Message from "../components/accounts/MessageContainer";
import Settings from "../components/accounts/SettingsContainer";
import Login from "../components/pages/LoginContainer";
import Find from "../components/pages/FindContainer";
import Register from "../components/pages/RegisterContainer";

export const routes = [
  {
    path: "/",
    exact: true,
    auth: false,
    useBetslipNavi: false,
    useBookNavi: false,
    useAccountNavi: false,
    useGameNavi: false,
    component: Main,
  },
  {
    path: "/account/deposit",
    auth: true,
    useBetslipNavi: true,
    useBookNavi: false,
    useAccountNavi: true,
    useGameNavi: false,
    component: Deposit,
  },
  {
    path: "/account/withdraw",
    auth: true,
    useBetslipNavi: true,
    useBookNavi: false,
    useAccountNavi: true,
    useGameNavi: false,
    component: Withdrawal,
  },
  {
    path: "/account/exchange",
    auth: true,
    useBetslipNavi: true,
    useBookNavi: false,
    useAccountNavi: true,
    useGameNavi: false,
    component: Exchange,
  },
  {
    path: "/account/position",
    auth: true,
    useBetslipNavi: true,
    useBookNavi: false,
    useAccountNavi: true,
    useGameNavi: false,
    component: Position,
  },
  {
    path: "/account/notice",
    auth: true,
    useBetslipNavi: true,
    useBookNavi: false,
    useAccountNavi: true,
    useGameNavi: false,
    component: Notice,
  },
  {
    path: "/account/inquiry",
    auth: true,
    useBetslipNavi: true,
    useBookNavi: false,
    useAccountNavi: true,
    useGameNavi: false,
    component: Inquiry,
  },
  {
    path: "/account/message",
    auth: true,
    useBetslipNavi: true,
    useBookNavi: false,
    useAccountNavi: true,
    useGameNavi: false,
    component: Message,
  },
  {
    path: "/account/settings",
    auth: true,
    useBetslipNavi: true,
    useBookNavi: false,
    useAccountNavi: true,
    useGameNavi: false,
    component: Settings,
  },
  {
    path: "/sports",
    exact: true,
    auth: false,
    useBetslipNavi: true,
    useBookNavi: true,
    useAccountNavi: false,
    useGameNavi: false,
    component: Sports,
  },
  {
    path: "/inplay",
    exact: true,
    auth: false,
    useBetslipNavi: true,
    useBookNavi: false,
    useAccountNavi: false,
    useGameNavi: false,
    component: Inplay,
  },
  {
    path: "/inplay/detail",
    exact: true,
    auth: false,
    useBetslipNavi: true,
    useBookNavi: false,
    useAccountNavi: false,
    useGameNavi: false,
    component: InplayDetail,
  },
  {
    path: "/esports",
    exact: true,
    auth: false,
    useBetslipNavi: true,
    useBookNavi: false,
    useAccountNavi: false,
    useGameNavi: false,
    component: Esports,
  },
  {
    path: "/esports/live",
    exact: true,
    auth: false,
    useBetslipNavi: true,
    useBookNavi: false,
    useAccountNavi: false,
    useGameNavi: false,
    component: EsportsLive,
  },
  {
    path: "/esports/detail",
    exact: true,
    auth: false,
    useBetslipNavi: true,
    useBookNavi: false,
    useAccountNavi: false,
    useGameNavi: false,
    component: EsportsDetail,
  },
  {
    path: "/games",
    auth: false,
    useBetslipNavi: true,
    useBookNavi: false,
    useAccountNavi: false,
    useGameNavi: true,
    component: Games,
  },
  {
    path: "/casino",
    auth: false,
    useBetslipNavi: false,
    useBookNavi: false,
    useAccountNavi: false,
    useGameNavi: false,
    component: Casino,
  },
  {
    path: "/promo",
    auth: false,
    useBetslipNavi: false,
    useBookNavi: false,
    useAccountNavi: false,
    useGameNavi: false,
    component: Promo,
  },
  {
    path: "/login",
    exact: true,
    auth: false,
    useBetslipNavi: false,
    useBookNavi: false,
    useAccountNavi: false,
    useGameNavi: false,
    component: Login,
  },
  {
    path: "/find",
    exact: true,
    auth: false,
    useBetslipNavi: false,
    useBookNavi: false,
    useAccountNavi: false,
    useGameNavi: false,
    component: Find,
  },
  {
    path: "/register",
    exact: true,
    auth: false,
    useBetslipNavi: false,
    useBookNavi: false,
    useAccountNavi: false,
    useGameNavi: false,
    component: Register,
  },
];
