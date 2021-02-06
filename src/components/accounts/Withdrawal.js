import React, { Fragment, useEffect, useState, useContext } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import Select from 'react-select'
import { mapStateToProps, mapDispatchProps } from '../../helpers/store'
import sweetalert from '../../plugins/sweetalert'
import withdrawalModel from '../../models/withdrawalModel'
import echo from '../../plugins/echo'
import { Link, NavLink } from 'react-router-dom'
import MenuContext from '../../contexts/Menu.context'
const Withdrawal = (props) => {
   const context = useContext(MenuContext)
   let isSubscribed = true
   const { user } = props
   const swal = new sweetalert()
   const model = new withdrawalModel()
   const [withdrawal, setWithdrawal] = useState({
      amount: 0,
      page: 1,
      lastPage: null,
      createdFrom: null,
      createdUntil: null,
      withdrawalActivities: [],
      form: {
         amount: 0,
      },
   })

   useEffect(() => {
      isSubscribed = true

      if (user.isAuth) {
         pusher()
         fetch()
      }

      return () => {
         isSubscribed = false
      }
   }, [withdrawal.page])

   const pusher = () => {
      if (user.isAuth) {
         echo.private(`users.${user.member.id}`).listen('WithdrawalUpdated', (e) => {
            fetch()
         })
      }
   }

   const fetch = async () => {
      const {
         data: { data: withdrawalActivities, page, lastPage, amount },
      } = await model.index({
         page: withdrawal.page,
         createdFrom: withdrawal.createdFrom,
         createdUntil: withdrawal.createdUntil,
      })

      if (isSubscribed) {
         setWithdrawal({
            ...withdrawal,
            withdrawalActivities: withdrawalActivities,
            page: page,
            lastPage: lastPage,
            amount: amount,
         })
      }
   }

   const amountChange = (e) => {
      setWithdrawal({
         ...withdrawal,
         form: {
            ...withdrawal.form,
            amount: Number(e.currentTarget.value.replaceAll(',', '')),
         },
      })
   }

   const QuickInput = (e) => {
      const amount = e.currentTarget.getAttribute('data-amount')

      setWithdrawal({
         ...withdrawal,
         form: {
            ...withdrawal.form,
            amount: Number(amount) + withdrawal.form.amount,
         },
      })
   }

   const submit = async (e) => {
      e.preventDefault()
      swal.confirm('환전신청을 하시겠습니까?', async (r) => {
         if (r.value) {
            const f = new FormData(e.target)
            try {
               const success = await model.create({
                  agreed: true,
                  password: f.get('password'),
                  method: 'CASH',
                  amount: f.get('amount').replaceAll(',', ''),
               })

               swal.success(success.data.message)
            } catch (error) {
               const data = error.response.data
               swal.error(data.message)
            }
         }
      })
   }

   const checkbox = (e, id) => {
      const { withdrawalActivities } = withdrawal

      withdrawalActivities.filter((withdrawalActivities) => {
         if (withdrawalActivities.id == id) {
            withdrawalActivities.isSelected = e.currentTarget.checked
         }
      })

      setWithdrawal({
         ...withdrawal,
         withdrawalActivities: withdrawalActivities,
      })
   }

   const destroy = async () => {
      swal.confirm('정말로 선택된 환전내역을 삭제하시겠습니까?', async (r) => {
         if (r.value) {
            try {
               const filtered = withdrawal.withdrawalActivities.filter((withdrawalActivities) => withdrawalActivities.isSelected)
               if (filtered.length) {
                  const success = await model.destroy({
                     withdrawalActivities: filtered,
                  })

                  fetch()
                  swal.success(success.data.message)
               } else {
                  swal.error('내역이 선택되지 않았습니다')
               }
            } catch (error) {
               const data = error.response.data
               swal.error(data.message)
            }
         }
      })
   }

   const prev = () => {
      setWithdrawal({
         ...withdrawal,
         page: withdrawal.page - 1,
      })
   }

   const next = () => {
      setWithdrawal({
         ...withdrawal,
         page: withdrawal.page + 1,
      })
   }

   const setPage = (e) => {
      setWithdrawal({
         ...withdrawal,
         page: e.value,
      })
   }

   return (
      <Fragment>
         <div class="content account-continer flex flex-inherit grow-2 flex-column">
            <div class="withdraw-wrap account withdraw-content-desktop flex-inherit padding-10">
               <div class="withdraw-left-content account-height widthp-50 flex-inherit flex-column margin-right-10 scrollable-auto">
                  <div class="widthp-100 withdraw-notice flex-inherit flex-column margin-bottom-20">
                     <div class="red-shadow withdraw-header-title height-45 background-transparent-b-10 align-items-center padding-left-15 border-bottom">
                        <span class="color-white">출금신청 주의사항</span>
                     </div>
                     <div class="ac-comment-header-content padding-15 background-transparent-b-5 flex-inherit flex-column">
                        <p class="color-grey">- 출금 시 출금자명이 다른경우 출금처리가 되지 않습니다</p>
                        <p class="color-grey">- 출금 신청시 보유머니가 차감됩니다</p>
                        <p class="color-grey">- 출금 최소 금액은 1만원이상 1천원 단위로 가능합니다</p>
                        <p class="color-grey">- 매일 00:00 부터 00:30까지는 은행점검으로 인해 출금이 보류됩니다</p>
                     </div>
                  </div>
                  <div class="withdraw-payment flex-column flex-inherit">
                     <div class="flex-column flex-inherit widthp-100">
                        <div class="red-shadow withdraw-payment-apply height-45 background-transparent-b-10 align-items-center padding-left-15 border-bottom flex-inherit">
                           <span class="color-white grow-2">출금 신청서</span>
                           <div class="padding-right-15 align-items-center">
                              <i class="far fa-exclamation-triangle color-yellow"></i>
                              <span class="color-grey">선입금 후 신청서를 작성해주세요.</span>
                           </div>
                        </div>
                        <div class="green-shadow withdraw-payment-way height-45 background-transparent-b-10 align-items-center padding-left-15 border-bottom flex-inherit">
                           <span class="color-white">출금 방법 선택</span>
                        </div>
                        <div class="ac-payment-pbp flex-inherit align-items-center align-items-center-inherit justify-content-center-inherit">
                           <div class="widthp-33 border-right border-bottom height-45 color-green background-transparent-b-5">
                              <span class="color-green">
                                 <i class="far fa-wallet"></i>현금
                              </span>
                           </div>
                           <div class="widthp-33 border-right border-bottom height-45 color-green background-transparent-b-5">
                              <span class="color-grey">
                                 <i class="fab fa-paypal"></i>페이팔
                              </span>
                           </div>
                           <div class="widthp-33  border-bottom height-45 color-green background-transparent-b-5">
                              <span class="color-grey">
                                 <i class="fab fa-bitcoin"></i>비트코인
                              </span>
                           </div>
                        </div>
                     </div>
                     <div class="flex-column flex-inherit widthp-100">
                        <div class="green-shadow withdraw-payment-way height-45 background-transparent-b-10 align-items-center padding-left-15 border-bottom flex-inherit">
                           <span class="color-white">출금 가능액 및 출금액 등록</span>
                        </div>
                        <div class="account-form-data flex-column flex-inherit">
                           <div class="form-rows flex-inherit">
                              <div class="widthp-33 border-right form-title height-45 border-bottom align-items-center justify-content-center">
                                 <span class="color-grey">출금 가능액</span>
                              </div>
                              <div class="widthp-67 form-content height-45 border-bottom align-items-center padding-right-15 justify-content-end">
                                 <span class="color-green">23,000,000원</span>
                              </div>
                           </div>
                           <div class="form-rows flex-inherit">
                              <div class="widthp-33 border-right form-title heightp-100 border-bottom align-items-center justify-content-center padding-vertical-15">
                                 <span class="color-grey">출금 신청액</span>
                              </div>
                              <div class="widthp-67 form-content border-bottom flex-inherit flex-column">
                                 <div class="amount-box flex-inherit border-bottom padding-vertical-15">
                                    <div class="grow-2">
                                       <input
                                          type="text"
                                          class="input-form padding-left-10"
                                          name="amount"
                                          placeholder="0"
                                          value={withdrawal.form.amount.toLocaleString()}
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
                                       class="flex justify-content-center align-items-center background-transparent-b-5 widthp-20 border-right heightp-100 color-grey"
                                       data-amount="30000"
                                       onClick={QuickInput}
                                    >
                                       30,000
                                    </button>
                                    <button
                                       type="button"
                                       class="flex justify-content-center align-items-center background-transparent-b-5 widthp-20 border-right heightp-100 color-grey"
                                       data-amount="50000"
                                       onClick={QuickInput}
                                    >
                                       50,000
                                    </button>
                                    <button
                                       type="button"
                                       class="flex justify-content-center align-items-center background-transparent-b-5 widthp-20 border-right heightp-100 color-grey"
                                       data-amount="100000"
                                       onClick={QuickInput}
                                    >
                                       100,000
                                    </button>
                                    <button
                                       type="button"
                                       class="flex justify-content-center align-items-center background-transparent-b-5 widthp-20 border-right heightp-100 color-grey"
                                       data-amount="500000"
                                       onClick={QuickInput}
                                    >
                                       500,000
                                    </button>
                                    <button
                                       type="button"
                                       class="flex justify-content-center align-items-center background-transparent-b-5 widthp-20 heightp-100 color-grey"
                                       data-amount="1000000"
                                       onClick={QuickInput}
                                    >
                                       1,000,000
                                    </button>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="flex-column flex-inherit widthp-100">
                        <div class="green-shadow withdraw-payment-way height-45 background-transparent-b-10 align-items-center padding-left-15 border-bottom flex-inherit">
                           <span class="color-white">출금 계좌 확인</span>
                        </div>
                        <div class="withdraw-payment-confirm-data flex-column flex-inherit">
                           <div class="confirm-rows height-45 justify-content-center-inherit flex-inherit border-bottom align-items-center-inherit">
                              <div class="widthp-33 border-right">
                                 <span class="color-grey">은행명</span>
                              </div>
                              <div class="widthp-33 border-right">
                                 <span class="color-grey">예금주</span>
                              </div>
                              <div class="widthp-33">
                                 <span class="color-grey">결제 계좌</span>
                              </div>
                           </div>
                           <div class="confirm-rows height-45 justify-content-center-inherit flex-inherit border-bottom align-items-center-inherit">
                              <div class="widthp-33 border-right">
                                 <span class="color-white">농협</span>
                              </div>
                              <div class="widthp-33 border-right">
                                 <span class="color-white">주식회사 웨스트몰</span>
                              </div>
                              <div class="widthp-33">
                                 <span class="color-white">301-0252-3577-31</span>
                              </div>
                           </div>
                        </div>
                        <div class="withdraw-payment-confirm-btn padding-top-20 flex-inherit">
                           <div class="grow-2">
                              <button type="button" class="padding-15 background-transparent-b-10 color-white">
                                 초기화
                              </button>
                           </div>
                           <div>
                              <input type="password" class="padding-15 color-white background-transparent-b-10 width-200 heightp-100 margin-right-15" placeholder="출금 비밀번호를 입력하세요" />
                              <button type="button" class="padding-15 background-green color-white">
                                 출금신청
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="withdraw-right-content account-height widthp-50 flex-inherit flex-column scrollable-auto">
                  <div class="red-shadow withdraw-header-title height-45 background-transparent-b-10 align-items-center padding-left-15 border-bottom">
                     <span class="color-white">출금신청 내역</span>
                  </div>
                  <div class="widthp-100 withdraw-history-content flex-inherit flex-column">
                     <div class="history-item">
                        <table>
                           <thead>
                              <tr class="thead">
                                 <th class="height-45 background-transparent-b-10 color-grey">전체 선택</th>
                                 <th class="height-45 background-transparent-b-10 color-grey">신청 시간</th>
                                 <th class="height-45 background-transparent-b-10 color-grey">종류</th>
                                 <th class="height-45 background-transparent-b-10 color-grey">금액</th>
                                 <th class="height-45 background-transparent-b-10 color-grey">상태</th>
                              </tr>
                           </thead>
                           <tbody>
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
                     <div class="history-item-footer flex-inherit border-top padding-vertical-10 align-items-center background-transparent-b-5">
                        <div class="grow-2 padding-left-10">
                           <button type="button" class="color-grey padding-10 background-transparent-b-10">
                              <i class="fal fa-trash-alt"></i>
                              선택 삭제
                           </button>
                        </div>
                        <div class="padding-right-10">
                           <span class="color-grey">
                              누적 총 잔액
                              <strong class="color-red padding-left-5">12,500,000원</strong>
                           </span>
                        </div>
                     </div>
                     <div class="padding-vertical-10 flex-inherit border-top-white height-60 color-grey">
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
            <div class="height-40 align-items-center-inherit border-bottom">
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

            <div class="member-information height-40 align-items-center-inherit border-bottom">
               <div class="flex pi-title green grow-2">
                  <span class="color-white padding-left-15">안녕하세요. {user.member.nickname} 회원님</span>
               </div>
               <div class="flex">
                  <span class="color-yellow padding-right-15">Lv.{user.member.level}</span>
               </div>
            </div>
            <div class="money-information border-bottom flex-inherit">
               <div class="widthp-33 border-right padding-left-15 padding-vertical-15">
                  <div class="flex flex-column">
                     <span class="color-white">예치금</span>
                     <span class="color-green">{Number(user.member.cash).toLocaleString()}</span>
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
                  <button type="button" id="tab-1" class={context.state.interMenu === 'inter-tab-1' ? 'active' : ''} onClick={() => context.actions.setinterMenu('inter-tab-1')}>
                     환전신청
                  </button>
               </div>
               <div class="flex widthp-50">
                  <button type="button" id="tab-2" class={context.state.interMenu === 'inter-tab-2' ? 'active' : ''} onClick={() => context.actions.setinterMenu('inter-tab-2')}>
                     환전내역
                  </button>
               </div>
            </div>
            <div class={context.state.interMenu === 'inter-tab-1' ? 'interload-content flex-column active' : 'interload-content flex-column'}>
               <form class="flex-column" onSubmit={submit}>
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
                           <div class="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right border-bottom ">환전 방법</div>
                           <div class="widthp-70 flex background-transparent-b-10 color-grey height-40 border-bottom">
                              <div class="select">
                                 <select name="">
                                    <option value="cash">현금</option>
                                    <option value="paypal">페이팔</option>
                                    <option value="bitcoin">비트코인</option>
                                 </select>
                              </div>
                           </div>
                        </div>

                        <div class="interload-list align-items-center-inherit withdraw-amount-wrap">
                           <div class="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right border-bottom ">출금금액</div>
                           <div class="widthp-70 flex background-transparent-b-10 color-grey height-40 border-bottom">
                              <input type="text" name="amount" placeholder="0" value={withdrawal.form.amount.toLocaleString()} onChange={amountChange} />
                           </div>
                        </div>
                        <div class="interload-list interload-tab height-50 align-items-center-inherit">
                           <div class="flex withdraw-input-wrap widthp-100">
                              <button type="button" class="widthp-20 amount-tab" data-amount="5000" onClick={QuickInput}>
                                 5,000
                              </button>
                              <button type="button" class="widthp-20 amount-tab" data-amount="10000" onClick={QuickInput}>
                                 10,000
                              </button>
                              <button type="button" class="widthp-20 amount-tab" data-amount="50000" onClick={QuickInput}>
                                 50,000
                              </button>
                              <button type="button" class="widthp-20 amount-tab" data-amount="100000" onClick={QuickInput}>
                                 100,000
                              </button>
                              <button type="button" class="widthp-20 amount-tab" data-amount="500000" onClick={QuickInput}>
                                 500,000
                              </button>
                           </div>
                        </div>

                        <div class="interload-list align-items-center-inherit">
                           <div class="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right border-bottom ">은행명</div>
                           <div class="widthp-70 flex background-transparent-b-10 color-grey height-40 border-bottom">
                              <span class="color-white padding-left-10">은행명출력</span>
                           </div>
                        </div>

                        <div class="interload-list align-items-center-inherit">
                           <div class="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right border-bottom ">예금주</div>
                           <div class="widthp-70 flex background-transparent-b-10 color-grey height-40 border-bottom">
                              <span class="color-white padding-left-10">예금주출력</span>
                           </div>
                        </div>

                        <div class="interload-list align-items-center-inherit">
                           <div class="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right border-bottom ">계좌번호</div>
                           <div class="widthp-70 flex background-transparent-b-10 color-grey height-40 border-bottom">
                              <span class="color-white padding-left-10">계좌번호출력</span>
                           </div>
                        </div>

                        <div class="interload-list align-items-center-inherit">
                           <div class="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right border-bottom ">환전 비밀번호</div>
                           <div class="widthp-70 flex background-transparent-b-10 color-grey height-40 border-bottom">
                              <input type="password" name="password" placeholder="출금비밀번호를 입력하세요" required />
                           </div>
                        </div>
                     </div>

                     <div class="flex-column">
                        <div class="interload-list">
                           <button type="submit" class="widthp-100 background-green color-white height-40 justify-content-center">
                              환전신청
                           </button>
                        </div>
                     </div>
                  </div>
               </form>
            </div>

            <div class={context.state.interMenu === 'inter-tab-2' ? 'interload-content flex-column active' : 'interload-content flex-column'}>
               <div class="widthp-100 flex-column flex border-bottom padding-vertical-10 padding-right-15 align-items-right">
                  <div class="select height-40">
                     <select name="">
                        <option value="">전체</option>
                        <option value="">확인중</option>
                     </select>
                  </div>
               </div>

               {withdrawal.withdrawalActivities.length > 0 ? (
                  withdrawal.withdrawalActivities.map((value, index) => {
                     return (
                        <div class="flex flex-inherit flex-column list margin-bottom-1 background-transparent-b-10" key={index}>
                           <div class="padding-horizontal-15 justify-content-center-inherit padding-vertical-15">
                              <div class="widthp-25 text-align-center">
                                 <span class="color-grey">{moment(value.createdAt).format('MM / DD HH:mm')}</span>
                              </div>
                              <div class="widthp-25 text-align-center">
                                 <span class="color-grey text-align-center">
                                    {value.method == 'BITCOIN' ? '비트코인' : value.method == 'CASH' ? '현금' : value.method == 'PAYPAL' ? '페이팔' : '알 수 없음'}
                                 </span>
                              </div>
                              <div class="widthp-25 text-align-center">
                                 <span class="color-green">{value.amount.toLocaleString()}원</span>
                              </div>
                              {value.status == 'PENDING' ? (
                                 <div class="widthp-25 text-align-center">
                                    <span class="color-grey">대기</span>
                                 </div>
                              ) : value.status == 'ACCEPTED' ? (
                                 <div class="widthp-25 text-align-center">
                                    <span class="color-blue">완료</span>
                                 </div>
                              ) : value.status == 'REJECTED' ? (
                                 <div class="widthp-25 text-align-center">
                                    <span class="color-red">취소</span>
                                 </div>
                              ) : (
                                 ''
                              )}
                           </div>
                        </div>
                     )
                  })
               ) : (
                  <div class="widthp-100 flex justify-content-center color-grey height-50 align-items-center">전환내역이 없습니다.</div>
               )}
            </div>
         </div>
      </Fragment>
   )
}

export default connect(mapStateToProps, mapDispatchProps)(Withdrawal)
