import React, { Fragment, useEffect, useState, useContext } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { chain } from "lodash";
import moment from "moment";
import Select from "react-select";
import { mapStateToProps, mapDispatchProps } from "../../../redux/store";
import sportsModel from "../../../models/sportsModel";
import MenuContext from "../../../contexts/Menu.context";
import { refreshToken } from "../../../redux/user/userActions";
import { fetchSportsdetail, fetchSportsdetails, sportDetailReset, setBetDetails, setBetOutcome, validateBet, setTypeId } from "../../../redux/sportsdetail/sportsdetailActions";
import { iconsList } from "../../../helpers/object";
import { fetchMatches } from "../../../redux/sport/sportActions";


const Sports = (props) => {
  let isSubscribed = true;
  const dispatch = useDispatch();
  const model = new sportsModel();
  const context = useContext(MenuContext);
  // let sports = useSelector((state) => state.sportsdetail);
  let sports = useSelector((state) => state.sport);
  let user = useSelector((state) => state.user.user);


  useEffect(() => {
    isSubscribed = true;

    if (user.isAuth) {
      dispatch(refreshToken())
    }
    dispatch(fetchMatches())
    // dispatch(validateBet(sports.data.bet))
    dispatch(setTypeId(null))
    return () => {
      isSubscribed = false;
    };
  }, []);



  const setDetail = async (item) => {
    if (sports.data.detail === item.id && context.state.detailMenu === true) {
      dispatch(sportDetailReset());
      context.actions.setdetailMenu(false);

    } else {
      dispatch(fetchSportsdetail(item.id));
      context.actions.setdetailMenu(true);
    }
  };

  const scrollRight = () => {
    document.getElementById('scrollmenu').scrollLeft += 250;
  };
  const scrollLeft = () => {
    document.getElementById('scrollmenu').scrollLeft -= 250;
  };


  const setBet = (e) => {
    let match_id = e.currentTarget.getAttribute("data-match-id");
    let market_id = e.currentTarget.getAttribute("data-market-id");
    let outcome_id = e.currentTarget.getAttribute("data-outcome-id");
    let odds = e.currentTarget.getAttribute("data-odds");
    let home_team = e.currentTarget.getAttribute("data-home-team");
    let away_team = e.currentTarget.getAttribute("data-away-team");
    let market_name = e.currentTarget.getAttribute("data-market_name");
    let outcome_name = e.currentTarget.getAttribute("data-outcome_name");
    let specifier = e.currentTarget.getAttribute("data-specifier");
    let market_type = e.currentTarget.getAttribute("data-market-type");
    let name_id = e.currentTarget.getAttribute("data-name-id");

    let data = {
      oldOdds: null,
      outcome_id: outcome_id,
      match_id: match_id,
      market_id: market_id,
      odds: odds,
      home_team: home_team,
      away_team: away_team,
      market_name: market_name,
      outcome_name: outcome_name,
      specifier: specifier,
      market_type: market_type,
      outcome_name_id: name_id
    }
    dispatch(setBetOutcome(data))
  };

  const sportsData = (markets) => {
    console.log(markets)
  }

  return (
    <Fragment>
      <div class="content games-book-continer flex flex-inherit grow-2 flex-column">
        <div class="content-header prematch-header-desktop shrink-0 border-bottom height-50 align-items-center padding-horizontal-10 background-transparent-b-25 border-left">
          <span class="color-grey">
            <i class="far fa-running"></i>SPORTS
          </span>
        </div>
        <div
          class={
            sports.data.detail_data
              ? "prematch-wrap prematch-content-desktop border-top flex-row flex-inherit view-detail"
              : "prematch-wrap prematch-content-desktop border-top flex-row flex-inherit"
          }
        >
          <div class="prematch-content flex-column border-right-rb">
            <div class="prematch-header flex-inherit flex-column padding-top-10 padding-left-10 padding-right-10">
              <div class="event-slider flex-column widthp-100">
                <div class="flex event-list height-80 align-items-center background-transparent-b-30 border-bottom">
                  <button
                    class="page-left btn-0 heightp-100 padding-vertical-40 padding-horizontal-25 background-transparent-b-20 flex align-items-center justify-content-center"
                    onClick={() => { scrollLeft() }}
                  >
                    <i class="fas fa-chevron-left margin-0 color-white"></i>
                  </button>
                  <div id="scrollmenu" class="heightp-100 flex align-items-center">
                    {iconsList.icons.map((icon, index) => {
                      return <a key={"icon-"+index} href="#icon" onClick={() => {
                        dispatch(setTypeId(icon.id))
                        dispatch(fetchSportsdetails({ page: 1, id: icon.id }));
                      }}>
                        <span class={icon.icon}></span>
                        <span class="event-count">Count</span>
                      </a>
                    }
                    )}

                  </div>
                  <button
                    class="page-right btn-0 heightp-100 padding-vertical-40 padding-horizontal-25 background-transparent-b-20 flex align-items-center justify-content-center"
                    onClick={() => { scrollRight() }}
                  >
                    <i class="fas fa-chevron-right margin-0 color-white"></i>
                  </button>
                </div>
                <div class="flex height-40 padding-horizontal-10 align-items-center background-transparent-b-20 border-top">
                  <div class="flex">
                    <span class="color-grey">
                      <i class="fas fa-calendar-check"></i>PREMATCH : ALL EVENTS
                    </span>
                  </div>
                  <div class="flex grow-2 justify-content-end">
                    <span class="color-green">1168</span>
                    <span class="color-grey">개의 경기가 진행 중 입니다</span>
                  </div>
                </div>
              </div>
              <div class="settings padding-vertical-10 height-60 flex-inherit">
                <div class="setting-btn grow-2">
                  <button class="btn-0 widthp-18 background-transparent-b-30 color-grey padding-5 active">
                    <span>
                      <i class="fas fa-check color-green"></i>
                      <span class="text text-media">All Matches</span>
                    </span>
                  </button>
                  <button class="btn-0 widthp-18 background-transparent-b-30 color-grey padding-5">
                    <span>
                      <i class="fas fa-star color-yellow"></i>
                      <span class="text text-media">Bookmarked</span>
                    </span>
                  </button>
                  <button class="btn-0 widthp-18 background-transparent-b-30 color-grey padding-5 margin-left-5 active">
                    <span>
                      <i class="fad fa-stopwatch color-grey"></i>
                      <span class="text text-media">시간순 정렬</span>
                    </span>
                  </button>
                  <button class="btn-0 widthp-18 background-transparent-b-30 color-grey padding-5">
                    <span>
                      <i class="fad fa-flag color-blue"></i>
                      <span class="text text-media">리그순 정렬</span>
                    </span>
                  </button>
                </div>
                <div class="search">
                  <input
                    type="text"
                    class="input-form width-200"
                    name="skeyword"
                    placeholder="팀명 또는 리그명을 입력하세요"
                    required
                  />
                  <button class="search-btn heightp-100 background-transparent-b-30">
                    <span class="color-grey">
                      <i class="fas fa-search margin-0"></i>
                    </span>
                  </button>
                </div>
              </div>
              <div class="prematch-view-select flex-inherit margin-bottom-10">
                <div class="grow-2"></div>
                <div class="flex height-40">
                  <select name="view-select" id="view-select">
                    <option>승무패</option>
                    <option>핸디캡</option>
                    <option>언더오버</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="prematch-list border-bottom match-list grow-2 padding-left-10 padding-right-10 padding-bottom-10 scrollable-auto flex-column">
              {/* {console.log(sports.mainMarkets)} */}
              {sports.mainMarkets.length > 0
                ? sports.mainMarkets.map((matches, index) => {
                  let sport_main_market_exists = false
                  // console.log(matches)
                  var rows = [];
                  rows.push(
                    <div
                      class="flex title background-transparent-b-30 height-40 align-items-center-inherit"
                      key={matches.id}
                    >
                      <div class="flex padding-horizontal-10 widthp-45 heightp-100">
                        <span class="color-grey">
                          <i class="far fa-calendar-week"></i>
                          {moment(matches.startAt).format("YY / MM / DD")}
                        </span>
                      </div>
                      <div class="flex widthp-55">
                        <div class="flex widthp-100 title-info">
                          <div class="flex flex-inherit align-items-center-inherit justify-content-center-inherit">
                            <div class="widthp-33 padding-5 margin-right-2">
                              <div class="flex">
                                <span class="color-twhite">1</span>
                              </div>
                            </div>
                            <div class="widthp-33 padding-5 margin-right-2">
                              <div class="flex">
                                <span class="color-twhite">x</span>
                              </div>
                            </div>
                            <div class="widthp-33 padding-5 margin-right-2">
                              <div class="flex">
                                <span class="color-twhite">2</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                  rows.push(
                    matches.matches.map((match, key) => {
                      let homeTeam = sports.competitors.data ? sports.competitors.data.find(x => x.id == match.homeTeamId).competitor.name.ko : "";
                      let awayTeam = sports.competitors.data ? sports.competitors.data.find(x => x.id == match.awayTeamId).competitor.name.ko : "";
                      // console.log(match)

                      return (
                        <div
                          class="flex list background-transparent-b-30 height-40"
                          data-type="0"
                          data-id="0"
                          data-home-competitor="0"
                          data-away-competitor="0"
                          key={"match_id-" + match.id}
                        >
                          <div class="flex flex-inherit widthp-45 align-items-center-inherit heightp-100">
                            <div class="date justify-content-center">
                              <span class="color-grey">
                                {moment(match.startAt).format("HH:mm")}
                              </span>
                            </div>
                            <div class="league-icon justify-content-center">
                              <i class="far fa-flag margin-0 color-yellow"></i>
                            </div>
                            <div class="league padding-horizontal-5">
                              <span class="color-grey text-ellipsis">
                                {/* {match.tournament.title["ko"]} */}
                                {sports.tournaments.data ? sports.tournaments.data.find(x => x.id == match.tournamentId).tournament.name.ko : ""}
                                {/* {match.tournamentId} */}

                              </span>
                            </div>
                            <div class="team padding-horizontal-5">
                              <span class="color-grey text-ellipsis">
                                {homeTeam}
                                <span class="color-twhite margin-horizontal-5">vs</span>
                                {awayTeam}
                              </span>
                            </div>
                          </div>
                          <div class="flex widthp-55">
                            <div class="flex widthp-100 market-default">
                              <div class="flex flex-inherit align-items-center-inherit padding-vertical-2">
                                <div class="flex pick-wrap flex-inherit align-items-center-inherit justify-content-center-inherit widthp-100">

                                  {match.mainMarkets['1X2'].length != 0 ?
                                    match.mainMarkets['1X2'].map((market, market_index) => {

                                      if (market.status == 1) {
                                        return (market.outcomes.map((outcome, outcomes_index) => {
                                          let outcomeName = sports.outcomes.data ? sports.outcomes.data.find(x => x.id == outcome.outcomeId).outcomeName.ko : ""
                                          // console.log(outcome)
                                          return (
                                            <div key={"outcome_id-active-1x2-" + outcome.id}
                                              class=" widthp-33 pick padding-horizontal-5 heightp-100 background-transparent-w-5 margin-right-2">
                                              <div class="flex flex-inherit flex-row widthp-100 heightp-100 align-items-center">
                                                <div class="team-1 widthp-70 text-ellipsis">
                                                  <span class="color-grey text-ellipsis">
                                                    {sports.outcomes != [] ?
                                                      outcomeName == '{$competitor1}' ?
                                                        homeTeam
                                                        : outcomeName == '드로' ?
                                                          '무승부' : outcomeName == '{$competitor2}' ?
                                                            awayTeam : ""
                                                      : ""}
                                                  </span>
                                                </div>
                                                <div class="team-odds widthp-30 text-ellipsis justify-content-end padding-horizontal-2">
                                                  {outcome.oldOdds == null ?
                                                    "" :
                                                    outcome.oldOdds < outcome.odds ?
                                                      <span class="odds-change flash odds-up"><i class="fas fa-long-arrow-up color-green"></i></span> :
                                                      <span class="odds-change flash odds-down"><i class="fas fa-long-arrow-down color-red"></i></span>}

                                                  <span class="color-grey text-ellipsis">{outcome.odds} </span>
                                                </div>
                                              </div>
                                            </div>
                                          )
                                        })
                                        )
                                      } else {
                                        return (market.outcomes.map((outcome, outcomes_index) => {
                                          let outcomeName = sports.outcomes.data.find(x => x.id == outcome.outcomeId).outcomeName.ko
                                          // console.log(outcome)
                                          return (
                                            <div key={"outcome_id-active-1x2-" + outcome.id}
                                              class=" disabled widthp-33 pick padding-horizontal-5 heightp-100 background-transparent-w-5 margin-right-2">
                                              <div class="flex flex-inherit flex-row widthp-100 heightp-100 align-items-center">
                                                <div class="team-1 widthp-70 text-ellipsis">
                                                  <span class="color-grey text-ellipsis">
                                                    {sports.outcomes != [] ?
                                                      outcomeName == '{$competitor1}' ?
                                                        homeTeam
                                                        : outcomeName == '드로' ?
                                                          '무승부' : outcomeName == '{$competitor2}' ?
                                                            awayTeam : ""
                                                      : ""}
                                                  </span>
                                                </div>
                                                <div class="team-odds widthp-30 text-ellipsis justify-content-end padding-horizontal-2">
                                                  {outcome.oldOdds == null ?
                                                    "" :
                                                    outcome.oldOdds < outcome.odds ?
                                                      <span class="odds-change flash odds-up"><i class="fas fa-long-arrow-up color-green"></i></span> :
                                                      <span class="odds-change flash odds-down"><i class="fas fa-long-arrow-down color-red"></i></span>}

                                                  <span class="color-grey text-ellipsis">{outcome.odds} </span>
                                                </div>
                                              </div>
                                            </div>
                                          )
                                        })
                                        )

                                      }

                                    })

                                    : match.mainMarkets['hcp'].length != 0 ?
                                      match.mainMarkets['hcp'].map((market, market_index) => {
                                        if (sport_main_market_exists == false) {
                                          sport_main_market_exists = true;
                                          if (market.status == 1) {
                                            return (market.outcomes.map((outcome, outcomes_index) => {
                                              let outcomeName = sports.outcomes.data ? sports.outcomes.data.find(x => x.id == outcome.outcomeId).outcomeName.ko : ""
                                              // console.log(outcome)
                                              return (
                                                <div key={"outcome_id-active-1x2-" + outcome.id}
                                                  class=" widthp-50 pick padding-horizontal-5 heightp-100 background-transparent-w-5 margin-right-2">
                                                  <div class="flex flex-inherit flex-row widthp-100 heightp-100 align-items-center">
                                                    <div class="team-1 widthp-70 text-ellipsis">
                                                      <span class="color-grey text-ellipsis">
                                                        {outcomeName.includes('{$competitor1}') ?
                                                          outcomeName.replaceAll('{$competitor1}', homeTeam)
                                                          : outcomeName.includes('{$competitor2}') ? outcomeName.replaceAll('{$competitor2}', awayTeam)
                                                            : ""}
                                                      </span>
                                                    </div>
                                                    <div class="team-odds widthp-30 text-ellipsis justify-content-end padding-horizontal-2">
                                                      {outcome.oldOdds == null ?
                                                        "" :
                                                        outcome.oldOdds < outcome.odds ?
                                                          <span class="odds-change flash odds-up"><i class="fas fa-long-arrow-up color-green"></i></span> :
                                                          <span class="odds-change flash odds-down"><i class="fas fa-long-arrow-down color-red"></i></span>}

                                                      <span class="color-grey text-ellipsis">{outcome.odds} </span>
                                                    </div>
                                                  </div>
                                                </div>
                                              )
                                            })
                                            )
                                          } else {
                                            return (market.outcomes.map((outcome, outcomes_index) => {
                                              let outcomeName = sports.outcomes.data ? sports.outcomes.data.find(x => x.id == outcome.outcomeId).outcomeName.ko : ""
                                              // console.log(outcome)
                                              return (
                                                <div key={"outcome_id-active-1x2-" + outcome.id}
                                                  class="disabled widthp-50 pick padding-horizontal-5 heightp-100 background-transparent-w-5 margin-right-2">
                                                  <div class="flex flex-inherit flex-row widthp-100 heightp-100 align-items-center">
                                                    <div class="team-1 widthp-70 text-ellipsis">
                                                      <span class="color-grey text-ellipsis">
                                                        {outcomeName.includes('{$competitor1}') ?
                                                          outcomeName.replaceAll('{$competitor1}', homeTeam)
                                                          : outcomeName.includes('{$competitor2}') ? outcomeName.replaceAll('{$competitor2}', awayTeam)
                                                            : ""}
                                                      </span>
                                                    </div>
                                                    <div class="team-odds widthp-30 text-ellipsis justify-content-end padding-horizontal-2">
                                                      {outcome.oldOdds == null ?
                                                        "" :
                                                        outcome.oldOdds < outcome.odds ?
                                                          <span class="odds-change flash odds-up"><i class="fas fa-long-arrow-up color-green"></i></span> :
                                                          <span class="odds-change flash odds-down"><i class="fas fa-long-arrow-down color-red"></i></span>}

                                                      <span class="color-grey text-ellipsis">{outcome.odds} </span>
                                                    </div>
                                                  </div>
                                                </div>
                                              )
                                            })
                                            )
                                          }

                                        }

                                      })
                                      :
                                      match.mainMarkets['total'].length != 0 ?
                                        match.mainMarkets['total'].map((market, market_index) => {
                                          if (sport_main_market_exists == false) {
                                            sport_main_market_exists = true;
                                            if (market.status == 1) {
                                              return (market.outcomes.map((outcome, outcomes_index) => {
                                                let outcomeName = sports.outcomes.data ? sports.outcomes.data.find(x => x.id == outcome.outcomeId).outcomeName.ko : ""
                                                // console.log(outcome)
                                                return (
                                                  <div key={"outcome_id-active-1x2-" + outcome.id}
                                                    class=" widthp-50 pick padding-horizontal-5 heightp-100 background-transparent-w-5 margin-right-2">
                                                    <div class="flex flex-inherit flex-row widthp-100 heightp-100 align-items-center">
                                                      <div class="team-1 widthp-70 text-ellipsis">
                                                        <span class="color-grey text-ellipsis">
                                                          {outcomeName.includes('{$competitor1}') ?
                                                            outcomeName.replaceAll('{$competitor1}', homeTeam)
                                                            : outcomeName.includes('{$competitor2}') ? outcomeName.replaceAll('{$competitor2}', awayTeam)
                                                              : ""}
                                                        </span>
                                                      </div>
                                                      <div class="team-odds widthp-30 text-ellipsis justify-content-end padding-horizontal-2">
                                                        {outcome.oldOdds == null ?
                                                          "" :
                                                          outcome.oldOdds < outcome.odds ?
                                                            <span class="odds-change flash odds-up"><i class="fas fa-long-arrow-up color-green"></i></span> :
                                                            <span class="odds-change flash odds-down"><i class="fas fa-long-arrow-down color-red"></i></span>}

                                                        <span class="color-grey text-ellipsis">{outcome.odds} </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                )
                                              })
                                              )
                                            } else {
                                              return (market.outcomes.map((outcome, outcomes_index) => {
                                                let outcomeName = sports.outcomes.data ? sports.outcomes.data.find(x => x.id == outcome.outcomeId).outcomeName.ko : ""
                                                // console.log(outcome)
                                                return (
                                                  <div key={"outcome_id-active-1x2-" + outcome.id}
                                                    class="disabled widthp-50 pick padding-horizontal-5 heightp-100 background-transparent-w-5 margin-right-2">
                                                    <div class="flex flex-inherit flex-row widthp-100 heightp-100 align-items-center">
                                                      <div class="team-1 widthp-70 text-ellipsis">
                                                        <span class="color-grey text-ellipsis">
                                                          {outcomeName.includes('{$competitor1}') ?
                                                            outcomeName.replaceAll('{$competitor1}', homeTeam)
                                                            : outcomeName.includes('{$competitor2}') ? outcomeName.replaceAll('{$competitor2}', awayTeam)
                                                              : ""}
                                                        </span>
                                                      </div>
                                                      <div class="team-odds widthp-30 text-ellipsis justify-content-end padding-horizontal-2">
                                                        {outcome.oldOdds == null ?
                                                          "" :
                                                          outcome.oldOdds < outcome.odds ?
                                                            <span class="odds-change flash odds-up"><i class="fas fa-long-arrow-up color-green"></i></span> :
                                                            <span class="odds-change flash odds-down"><i class="fas fa-long-arrow-down color-red"></i></span>}

                                                        <span class="color-grey text-ellipsis">{outcome.odds} </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                )
                                              })
                                              )
                                            }

                                          }

                                        })
                                        :
                                        [homeTeam, awayTeam].map((outcome, outcomes_index) => {
                                          return (
                                            <div key={outcomes_index} class="disabled widthp-50 pick padding-horizontal-5 heightp-100 background-transparent-w-5 margin-right-2"  >
                                              <div class="flex flex-inherit flex-row widthp-100 heightp-100 align-items-center">
                                                <div class="team-1 widthp-70 text-ellipsis"><span class="color-grey text-ellipsis">{outcome}</span></div>
                                                <div class="team-odds widthp-30 text-ellipsis justify-content-end padding-horizontal-2">
                                                  <span class="color-grey text-ellipsis">0</span>
                                                </div>
                                              </div>
                                            </div>
                                          )
                                        })


                                  }
                                </div>
                              </div>

                              <div class="flex justify-content-center-inherit align-items-center-inherit padding-vertical-2 padding-left-0 padding-right-0 market-count">
                                <div
                                  // className={
                                  //   match.id === sports.data.detail
                                  //     ? "flex market-detail widthp-100 margin-right-2 active"
                                  //     : "flex market-detail widthp-100 margin-right-2"
                                  // }
                                  className="flex market-detail widthp-100 margin-right-2"
                                  data-id="0"
                                // onClick={() => setDetail(match)}
                                >
                                  <button
                                    class='color-grey'
                                  // className={
                                  //   match.id === sports.data.detail
                                  //     ? "color-white"
                                  //     : "color-grey"
                                  // }
                                  >
                                    {/* +{match.markets} */}
                                    +0000
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  );

                  return rows;
                })
                : <div class="flex justify-content-center heightp-100 align-items-center"><i class="fa fa-spinner fa-spin fa-4x fa-fw color-grey"></i></div>}
            </div>

            <div class="bottom-wrap border-top flex flex-inherit height-60 padding-10 align-items-center-inherit0">
              <div class="pagination widthp-100 flex-inherit justify-content-end">
                <div class="flex selectBox">
                  {/* <Select
                    className="select-container select-position"
                    classNamePrefix="select-box"
                    value={{ label: sports.data.page, value: sports.data.page }}
                    onChange={(e)=>{
                      alert(sports.type_id);
                      if (sports.type_id == null) {
                        dispatch(fetchSportsdetails({ page: e.value }));
                      } else {
                        dispatch(fetchSportsdetails({ page: e.value, id: sports.type_id }));
                      }
                    }}
                    options={((rows, i, len) => {
                      while (++i <= len) {
                        rows.push({ value: i, label: i });
                      }
                      return rows;
                    })([], 0, sports.data.lastPage)}
                  /> */}
                </div>
                <div class="grow-2"></div>
                <div class="flex page">
                  <button
                    class="page-left btn-0 background-transparent-b-20 flex align-items-center justify-content-center margin-right-5"
                  // onClick={() => {
                  //   if (sports.type_id == null) {
                  //     dispatch(fetchSportsdetails({ page: sports.data.page - 1 }));
                  //   } else {
                  //     dispatch(fetchSportsdetails({ page: sports.data.page - 1, id: sports.type_id }));
                  //   }
                  // }}
                  // disabled={1 >= sports.data.page}
                  >
                    <i class="fas fa-chevron-left margin-0 color-white"></i>
                  </button>
                  <button
                    class="page-right btn-0 background-transparent-b-20 flex align-items-center justify-content-center"
                  // onClick={() => {
                  //   if (sports.type_id == null) {
                  //     dispatch(fetchSportsdetails({ page: sports.data.page + 1 }));
                  //   } else {
                  //     dispatch(fetchSportsdetails({ page: sports.data.page + 1, id: sports.type_id }));
                  //   }
                  // }}
                  // disabled={sports.data.lastPage <= sports.data.page}
                  >
                    <i class="fas fa-chevron-right margin-0 color-white"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="prematch-detail flex-inherit flex-column padding-vertical-10 padding-left-5 padding-right-10 border-left">
            {/* {sports.data.detail_data ? (
              <Fragment>
                <div class="detail-header flex-inherit flex-column">
                  <div class="height-40 align-items-center background-transparent-b-40 padding-horizontal-10">
                    <div class="league-icon justify-content-center"><i class="far fa-flag color-yellow"></i></div>
                    <span class="color-grey">
                      {sports.data.detail_data.tournament.title.ko ||
                        sports.data.detail_data.tournament.title.en}
                    </span>
                  </div>
                  <div class="height-40 background-transparent-b-30 padding-horizontal-10 margin-bottom-10">
                    <div class="flex grow-2 align-items-center">
                      <i class="fas fa-tshirt color-grey font-size-11"></i>
                      <span class="color-grey">
                        {sports.data.detail_data.homeTeam.name.ko ||
                          sports.data.detail_data.homeTeam.name.en}
                        <span class="margin-horizontal-4 color-twhite">vs</span>
                        {sports.data.detail_data.awayTeam.name.ko ||
                          sports.data.detail_data.awayTeam.name.en}
                      </span>
                    </div>
                    <div class="flex align-items-center">
                      <i class="far fa-stopwatch color-grey font-size-11"></i>
                      <span class="color-grey">
                        {moment(sports.data.detail_data.startAt).format(
                          "MM / DD HH:mm"
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <div class="market-list flex-inherit flex-column scrollable-auto">
                  {sports.data.detail_data.markets.length > 0
                    ? sports.data.detail_data.markets.map((market, market_index) => {
                      var rows = [];
                      if (market.producerId == 3) {
                        if (market.status == 1) {
                          rows.push(
                            <div
                              class="market-header height-40 background-transparent-b-30 padding-horizontal-10 align-items-center shrink-0 border-bottom-white-strong"
                              key={"details-market-id" + market.id}
                            >
                              <span class="color-grey">
                                {market.title.marketName.ko}
                              </span>
                            </div>
                          );
                          rows.push(
                            <div class="market-data flex-inherit flex-wrap flex-row background-transparent-b-30 shrink-0">
                              {market?.outcomes?.length == 2 ?

                                market.outcomes.map((outcome, market_index) => {
                                  return (
                                    <div key={"details-outcome-id" + outcome.id}
                                      onClick={setBet}
                                      data-outcome_name={outcome.name?.outcomeName != null ? outcome.name.outcomeName.ko : ""}
                                      data-market_name={market.title.marketName.ko}
                                      data-home-team={sports.data.detail_data.homeTeam.name["ko"]}
                                      data-away-team={sports.data.detail_data.awayTeam.name["ko"]}
                                      data-match-id={sports.data.detail_data.id}
                                      data-market-id={market.id}
                                      data-outcome-id={outcome.id}
                                      data-odds={outcome.odds}
                                      data-specifier={JSON.stringify(market.specifier)}
                                      data-market-type={market.type}
                                      data-name-id={outcome.name.id}
                                      class={(outcome.active == 1 || outcome.active == true) && sports.data.bet.outcomes.find(x => x.id == outcome.id) ? "active height-40 data flex-inherit align-items-center background-transparent-w-5 widthp-50 padding-horizontal-5" : " height-40 data flex-inherit align-items-center background-transparent-w-5 widthp-50 padding-horizontal-5"}>
                                      <div class="grow-2 text-ellipsis padding-horizontal-2">
                                        <span class="color-grey text-ellipsis">{outcome.name.outcomeName?.ko ? outcome.name.outcomeName.ko : ""}</span>
                                      </div>
                                      <div class="shrink-0 padding-horizontal-2">
                                        {
                                          outcome.oldOdds == null ? "" :
                                            outcome.oldOdds < outcome.odds ?
                                              <span class="odds-change flash odds-up"><i class="fas fa-long-arrow-up color-green"></i></span> :
                                              <span class="odds-change flash odds-down"><i class="fas fa-long-arrow-down color-red"></i></span>}

                                        <span class="color-grey">{outcome.odds}</span>
                                      </div>
                                    </div>
                                  )
                                }) :
                                market.outcomes.map((outcome, market_index) => {
                                  return (
                                    <div key={"details-outcome-id" + outcome.id}
                                      onClick={setBet}
                                      data-outcome_name={outcome.name?.outcomeName != null ? outcome.name.outcomeName.ko : ""}
                                      data-market_name={market.title.marketName.ko}
                                      data-home-team={sports.data.detail_data.homeTeam.name["ko"]}
                                      data-away-team={sports.data.detail_data.awayTeam.name["ko"]}
                                      data-match-id={sports.data.detail_data.id}
                                      data-market-id={market.id}
                                      data-outcome-id={outcome.id}
                                      data-odds={outcome.odds}
                                      data-specifier={JSON.stringify(market.specifier)}
                                      data-market-type={market.type}
                                      data-name-id={outcome.name.id}
                                      class={(outcome.active == 1 || outcome.active == true) && sports.data.bet.outcomes.find(x => x.id == outcome.id) ? "active height-40 data flex-inherit align-items-center background-transparent-w-5 widthp-33 padding-horizontal-5" : " height-40 data flex-inherit align-items-center background-transparent-w-5 widthp-33 padding-horizontal-5"}>
                                      <div class="grow-2 text-ellipsis padding-horizontal-2">
                                        <span class="color-grey text-ellipsis">{outcome.name.outcomeName?.ko ? outcome.name.outcomeName.ko : ""}</span>
                                      </div>
                                      <div class="shrink-0 padding-horizontal-2">
                                        {
                                          outcome.oldOdds == null ? "" :
                                            outcome.oldOdds < outcome.odds ?
                                              <span class="odds-change flash odds-up"><i class="fas fa-long-arrow-up color-green"></i></span> :
                                              <span class="odds-change flash odds-down"><i class="fas fa-long-arrow-down color-red"></i></span>}

                                        <span class="color-grey">{outcome.odds}</span>
                                      </div>
                                    </div>
                                  )
                                })

                              }
                            </div>
                          );
                        } else {

                          rows.push(
                            <div
                              class="market-header height-40 background-transparent-b-30 padding-horizontal-10 align-items-center shrink-0 border-bottom-white-strong"
                              key={"details_market_id" + market.id}
                            >
                              <span class="color-grey">
                                {market.title.marketName.ko}
                              </span>
                            </div>
                          );
                          rows.push(
                            <div class="market-data flex-inherit flex-wrap flex-row background-transparent-b-30 shrink-0">

                              {market?.outcomes?.length == 2 ?

                                market.outcomes.map((outcome, market_index) => {
                                  return (
                                    <div key={"details-outcome-id-inactive-2-row" + outcome.id} class=" disabled height-40 data flex-inherit align-items-center background-transparent-w-5 widthp-50 padding-horizontal-5">
                                      <div class="grow-2 text-ellipsis padding-horizontal-2">
                                        <span class="color-grey text-ellipsis">{outcome.name?.outcomeName != null ? outcome.name.outcomeName.ko : ""}</span>
                                      </div>
                                      <div class="shrink-0 padding-horizontal-2">
                                        {
                                          outcome.oldOdds == null ? "" :
                                            outcome.oldOdds < outcome.odds ?
                                              <span class="odds-change flash odds-up"><i class="fas fa-long-arrow-up color-green"></i></span> :
                                              <span class="odds-change flash odds-down"><i class="fas fa-long-arrow-down color-red"></i></span>}

                                        <span class="color-grey">{outcome.odds}</span>
                                      </div>
                                    </div>
                                  )
                                }) :
                                market.outcomes.map((outcome, market_index) => {
                                  return (
                                    <div key={"details-outcome-id-inactive" + outcome.id} class=" disabled height-40 data flex-inherit align-items-center background-transparent-w-5 widthp-33 padding-horizontal-5">
                                      <div class="grow-2 text-ellipsis padding-horizontal-2">
                                        <span class="color-grey text-ellipsis">{outcome.name?.outcomeName != null ? outcome.name.outcomeName.ko : ""}</span>
                                      </div>
                                      <div class="shrink-0 padding-horizontal-2">
                                        {
                                          outcome.oldOdds == null ? "" :
                                            outcome.oldOdds < outcome.odds ?
                                              <span class="odds-change flash odds-up"><i class="fas fa-long-arrow-up color-green"></i></span> :
                                              <span class="odds-change flash odds-down"><i class="fas fa-long-arrow-down color-red"></i></span>}

                                        <span class="color-grey">{outcome.odds}</span>
                                      </div>
                                    </div>
                                  )
                                })

                              }
                            </div>
                          );

                        }
                      }

                      return rows;
                    })
                    : "없음"}
                </div>
              </Fragment>
            ) : (
              ""
            )} */}
          </div>
        </div>
      </div>

      <div class="prematch-header-mobile widthp-100 pi-header-mobile flex-inherit flex-row shrink-0 border-bottom align-items-center">
        <div class="border-right">
          <NavLink activeClassName="active" to="#">
            <i class="pi-bw-icon-valleyball"></i>
          </NavLink>
        </div>
        <div class="border-right">
          <NavLink activeClassName="active" to="#">
            <i class="pi-bw-icon-icehockey"></i>
          </NavLink>
        </div>
        <div class="border-right">
          <NavLink activeClassName="active" to="#">
            <i class="pi-bw-icon-basketball"></i>
          </NavLink>
        </div>
        <div class="border-right">
          <NavLink activeClassName="active" to="#">
            <i class="pi-bw-icon-soccer"></i>
          </NavLink>
        </div>
        <div class="border-right">
          <NavLink activeClassName="active" to="#">
            <i class="pi-bw-icon-baseball"></i>
          </NavLink>
        </div>
        <div>
          <NavLink activeClassName="active" to="#">
            <i class="pi-bw-icon-afootball"></i>
          </NavLink>
        </div>
      </div>


    </Fragment>
  );
};

export default connect(mapStateToProps, mapDispatchProps)(Sports);
