import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import sweetalert from "../../plugins/sweetalert";
import {
  changeCreateDepositAmount,
  changePage,
  checkAllDeposit,
  checkDepositCertainItem,
  createDepositAction,
  decrementDeposit,
  deleteDeposits,
  deleteDepositsRequest,
  incrementDeposit,
  listOfToDeleteDeposits,
  nextPageDeposit,
  onClickPageDeposit,
  prevPageDeposit,
  resetCreateDeposit,
  selectDepositMethod,
  setDeposits,
  setPageOfDeposit,
  setPagesOfDeposit,
} from "../../redux/accounts/deposit/depositActions";
import { Link, NavLink } from "react-router-dom";
import Select from "react-select";
import Moment from "moment";
import echo from '../../plugins/echo'
import { fetchSummary } from "../../redux/navigations/accountSummary/accountSummaryActions";

const Deposit = () => {
  let deposit = useSelector((state) => state.deposit);
  let deposits = useSelector((state) => state.deposit.deposits);
  let list_pages = useSelector((state) => state.deposit.deposits.list_pages);
  let totalPages = useSelector((state) => state.deposit.deposits.totalPages);
  let deleteList = useSelector((state) => state.deposit.newDepositToDeleteList);
  let page = useSelector((state) => state.deposit.deposits.page);
  let lastPage = useSelector((state) => state.deposit.deposits.lastPage);
  let per_page = useSelector((state) => state.deposit.deposits.per_page);
  let user = useSelector((state) => state.user.user);
  let createDepositStatus = useSelector(
    (state) => state.deposit.createDepositStatus
  );
  let createDeposit = useSelector((state) => state.deposit.createDeposit);
  let listToDelete = useSelector(
    (state) => state.deposit.newDepositToDeleteList
  );
  let isSubscribed = true;
  let dispatch = useDispatch();
  let swal = new sweetalert();

  useEffect(() => {
    isSubscribed = true;
    dispatch(setDeposits({ page: page, per_page: per_page }));
    pusher();
    return () => {
      isSubscribed = false;
    };
  }, [page]);

  const pusher = () => {
    if (user.isAuth) {
    echo.private(`users.${user.member.id}`).listen('DepositUpdated', (e) => {
      dispatch(setDeposits({ page: page, per_page: per_page }));
      dispatch(fetchSummary());
    })
    }
  }

  return (
    <Fragment>
      <div class="content account-continer flex flex-inherit grow-2 flex-column">
        <div class="deposit-wrap account deposit-content-desktop flex-inherit">
          <div class="deposit-left-content account-height widthp-50 padding-10 flex-inherit flex-column border-right scrollable-auto">
            <div class="widthp-100 deposit-notice flex-inherit flex-column margin-bottom-20">
              <div class="red-shadow deposit-header-title height-45 background-transparent-b-10 align-items-center padding-left-15 border-bottom-rb">
                <span class="color-white">입금신청 주의사항</span>
              </div>
              <div class="ac-comment-header-content padding-15 background-transparent-b-5 flex-inherit flex-column border-top">
                <p class="color-grey">
                  예금주명과 입금자명이 다를 시 입금처리가 되지않습니다
                </p>
                <p class="color-grey">
                  입금신청금액과 입금금액이 다를 시 입금처리가 되지않습니다
                </p>
                <p class="color-grey">
                  선 입금 후 입금신청서작성을 부탁드립니다
                </p>
                <p class="color-grey">
                  입금 최소 금액은 1만원 이상 1천원 단위로 가능합니다
                </p>
                <p class="color-grey">
                  입금 계좌가 변경 될 경우 회원님들께 쪽지로 안내해드립니다
                </p>
              </div>
            </div>
            <div class="deposit-payment flex-column flex-inherit">
              <div class="flex-column flex-inherit widthp-100">
                <div class="red-shadow deposit-payment-apply height-45 background-transparent-b-10 align-items-center padding-left-15 border-bottom-rb flex-inherit">
                  <span class="color-white grow-2">입금신청서</span>
                  <div class="padding-right-15 align-items-center">
                    <i class="far fa-exclamation-triangle color-yellow"></i>
                    <span class="color-grey">
                      선 입금 후 입금신청서를 작성해주세요.
                    </span>
                  </div>
                </div>
                <div class="green-shadow deposit-payment-way height-45 background-transparent-b-10 align-items-center padding-left-15 border-bottom-rb border-top flex-inherit">
                  {/* Create Deposit */}
                  <span class="color-white">결제 방법 선택</span>
                </div>
                <div class="ac-payment-pbp flex-inherit align-items-center align-items-center-inherit justify-content-center-inherit">
                  <div
                    class={
                      createDepositStatus == "CASH"
                        ? "widthp-33 border-right-rb border-bottom-rb height-45  background-transparent-b-10 border-top color-green"
                        : "widthp-33 border-right-rb border-bottom-rb height-45  background-transparent-b-10 border-top"
                    }
                    onClick={() => {
                      dispatch(selectDepositMethod("CASH"));
                    }}
                  >
                    <span class="color-green"><i class="far fa-wallet"></i>현금</span>
                  </div>
                  <div
                    class="widthp-33 border-right-rb border-bottom-rb border-left-rw height-45 background-transparent-b-5 not-allowed border-top"
                    onClick={() => {
                      dispatch(selectDepositMethod("PAYPAL"));
                    }}
                  >
                    <span class="color-grey"><i class="fab fa-paypal"></i>페이팔</span>
                  </div>
                  <div
                    class="widthp-33 border-bottom-rb border-left-rw height-45 background-transparent-b-5 not-allowed border-top"
                    onClick={() => {
                      dispatch(selectDepositMethod("BITCOIN"));
                    }}
                  >
                    <span class="color-grey"><i class="fab fa-bitcoin"></i>비트코인</span>
                  </div>
                </div>
              </div>
              <div class="flex-column flex-inherit widthp-100">
                <div class="green-shadow deposit-payment-way height-45 background-transparent-b-10 align-items-center padding-left-15 border-bottom-rb flex-inherit border-top">
                  <span class="color-white">
                    입금 계좌 확인
                  </span>
                </div>
                <div class="deposit-payment-confirm-data flex-column flex-inherit">
                  <div class="confirm-rows height-45 justify-content-center-inherit flex-inherit border-bottom-rb align-items-center-inherit background-transparent-b-10 border-top">
                    <div class="widthp-33 border-right-rb">
                      <span class="color-grey">은행명 </span>
                    </div>
                    <div class="widthp-33 border-right-rb border-left-rw">
                      <span class="color-grey">예금주 </span>
                    </div>
                    <div class="widthp-33 border-left-rw">
                      <span class="color-grey">결제 계좌</span>
                    </div>
                  </div>
                  <div class="confirm-rows height-45 justify-content-center-inherit flex-inherit border-bottom-rb align-items-center-inherit background-transparent-b-5 border-top">
                    <div class="widthp-33 border-right-rb">
                      <span class="color-white">
                        {user.member.account_bank}
                      </span>
                    </div>
                    <div class="widthp-33 border-right-rb border-left-rw">
                      <span class="color-white">
                        {user.member.account_holder}
                      </span>
                    </div>
                    <div class="widthp-33 border-left-rw">
                      <span class="color-white">
                        {" "}
                        {user.member.account_number}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex-column flex-inherit widthp-100">
                <div class="green-shadow deposit-payment-way height-45 background-transparent-b-10 align-items-center padding-left-15 border-bottom-rb flex-inherit border-top">
                  <span class="color-white">입금자 및 입금액</span>
                </div>
                <div class="account-form-data flex-column flex-inherit">
                  <div class="form-rows flex-inherit">
                    <div class="widthp-33 border-right-rb form-title height-45 border-bottom-rb align-items-center justify-content-center background-transparent-b-10 border-top">
                      {/* name of depositor */}
                      <span class="color-grey">입금자명</span>
                    </div>
                    <div class="widthp-67 form-content height-45 border-bottom-rb border-left-rw align-items-center justify-content-end padding-horizontal-10 center background-transparent-b-5 border-top">
                      <span class="color-green">{user.member.account_holder}</span>
                    </div>
                  </div>
                  <div class="form-rows flex-inherit">
                    <div class="widthp-33 border-right-rb form-title heightp-100 border-bottom-rb align-items-center justify-content-center padding-vertical-15 background-transparent-b-10 border-top">
                      <span class="color-grey">입금금액</span>
                    </div>
                    <div class="widthp-67 form-content border-bottom-rb flex-inherit flex-column background-transparent-b-5 border-top">
                      <div class="amount-box flex-inherit border-bottom-rb border-left-rw padding-vertical-15">
                        <div class="grow-2">
                          <input
                            type="text"
                            class="input-form padding-left-10"
                            name="amount"
                            placeholder="0"
                            value={Number(createDeposit.amount)}
                            onChange={(e) => {
                              let amt = 0;
                              amt = Number(e.target.value);
                              dispatch(changeCreateDepositAmount(amt));
                            }}
                            required
                          />
                        </div>
                        <div>
                          <button
                            type="button"
                            onClick={() => {
                              dispatch(incrementDeposit());
                            }}
                          >
                            <i class="far fa-plus color-grey"></i>
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              dispatch(decrementDeposit());
                            }}
                          >
                            <i class="far fa-minus color-grey"></i>
                          </button>
                        </div>
                      </div>
                      <div class="amount-quick-box flex-inherit height-40">
                        <button
                          type="button"
                          class="flex justify-content-center align-items-center widthp-20 border-right-rb border-left-rw heightp-100 color-grey border-top"
                          data-amount="30000"
                          onClick={() => {
                            dispatch(changeCreateDepositAmount(30000));
                          }}
                        >
                          30,000
                        </button>
                        <button
                          type="button"
                          class="flex justify-content-center align-items-center widthp-20 border-right-rb border-left-rw heightp-100 color-grey border-top"
                          data-amount="50000"
                          onClick={() => {
                            dispatch(changeCreateDepositAmount(50000));
                          }}
                        >
                          50,000
                        </button>
                        <button
                          type="button"
                          class="flex justify-content-center align-items-center widthp-20 border-right-rb border-left-rw heightp-100 color-grey border-top"
                          data-amount="100000"
                          onClick={() => {
                            dispatch(changeCreateDepositAmount(100000));
                          }}
                        >
                          100,000
                        </button>
                        <button
                          type="button"
                          class="flex justify-content-center align-items-center widthp-20 border-right-rb border-left-rw heightp-100 color-grey border-top"
                          data-amount="500000"
                          onClick={() => {
                            dispatch(changeCreateDepositAmount(500000));
                          }}
                        >
                          500,000
                        </button>
                        <button
                          type="button"
                          class="flex justify-content-center align-items-center widthp-20 heightp-100 color-grey border-top border-left-rw"
                          data-amount="1000000"
                          onClick={() => {
                            dispatch(changeCreateDepositAmount(1000000));
                          }}
                        >
                          1,000,000
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="form-rows flex-inherit">
                    <div class="widthp-33 border-right-rb form-title height-45 border-bottom-rb align-items-center justify-content-center background-transparent-b-10 border-top">
                      {/* bonus */}
                      <span class="color-grey">입금보너스 여부</span>
                    </div>
                    <div class="widthp-67 form-content height-45 border-bottom-rb border-left-rw align-items-center justify-content-end padding-horizontal-10 center background-transparent-b-5 border-top">
                      <div class="bonus-select">
                        <input type="radio" name="bonus" value="1" checked/>
                        <label for="1" class="color-grey margin-right-15 margin-left-5">적용</label>
                        <input type="radio" name="bonus" value="0" />
                        <label for="0" class="color-grey margin-left-5">미적용</label>
                      </div>
                    </div>
                  </div>
                  <div class="form-rows flex-inherit">
                    <div class="widthp-33 border-right-rb form-title height-45 border-bottom-rb align-items-center justify-content-center background-transparent-b-10 border-top">
                      {/* bonus */}
                      <span class="color-grey">입금보너스</span>
                    </div>
                    <div class="widthp-67 form-content height-45 border-bottom-rb border-left-rw align-items-center justify-content-end padding-horizontal-10 center background-transparent-b-5 border-top">
                      <span class="color-green">15%</span>
                    </div>
                  </div>
                  <div class="form-rows flex-inherit">
                    <div class="widthp-33 border-right-rb form-title heightp-100 border-bottom-rb align-items-center justify-content-center padding-vertical-15 background-transparent-b-10 border-top">
                      <span class="color-grey">롤링퍼센트</span>
                    </div>
                    <div class="widthp-67 border-left-rw border-bottom-rb flex-inherit flex-column background-transparent-b-5 border-top">
                      <div class="flex-inherit border-bottom-rb background-transparent-b-5">
                        <div class="grow-2 flex-inherit height-40 align-items-center justify-content-center-inherit">
                          <div class="widthp-33 color-grey">스포츠</div>
                          <div class="widthp-33 color-grey">미니게임</div>
                          <div class="widthp-33 color-grey">카지노</div>
                        </div>
                      </div>
                      <div class="flex-inherit height-40 align-items-center justify-content-center-inherit">
                        <div class="widthp-33 color-grey">100%</div>
                        <div class="widthp-33 color-red">200%</div>
                        <div class="widthp-33 color-red">300%</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="deposit-payment-confirm-btn padding-top-10 flex-inherit">
                  <div class="grow-2">
                    {/* Reset button */}
                    <button
                      type="button"
                      class="padding-15 background-transparent-b-10 color-white"
                      onClick={() => {
                        dispatch(resetCreateDeposit());
                      }}
                    >
                      초기화
                    </button>
                  </div>
                  <div>
                    <button
                      type="button"
                      class="padding-15 background-green color-white"
                      onClick={() => {
                        dispatch(createDepositAction(createDeposit));
                      }}
                    >
                      입금신청
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="deposit-right-content account-height widthp-50 padding-10 flex-inherit border-left flex-column scrollable-auto">
            <div class="red-shadow deposit-header-title height-45 background-transparent-b-10 align-items-center padding-left-15 border-bottom-rb">
              <span class="color-white">입금신청내역</span>
            </div>
            <div class="widthp-100 deposit-history-content flex-inherit flex-column">
              <div class="history-item">
                <table>
                  <thead>
                    <tr class="thead border-top border-bottom-rb">
                      <th
                        class="height-45 background-transparent-b-10 color-grey"
                        onClick={() => {
                          dispatch(checkAllDeposit());
                        }}
                      >
                        전체 선택
                      </th>
                      <th class="height-45 background-transparent-b-10 color-grey">
                        신청 시간
                      </th>
                      <th class="height-45 background-transparent-b-10 color-grey">
                        종류
                      </th>
                      <th class="height-45 background-transparent-b-10 color-grey">
                        금액
                      </th>
                      <th class="height-45 background-transparent-b-10 color-grey">
                        상태
                      </th>
                    </tr>
                  </thead>
                  <tbody class="background-transparent-b-5">
                    {deposit?.loading ? (
                      <tr>
                        <td colspan="5" class="td-3">
                          <i class="fa fa-spinner fa-spin fa-2x fa-fw color-grey"></i>
                        </td>
                      </tr>
                    ) : deposit?.deposits?.data?.length == 0 ? (
                      <tr>
                        <td colspan="12" class="color-white">
                          데이터가 존재하지 않습니다.
                        </td>
                      </tr>
                    ) : (
                      deposit?.deposits?.data?.map((item, index) => {
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
                                  dispatch(checkDepositCertainItem(payload));
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
                                {item.amount.toLocaleString()}
                                {item.method == "CASH" ||
                                  item.method == "PAYPAL"
                                  ? "원"
                                  : "BTC"}
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
              <div class="history-item-footer flex-inherit border-top padding-vertical-10 align-items-center background-transparent-b-10 border-bottom-rb">
                <div class="grow-2 padding-left-10">
                  {/* Delete All */}
                  <button
                    type="button"
                    class="color-grey padding-10 background-transparent-b-10"
                    onClick={() => {
                      dispatch(listOfToDeleteDeposits());
                      dispatch(deleteDepositsRequest());
                      dispatch(deleteDeposits(deposit.newDepositToDeleteList));
                    }}
                  >
                    <i class="fal fa-trash-alt"></i>
                    선택 삭제
                  </button>
                </div>
                <div class="padding-right-10">
                  <span class="color-grey">
                    누적 입금 금액
                    <strong class="color-green padding-left-5">
                      {deposit?.deposits?.amount.toLocaleString()}원
                    </strong>
                  </span>
                </div>
              </div>
              <div class="padding-vertical-10 flex-inherit height-60 color-grey">
              <div class="pagination widthp-100 flex-inherit justify-content-end">
              <div class="flex selectBox">
                  <Select
                    className="select-container select-position"
                    classNamePrefix="select-box"
                    value={{ label : deposits.page , value : deposits.page }}
                    onChange={(e) => {
                      dispatch(
                        onClickPageDeposit({
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
                    })([], 0, deposits.lastPage)}
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

                      dispatch(prevPageDeposit(prevData));
                    }}
                    disabled={1 >= deposits.page}
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

                      dispatch(nextPageDeposit(nextData));
                    }}
                    disabled={deposits.lastPage <= deposits.page}
                  >
                    <i class="fas fa-chevron-right margin-0 color-white"></i>
                  </button>
              </div>
            </div>
          </div>
            </div>
          </div>
        </div>
      </div>
      <div class="widthp-100 interload-panel-mobile flex-column flex-inherit flex">
        <div class="height-40 align-items-center-inherit border-bottom">
          <div class="flex pi-title grow-2">
            <span class="color-white padding-left-15">DEPOSIT</span>
          </div>
          <div class="flex padding-right-15">
            <Link to="/account/settings">
              마이페이지
              <i class="fal fa-angle-double-right"></i>
            </Link>
          </div>
        </div>

        <div class="member-information height-40 align-items-center-inherit border-bottom">
          <div class="flex pi-title green grow-2">
            <span class="color-white padding-left-15">
              안녕하세요.
              {/* {user.member.nickname}  */}
              회원님
            </span>
          </div>
          <div class="flex">
            <span class="color-yellow padding-right-15">
              Lv.
              {/* {user.member.level} */}
            </span>
          </div>
        </div>
        <div class="money-information border-bottom flex-inherit">
          <div class="widthp-33 border-right padding-left-15 padding-vertical-15">
            <div class="flex flex-column">
              <span class="color-white">예치금</span>
              <span class="color-green">
                {/* {Number(user.member.cash).toLocaleString()} */}
              </span>
            </div>
          </div>
          <div class="widthp-33 border-right padding-left-15 padding-vertical-15">
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
        <div class="interload-tab height-50 border-bottom">
          <div class="flex widthp-50">
            <button
              type="button"
              id="tab-1"
            >
              입금신청
            </button>
          </div>
          <div class="flex widthp-50">
            <button
              type="button"
              id="tab-2"
            >
              입금내역
            </button>
          </div>
        </div>
        <div
        >
          <form
            class="flex"
          >
            <div class="flex-column flex-inherit padding-horizontal-15 widthp-100">
              <div class="flex-column">
                <div class="interload-list padding-vertical-10">
                  <h1>입금안내</h1>
                </div>
                <div class="interload-list interload-notice-comment flex flex-column">
                  <p>
                    입금시 예금주명과 입금자명이 다른 경우 입금 처리가
                    되지않습니다.
                  </p>

                  <p>
                    입금 신청 금액과 입금 금액이 다른 경우 입금 처리가
                    되지않습니다.
                  </p>

                  <p>선입금 후 입금 신청을 부탁드립니다.</p>

                  <p>최소 입금 금액은 1만원이상 1천원 단위로 가능합니다.</p>

                  <p>입금 계좌가 변경될 경우 회원님께 쪽지로 안내해드립니다.</p>
                </div>
              </div>
              <div class="flex-column flex-inherit">
                <div class="interload-list padding-vertical-10">
                  <h1>입금 신청서</h1>
                </div>

                <div class="interload-list align-items-center-inherit">
                  <div class="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right border-bottom ">
                    결제 방법
                  </div>
                  <div class="widthp-70 flex background-transparent-b-10 color-grey height-40 border-bottom">
                    {/* <div class="select">
                      <select name="">
                        <option value="cash">현금</option>
                        <option value="paypal">페이팔</option>
                        <option value="bitcoin">비트코인</option>
                      </select>
                    </div> */}
                  </div>
                </div>

                <div class="interload-list align-items-center-inherit">
                  <div class="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right border-bottom ">
                    입금자명
                  </div>
                  <div class="widthp-70 flex background-transparent-b-10 color-grey height-40 border-bottom">
                    <span class="color-white padding-left-10">-</span>
                  </div>
                </div>

                <div class="interload-list align-items-center-inherit deposit-amount-wrap">
                  <div class="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right border-bottom ">
                    입금금액
                  </div>
                  <div class="widthp-70 flex background-transparent-b-10 color-grey height-40 border-bottom">
                    <input
                      type="text"
                      name="amount"
                      placeholder="0"
                      required
                    />
                  </div>
                </div>
                <div class="interload-list interload-tab height-50 align-items-center-inherit">
                  <div class="flex deposit-input-wrap widthp-100">
                    <button
                      type="button"
                      class="widthp-20 amount-tab"
                      data-amount="5000"
                    >
                      5,000
                    </button>
                    <button
                      type="button"
                      class="widthp-20 amount-tab"
                      data-amount="10000"
                    >
                      10,000
                    </button>
                    <button
                      type="button"
                      class="widthp-20 amount-tab"
                      data-amount="50000"
                    >
                      50,000
                    </button>
                    <button
                      type="button"
                      class="widthp-20 amount-tab"
                      data-amount="100000"
                    >
                      100,000
                    </button>
                    <button
                      type="button"
                      class="widthp-20 amount-tab"
                      data-amount="500000"
                    >
                      500,000
                    </button>
                  </div>
                </div>
              </div>
              <div class="flex-column flex-inherit deposit-account-m">
                <div class="interload-list padding-vertical-10">
                  <h1>입금계좌</h1>
                </div>

                <div class="interload-list align-items-center-inherit">
                  <div class="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right border-bottom ">
                    은행명
                  </div>
                  <div class="widthp-70 flex background-transparent-b-10 color-grey height-40 border-bottom bank">
                    <span class="color-white padding-left-10">-</span>
                  </div>
                </div>

                <div class="interload-list align-items-center-inherit">
                  <div class="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right border-bottom ">
                    예금주
                  </div>
                  <div class="widthp-70 flex background-transparent-b-10 color-grey height-40 border-bottom holder">
                    <span class="color-white padding-left-10">-</span>
                  </div>
                </div>

                <div class="interload-list align-items-center-inherit">
                  <div class="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right border-bottom ">
                    계좌번호
                  </div>
                  <div class="widthp-70 flex background-transparent-b-10 color-grey height-40 border-bottom number">
                    <span class="color-white padding-left-10">-</span>
                  </div>
                </div>

                <div class="interload-list padding-vertical-10 justify-content-end">
                  <span class="color-grey">
                    선입금 후 신청서를 작성해주세요.
                  </span>
                </div>
              </div>
              <div class="flex-column">
                <div class="interload-list">
                  <button
                    type="submit"
                    class="widthp-100 background-green color-white height-40 justify-content-center"
                  >
                    입금신청
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div
        >
          <div class="widthp-100 flex-column flex border-bottom padding-vertical-10 padding-right-15 align-items-right">
            <div class="select height-40">
              <select name="">
                <option value="">전체</option>
                <option value="">확인중</option>
              </select>
            </div>
          </div>
          <h1>sample</h1>
          {deposit.loading ? (
            <div colspan="15" class="td-3">
              <span></span>
            </div>
          ) : deposit?.deposits?.data?.length == 0 ? (
            <div colspan="12" class="color-white">
              데이터가 존재하지 않습니다.
            </div>
          ) : (
            deposit?.deposits?.data?.map((value, index) => {
              return (
                <div
                  class="flex flex-inherit flex-column list margin-bottom-1 background-transparent-b-10"
                  key={index}
                >
                  <div class="padding-horizontal-15 justify-content-center-inherit padding-vertical-15">
                    <div class="widthp-25 text-align-center">
                      <span class="color-grey">
                        yey{Moment(value.createdAt).format("MM / DD HH:mm")}
                      </span>
                    </div>
                    <div class="widthp-25 text-align-center">
                      <span class="color-grey text-align-center">
                        {value.method == "BITCOIN"
                          ? "비트코인"
                          : value.method == "CASH"
                            ? "현금"
                            : value.method == "PAYPAL"
                              ? "페이팔"
                              : "알 수 없음"}
                      </span>
                    </div>
                    <div class="widthp-25 text-align-center">
                      <span class="color-green">
                        {value.amount.toLocaleString()} 원
                      </span>
                    </div>
                    {value.status == "PENDING" ? (
                      <div class="widthp-25 text-align-center">
                        <span class="color-grey">대기</span>
                      </div>
                    ) : value.status == "ACCEPTED" ? (
                      <div class="widthp-25 text-align-center">
                        <span class="color-blue">완료</span>
                      </div>
                    ) : value.status == "REJECTED" ? (
                      <div class="widthp-25 text-align-center">
                        <span class="color-red">취소</span>
                      </div>
                    ) : value.status == "RECALLED" ? (
                      <div class="widthp-25 text-align-center">
                        <span class="color-red">회수</span>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Deposit;
