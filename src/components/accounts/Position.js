import { Link, NavLink } from "react-router-dom";
import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import MessagePost from "./messagePost";
import Moment from "moment";
import sweetalert from "../../plugins/sweetalert";
import Select from "react-select";
import {
  allPositions,
  filteredProceedingPosition,
  filteredHitPosition,
  filteredAestheticPosition,
  setPositions,
  changePositionCategory,
  changePositionAmount,
  changePositionIds,
  createPositionAction,
  onClickPagePosition,
  onClickCancelPosition,
  prevPagePosition,
  nextPagePosition,
  selectAllPosition,
  changePositionStatus,
  checkPositionCertainItem,
  selectPostion,
} from "../../redux/accounts/position/positionActions";
import Logo from "../layouts/Logo";
import { setCompetitorName } from "../../helpers/object";
export default function Position() {
  let position = useSelector((state) => state.position);
  let positions = useSelector((state) => state.position.positions);
  let createPosition = useSelector((state) => state.position.createPosition);
  let list = useSelector((state) => state.position.list);
  let isSubscribed = true;
  const swal = new sweetalert();
  let page = useSelector((state) => state.position.positions.page);
  let lastPage = useSelector((state) => state.position.positions.lastPage);
  let per_page = useSelector((state) => state.position.positions.per_page);
  let list_pages = useSelector((state) => state.position.positions.list_pages);
  let sports = useSelector((state) => state.sport);
  let dispatch = useDispatch();

  useEffect(() => {
    isSubscribed = true;
    dispatch(setPositions({ page: page, per_page: per_page }));
    return () => {
      isSubscribed = false;
    };
  }, []);

  return (
    <Fragment>
      <div class="content account-continer flex flex-inherit grow-2 flex-column">
        <div class="position-wrap account position-content-desktop flex-inherit">
          <div class="position-left-content account-height widthp-50 padding-10 flex-inherit flex-column border-right scrollable-auto">
            <div class="position-comfile flex-column flex-inherit">
              <div class="flex-column flex-inherit widthp-100">
                <div class="red-shadow height-45 background-transparent-b-10 align-items-center padding-left-15 border-bottom-rb flex-inherit">
                  <span class="color-white grow-2">베팅내역 </span>
                </div>
                <div class="position-tab height-45 border-bottom-rb border-top flex-inherit align-items-center-inherit background-transparent-b-5">
                  <div
                    class={
                      list == "ALL"
                        ? "widthp-25 border-right-rb active"
                        : "widthp-25 border-right-rb "
                    }
                  >
                    <button
                      type="button"
                      class={
                        list == "ALL"
                          ? "color-green widthp-100 heightp-100 flex justify-content-center align-items-center widthp-100 heightp-100"
                          : "color-white widthp-100 heightp-100 flex justify-content-center align-items-center widthp-100 heightp-100"
                      }
                      onClick={() => dispatch(allPositions())}
                    >
                      {list == "ALL" ? <i class="fal fa-check"></i> : ""}
                      <span>전체</span>
                    </button>
                  </div>
                  <div
                    class={
                      list == "WAITING"
                        ? "widthp-25 border-right-rb border-left-rw active"
                        : "widthp-25 border-right-rb border-left-rw"
                    }
                  >
                    <button
                      type="button"
                      class={
                        list == "WAITING"
                          ? "color-green widthp-100 heightp-100 flex justify-content-center align-items-center widthp-100 heightp-100"
                          : "color-white widthp-100 heightp-100 flex justify-content-center align-items-center widthp-100 heightp-100"
                      }
                      onClick={() => dispatch(filteredProceedingPosition())}
                    >
                      {list == "WAITING" ? <i class="fal fa-check"></i> : ""}
                      <span>진행중</span>
                    </button>
                  </div>
                  <div
                    class={
                      list == "WINNING"
                        ? "widthp-25 border-right-rb border-left-rw active"
                        : "widthp-25 border-right-rb border-left-rw "
                    }
                  >
                    <button
                      type="button"
                      class={
                        list == "WINNING"
                          ? "color-green widthp-100 heightp-100 flex justify-content-center align-items-center widthp-100 heightp-100"
                          : "color-white widthp-100 heightp-100 flex justify-content-center align-items-center widthp-100 heightp-100"
                      }
                      onClick={() => dispatch(filteredHitPosition())}
                    >
                      {list == "WINNING" ? <i class="fal fa-check"></i> : ""}
                      <span>적중</span>
                    </button>
                  </div>
                  <div
                    class={
                      list == "DEFEATED"
                        ? "widthp-25 border-left-rw active"
                        : "widthp-25 border-left-rw"
                    }
                  >
                    <button
                      type="button"
                      class={
                        list == "DEFEATED"
                          ? "color-green widthp-100 heightp-100 flex justify-content-center align-items-center widthp-100 heightp-100"
                          : "color-white widthp-100 heightp-100 flex justify-content-center align-items-center widthp-100 heightp-100"
                      }
                      onClick={() => dispatch(filteredAestheticPosition())}
                    >
                      {list == "DEFEATED" ? <i class="fal fa-check"></i> : ""}
                      <span>미적중</span>
                    </button>
                  </div>
                </div>
              </div>
              <div class="position-content flex-column">
                <table>
                  <thead class="background-transparent-b-10  border-top">
                    <tr>
                      <th
                        class="height-45"
                        onClick={() => {
                          dispatch(changePositionStatus());
                          dispatch(selectAllPosition());
                        }}
                      >
                        <span class="color-grey">전체선택</span>
                      </th>
                      <th class="height-45">
                        <span class="color-grey">베팅시간</span>
                      </th>
                      <th class="height-45">
                        <span class="color-grey">타입</span>
                      </th>
                      <th class="height-45">
                        <span class="color-grey">배당</span>
                      </th>
                      <th class="height-45">
                        <span class="color-grey">베팅금액</span>
                      </th>
                      <th class="height-45">
                        <span class="color-grey">예상 당첨금</span>
                      </th>
                      {/* <th class="height-45">
                        <span class="color-grey">진행</span>
                      </th> */}
                      <th class="height-45">
                        <span class="color-grey">결과</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody class="background-transparent-b-5">
                    {position?.loading ? (
                      <tr>
                        <td colspan="8" class="td-3">
                          <i class="fa fa-spinner fa-spin fa-2x fa-fw color-grey"></i>
                        </td>
                      </tr>
                    ) : position?.positions?.data?.length == 0 ? (
                      <tr>
                        <td colspan="12" class="color-white">
                          데이터가 존재하지 않습니다.
                        </td>
                      </tr>
                    ) : (
                      position?.positions?.data?.map((item, index) => {
                        return (
                          <tr key={item.id} class={position.selectedPosition == null ? "rows" : position.selectedPosition.id == item.id ? "active rows" : "rows"} key={index} onClick={() => { dispatch(selectPostion(item)) }}>
                            <td class="height-45 border-top">
                              <input
                                type="checkbox"
                                checked={
                                  item?.isChecked == "" ||
                                    item?.isChecked == undefined ||
                                    item?.isChecked == null
                                    ? false
                                    : item.isChecked
                                }
                                onChange={(e) => {
                                  let checked = e.target.checked;
                                  let payload = {
                                    status: checked,
                                    id: item.id,
                                  };
                                  dispatch(checkPositionCertainItem(payload));
                                }}
                              />
                            </td>
                            <td class="height-45 border-top">
                              <span class="color-grey">
                                {item?.createdAt
                                  ? Moment(item.createdAt).format(
                                    "YY-MM-DD HH:mm ")
                                  : ""
                                }
                              </span>
                            </td>
                            <td class="height-45 border-top">
                              <span class="color-grey">{item?.type}</span>
                            </td>
                            <td class="height-45 border-top">
                              <span class="color-grey">
                                {item?.odds.toFixed(2)}
                              </span>
                            </td>
                            <td class="height-45 border-top">
                              <span class="color-grey">{(item?.amount).toLocaleString()}원</span>
                            </td>
                            <td class="height-45 border-top">
                              <span class="color-grey">
                                {(
                                  item?.odds.toFixed(2) * item?.amount
                                ).toLocaleString()}
                                원
                              </span>
                            </td>
                            <td class="height-45 border-top">
                              <span class="color-red">{item?.status}</span>
                            </td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>
              <div class="position-item-footer flex-inherit border-top padding-vertical-10 align-items-center background-transparent-b-10 border-bottom-rb">
                <div class="grow-2 padding-left-10">
                  <button
                    type="button"
                    class="color-grey padding-10 background-transparent-b-10"
                  >
                    <i class="fal fa-trash-alt"></i>선택 삭제
                  </button>
                </div>
              </div>
              {/* <div class="history-item-footer flex-inherit border-top padding-vertical-10 align-items-center background-transparent-b-10 border-bottom-rb">
                <div class="grow-2 padding-left-10">
                  <input
                    type="text"
                    class="padding-15 color-white background-transparent-b-10 width-110 heightp-100"
                    placeholder="Category"
                    value={createPosition?.category}
                    onChange={(e) => {
                      let category = e.target.value;
                      dispatch(changePositionCategory(category));
                    }}
                  />
                </div>
                <div class="grow-2 padding-left-3">
                  <input
                    type="text"
                    class="padding-15 color-white background-transparent-b-10 width-110 heightp-100 "
                    placeholder="Amount"
                    value={createPosition?.amount}
                    onChange={(e) => {
                      let amount = e.target.value;
                      dispatch(changePositionAmount(amount));
                    }}
                  />
                </div>
                <div class="grow-2 padding-left-3">
                  <input
                    type="text"
                    class="padding-15 color-white background-transparent-b-10 width-110 heightp-100 "
                    placeholder="Outcomes"
                    value={createPosition?.outcomes}
                    onChange={(e) => {
                      let ids = e.target.value;
                      dispatch(changePositionIds(ids));
                    }}
                  />
                </div>
                <button
                  type="button"
                  class="padding-15 background-green color-white"
                  style={{ marginRight: 10 }}
                  onClick={() => {
                    dispatch(createPositionAction(createPosition));
                  }}
                >
                  Create
                </button>
              </div> */}
              <div class="padding-vertical-10 flex-inherit  height-60 color-grey">
              <div class="pagination widthp-100 flex-inherit justify-content-end">
              <div class="flex selectBox">
                  <Select
                    className="select-container select-position"
                    classNamePrefix="select-box"
                    value={{ label : positions.page , value : positions.page }}
                    onChange={(e) => {
                      dispatch(
                        onClickPagePosition({
                          page: e.value,
                          per_page: per_page,
                        })
                      );
                    }}
                    options={((rows, i, len) => {
                      while (++i <= len) {
                        rows.push({ value: i, label: i });
                      }
                      return rows;
                    })([], 0, positions.lastPage)}
                  />
              </div>
              <div class="grow-2"></div>
              <div class="flex page">
                  <button
                    class="page-left btn-0 background-transparent-b-20 flex align-items-center justify-content-center margin-right-5"
                    onClick={(e) => {
                      let prevData = {
                        page: page,
                        list_pages: list_pages,
                        per_page: per_page,
                      };

                      dispatch(prevPagePosition(prevData));
                    }}
                    disabled={1 >= positions.page}
                  >
                    <i class="fas fa-chevron-left margin-0 color-white"></i>
                  </button>
                  <button
                    class="page-right btn-0 background-transparent-b-20 flex align-items-center justify-content-center"
                    onClick={(e) => {
                      let nextData = {
                        page: page,
                        list_pages: list_pages,
                        per_page: per_page,
                      };

                      dispatch(nextPagePosition(nextData));
                    }}
                    disabled={positions.lastPage <= positions.page}
                  >
                    <i class="fas fa-chevron-right margin-0 color-white"></i>
                  </button>
              </div>
            </div>
          </div>
            </div>
          </div>
          <div class="position-right-content account-height widthp-50 padding-10 flex-inherit flex-column border-left scrollable-auto" hidden={position.selectedPosition == null ? true : false}>
            <div class="position-comfile flex-column flex-inherit">
              <div class="flex-column flex-inherit widthp-100">
                <div class="red-shadow height-45 background-transparent-b-10 align-items-center padding-horizontal-15 border-bottom-rb flex-inherit">
                  <span class="color-white">베팅 상세 내역</span>
                  <div class="grow-1"></div>
                  <span class="color-red bet-cancel background-transparent-b-10 padding-horizontal-10 padding-vertical-5" onClick={() => {
                    dispatch(onClickCancelPosition(position.selectedPosition.id));
                  }}>베팅취소</span>
                </div>
              </div>
              <div class="position-content flex-column">
                <table>
                  <thead class="background-transparent-b-10 border-top">
                    <tr>
                      <th class="height-45">
                        <span class="color-grey">경기시간</span>
                      </th>
                      <th class="height-45">
                        <span class="color-grey">VS</span>
                      </th>
                      <th class="height-45">
                        <span class="color-grey">스코어</span>
                      </th>
                      <th class="height-45">
                        <span class="color-grey">베팅</span>
                      </th>
                      <th class="height-45">
                        <span class="color-grey">배당</span>
                      </th>
                      <th class="height-45">
                        <span class="color-grey">상태</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody class="background-transparent-b-5">
                    {position.selectedPosition == null ? "" :
                      position.selectedPosition.outcomes.map((outcome, indx) => {
                        let specifer = outcome.markets.specifier
                        let homeTeam = outcome?.matches?.homeTeam.name.ko
                        let awayTeam = outcome?.matches?.awayTeam.name.ko;

                        return (
                          <tr key={outcome.id}>
                            <td class="height-60 border-top">
                              <div class="list-td flex flex-column flex-inherit padding-10">
                                <div class="flex-column">
                                  <span class="color-grey"> {outcome?.matches.startAt
                                    ? Moment(outcome.matches.startAt).format(
                                      "YY-MM-DD HH:mm "
                                    )
                                    : " "}</span>
                                </div>
                              </div>
                            </td>
                            <td class="height-60 border-top">
                              <div class="list-td flex flex-column flex-inherit padding-10">
                                <div class="flex-column">
                                  <span class="color-grey">{homeTeam} vs {awayTeam}</span>
                                </div>
                              </div>
                            </td>
                            <td class="height-60 border-top">
                              <div class="list-td flex flex-column flex-inherit padding-10">
                                <div class="flex-column">
                                  <span class="color-red">{outcome?.matches?.homeScore} : {outcome?.matches?.awayScore}</span>
                                </div>
                              </div>
                            </td>
                            <td class="height-60 border-top">
                              <div class="list-td flex flex-column flex-inherit padding-10">
                                <div class="flex-column">
                                  <span class="color-white">
                                    [ {outcome?.markets?.marketName?.ko ? setCompetitorName(outcome.markets.marketName.ko, homeTeam, awayTeam, specifer) : ""} ]
                                    {
                                      outcome.markets.outcome.map((outcome_detail) => {
                                        if (outcome_detail.id == outcome.id) {

                                          let outcomeName = sports.outcomes.data ? sports.outcomes.data.find(x => x.id == outcome_detail.outcomeId).outcomeName?.ko : ""
                                          return (setCompetitorName(outcomeName, homeTeam, awayTeam, specifer))
                                        }
                                      })
                                    }
                                  </span>

                                </div>
                              </div>
                            </td>
                            <td class="height-60 border-top">
                              <div class="list-td flex flex-column flex-inherit padding-10">
                                <div class="flex-column">
                                  <span class="color-grey">{outcome.odds.toFixed(2)}</span>
                                </div>
                              </div>
                            </td>
                            <td class="height-60 border-top">
                              <div class="list-td flex flex-column flex-inherit padding-10">
                                <div class="flex-column">
                                  <span class="color-green">{outcome.status}</span>
                                </div>
                              </div>
                            </td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </table>
              </div>
              <div class="position-item-footer flex-inherit border-top border-bottom-rb padding-vertical-15 align-items-center background-transparent-b-10">
                <div class="grow-2 padding-left-10">
                  <span class="color-grey padding-right-20">
                    베팅시간
                    <span class="color-white margin-left-5">2021-09-08</span>
                  </span>
                  <span class="color-grey padding-right-20">
                    베팅폴더 수
                    <span class="color-white margin-left-5">2</span>
                  </span>
                  <span class="color-grey">
                    베팅금액
                    {/* <span class="color-green margin-left-5">{position.selectedPosition == null ? "" : position.selectedPosition.amount.toLocaleString()} 원</span> */}
                  </span>
                </div>
              </div>
              <div class="position-item-footer flex-inherit border-top border-bottom-rb padding-vertical-15 align-items-center background-transparent-b-10">
                <div class="grow-2 padding-left-10">
                  <span class="color-grey padding-right-20">
                    누적 배당
                    {/* <span class="color-red margin-left-5">{position.selectedPosition == null ? "" : position.selectedPosition.odds.toFixed(2)}</span> */}
                    {/*만약 보너스가 적용됬다면*/}<span class="color-grey margin-left-5">[ Bonus <span class="color-white">x 1.03</span> ]</span>
                  </span>
                  <span class="color-grey">
                    예상적중상금
                    {/* <span class="color-green margin-left-5">{position.selectedPosition == null ? "" : (position.selectedPosition.amount * position.selectedPosition.odds.toFixed(2)).toLocaleString()} 원</span> */}
                  </span>
                </div>
                <div class="padding-right-20">
                  {/* <span class="color-red">{position.selectedPosition == null ? "" : position.selectedPosition.status}</span> */}
                </div>
              </div>
            </div>
          </div>
          <div class="align-items-center border-left" style={{ paddingLeft: "20%" }} hidden={position.selectedPosition == null ? false : true}>
            <Logo width="120" height="30" />
          </div>
        </div>
      </div>
      <div class="widthp-100 interload-panel-mobile flex-column flex-inherit flex">
        <div class="height-40 align-items-center-inherit border-bottom-rb">
          <div class="flex pi-title grow-2">
            <span class="color-white padding-left-15">HISTORY</span>
          </div>
          <div class="flex padding-right-15">
            <Link to="/account">
              마이페이지
              <i class="fal fa-angle-double-right"></i>
            </Link>
          </div>
        </div>

        <div class="member-information height-40 align-items-center-inherit border-bottom-rb">
          <div class="flex pi-title green grow-2">
            <span class="color-white padding-left-15">
              안녕하세요. - 회원님
            </span>
          </div>
          <div class="flex">
            <span class="color-yellow padding-right-15">Lv.-</span>
          </div>
        </div>

        <div class="money-information border-bottom-rb flex-inherit">
          <div class="widthp-33 border-right-rb padding-left-15 padding-vertical-15">
            <div class="flex flex-column">
              <span class="color-white">예치금</span>
              <span class="color-green">-</span>
            </div>
          </div>
          <div class="widthp-33 border-right-rb padding-left-15 padding-vertical-15">
            <div class="flex flex-column">
              <span class="color-white">게임머니</span>
              <span class="color-green">100,000,000</span>
            </div>
          </div>
          <div class="widthp-33 padding-left-15 padding-vertical-15">
            <div class="flex flex-column">
              <span class="color-white">보너스</span>
              <span class="color-green">100,000,000</span>
            </div>
          </div>
        </div>

        <div class="interload-tab height-50 border-bottom-rb">
          <div class="flex widthp-50">
            <button type="button" class="active">
              <Link to="/betting/list">베팅목록</Link>
            </button>
          </div>
          <div class="flex widthp-50">
            <button type="button">
              <Link to="/betting/listdetail">베팅상세</Link>
            </button>
          </div>
        </div>

        {/* <div class="widthp-100 flex-column flex border-bottom-rb padding-vertical-10 padding-right-15 align-items-right">
          <div class="select height-40">
            <select name="">
              <option value="">전체</option>
              <option value="">확인중</option>
            </select>
          </div>
        </div> */}

        <div class="flex-column flex-inherit">
          <div class="flex flex-inherit flex-column list margin-bottom-1 background-transparent-b-10">
            <div class="padding-horizontal-15 justify-content-center-inherit padding-vertical-15">
              <div class="widthp-25 text-align-center">
                <span class="color-yellow">2021-01-04</span>
              </div>
              <div class="widthp-30 text-align-center">
                <span class="color-grey text-align-center">3 / 0</span>
              </div>
              <div class="widthp-25 text-align-center">
                <span class="color-green">대기</span>
              </div>
              <div class="widthp-20 text-align-center">
                <Link to="/betting/listdetail">
                  <i class="fal fa-angle-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
