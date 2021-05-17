import React, { Fragment, useEffect, useState, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import Moment from "moment";
import sweetalert from "../../plugins/sweetalert";
import { method } from "lodash";
import { Link, NavLink } from "react-router-dom";
import MenuContext from "../../contexts/Menu.context";
import echo from '../../plugins/echo'

import {
  changeCreateExchangeAmount,
  checkExchangeCertainItem,
  createExchangeAction,
  decrementExchange,
  deleteExchanges,
  deleteExchangesRequest,
  fromCashToCasinoExchange,
  fromCasinoToCashExchange,
  incrementExchange,
  listOfToDeleteExchanges,
  nextPageExchange,
  onClickPageExchange,
  prevPageExchange,
  resetCreateExchange,
  selectAllExchange,
  selectExchangeMethod,
  setExchanges,
  setPagesOfExchange,
} from "../../redux/accounts/exchange/exchangeActions";
import { nextPageWIthdrawal } from "../../redux/accounts/withdrawal/withdrawalAction";
import { fetchSummary } from "../../redux/navigations/accountSummary/accountSummaryActions";

const Exchange = () => {
  let exchange = useSelector((state) => state.exchange);
  let user = useSelector((state) => state.user.user);
  let createExchange = useSelector((state) => state.exchange.createExchange);
  let preference = useSelector((state) => state.preference.preferences);
  let createExchangeStatus = useSelector(
    (state) => state.exchange.createExchangeStatus
  );
  let page = useSelector((state) => state.exchange.exchanges.page);
  let lastPage = useSelector((state) => state.exchange.exchanges.lastPage);
  let per_page = useSelector((state) => state.exchange.exchanges.per_page);
  let list_pages = useSelector((state) => state.exchange.exchanges.list_pages);
  const dispatch = useDispatch();
  let isSubscribed = true;
  const swal = new sweetalert();

  useEffect(() => {
    isSubscribed = true;

    dispatch(setExchanges({ page: page, per_page: per_page }));
    pusher();

    return () => {
      isSubscribed = false;
    };
  }, [page]);

  const pusher = () => {
    if (user.isAuth) {
    echo.private(`users.${user.member.id}`).listen('ExchangeUpdated', (e) => {
      dispatch(setExchanges({ page: page, per_page: per_page }));
      dispatch(fetchSummary());
    })
    }
  }

  return (
    <Fragment>
      <div class="content account-continer flex flex-inherit grow-2 flex-column">
        <div class="exchange-wrap account exchange-content-desktop flex-inherit">
          <div class="exchange-left-content account-height border-right widthp-50 padding-10 flex-inherit flex-column scrollable-auto">
            <div class="exchange-payment flex-column flex-inherit">
              <div class="flex-column flex-inherit widthp-100">
                <div class="red-shadow exchange-payment-apply height-45 background-transparent-b-10 align-items-center padding-left-15 border-bottom-rb flex-inherit">
                  <span class="color-white grow-2">게임머니 전환</span>
                </div>
                <div class="green-shadow exchange-payment-way height-45 background-transparent-b-10 align-items-center padding-left-15 border-bottom-rb border-top flex-inherit">
                  <span class="color-white">보유금액 확인</span>
                </div>
                <div class="check-money flex-inherit flex-column">
                  <div class="rows flex-inherit align-items-center-inherit">
                    <div class="widthp-33 height-45 background-transparent-b-10 justify-content-center border-right-rb border-bottom-rb border-top">
                      <span class="color-grey">현금</span>
                    </div>
                    <div class="widthp-67 form-content height-45 background-transparent-b-5 border-bottom-rb border-top align-items-center padding-right-15 justify-content-end border-left-rw">
                      <span class="color-green">
                        {/* CASH */}
                        <i class="far fa-won-sign"></i>
                        {Number(user.member.cash).toLocaleString()}원
                      </span>
                    </div>
                  </div>

                  <div class="rows flex-inherit align-items-center-inherit">
                    <div class="widthp-33 height-45 background-transparent-b-10 justify-content-center border-right-rb border-bottom-rb border-top">
                      <span class="color-grey">카지노 머니</span>
                    </div>
                    <div class="widthp-67 form-content height-45 background-transparent-b-5 border-bottom-rb border-top align-items-center padding-right-15 justify-content-end border-left-rw">
                      <span class="color-green">
                        <i class="far fa-won-sign"></i>
                        {Number(user.member.casino_cash).toLocaleString()}원
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex-column flex-inherit widthp-100">
                <div class="green-shadow exchange-payment-way height-45 background-transparent-b-10 align-items-center padding-left-15 border-bottom-rb border-top flex-inherit">
                  <span class="color-white">전환 방법 및 금액 설정</span>
                </div>
                <div class="account-form-data flex-column flex-inherit">
                  <div class="ac-payment-pbp flex-inherit align-items-center align-items-center-inherit justify-content-center-inherit">
                    <div
                      class={
                          createExchangeStatus == "cash"
                            ? "color-green widthp-50 border-right-rb border-bottom-rb border-top height-45 background-transparent-b-5 active"
                            : "color-grey widthp-50 border-right-rb border-bottom-rb border-top height-45 background-transparent-b-5"
                      }
                      onClick={() => {
                        dispatch(selectExchangeMethod("cash"));
                        dispatch(fromCashToCasinoExchange());
                      }}
                    >
                      <span>보유금액 -&gt; CASINO</span>
                    </div>
                    <div
                      class=
                      {
                        createExchangeStatus == "casino_cash"
                          ? "color-green widthp-50 border-bottom-rb border-top height-45 background-transparent-b-5 border-left-rw active"
                          : "color-grey widthp-50 border-bottom-rb border-top height-45 background-transparent-b-5 border-left-rw"
                      }
                      onClick={() => {
                        dispatch(selectExchangeMethod("casino_cash"));
                        dispatch(fromCasinoToCashExchange());
                      }}
                    >
                      <span>CASINO -&gt; 보유금액</span>
                    </div>
                  </div>
                  <div class="form-rows flex-inherit">
                    <div class="widthp-33 border-right-rb form-title height-45 border-bottom-rb border-top align-items-center justify-content-center background-transparent-b-10">
                      {/* Withdrawable Amount */}
                      <span class="color-grey">전환 가능액</span>
                    </div>
                    <div class="widthp-67 form-content height-45 border-bottom-rb border-top align-items-center padding-right-15 justify-content-end background-transparent-b-5 border-left-rw">
                      <span class="color-green">
                        {preference.exchangealMinAmount}원
                      </span>
                    </div>
                  </div>
                  <div class="form-rows flex-inherit">
                    <div class="widthp-33 border-right-rb form-title heightp-100 border-bottom-rb border-top align-items-center justify-content-center padding-vertical-15 background-transparent-b-10">
                      <span class="color-grey">신청금액</span>
                    </div>
                    <div class="widthp-67 form-content border-bottom-rb border-top flex-inherit flex-column background-transparent-b-5">
                      <div class="amount-box flex-inherit border-bottom-rb padding-vertical-15 border-left-rw">
                        <div class="grow-2">
                          <input
                            type="text"
                            class="input-form padding-left-10"
                            name="amount"
                            placeholder="0"
                            value={createExchange.amount}
                            onChange={(e) => {
                              let amt = 0;
                              amt = Number(createExchange.amount);
                              dispatch(changeCreateExchangeAmount(amt));
                            }}
                            required
                          />
                        </div>
                        <div>
                          <button
                            type="button"
                            onClick={() => {
                              dispatch(incrementExchange());
                            }}
                          >
                            <i class="far fa-plus color-grey"></i>
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              dispatch(decrementExchange());
                            }}
                          >
                            <i class="far fa-minus color-grey"></i>
                          </button>
                        </div>
                      </div>
                      <div class="amount-quick-box flex-inherit height-40">
                        <button
                          type="button"
                          class="flex justify-content-center align-items-center widthp-20 border-right-rb border-top heightp-100 color-grey border-left-rw"
                          data-amount="30000"
                          onClick={() => {
                            dispatch(changeCreateExchangeAmount(30000));
                          }}
                        >
                          30,000
                        </button>
                        <button
                          type="button"
                          class="flex justify-content-center align-items-center widthp-20 border-right-rb border-top heightp-100 color-grey border-left-rw"
                          data-amount="50000"
                          onClick={() => {
                            dispatch(changeCreateExchangeAmount(50000));
                          }}
                        >
                          50,000
                        </button>
                        <button
                          type="button"
                          class="flex justify-content-center align-items-center widthp-20 border-right-rb border-top heightp-100 color-grey border-left-rw"
                          data-amount="100000"
                          onClick={() => {
                            dispatch(changeCreateExchangeAmount(100000));
                          }}
                        >
                          100,000
                        </button>
                        <button
                          type="button"
                          class="flex justify-content-center align-items-center widthp-20 border-right-rb border-top heightp-100 color-grey border-left-rw"
                          data-amount="500000"
                          onClick={() => {
                            dispatch(changeCreateExchangeAmount(500000));
                          }}
                        >
                          500,000
                        </button>
                        <button
                          type="button"
                          class="flex justify-content-center align-items-center widthp-20 border-top heightp-100 color-grey border-left-rw"
                          data-amount="1000000"
                          onClick={() => {
                            dispatch(changeCreateExchangeAmount(1000000));
                          }}
                        >
                          1,000,000
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="exchange-payment-confirm-btn padding-top-10 flex-inherit">
                  <div class="grow-2">
                    <button
                      type="button"
                      class="padding-15 background-transparent-b-10 color-white"
                      onClick={() => {
                        dispatch(resetCreateExchange());
                      }}
                    >
                      초기화
                    </button>
                  </div>
                  <div>
                    <button
                      type="button"
                      class="padding-15 background-green color-white"
                      onClick={() =>
                        dispatch(createExchangeAction(createExchange))
                      }
                    >
                      전환신청
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="exchange-right-content account-height widthp-50 padding-10 flex-inherit border-left flex-column scrollable-auto">
            <div class="red-shadow exchange-header-title height-45 background-transparent-b-10 align-items-center padding-left-15 border-bottom-rb">
              <span class="color-white">전환신청 내역 </span>
            </div>
            <div class="widthp-100 exchange-history-content flex-inherit flex-column">
              <div class="history-item">
                <table>
                  <thead>
                    <tr class="thead">
                      <th
                        class="height-45 background-transparent-b-10 color-grey border-top"
                        onClick={() => {
                          dispatch(selectAllExchange());
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
                    {exchange.loading ? (
                      <tr>
                        <td colspan="5" class="td-3">
                          <i class="fa fa-spinner fa-spin fa-2x fa-fw color-grey"></i>
                        </td>
                      </tr>
                    ) : exchange?.exchanges?.data?.length == 0 ? (
                      <tr>
                        <td colspan="12" class="color-white">
                          데이터가 존재하지 않습니다.
                        </td>
                      </tr>
                    ) : (
                      exchange?.exchanges?.data?.map((item, index) => {
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
                                  dispatch(checkExchangeCertainItem(payload));
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
                              <span class="color-grey"> {item.from}</span>
                            </td>
                            <td class="height-45 border-top">
                              <span class="color-grey">
                                {Number(item.amount).toLocaleString()}
                                {item.from == "cash" ? "원" : "BTC"}
                              </span>
                            </td>
                            <td class="height-45 border-top">
                              <span class="color-green">{item.to}</span>
                            </td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>
              <div class="history-item-footer flex-inherit border-top border-bottom-rb border-bottom-tb padding-vertical-10 align-items-center background-transparent-b-10">
                <div class="grow-2 padding-left-10">
                  <button
                    type="button"
                    class="color-grey padding-10 background-transparent-b-10"
                    onClick={() => {
                      let newList = [];
                      exchange.exchanges.data.map((o) => {
                        if (o.isChecked == true) {
                          newList.push(o);
                        }
                      });
                      if (newList.length == 0) {
                        swal.warning("Please select a deposit to delete.");
                      } else {
                        dispatch(listOfToDeleteExchanges());
                        dispatch(deleteExchangesRequest());
                        dispatch(
                          deleteExchanges(exchange.newExchangeToDeleteList)
                        );
                      }
                    }}
                  >
                    <i class="fal fa-trash-alt"></i>
                    선택 삭제
                  </button>
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
                            onClickPageExchange({
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
                        disabled = {page == 1 }
                        onClick={() => {
                          let prevData = {
                            page: page,
                            list_pages: list_pages,
                            per_page: per_page,
                          };
                          if (page == 1) {
                            swal.warning(" 페이지에 반응");
                          } else {
                            dispatch(prevPageExchange(prevData));
                          }
                        }}
                      >
                        <i class="fas fa-chevron-left margin-0 color-grey"></i>
                      </button>
                    </Link>
                    <Link to="#">
                      <button
                        class="page-right width-40 heightp-100 background-transparent-b-20"
                        disabled = {page == lastPage }
                        onClick={() => {
                          let nextData = {
                            page: page,
                            list_pages: list_pages,
                            per_page: per_page,
                          };
                          if (page == lastPage) {
                            swal.warning(" 페이지에 반응");
                          } else {
                            dispatch(nextPageExchange(nextData));
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
            <span class="color-white padding-left-15">exchange</span>
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
              {/* Lv.{user.member.level} */} Lv.
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
              class="active"
              id="tab-1"
              //   class={context.state.interMenu === "inter-tab-1" ? "active" : ""}
              //   onClick={() => context.actions.setinterMenu("inter-tab-1")}
            >
              전환신청
            </button>
          </div>
          <div class="flex widthp-50">
            <button
              type="button"
              id="tab-2"
              //   class={context.state.interMenu === "inter-tab-2" ? "active" : ""}
              //   onClick={() => context.actions.setinterMenu("inter-tab-2")}
            >
              전환내역
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
            class="flex"
            //   onSubmit={submit}
          >
            <div class="widthp-100 flex-column flex-inherit padding-horizontal-15">
              <div class="flex-column flex-inherit">
                <div class="interload-list padding-vertical-10">
                  <h1>전환 신청서</h1>
                </div>
                <div class="interload-list align-items-center-inherit">
                  <div class="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right-rb border-bottom-rb ">
                    전환 방법
                  </div>
                  <div class="widthp-70 flex background-transparent-b-10 color-grey height-40 border-bottom-rb">
                    <div class="select">
                      <select name="payment">
                        <option value="cash">보유금액 -&gt; CASINO</option>
                        <option value="paypal">CASINO -&gt; 보유금액</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div class="interload-list align-items-center-inherit">
                  <div class="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right-rb border-bottom-rb ">
                    신청금액
                  </div>
                  <div class="widthp-70 flex background-transparent-b-10 color-grey height-40 border-bottom-rb">
                    <input
                      type="text"
                      name="amount"
                      placeholder="0"
                      //   value={exchange.form.amount.toLocaleString()}
                      //   onChange={amountChange}
                      required
                    />
                  </div>
                </div>
                <div class="interload-list interload-tab height-50 align-items-center-inherit">
                  <div class="flex widthp-100">
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
            <div class="select height-40">
              <select name="">
                <option value="">전체</option>
                <option value="">확인중</option>
              </select>
            </div>
          </div>

          {/* {exchange.exchangeActivities.length > 0 ? (
            exchange.exchangeActivities.map((value, index) => {
              return (
                <div
                  class="flex flex-inherit flex-column list margin-bottom-1 background-transparent-b-10"
                  key={index}
                >
                  <div class="padding-horizontal-15 justify-content-center-inherit padding-vertical-15">
                    <div class="widthp-25 text-align-center">
                      <span class="color-grey">
                        SSS{moment(value.createdAt).format("MM / DD HH:mm")}
                      </span>
                    </div>
                    <div class="widthp-25 text-align-center">
                      <span class="color-grey text-align-center">
                        {value.to == "cash"
                          ? "보유금액"
                          : value.to == "casino_cash"
                          ? "CASINO"
                          : "알 수 없음"}
                      </span>
                    </div>
                    <div class="widthp-25 text-align-center">
                      <span class="color-green">
                        {value.amount.toLocaleString()}원
                      </span>
                    </div>
                    <div class="widthp-25 text-align-center">
                      <span class="color-blue">완료</span>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div class="widthp-100 flex justify-content-center color-grey height-50 align-items-center">
              전환내역이 없습니다.
            </div>
          )} */}
        </div>
      </div>
    </Fragment>
  );
};

export default Exchange;
