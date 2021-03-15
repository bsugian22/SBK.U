import React, { Fragment, useEffect, useState, useContext } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import Moment from "moment";
import sweetalert from "../../plugins/sweetalert";
import {
  changeCreateWithdrawalAmount,
  checkWithdrawalCertainItem,
  deleteWithdrawal,
  deleteWithdrawalRequest,
  incrementWithdrawal,
  decrementWithdrawal,
  listOfToDeleteWithdrawal,
  selectWithdrawalMethod,
  setWithdrawals,
  withdrawalPassword,
  createWithdrawalAction,
  resetCreateWithdrawal,
  selectAllWithdrawal,
  setPagesOfwithdrawal,
  onClickPageWIthdrawal,
  prevPageWIthdrawal,
  nextPageWIthdrawal,
} from "../../redux/accounts/withdrawal/withdrawalAction";
import { Link, NavLink } from "react-router-dom";
import echo from '../../plugins/echo'

const Withdrawal = () => {
  let isSubscribed = true;
  const swal = new sweetalert();
  const dispatch = useDispatch();
  let withdraw = useSelector((state) => state.withdraw);
  let user = useSelector((state) => state.user.user);
  let page = useSelector((state) => state.withdraw.withdrawals.page);
  let lastPage = useSelector((state) => state.withdraw.withdrawals.lastPage);
  let per_page = useSelector((state) => state.withdraw.withdrawals.per_page);
  let list_pages = useSelector(
    (state) => state.withdraw.withdrawals.list_pages
  );
  let createWithdrawal = useSelector(
    (state) => state.withdraw.createWithdrawal
  );
  let withdrawableAmount = useSelector(
    (state) => state.preference.preferences.withdrawalMaxAmount
  );
  let createWithdrawalStatus = useSelector(
    (state) => state.withdraw.createWithdrawalStatus
  );
  useEffect(() => {
    isSubscribed = true;
    dispatch(setWithdrawals({ page: page, per_page: per_page }));
    pusher();
    return () => {
      isSubscribed = false;
    };
  }, [page]);

  const pusher = () => {
    if (user.isAuth) {
    echo.private(`users.${user.member.id}`).listen('WithdrawalUpdated', (e) => {
      dispatch(setWithdrawals({ page: page, per_page: per_page }));
    })
    }
  }

  return (
    <Fragment>
      <div class="content account-continer flex flex-inherit grow-2 flex-column">
        <div class="withdraw-wrap account withdraw-content-desktop flex-inherit padding-10">
          <div class="withdraw-left-content account-height widthp-50 flex-inherit flex-column padding-right-5 border-right scrollable-auto">
            <div class="widthp-100 withdraw-notice flex-inherit flex-column margin-bottom-20">
              <div class="red-shadow withdraw-header-title height-45 background-transparent-b-10 align-items-center padding-left-15 border-bottom-rb">
                <span class="color-white">출금신청 주의사항</span>
              </div>
              <div class="ac-comment-header-content padding-15 background-transparent-b-5 flex-inherit flex-column border-top">
                <p class="color-grey">
                  - 출금 시 출금자명이 다른경우 출금처리가 되지 않습니다
                </p>
                <p class="color-grey">- 출금 신청시 보유머니가 차감됩니다</p>
                <p class="color-grey">
                  - 출금 최소 금액은 1만원이상 1천원 단위로 가능합니다
                </p>
                <p class="color-grey">
                  - 매일 00:00 부터 00:30까지는 은행점검으로 인해 출금이
                  보류됩니다
                </p>
              </div>
            </div>
            <div class="withdraw-payment flex-column flex-inherit">
              <div class="flex-column flex-inherit widthp-100">
                <div class="red-shadow withdraw-payment-apply height-45 background-transparent-b-10 align-items-center padding-left-15 border-bottom-rb flex-inherit">
                  <span class="color-white grow-2">출금 신청서</span>
                </div>
                <div class="green-shadow withdraw-payment-way height-45 background-transparent-b-10 align-items-center padding-left-15 border-bottom-rb flex-inherit border-top">
                  <span class="color-white">출금 방법 선택</span>
                </div>
                <div class="ac-payment-pbp flex-inherit align-items-center align-items-center-inherit justify-content-center-inherit">
                  <div
                    class="widthp-33 border-right-rb border-bottom-rb height-45 color-green background-transparent-b-10 border-top"
                    onClick={() => {
                      dispatch(selectWithdrawalMethod("CASH"));
                    }}
                  >
                    <span
                      class={
                        createWithdrawalStatus == "CASH"
                          ? "color-green"
                          : "color-grey"
                      }
                    >
                      <i class="far fa-wallet"></i>현금
                    </span>
                  </div>
                  <div
                    class="widthp-33 border-right-rb border-bottom-rb height-45 color-green background-transparent-b-5 not-allowed border-top border-left-rw"
                    onClick={() => {
                      dispatch(selectWithdrawalMethod("PAYPAL"));
                    }}
                  >
                    <span
                      class={
                        createWithdrawalStatus == "PAYPAL"
                          ? "color-green"
                          : "color-grey"
                      }
                    >
                      <i class="fab fa-paypal"></i>페이팔
                    </span>
                  </div>
                  <div
                    class="widthp-33  border-bottom-rb height-45 color-green background-transparent-b-5 not-allowed border-top border-left-rw"
                    onClick={() => {
                      dispatch(selectWithdrawalMethod("BITCOIN"));
                    }}
                  >
                    <span
                      class={
                        createWithdrawalStatus == "BITCOIN"
                          ? "color-green"
                          : "color-grey"
                      }
                    >
                      <i class="fab fa-bitcoin"></i>비트코인
                    </span>
                  </div>
                </div>
              </div>
              <div class="flex-column flex-inherit widthp-100">
                <div class="green-shadow withdraw-payment-way height-45 background-transparent-b-10 align-items-center padding-left-15 border-bottom-rb flex-inherit border-top">
                  <span class="color-white">출금 가능액 및 출금액 등록</span>
                </div>
                <div class="account-form-data flex-column flex-inherit">
                  <div class="form-rows flex-inherit">
                    <div class="widthp-33 border-right-rb form-title height-45 border-bottom-rb align-items-center justify-content-center background-transparent-b-10 border-top">
                      <span class="color-grey">출금 가능액</span>
                    </div>
                    <div class="widthp-67 form-content height-45 border-bottom-rb align-items-center padding-right-15 justify-content-end background-transparent-b-5 border-top border-left-rw">
                      <span class="color-green">
                        {withdrawableAmount == null ||
                        withdrawableAmount == "" ||
                        withdrawableAmount == undefined
                          ? ""
                          : withdrawableAmount}
                        원
                      </span>
                    </div>
                  </div>
                  <div class="form-rows flex-inherit">
                    <div class="widthp-33 border-right-rb form-title heightp-100 border-bottom-rb align-items-center justify-content-center padding-vertical-15 background-transparent-b-10 border-top">
                      <span class="color-grey">출금 신청액</span>
                    </div>
                    <div class="widthp-67 form-content border-bottom-rb flex-inherit flex-column background-transparent-b-5 border-top">
                      <div class="amount-box flex-inherit border-bottom-rb padding-vertical-15 border-left-rw">
                        <div class="grow-2">
                          {/* user Input */}
                          <input
                            type="text"
                            class="input-form padding-left-10"
                            name="amount"
                            placeholder="0"
                            value={
                              createWithdrawal?.amount == "" ||
                              createWithdrawal?.amount == null ||
                              createWithdrawal?.amount == undefined
                                ? ""
                                : Number(createWithdrawal?.amount)
                            }
                            onChange={(e) => {
                              let amt = 0;
                              amt = Number(e.target.value);
                              dispatch(changeCreateWithdrawalAmount(amt));
                            }}
                            required
                          />
                        </div>
                        <div>
                          <button
                            type="button"
                            onClick={() => {
                              dispatch(incrementWithdrawal());
                            }}
                          >
                            <i class="far fa-plus color-grey"></i>
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              dispatch(decrementWithdrawal());
                            }}
                          >
                            <i class="far fa-minus color-grey"></i>
                          </button>
                        </div>
                      </div>
                      <div class="amount-quick-box flex-inherit height-40">
                        <button
                          type="button"
                          class="flex justify-content-center align-items-center widthp-20 border-right-rb heightp-100 color-grey border-top border-left-rw"
                          data-amount="30000"
                          onClick={() => {
                            dispatch(changeCreateWithdrawalAmount(30000));
                          }}
                          //    onClick={QuickInput}
                        >
                          30,000
                        </button>
                        <button
                          type="button"
                          class="flex justify-content-center align-items-center widthp-20 border-right-rb heightp-100 color-grey border-top border-left-rw"
                          data-amount="50000"
                          onClick={() => {
                            dispatch(changeCreateWithdrawalAmount(50000));
                          }}
                        >
                          50,000
                        </button>
                        <button
                          type="button"
                          class="flex justify-content-center align-items-center widthp-20 border-right-rb heightp-100 color-grey border-top border-left-rw"
                          data-amount="100000"
                          onClick={() => {
                            dispatch(changeCreateWithdrawalAmount(100000));
                          }}
                        >
                          100,000
                        </button>
                        <button
                          type="button"
                          class="flex justify-content-center align-items-center widthp-20 border-right-rb heightp-100 color-grey border-top border-left-rw"
                          data-amount="500000"
                          onClick={() => {
                            dispatch(changeCreateWithdrawalAmount(500000));
                          }}
                          //    onClick={QuickInput}
                        >
                          500,000
                        </button>
                        <button
                          type="button"
                          class="flex justify-content-center align-items-center widthp-20 heightp-100 color-grey border-top border-left-rw"
                          data-amount="1000000"
                          onClick={() => {
                            dispatch(changeCreateWithdrawalAmount(1000000));
                          }}
                          //    onClick={QuickInput}
                        >
                          1,000,000
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex-column flex-inherit widthp-100">
                <div class="green-shadow withdraw-payment-way height-45 background-transparent-b-10 align-items-center padding-left-15 border-bottom-rb flex-inherit border-top">
                  <span class="color-white">출금 계좌 확인</span>
                </div>
                <div class="withdraw-payment-confirm-data flex-column flex-inherit">
                  <div class="confirm-rows height-45 justify-content-center-inherit flex-inherit border-bottom-rb align-items-center-inherit background-transparent-b-10 border-top">
                    <div class="widthp-33 border-right-rb">
                      <span class="color-grey">은행명</span>
                    </div>
                    <div class="widthp-33 border-right-rb border-left-rw">
                      <span class="color-grey">예금주</span>
                    </div>
                    <div class="widthp-33 border-left-rw">
                      <span class="color-grey">결제 계좌</span>
                    </div>
                  </div>
                  <div class="confirm-rows height-45 justify-content-center-inherit flex-inherit border-bottom-rb align-items-center-inherit background-transparent-b-5 border-top">
                    <div class="widthp-33 border-right-rb">
                      {/* name of bank */}
                      <span class="color-white">
                        {user?.member?.account_bank}
                      </span>
                    </div>
                    <div class="widthp-33 border-right-rb border-left-rw">
                      {/* account holder */}
                      <span class="color-white">
                        {" "}
                        {user?.member?.account_holder}
                      </span>
                    </div>
                    <div class="widthp-33 border-left-rw">
                      {/* account number */}
                      <span class="color-white">
                        {user?.member?.account_number}
                      </span>
                    </div>
                  </div>
                </div>
                <div class="withdraw-payment-confirm-btn padding-top-10 flex-inherit">
                  <div class="grow-2">
                    {/* RESET */}
                    <button
                      type="button"
                      class="padding-15 background-transparent-b-10 color-white"
                      onClick={() => {
                        dispatch(resetCreateWithdrawal());
                      }}
                    >
                      초기화
                    </button>
                  </div>
                  <div>
                    {/* input password */}
                    <input
                      type="password"
                      class="padding-15 color-white background-transparent-b-10 width-200 heightp-100"
                      placeholder="출금 비밀번호를 입력하세요"
                      value={
                        createWithdrawal?.password == "" ||
                        createWithdrawal?.password == null ||
                        createWithdrawal?.password == undefined
                          ? ""
                          : createWithdrawal?.password
                      }
                      onChange={(e) => {
                        let pass = e.target.value;
                        dispatch(withdrawalPassword(pass));
                      }}
                    />
                    <button
                      type="button"
                      class="padding-15 background-green color-white"
                      onClick={() =>
                        dispatch(createWithdrawalAction(createWithdrawal))
                      }
                    >
                      출금신청
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="withdraw-right-content account-height widthp-50 flex-inherit padding-left-5 border-left flex-column scrollable-auto">
            <div class="red-shadow withdraw-header-title height-45 background-transparent-b-10 align-items-center padding-left-15 border-bottom-rb">
              {/* (list of withdrawals) */}
              <span class="color-white">출금신청 내역</span>
            </div>
            <div class="widthp-100 withdraw-history-content flex-inherit flex-column">
              <div class="history-item">
                <table>
                  <thead>
                    <tr class="thead">
                      <th
                        class="height-45 background-transparent-b-10 color-grey border-top"
                        onClick={() => {
                          dispatch(selectAllWithdrawal());
                        }}
                      >
                        전체 선택
                      </th>
                      <th class="height-45 background-transparent-b-10 color-grey border-top">
                        신청 시간
                      </th>
                      <th class="height-45 background-transparent-b-10 color-grey border-top">
                        종류
                      </th>
                      <th class="height-45 background-transparent-b-10 color-grey border-top">
                        금액
                      </th>
                      <th class="height-45 background-transparent-b-10 color-grey border-top">
                        상태
                      </th>
                    </tr>
                  </thead>
                  <tbody class="background-transparent-b-5">
                    {withdraw?.loading ? (
                      <tr>
                        <td colspan="5" class="td-3">
                          <i class="fa fa-spinner fa-spin fa-2x fa-fw color-grey"></i>
                        </td>
                      </tr>
                    ) : withdraw?.withdrawals?.data?.length == 0 ? (
                      <tr>
                        <td colspan="12" class="color-white">
                          데이터가 존재하지 않습니다.
                        </td>
                      </tr>
                    ) : (
                      withdraw?.withdrawals?.data?.map((item, index) => {
                        return (
                          <tr class="rows" key={index}>
                            <td class="height-45 border-top">
                              <input
                                type="checkbox"
                                name=""
                                checked={item.isChecked}
                                onChange={(e) => {
                                  let checked = e.target.checked;
                                  let payload = {
                                    status: checked,
                                    id: item.id,
                                  };
                                  dispatch(checkWithdrawalCertainItem(payload));
                                }}
                              />
                            </td>
                            <td class="height-45 border-top">
                              <span class="color-grey">
                                {Moment(item.createdAt).format(
                                  "YY-MM-DD HH:mm "
                                )}{" "}
                              </span>
                            </td>
                            <td class="height-45 border-top">
                              <span class="color-grey">{item.method}</span>
                            </td>
                            <td class="height-45 border-top">
                              <span class="color-grey">
                                {item.amount}
                                {item.method == "CASH" ||
                                item.method == "PAYPAL"
                                  ? "원"
                                  : "BTC"}{" "}
                              </span>
                            </td>
                            <td class="height-45 border-top">
                              {item.status == "PENDING" ? (
                                <span class="color-grey">대기</span>
                              ) : item.status == "ACCEPTED" ? (
                                <span class="color-green">승인</span>
                              ) : item.status == "REJECTED" ? (
                                <span class="color-red">취소</span>
                              ) : item.status == "RECALLED" ? (
                                <span class="color-yellow">회수</span>
                              ) : (
                                ""
                              )}
                            </td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>
              <div class="history-item-footer flex-inherit border-top border-bottom-rb border-bottom-rb padding-vertical-10 align-items-center background-transparent-b-10">
                <div class="grow-2 padding-left-10">
                  <button
                    type="button"
                    class="color-grey padding-10 background-transparent-b-10"
                    onClick={() => {
                      dispatch(listOfToDeleteWithdrawal());
                      dispatch(deleteWithdrawalRequest());
                      dispatch(
                        deleteWithdrawal(withdraw?.newWithdrawalToDeleteList)
                      );
                    }}
                  >
                    <i class="fal fa-trash-alt"></i>
                    선택 삭제
                  </button>
                </div>
                <div class="padding-right-10">
                  <span class="color-grey">
                    누적 출금 금액
                    <strong class="color-red padding-left-5">
                      {/* total amount */}
                      {withdraw?.withdrawals?.amount}원
                    </strong>
                  </span>
                </div>
              </div>
              <div class="padding-vertical-10 flex-inherit height-60 color-grey">
                <div class="pagination flex-inherit widthp-100 heightp-100">
                  <div class="select">
                    {/* {list_pages.map((o) => {
                    let newItem = { label: o.toString(), value: o };
                    selectList.push(newItem);
                  })} */}
                    <select
                      name="slct"
                      id="slct"
                      value={page}
                      onChange={(e) => {
                        let val = e.target.value;
                        if (val.toString() == page.toString()) {
                          swal.warning(" 페이지에 반응");
                        } else {
                          dispatch(
                            onClickPageWIthdrawal({
                              page: val,
                              per_page: per_page,
                            })
                          );
                        }
                      }}
                    >
                      {list_pages?.map((item, index) => {
                        return <option key={index}>{item}</option>;
                      })}
                    </select>
                  </div>
                  <div class="flex margin-left-5 page grow-2 justify-content-end">
                    <Link to="#">
                      <button
                        class="page-left width-40 heightp-100 background-transparent-b-20 margin-right-5"
                        onClick={() => {
                          let prevData = {
                            page: page,
                            list_pages: list_pages,
                            per_page: per_page,
                          };
                          if (page == 1) {
                            swal.warning(" 페이지에 반응");
                          } else {
                            dispatch(prevPageWIthdrawal(prevData));
                          }
                        }}
                      >
                        <i class="fas fa-chevron-left margin-0 color-grey"></i>
                      </button>
                    </Link>
                    <Link to="#">
                      <button
                        class="page-right width-40 heightp-100 background-transparent-b-20"
                        onClick={() => {
                          let nextData = {
                            page: page,
                            list_pages: list_pages,
                            per_page: per_page,
                          };
                          if (page == lastPage) {
                            swal.warning(" 페이지에 반응");
                          } else {
                            dispatch(nextPageWIthdrawal(nextData));
                          }
                        }}
                      >
                        <i class="fas fa-chevron-right margin-0 color-grey"></i>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="widthp-100 interload-panel-mobile flex-column flex-inherit flex">
        <div class="height-40 align-items-center-inherit border-bottom-rb">
          <div class="flex pi-title grow-2">
            <span class="color-white padding-left-15">WITHDRAW</span>
          </div>
          <div class="flex padding-right-15">
            <Link to="/account/settings">
              마이페이지
              <i class="fal fa-angle-double-right"></i>
            </Link>
          </div>
        </div>

        <div class="member-information height-40 align-items-center-inherit border-bottom-rb">
          <div class="flex pi-title green grow-2">
            <span class="color-white padding-left-15">
              안녕하세요.
              {/* {user.member.nickname}  */}
              회원님
            </span>
          </div>
          <div class="flex">
            <span class="color-yellow padding-right-15">
              {/* Lv.{user.member.level} */}
            </span>
          </div>
        </div>
        <div class="money-information border-bottom-rb flex-inherit">
          <div class="widthp-33 border-right-rb padding-left-15 padding-vertical-15">
            <div class="flex flex-column">
              <span class="color-white">예치금</span>
              <span class="color-green">
                {/* {Number(user.member.cash).toLocaleString()} */}
              </span>
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
            <button
              type="button"
              id="tab-1"
              //   class={context.state.interMenu === "inter-tab-1" ? "active" : ""}
              //   onClick={() => context.actions.setinterMenu("inter-tab-1")}
            >
              환전신청
            </button>
          </div>
          <div class="flex widthp-50">
            <button
              type="button"
              id="tab-2"
              //   class={context.state.interMenu === "inter-tab-2" ? "active" : ""}
              //   onClick={() => context.actions.setinterMenu("inter-tab-2")}
            >
              환전내역
            </button>
          </div>
        </div>
        <div
        //   class={
        //     context.state.interMenu === "inter-tab-1"
        //       ? "interload-content flex-column active"
        //       : "interload-content flex-column"
        //   }
        >
          <form
            class="flex-column"
            //   onSubmit={submit}
          >
            <div class="flex-column widthp-100 flex-inherit padding-horizontal-15">
              <div class="flex-column">
                <div class="interload-list padding-vertical-10">
                  <h1>환전안내</h1>
                </div>
                <div class="interload-list interload-notice-comment flex flex-column">
                  <p>출금 시 출금자명이 다를 시 출금처리가 되지않습니다</p>

                  <p>출금금액과 출금금액이 다를 시 출금처리 되지않습니다</p>

                  <p>출금신청 시 보유머니가 차감됩니다</p>

                  <p>출금 최소 금액은 1만원 이상 1천원 단위로 가능합니다</p>

                  <p>00:00 ~ 00:30은 은행점검으로 인해 출금이 보류됩니다</p>
                </div>
              </div>

              <div class="flex-column flex-inherit">
                <div class="interload-list padding-vertical-10">
                  <h1>환전 신청서</h1>
                </div>

                <div class="interload-list align-items-center-inherit">
                  <div class="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right-rb border-bottom-rb ">
                    환전 방법
                  </div>
                  <div class="widthp-70 flex background-transparent-b-10 color-grey height-40 border-bottom-rb">
                    {/* <div class="select">
                      <select name="">
                        <option value="cash">현금</option>
                        <option value="paypal">페이팔</option>
                        <option value="bitcoin">비트코인</option>
                      </select>
                    </div> */}
                  </div>
                </div>

                <div class="interload-list align-items-center-inherit withdraw-amount-wrap">
                  <div class="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right-rb border-bottom-rb ">
                    출금금액
                  </div>
                  <div class="widthp-70 flex background-transparent-b-10 color-grey height-40 border-bottom-rb">
                    {/* <input
                      type="text"
                      name="amount"
                      placeholder="0"
                      //   value={withdrawal.form.amount.toLocaleString()}
                      //   onChange={amountChange}
                    /> */}
                  </div>
                </div>
                <div class="interload-list interload-tab height-50 align-items-center-inherit">
                  <div class="flex withdraw-input-wrap widthp-100">
                    <button
                      type="button"
                      class="widthp-20 amount-tab"
                      data-amount="5000"
                      //   onClick={QuickInput}
                    >
                      5,000
                    </button>
                    <button
                      type="button"
                      class="widthp-20 amount-tab"
                      data-amount="10000"
                      //   onClick={QuickInput}
                    >
                      10,000
                    </button>
                    <button
                      type="button"
                      class="widthp-20 amount-tab"
                      data-amount="50000"
                      //   onClick={QuickInput}
                    >
                      50,000
                    </button>
                    <button
                      type="button"
                      class="widthp-20 amount-tab"
                      data-amount="100000"
                      //   onClick={QuickInput}
                    >
                      100,000
                    </button>
                    <button
                      type="button"
                      class="widthp-20 amount-tab"
                      data-amount="500000"
                      //   onClick={QuickInput}
                    >
                      500,000
                    </button>
                  </div>
                </div>

                <div class="interload-list align-items-center-inherit">
                  <div class="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right-rb border-bottom-rb ">
                    은행명
                  </div>
                  <div class="widthp-70 flex background-transparent-b-10 color-grey height-40 border-bottom-rb">
                    <span class="color-white padding-left-10">은행명출력</span>
                  </div>
                </div>

                <div class="interload-list align-items-center-inherit">
                  <div class="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right-rb border-bottom-rb ">
                    예금주
                  </div>
                  <div class="widthp-70 flex background-transparent-b-10 color-grey height-40 border-bottom-rb">
                    <span class="color-white padding-left-10">예금주출력</span>
                  </div>
                </div>

                <div class="interload-list align-items-center-inherit">
                  <div class="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right-rb border-bottom-rb ">
                    계좌번호
                  </div>
                  <div class="widthp-70 flex background-transparent-b-10 color-grey height-40 border-bottom-rb">
                    <span class="color-white padding-left-10">
                      계좌번호출력
                    </span>
                  </div>
                </div>

                <div class="interload-list align-items-center-inherit">
                  <div class="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right-rb border-bottom-rb ">
                    환전 비밀번호
                  </div>
                  <div class="widthp-70 flex background-transparent-b-10 color-grey height-40 border-bottom-rb">
                    {/* <input
                      type="password"
                      name="password"
                      placeholder="출금비밀번호를 입력하세요"
                      required
                    /> */}
                  </div>
                </div>
              </div>

              <div class="flex-column">
                <div class="interload-list">
                  <button
                    type="submit"
                    class="widthp-100 background-green color-white height-40 justify-content-center"
                  >
                    환전신청
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div
        //   class={
        //     context.state.interMenu === "inter-tab-2"
        //       ? "interload-content flex-column active"
        //       : "interload-content flex-column"
        //   }
        >
          <div class="widthp-100 flex-column flex border-bottom-rb padding-vertical-10 padding-right-15 align-items-right">
            {/* <div class="select height-40">
              <select name="">
                <option value="">전체</option>
                <option value="">확인중</option>
              </select>
            </div> */}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Withdrawal;
