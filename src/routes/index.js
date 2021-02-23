import Main from "../components/pages/Main";
import Sports from "../components/pages/sports";
import Inplay from "../components/pages/inplay";
import InplayDetail from "../components/pages/inplaydetails";
import Esports from "../components/pages/esports";
import EsportsLive from "../components/pages/esportslives";
import EsportsDetail from "../components/pages/esportsdetails";
import Games from "../components/pages/games";
import Casino from "../components/pages/casinos";
import Promo from "../components/pages/promos";
import Deposit from "../components/accounts/deposit";
import Withdrawal from "../components/accounts/withdrawal";
import Exchange from "../components/accounts/exchange";
import Position from "../components/accounts/position";
import Notice from "../components/accounts/notice";
import Inquiry from "../components/accounts/inquiry";
import Message from "../components/accounts/message";
import Settings from "../components/accounts/settings";
import Login from "../components/pages/login";
import Find from "../components/pages/finds";
import Register from "../components/pages/register";
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
    useBetslipNavi: false,
    useBookNavi: false,
    useAccountNavi: true,
    useGameNavi: false,
    useAccountStatusNavi: true,
    component: Deposit,
  },
  {
    path: "/account/withdraw",
    auth: true,
    useBetslipNavi: false,
    useBookNavi: false,
    useAccountNavi: true,
    useGameNavi: false,
    useAccountStatusNavi: true,
    component: Withdrawal,
  },
  {
    path: "/account/exchange",
    auth: true,
    useBetslipNavi: false,
    useBookNavi: false,
    useAccountNavi: true,
    useGameNavi: false,
    useAccountStatusNavi: true,
    component: Exchange,
  },
  {
    path: "/account/position",
    auth: true,
    useBetslipNavi: false,
    useBookNavi: false,
    useAccountNavi: true,
    useGameNavi: false,
    useAccountStatusNavi: true,
    component: Position,
  },
  {
    path: "/account/notice",
    auth: true,
    useBetslipNavi: false,
    useBookNavi: false,
    useAccountNavi: true,
    useGameNavi: false,
    useAccountStatusNavi: true,
    component: Notice,
  },
  {
    path: "/account/inquiry",
    auth: true,
    useBetslipNavi: false,
    useBookNavi: false,
    useAccountNavi: true,
    useGameNavi: false,
    useAccountStatusNavi: true,
    component: Inquiry,
  },
  {
    path: "/account/message",
    auth: true,
    useBetslipNavi: false,
    useBookNavi: false,
    useAccountNavi: true,
    useGameNavi: false,
    useAccountStatusNavi: true,
    component: Message,
  },
  {
    path: "/account/settings",
    auth: true,
    useBetslipNavi: false,
    useBookNavi: false,
    useAccountNavi: true,
    useGameNavi: false,
    useAccountStatusNavi: true,
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
