import React, { Fragment, useEffect, useState, useContext } from "react";
import { connect } from "react-redux";
import moment from "moment";
import Select from "react-select";
import { mapStateToProps, mapDispatchProps } from "../../redux/store";
import sweetalert from "../../plugins/sweetalert";
import exchangeModel from "../../models/exchangeModel";
import echo from "../../plugins/echo";
import { method } from "lodash";
import { Link, NavLink } from "react-router-dom";
import MenuContext from "../../contexts/Menu.context";

const Exchange = (props) => {
  let isSubscribed = true;
  const context = useContext(MenuContext);
  const { user } = props;
  const swal = new sweetalert();
  const model = new exchangeModel();
  const [exchange, setExchange] = useState({
    amount: 0,
    page: 1,
    lastPage: null,
    createdFrom: null,
    createdUntil: null,
    exchangeActivities: [],
    from: "cash",
    to: "casino_cash",
    form: {
      amount: 0,
    },
  });

  useEffect(() => {
    isSubscribed = true;

    if (user.isAuth) {
      pusher();
      fetch();
    }

    return () => {
      isSubscribed = false;
    };
  }, [exchange.page]);

  const pusher = () => {
    if (user.isAuth) {
      echo.private(`users.${user.member.id}`).listen("ExchangeUpdated", (e) => {
        fetch();
      });
    }
  };

  const fetch = async () => {
    const {
      data: { data: exchangeActivities, page, lastPage, amount },
    } = await model.index({
      page: exchange.page,
      createdFrom: exchange.createdFrom,
      createdUntil: exchange.createdUntil,
    });

    if (isSubscribed) {
      setExchange({
        ...exchange,
        exchangeActivities: exchangeActivities,
        page: page,
        lastPage: lastPage,
        amount: amount,
      });
    }
  };

  const method = (e) => {
    const _from = e.currentTarget.getAttribute("data-from");
    const _to = e.currentTarget.getAttribute("data-to");

    setExchange({
      ...exchange,
      from: _from,
      to: _to,
    });
  };

  const amountChange = (e) => {
    setExchange({
      ...exchange,
      form: {
        ...exchange.form,
        amount: Number(e.currentTarget.value.replaceAll(",", "")),
      },
    });
  };

  const QuickInput = (e) => {
    const amount = e.currentTarget.getAttribute("data-amount");

    setExchange({
      ...exchange,
      form: {
        ...exchange.form,
        amount: Number(amount) + exchange.form.amount,
      },
    });
  };

  const submit = async (e) => {
    e.preventDefault();
    swal.confirm("전환신청을 하시겠습니까?", async (r) => {
      if (r.value) {
        const f = new FormData(e.target);
        try {
          const success = await model.create({
            agreed: true,
            from: exchange.from,
            to: exchange.to,
            amount: f.get("amount").replaceAll(",", ""),
          });

          swal.success(success.data.message);
        } catch (error) {
          const data = error.response.data;
          swal.error(data.message);
        }
      }
    });
  };

  const checkbox = (e, id) => {
    const { exchangeActivities } = exchange;

    exchangeActivities.filter((exchangeActivities) => {
      if (exchangeActivities.id == id) {
        exchangeActivities.isSelected = e.currentTarget.checked;
      }
    });

    setExchange({
      ...exchange,
      exchangeActivities: exchangeActivities,
    });
  };

  const destroy = async () => {
    swal.confirm("정말로 선택된 전환내역을 삭제하시겠습니까?", async (r) => {
      if (r.value) {
        try {
          const filtered = exchange.exchangeActivities.filter(
            (exchangeActivities) => exchangeActivities.isSelected
          );
          if (filtered.length) {
            const success = await model.destroy({
              exchangeActivities: filtered,
            });

            fetch();
            swal.success(success.data.message);
          } else {
            swal.error("내역이 선택되지 않았습니다");
          }
        } catch (error) {
          const data = error.response.data;
          swal.error(data.message);
        }
      }
    });
  };

  const prev = () => {
    setExchange({
      ...exchange,
      page: exchange.page - 1,
    });
  };

  const next = () => {
    setExchange({
      ...exchange,
      page: exchange.page + 1,
    });
  };

  const setPage = (e) => {
    setExchange({
      ...exchange,
      page: e.value,
    });
  };

  return (
    <Fragment>
      <div class="content account-continer flex flex-inherit grow-2 flex-column">
        <div class="exchange-wrap account exchange-content-desktop flex-inherit padding-10">
          <div class="exchange-left-content account-height padding-right-5 border-right widthp-50 flex-inherit flex-column scrollable-auto">
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
                        <i class="far fa-won-sign"></i>
                        24,000,000원
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
                        120,000원
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
                    <div class="widthp-50 border-right-rb border-bottom-rb border-top height-45 color-green background-transparent-b-5 active">
                      <span class="color-green">보유금액 -&gt; CASINO</span>
                    </div>
                    <div class="widthp-50 border-bottom-rb border-top height-45 color-green background-transparent-b-5 border-left-rw">
                      <span class="color-grey">CASINO -&gt; 보유금액</span>
                    </div>
                  </div>
                  <div class="form-rows flex-inherit">
                    <div class="widthp-33 border-right-rb form-title height-45 border-bottom-rb border-top align-items-center justify-content-center background-transparent-b-10">
                      <span class="color-grey">출금 가능액</span>
                    </div>
                    <div class="widthp-67 form-content height-45 border-bottom-rb border-top align-items-center padding-right-15 justify-content-end background-transparent-b-5 border-left-rw">
                      <span class="color-green">23,000,000원</span>
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
                            value={exchange.form.amount.toLocaleString()}
                            onChange={amountChange}
                            required
                          />
                        </div>
                        <div>
                          <button type="button">
                            <i class="far fa-plus color-grey"></i>
                          </button>
                          <button type="button">
                            <i class="far fa-minus color-grey"></i>
                          </button>
                        </div>
                      </div>
                      <div class="amount-quick-box flex-inherit height-40">
                        <button
                          type="button"
                          class="flex justify-content-center align-items-center widthp-20 border-right-rb border-top heightp-100 color-grey border-left-rw"
                          data-amount="30000"
                          onClick={QuickInput}
                        >
                          30,000
                        </button>
                        <button
                          type="button"
                          class="flex justify-content-center align-items-center widthp-20 border-right-rb border-top heightp-100 color-grey border-left-rw"
                          data-amount="50000"
                          onClick={QuickInput}
                        >
                          50,000
                        </button>
                        <button
                          type="button"
                          class="flex justify-content-center align-items-center widthp-20 border-right-rb border-top heightp-100 color-grey border-left-rw"
                          data-amount="100000"
                          onClick={QuickInput}
                        >
                          100,000
                        </button>
                        <button
                          type="button"
                          class="flex justify-content-center align-items-center widthp-20 border-right-rb border-top heightp-100 color-grey border-left-rw"
                          data-amount="500000"
                          onClick={QuickInput}
                        >
                          500,000
                        </button>
                        <button
                          type="button"
                          class="flex justify-content-center align-items-center widthp-20 border-top heightp-100 color-grey border-left-rw"
                          data-amount="1000000"
                          onClick={QuickInput}
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
                    >
                      초기화
                    </button>
                  </div>
                  <div>
                    <button
                      type="button"
                      class="padding-15 background-green color-white"
                    >
                      전환신청
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="exchange-right-content account-height widthp-50 flex-inherit padding-left-5 border-left flex-column scrollable-auto">
            <div class="red-shadow exchange-header-title height-45 background-transparent-b-10 align-items-center padding-left-15 border-bottom-rb">
              <span class="color-white">전환신청 내역 Here is the list </span>
            </div>
            <div class="widthp-100 exchange-history-content flex-inherit flex-column">
              <div class="history-item">
                <table>
                  <thead>
                    <tr class="thead">
                      <th class="height-45 background-transparent-b-10 color-grey border-top">
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
                    <tr class="rows">
                      <td class="height-45 border-top">
                        <input type="checkbox" name="" value="1" />
                      </td>
                      <td class="height-45 border-top">
                        <span class="color-grey">2020-11-12 22:11:34</span>
                      </td>
                      <td class="height-45 border-top">
                        <span class="color-grey">현금</span>
                      </td>
                      <td class="height-45 border-top">
                        <span class="color-grey">1,000,000원</span>
                      </td>
                      <td class="height-45 border-top">
                        <span class="color-red">대기</span>
                      </td>
                    </tr>
                    <tr class="rows">
                      <td class="height-45 border-top">
                        <input type="checkbox" name="" value="1" />
                      </td>
                      <td class="height-45 border-top">
                        <span class="color-grey">2020-11-12 22:11:34</span>
                      </td>
                      <td class="height-45 border-top">
                        <span class="color-grey">비트코인</span>
                      </td>
                      <td class="height-45 border-top">
                        <span class="color-grey">0.5BTC</span>
                      </td>
                      <td class="height-45 border-top">
                        <span class="color-green">완료</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="history-item-footer flex-inherit border-top border-bottom-rb border-bottom-tb padding-vertical-10 align-items-center background-transparent-b-10">
                <div class="grow-2 padding-left-10">
                  <button
                    type="button"
                    class="color-grey padding-10 background-transparent-b-10"
                  >
                    <i class="fal fa-trash-alt"></i>
                    선택 삭제
                  </button>
                </div>
                <div class="padding-right-10">
                  <span class="color-grey">
                    누적 총 잔액
                    <strong class="color-red padding-left-5">
                      12,500,000원
                    </strong>
                  </span>
                </div>
              </div>
              <div class="padding-vertical-10 flex-inherit height-60 color-grey">
                <div class="pagination flex-inherit widthp-100 heightp-100">
                  <div class="select">
                    <select name="slct" id="slct">
                      <option value="">1</option>
                      <option value="">2</option>
                      <option value="">3</option>
                      <option value="">4</option>
                      <option value="">5</option>
                      <option value="">6</option>
                      <option value="">7</option>
                    </select>
                  </div>
                  <div class="flex margin-left-5 page grow-2 justify-content-end">
                    <Link to="#">
                      <button class="page-left width-40 heightp-100 background-transparent-b-20 margin-right-5">
                        <i class="fas fa-chevron-left margin-0 color-grey"></i>
                      </button>
                    </Link>
                    <Link to="#">
                      <button class="page-right width-40 heightp-100 background-transparent-b-20">
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
              안녕하세요. {user.member.nickname} 회원님
            </span>
          </div>
          <div class="flex">
            <span class="color-yellow padding-right-15">
              Lv.{user.member.level}
            </span>
          </div>
        </div>
        <div class="money-information border-bottom-rb flex-inherit">
          <div class="widthp-33 border-right-rb padding-left-15 padding-vertical-15">
            <div class="flex flex-column">
              <span class="color-white">예치금</span>
              <span class="color-green">
                {Number(user.member.cash).toLocaleString()}
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
              class={context.state.interMenu === "inter-tab-1" ? "active" : ""}
              onClick={() => context.actions.setinterMenu("inter-tab-1")}
            >
              전환신청
            </button>
          </div>
          <div class="flex widthp-50">
            <button
              type="button"
              id="tab-2"
              class={context.state.interMenu === "inter-tab-2" ? "active" : ""}
              onClick={() => context.actions.setinterMenu("inter-tab-2")}
            >
              전환내역
            </button>
          </div>
        </div>

        <div
          class={
            context.state.interMenu === "inter-tab-1"
              ? "interload-content flex-column active"
              : "interload-content flex-column"
          }
        >
          <form class="flex" onSubmit={submit}>
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
                      value={exchange.form.amount.toLocaleString()}
                      onChange={amountChange}
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
                      onClick={QuickInput}
                    >
                      5,000
                    </button>
                    <button
                      type="button"
                      class="widthp-20 amount-tab"
                      data-amount="10000"
                      onClick={QuickInput}
                    >
                      10,000
                    </button>
                    <button
                      type="button"
                      class="widthp-20 amount-tab"
                      data-amount="50000"
                      onClick={QuickInput}
                    >
                      50,000
                    </button>
                    <button
                      type="button"
                      class="widthp-20 amount-tab"
                      data-amount="100000"
                      onClick={QuickInput}
                    >
                      100,000
                    </button>
                    <button
                      type="button"
                      class="widthp-20 amount-tab"
                      data-amount="500000"
                      onClick={QuickInput}
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
        <h1>SAMPLE</h1>
        <div
          class={
            context.state.interMenu === "inter-tab-2"
              ? "interload-content flex-column active"
              : "interload-content flex-column"
          }
        >
          <div class="widthp-100 flex-column flex border-bottom-rb padding-vertical-10 padding-right-15 align-items-right">
            <div class="select height-40">
              <select name="">
                <option value="">전체</option>
                <option value="">확인중</option>
              </select>
            </div>
          </div>

          {exchange.exchangeActivities.length > 0 ? (
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
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default connect(mapStateToProps, mapDispatchProps)(Exchange);
