import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export default function BookNavi(props)
{
    return (
        <div class="left-sidebar content-height width-300 border-right border-right-shadow flex-inherit flex-column shrink-0 scrollable-auto">
            <div class="tab flex-row height-50">
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
                <div class="bookmark background-transparent-b-5 align-items-center-inherit">
                    <div class="flex height-40 padding-10 grow-2">
                        <i class="fas fa-star color-yellow"></i>
                        <span class="color-grey">Bookmark</span>
                    </div>
                    <div class="flex height-40 padding-vertical-5 align-items-center">
                        <span class="color-red padding-horizontal-20 background-transparent-b-5 heightp-100 align-items-center flex">0</span>
                        <span class="arrow heightp-100 color-grey align-items-center justify-content-center flex background-transparent-b-5 border-left padding-horizontal-10">
                            <i class="far fa-chevron-down fa-xs margin-0"></i>
                        </span>
                    </div>
                </div>
                <div class="events-list flex-column">
                    <div class="event flex-inherit">
                        <div id="soccer" class="align-items-center-inherit background-transparent-b-10 active">
                            <div class="flex height-40 padding-10 grow-2 text-ellipsis">
                                <i class="fas fa-futbol color-grey"></i>
                                <span class="color-grey text-ellipsis">축구</span>
                            </div>
                            <div class="flex height-40 padding-vertical-5 align-items-center">
                                <span class="color-red padding-horizontal-20 background-transparent-b-5 heightp-100 align-items-center flex">0</span>
                                <span class="arrow heightp-100 color-grey align-items-center justify-content-center flex background-transparent-b-5 border-left padding-horizontal-10">
                                    <i class="far fa-chevron-up fa-xs margin-0"></i>
                                </span>
                            </div>
                        </div>
                        <div class="event-detail flex-column">
                            <div class="flex align-items-center-inherit widthp-100">
                                <div class="flex height-40 padding-10 grow-2 text-ellipsis">
                                    <i class="far fa-flag color-yellow"></i>
                                    <span class="color-grey text-ellipsis">USA. MLS. Season 2020</span>
                                </div>
                                <div class="flex height-40 padding-vertical-5 align-items-center">
                                    <span class="color-red padding-horizontal-20 background-transparent-b-5 heightp-100 align-items-center flex">0</span>
                                    <span class="arrow heightp-100 color-grey align-items-center justify-content-center flex background-transparent-b-5 border-left padding-horizontal-10">
                                        <i class="far fa-chevron-double-right fa-xs margin-0"></i>
                                    </span>
                                </div>
                            </div>
                            <div class="flex align-items-center-inherit widthp-100">
                                <div class="flex height-40 padding-10 grow-2 text-ellipsis">
                                    <i class="far fa-flag color-yellow"></i>
                                    <span class="color-grey text-ellipsis">Honduras. Liga Nacional. Season 2020/2021</span>
                                </div>
                                <div class="flex height-40 padding-vertical-5 align-items-center">
                                    <span class="color-red padding-horizontal-20 background-transparent-b-5 heightp-100 align-items-center flex">0</span>
                                    <span class="arrow heightp-100 color-grey align-items-center justify-content-center flex background-transparent-b-5 border-left padding-horizontal-10">
                                        <i class="far fa-chevron-double-right fa-xs margin-0"></i>
                                    </span>
                                </div>
                            </div>
                            <div class="flex align-items-center-inherit widthp-100">
                                <div class="flex height-40 padding-10 grow-2 text-ellipsis">
                                    <i class="far fa-flag color-yellow"></i>
                                    <span class="color-grey text-ellipsis">Portugal. Primeira Liga. Season 2020/2021</span>
                                </div>
                                <div class="flex height-40 padding-vertical-5 align-items-center">
                                    <span class="color-red padding-horizontal-20 background-transparent-b-5 heightp-100 align-items-center flex">0</span>
                                    <span class="arrow heightp-100 color-grey align-items-center justify-content-center flex background-transparent-b-5 border-left padding-horizontal-10">
                                        <i class="far fa-chevron-double-right fa-xs margin-0"></i>
                                    </span>
                                </div>
                            </div>
                            <div class="flex align-items-center-inherit widthp-100">
                                <div class="flex height-40 padding-10 grow-2 text-ellipsis">
                                    <i class="far fa-flag color-yellow"></i>
                                    <span class="color-grey text-ellipsis">China. Super League. Play Offs. Season 2020</span>
                                </div>
                                <div class="flex height-40 padding-vertical-5 align-items-center">
                                    <span class="color-red padding-horizontal-20 background-transparent-b-5 heightp-100 align-items-center flex">0</span>
                                    <span class="arrow heightp-100 color-grey align-items-center justify-content-center flex background-transparent-b-5 border-left padding-horizontal-10">
                                        <i class="far fa-chevron-double-right fa-xs margin-0"></i>
                                    </span>
                                </div>
                            </div>
                            <div class="flex align-items-center-inherit widthp-100">
                                <div class="flex height-40 padding-10 grow-2 text-ellipsis">
                                    <i class="far fa-flag color-yellow"></i>
                                    <span class="color-grey text-ellipsis">England. Premier League. Season 2020/2021</span>
                                </div>
                                <div class="flex height-40 padding-vertical-5 align-items-center">
                                    <span class="color-red padding-horizontal-20 background-transparent-b-5 heightp-100 align-items-center flex">0</span>
                                    <span class="arrow heightp-100 color-grey align-items-center justify-content-center flex background-transparent-b-5 border-left padding-horizontal-10">
                                        <i class="far fa-chevron-double-right fa-xs margin-0"></i>
                                    </span>
                                </div>
                            </div>
                            <div class="flex align-items-center-inherit widthp-100">
                                <div class="flex height-40 padding-10 grow-2 text-ellipsis">
                                    <i class="far fa-flag color-yellow"></i>
                                    <span class="color-grey text-ellipsis">SPAIN. LALIGA. SEASON 2020/2021</span>
                                </div>
                                <div class="flex height-40 padding-vertical-5 align-items-center">
                                    <span class="color-red padding-horizontal-20 background-transparent-b-5 heightp-100 align-items-center flex">0</span>
                                    <span class="arrow heightp-100 color-grey align-items-center justify-content-center flex background-transparent-b-5 border-left padding-horizontal-10">
                                        <i class="far fa-chevron-double-right fa-xs margin-0"></i>
                                    </span>
                                </div>
                            </div>
                            <div class="flex align-items-center-inherit widthp-100">
                                <div class="flex height-40 padding-10 grow-2 text-ellipsis">
                                    <i class="far fa-flag color-yellow"></i>
                                    <span class="color-grey text-ellipsis">Mexico. Liga de Expansion. Season 2020/2021</span>
                                </div>
                                <div class="flex height-40 padding-vertical-5 align-items-center">
                                    <span class="color-red padding-horizontal-20 background-transparent-b-5 heightp-100 align-items-center flex">0</span>
                                    <span class="arrow heightp-100 color-grey align-items-center justify-content-center flex background-transparent-b-5 border-left padding-horizontal-10">
                                        <i class="far fa-chevron-double-right fa-xs margin-0"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div id="baseball" class="align-items-center-inherit background-transparent-b-5">
                            <div class="flex height-40 padding-10 grow-2 text-ellipsis">
                                <i class="fal fa-baseball-ball color-grey"></i>
                                <span class="color-grey text-ellipsis">야구</span>
                            </div>
                            <div class="flex height-40 padding-vertical-5 align-items-center">
                                <span class="color-red padding-horizontal-20 background-transparent-b-5 heightp-100 align-items-center flex">0</span>
                                <span class="arrow heightp-100 color-grey align-items-center justify-content-center flex background-transparent-b-5 border-left padding-horizontal-10">
                                    <i class="far fa-chevron-down fa-xs margin-0"></i>
                                </span>
                            </div>
                        </div>
                        <div id="volleyball" class="align-items-center-inherit background-transparent-b-5">
                            <div class="flex height-40 padding-10 grow-2 text-ellipsis">
                                <i class="fal fa-volleyball-ball color-grey"></i>
                                <span class="color-grey text-ellipsis">배구</span>
                            </div>
                            <div class="flex height-40 padding-vertical-5 align-items-center">
                                <span class="color-red padding-horizontal-20 background-transparent-b-5 heightp-100 align-items-center flex">0</span>
                                <span class="arrow heightp-100 color-grey align-items-center justify-content-center flex background-transparent-b-5 border-left padding-horizontal-10">
                                    <i class="far fa-chevron-down fa-xs margin-0"></i>
                                </span>
                            </div>
                        </div>
                        <div id="basketball" class="align-items-center-inherit background-transparent-b-5">
                            <div class="flex height-40 padding-10 grow-2 text-ellipsis">
                                <i class="fal fa-basketball-ball color-grey"></i>
                                <span class="color-grey text-ellipsis">농구</span>
                            </div>
                            <div class="flex height-40 padding-vertical-5 align-items-center">
                                <span class="color-red padding-horizontal-20 background-transparent-b-5 heightp-100 align-items-center flex">0</span>
                                <span class="arrow heightp-100 color-grey align-items-center justify-content-center flex background-transparent-b-5 border-left padding-horizontal-10">
                                    <i class="far fa-chevron-down fa-xs margin-0"></i>
                                </span>
                            </div>
                        </div>
                        <div id="shuttlecock" class="align-items-center-inherit background-transparent-b-5">
                            <div class="flex height-40 padding-10 grow-2 text-ellipsis">
                                <i class="fal fa-shuttlecock color-grey"></i>
                                <span class="color-grey text-ellipsis">배드민턴</span>
                            </div>
                            <div class="flex height-40 padding-vertical-5 align-items-center">
                                <span class="color-red padding-horizontal-20 background-transparent-b-5 heightp-100 align-items-center flex">0</span>
                                <span class="arrow heightp-100 color-grey align-items-center justify-content-center flex background-transparent-b-5 border-left padding-horizontal-10">
                                    <i class="far fa-chevron-down fa-xs margin-0"></i>
                                </span>
                            </div>
                        </div>
                        <div id="tabletennis" class="align-items-center-inherit background-transparent-b-5">
                            <div class="flex height-40 padding-10 grow-2 text-ellipsis">
                                <i class="fal fa-table-tennis color-grey"></i>
                                <span class="color-grey text-ellipsis">탁구</span>
                            </div>
                            <div class="flex height-40 padding-vertical-5 align-items-center">
                                <span class="color-red padding-horizontal-20 background-transparent-b-5 heightp-100 align-items-center flex">0</span>
                                <span class="arrow heightp-100 color-grey align-items-center justify-content-center flex background-transparent-b-5 border-left padding-horizontal-10">
                                    <i class="far fa-chevron-down fa-xs margin-0"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}