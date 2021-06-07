import React, { Fragment, useState, useEffect, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import Moment from "moment";
import { fetchSummary } from "../../redux/navigations/accountSummary/accountSummaryActions";

export default function AccountStatusNavi(props) {
  const dispatch = useDispatch();

  let isSubscribed = true;
  let showingUser = true;

  useEffect(() => {
    isSubscribed = true;
    // dispatch(fetchSummary());

    return () => {
      isSubscribed = false;
    };
  }, []);

  let summary = useSelector((state) => state.accountSummary);

  return (
    <Fragment>
      <div class="right-account-sidebar content-height width-300 flex-inherit flex-column scrollable-auto border-left border-left-shadow">
        <div class="summary-title height-45 shrink-0 background-transparent-b-10 align-items-center-inherit flex-inherit padding-left-15 border-bottom">
          <span class="color-green">
            SUMMARY
          </span>
        </div>
        <div class="balance-status flex-inherit flex-column">
          <div class="balance-status-header flex-inherit height-45 background-transparent-b-10 align-items-center-inherit border-bottom">
            <div class="grow-2 padding-left-15 border-top">
              <i class="fal fa-wallet color-grey margin-0 font-size-15"></i>
              <span class="color-white padding-left-5">잔고 현황</span>
            </div>
            <div class="border-top">
              <button type="button" class="font-size-15">
                <i class="fal fa-angle-down color-grey"></i>
              </button>
            </div>
          </div>
          <div class="balance-status-content flex-inherit flex-column " hidden={false}>
            <div class="widthp-100 rows flex-inherit padding-horizontal-15 height-40 border-top border-bottom align-items-center-inherit">
              <div class="grow-2">
                <i class="far fa-won-sign color-grey"></i>
                <span class="color-white padding-left-3">현금</span>
              </div>
              <div>
                <span class="color-green">
                  {summary.data.data.users?.cash ? summary.data.data.users.cash.toLocaleString("en-US", {
                    maximumFractionDigits: 2,
                  }) : "0"}
                </span>
              </div>
            </div>

            <div class="widthp-100 rows flex-inherit padding-horizontal-15 height-40 border-top border-bottom align-items-center-inherit">
              <div class="grow-2">
                <i class="fab fa-product-hunt color-grey"></i>
                <span class="color-white padding-left-3">포인트</span>
              </div>
              <div>
                <span class="color-green">
                  {summary.data.data.users?.point ? summary.data.data.users.point.toLocaleString("en-US", {
                    maximumFractionDigits: 2,
                  }) : "0"}
                </span>
              </div>
            </div>

            <div class="widthp-100 rows flex-inherit padding-horizontal-15 height-40 border-top border-bottom align-items-center-inherit">
              <div class="grow-2">
                <i class="far fa-won-sign color-grey"></i>
                <span class="color-white padding-left-3">카지노머니</span>
              </div>
              <div>
                <span class="color-green">
                  {summary.data.data.users?.casinoCash ? summary.data.data.users.casinoCash.toLocaleString("en-US", {
                    maximumFractionDigits: 2,
                  }) : "0"}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="deposit-status flex-inherit flex-column">
          <div class="deposit-status-header flex-inherit height-45 background-transparent-b-10 align-items-center-inherit">
            <div class="grow-2 padding-left-15 border-top border-bottom">
              <i class="far fa-exchange color-grey margin-0 font-size-15"></i>
              <span class="color-white padding-left-5">최근 입금 처리현황</span>
            </div>
            <div class="border-top border-bottom">
              <button type="button" class="font-size-15">
                <i class="fal fa-angle-down color-grey"></i>
              </button>
            </div>
          </div>
          <div class="deposit-status-content flex-inherit flex-column ">
            <div class="widthp-100 border-top">
              <table>
                <thead>
                  <tr class="background-transparent-b-10">
                    <th class="color-grey height-40 border-bottom">신청일시</th>
                    <th class="color-grey height-40 border-bottom">신청금액</th>
                    <th class="color-grey height-40 border-bottom">상태</th>
                  </tr>
                </thead>
                <tbody>
                  {summary.data.data.deposit.length > 0
                    ? summary.data.data.deposit.map((deposit, index) => {
                      return (
                        <tr key={"deposit-" + index}>
                          <td>
                            <span class="color-grey">
                              {Moment(deposit.createdAt).format(
                                "YY-MM-DD HH:mm "
                              )}
                            </span>
                          </td>
                          <td>
                            <span class="color-green">
                              {deposit.amount.toLocaleString("en-US", {
                                maximumFractionDigits: 2,
                              })}
                                원
                              </span>
                          </td>
                          <td>
                            <div class="background-transparent-b-10 padding-5 margin-5">
                              <span class="color-grey">
                                {deposit.status == "PENDING" ? (
                                  <span class="color-grey">대기</span>
                                ) : deposit.status == "ACCEPTED" ? (
                                  <span class="color-green">승인</span>
                                ) : deposit.status == "REJECTED" ? (
                                  <span class="color-red">취소</span>
                                ) : deposit.status == "RECALLED" ? (
                                  <span class="color-yellow">회수</span>
                                ) : (
                                  ""
                                )}
                              </span>
                            </div>
                          </td>
                        </tr>
                      );
                    })
                    : ""}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="withdraw-status flex-inherit flex-column">
          <div class="withdraw-status-header flex-inherit height-45 background-transparent-b-10 align-items-center-inherit">
            <div class="grow-2 padding-left-15 border-top border-bottom">
              <i class="far fa-exchange color-grey margin-0 font-size-15"></i>
              <span class="color-white padding-left-5">최근 출금 처리현황</span>
            </div>
            <div class="border-top border-bottom">
              <button type="button" class="font-size-15">
                <i class="fal fa-angle-down color-grey"></i>
              </button>
            </div>
          </div>
          <div class="withdraw-status-content flex-inherit flex-column ">
            <div class="widthp-100 border-top">
              <table>
                <thead>
                  <tr class="background-transparent-b-10">
                    <th class="color-grey height-40 border-bottom">신청일시</th>
                    <th class="color-grey height-40 border-bottom">신청금액</th>
                    <th class="color-grey height-40 border-bottom">상태</th>
                  </tr>
                </thead>
                <tbody>
                  {summary.data.data.withdrawal.length > 0
                    ? summary.data.data.withdrawal.map((withdrawal, index) => {
                      return (
                        <tr key={"withdraw-" + index}>
                          <td>
                            <span class="color-grey">
                              {Moment(withdrawal.createdAt).format(
                                "YY-MM-DD HH:mm "
                              )}
                            </span>
                          </td>
                          <td>
                            <span class="color-green">
                              {withdrawal.amount.toLocaleString("en-US", {
                                maximumFractionDigits: 2,
                              })}
                                원
                              </span>
                          </td>
                          <td>
                            <div class="background-transparent-b-10 padding-5 margin-5">
                              <span class="color-grey">
                                {withdrawal.status == "PENDING" ? (
                                  <span class="color-grey">대기</span>
                                ) : withdrawal.status == "ACCEPTED" ? (
                                  <span class="color-green">승인</span>
                                ) : withdrawal.status == "REJECTED" ? (
                                  <span class="color-red">취소</span>
                                ) : (
                                  ""
                                )}
                              </span>
                            </div>
                          </td>
                        </tr>
                      );
                    })
                    : ""}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="betting-history flex-inherit flex-column">
          <div class="dw-status-header flex-inherit height-45 background-transparent-b-10 align-items-center-inherit">
            <div class="grow-2 padding-left-15 border-top border-bottom">
              <i class="fal fa-history color-grey margin-0 font-size-15"></i>
              <span class="color-white padding-left-5">최근 배팅현황</span>
            </div>
            <div class="border-top border-bottom">
              <button type="button" class="font-size-15">
                <i class="fal fa-angle-down color-grey"></i>
              </button>
            </div>
          </div>
          <div class="betting-history-content flex-inherit flex-column ">
            <div class="widthp-100 border-top  ">
              <table>
                <thead>
                  <tr class="background-transparent-b-10">
                    <th class="color-grey height-40 border-bottom">배팅일시</th>
                    <th class="color-grey height-40 border-bottom">배당</th>
                    <th class="color-grey height-40 border-bottom">배팅금액</th>
                    <th class="color-grey height-40 border-bottom"></th>
                  </tr>
                </thead>
                <tbody>
                  {summary.data.data.bettings.length > 0
                    ? summary.data.data.bettings.map((betting, index) => {
                      return (
                        <tr key={"bettings-" + index}>
                          <td>
                            <div>
                              <span class="color-grey">
                                {Moment(betting.createdAt).format(
                                  "YY-MM-DD HH:mm "
                                )}</span>
                            </div>
                          </td>
                          <td>
                            <span class="color-red">{betting.odds.toLocaleString("en-US", {
                              maximumFractionDigits: 2,
                            })}</span>
                          </td>
                          <td>
                            <span class="color-green">{betting.amount.toLocaleString("en-US", {
                              maximumFractionDigits: 2,
                            })}원</span>
                          </td>
                          <td>
                            <div class="background-transparent-b-10 padding-5 margin-5">
                              <span class={betting.status == "DEFEATED" ? "color-red" : betting.status == "WINNING" ? "color-green" : "color-grey"}>{betting.status}</span>
                            </div>
                          </td>
                        </tr>
                      );
                    })
                    : ""}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="customer flex-inherit flex-column">
          <div class="dw-status-header flex-inherit height-45 background-transparent-b-10 align-items-center-inherit">
            <div class="grow-2 padding-left-15 border-top border-bottom">
              <i class="fas fa-question color-grey margin-0 font-size-15"></i>
              <span class="color-white padding-left-5">1:1문의</span>
            </div>
            <div class="border-top border-bottom">
              <button type="button" class="font-size-15">
                <i class="fal fa-angle-down color-grey"></i>
              </button>
            </div>
          </div>
          <div class="customer-content flex-inherit flex-column ">
            <div class="widthp-100 border-top">
              <table>
                <thead>
                  <tr class="background-transparent-b-10">
                    <th class="color-grey height-40 border-bottom">작성일</th>
                    <th class="color-grey height-40 border-bottom">제목</th>
                    <th class="color-grey height-40 border-bottom"></th>
                  </tr>
                </thead>
                <tbody>
                  {summary.data.data.inquiries.length > 0
                    ? summary.data.data.inquiries.map((inquiry, index) => {
                      return (
                        <tr key={"inquiries-" + index}>
                          <td>
                            <div>
                              <span class="color-grey">{Moment(inquiry.createdAt).format(
                                "YY-MM-DD HH:mm "
                              )}</span>
                            </div>
                          </td>
                          <td>
                            <Link to="#" className="color-grey">
                              {inquiry.title}
                            </Link>
                          </td>
                          <td>
                            <div class="background-transparent-b-10 padding-5 margin-5">
                              <span class={inquiry.status == "PENDING" ? "color-red" : inquiry.status == "COMPLETED" ? "color-green" : "color-grey"}>{inquiry.status}</span>
                            </div>
                          </td>
                        </tr>
                      );
                    })
                    : ""}
                  {/* <tr>
                    <td>
                      <div>
                        <span class="color-grey">21/01/02 11:00</span>
                      </div>
                    </td>
                    <td>
                      <Link to="#" className="color-grey">
                        입금문의
                      </Link>
                    </td>
                    <td>
                      <div class="background-transparent-b-10 padding-5 margin-5">
                        <span class="color-grey">답변대기</span>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div>
                        <span class="color-grey">21/01/02 11:00</span>
                      </div>
                    </td>
                    <td>
                      <Link to="#" className="color-grey">
                        입금문의
                      </Link>
                    </td>
                    <td>
                      <div class="background-transparent-b-10 padding-5 margin-5">
                        <span class="color-green">답변완료</span>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div>
                        <span class="color-grey">21/01/02 11:00</span>
                      </div>
                    </td>
                    <td>
                      <Link to="#" className="color-grey">
                        입금문의
                      </Link>
                    </td>
                    <td>
                      <div class="background-transparent-b-10 padding-5 margin-5">
                        <span class="color-green">답변완료</span>
                      </div>
                    </td>
                  </tr> */}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="promotion flex-inherit flex-column">
          <div class="dw-status-header flex-inherit height-45 background-transparent-b-10 align-items-center-inherit">
            <div class="padding-left-15 border-top border-bottom">
              <i class="fal fa-history color-grey margin-0 font-size-15"></i>
              <span class="color-green padding-left-5">PROMOTION </span>
            </div>
          </div>
          <div class="betting-history-content flex-inherit flex-column ">
            <div class="widthp-100 border-top color-white height-100 align-items-center justify-content-center">
              등록된 프로모션이 없습니다.
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
