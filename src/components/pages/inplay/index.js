import React, { Fragment, useState, useEffect, useRef } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { refreshToken } from "../../../redux/user/userActions";

import { Link, NavLink } from 'react-router-dom'
import { fetchInplays, fetchInplay } from "../../../redux/inplay/inplayActions";
import { setBetOutcome, validateBet } from "../../../redux/sportsdetail/sportsdetailActions";
import { iconsList, setCompetitorName } from "../../../helpers/object";
import Logo from "../../layouts/Logo";
import moment from "moment";
import Select from "react-select";
import { fetchMarketPerMatch, resetSideMarkets, setMatchIds } from "../../../redux/sport/sportActions";
export default function Inplay() {

   let isSubscribed = true;
   const dispatch = useDispatch();
   let inplay = useSelector((state) => state.inplay);
   // let sports = useSelector((state) => state.sportsdetail);
   let sportDetails = useSelector((state) => state.sportsdetail);
   let sports = useSelector((state) => state.sport);

   let user = useSelector((state) => state.user.user);

   useEffect(() => {
      isSubscribed = true;
      if (user.isAuth) {
         dispatch(refreshToken())
      }

      dispatch(resetSideMarkets())
      dispatch(fetchInplays())
      // dispatch(setMarkets(0))
      // dispatch(validateBet(sportDetails.data.bet))
      return () => {
         isSubscribed = false;
      };
   }, []);


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

   const setDetail = async (id) => {
      // context.actions.setdetailMenu(true);
      if (id == sports.sideMarket.id) {
         dispatch(resetSideMarkets())
      } else {
         dispatch(fetchMarketPerMatch(id))
      }
   };

   return (
      <Fragment>
         <div class="content ie-continer flex flex-inherit grow-2 flex-column">
            <div class="content-header inplay-header-desktop shrink-0 border-bottom height-50 align-items-center padding-horizontal-10 background-transparent-b-25">
               <span class="color-grey">
                  <i class="far fa-stopwatch"></i>INPLAY
               </span>
            </div>
            <div class="inplay-wrap inplay-content-desktop border-top flex-row flex-inherit">
               <div class="inplay-content padding-10 flex-column">
                  <div class="inplay-header flex-inherit flex-column">
                     <div class="event-slider flex-column widthp-100">
                        <div class="flex event-list height-60 align-items-center padding-horizontal-10 background-transparent-b-30">
                           <span class="color-grey">slider</span>
                        </div>
                        <div class="flex height-40 border-bottom padding-horizontal-10 align-items-center background-transparent-b-20">
                           <div class="flex">
                              <span class="color-grey">
                                 <i class="fas fa-calendar-check"></i>INPLAY : ALL EVENTS
                              </span>
                           </div>
                           <div class="flex grow-2 justify-content-end">
                              <span class="color-red">{inplay.matches?.data ? inplay.matches.data.length:""}</span>
                              <span class="color-grey">개의 경기가 진행 중 입니다</span>
                           </div>
                        </div>
                        <div class="flex height-40 border-top padding-horizontal-10 align-items-center justify-content-center background-transparent-b-20">
                           <div class="flex">
                              <button class="all btn-0 color-grey background-transparent active">All Events</button>
                              <button class="live btn-0 color-grey background-transparent">Live Streaming</button>
                              <button class="schedule btn-0 color-grey background-transparent">Schedule</button>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="inplay-list flex-inherit border-bottom match-list grow-2 scrollable-auto flex-column">

                     {/* {console.log(inplay.matches)} */}
                     {inplay.mainMarkets.length > 0
                        ? inplay.mainMarkets.map((match, index) => {
                           let sport_hcp_market_exists = false
                           let sport_total_market_exists = false
                           let homeTeam = sports.competitors.data ? sports.competitors.data.find(x => x.id == match.homeTeamId).competitor.name.ko : "";
                           let awayTeam = sports.competitors.data ? sports.competitors.data.find(x => x.id == match.awayTeamId).competitor.name.ko : "";
                           // console.log(match)
                           var row = [];
                           row.push(
                              <div class="title background-transparent-b-30 height-40 align-items-center-inherit">
                                 <div class="flex padding-horizontal-10 widthp-40 heightp-100">
                                    <span class="color-grey text-ellipsis">
                                       <i class="far fa-flag margin-right-5 color-yellow"></i>
                                       {match.tournamentId == null ? sports.tournaments?.data ? sports.tournaments?.data.find(x => x.id == match.simpleTournamentId)?.tournament.name.ko : "" : sports.tournaments?.data ? sports.tournaments?.data.find(x => x.id == match.tournamentId)?.tournament.name.ko : ""}
                                    </span>
                                 </div>
                                 <div class="flex padding-horizontal-10 widthp-50 heightp-100">
                                    <div class="flex widthp-33 justify-content-center color-twhite">
                                       <span>승무패</span>
                                    </div>
                                    <div class="flex widthp-33 justify-content-center color-twhite">
                                       <span>핸디캡</span>
                                    </div>
                                    <div class="flex widthp-33 justify-content-center color-twhite">
                                       <span>오버언더</span>
                                    </div>
                                 </div>
                              </div>
                           );

                           row.push(
                              <div class="list flex-inherit border-bottom-white" data-type="" data-id="" data-market-hash="" data-home-competitor="" data-away-competitor="">
                                 <div class="widthp-40 flex-inherit background-transparent-b-30 padding-horizontal-10">
                                    <div class="info flex-inherit flex-column align-items-center-inherit justify-content-end-inherit width-45 margin-right-5">
                                       <div class="time color-blue">{match.eventClock?.eventTime ? match.eventClock.eventTime : "n/a"}</div>
                                       <div class="status color-grey">
                                          <span class="text-ellipsis">{match.matchStatus.ko}</span>
                                       </div>
                                       <div class="bookmark color-grey grow-1">
                                          <i class="fas fa-star"></i>
                                       </div>
                                    </div>
                                    <div class="team flex-inherit flex-column align-items-center-inherit grow-2 text-ellipsis">
                                       <div class="home color-white">
                                          <span class="text-ellipsis">{homeTeam}</span>
                                       </div>
                                       <div class="away color-white">
                                          <span class="text-ellipsis">{awayTeam}</span>
                                       </div>
                                       <div class="draw color-white">
                                          <span class="text-ellipsis">Draw</span>
                                       </div>
                                    </div>
                                    <div class="score flex-inherit flex-column align-items-center-inherit width-20 justify-content-center-inherit margin-right-5">
                                       <div class="home-score color-green">{match.homeScore}</div>
                                       <div class="away-score color-green">{match.awayScore}</div>
                                    </div>
                                    <div class="data flex-inherit flex-column align-items-center-inherit justify-content-center-inherit">
                                       <div class="color-grey grow-1">
                                          <i class="far fa-tv-retro margin-0"></i>
                                       </div>
                                       <div class="color-grey grow-1">
                                          <i class="far fa-broadcast-tower margin-0"></i>
                                       </div>
                                       <div class="color-grey grow-1">
                                          <i class="far fa-whistle margin-0"></i>
                                       </div>
                                    </div>
                                 </div>

                                 <div class="widthp-50 flex-inherit background-transparent-b-20">

                                    <div class="odds flex-inherit flex-column align-items-center-inherit justify-content-center-inherit widthp-33">

                                       {
                                          match.mainMarkets['1X2'].map((market, market_index) => {
                                             if (market.status == 1) {
                                                return (market.outcomes.map((outcome, outcomes_index) => {
                                                   let outcomeName = sports.outcomes.data ? sports.outcomes.data.find(x => x.id == outcome.outcomeId).outcomeName?.ko : ""
                                                   return (
                                                      <div key={"outcome_id-active-1x2-" + outcome.id}
                                                         onClick={setBet}
                                                         data-outcome_name={setCompetitorName(outcomeName, homeTeam, awayTeam)}
                                                         data-market_name='1x2'
                                                         data-home-team={homeTeam}
                                                         data-away-team={awayTeam}
                                                         data-match-id={match.id}
                                                         data-market-id={market.marketId}
                                                         data-outcome-id={outcome.id}
                                                         data-odds={outcome.odds}
                                                         class={(outcome.enabled == 1 || outcome.enabled == true) && sportDetails.data.bet.outcomes.find(x => x.id == outcome.id) ? "active odd color-grey" : " odd color-grey"}
                                                      >
                                                         {outcome.oldOdds == null ?
                                                            "" :
                                                            outcome.oldOdds < outcome.odds ?
                                                               <span class="odds-change flash odds-up"><i class="fas fa-long-arrow-up color-green"></i></span> :
                                                               <span class="odds-change flash odds-down"><i class="fas fa-long-arrow-down color-red"></i></span>
                                                         }

                                                         {outcome.odds}
                                                      </div>
                                                   )
                                                })
                                                )
                                             } else {
                                                return (market.outcomes.map((outcome, outcomes_index) => {
                                                   return (
                                                      <div
                                                         key={"outcome_id-inactive-1x2-" + outcome.id}
                                                         class="odd color-grey disabled"
                                                      >
                                                         {outcome.oldOdds == null ?
                                                            "" :
                                                            outcome.oldOdds < outcome.odds ?
                                                               <span class="odds-change flash odds-up"><i class="fas fa-long-arrow-up color-green"></i></span> :
                                                               <span class="odds-change flash odds-down"><i class="fas fa-long-arrow-down color-red"></i></span>
                                                         }

                                                         {outcome.odds}
                                                      </div>
                                                   )
                                                })
                                                )
                                             }
                                          })
                                       }
                                    </div>

                                    <div class="handicap flex-inherit flex-column widthp-33">
                                       {
                                          match.mainMarkets['hcp'].map((market, market_index) => {
                                             if (sport_hcp_market_exists == false) {
                                                sport_hcp_market_exists = true;
                                                if (market.status == 1) {
                                                   return (market.outcomes.map((outcome, outcomes_index) => {
                                                      let outcomeName = sports.outcomes.data ? sports.outcomes.data.find(x => x.id == outcome.outcomeId).outcomeName?.ko : ""
                                                      return (
                                                         <div key={"outcome_id-active-hcp-" + outcome.id}
                                                            onClick={setBet}
                                                            data-outcome_name={setCompetitorName(outcomeName, homeTeam, awayTeam)}
                                                            data-market_name='hcp'
                                                            data-home-team={homeTeam}
                                                            data-away-team={awayTeam}
                                                            data-match-id={match.id}
                                                            data-market-id={market.marketId}
                                                            data-outcome-id={outcome.id}
                                                            data-odds={outcome.odds}
                                                            class={(outcome.enabled == 1 || outcome.enabled == true) && sportDetails.data.bet.outcomes.find(x => x.id == outcome.id) ? "active odd align-items-center-inherit justify-content-center-inherit" : " odd align-items-center-inherit justify-content-center-inherit"}
                                                         >
                                                            {outcome.oldOdds == null ?
                                                               "" :
                                                               outcome.oldOdds < outcome.odds ?
                                                                  <span class="odds-change flash odds-up"><i class="fas fa-long-arrow-up color-green"></i></span> :
                                                                  <span class="odds-change flash odds-down"><i class="fas fa-long-arrow-down color-red"></i></span>}

                                                            <div class="flex color-darkgrey widthp-50">{market.market.specifier.hcp}</div>
                                                            <div class="flex color-grey widthp-50">{outcome.odds}</div>
                                                         </div>
                                                      )
                                                   })
                                                   )
                                                } else {
                                                   return (market.outcomes.map((outcome, outcomes_index) => {
                                                      let outcomeName = sports.outcomes.data ? sports.outcomes.data.find(x => x.id == outcome.outcomeId).outcomeName?.ko : ""
                                                      return (
                                                         <div key={"outcome_id-inactive-hcp-" + outcome.id}
                                                            class="disabled odd align-items-center-inherit justify-content-center-inherit"
                                                         >
                                                            {outcome.oldOdds == null ?
                                                               "" :
                                                               outcome.oldOdds < outcome.odds ?
                                                                  <span class="odds-change flash odds-up"><i class="fas fa-long-arrow-up color-green"></i></span> :
                                                                  <span class="odds-change flash odds-down"><i class="fas fa-long-arrow-down color-red"></i></span>}

                                                            <div class="flex color-darkgrey widthp-50">{market.market.specifier.hcp}</div>
                                                            <div class="flex color-grey widthp-50">{outcome.odds}</div>
                                                         </div>
                                                      )
                                                   })
                                                   )
                                                }
                                             }

                                          })
                                       }
                                    </div>

                                    <div class="overunder flex-inherit flex-column align-items-center-inherit justify-content-center-inherit widthp-33">
                                       {
                                          match.mainMarkets['total'].map((market, market_index) => {
                                             if (sport_total_market_exists == false) {
                                                sport_total_market_exists = true;
                                                if (market.status == 1) {
                                                   return (market.outcomes.map((outcome, outcomes_index) => {
                                                      let outcomeName = sports.outcomes.data ? sports.outcomes.data.find(x => x.id == outcome.outcomeId).outcomeName?.ko : ""
                                                      return (
                                                         <div key={"outcome_id-active-hcp-" + outcome.id}
                                                            onClick={setBet}
                                                            data-outcome_name={setCompetitorName(outcomeName, homeTeam, awayTeam)}
                                                            data-market_name='hcp'
                                                            data-home-team={homeTeam}
                                                            data-away-team={awayTeam}
                                                            data-match-id={match.id}
                                                            data-market-id={market.marketId}
                                                            data-outcome-id={outcome.id}
                                                            data-odds={outcome.odds}
                                                            class={(outcome.enabled == 1 || outcome.enabled == true) && sportDetails.data.bet.outcomes.find(x => x.id == outcome.id) ? "active odd align-items-center-inherit justify-content-center-inherit" : " odd align-items-center-inherit justify-content-center-inherit"}
                                                         >
                                                            {outcome.oldOdds == null ?
                                                               "" :
                                                               outcome.oldOdds < outcome.odds ?
                                                                  <span class="odds-change flash odds-up"><i class="fas fa-long-arrow-up color-green"></i></span> :
                                                                  <span class="odds-change flash odds-down"><i class="fas fa-long-arrow-down color-red"></i></span>}

                                                            <div class="flex color-darkgrey widthp-50">{outcomeName.includes("오버") ? "O" : "U"}{market.market.specifier.total}</div>
                                                            <div class="flex color-grey widthp-50">{outcome.odds}</div>
                                                         </div>
                                                      )
                                                   })
                                                   )
                                                } else {
                                                   return (market.outcomes.map((outcome, outcomes_index) => {
                                                      let outcomeName = sports.outcomes.data ? sports.outcomes.data.find(x => x.id == outcome.outcomeId).outcomeName?.ko : ""
                                                      return (
                                                         <div key={"outcome_id-inactive-hcp-" + outcome.id}
                                                            class=" odd align-items-center-inherit justify-content-center-inherit disabled"
                                                         >
                                                            {outcome.oldOdds == null ?
                                                               "" :
                                                               outcome.oldOdds < outcome.odds ?
                                                                  <span class="odds-change flash odds-up"><i class="fas fa-long-arrow-up color-green"></i></span> :
                                                                  <span class="odds-change flash odds-down"><i class="fas fa-long-arrow-down color-red"></i></span>}

                                                            <div class="flex color-darkgrey widthp-50">{outcomeName.includes("오버") ? "O" : "U"}{market.market.specifier.total}</div>
                                                            <div class="flex color-grey widthp-50">{outcome.odds}</div>
                                                         </div>
                                                      )
                                                   })
                                                   )
                                                }
                                             }

                                          })
                                       }
                                    </div>

                                 </div>

                                 <div class="widthp-10 background-transparent-b-30">
                                    <div
                                       className="flex detail widthp-100 justify-content-center align-items-center color-white"
                                       class={match.id === sports.sideMarket.id ? "active flex detail widthp-100 justify-content-center align-items-center color-white" : "flex detail widthp-100 justify-content-center align-items-center color-white"
                                       }
                                       onClick={() => setDetail(match.id)}
                                    >
                                       + {match.mainMarkets.count}
                                    </div>
                                 </div>
                              </div>)

                           // match.mainMarkets.map((market,market_index)=>{
                           //    console.log(market)
                           // })
                           // console.log(match.mainMarkets);
                           // match.mainMarkets['1X2'].map((market, market_index) => {
                           //    console.log(market)
                           // })
                           return row
                        }) : <div class="flex justify-content-center heightp-100 align-items-center"><i class="fa fa-spinner fa-spin fa-4x fa-fw color-grey"></i></div>
                     }


                  </div>
                  <div class="bottom-wrap border-top flex flex-inherit height-60 padding-10 align-items-center-inherit0">
                     <div class="pagination widthp-100 flex-inherit justify-content-end">
                        <div class="flex selectBox">
                           <Select
                              className="select-container select-position"
                              classNamePrefix="select-box"
                              value={{ label: inplay.currentPage, value: inplay.currentPage }}
                              onChange={(e) => {
                                 dispatch(setMatchIds(inplay.matches, e.value, 'live'))
                                 // if (sports.isSearching) {
                                 //    dispatch(setMatchIds(sports.searchMatches, e.value, 'prematch'))
                                 // } else {
                                 //    if (sports.isBookmarkedCheck) {
                                 //       dispatch(setMatchIds(sports.bookmarkedMatches, e.value, 'prematch'))
                                 //    } else {
                                 //       if (sports.sportsMatches.data.length == 0) {
                                 //          dispatch(setMatchIds(sports.matches, e.value, 'prematch'))
                                 //       } else {
                                 //          dispatch(setMatchIds(sports.sportsMatches, e.value, 'prematch'))
                                 //       }
                                 //    }
                                 // }

                              }}
                              options={((rows, i, len) => {
                                 while (++i <= len) {
                                    rows.push({ value: i, label: i });
                                 }
                                 return rows;
                              })([], 0, inplay.lastPage)}
                           />
                        </div>
                        <div class="grow-2"></div>
                        <div class="flex page">
                           <button
                              class="page-left btn-0 background-transparent-b-20 flex align-items-center justify-content-center margin-right-5"
                           onClick={()=>{
                              dispatch(setMatchIds(inplay.matches, inplay.currentPage - 1, 'live'))
                           }}
                           disabled={1 >= inplay.currentPage}
                           >
                              <i class="fas fa-chevron-left margin-0 color-white"></i>
                           </button>
                           <button
                              class="page-right btn-0 background-transparent-b-20 flex align-items-center justify-content-center"
                           onClick={()=>{
                              dispatch(setMatchIds(inplay.matches, inplay.currentPage + 1, 'live'))
                           }}
                           disabled={inplay.lastPage <= inplay.currentPage}
                           >
                              <i class="fas fa-chevron-right margin-0 color-white"></i>
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="inplay-detail flex-inherit flex-column padding-vertical-10 padding-left-5 padding-right-10">

                  <div class="detail-header flex-inherit flex-column">
                     <div class="height-40 align-items-center background-transparent-b-20 padding-horizontal-10">
                        <i class="fas fa-tshirt color-grey font-size-11"></i>
                        <span class="color-grey">

                           {sports.sideMarket?.id ? sports.competitors?.data ? sports.competitors?.data.find(x => x.id == sports.sideMarket.homeTeamId).competitor.name.ko : "" : ""}
                           <span class="margin-horizontal-4 color-twhite">vs</span>
                           {sports.sideMarket?.id ? sports.competitors?.data ? sports.competitors?.data.find(x => x.id == sports.sideMarket.awayTeamId).competitor.name.ko : "" : ""}
                        </span>
                     </div>
                     <div class="height-40 background-transparent-b-10 padding-horizontal-10 margin-bottom-10">
                        <div class="flex grow-2 align-items-center">
                           <i class="far fa-stopwatch color-grey font-size-11"></i>
                           {sports.sideMarket?.id ? <span class="color-grey">{moment(sports.sideMarket.startAt).format("MM / DD HH:mm")}</span> : ""}
                           {/* <span class="color-grey">{inplay.data.detail_data?.awayTeam?.name?.ko ? moment(startAt).format("MM / DD HH:mm") : ""}</span> */}
                        </div>
                        <div class="flex align-items-center">
                           <i class="fas fa-map-marker-alt color-grey font-size-11"></i>
                           <span class="color-grey">Etihad Stadium</span>
                        </div>
                     </div>
                  </div>
                  <div class="market-list flex-inherit flex-column scrollable-auto">
                     {sports.sideMarket?.markets?.length > 0
                        ? sports.sideMarket.markets.map((market, market_index) => {
                           // console.log(market)
                           let homeTeam = sports.competitors?.data ? sports.competitors?.data.find(x => x.id == sports.sideMarket.homeTeamId).competitor.name.ko : "";
                           let awayTeam = sports.competitors?.data ? sports.competitors?.data.find(x => x.id == sports.sideMarket.awayTeamId).competitor.name.ko : "";
                           let marketName = sports.markets?.data ? sports.markets.data.find(x => x.id == market.marketId).marketName.ko : ""

                           var rows = [];

                           rows.push(
                              <div
                                 class="market-header height-40 background-transparent-b-30 padding-horizontal-10 align-items-center shrink-0 border-bottom-white-strong"
                                 key={"details-market-id" + market.id}
                              >
                                 <span class="color-grey">
                                    {/* {market.marketId} */}
                                    {setCompetitorName(marketName, homeTeam, awayTeam)}
                                 </span>
                              </div>
                           );

                           if (market.producerId == 1) {
                              if (market.status == 1) {

                                 rows.push(
                                    <div class="market-data flex-inherit flex-wrap flex-row background-transparent-b-30 shrink-0">
                                       {market?.outcomes?.length == 2 ?
                                          market.outcomes.map((outcome, market_index) => {
                                             let outcomeName = sports.outcomes.data ? sports.outcomes.data.find(x => x.id == outcome.outcomeId).outcomeName?.ko : ""

                                             return (
                                                <div key={"details-outcome-id" + outcome.id}
                                                   onClick={setBet}
                                                   data-outcome_name={setCompetitorName(outcomeName, homeTeam, awayTeam)}
                                                   data-market_name={setCompetitorName(marketName, homeTeam, awayTeam)}
                                                   data-home-team={homeTeam}
                                                   data-away-team={awayTeam}
                                                   data-match-id={sports.sideMarket.id}
                                                   data-market-id={market.marketId}
                                                   data-outcome-id={outcome.id}
                                                   data-odds={outcome.odds}
                                                   class={(outcome.enabled == 1 || outcome.enabled == true) && sportDetails.data.bet.outcomes.find(x => x.id == outcome.id) ? "active height-40 data flex-inherit align-items-center background-transparent-w-5 widthp-50 padding-horizontal-5" : " height-40 data flex-inherit align-items-center background-transparent-w-5 widthp-50 padding-horizontal-5"}
                                                // class=" height-40 data flex-inherit align-items-center background-transparent-w-5 widthp-50 padding-horizontal-5"
                                                >
                                                   <div class="grow-2 text-ellipsis padding-horizontal-2">
                                                      <span class="color-grey text-ellipsis">
                                                         {setCompetitorName(outcomeName, homeTeam, awayTeam)}
                                                      </span>
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
                                             let outcomeName = sports.outcomes.data ? sports.outcomes.data.find(x => x.id == outcome.outcomeId).outcomeName?.ko : ""

                                             return (
                                                <div key={"details-outcome-id" + outcome.id}
                                                   onClick={setBet}
                                                   data-outcome_name={setCompetitorName(outcomeName, homeTeam, awayTeam)}
                                                   data-market_name={setCompetitorName(marketName, homeTeam, awayTeam)}
                                                   data-home-team={homeTeam}
                                                   data-away-team={awayTeam}
                                                   data-match-id={sports.sideMarket.id}
                                                   data-market-id={market.marketId}
                                                   data-outcome-id={outcome.id}
                                                   data-odds={outcome.odds}
                                                   class={(outcome.enabled == 1 || outcome.enabled == true) && sportDetails.data.bet.outcomes.find(x => x.id == outcome.id) ? "active height-40 data flex-inherit align-items-center background-transparent-w-5 widthp-33 padding-horizontal-5" : " height-40 data flex-inherit align-items-center background-transparent-w-5 widthp-33 padding-horizontal-5"}
                                                // class=" height-40 data flex-inherit align-items-center background-transparent-w-5 widthp-33 padding-horizontal-5"
                                                >
                                                   <div class="grow-2 text-ellipsis padding-horizontal-2">
                                                      <span class="color-grey text-ellipsis">
                                                         {setCompetitorName(outcomeName, homeTeam, awayTeam)}
                                                      </span>
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
                                    <div class="market-data flex-inherit flex-wrap flex-row background-transparent-b-30 shrink-0">
                                       {market?.outcomes?.length == 2 ?
                                          market.outcomes.map((outcome, market_index) => {
                                             let outcomeName = sports.outcomes.data ? sports.outcomes.data.find(x => x.id == outcome.outcomeId).outcomeName?.ko : ""

                                             return (
                                                <div key={"details-outcome-id" + outcome.id}
                                                   class="disabled height-40 data flex-inherit align-items-center background-transparent-w-5 widthp-50 padding-horizontal-5"
                                                >
                                                   <div class="grow-2 text-ellipsis padding-horizontal-2">
                                                      <span class="color-grey text-ellipsis">
                                                         {setCompetitorName(outcomeName, homeTeam, awayTeam)}
                                                      </span>
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
                                             let outcomeName = sports.outcomes.data ? sports.outcomes.data.find(x => x.id == outcome.outcomeId).outcomeName?.ko : ""

                                             return (
                                                <div key={"details-outcome-id" + outcome.id}
                                                   class="disabled height-40 data flex-inherit align-items-center background-transparent-w-5 widthp-33 padding-horizontal-5"
                                                >
                                                   <div class="grow-2 text-ellipsis padding-horizontal-2">
                                                      <span class="color-grey text-ellipsis">
                                                         {setCompetitorName(outcomeName, homeTeam, awayTeam)}
                                                      </span>
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
                        : <div class="align-items-center border-left" style={{ paddingLeft: "45%" }}>
                           <Logo width="120" height="30" />
                        </div>}
                  </div>
               </div>
            </div>
         </div>
         <div class="inplay-header-mobile pi-header-mobile flex-inherit flex-row shrink-0 border-bottom align-items-center">
            <div class="border-right">
               <NavLink activeClassName="active" to="#">
                  <i class="pi-color-icon-valleyball"></i>
               </NavLink>
            </div>
            <div class="border-right">
               <NavLink activeClassName="active" to="#">
                  <i class="pi-color-icon-icehockey"></i>
               </NavLink>
            </div>
            <div class="border-right">
               <NavLink activeClassName="active" to="#">
                  <i class="pi-color-icon-basketball"></i>
               </NavLink>
            </div>
            <div class="border-right">
               <NavLink activeClassName="active" to="#">
                  <i class="pi-color-icon-soccer"></i>
               </NavLink>
            </div>
            <div class="border-right">
               <NavLink activeClassName="active" to="#">
                  <i class="pi-color-icon-baseball"></i>
               </NavLink>
            </div>
            <div>
               <NavLink activeClassName="active" to="#">
                  <i class="pi-color-icon-afootball"></i>
               </NavLink>
            </div>
         </div>
         <div class="inplay-wrap inplay-content-mobile border-top flex-column flex-inherit">
            <div class="widthp-100 height-40 align-items-center-inherit border-bottom">
               <div class="flex pi-title grow-2">
                  <span class="color-white padding-left-15">IN-PLAY</span>
               </div>
               <div class="flex">
                  <span class="color-white padding-horizontal-15">
                     <em class="color-green">1225</em> Matches
                  </span>
               </div>
            </div>
            <div class="inplay-list border-bottom grow-2 flex-column">
               <div class="flex widthp-100 height-40 align-items-center-inherit border-bottom">
                  <div class="flex pi-title green border-right grow-2">
                     <span class="color-white padding-left-15 grow-2">축구</span>
                  </div>
                  <div class="flex border-left">
                     <button type="button" class="color-white heightp-100 align-items-center padding-horizontal-15">
                        <i class="fal fa-angle-up"></i>
                     </button>
                  </div>
               </div>
               <div class="flex pi-title subtitle background-transparent-b-20 border-bottom height-40 align-items-center-inherit">
                  <div class="flex padding-horizontal-15 widthp-55 heightp-100">
                     <span class="color-white">European U21 Championship</span>
                  </div>
                  <div class="flex widthp-45">
                     <div class="flex widthp-100 title-info">
                        <div class="flex widthp-100 flex-inherit align-items-center-inherit justify-content-center-inherit padding-2">
                           <div class="widthp-33 padding-5">
                              <div class="flex">
                                 <span class="color-white">1</span>
                              </div>
                           </div>
                           <div class="widthp-33 padding-5 margin-horizontal-2">
                              <div class="flex">
                                 <span class="color-white">x</span>
                              </div>
                           </div>
                           <div class="widthp-33 padding-5">
                              <div class="flex">
                                 <span class="color-white">2</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="flex list border-bottom align-items-center-inherit border-bottom">
                  <div class="flex widthp-55">
                     <div class="flex widthp-100 flex-column padding-horizontal-15 align-items-center-inherit padding-vertical-10">
                        <div class="flex">
                           <i class="triangle"></i>
                           <span class="color-white grow-2">AI Naser SC</span>
                           <span class="color-green">1</span>
                        </div>
                        <div class="flex">
                           <span class="color-white grow-2">AI Arabi SC</span>
                           <span class="color-green">0</span>
                        </div>
                        <div class="flex padding-top-5">
                           <span class="color-yellow">00:11</span>
                           <span class="color-blue padding-left-5">
                              <Link to="/inplay/detail" className="color-blue">
                                 +11
                                 <span class="color-grey padding-left-5">
                                    <i class="fal fa-angle-double-right"></i>
                                 </span>
                              </Link>
                           </span>
                        </div>
                     </div>
                  </div>
                  <div class="flex widthp-45 background-transparent-b-20">
                     <div class="flex widthp-100 title-info heightp-100 align-items-center">
                        <div class="flex flex-inherit market-default align-items-center-inherit justify-content-center-inherit heightp-100 widthp-100">
                           <div class="flex flex-inherit align-items-center-inherit justify-content-center-inherit widthp-100">
                              <div class="widthp-33">
                                 <div class="flex">
                                    <span class="color-white">-</span>
                                 </div>
                              </div>
                              <div class="widthp-33">
                                 <div class="flex">
                                    <span class="color-white">-</span>
                                 </div>
                              </div>
                              <div class="widthp-33">
                                 <div class="flex">
                                    <span class="color-white">-</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div class="flex list border-bottom align-items-center-inherit border-bottom">
                  <div class="flex widthp-55">
                     <div class="flex widthp-100 flex-column padding-horizontal-15 align-items-center-inherit padding-vertical-10">
                        <div class="flex">
                           <i class="triangle"></i>
                           <span class="color-white grow-2">AI Qadsia SC</span>
                           <span class="color-green">1</span>
                        </div>
                        <div class="flex">
                           <span class="color-white grow-2">AI Shabab SC</span>
                           <span class="color-green">0</span>
                        </div>
                        <div class="flex padding-top-5">
                           <span class="color-yellow">04:21</span>
                           <span class="color-blue padding-left-5">
                              <Link to="/inplay/detail" className="color-blue">
                                 +12
                                 <span class="color-grey padding-left-5">
                                    <i class="fal fa-angle-double-right"></i>
                                 </span>
                              </Link>
                           </span>
                        </div>
                     </div>
                  </div>
                  <div class="flex widthp-45 background-transparent-b-20">
                     <div class="flex widthp-100 title-info heightp-100 align-items-center">
                        <div class="flex flex-inherit market-default align-items-center-inherit justify-content-center-inherit heightp-100 widthp-100">
                           <div class="flex flex-inherit align-items-center-inherit justify-content-center-inherit widthp-100">
                              <div class="widthp-33">
                                 <div class="flex">
                                    <span class="color-white">-</span>
                                 </div>
                              </div>
                              <div class="widthp-33">
                                 <div class="flex">
                                    <span class="color-white">-</span>
                                 </div>
                              </div>
                              <div class="widthp-33">
                                 <div class="flex">
                                    <span class="color-white">-</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div class="flex widthp-100 height-40 align-items-center-inherit border-bottom">
                  <div class="flex pi-title green border-right grow-2">
                     <span class="color-white padding-left-15 grow-2">농구</span>
                  </div>
                  <div class="flex border-left">
                     <button type="button" class="color-white heightp-100 align-items-center padding-horizontal-15">
                        <i class="fal fa-angle-up"></i>
                     </button>
                  </div>
               </div>

               <div class="flex pi-title subtitle background-transparent-b-20 border-bottom height-40 align-items-center-inherit">
                  <div class="flex padding-horizontal-15 widthp-55 heightp-100">
                     <span class="color-white">NBA</span>
                  </div>
                  <div class="flex widthp-45">
                     <div class="flex widthp-100 title-info">
                        <div class="flex widthp-100 flex-inherit align-items-center-inherit justify-content-center-inherit padding-2">
                           <div class="widthp-33 padding-5">
                              <div class="flex">
                                 <span class="color-white">1</span>
                              </div>
                           </div>
                           <div class="widthp-33 padding-5 margin-horizontal-2">
                              <div class="flex">
                                 <span class="color-white">x</span>
                              </div>
                           </div>
                           <div class="widthp-33 padding-5">
                              <div class="flex">
                                 <span class="color-white">2</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div class="flex list border-bottom align-items-center-inherit border-bottom">
                  <div class="flex widthp-55">
                     <div class="flex widthp-100 flex-column padding-horizontal-15 align-items-center-inherit padding-vertical-10">
                        <div class="flex">
                           <i class="triangle"></i>
                           <span class="color-white grow-2">LA 레이커스</span>
                           <span class="color-green">12</span>
                        </div>
                        <div class="flex">
                           <span class="color-white grow-2">마이애미</span>
                           <span class="color-green">6</span>
                        </div>
                        <div class="flex padding-top-5">
                           <span class="color-yellow">1Q 02:02</span>
                           <span class="color-blue padding-left-5">
                              <Link to="/inplay/detail" className="color-blue">
                                 +121
                                 <span class="color-grey padding-left-5">
                                    <i class="fal fa-angle-double-right"></i>
                                 </span>
                              </Link>
                           </span>
                        </div>
                     </div>
                  </div>
                  <div class="flex widthp-45 background-transparent-b-20">
                     <div class="flex widthp-100 title-info heightp-100 align-items-center">
                        <div class="flex flex-inherit market-default align-items-center-inherit justify-content-center-inherit heightp-100 widthp-100">
                           <div class="flex flex-inherit align-items-center-inherit justify-content-center-inherit widthp-100">
                              <div class="widthp-50">
                                 <div class="flex">
                                    <span class="color-white">-</span>
                                 </div>
                              </div>
                              <div class="widthp-50">
                                 <div class="flex">
                                    <span class="color-white">-</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </Fragment >
   )
}
