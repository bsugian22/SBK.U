import React, { Fragment, useEffect, useState, useContext } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import Select from 'react-select'
import { mapStateToProps, mapDispatchProps } from '../../helpers/store'
import sweetalert from '../../plugins/sweetalert'
import exchangeModel from '../../models/exchangeModel'
import echo from '../../plugins/echo'
import { method } from 'lodash'
import { Link, NavLink } from 'react-router-dom'
import MenuContext from '../../contexts/Menu.context'

const Exchange = (props) => {
   let isSubscribed = true
   const context = useContext(MenuContext)
   const { user } = props
   const swal = new sweetalert()
   const model = new exchangeModel()
   const [exchange, setExchange] = useState({
      amount: 0,
      page: 1,
      lastPage: null,
      createdFrom: null,
      createdUntil: null,
      exchangeActivities: [],
      from: 'cash',
      to: 'casino_cash',
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
   }, [exchange.page])

   const pusher = () => {
      if (user.isAuth) {
         echo.private(`users.${user.member.id}`).listen('ExchangeUpdated', (e) => {
            fetch()
         })
      }
   }

   const fetch = async () => {
      const {
         data: { data: exchangeActivities, page, lastPage, amount },
      } = await model.index({
         page: exchange.page,
         createdFrom: exchange.createdFrom,
         createdUntil: exchange.createdUntil,
      })

      if (isSubscribed) {
         setExchange({
            ...exchange,
            exchangeActivities: exchangeActivities,
            page: page,
            lastPage: lastPage,
            amount: amount,
         })
      }
   }

   const method = (e) => {
      const _from = e.currentTarget.getAttribute('data-from')
      const _to = e.currentTarget.getAttribute('data-to')

      setExchange({
         ...exchange,
         from: _from,
         to: _to,
      })
   }

   const amountChange = (e) => {
      setExchange({
         ...exchange,
         form: {
            ...exchange.form,
            amount: Number(e.currentTarget.value.replaceAll(',', '')),
         },
      })
   }

   const QuickInput = (e) => {
      const amount = e.currentTarget.getAttribute('data-amount')

      setExchange({
         ...exchange,
         form: {
            ...exchange.form,
            amount: Number(amount) + exchange.form.amount,
         },
      })
   }

   const submit = async (e) => {
      e.preventDefault()
      swal.confirm('전환신청을 하시겠습니까?', async (r) => {
         if (r.value) {
            const f = new FormData(e.target)
            try {
               const success = await model.create({
                  agreed: true,
                  from: exchange.from,
                  to: exchange.to,
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
      const { exchangeActivities } = exchange

      exchangeActivities.filter((exchangeActivities) => {
         if (exchangeActivities.id == id) {
            exchangeActivities.isSelected = e.currentTarget.checked
         }
      })

      setExchange({
         ...exchange,
         exchangeActivities: exchangeActivities,
      })
   }

   const destroy = async () => {
      swal.confirm('정말로 선택된 전환내역을 삭제하시겠습니까?', async (r) => {
         if (r.value) {
            try {
               const filtered = exchange.exchangeActivities.filter((exchangeActivities) => exchangeActivities.isSelected)
               if (filtered.length) {
                  const success = await model.destroy({
                     exchangeActivities: filtered,
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
      setExchange({
         ...exchange,
         page: exchange.page - 1,
      })
   }

   const next = () => {
      setExchange({
         ...exchange,
         page: exchange.page + 1,
      })
   }

   const setPage = (e) => {
      setExchange({
         ...exchange,
         page: e.value,
      })
   }

   return (
      <Fragment>
         <div class="content account-continer flex flex-inherit grow-2 flex-column">
            <div class="exchange-header-desktop content-header shrink-0 border-bottom height-50 align-items-center padding-horizontal-10 background-transparent-b-25 border-left">
               <span class="color-grey">
                  <i class="fad fa-sync-alt color-grey"></i>Exchange
               </span>
            </div>
            <div class="exchange-content-desktop account border-top flex-inherit flex-row">
               <div class="withdraw-left flex-inherit flex-column account-height widthp-50 padding-10 scrollable-auto border-right">
                  <form class="flex-column" onSubmit={submit}>
                     <div class="notice flex-column flex-inherit">
                        <div class="notice-header height-40 padding-10 align-items-center background-transparent-b-30">
                           <span class="color-white">
                              <i class="far fa-exclamation-triangle color-yellow"></i>전환신청서 작성 전 꼭 읽어보세요
                           </span>
                        </div>
                        <div class="flex-column notice-contents min-height-150 padding-10 background-transparent-b-15 color-grey">
                           <div class="text">
                              <p>출금 시 출금자명이 다를 시 출금처리가 되지않습니다</p>
                              <p>출금금액과 출금금액이 다를 시 출금처리 되지않습니다</p>
                              <p>출금신청 시 보유머니가 차감됩니다</p>
                              <p>출금 최소 금액은 1만원 이상 1천원 단위로 가능합니다</p>
                              <br />
                              <p>00:00 ~ 00:30은 은행점검으로 인해 출금이 보류됩니다</p>
                           </div>
                        </div>
                     </div>
                     <div class="flex-column flex-inherit form margin-top-10">
                        <div class="form-header height-40 padding-10 align-items-center background-transparent-b-30">
                           <span class="color-grey">
                              <i class="fal fa-pencil"></i>전환신청서
                           </span>
                        </div>
                        <div class="form-data flex-inherit background-transparent-b-15 padding-10 flex-column">
                           <div class="guide-text margin-bottom-10">
                              <span class="color-grey">1. 전환 방법 선택</span>
                           </div>
                           <div class="payment height-40 justify-content-center-inherit align-items-center-inherit">
                              <button
                                 type="button"
                                 class={`flex widthp-50 background-transparent-b-10${exchange.from == 'cash' && exchange.to == 'casino_cash' ? ' active' : ''}`}
                                 data-from="cash"
                                 data-to="casino_cash"
                                 onClick={method}
                              >
                                 <span class="color-grey">
                                    보유금액<i class="far fa-arrow-right color-grey margin-horizontal-20"></i>CASINO
                                 </span>
                              </button>
                              <button
                                 type="button"
                                 class={`flex widthp-50 margin-left-5 background-transparent-b-20${exchange.from == 'casino_cash' && exchange.to == 'cash' ? ' active' : ''}`}
                                 data-from="casino_cash"
                                 data-to="cash"
                                 onClick={method}
                              >
                                 <span class="color-grey">
                                    CASINO<i class="far fa-arrow-right color-grey margin-horizontal-20"></i>보유금액
                                 </span>
                              </button>
                           </div>
                           <div class="guide-text margin-vertical-10">
                              <span class="color-grey">2. 보유금액 및 CASINO 확인</span>
                           </div>
                           <div class="flex-column background-transparent-b-10">
                              <div class="height-40 justify-content-center-inherit align-items-center-inherit widthp-100 flex">
                                 <div class="flex widthp-50 background-transparent-b-10">
                                    <span class="color-white">보유금액</span>
                                 </div>
                                 <div class="flex widthp-50 background-transparent-b-10">
                                    <span class="color-white">CASINO</span>
                                 </div>
                              </div>
                              <div class="height-40 justify-content-center-inherit align-items-center-inherit widthp-100 flex">
                                 <div class="flex widthp-50">
                                    <span class="color-green">{user.member.cash.toLocaleString()}원</span>
                                 </div>
                                 <div class="flex widthp-50">
                                    <span class="color-green">{user.member.casino_cash.toLocaleString()}원</span>
                                 </div>
                              </div>
                           </div>
                           <div class="guide-text margin-vertical-10">
                              <span class="color-grey">3. 전환금액입력</span>
                           </div>
                           <div class="flex-column">
                              <div class="height-40 justify-content-center-inherit align-items-center-inherit widthp-100 flex margin-bottom-5">
                                 <div class="flex widthp-100 background-transparent-b-10 heightp-100 justify-content-center-inherit align-items-center-inherit">
                                    <div class="flex widthp-40 heightp-100 background-transparent-b-10">
                                       <span class="color-white">전환금액</span>
                                    </div>
                                    <div class="flex widthp-60 heightp-100">
                                       <input type="text" class="input-form widthp-200" name="amount" placeholder="0" value={exchange.form.amount.toLocaleString()} onChange={amountChange} required />
                                    </div>
                                 </div>
                              </div>
                              <div class="money-btn height-40 justify-content-center-inherit align-items-center-inherit widthp-100 flex">
                                 <div class="flex widthp-100 background-transparent-b-10 heightp-100 justify-content-center-inherit align-items-center-inherit">
                                    <div class="flex widthp-20 heightp-100 background-transparent-b-10">
                                       <span class="color-white">빠른입력</span>
                                    </div>
                                    <div class="flex widthp-80 heightp-100 padding-5">
                                       <button
                                          type="button"
                                          class="flex justify-content-center align-items-center background-transparent-b-10 widthp-20 margin-right-2 heightp-100 color-grey"
                                          data-amount="30000"
                                          onClick={QuickInput}
                                       >
                                          30,000
                                       </button>
                                       <button
                                          type="button"
                                          class="flex justify-content-center align-items-center background-transparent-b-10 widthp-20 margin-right-2 heightp-100 color-grey"
                                          data-amount="50000"
                                          onClick={QuickInput}
                                       >
                                          50,000
                                       </button>
                                       <button
                                          type="button"
                                          class="flex justify-content-center align-items-center background-transparent-b-10 widthp-20 margin-right-2 heightp-100 color-grey"
                                          data-amount="100000"
                                          onClick={QuickInput}
                                       >
                                          100,000
                                       </button>
                                       <button
                                          type="button"
                                          class="flex justify-content-center align-items-center background-transparent-b-10 widthp-20 margin-right-2 heightp-100 color-grey"
                                          data-amount="500000"
                                          onClick={QuickInput}
                                       >
                                          500,000
                                       </button>
                                       <button
                                          type="button"
                                          class="flex justify-content-center align-items-center background-transparent-b-10 widthp-20 heightp-100 color-grey"
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
                        <div class="form-bottom height-40 padding-horizontal-10 align-items-center background-transparent-b-30">
                           <div class="flex widthp-100 heightp-100 padding-vertical-5 justify-content-end">
                              <button type="submit" class="btn-0 heightp-100 width-120 background-green">
                                 <span class="color-white">
                                    <i class="fas fa-check"></i>전환신청
                                 </span>
                              </button>
                           </div>
                        </div>
                     </div>
                  </form>
               </div>
               <div class="exchange-right border-left flex-inherit flex-column account-height widthp-50 padding-10 overflow-auto">
                  <div class="list-header flex-inherit align-items-center padding-15 background-transparent-b-30">
                     <div class="date flex-inherit grow-2">
                        <span class="flex color-grey align-items-center">
                           <i class="fal fa-sticky-note color-yellow margin-top-2"></i>전환내역목록
                        </span>
                     </div>
                  </div>
                  <div class="list-wrap flex-inherit background-transparent-b-20 flex-column">
                     {exchange.exchangeActivities.length > 0 ? (
                        exchange.exchangeActivities.map((value, index) => {
                           return (
                              <div class="list flex-inherit padding-vertical-15 align-items-center border-top justify-content-center-inherit" key={index}>
                                 <div class="grow-2">
                                    <input type="checkbox" onClick={(e) => checkbox(e, value.id)} />
                                 </div>
                                 <div class="grow-2 color-grey">{moment(value.createdAt).format('MM / DD HH:mm')}</div>
                                 <div class="grow-2 color-grey">
                                    <i class="far fa-arrow-right color-grey margin-right-5 margin-top-2"></i>
                                    {value.to == 'cash' ? '보유금액' : value.to == 'casino_cash' ? 'CASINO' : '알 수 없음'}
                                 </div>
                                 <div class="grow-2 color-green">{value.amount.toLocaleString()}원</div>
                                 <div class="grow-2 color-blue">완료</div>
                              </div>
                           )
                        })
                     ) : (
                        <div class="flex justify-content-center color-grey height-50 align-items-center">전환내역이 없습니다.</div>
                     )}
                  </div>
                  <div class="list-bottom flex-inherit align-items-center padding-15 background-transparent-b-30">
                     <div class="delete flex-inherit grow-2">
                        <button type="button" class="btn-0 background-transparent color-white align-items-center" onClick={destroy}>
                           <i class="far fa-eraser color-red margin-top-2"></i>선택내역삭제
                        </button>
                     </div>
                  </div>
                  <div class="pagination flex-inherit widthp-100 height-40 justify-content-end margin-top-5">
                     <div class="flex selectBox">
                        <Select
                           className="select-container"
                           classNamePrefix="select-box"
                           value={{ label: exchange.page, value: exchange.page }}
                           onChange={setPage}
                           options={((rows, i, len) => {
                              while (++i <= len) {
                                 rows.push({ value: i, label: i })
                              }
                              return rows
                           })([], 0, exchange.lastPage)}
                        />
                     </div>
                     <div class="grow-2"></div>
                     <div class="flex page">
                        <button class="page-left btn-0 background-transparent-b-20 flex align-items-center justify-content-center margin-right-5" onClick={prev} disabled={1 >= exchange.page}>
                           <i class="fas fa-chevron-left margin-0 color-white"></i>
                        </button>
                        <button class="page-right btn-0 background-transparent-b-20 flex align-items-center justify-content-center" onClick={next} disabled={exchange.lastPage <= exchange.page}>
                           <i class="fas fa-chevron-right margin-0 color-white"></i>
                        </button>
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
                  <button type="button" class="active" id="tab-1" class={context.state.interMenu === 'inter-tab-1' ? 'active' : ''} onClick={() => context.actions.setinterMenu('inter-tab-1')}>
                     전환신청
                  </button>
               </div>
               <div class="flex widthp-50">
                  <button type="button" id="tab-2" class={context.state.interMenu === 'inter-tab-2' ? 'active' : ''} onClick={() => context.actions.setinterMenu('inter-tab-2')}>
                     전환내역
                  </button>
               </div>
            </div>

            <div class={context.state.interMenu === 'inter-tab-1' ? 'interload-content flex-column active' : 'interload-content flex-column'}>
               <form class="flex" onSubmit={submit}>
                  <div class="widthp-100 flex-column flex-inherit padding-horizontal-15">
                     <div class="flex-column flex-inherit">
                        <div class="interload-list padding-vertical-10">
                           <h1>전환 신청서</h1>
                        </div>
                        <div class="interload-list align-items-center-inherit">
                           <div class="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right border-bottom ">전환 방법</div>
                           <div class="widthp-70 flex background-transparent-b-10 color-grey height-40 border-bottom">
                              <div class="select">
                                 <select name="payment">
                                    <option value="cash">보유금액 -&gt; CASINO</option>
                                    <option value="paypal">CASINO -&gt; 보유금액</option>
                                 </select>
                              </div>
                           </div>
                        </div>

                        <div class="interload-list align-items-center-inherit">
                           <div class="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right border-bottom ">신청금액</div>
                           <div class="widthp-70 flex background-transparent-b-10 color-grey height-40 border-bottom">
                              <input type="text" name="amount" placeholder="0" value={exchange.form.amount.toLocaleString()} onChange={amountChange} required />
                           </div>
                        </div>
                        <div class="interload-list interload-tab height-50 align-items-center-inherit">
                           <div class="flex widthp-100">
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

               {exchange.exchangeActivities.length > 0 ? (
                  exchange.exchangeActivities.map((value, index) => {
                     return (
                        <div class="flex flex-inherit flex-column list margin-bottom-1 background-transparent-b-10" key={index}>
                           <div class="padding-horizontal-15 justify-content-center-inherit padding-vertical-15">
                              <div class="widthp-25 text-align-center">
                                 <span class="color-grey">{moment(value.createdAt).format('MM / DD HH:mm')}</span>
                              </div>
                              <div class="widthp-25 text-align-center">
                                 <span class="color-grey text-align-center">{value.to == 'cash' ? '보유금액' : value.to == 'casino_cash' ? 'CASINO' : '알 수 없음'}</span>
                              </div>
                              <div class="widthp-25 text-align-center">
                                 <span class="color-green">{value.amount.toLocaleString()}원</span>
                              </div>
                              <div class="widthp-25 text-align-center">
                                 <span class="color-blue">완료</span>
                              </div>
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

export default connect(mapStateToProps, mapDispatchProps)(Exchange)
