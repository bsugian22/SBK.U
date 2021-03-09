import React, { Fragment, useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { refreshToken } from "../../../redux/user/userActions";

import Swiper from "../swipermains";
export default function Main() {

  let isSubscribed = true;

  useEffect(() => {
    isSubscribed = true;
    refreshToken();
    return () => {
      isSubscribed = false;
    };
  }, []);

  return (
    <Fragment>
      <div class="main-content-desktop content flex flex-inherit grow-2 flex-column">
        <div class="flex-column flex-inherit scrollable-auto">
          <div class="main-content-desktop flex flex-inherit flex-column">
            <div class="widthp-100 main-slide-wrap main-content-swiper height-400">
              <Swiper />
            </div>
          </div>
          <div class="main-content-slotbox flex-inherit flex-column padding-horizontal-20">
            <div class="slotbox-header-inner flex-inherit justify-content-center-inherit align-items-center-inherit padding-vertical-50">
              <div class="slotbox-header-title align-items-center">
                <div class="title-name">TOP EVENTS</div>
              </div>
              <div class="play-tab">
                <button type="button" class="color-yellow padding-right-10">
                  전체
                </button>
                <button type="button" class="color-white padding-right-10">
                  축구
                </button>
                <button type="button" class="color-white padding-right-10">
                  농구
                </button>
                <button type="button" class="color-white padding-right-10">
                  야구
                </button>
                <button type="button" class="color-white padding-right-10">
                  배구
                </button>
                <button type="button" class="color-white">
                  아이스하키
                </button>
              </div>
              <div class="all-list">
                <Link to="#" className="color-yellow">
                  SEE ALL <i class="fal fa-angle-double-right"></i>
                </Link>
              </div>
            </div>

            <div class="slotbox-content-inner flex-inherit align-items-center-inherit margin-bottom-20">
              <div class="widthp-33 height-300 flex-inherit align-items-center margin-right-15">
                <div class="heightp-100 widthp-100 round-box flex-column featured-matches justify-content-center align-items-center">
                  <div class="list-inner flex flex-column flex-inherit heightp-100 justify-content-center align-items-center">
                    <h1 class="round-header-title padding-bottom-20">
                      FEATURED MATCHES
                    </h1>
                    <span class="color-grey league-title">
                      ENGLISH PREMIER LEAGUE
                    </span>
                    <div class="round-team-name">토트넘 VS 아스널</div>
                    <span class="color-grey league-datetime padding-bottom-30">
                      2020. 11. 12 AM 03:00
                    </span>
                    <div class="round-score flex flex-inherit">
                      <div class="home background-black padding-vertical-10 padding-horizontal-15">
                        <span class="color-grey">1</span>
                      </div>
                      <div class="odds background-black padding-vertical-10 padding-horizontal-20 margin-left-1 margin-right-20">
                        <span class="color-yellow">2.12</span>
                      </div>

                      <div class="home background-black padding-vertical-10 padding-horizontal-15">
                        <span class="color-grey">X</span>
                      </div>
                      <div class="odds background-black padding-vertical-10 padding-horizontal-20 margin-left-1 margin-right-20">
                        <span class="color-yellow">3.30</span>
                      </div>

                      <div class="home background-black padding-vertical-10 padding-horizontal-15">
                        <span class="color-grey">2</span>
                      </div>
                      <div class="odds background-black padding-vertical-10 padding-horizontal-20 margin-left-1">
                        <span class="color-yellow">2.98</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="widthp-33 height-300 flex-inherit align-items-center margin-right-15">
                <div class="heightp-100 widthp-100 round-box flex-column basketball justify-content-center align-items-center">
                  <div class="list-inner flex flex-column flex-inherit heightp-100 justify-content-center align-items-center">
                    <h1 class="round-header-title padding-bottom-20">
                      BASKETBALL
                    </h1>
                    <span class="color-grey league-title">NBA</span>
                    <div class="round-team-name">필라델피아 VS 보스턴</div>
                    <span class="color-grey league-datetime padding-bottom-30">
                      2020. 11. 12 AM 03:00
                    </span>
                    <div class="round-score flex flex-inherit">
                      <div class="home background-black padding-vertical-10 padding-horizontal-15">
                        <span class="color-grey">1</span>
                      </div>
                      <div class="odds background-black padding-vertical-10 padding-horizontal-20 margin-left-1 margin-right-20">
                        <span class="color-yellow">2.12</span>
                      </div>

                      <div class="home background-black padding-vertical-10 padding-horizontal-15">
                        <span class="color-grey">2</span>
                      </div>
                      <div class="odds background-black padding-vertical-10 padding-horizontal-20 margin-left-1">
                        <span class="color-yellow">2.98</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="widthp-33 height-300 flex-inherit align-items-center">
                <div class="heightp-100 widthp-100 round-box flex-column mlb justify-content-center align-items-center">
                  <div class="list-inner flex flex-column flex-inherit heightp-100 justify-content-center align-items-center">
                    <h1 class="round-header-title padding-bottom-20">
                      BASEBALL
                    </h1>
                    <span class="color-grey league-title">NBA</span>
                    <div class="round-team-name">신시내티 VS 피츠버그</div>
                    <span class="color-grey league-datetime padding-bottom-30">
                      2020. 11. 12 AM 03:00
                    </span>
                    <div class="round-score flex flex-inherit">
                      <div class="home background-black padding-vertical-10 padding-horizontal-15">
                        <span class="color-grey">1</span>
                      </div>
                      <div class="odds background-black padding-vertical-10 padding-horizontal-20 margin-left-1 margin-right-20">
                        <span class="color-yellow">2.12</span>
                      </div>

                      <div class="home background-black padding-vertical-10 padding-horizontal-15">
                        <span class="color-grey">2</span>
                      </div>
                      <div class="odds background-black padding-vertical-10 padding-horizontal-20 margin-left-1">
                        <span class="color-yellow">2.98</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="topevent-content flex-inherit flex-column margin-top-20">
              <div class="topevent-content-inner">
                <table>
                  <tbody>
                    <tr class="background-transparent-b-30">
                      <td class="rows border-right widthp-5">
                        <div class="heightp-100 align-items-center flex flex-inherit justify-content-center">
                          {/* <i class="topevent-soccer"></i> */}
                        </div>
                      </td>
                      <td class="rows widthp-5">
                        <span class="color-white">20/11/22</span>
                      </td>
                      <td class="rows widthp-5">
                        <span class="color-red">LIVE</span>
                      </td>
                      <td class="rows widthp-5">
                        <span class="color-white">EPL</span>
                      </td>
                      <td class="rows">
                        <div class="heightp-100 align-items-center justify-content-center flex flex-inherit">
                          <div class="home align-items-center widthp-40 justify-content-end">
                            <span class="color-grey">사라고사</span>
                            <i class="topevent-ico-zaragoza"></i>
                          </div>
                          <div class="score padding-horizontal-30 align-items-center widthp-20 justify-content-center">
                            <span class="color-white">3:2</span>
                          </div>
                          <div class="away align-items-center widthp-40 justify-content-start">
                            <i class="topevent-ico-fuenlabrada"></i>
                            <span class="color-grey">푸엔라브라다</span>
                          </div>
                        </div>
                      </td>
                      <td class="rows round-score widthp-10">
                        <div class="heightp-100 align-items-center flex flex-inherit justify-content-end">
                          <div class="round-score flex flex-inherit">
                            <div class="home background-black padding-vertical-10 padding-horizontal-15">
                              <span class="color-grey">1</span>
                            </div>
                            <div class="odds background-black padding-vertical-10 padding-horizontal-20 margin-right-10">
                              <span class="color-yellow">2.12</span>
                            </div>

                            <div class="home background-black padding-vertical-10 padding-horizontal-15">
                              <span class="color-grey">X</span>
                            </div>
                            <div class="odds background-black padding-vertical-10 padding-horizontal-20 margin-right-10">
                              <span class="color-yellow">3.30</span>
                            </div>

                            <div class="home background-black padding-vertical-10 padding-horizontal-15">
                              <span class="color-grey">2</span>
                            </div>
                            <div class="odds background-black padding-vertical-10 padding-horizontal-20 margin-right-10">
                              <span class="color-yellow">2.98</span>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr class="background-transparent-b-20">
                      <td class="rows border-right widthp-5">
                        <div class="heightp-100 align-items-center flex flex-inherit justify-content-center">
                          {/* <i class="topevent-soccer"></i> */}
                        </div>
                      </td>
                      <td class="rows widthp-5">
                        <span class="color-white">20/11/22</span>
                      </td>
                      <td class="rows widthp-5">
                        <span class="color-red">LIVE</span>
                      </td>
                      <td class="rows widthp-5">
                        <span class="color-white">EPL</span>
                      </td>
                      <td class="rows">
                        <div class="heightp-100 align-items-center justify-content-center flex flex-inherit">
                          <div class="home align-items-center widthp-40 justify-content-end">
                            <span class="color-grey">리즈 유나이티드</span>
                            <i class="topevent-ico-leedsunited"></i>
                          </div>
                          <div class="score padding-horizontal-30 align-items-center widthp-20 justify-content-center">
                            <span class="color-white">0:0</span>
                          </div>
                          <div class="away align-items-center widthp-40 justify-content-start">
                            <i class="topevent-ico-milan"></i>
                            <span class="color-grey">밀란</span>
                          </div>
                        </div>
                      </td>
                      <td class="rows round-score widthp-10">
                        <div class="heightp-100 align-items-center flex flex-inherit justify-content-end">
                          <div class="round-score flex flex-inherit">
                            <div class="home background-black padding-vertical-10 padding-horizontal-15">
                              <span class="color-grey">1</span>
                            </div>
                            <div class="odds background-black padding-vertical-10 padding-horizontal-20 margin-right-10">
                              <span class="color-yellow">2.12</span>
                            </div>

                            <div class="home background-black padding-vertical-10 padding-horizontal-15">
                              <span class="color-grey">X</span>
                            </div>
                            <div class="odds background-black padding-vertical-10 padding-horizontal-20 margin-right-10">
                              <span class="color-yellow">3.30</span>
                            </div>

                            <div class="home background-black padding-vertical-10 padding-horizontal-15">
                              <span class="color-grey">2</span>
                            </div>
                            <div class="odds background-black padding-vertical-10 padding-horizontal-20 margin-right-10">
                              <span class="color-yellow">2.98</span>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr class="background-transparent-b-30">
                      <td class="rows border-right widthp-5">
                        <div class="heightp-100 align-items-center flex flex-inherit justify-content-center">
                          {/* <i class="topevent-soccer"></i> */}
                        </div>
                      </td>
                      <td class="rows widthp-5">
                        <span class="color-white">20/11/22</span>
                      </td>
                      <td class="rows widthp-5">
                        <span class="color-red">LIVE</span>
                      </td>
                      <td class="rows widthp-5">
                        <span class="color-white">EPL</span>
                      </td>
                      <td class="rows">
                        <div class="heightp-100 align-items-center justify-content-center flex flex-inherit">
                          <div class="home align-items-center widthp-40 justify-content-end">
                            <span class="color-grey">삼포리아</span>
                            <i class="topevent-ico-sampdoria"></i>
                          </div>
                          <div class="score padding-horizontal-30 align-items-center widthp-20 justify-content-center">
                            <span class="color-white">0:2</span>
                          </div>
                          <div class="away align-items-center widthp-40 justify-content-start">
                            <i class="topevent-ico-verona"></i>
                            <span class="color-grey">베로나</span>
                          </div>
                        </div>
                      </td>
                      <td class="rows round-score widthp-10">
                        <div class="heightp-100 align-items-center flex flex-inherit justify-content-end">
                          <div class="round-score flex flex-inherit">
                            <div class="home background-black padding-vertical-10 padding-horizontal-15">
                              <span class="color-grey">1</span>
                            </div>
                            <div class="odds background-black padding-vertical-10 padding-horizontal-20 margin-right-10">
                              <span class="color-yellow">2.12</span>
                            </div>

                            <div class="home background-black padding-vertical-10 padding-horizontal-15">
                              <span class="color-grey">X</span>
                            </div>
                            <div class="odds background-black padding-vertical-10 padding-horizontal-20 margin-right-10">
                              <span class="color-yellow">3.30</span>
                            </div>

                            <div class="home background-black padding-vertical-10 padding-horizontal-15">
                              <span class="color-grey">2</span>
                            </div>
                            <div class="odds background-black padding-vertical-10 padding-horizontal-20 margin-right-10">
                              <span class="color-yellow">2.98</span>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr class="background-transparent-b-20">
                      <td class="rows border-right widthp-5">
                        <div class="heightp-100 align-items-center flex flex-inherit justify-content-center">
                          {/* <i class="topevent-soccer"></i> */}
                        </div>
                      </td>
                      <td class="rows widthp-5">
                        <span class="color-white">20/11/22</span>
                      </td>
                      <td class="rows widthp-5">
                        <span class="color-red">LIVE</span>
                      </td>
                      <td class="rows widthp-5">
                        <span class="color-white">EPL</span>
                      </td>
                      <td class="rows">
                        <div class="heightp-100 align-items-center justify-content-center flex flex-inherit">
                          <div class="home align-items-center widthp-40 justify-content-end">
                            <span class="color-grey">첼시</span>
                            <i class="topevent-ico-chelsea"></i>
                          </div>
                          <div class="score padding-horizontal-30 align-items-center widthp-20 justify-content-center">
                            <span class="color-white">0:2</span>
                          </div>
                          <div class="away align-items-center widthp-40 justify-content-start">
                            <i class="topevent-ico-cagliari"></i>
                            <span class="color-grey">칼리아리</span>
                          </div>
                        </div>
                      </td>
                      <td class="rows round-score widthp-10">
                        <div class="heightp-100 align-items-center flex flex-inherit justify-content-end">
                          <div class="round-score flex flex-inherit">
                            <div class="home background-black padding-vertical-10 padding-horizontal-15">
                              <span class="color-grey">1</span>
                            </div>
                            <div class="odds background-black padding-vertical-10 padding-horizontal-20 margin-right-10">
                              <span class="color-yellow">2.12</span>
                            </div>

                            <div class="home background-black padding-vertical-10 padding-horizontal-15">
                              <span class="color-grey">X</span>
                            </div>
                            <div class="odds background-black padding-vertical-10 padding-horizontal-20 margin-right-10">
                              <span class="color-yellow">3.30</span>
                            </div>

                            <div class="home background-black padding-vertical-10 padding-horizontal-15">
                              <span class="color-grey">2</span>
                            </div>
                            <div class="odds background-black padding-vertical-10 padding-horizontal-20 margin-right-10">
                              <span class="color-yellow">2.98</span>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="main-content-popular flex-inherit flex-column padding-horizontal-20">
            <div class="popular-header-inner flex-inherit justify-content-center-inherit align-items-center-inherit padding-vertical-50">
              <div class="popular-header-title align-items-center">
                <div class="title-name">POPULAR SLOTS</div>
              </div>
              <div class="play-tab">
                <button type="button" class="color-yellow padding-right-10">
                  GAMEPLAY
                </button>
                <button type="button" class="color-white">
                  NETENT
                </button>
              </div>
              <div class="all-list">
                <Link to="#" className="color-yellow">
                  SEE ALL <i class="fal fa-angle-double-right"></i>
                </Link>
              </div>
            </div>
            <div class="popular-content-inner flex-inherit align-items-center-inherit margin-bottom-20">
              <div class="widthp-20 height-300 twinspin margin-right-20">
                <div class="justify-content-end heightp-100 end-title flex widthp-100 align-items-center flex-column padding-bottom-20">
                  <span class="color-white">TWINSPIN</span>
                </div>
              </div>

              <div class="widthp-20 height-300 gonzo margin-right-20">
                <div class="justify-content-end heightp-100 end-title flex widthp-100 align-items-center flex-column padding-bottom-20">
                  <span class="color-yellow">GONZO'S QUEST</span>
                </div>
              </div>

              <div class="widthp-20 height-300 dazzle margin-right-20">
                <div class="justify-content-end heightp-100 end-title flex widthp-100 align-items-center flex-column padding-bottom-20">
                  <span class="color-white">DAZZLE ME</span>
                </div>
              </div>

              <div class="widthp-20 height-300 divine margin-right-20">
                <div class="justify-content-end heightp-100 end-title flex widthp-100 align-items-center flex-column padding-bottom-20">
                  <span class="color-white">DIVINE FORTUNE</span>
                </div>
              </div>

              <div class="widthp-20 height-300 fruit">
                <div class="justify-content-end heightp-100 end-title flex widthp-100 align-items-center flex-column padding-bottom-20">
                  <span class="color-white">FRUIT SHOP</span>
                </div>
              </div>
            </div>
            <div class="popular-content-inner flex-inherit align-items-center-inherit">
              <div class="widthp-20 height-300 reelrush margin-right-20">
                <div class="justify-content-end heightp-100 end-title flex widthp-100 align-items-center flex-column padding-bottom-20">
                  <span class="color-white">REEL RUSH</span>
                </div>
              </div>

              <div class="widthp-20 height-300 finnand margin-right-20">
                <div class="justify-content-end heightp-100 end-title flex widthp-100 align-items-center flex-column padding-bottom-20">
                  <span class="color-yellow">FINN AND THE SWIRLY SPIN</span>
                </div>
              </div>

              <div class="widthp-20 height-300 aloha margin-right-20">
                <div class="justify-content-end heightp-100 end-title flex widthp-100 align-items-center flex-column padding-bottom-20">
                  <span class="color-white">ALOHA! CLUSTER PAYS</span>
                </div>
              </div>

              <div class="widthp-20 height-300 jack margin-right-20">
                <div class="justify-content-end heightp-100 end-title flex widthp-100 align-items-center flex-column padding-bottom-20">
                  <span class="color-white">JACK AND THE BEANSTALK</span>
                </div>
              </div>

              <div class="widthp-20 height-300 dead">
                <div class="justify-content-end heightp-100 end-title flex widthp-100 align-items-center flex-column padding-bottom-20">
                  <span class="color-white">FRUIT SHOP</span>
                </div>
              </div>
            </div>
          </div>
          <div class="main-content-livecasino flex-inherit flex-column padding-horizontal-20">
            <div class="livecasino-header-inner flex-inherit padding-vertical-50">
              <div class="livecasino-header-title align-items-center grow-2">
                <div class="title-name">LIVE CASINO</div>
              </div>
              <div class="all-list">
                <Link to="#" className="color-yellow">
                  SEE ALL <i class="fal fa-angle-double-right"></i>
                </Link>
              </div>
            </div>
            <div class="livecasino-content-wrap widthp-100 flex flex-inherit">
              <div class="widthp-40 livecasino-content-inner flex-inherit align-items-center-inherit margin-bottom-20">
                <div class="heightp-100 widthp-100 round-box flex-column baccarat justify-content-center align-items-center">
                  <div class="list-inner flex flex-column flex-inherit heightp-100 justify-content-center align-items-center">
                    <h1 class="round-header-title padding-top-30">BACCARAT</h1>
                    <div class="center-title heightp-100 align-items-center flex-column justify-content-center">
                      <span class="color-white padding-bottom-15">CASINO</span>
                      <div class="round-team-name text-align-center padding-bottom-15">
                        바카라
                      </div>
                      <span class="color-white">
                        두 장의 카드를더한 수의 끝자리가 9에 가까운 쪽이 <br />
                        이기는 게임으로 가장 인기 있는 카지노 게임입니다.
                      </span>
                    </div>
                  </div>
                  <div class="direct-link padding-bottom-30">
                    <Link to="/casino" className="color-yellow">
                      ENTER<i class="fal fa-angle-double-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div class="widthp-60 heightp-100 flex-column livecasino-content-inner flex-inherit align-items-center-inherit margin-left-20 margin-bottom-20">
                <div class="flex-inherit widthp-100 margin-bottom-30">
                  <div class="round-box roulette heightp-250 widthp-50 margin-right-20 justify-content-center align-items-center flex-column">
                    <div class="list-inner flex flex-column flex-inherit heightp-100 justify-content-center align-items-center">
                      <h1 class="round-header-title padding-top-30">
                        ROULETTE
                      </h1>
                      <div class="center-title heightp-100 align-items-center flex-column justify-content-center">
                        <span class="color-white padding-bottom-15">
                          CASINO
                        </span>
                        <div class="round-team-name text-align-center padding-bottom-15">
                          룰렛
                        </div>
                        <span class="color-white text-align-center">
                          37~38개의 눈금으로 나눈 휠을 돌려 볼 이 낙착되는
                          숫자에 <br />
                          배팅하는 대표적인 카지노 게임입니다.
                        </span>
                      </div>
                    </div>
                    <div class="direct-link padding-vertical-20">
                      <Link to="/casino" className="color-yellow">
                        ENTER<i class="fal fa-angle-double-right"></i>
                      </Link>
                    </div>
                  </div>
                  <div class="round-box blackjack heightp-250 widthp-50 justify-content-center align-items-center flex-column">
                    <div class="list-inner flex flex-column flex-inherit heightp-100 justify-content-center align-items-center">
                      <h1 class="round-header-title padding-top-30">
                        BLACKJACK
                      </h1>
                      <div class="center-title heightp-100 align-items-center flex-column justify-content-center">
                        <span class="color-white padding-bottom-15">
                          CASINO
                        </span>
                        <div class="round-team-name text-align-center padding-bottom-15">
                          블랙잭
                        </div>
                        <span class="color-white text-align-center">
                          대표적인 플레잉 카드 게임의 하나로 21을 넘지않는{" "}
                          <br />
                          한도 내에서 숫자가 높으면 이기는 게임입니다
                        </span>
                      </div>
                    </div>
                    <div class="direct-link padding-vertical-20">
                      <Link to="/casino" className="color-yellow">
                        ENTER<i class="fal fa-angle-double-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div class="flex-inherit widthp-100">
                  <div class="round-box dragon heightp-250 widthp-50 margin-right-20 justify-content-center align-items-center flex-column">
                    <div class="list-inner flex flex-column flex-inherit heightp-100 justify-content-center align-items-center">
                      <h1 class="round-header-title padding-top-30">
                        DRAGON TIGER
                      </h1>
                      <div class="center-title heightp-100 align-items-center flex-column justify-content-center">
                        <span class="color-white padding-bottom-15">
                          CASINO
                        </span>
                        <div class="round-team-name text-align-center padding-bottom-15">
                          드래곤타이거
                        </div>
                        <span class="color-white text-align-center">
                          캄보디아에서 처음 소개된 아시아 카지노게임으로 <br />
                          간단한 룰로 인해 쉽고 빠르게 즐길 수 있습니다.
                        </span>
                      </div>
                    </div>
                    <div class="direct-link padding-vertical-20">
                      <Link to="/casino" className="color-yellow">
                        ENTER<i class="fal fa-angle-double-right"></i>
                      </Link>
                    </div>
                  </div>
                  <div class="round-box sicbo heightp-250 widthp-50 justify-content-center align-items-center flex-column">
                    <div class="list-inner flex flex-column flex-inherit heightp-100 justify-content-center align-items-center">
                      <h1 class="round-header-title padding-top-30">SICBO</h1>
                      <div class="center-title heightp-100 align-items-center flex-column justify-content-center">
                        <span class="color-white padding-bottom-15">
                          CASINO
                        </span>
                        <div class="round-team-name text-align-center padding-bottom-15">
                          식보
                        </div>
                        <span class="color-white text-align-center">
                          다이사이로도 불리며 중국의 전통 게임 중 하나로
                          주사위의 <br />
                          개별 또는 통합 점수등을 예측 , 베팅하는 게임입니다.
                        </span>
                      </div>
                    </div>
                    <div class="direct-link padding-vertical-20">
                      <Link to="/casino" className="color-yellow">
                        ENTER<i class="fal fa-angle-double-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="main-content-footer-top flex-inherit background-transparent-b-20 align-items-center-inherit padding-vertical-20 padding-horizontal-20">
            <div class="partner-rows">
              <div class="partner-entwine"></div>
            </div>
            <div class="partner-rows">
              <div class="partner-gameplay"></div>
            </div>
            <div class="partner-rows">
              <div class="partner-microgaming"></div>
            </div>
            <div class="partner-rows">
              <div class="partner-netent"></div>
            </div>
          </div>
          <div class="main-content-footer-inner flex-inherit flex-column padding-horizontal-100">
            <div class="main-content-footer-title">
              <div class="item-title-box widthp-20">
                <div class="item-title-row widthp-100">
                  <h1 class="color-white padding-bottom-20">SPORTS</h1>
                </div>
              </div>
              <div class="item-title-box widthp-20">
                <div class="item-title-row widthp-100">
                  <h1 class="color-white padding-bottom-20">CASINO</h1>
                </div>
              </div>
              <div class="item-title-box widthp-20">
                <div class="item-title-row widthp-100">
                  <h1 class="color-white padding-bottom-20">PROMOTION</h1>
                </div>
              </div>
              <div class="item-title-box widthp-20">
                <div class="item-title-row widthp-100">
                  <h1 class="color-white padding-bottom-20">COMPANY</h1>
                </div>
              </div>
              <div class="item-title-box widthp-20">
                <div class="item-title-row widthp-100">
                  <h1 class="color-white padding-bottom-20">CONTACT US</h1>
                </div>
              </div>
            </div>
            <div class="main-content-footer-content">
              <div class="item-content-box widthp-20 flex-inherit padding-bottom-20">
                <div class="item-content-row flex-column widthp-100">
                  <div>
                    <Link to="#" className="color-grey">
                      Sports Betting
                    </Link>
                  </div>
                  <div>
                    <Link to="#" className="color-grey">
                      Live Betting
                    </Link>
                  </div>
                  <div>
                    <Link to="#" className="color-grey">
                      FootBall
                    </Link>
                  </div>
                  <div>
                    <Link to="#" className="color-grey">
                      Tennis
                    </Link>
                  </div>
                  <div>
                    <Link to="#" className="color-grey">
                      BasketBall
                    </Link>
                  </div>
                  <div>
                    <Link to="#" className="color-grey">
                      Chamnpions League
                    </Link>
                  </div>
                  <div>
                    <Link to="#" className="color-grey">
                      Premier League
                    </Link>
                  </div>
                  <div>
                    <Link to="#" className="color-grey">
                      And More
                    </Link>
                  </div>
                </div>
              </div>
              <div class="item-content-box widthp-20 flex-inherit padding-bottom-20">
                <div class="item-content-row flex-column widthp-100">
                  <div>
                    <Link to="#" className="color-grey">
                      Online Casino
                    </Link>
                  </div>
                  <div>
                    <Link to="#" className="color-grey">
                      Live Casino
                    </Link>
                  </div>
                  <div>
                    <Link to="#" className="color-grey">
                      Online Slots
                    </Link>
                  </div>
                  <div>
                    <Link to="#" className="color-grey">
                      Jackpot Slots
                    </Link>
                  </div>
                </div>
              </div>

              <div class="item-content-box widthp-20 flex-inherit padding-bottom-20">
                <div class="item-content-row flex-column widthp-100">
                  <div>
                    <Link to="#" className="color-grey">
                      Sports
                    </Link>
                  </div>
                  <div>
                    <Link to="#" className="color-grey">
                      Pocker
                    </Link>
                  </div>
                  <div>
                    <Link to="#" className="color-grey">
                      Casino
                    </Link>
                  </div>
                </div>
              </div>
              <div class="item-content-box widthp-20 flex-inherit padding-bottom-20">
                <div class="item-content-row flex-column widthp-100">
                  <div>
                    <Link to="#" className="color-grey">
                      Privacy Notice
                    </Link>
                  </div>
                  <div>
                    <Link to="#" className="color-grey">
                      Cookie Notice
                    </Link>
                  </div>
                  <div>
                    <Link to="#" className="color-grey">
                      User Policy
                    </Link>
                  </div>
                  <div>
                    <Link to="#" className="color-grey">
                      Terms And Conditons
                    </Link>
                  </div>
                  <div>
                    <Link to="#" className="color-grey">
                      Responsible Gambling
                    </Link>
                  </div>
                  <div>
                    <Link to="#" className="color-grey">
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>

              <div class="item-content-box widthp-20 flex-inherit padding-bottom-20">
                <div class="item-content-row flex-column widthp-100">
                  <div class="color-grey">
                    Follow Us On Social Media To Find Out <br />
                    The Lastest Updates on Our Progress.
                  </div>
                  <div class="flex footer-sns">
                    <Link to="#" className="color-grey">
                      <i class="fab fa-telegram"></i>
                    </Link>
                    <Link to="#" className="color-grey">
                      <i class="fab fa-facebook-square"></i>
                    </Link>
                    <Link to="#" className="color-grey">
                      <i class="fab fa-twitter"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div class="main-content-footer-comment border-top height-80 flex-inherit">
              <div class="widthp-100 comment-inner flex-inherit align-items-center ">
                <p class="color-white grow-2">
                  © 2020 TERA. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Main */}
      <div class="main-content-mobile flex flex-inherit flex-column">
        <div class="widthp-100 main-slide-wrap main-content-swiper height-300">
          <Swiper />
        </div>
        <div class="main-content-slotbox flex-inherit flex-column">
          <div class="slotbox-header-inner flex-inherit justify-content-center-inherit align-items-center-inherit padding-vertical-30 padding-horizontal-15">
            <div class="slotbox-header-title align-items-center grow-2 justify-content-start">
              <div class="title-name">TOP EVENTS</div>
            </div>
            <div class="all-list">
              <Link to="#" className="color-yellow">
                SEE ALL <i class="fal fa-angle-double-right"></i>
              </Link>
            </div>
          </div>
          <div class="slow-item widthp-100 height-300 flex-inherit align-items-center padding-horizontal-15">
            <div class="heightp-100 widthp-100 round-box flex-column featured-matches justify-content-center align-items-center">
              <div class="list-inner flex flex-column flex-inherit heightp-100 justify-content-center align-items-center">
                <h1 class="round-header-title padding-bottom-20">
                  FEATURED MATCHES
                </h1>
                <span class="color-grey league-title">
                  ENGLISH PREMIER LEAGUE
                </span>
                <div class="round-team-name">토트넘 VS 아스널</div>
                <span class="color-grey league-datetime padding-bottom-30">
                  2020. 11. 12 AM 03:00
                </span>
                <div class="round-score flex flex-inherit">
                  <div class="home background-black padding-vertical-10 padding-horizontal-15">
                    <span class="color-grey">1</span>
                  </div>
                  <div class="odds background-black padding-vertical-10 padding-horizontal-20 margin-left-1 margin-right-1">
                    <span class="color-yellow">2.12</span>
                  </div>

                  <div class="home background-black padding-vertical-10 padding-horizontal-15">
                    <span class="color-grey">X</span>
                  </div>
                  <div class="odds background-black padding-vertical-10 padding-horizontal-20 margin-left-1 margin-right-1">
                    <span class="color-yellow">3.30</span>
                  </div>

                  <div class="home background-black padding-vertical-10 padding-horizontal-15">
                    <span class="color-grey">2</span>
                  </div>
                  <div class="odds background-black padding-vertical-10 padding-horizontal-20 margin-left-1">
                    <span class="color-yellow">2.98</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="slow-item widthp-100 height-300 flex-inherit align-items-center margin-top-10 padding-horizontal-15">
            <div class="heightp-100 widthp-100 round-box flex-column basketball justify-content-center align-items-center">
              <div class="list-inner flex flex-column flex-inherit heightp-100 justify-content-center align-items-center">
                <h1 class="round-header-title padding-bottom-20">BASKETBALL</h1>
                <span class="color-grey league-title">NBA</span>
                <div class="round-team-name">필라델피아 VS 보스턴</div>
                <span class="color-grey league-datetime padding-bottom-30">
                  2020.11.12 AM 03:00
                </span>
                <div class="round-score flex flex-inherit">
                  <div class="home background-black padding-vertical-10 padding-horizontal-15">
                    <span class="color-grey">1</span>
                  </div>
                  <div class="odds background-black padding-vertical-10 padding-horizontal-20 margin-left-1 margin-right-1">
                    <span class="color-yellow">2.12</span>
                  </div>

                  <div class="home background-black padding-vertical-10 padding-horizontal-15">
                    <span class="color-grey">2</span>
                  </div>
                  <div class="odds background-black padding-vertical-10 padding-horizontal-20 margin-left-1">
                    <span class="color-yellow">2.98</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="slow-item widthp-100 height-300 flex-inherit align-items-center margin-top-10 padding-horizontal-15">
            <div class="heightp-100 widthp-100 round-box flex-column mlb justify-content-center align-items-center">
              <div class="list-inner flex flex-column flex-inherit heightp-100 justify-content-center align-items-center">
                <h1 class="round-header-title padding-bottom-20">BASEBALL</h1>
                <span class="color-grey league-title">NBA</span>
                <div class="round-team-name">신시내티 VS 피츠버그</div>
                <span class="color-grey league-datetime padding-bottom-30">
                  2020.11.12 AM 03:00
                </span>
                <div class="round-score flex flex-inherit">
                  <div class="home background-black padding-vertical-10 padding-horizontal-15">
                    <span class="color-grey">1</span>
                  </div>
                  <div class="odds background-black padding-vertical-10 padding-horizontal-20 margin-left-1 margin-right-1">
                    <span class="color-yellow">2.12</span>
                  </div>

                  <div class="home background-black padding-vertical-10 padding-horizontal-15">
                    <span class="color-grey">2</span>
                  </div>
                  <div class="odds background-black padding-vertical-10 padding-horizontal-20 margin-left-1">
                    <span class="color-yellow">2.98</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="topevent-content flex-inherit flex-column margin-top-20 padding-horizontal-15">
            <div class="topevent-content-inner">
              <table>
                <tbody>
                  <tr class="background-transparent-b-20">
                    <td class="rows">
                      <div class="heightp-100 align-items-center justify-content-center flex flex-inherit">
                        <div class="grow-2 padding-left-10 align-items-center">
                          {/* <i class="topevent-soccer"></i> */}
                          <span class="color-white padding-left-5">
                            <strong>EPL (20/11/22)</strong>
                          </span>
                        </div>
                        <div class="padding-right-10 align-items-center">
                          <span class="color-red">
                            <strong>LIVE</strong>
                          </span>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr class="background-transparent-b-30">
                    <td class="rows">
                      <div class="heightp-100 align-items-center justify-content-center flex flex-inherit">
                        <div class="home align-items-center">
                          <span class="color-grey">사라고사</span>
                          <i class="topevent-ico-zaragoza"></i>
                        </div>
                        <div class="score padding-horizontal-30 align-items-center">
                          <span class="color-white">3:2</span>
                        </div>
                        <div class="away align-items-center">
                          <i class="topevent-ico-fuenlabrada"></i>
                          <span class="color-grey">푸엔라브라다</span>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr class="background-transparent-b-20">
                    <td class="rows">
                      <div class="heightp-100 align-items-center flex flex-inherit justify-content-center">
                        <div class="round-score flex flex-inherit">
                          <div class="home background-black padding-vertical-10 padding-horizontal-15 margin-left-10">
                            <span class="color-grey">1</span>
                          </div>
                          <div class="odds background-black padding-vertical-10 padding-horizontal-20 margin-right-10">
                            <span class="color-yellow">2.12</span>
                          </div>

                          <div class="home background-black padding-vertical-10 padding-horizontal-15">
                            <span class="color-grey">X</span>
                          </div>
                          <div class="odds background-black padding-vertical-10 padding-horizontal-20 margin-right-10">
                            <span class="color-yellow">3.30</span>
                          </div>

                          <div class="home background-black padding-vertical-10 padding-horizontal-15">
                            <span class="color-grey">2</span>
                          </div>
                          <div class="odds background-black padding-vertical-10 padding-horizontal-20 margin-right-10">
                            <span class="color-yellow">2.98</span>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="main-content-popular flex-inherit flex-column padding-horizontal-15">
          <div class="popular-header-inner flex-inherit justify-content-center-inherit align-items-center-inherit padding-vertical-30">
            <div class="popular-header-title align-items-center grow-2 justify-content-start">
              <div class="title-name">POPULAR SLOTS</div>
            </div>
            <div class="all-list">
              <Link to="#" className="color-yellow">
                SEE ALL <i class="fal fa-angle-double-right"></i>
              </Link>
            </div>
          </div>
          <div class="popular-content-inner flex-column flex-inherit align-items-center-inherit">
            <div class="popular-item-box widthp-100 flex-inherit">
              <div class="widthp-50 height-200 twinspin margin-right-10">
                <div class="justify-content-end heightp-100 end-title flex widthp-100 align-items-center flex-column padding-bottom-20">
                  <span class="color-white">TWINSPIN</span>
                </div>
              </div>

              <div class="widthp-50 height-200 gonzo">
                <div class="justify-content-end heightp-100 end-title flex widthp-100 align-items-center flex-column padding-bottom-20">
                  <span class="color-yellow">GONZO'S QUEST</span>
                </div>
              </div>
            </div>

            <div class="popular-item-box widthp-100 flex-inherit margin-top-10">
              <div class="widthp-50 height-200 dazzle margin-right-10">
                <div class="justify-content-end heightp-100 end-title flex widthp-100 align-items-center flex-column padding-bottom-20">
                  <span class="color-white">DAZZLE ME</span>
                </div>
              </div>

              <div class="widthp-50 height-200 divine">
                <div class="justify-content-end heightp-100 end-title flex widthp-100 align-items-center flex-column padding-bottom-20">
                  <span class="color-white">DIVINE FORTUNE</span>
                </div>
              </div>
            </div>

            <div class="popular-item-box widthp-100 flex-inherit margin-top-10">
              <div class="widthp-50 height-200 fruit margin-right-10">
                <div class="justify-content-end heightp-100 end-title flex widthp-100 align-items-center flex-column padding-bottom-20">
                  <span class="color-white">FRUIT SHOP</span>
                </div>
              </div>

              <div class="widthp-50 height-200 reelrush">
                <div class="justify-content-end heightp-100 end-title flex widthp-100 align-items-center flex-column padding-bottom-20">
                  <span class="color-white">REEL RUSH</span>
                </div>
              </div>
            </div>

            <div class="popular-item-box widthp-100 flex-inherit margin-top-10">
              <div class="widthp-50 height-200 finnand margin-right-10 text-align-center">
                <div class="justify-content-end heightp-100 end-title flex widthp-100 align-items-center flex-column padding-bottom-20">
                  <span class="color-white">FINN AND THE SWIRLY SPIN</span>
                </div>
              </div>

              <div class="widthp-50 height-200 aloha">
                <div class="justify-content-end heightp-100 end-title flex widthp-100 align-items-center flex-column padding-bottom-20">
                  <span class="color-white">ALOHA! CLUSTER PAYS</span>
                </div>
              </div>
            </div>

            <div class="popular-item-box widthp-100 flex-inherit margin-top-10">
              <div class="widthp-50 height-200 jack margin-right-10 text-align-center">
                <div class="justify-content-end heightp-100 end-title flex widthp-100 align-items-center flex-column padding-bottom-20">
                  <span class="color-white">JACK AND THE BEANSTALK</span>
                </div>
              </div>

              <div class="widthp-50 height-200 dead">
                <div class="justify-content-end heightp-100 end-title flex widthp-100 align-items-center flex-column padding-bottom-20">
                  <span class="color-white">DEAD OR ALIVE 2</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="main-content-livecasino flex-inherit flex-column padding-horizontal-15">
          <div class="livecasino-header-inner flex-inherit padding-vertical-30">
            <div class="livecasino-header-title align-items-center grow-2">
              <div class="title-name">LIVE CASINO</div>
            </div>
            <div class="all-list">
              <Link to="#" className="color-yellow">
                SEE ALL <i class="fal fa-angle-double-right"></i>
              </Link>
            </div>
          </div>
          <div class="livecasino-content-wrap widthp-100 flex flex-column flex-inherit">
            <div class="widthp-100 livecasino-content-inner flex-inherit align-items-center-inherit margin-bottom-10">
              <div class="heightp-100 widthp-100 round-box flex-column baccarat justify-content-center align-items-center">
                <div class="list-inner flex flex-column flex-inherit heightp-100 justify-content-center align-items-center">
                  <h1 class="round-header-title padding-top-30">BACCARAT</h1>
                  <div class="center-title heightp-100 align-items-center flex-column justify-content-center">
                    <span class="color-white padding-bottom-15">CASINO</span>

                    <div class="round-team-name text-align-center padding-bottom-15">
                      바카라
                    </div>
                    <span class="color-white">
                      두 장의 카드를더한 수의 끝자리가 9에 가까운 쪽이 <br />
                      이기는 게임으로 가장 인기 있는 카지노 게임입니다.
                    </span>
                  </div>
                </div>
                <div class="direct-link padding-vertical-15">
                  <Link to="/casino" className="color-yellow">
                    ENTER
                    <i class="fal fa-angle-double-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div class="livecasino-item-box livecasino-content-inner widthp-100 flex-inherit margin-top-10">
              <div class="round-box roulette heightp-250 widthp-50 margin-right-10 justify-content-center align-items-center flex-column">
                <div class="list-inner flex flex-column flex-inherit heightp-100 justify-content-center align-items-center">
                  <h1 class="round-header-title padding-top-30">ROULETTE</h1>
                  <div class="center-title heightp-100 align-items-center flex-column justify-content-center">
                    <span class="color-white padding-bottom-15">CASINO</span>

                    <div class="round-team-name text-align-center padding-bottom-15">
                      룰렛
                    </div>
                    <span class="color-white text-align-center">
                      37~38개의 눈금으로 나눈 휠을 돌려 볼 이 낙착되는 숫자에{" "}
                      <br />
                      배팅하는 대표적인 카지노 게임입니다.
                    </span>
                  </div>
                </div>
                <div class="direct-link padding-vertical-20">
                  <Link to="/casino" className="color-yellow">
                    ENTER
                    <i class="fal fa-angle-double-right"></i>
                  </Link>
                </div>
              </div>

              <div class="round-box blackjack heightp-250 widthp-50 justify-content-center align-items-center flex-column">
                <div class="list-inner flex flex-column flex-inherit heightp-100 justify-content-center align-items-center">
                  <h1 class="round-header-title padding-top-30">BLACKJACK</h1>
                  <div class="center-title heightp-100 align-items-center flex-column justify-content-center">
                    <span class="color-white padding-bottom-15">CASINO</span>

                    <div class="round-team-name text-align-center padding-bottom-15">
                      블랙잭
                    </div>
                    <span class="color-white text-align-center">
                      대표적인 플레잉 카드 게임의 하나로 21을 넘지않는 <br />
                      한도 내에서 숫자가 높으면 이기는 게임입니다
                    </span>
                  </div>
                </div>
                <div class="direct-link padding-vertical-20">
                  <Link to="/casino" className="color-yellow">
                    ENTER
                    <i class="fal fa-angle-double-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div class="livecasino-item-box livecasino-content-inner widthp-100 flex-inherit margin-top-10">
              <div class="round-box dragon heightp-250 widthp-50 margin-right-10 justify-content-center align-items-center flex-column">
                <div class="list-inner flex flex-column flex-inherit heightp-100 justify-content-center align-items-center">
                  <h1 class="round-header-title padding-top-30">
                    DRAGON TIGER
                  </h1>
                  <div class="center-title heightp-100 align-items-center flex-column justify-content-center">
                    <span class="color-white padding-bottom-15">CASINO</span>

                    <div class="round-team-name text-align-center padding-bottom-15">
                      드래곤타이거
                    </div>
                    <span class="color-white text-align-center">
                      캄보디아에서 처음 소개된 아시아 카지노게임으로 <br />
                      간단한 룰로 인해 쉽고 빠르게 즐길 수 있습니다.
                    </span>
                  </div>
                </div>
                <div class="direct-link padding-vertical-20">
                  <Link to="/casino" className="color-yellow">
                    ENTER
                    <i class="fal fa-angle-double-right"></i>
                  </Link>
                </div>
              </div>

              <div class="round-box sicbo heightp-250 widthp-50 justify-content-center align-items-center flex-column">
                <div class="list-inner flex flex-column flex-inherit heightp-100 justify-content-center align-items-center">
                  <h1 class="round-header-title padding-top-30">SICBO</h1>
                  <div class="center-title heightp-100 align-items-center flex-column justify-content-center">
                    <span class="color-white padding-bottom-15">CASINO</span>

                    <div class="round-team-name text-align-center padding-bottom-15">
                      식보
                    </div>
                    <span class="color-white text-align-center">
                      다이사이로도 불리며 중국의 전통 게임 중 하나로 주사위의{" "}
                      <br />
                      개별 또는 통합 점수등을 예측 , 베팅하는 게임입니다.
                    </span>
                  </div>
                </div>
                <div class="direct-link padding-vertical-20">
                  <Link to="/casino" className="color-yellow">
                    ENTER
                    <i class="fal fa-angle-double-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
