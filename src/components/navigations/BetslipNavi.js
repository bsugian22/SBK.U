import React, { Fragment, useEffect, useState, useContext } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MenuContext from "../../contexts/Menu.context";
import { splice_data } from "../../helpers/object";
import { bet, betFailure, betSucess, resetOutcome, setBetAmount, setIntervalId, spliceOutcome, validateBet } from "../../redux/sportsdetail/sportsdetailActions";
import sweetalert from "../../plugins/sweetalert";
import Pusher from "pusher-js";
import echo from "../../plugins/echo";

export default function BetslipNavi(props) {
  const context = useContext(MenuContext);
  const swal = new sweetalert();
  let isSubscribed = true;

  // const pusher = new Pusher()

  const OpenLayer = {
    display: "flex",
  };
  const CloseLayer = {
    display: "hidden",
  };
  const dispatch = useDispatch();
  let sports = useSelector((state) => state.sportsdetail);
  let user = useSelector((state) => state.user.user);

  useEffect(() => {
    isSubscribed = true;
    return () => {
      isSubscribed = false;
    };
  }, []);



  const setBet = (value) => {
    dispatch(setBetAmount(value));
  };

  return (
    <Fragment>
      <div class="loader" hidden={!sports.loadingBet}>
        <div class="flex justify-content-center heightp-100 widthp-100 align-items-center loader_spiner"><i class="fa fa-spinner fa-spin fa-4x fa-fw color-grey"></i></div>
      </div>
      <div class="flex betslip-content-desktop betslip content-height shrink-0 width-300 border-left border-left-shadow flex-column scrollable-auto">
        <div class="tab flex shrink-0 flex-inherit height-50 padding-10 title align-items-center-inherit background-transparent-b-15 border-bottom">
          <div class="grow-2">
            <span class="color-green">BETTING SLIP {sports.intervalId} </span>
          </div>
          <div class="count">
            <span class="color-white">{sports.data.bet.outcomes.length}</span>
          </div>
          <div class="delete padding-horizontal-10">
            <button class="color-grey"
              onClick={() => {
                dispatch(resetOutcome())
              }

              }>
              <i class="fad fa-trash margin-0"></i>
            </button>
          </div>
        </div>
        <div class="pick pick-empty flex flex-inherit flex-column"> {/*Pick이 있을 시 pick-empty class 제거*/}

          {/* Pick이 있을 시  */}
          <div class="slip-content flex-inherit flex-column">
            {sports.data.bet.outcomes.length > 0
              ? sports.data.bet.outcomes.map((outcome, index) => {
                return (
                  <div key={index} class="slip-data flex-inherit widthp-100 background-transparent-b-5 padding-10 border-top border-bottom">
                    <div class="flex-inherit slip-odds background-transparent-b-10 padding-15 align-items-center"><span class="color-red">{outcome.odds}</span></div>
                    <div class="flex-inherit flex-column slip-pick grow-2">
                      <div class="flex-inherit padding-left-10">
                        <div class="pick-info flex-column widthp-90">
                          <div class="pick"><span class="color-white">{outcome.outcome_name}</span></div>
                          <div class="type"><span class="color-grey">{outcome.market_name}</span></div>
                        </div>
                        <div class="delete widthp-10 justify-content-center">
                          <button type="button" class="btn-0 color-twhite"
                            onClick={() => {
                              dispatch(spliceOutcome(index))
                            }

                            }
                          ><i class="fal fa-times margin-0"></i></button>
                        </div>
                      </div>
                      <div class="flex-inherit team-info padding-left-10 text-ellipsis">
                        <span class="color-grey text-ellipsis">{outcome.home_team.length < 8 ? outcome.home_team : outcome.home_team.substring(0, 8) + "..."}<span class="color-white padding-horizontal-5">vs</span>{outcome.away_team.length < 8 ? outcome.away_team : outcome.away_team.substring(0, 8) + "..."}</span>
                      </div>
                    </div>
                  </div>
                )
              })
              : <span class="color-grey flex justify-content-center align-items-center padding-10 border-top border-bottom"> {/*Pick이 있을 시 display-none class 추가*/}
                <i class="fal fa-exclamation-triangle margin-top-2"></i>선택된 경기가 없습니다
              </span>
            }
          </div>
        </div>
        {sports.loadingBet == true ?
          // <div class="flex justify-content-center heightp-100 align-items-center"><i class="fa fa-spinner fa-spin fa-4x fa-fw color-grey"></i></div>
          ""
          :
          <div class="stake flex flex-inherit shrink-0 border-top">
            <div class="flex-inherit flex-column widthp-100">
              <div class="flex-inherit align-items-center-inherit padding-5 height-40 align-items-center-inherit background-transparent-b-15">
                <div class="grow-2 color-grey">베팅금액</div>
                <div class="">
                  <input
                    type="text"
                    class="input-form width-150 stake-input padding-vertical-5 padding-horizontal-10 text-align-right heightp-100 background-transparent-b-10 color-white"
                    name="skeyword"
                    placeholder="금액을 입력하세요"
                    required
                    value={sports.data.bet.amount}
                    onChange={(e) =>
                      dispatch(setBetAmount(e.target.value))
                    }
                  />
                </div>
              </div>
              <div class="flex-inherit flex-column border-top border-bottom">
                <div class="widthp-100 flex-inherit height-40 justify-content-center-inherit align-items-center-inherit background-transparent-b-5">
                  <div class="widthp-33">
                    <button class="heightp-100 widthp-100 color-grey btn-0 border-right-white background-transparent"
                      onClick={() =>
                        setBet("5000")
                      }>
                      5,000
                  </button>
                  </div>
                  <div class="widthp-33">
                    <button class="heightp-100 widthp-100 color-grey btn-0 border-right-white background-transparent"
                      onClick={() =>
                        setBet("10000")
                      }>
                      10,000
                  </button>
                  </div>
                  <div class="widthp-33">
                    <button class="heightp-100 widthp-100 color-grey btn-0 background-transparent"
                      onClick={() =>
                        setBet("50000")
                      }>
                      50,000
                  </button>
                  </div>
                </div>
                <div class="widthp-100 flex-inherit height-40 justify-content-center-inherit align-items-center-inherit border-top background-transparent-b-5">
                  <div class="widthp-33">
                    <button class="heightp-100 widthp-100 color-grey btn-0 background-transparent border-right-white"
                      onClick={() =>
                        setBet("100000")
                      }>
                      100,000
                  </button>
                  </div>
                  <div class="widthp-33">
                    <button class="heightp-100 widthp-100 color-grey btn-0 background-transparent border-right-white"
                      onClick={() =>
                        setBet("500000")
                      }>
                      500,000
                  </button>
                  </div>
                  <div class="widthp-33">
                    <button class="heightp-100 widthp-100 color-grey btn-0 background-transparent"
                      onClick={() =>
                        setBet("1000000")
                      }>
                      1,000,000
                  </button>
                  </div>
                </div>
              </div>
              <div class="flex-inherit align-items-center-inherit padding-5 height-40 align-items-center-inherit border-top background-transparent-b-15 border-bottom">
                <div class="grow-2 color-grey">배당률 합계</div>
                <div class="color-green total-odds">
                  <i class="fal fa-times fa-xs margin-right-5 margin-top-2"></i> {sports.data.bet.total_odds}
                </div>
              </div>
              <div class="flex-inherit align-items-center-inherit padding-5 height-40 align-items-center-inherit border-top background-transparent-b-15 border-bottom">
                <div class="grow-2 color-grey">예상당첨금액</div>
                <div class="color-green total-win-price">
                  <i class="fas fa-won-sign fa-xs margin-right-5"></i>{sports.data.bet.total_odds * sports.data.bet.amount}
                </div>
              </div>
              <div class="flex-inherit align-items-center-inherit height-40 align-items-center-inherit border-top border-bottom">
                <button class="bet widthp-100 height-40 align-items-center justify-content-center background-green"
                  onClick={() => {
                    let changeOdds = false;
                    sports.data.bet.outcomes.map((outcome, index) => {
                      if (outcome.oldOdds != null) {
                        changeOdds = true
                      }
                    })

                    if (changeOdds) {

                      swal.fire({
                        title: 'are you sure to bet?',
                        showCancelButton: true,
                        confirmButtonText: `BET`,
                      }).then((result) => {
                        /* Read more about isConfirmed, isDenied below */
                        if (result.isConfirmed) {

                          swal.fire({
                            title: 'Odds have been changed, do you still want to bet?',
                            showCancelButton: true,
                            confirmButtonText: `BET`,
                          }).then((result) => {
                            /* Read more about isConfirmed, isDenied below */
                            if (result.isConfirmed) {
                              dispatch(bet(sports.data.bet,user.member.id))
                            } else if (result.isDenied) {
                              swal.fire('')
                            }
                          })

                        } else if (result.isDenied) {
                          swal.fire('')
                        }
                      })

                    } else {

                      swal.fire({
                        title: 'are you sure to bet?',
                        showCancelButton: true,
                        confirmButtonText: `BET`,
                      }).then((result) => {
                        /* Read more about isConfirmed, isDenied below */
                        if (result.isConfirmed) {
                          dispatch(bet(sports.data.bet,user.member.id))
                        } else if (result.isDenied) {
                          swal.fire('')
                        }
                      })

                    }

                  }

                  }>
                  <span class="color-white">BET</span>
                </button>
              </div>
            </div>
          </div>
        }

        <div class="flex shrink-0 flex-inherit height-50 padding-10 align-items-center-inherit background-transparent-b-15 border-top border-bottom">
          <div class="grow-2 flex">
            <span class="color-green">PROMOTION</span>
          </div>
        </div>
        <div class="promo-content flex border-top">
          <span class="height-40 padding-10 flex color-grey align-items-center justify-content-center widthp-100">
            진행중인 프로모가 없습니다
          </span>
        </div>

      </div>



      <div class="betslip-fixed-mobile flex flex-inherit widthp-100 height-50 border-top">
        <div class="flex padding-left-15 align-items-center widthp-100">
          <div class="count padding-10 background-red">
            <span class="color-white">0</span>
          </div>
          <div class="flex-column padding-horizontal-10 widthp-90">
            <div class="flex">
              <span class="color-white grow-2">
                개의 저장된 슬립이 있습니다.
              </span>
              <span class="color-white">예치금</span>
            </div>
            <div class="flex">
              <span class="color-grey grow-2">수정하기</span>
              <span class="color-red mem-cach">30,000원</span>
            </div>
          </div>
          <div class="widthp-10 upslide flex border-left justify-content-center">
            {context.state.betslipMenu === true && (
              <button
                type="button"
                class="color-white slip-up-arrow"
                onClick={() => {
                  context.actions.setbetslipMenu(false);
                }}
              >
                <i class="far fa-angle-double-down"></i>
              </button>
            )}

            {context.state.betslipMenu === false && (
              <button
                type="button"
                class="color-white slip-up-arrow"
                onClick={() => {
                  context.actions.setbetslipMenu(true);
                }}
              >
                <i class="far fa-angle-double-up"></i>
              </button>
            )}
          </div>
        </div>
      </div>

      <div
        class={
          context.state.betslipMenu
            ? "betslip betslip-content-mobile flex flex-column widthp-100 betslip-open-layer"
            : "betslip betslip-content-mobile flex flex-column widthp-100"
        }
      >
        <div class="widthp100 flex delete-all flex-column flex height-50 justify-content-center padding-left-15 border-bottom">
          <span class="color-red">모두삭제</span>
        </div>
        <div class="pick flex flex-inherit flex-column scrollable-auto"></div>
        <div class="stake flex flex-inherit height-50 background-transparent-b-5">
          <div class="amount widthp-50 heightp-100 border-right">
            <div class="flex widthp-100 align-items-center padding-left-15">
              <span class="color-red">
                <i class="far fa-won-sign"></i>
              </span>
              <input
                type="text"
                class="background-transparent-b-5 color-white stake-input-mobile"
                name="skeyword"
                placeholder="금액을 입력하세요"
              />
            </div>
          </div>

          <div class="odds-info widthp-50 heightp-100 border-right">
            <div class="flex widthp-100 align-items-center padding-left-15">
              <span class="color-red grow-2">
                <i class="far fa-at"></i>
              </span>
              <span class="color-green total-odds padding-right-15">0</span>
            </div>
          </div>
        </div>
        <div class="betting-process flex flex-inherit">
          <div class="widthp-100 flex-column">
            <button class="bet widthp-100 height-40 align-items-center justify-content-center background-green">
              <span class="color-white">배팅하기</span>
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
