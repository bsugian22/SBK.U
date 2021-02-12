import React, { Fragment, useEffect, useState, useContext } from "react";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { chain } from "lodash";
import moment from "moment";
import Select from "react-select";
import { mapStateToProps, mapDispatchProps } from "../../redux/store";
import sportsModel from "../../models/sportsModel";
import MenuContext from "../../contexts/Menu.context";
const Sports = (props) => {
  let isSubscribed = true;
  const model = new sportsModel();
  const context = useContext(MenuContext);
  const [sports, setSports] = useState({
    data: [],
    total: null,
    count: null,
    per_page: null,
    page: 1,
    last_page: null,
    detail: null,
    detail_data: null,
  });

  useEffect(() => {
    isSubscribed = true;
    fetch();
    return () => {
      isSubscribed = false;
    };
  }, [sports.page]);

  const fetch = async () => {
    const {
      data: { data: data, total, count, per_page, page, last_page },
    } = await model.index({
      page: sports.page,
      per_page: sports.per_page,
    });

    if (isSubscribed) {
      setSports({
        ...sports,
        total: total,
        count: count,
        per_page: per_page,
        page: page,
        last_page: last_page,
        data: chain(data)
          .groupBy((match) => moment(match.startAt).format("YYYY-MM-DD"))
          .map((matches, startAt) => ({ startAt, matches }))
          .orderBy("startAt")
          .value(),
      });
    }
  };

  const prev = () => {
    setSports({
      ...sports,
      page: sports.page - 1,
    });
  };

  const next = () => {
    setSports({
      ...sports,
      page: sports.page + 1,
    });
  };

  const setPage = (e) => {
    setSports({
      ...sports,
      page: e.value,
    });
  };

  const setDetail = async (item) => {
    if (sports.detail === item.id && context.state.detailMenu === true) {
      context.actions.setdetailMenu(false);
      setSports({
        ...sports,
        detail: null,
        detail_data: null,
      });
    } else {
      const {
        data: { data: data },
      } = await model.show(item.id);

      context.actions.setdetailMenu(true);
      setSports({
        ...sports,
        detail: item.id,
        detail_data: data,
      });
    }
  };

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
            sports.detail_data
              ? "prematch-wrap prematch-content-desktop border-top flex-row flex-inherit view-detail"
              : "prematch-wrap prematch-content-desktop border-top flex-row flex-inherit"
          }
        >
          <div class="prematch-content flex-column">
            <div class="prematch-header flex-inherit flex-column padding-top-10 padding-left-10 padding-right-10">
              <div class="event-slider flex-column widthp-100">
                <div class="flex event-list height-60 align-items-center padding-horizontal-10 background-transparent-b-30">
                  <Link to="/">전체</Link>
                  <Link to="/">전체</Link>
                  <Link to="/">전체</Link>
                  <Link to="/">전체</Link>
                  <Link to="/">전체</Link>
                  <Link to="/">전체</Link>
                  <Link to="/">전체</Link>
                </div>
                <div class="flex height-40 padding-horizontal-10 align-items-center background-transparent-b-20">
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
            </div>
            <div class="prematch-list border-bottom match-list grow-2 padding-left-10 padding-right-10 padding-bottom-10 scrollable-auto flex-column">
              {sports.data.length > 0
                ? sports.data.map((matches, index) => {
                    var rows = [];
                    rows.push(
                      <div
                        class="flex title background-transparent-b-30 height-40 align-items-center-inherit"
                        key={index}
                      >
                        <div class="flex padding-horizontal-10 widthp-45 heightp-100">
                          <span class="color-grey">
                            <i class="far fa-calendar-week"></i>
                            {moment(matches.startAt).format("YY / MM / DD")}
                          </span>
                        </div>
                        <div class="flex widthp-55">
                          <div class="flex widthp-100 title-info">
                            <div class="flex flex-inherit align-items-center-inherit justify-content-center-inherit padding-2">
                              <div class="widthp-33 padding-5">
                                <div class="flex">
                                  <span class="color-twhite">1</span>
                                </div>
                              </div>
                              <div class="widthp-33 padding-5 margin-horizontal-2">
                                <div class="flex">
                                  <span class="color-twhite">x</span>
                                </div>
                              </div>
                              <div class="widthp-33 padding-5">
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
                        return (
                          <div
                            class="flex list background-transparent-b-30 height-40"
                            data-type="0"
                            data-id="0"
                            data-home-competitor="0"
                            data-away-competitor="0"
                            key={key}
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
                                  {match.tournament.title["ko"]}
                                </span>
                              </div>
                              <div class="team padding-horizontal-5">
                                <span class="color-grey text-ellipsis">
                                  {match.homeTeam.name["ko"]}
                                  <span class="color-twhite margin-horizontal-5">
                                    vs
                                  </span>
                                  {match.awayTeam.name["ko"]}
                                </span>
                              </div>
                            </div>
                            <div class="flex widthp-55">
                              <div class="flex widthp-100 market-default">
                                <div class="flex flex-inherit align-items-center-inherit padding-2">
                                  이 곳은 배당영역
                                </div>
                                <div class="flex justify-content-center-inherit align-items-center-inherit padding-vertical-2 padding-left-0 padding-right-2 market-count">
                                  <div
                                    class="flex market-detail widthp-50 margin-right-2"
                                    data-id="0"
                                    onClick={() => setDetail(match)}
                                  >
                                    <button
                                      className={
                                        match.id === sports.detail
                                          ? "color-green"
                                          : "color-grey"
                                      }
                                    >
                                      +{match.markets}
                                    </button>
                                  </div>
                                  <div class="flex bookmark widthp-50">
                                    <span class="color-grey">
                                      <i class="fas fa-star margin-right-0"></i>
                                    </span>
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
                : "없음"}
            </div>

            <div class="bottom-wrap border-top flex flex-inherit height-60 padding-10 align-items-center-inherit0">
              <div class="pagination widthp-100 flex-inherit justify-content-end">
                <div class="flex selectBox">
                  <Select
                    className="select-container select-position"
                    classNamePrefix="select-box"
                    value={{ label: sports.page, value: sports.page }}
                    onChange={setPage}
                    options={((rows, i, len) => {
                      while (++i <= len) {
                        rows.push({ value: i, label: i });
                      }
                      return rows;
                    })([], 0, sports.last_page)}
                  />
                </div>
                <div class="grow-2"></div>
                <div class="flex page">
                  <button
                    class="page-left btn-0 background-transparent-b-20 flex align-items-center justify-content-center margin-right-5"
                    onClick={prev}
                    disabled={1 >= sports.page}
                  >
                    <i class="fas fa-chevron-left margin-0 color-white"></i>
                  </button>
                  <button
                    class="page-right btn-0 background-transparent-b-20 flex align-items-center justify-content-center"
                    onClick={next}
                    disabled={sports.last_page <= sports.page}
                  >
                    <i class="fas fa-chevron-right margin-0 color-white"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="prematch-detail flex-inherit flex-column padding-vertical-10 padding-left-5 padding-right-10">
            {sports.detail_data ? (
              <Fragment>
                <div class="detail-header flex-inherit flex-column">
                  <div class="height-40 align-items-center background-transparent-b-20 padding-horizontal-10">
                    <i class="fas fa-tshirt color-grey font-size-11"></i>
                    <span class="color-grey">
                      {sports.detail_data.homeTeam.name.ko ||
                        sports.detail_data.homeTeam.name.en}
                      <span class="margin-horizontal-4 color-twhite">vs</span>
                      {sports.detail_data.awayTeam.name.ko ||
                        sports.detail_data.awayTeam.name.en}
                    </span>
                  </div>
                  <div class="height-40 background-transparent-b-10 padding-horizontal-10 margin-bottom-10">
                    <div class="flex grow-2 align-items-center">
                      <i class="far fa-stopwatch color-grey font-size-11"></i>
                      <span class="color-grey">
                        {moment(sports.detail_data.startAt).format(
                          "MM / DD HH:mm"
                        )}
                      </span>
                    </div>
                    <div class="flex align-items-center">
                      <i class="fas fa-map-marker-alt color-grey font-size-11"></i>
                      <span class="color-grey">
                        {sports.detail_data.tournament.title.ko ||
                          sports.detail_data.tournament.title.en}
                      </span>
                    </div>
                  </div>
                </div>
                <div class="market-list flex-inherit flex-column scrollable-auto">
                  {sports.detail_data.markets.length > 0
                    ? sports.detail_data.markets.map((market, market_index) => {
                        var rows = [];

                        rows.push(
                          <div
                            class="market-header height-40 background-transparent-b-30 padding-horizontal-10 align-items-center border-bottom shrink-0"
                            key={market_index}
                          >
                            <span class="color-grey">
                              {market.title.marketName.ko}
                            </span>
                          </div>
                        );

                        rows.push(
                          <div class="market-data flex-inherit flex-wrap flex-row background-transparent-b-30 shrink-0">
                            <div class="height-40 data active flex-inherit align-items-center background-transparent-w-5 widthp-33 padding-horizontal-5 border-top-white1 border-bottom-white1">
                              <div class="grow-2 text-ellipsis padding-horizontal-2">
                                <span class="color-grey text-ellipsis">1</span>
                              </div>
                              <div class="shrink-0">
                                <span class="color-grey">1.75</span>
                              </div>
                            </div>
                            <div class="height-40 data flex-inherit align-items-center background-transparent-w-5 widthp-33 padding-horizontal-5 border-left-white border-top-white1 border-bottom-white1 border-right-white">
                              <div class="grow-2 text-ellipsis padding-horizontal-2">
                                <span class="color-grey text-ellipsis">
                                  무승부
                                </span>
                              </div>
                              <div class="shrink-0">
                                <span class="color-grey">2.83</span>
                              </div>
                            </div>
                            <div class="height-40 data flex-inherit align-items-center background-transparent-w-5 widthp-33 padding-horizontal-5 border-top-white1 border-bottom-white1">
                              <div class="grow-2 text-ellipsis padding-horizontal-2">
                                <span class="color-grey text-ellipsis">2</span>
                              </div>
                              <div class="shrink-0">
                                <span class="color-grey">2.10</span>
                              </div>
                            </div>
                          </div>
                        );

                        return rows;
                      })
                    : "없음"}
                </div>
              </Fragment>
            ) : (
              ""
            )}
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
      <div
        class={
          sports.detail_data
            ? "prematch-content-mobile view-detail-off"
            : "prematch-wrap prematch-content-mobile flex-inherit flex-column"
        }
      >
        <div class="widthp-100 height-40 align-items-center-inherit border-bottom">
          <div class="flex pi-title">
            <span class="color-white padding-left-15">PREMATCHES</span>
          </div>
        </div>
        <div class="widthp-100 height-40 align-items-center-inherit border-bottom">
          <div class="flex pi-title green grow-2">
            <span class="color-white padding-left-15">SOCCER</span>
          </div>
          <div class="flex">
            <span class="color-white padding-horizontal-15">
              <em class="color-green">1225</em> Matches
            </span>
          </div>
        </div>
        <div class="prematch-list border-bottom grow-2 flex-column">
          {sports.data.length > 0
            ? sports.data.map((matches, index) => {
                var rows = [];
                rows.push(
                  <Fragment key={index}>
                    <div class="flex widthp-100 height-40 align-items-center-inherit border-bottom" >
                      <div class="flex pi-title orange border-right grow-2">
                        <span class="color-white padding-left-15 grow-2">
                          {moment(matches.startAt).format("YY-MM-DD")} 수요일
                        </span>
                      </div>
                      <div class="flex border-left">
                        <button
                          type="button"
                          class="color-white heightp-100 align-items-center padding-horizontal-15"
                        >
                          <i class="fal fa-angle-up"></i>
                        </button>
                      </div>
                    </div>

                    <div class="flex pi-title orange background-transparent-b-20 border-bottom height-40 align-items-center-inherit">
                      <div class="flex padding-horizontal-15 widthp-55 heightp-100">
                        <span class="color-white">tournament Name 출력</span>
                      </div>
                      <div class="flex widthp-45">
                        <div class="flex widthp-100 title-info">
                          <div class="flex widthp-100 flex-inherit align-items-center-inherit justify-content-center-inherit">
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
                  </Fragment>
                );

                rows.push(
                  matches.matches.map((match, key) => {
                    return (
                      <div
                        class="flex list border-bottom align-items-center-inherit"
                        data-type=""
                        data-id=""
                        data-home-competitor=""
                        data-away-competitor=""
                        key={key}
                      >
                        <div class="flex widthp-55">
                          <div class="flex detail widthp-100 flex-column padding-horizontal-15 padding-vertical-10">
                            <div class="flex">
                              <span class="color-white">
                                {match.homeTeam.name["ko"]}
                              </span>
                            </div>
                            <div class="flex">
                              <span class="color-white">
                                {match.awayTeam.name["ko"]}
                              </span>
                            </div>
                            <div class="flex padding-top-5">
                              <span class="color-yellow">
                                {moment(match.startAt).format("HH:mm")}
                              </span>
                              <span
                                class="color-blue padding-left-5"
                                onClick={() => setDetail(match)}
                              >
                                <button
                                  className={
                                    match.id === sports.detail
                                      ? "color-green padding-0"
                                      : "color-blue padding-0"
                                  }
                                >
                                  +{match.markets}
                                  <span class="color-grey padding-left-5">
                                    <i class="fal fa-angle-double-right"></i>
                                  </span>
                                </button>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div class="flex widthp-45 background-transparent-b-20">
                          <div class="flex widthp-100 title-info heightp-100 align-items-center">
                            <div class="flex flex-inherit market-default align-items-center-inherit justify-content-center-inherit heightp-100">
                              <div class="flex flex-inherit align-items-center-inherit"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                );

                return rows;
              })
            : "없음"}
        </div>

        <div class="bottom-wrap border-top flex flex-inherit height-60 padding-10 align-items-center-inherit0">
          <div class="pagination widthp-100 flex-inherit justify-content-end">
            <div class="flex selectBox">
              <Select
                className="select-container select-position"
                classNamePrefix="select-box"
                value={{ label: sports.page, value: sports.page }}
                onChange={setPage}
                options={((rows, i, len) => {
                  while (++i <= len) {
                    rows.push({ value: i, label: i });
                  }
                  return rows;
                })([], 0, sports.last_page)}
              />
            </div>
            <div class="grow-2"></div>
            <div class="flex page">
              <button
                class="page-left btn-0 background-transparent-b-20 flex align-items-center justify-content-center margin-right-5"
                onClick={prev}
                disabled={1 >= sports.page}
              >
                <i class="fas fa-chevron-left margin-0 color-white"></i>
              </button>
              <button
                class="page-right btn-0 background-transparent-b-20 flex align-items-center justify-content-center"
                onClick={next}
                disabled={sports.last_page <= sports.page}
              >
                <i class="fas fa-chevron-right margin-0 color-white"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        class={
          context.state.detailMenu
            ? "odds-detail-wrap flex-inherit flex-column widthp-100 view-detail"
            : "odds-detail-wrap"
        }
      >
        {sports.detail_data ? (
          <Fragment>
            <div class="odds-detail-league-title widthp-100 height-40 align-items-center-inherit border-bottom">
              <div class="flex pi-title green grow-2 border-right">
                <span class="color-white padding-left-15">
                  SOCCER - <strong>European U21 Championship</strong>
                </span>
              </div>
              <div class="flex">
                <button
                  class="color-white padding-horizontal-15 flex align-items-center heightp-100"
                  onClick={() => setDetail(sports.detail_data)}
                >
                  <i class="fal fa-angle-double-left"></i>
                </button>
              </div>
            </div>
            <div class="odds-detail-team border-bottom padding-15 flex-column">
              <div class="flex">
                <span class="datetime color-yellow">
                  <strong>
                    {moment(sports.detail_data.startAt).format("MM / DD HH:mm")}
                  </strong>
                </span>
              </div>
              <div class="flex">
                <span class="color-white">
                  {sports.detail_data.homeTeam.name.ko ||
                    sports.detail_data.homeTeam.name.en}
                </span>
                <span class="color-grey padding-horizontal-5">VS</span>
                <span class="color-white">
                  {sports.detail_data.awayTeam.name.ko ||
                    sports.detail_data.awayTeam.name.en}
                </span>
              </div>
            </div>
            <div class="market-list flex-inherit flex-column scrollable-auto">
              {sports.detail_data.markets.length > 0
                ? sports.detail_data.markets.map((market, market_index) => {
                    var rows = [];

                    rows.push(
                      <div class="odds-detail-wwl-titleist height-40 align-items-center-inherit border-bottom background-transparent-b-20" key={market_index}>
                        <div class="flex pi-title">
                          <span class="color-white padding-left-15">
                            {market.title.marketName.ko}
                          </span>
                        </div>
                      </div>
                    );

                    rows.push(
                      <Fragment>
                        <div class="odds-detail-wwl-cs align-items-center-inherite border-bottom flex-inherit justify-content-center-inherit heightp-100" key={market_index}>
                          <div class="widthp-33 border-right padding-vertical-10">
                            <span class="color-white">AI Naser SC</span>
                          </div>
                          <div class="widthp-33 border-right padding-vertical-10">
                            <span class="color-white">무승부</span>
                          </div>
                          <div class="widthp-33 padding-vertical-10">
                            <span class="color-white">AI Arbi SC</span>
                          </div>
                        </div>
                        <div class="odds-detail-wwl-content border-bottom flex-inherit justify-content-center-inherit">
                          <div class="widthp-33 border-right padding-vertical-10">
                            <span class="color-green">2.14</span>
                          </div>
                          <div class="widthp-33 border-right padding-vertical-10">
                            <span class="color-green">3.30</span>
                          </div>
                          <div class="widthp-33 padding-vertical-10">
                            <span class="color-green">3.45</span>
                          </div>
                        </div>
                      </Fragment>
                    );

                    return rows;
                  })
                : "없음"}
            </div>
          </Fragment>
        ) : (
          ""
        )}
      </div>
    </Fragment>
  );
};

export default connect(mapStateToProps, mapDispatchProps)(Sports);
