import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect, useDispatch, useSelector } from "react-redux";
import { chain } from "lodash";
import { setMatchIds, setSportsType, setSideBarSportsId, setSideBarCountryId, setSideBarLeagueId, showSidebarBookmark, sortByBookmarked } from '../../redux/sport/sportActions';

export default function BookNavi(props) {

    const dispatch = useDispatch();
    let sports = useSelector((state) => state.sport);

    const clickHeader = (e) => {

        if (e.target.parentElement.classList.value == "treeview") {
            e.target.parentElement.classList.add("active");
        } else {
            e.target.parentElement.classList.remove("active");
        }
    };

    return (
        <div class="left-sidebar content-height width-300 border-right border-right-shadow flex-inherit flex-column shrink-0 scrollable-auto">
            <div class="tab flex-row height-50 border-bottom">
                <button class="sports flex widthp-33 align-items-center justify-content-center color-grey background-transparent-b-15 active">
                    <span>SPORTS</span>
                </button>
                <button class="esports flex widthp-33 align-items-center justify-content-center color-grey background-transparent-b-15">
                    <span>ESPORTS</span>
                </button>
                <button class="inplay flex widthp-33 align-items-center justify-content-center color-grey background-transparent-b-15">
                    <span>INPLAY</span>
                </button>
            </div>

            <div class="list flex-column flex-inherit">
                <div class={sports.sidebarBookmarked ? " bookmark background-transparent-b-5 align-items-center-inherit border-bottom border-top" : "bookmark background-transparent-b-5 align-items-center-inherit border-bottom border-top active"}
                    onClick={() => {
                        let sportsbookmark = [];
                        JSON.parse(localStorage.getItem("bookmarks"))?.map((id) => {
                            var matches = sports.matches.data.filter((x) => {
                                return x.id == id;
                            });
                            sportsbookmark.push(...matches)
                        })
                        dispatch(sortByBookmarked({ data: sportsbookmark }, 'prematch'))
                    }}>
                    <div class="flex height-40 padding-10 grow-2">
                        <i class="fas fa-star color-yellow"></i>
                        <span class="color-grey">Bookmark</span>
                    </div>
                    <div class="flex height-40 padding-vertical-5 align-items-center">
                        <span class="color-red padding-horizontal-20 background-transparent-b-5 heightp-100 align-items-center flex">{JSON.parse(localStorage.getItem("bookmarks"))?.length ? JSON.parse(localStorage.getItem("bookmarks"))?.length : "0"}</span>
                        <span class="arrow heightp-100 color-grey align-items-center justify-content-center flex background-transparent-b-5 border-left padding-horizontal-10">
                            <i class="far fa-chevron-down fa-xs margin-0"></i>
                        </span>
                    </div>
                </div>


                <div class="events-list flex-column">

                    {sports?.sports?.data?.map((icon, index) => {

                        if (sports.matches?.data) {
                            var matches = sports.matches.data.filter((x) => {
                                return x.type == icon.id;
                            });


                            if (matches.length) {
                                let sportMatches = {}
                                var tournaments = sports?.tournaments?.data?.filter((x) => {
                                    return x.tournament.sportId == icon.id;
                                });

                                tournaments = chain(tournaments)
                                    .groupBy((tournaments) => tournaments.tournament.category.name.en)
                                    .map((tour, id) => ({ tour, id }))
                                    .value();
                                let total_country = 0;
                                tournaments?.map((tournament, tour_index) => {
                                    tournament.tour?.map((league) => {
                                        let count = 0;
                                        var league_count_tournament = sports.matches?.data.filter((x) => {
                                            return x.tournamentId == league.id;
                                        });

                                        if (league_count_tournament.length != 0) {
                                            count = league_count_tournament.length
                                        } else {
                                            var league_count_simple_tournament = sports.matches?.data.filter((x) => {
                                                return x.simpleTournamentId == league.id;
                                            });
                                            count = league_count_simple_tournament.length
                                        }
                                        if (count != 0) {
                                            total_country++
                                        }
                                    })
                                })

                                return (
                                    <div class="events flex-inherit">
                                        <div
                                            id={icon.name.ko}
                                            class={sports.activeSideBarSportsId == icon.id ? "align-items-center-inherit event border-top border-bottom background-transparent-b-10 active" : "align-items-center-inherit event border-top border-bottom background-transparent-b-10 "}
                                            onClick={() => {
                                                sportMatches.data = matches
                                                dispatch(setSideBarSportsId({ id: icon.id, matches: matches }))
                                            }}
                                        >
                                            <div class="flex height-40 padding-10 grow-2 text-ellipsis">
                                                <i class={"color-grey icon-" + icon.id}></i>
                                                <span class="color-grey text-ellipsis">{icon.name.en}</span>
                                            </div>
                                            <div class="flex height-40 padding-vertical-5 align-items-center">
                                                <span class="color-red padding-horizontal-20 background-transparent-b-5 heightp-100 align-items-center flex">{total_country}</span>
                                                <span class="arrow heightp-100 color-grey align-items-center justify-content-center flex background-transparent-b-5 border-left padding-horizontal-10">

                                                    {sports.activeSideBarSportsId == icon.id ? <i class="far fa-chevron-down fa-xs margin-0"></i> : <i class="far fa-chevron-up fa-xs margin-0"></i>}
                                                </span>
                                            </div>
                                        </div>

                                        {tournaments?.map((tournament, tour_index) => {
                                            let totalTour = 0;
                                            let countryMatches = []
                                            tournament.tour?.map((country) => {
                                                let count = 0;
                                                var league_count_tournament = sports.matches?.data.filter((x) => {
                                                    return x.tournamentId == country.id;
                                                });

                                                if (league_count_tournament.length != 0) {
                                                    count = league_count_tournament.length
                                                } else {
                                                    var league_count_simple_tournament = sports.matches?.data.filter((x) => {
                                                        return x.simpleTournamentId == country.id;
                                                    });
                                                    count = league_count_simple_tournament.length
                                                }
                                                if (count != 0) {
                                                    totalTour++
                                                }
                                            })
                                            if (totalTour != 0) {
                                                return (
                                                    <div class="event-detail flex-column" hidden={sports.activeSideBarSportsId == icon.id ? false : true}>
                                                        <div class={sports.activeSideBarCountryId == tournament.id ? "flex align-items-center-inherit region border-top border-bottom widthp-100 active" : "flex align-items-center-inherit region border-top border-bottom widthp-100"}
                                                            onClick={(e) => {
                                                                countryMatches = []
                                                                tournament.tour.map((tour) => {
                                                                    var countryMatchesTournament = sports.matches?.data.filter((x) => {
                                                                        return x.tournamentId == tour.id;
                                                                    });

                                                                    if (countryMatchesTournament.length != 0) {
                                                                        countryMatches.push(...countryMatchesTournament)
                                                                    } else {
                                                                        var countryMatchesSimpleTournament = sports.matches?.data.filter((x) => {
                                                                            return x.simpleTournamentId == tour.id;
                                                                        });
                                                                        countryMatches.push(...countryMatchesSimpleTournament)
                                                                    }
                                                                })

                                                                dispatch(setSideBarCountryId({ id: tournament.id, matches: countryMatches }))

                                                            }}>
                                                            <div class="flex height-40 padding-10 grow-2 text-ellipsis">
                                                                <i class="far fa-flag color-yellow"></i>
                                                                <span class="color-grey text-ellipsis">{tournament.id}</span>
                                                            </div>
                                                            <div class="flex height-40 padding-vertical-5 align-items-center">
                                                                <span class="color-red padding-horizontal-20 background-transparent-b-5 heightp-100 align-items-center flex">{totalTour}</span>
                                                                <span class="arrow heightp-100 color-grey align-items-center justify-content-center flex background-transparent-b-5 border-left padding-horizontal-10">

                                                                    {sports.activeSideBarCountryId == tournament.id ? <i class="far fa-chevron-down fa-xs margin-0"></i> : <i class="far fa-chevron-up fa-xs margin-0"></i>}
                                                                </span>
                                                            </div>
                                                        </div>


                                                        {tournament.tour?.map((league) => {
                                                            let count = 0;
                                                            let leagueMatches = []
                                                            var league_count_tournament = sports.matches.data.filter((x) => {
                                                                return x.tournamentId == league.id;
                                                            });

                                                            if (league_count_tournament.length != 0) {
                                                                count = league_count_tournament.length
                                                                leagueMatches.push(...league_count_tournament)
                                                            } else {
                                                                var league_count_simple_tournament = sports.matches.data.filter((x) => {
                                                                    return x.simpleTournamentId == league.id;
                                                                });
                                                                count = league_count_simple_tournament.length
                                                                leagueMatches.push(...league_count_simple_tournament)

                                                            }

                                                            if (count != 0) {
                                                                return (
                                                                    <div class="region-detail" hidden={sports.activeSideBarCountryId == tournament.id ? false : true} >
                                                                        <div class={sports.activeSideBarLeagueId?.find(x => x == league.tournament.name.en) ? "flex align-items-center-inherit league border-top border-bottom widthp-100 active" : "flex align-items-center-inherit league border-top border-bottom widthp-100"}
                                                                            onClick={() => {


                                                                                // let currentActive = sports.activeSideBarLeagueMatches.data;
                                                                                // const league_exists = sports.activeSideBarLeagueId?.indexOf(league.tournament.name.en)

                                                                                // if (league_exists !== -1) {
                                                                                //     currentActive = currentActive.filter(val => !leagueMatches.includes(val));
                                                                                // } else {
                                                                                //     currentActive.push(...leagueMatches)
                                                                                // }

                                                                                dispatch(setSideBarLeagueId({ id: league.tournament.name.en, matches: leagueMatches,sportsId: icon.id }))
                                                                                dispatch(setMatchIds({ data: leagueMatches }, 1, 'prematch'))

                                                                            }}>
                                                                            <div class="flex height-40 padding-10 grow-2 text-ellipsis">
                                                                                <i class="far fa-flag color-yellow"></i>
                                                                                <span class="color-grey text-ellipsis">{league.tournament.name.en}</span>
                                                                            </div>
                                                                            <div class="flex height-40 padding-vertical-5 align-items-center">
                                                                                <span class="color-red padding-horizontal-20 background-transparent-b-5 heightp-100 align-items-center flex">{count}</span>
                                                                                <span class="arrow heightp-100 color-grey align-items-center justify-content-center flex background-transparent-b-5 border-left padding-horizontal-10">
                                                                                    <i class="far fa-chevron-right fa-xs margin-0"></i>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            }

                                                        })}


                                                    </div>
                                                )

                                            }

                                        })}

                                    </div>
                                )
                            }
                        }

                    })}



                </div>

            </div>
        </div>
    )
}