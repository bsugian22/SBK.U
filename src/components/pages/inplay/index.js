import React, { Fragment, useState, useEffect, useRef } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { refreshToken } from "../../../redux/user/userActions";

import { Link, NavLink } from 'react-router-dom'
import { fetchInplays } from "../../../redux/inplay/inplayActions";
import { setBetOutcome } from "../../../redux/sportsdetail/sportsdetailActions";
export default function Inplay() {

   let isSubscribed = true;
   const dispatch = useDispatch();
   let inplay = useSelector((state) => state.inplay);
   let sports = useSelector((state) => state.sportsdetail);

   let sport_market_1_exist = 0;
   let sport_market_186_exist = 0;
   let sport_market_219_exist = 0;
   let sport_market_251_exist = 0;

   let sport_market_16_exist = 0;
   let sport_market_256_exist = 0;
   let sport_market_187_exist = 0;
   let sport_market_223_exist = 0;

   let sport_market_18_exist = 0;
   let sport_market_258_exist = 0;
   let sport_market_189_exist = 0;
   let sport_market_225_exist = 0;

   let handicap_specifier = null;
   let over_under_specifier = null
   useEffect(() => {
      isSubscribed = true;
      dispatch(refreshToken())
      dispatch(fetchInplays())
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

      let data = {
         outcome_id: outcome_id,
         match_id: match_id,
         market_id: market_id,
         odds: odds,
         home_team: home_team,
         away_team: away_team,
         market_name: market_name,
         outcome_name: outcome_name
      }
      dispatch(setBetOutcome(data))
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
                              <span class="color-red">1168</span>
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
                     <div class="title background-transparent-b-30 height-40 align-items-center-inherit">
                        <div class="flex padding-horizontal-10 widthp-40 heightp-100">
                           <span class="color-grey text-ellipsis">
                              <i class="far fa-flag margin-right-5 color-yellow"></i>000
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


                     {inplay.data.data.length > 0
                        ? inplay.data.data.map((matches, index) => {
                           handicap_specifier = null
                           over_under_specifier = null
                           // console.log(matches)
                           return (
                              <div class="list flex-inherit border-bottom-white" data-type="" data-id="" data-market-hash="" data-home-competitor="" data-away-competitor="">
                                 <div class="widthp-40 flex-inherit background-transparent-b-30 padding-horizontal-10">
                                    <div class="info flex-inherit flex-column align-items-center-inherit justify-content-end-inherit width-45 margin-right-5">
                                       <div class="time color-blue">00</div>
                                       <div class="status color-grey">
                                          <span class="text-ellipsis">0</span>
                                       </div>
                                       <div class="bookmark color-grey grow-1">
                                          <i class="fas fa-star"></i>
                                       </div>
                                    </div>
                                    <div class="team flex-inherit flex-column align-items-center-inherit grow-2 text-ellipsis">
                                       <div class="home color-white">
                                          <span class="text-ellipsis">0</span>
                                       </div>
                                       <div class="away color-white">
                                          <span class="text-ellipsis">0</span>
                                       </div>
                                       <div class="draw color-white">
                                          <span class="text-ellipsis">Draw</span>
                                       </div>
                                    </div>
                                    <div class="score flex-inherit flex-column align-items-center-inherit width-20 justify-content-center-inherit margin-right-5">
                                       <div class="home-score color-green">0</div>
                                       <div class="away-score color-green">0</div>
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
                                       {matches.markets.map((market, market_index) => {
                                          // console.log(market.title)
                                          matches.markets.find(x => x.title.id == 1) ? sport_market_1_exist = 1 : 0
                                          matches.markets.find(x => x.title.id == 186) ? sport_market_186_exist = 1 : 0
                                          matches.markets.find(x => x.title.id == 219) ? sport_market_219_exist = 1 : 0
                                          matches.markets.find(x => x.title.id == 251) ? sport_market_251_exist = 1 : 0

                                          if (market.title.id == 1) {
                                             if (market.status == 1) {
                                                return (market.outcomes.map((outcome, outcomes_index) => {
                                                   // console.log(outcome)
                                                   return (
                                                      <div
                                                         key={"outcome_id-active-1x2-" + outcome.id}
                                                         class={(outcome.active == 1 || outcome.active == true) && sports.data.bet.outcomes.find(x => x.id == outcome.id) ? "active odd color-grey" : " odd color-grey"}
                                                         onClick={setBet}
                                                         data-outcome_name={outcome.name.outcomeName.ko}
                                                         data-market_name={market.title.marketName.ko}
                                                         data-home-team={matches.homeTeam.name["ko"]}
                                                         data-away-team={matches.awayTeam.name["ko"]}
                                                         data-match-id={matches.id}
                                                         data-market-id={matches.markets.id}
                                                         data-outcome-id={outcome.id}
                                                         data-odds={outcome.odds}
                                                      >
                                                         {outcome.oldOdds == null ?
                                                            "" :
                                                            outcome.oldOdds < outcome.odds ?
                                                               <span class="odds-change flash odds-up"><i class="fas fa-long-arrow-up color-green"></i></span> :
                                                               <span class="odds-change flash odds-down"><i class="fas fa-long-arrow-down color-red"></i></span>}

                                                         {outcome.odds}
                                                      </div>
                                                   )
                                                })
                                                )
                                             } else {
                                                return (market.outcomes.map((outcome, outcomes_index) => {
                                                   return (
                                                      <div
                                                         key={"outcome_id-active-1x2-" + outcome.id}
                                                         class=" disabled odd color-grey"
                                                      >
                                                         {outcome.oldOdds == null ?
                                                            "" :
                                                            outcome.oldOdds < outcome.odds ?
                                                               <span class="odds-change flash odds-up"><i class="fas fa-long-arrow-up color-green"></i></span> :
                                                               <span class="odds-change flash odds-down"><i class="fas fa-long-arrow-down color-red"></i></span>}

                                                         {outcome.odds}
                                                      </div>
                                                   )
                                                })
                                                )
                                             }
                                          }

                                          if (market.title.id == 186 && sport_market_1_exist == 0) {
                                             if (market.status == 1) {
                                                return (market.outcomes.map((outcome, outcomes_index) => {
                                                   // console.log(outcome)
                                                   return (
                                                      <div
                                                         key={"outcome_id-active-1x2-" + outcome.id}
                                                         class={(outcome.active == 1 || outcome.active == true) && sports.data.bet.outcomes.find(x => x.id == outcome.id) ? "active odd color-grey" : " odd color-grey"}
                                                         onClick={setBet}
                                                         data-outcome_name={outcome.name.outcomeName.ko}
                                                         data-market_name={market.title.marketName.ko}
                                                         data-home-team={matches.homeTeam.name["ko"]}
                                                         data-away-team={matches.awayTeam.name["ko"]}
                                                         data-match-id={matches.id}
                                                         data-market-id={matches.markets.id}
                                                         data-outcome-id={outcome.id}
                                                         data-odds={outcome.odds}
                                                      >
                                                         {outcome.oldOdds == null ?
                                                            "" :
                                                            outcome.oldOdds < outcome.odds ?
                                                               <span class="odds-change flash odds-up"><i class="fas fa-long-arrow-up color-green"></i></span> :
                                                               <span class="odds-change flash odds-down"><i class="fas fa-long-arrow-down color-red"></i></span>}

                                                         {outcome.odds}
                                                      </div>
                                                   )
                                                })
                                                )
                                             } else {
                                                return (market.outcomes.map((outcome, outcomes_index) => {
                                                   return (
                                                      <div
                                                         key={"outcome_id-active-1x2-" + outcome.id}
                                                         class=" disabled odd color-grey"
                                                      >
                                                         {outcome.oldOdds == null ?
                                                            "" :
                                                            outcome.oldOdds < outcome.odds ?
                                                               <span class="odds-change flash odds-up"><i class="fas fa-long-arrow-up color-green"></i></span> :
                                                               <span class="odds-change flash odds-down"><i class="fas fa-long-arrow-down color-red"></i></span>}

                                                         {outcome.odds}
                                                      </div>
                                                   )
                                                })
                                                )
                                             }
                                          }

                                          if (market.title.id == 219 && sport_market_1_exist == 0 && sport_market_186_exist == 0) {
                                             if (market.status == 1) {
                                                return (market.outcomes.map((outcome, outcomes_index) => {
                                                   // console.log(outcome)
                                                   return (
                                                      <div
                                                         key={"outcome_id-active-1x2-" + outcome.id}
                                                         class={(outcome.active == 1 || outcome.active == true) && sports.data.bet.outcomes.find(x => x.id == outcome.id) ? "active odd color-grey" : " odd color-grey"}
                                                         onClick={setBet}
                                                         data-outcome_name={outcome.name.outcomeName.ko}
                                                         data-market_name={market.title.marketName.ko}
                                                         data-home-team={matches.homeTeam.name["ko"]}
                                                         data-away-team={matches.awayTeam.name["ko"]}
                                                         data-match-id={matches.id}
                                                         data-market-id={matches.markets.id}
                                                         data-outcome-id={outcome.id}
                                                         data-odds={outcome.odds}
                                                      >
                                                         {outcome.oldOdds == null ?
                                                            "" :
                                                            outcome.oldOdds < outcome.odds ?
                                                               <span class="odds-change flash odds-up"><i class="fas fa-long-arrow-up color-green"></i></span> :
                                                               <span class="odds-change flash odds-down"><i class="fas fa-long-arrow-down color-red"></i></span>}

                                                         {outcome.odds}
                                                      </div>
                                                   )
                                                })
                                                )
                                             } else {
                                                return (market.outcomes.map((outcome, outcomes_index) => {
                                                   return (
                                                      <div
                                                         key={"outcome_id-active-1x2-" + outcome.id}
                                                         class=" disabled odd color-grey"
                                                      >
                                                         {outcome.oldOdds == null ?
                                                            "" :
                                                            outcome.oldOdds < outcome.odds ?
                                                               <span class="odds-change flash odds-up"><i class="fas fa-long-arrow-up color-green"></i></span> :
                                                               <span class="odds-change flash odds-down"><i class="fas fa-long-arrow-down color-red"></i></span>}

                                                         {outcome.odds}
                                                      </div>
                                                   )
                                                })
                                                )
                                             }
                                          }

                                          if (market.title.id == 251 && sport_market_1_exist == 0 && sport_market_186_exist == 0 && sport_market_219_exist == 0) {
                                             if (market.status == 1) {
                                                return (market.outcomes.map((outcome, outcomes_index) => {
                                                   // console.log(outcome)
                                                   return (
                                                      <div
                                                         key={"outcome_id-active-1x2-" + outcome.id}
                                                         class={(outcome.active == 1 || outcome.active == true) && sports.data.bet.outcomes.find(x => x.id == outcome.id) ? "active odd color-grey" : " odd color-grey"}
                                                         onClick={setBet}
                                                         data-outcome_name={outcome.name.outcomeName.ko}
                                                         data-market_name={market.title.marketName.ko}
                                                         data-home-team={matches.homeTeam.name["ko"]}
                                                         data-away-team={matches.awayTeam.name["ko"]}
                                                         data-match-id={matches.id}
                                                         data-market-id={matches.markets.id}
                                                         data-outcome-id={outcome.id}
                                                         data-odds={outcome.odds}
                                                      >
                                                         {outcome.oldOdds == null ?
                                                            "" :
                                                            outcome.oldOdds < outcome.odds ?
                                                               <span class="odds-change flash odds-up"><i class="fas fa-long-arrow-up color-green"></i></span> :
                                                               <span class="odds-change flash odds-down"><i class="fas fa-long-arrow-down color-red"></i></span>}

                                                         {outcome.odds}
                                                      </div>
                                                   )
                                                })
                                                )
                                             } else {
                                                return (market.outcomes.map((outcome, outcomes_index) => {
                                                   return (
                                                      <div
                                                         key={"outcome_id-active-1x2-" + outcome.id}
                                                         class=" disabled odd color-grey"
                                                      >
                                                         {outcome.oldOdds == null ?
                                                            "" :
                                                            outcome.oldOdds < outcome.odds ?
                                                               <span class="odds-change flash odds-up"><i class="fas fa-long-arrow-up color-green"></i></span> :
                                                               <span class="odds-change flash odds-down"><i class="fas fa-long-arrow-down color-red"></i></span>}

                                                         {outcome.odds}
                                                      </div>
                                                   )
                                                })
                                                )
                                             }
                                          }

                                          sport_market_1_exist = 0;
                                          sport_market_186_exist = 0;
                                          sport_market_219_exist = 0;
                                          sport_market_251_exist = 0;
                                       })
                                       }
                                    </div>
                                    {/* start handicap  */}
                                    <div class="handicap flex-inherit flex-column widthp-33">
                                       {matches.markets.map((market, market_index) => {
                                          // console.log(market)
                                          matches.markets.find(x => x.title.id == 16) ? sport_market_16_exist = 1 : 0
                                          matches.markets.find(x => x.title.id == 256) ? sport_market_256_exist = 1 : 0
                                          matches.markets.find(x => x.title.id == 187) ? sport_market_187_exist = 1 : 0
                                          matches.markets.find(x => x.title.id == 223) ? sport_market_223_exist = 1 : 0


                                          if (market.title.id == 16) {
                                             let specifier = market.specifier.hcp;

                                             if (market.status == 1) {
                                                if (handicap_specifier == null) {
                                                   handicap_specifier = specifier
                                                   return (market.outcomes.map((outcome, outcomes_index) => {
                                                      // console.log(market)
                                                      // console.log(outcome)
                                                      return (
                                                         <div
                                                            key={"outcome_id-handicap-" + outcome.id}
                                                            class={(outcome.active == 1 || outcome.active == true) && sports.data.bet.outcomes.find(x => x.id == outcome.id) ? "active odd align-items-center-inherit justify-content-center-inherit" : " odd align-items-center-inherit justify-content-center-inherit"}
                                                            onClick={setBet}
                                                            data-outcome_name={outcome.name.outcomeName.ko}
                                                            data-market_name={market.title.marketName.ko}
                                                            data-home-team={matches.homeTeam.name["ko"]}
                                                            data-away-team={matches.awayTeam.name["ko"]}
                                                            data-match-id={matches.id}
                                                            data-market-id={matches.markets.id}
                                                            data-outcome-id={outcome.id}
                                                            data-odds={outcome.odds}
                                                         >
                                                            {outcome.oldOdds == null ?
                                                            "" :
                                                            outcome.oldOdds < outcome.odds ?
                                                               <span class="odds-change flash odds-up"><i class="fas fa-long-arrow-up color-green"></i></span> :
                                                               <span class="odds-change flash odds-down"><i class="fas fa-long-arrow-down color-red"></i></span>}

                                                            <div class="flex color-darkgrey widthp-50">{specifier}</div>
                                                            <div class="flex color-grey widthp-50">{outcome.odds}</div>
                                                         </div>
                                                      )
                                                   })
                                                   )

                                                }

                                             } else {
                                                return (market.outcomes.map((outcome, outcomes_index) => {
                                                   return (
                                                      <div
                                                         key={"outcome_id-handicap-" + outcome.id}
                                                         class=" disabled odd align-items-center-inherit justify-content-center-inherit"
                                                      >
                                                         {outcome.oldOdds == null ?
                                                            "" :
                                                            outcome.oldOdds < outcome.odds ?
                                                               <span class="odds-change flash odds-up"><i class="fas fa-long-arrow-up color-green"></i></span> :
                                                               <span class="odds-change flash odds-down"><i class="fas fa-long-arrow-down color-red"></i></span>}

                                                         <div class="flex color-darkgrey widthp-50">{specifier}</div>
                                                         <div class="flex color-grey widthp-50">{outcome.odds}</div>
                                                      </div>
                                                   )
                                                })
                                                )
                                             }
                                          }

                                          if (market.title.id == 256 && sport_market_16_exist == 0) {
                                             let specifier = market.specifier.hcp;
                                             if (market.status == 1) {
                                                if (handicap_specifier == null) {
                                                   handicap_specifier = specifier
                                                   return (market.outcomes.map((outcome, outcomes_index) => {
                                                      // console.log(market)
                                                      // console.log(outcome)
                                                      return (
                                                         <div
                                                            key={"outcome_id-handicap-" + outcome.id}
                                                            class={(outcome.active == 1 || outcome.active == true) && sports.data.bet.outcomes.find(x => x.id == outcome.id) ? "active odd align-items-center-inherit justify-content-center-inherit" : " odd align-items-center-inherit justify-content-center-inherit"}
                                                            onClick={setBet}
                                                            data-outcome_name={outcome.name.outcomeName.ko}
                                                            data-market_name={market.title.marketName.ko}
                                                            data-home-team={matches.homeTeam.name["ko"]}
                                                            data-away-team={matches.awayTeam.name["ko"]}
                                                            data-match-id={matches.id}
                                                            data-market-id={matches.markets.id}
                                                            data-outcome-id={outcome.id}
                                                            data-odds={outcome.odds}
                                                         >
                                                            {outcome.oldOdds == null ?
                                                            "" :
                                                            outcome.oldOdds < outcome.odds ?
                                                               <span class="odds-change flash odds-up"><i class="fas fa-long-arrow-up color-green"></i></span> :
                                                               <span class="odds-change flash odds-down"><i class="fas fa-long-arrow-down color-red"></i></span>}

                                                            <div class="flex color-darkgrey widthp-50">{specifier}</div>
                                                            <div class="flex color-grey widthp-50">{outcome.odds}</div>
                                                         </div>
                                                      )
                                                   })
                                                   )

                                                }
                                             } else {
                                                return (market.outcomes.map((outcome, outcomes_index) => {
                                                   return (
                                                      <div
                                                         key={"outcome_id-handicap-" + outcome.id}
                                                         class=" disabled odd align-items-center-inherit justify-content-center-inherit"
                                                      >
                                                         {outcome.oldOdds == null ?
                                                            "" :
                                                            outcome.oldOdds < outcome.odds ?
                                                               <span class="odds-change flash odds-up"><i class="fas fa-long-arrow-up color-green"></i></span> :
                                                               <span class="odds-change flash odds-down"><i class="fas fa-long-arrow-down color-red"></i></span>}

                                                         <div class="flex color-darkgrey widthp-50">{specifier}</div>
                                                         <div class="flex color-grey widthp-50">{outcome.odds}</div>
                                                      </div>
                                                   )
                                                })
                                                )
                                             }
                                          }

                                          if (market.title.id == 187 && sport_market_16_exist == 0 && sport_market_256_exist == 0) {
                                             let specifier = market.specifier.hcp;
                                             if (market.status == 1) {
                                                if (handicap_specifier == null) {
                                                   handicap_specifier = specifier
                                                   return (market.outcomes.map((outcome, outcomes_index) => {
                                                      // console.log(market)
                                                      // console.log(outcome)
                                                      return (
                                                         <div
                                                            key={"outcome_id-handicap-" + outcome.id}
                                                            class={(outcome.active == 1 || outcome.active == true) && sports.data.bet.outcomes.find(x => x.id == outcome.id) ? "active odd align-items-center-inherit justify-content-center-inherit" : " odd align-items-center-inherit justify-content-center-inherit"}
                                                            onClick={setBet}
                                                            data-outcome_name={outcome.name.outcomeName.ko}
                                                            data-market_name={market.title.marketName.ko}
                                                            data-home-team={matches.homeTeam.name["ko"]}
                                                            data-away-team={matches.awayTeam.name["ko"]}
                                                            data-match-id={matches.id}
                                                            data-market-id={matches.markets.id}
                                                            data-outcome-id={outcome.id}
                                                            data-odds={outcome.odds}
                                                         >
                                                            {outcome.oldOdds == null ?
                                                            "" :
                                                            outcome.oldOdds < outcome.odds ?
                                                               <span class="odds-change flash odds-up"><i class="fas fa-long-arrow-up color-green"></i></span> :
                                                               <span class="odds-change flash odds-down"><i class="fas fa-long-arrow-down color-red"></i></span>}

                                                            <div class="flex color-darkgrey widthp-50">{specifier}</div>
                                                            <div class="flex color-grey widthp-50">{outcome.odds}</div>
                                                         </div>
                                                      )
                                                   })
                                                   )

                                                }
                                             } else {
                                                return (market.outcomes.map((outcome, outcomes_index) => {
                                                   return (
                                                      <div
                                                         key={"outcome_id-handicap-" + outcome.id}
                                                         class=" disabled odd align-items-center-inherit justify-content-center-inherit"
                                                      >
                                                         {outcome.oldOdds == null ?
                                                            "" :
                                                            outcome.oldOdds < outcome.odds ?
                                                               <span class="odds-change flash odds-up"><i class="fas fa-long-arrow-up color-green"></i></span> :
                                                               <span class="odds-change flash odds-down"><i class="fas fa-long-arrow-down color-red"></i></span>}

                                                         <div class="flex color-darkgrey widthp-50">{specifier}</div>
                                                         <div class="flex color-grey widthp-50">{outcome.odds}</div>
                                                      </div>
                                                   )
                                                })
                                                )
                                             }
                                          }

                                          if (market.title.id == 223 && sport_market_16_exist == 0 && sport_market_256_exist == 0 && sport_market_187_exist == 0) {
                                             let specifier = market.specifier.hcp;
                                             if (market.status == 1) {
                                                if (handicap_specifier == null) {
                                                   handicap_specifier = specifier
                                                   return (market.outcomes.map((outcome, outcomes_index) => {
                                                      // console.log(market)
                                                      // console.log(outcome)
                                                      return (
                                                         <div
                                                            key={"outcome_id-handicap-" + outcome.id}
                                                            class={(outcome.active == 1 || outcome.active == true) && sports.data.bet.outcomes.find(x => x.id == outcome.id) ? "active odd align-items-center-inherit justify-content-center-inherit" : " odd align-items-center-inherit justify-content-center-inherit"}
                                                            onClick={setBet}
                                                            data-outcome_name={outcome.name.outcomeName.ko}
                                                            data-market_name={market.title.marketName.ko}
                                                            data-home-team={matches.homeTeam.name["ko"]}
                                                            data-away-team={matches.awayTeam.name["ko"]}
                                                            data-match-id={matches.id}
                                                            data-market-id={matches.markets.id}
                                                            data-outcome-id={outcome.id}
                                                            data-odds={outcome.odds}
                                                         >
                                                            {outcome.oldOdds == null ?
                                                            "" :
                                                            outcome.oldOdds < outcome.odds ?
                                                               <span class="odds-change flash odds-up"><i class="fas fa-long-arrow-up color-green"></i></span> :
                                                               <span class="odds-change flash odds-down"><i class="fas fa-long-arrow-down color-red"></i></span>}

                                                            <div class="flex color-darkgrey widthp-50">{specifier}</div>
                                                            <div class="flex color-grey widthp-50">{outcome.odds}</div>
                                                         </div>
                                                      )
                                                   })
                                                   )

                                                }
                                             } else {
                                                return (market.outcomes.map((outcome, outcomes_index) => {
                                                   return (
                                                      <div
                                                         key={"outcome_id-handicap-" + outcome.id}
                                                         class=" disabled odd align-items-center-inherit justify-content-center-inherit"
                                                      >
                                                         {outcome.oldOdds == null ?
                                                            "" :
                                                            outcome.oldOdds < outcome.odds ?
                                                               <span class="odds-change flash odds-up"><i class="fas fa-long-arrow-up color-green"></i></span> :
                                                               <span class="odds-change flash odds-down"><i class="fas fa-long-arrow-down color-red"></i></span>}

                                                         <div class="flex color-darkgrey widthp-50">{specifier}</div>
                                                         <div class="flex color-grey widthp-50">{outcome.odds}</div>
                                                      </div>
                                                   )
                                                })
                                                )
                                             }
                                          }
                                          sport_market_16_exist = 0;
                                          sport_market_256_exist = 0;
                                          sport_market_187_exist = 0;
                                          sport_market_223_exist = 0;
                                       })
                                       }
                                    </div>
                                    {/* end handicap */}

                                    {/* {console.log(matches.markets.find(x => x.title.id == 18))} */}
                                    {/* start  over and under */}
                                    <div class="overunder flex-inherit flex-column align-items-center-inherit justify-content-center-inherit widthp-33">
                                       {matches.markets.map((market, market_index) => {
                                          // console.log(market)
                                          matches.markets.find(x => x.title.id == 18) ? sport_market_18_exist = 1 : 0
                                          matches.markets.find(x => x.title.id == 258) ? sport_market_258_exist = 1 : 0
                                          matches.markets.find(x => x.title.id == 189) ? sport_market_189_exist = 1 : 0
                                          matches.markets.find(x => x.title.id == 225) ? sport_market_225_exist = 1 : 0

                                          if (market.title.id == 18) {
                                             let specifier = market.specifier.total;
                                             if (market.status == 1) {
                                                if (over_under_specifier == null) {
                                                   over_under_specifier = specifier
                                                   return (market.outcomes.map((outcome, outcomes_index) => {
                                                      return (
                                                         <div
                                                            key={"outcome_id-over-and-under-" + outcome.id}
                                                            class={(outcome.active == 1 || outcome.active == true) && sports.data.bet.outcomes.find(x => x.id == outcome.id) ? "active odd align-items-center-inherit justify-content-center-inherit" : " odd align-items-center-inherit justify-content-center-inherit"}
                                                            onClick={setBet}
                                                            data-outcome_name={outcome.name.outcomeName.ko}
                                                            data-market_name={market.title.marketName.ko}
                                                            data-home-team={matches.homeTeam.name["ko"]}
                                                            data-away-team={matches.awayTeam.name["ko"]}
                                                            data-match-id={matches.id}
                                                            data-market-id={matches.markets.id}
                                                            data-outcome-id={outcome.id}
                                                            data-odds={outcome.odds}
                                                         >
                                                            {outcome.oldOdds == null ?
                                                            "" :
                                                            outcome.oldOdds < outcome.odds ?
                                                               <span class="odds-change flash odds-up"><i class="fas fa-long-arrow-up color-green"></i></span> :
                                                               <span class="odds-change flash odds-down"><i class="fas fa-long-arrow-down color-red"></i></span>}

                                                            <div class="flex color-darkgrey widthp-50"> {outcome.name.id == 12 ? "O" : "U"} {specifier}</div>
                                                            <div class="flex color-grey widthp-50">{outcome.odds}</div>
                                                         </div>
                                                      )
                                                   })
                                                   )

                                                }

                                             } else {

                                             }
                                          }
                                          sport_market_18_exist = 0;
                                          sport_market_258_exist = 0;
                                          sport_market_189_exist = 0;
                                          sport_market_225_exist = 0;
                                       })
                                       }
                                    </div>
                                    {/* end over and under  */}
                                 </div>
                                 <div class="widthp-10 background-transparent-b-30">
                                    <div class="flex detail widthp-100 justify-content-center align-items-center color-white">+{matches.markets.length}</div>
                                 </div>
                              </div>
                           )
                        })
                        : <div class="flex justify-content-center heightp-100 align-items-center"><i class="fa fa-spinner fa-spin fa-4x fa-fw color-grey"></i></div>
                     }

                  </div>
                  <div class="bottom-wrap border-top flex padding-vertical-10 flex-inherit height-59 align-items-center-inherit0">
                     <div class="count-list flex-inherit grow-2 heightp-100"></div>
                     <div class="pagination flex-inherit heightp-100">
                        <div class="flex margin-left-5 page">
                           <Link to="/inplay?offset=0">
                              <button class="page-left background-transparent-b-20 margin-right-5">
                                 <i class="fas fa-chevron-left margin-0 color-grey"></i>
                              </button>
                           </Link>
                           <Link to="/inplay?offset=0">
                              <button class="page-right background-transparent-b-20">
                                 <i class="fas fa-chevron-right margin-0 color-grey"></i>
                              </button>
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="inplay-detail flex-inherit flex-column padding-vertical-10 padding-left-5 padding-right-10">
                  <div class="detail-header flex-inherit flex-column">
                     <div class="height-40 align-items-center background-transparent-b-20 padding-horizontal-10">
                        <i class="fas fa-tshirt color-grey font-size-11"></i>
                        <span class="color-grey">
                           파크타코르 타슈켄트<span class="margin-horizontal-4 color-twhite">vs</span>나사프 카르시
                        </span>
                     </div>
                     <div class="height-40 background-transparent-b-10 padding-horizontal-10 margin-bottom-10">
                        <div class="flex grow-2 align-items-center">
                           <i class="far fa-stopwatch color-grey font-size-11"></i>
                           <span class="color-grey">12 / 30 19:00</span>
                        </div>
                        <div class="flex align-items-center">
                           <i class="fas fa-map-marker-alt color-grey font-size-11"></i>
                           <span class="color-grey">Etihad Stadium</span>
                        </div>
                     </div>
                  </div>
                  <div class="market-list flex-inherit flex-column scrollable-auto"></div>
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
