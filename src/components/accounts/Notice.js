import React, { useEffect, useState, Fragment } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import moment from 'moment'
import Select from 'react-select'
import parse from 'html-react-parser'
import { mapStateToProps, mapDispatchProps } from '../../redux/store'
import noticeModel from '../../models/noticeModel'
import Logo from '../layouts/Logo'

const Notice = (props) => {
   let isSubscribed = true
   const { user } = props
   const model = new noticeModel()
   const [notice, setNotice] = useState({
      count: null,
      page: 1,
      lastPage: null,
      perPage: null,
      data: [],
      post: {
         id: 0,
      },
   })

   useEffect(() => {
      isSubscribed = true

      if (user.isAuth) {
         fetch()
      }

      return () => {
         isSubscribed = false
      }
   }, [notice.page, notice.post.id])

   const fetch = async () => {
      const {
         data: { data: data, page, lastPage, perPage, count },
      } = await model.index({
         page: notice.page,
      })

      if (isSubscribed) {
         setNotice({
            ...notice,
            count: count,
            data: data,
            page: page,
            perPage: perPage,
            lastPage: lastPage,
         })
      }
   }

   const view = async (id) => {
      const data = notice.data.find((data) => data.id == id)
      console.log(data)
      setNotice({
         ...notice,
         post: data,
      })
   }

   const prev = () => {
      setNotice({
         ...notice,
         page: notice.page - 1,
      })
   }

   const next = () => {
      setNotice({
         ...notice,
         page: notice.page + 1,
      })
   }

   const setPage = (e) => {
      setNotice({
         ...notice,
         page: e.value,
      })
   }

   return (
      <Fragment>
         <div class="content account-continer flex flex-inherit grow-2 flex-column">
            <div class="message-wrap account message-content-desktop flex-inherit padding-10">
               <div class="message-left-content account-height widthp-50 flex-inherit flex-column padding-right-5 border-right scrollable-auto">
                  <div class="flex-inherit flex-column">
                     <div class="red-shadow message-header-title height-45 background-transparent-b-10 align-items-center padding-left-15 border-bottom-rb">
                        <span class="color-white">공지사항</span>
                     </div>
                  </div>
                  <div class="widthp-100 message-content flex-inherit flex-column">
                     <div class="message-item">
                        <table>
                           <thead class="background-transparent-b-10">
                              <tr class="thead">
                                 <th class="height-45 color-grey border-top">구분</th>
                                 <th class="height-45 color-grey border-top">내용</th>
                                 <th class="height-45 color-grey border-top">작성시간</th>
                              </tr>
                           </thead>
                           <tbody class="background-transparent-b-5">
                              <tr class="rows">
                                 <td class="height-45 border-top">
                                    <span class="color-grey">점검</span>
                                 </td>
                                 <td class="height-45 border-top">
                                    <Link to="#" className="color-white">
                                       도메인 주소 변경안내
                                    </Link>
                                 </td>
                                 <td class="height-45 border-top">
                                    <span class="color-grey">20/11/12 22:11:29</span>
                                 </td>
                              </tr>

                              <tr class="rows">
                                 <td class="height-45 border-top">
                                    <span class="color-grey">점검</span>
                                 </td>
                                 <td class="height-45 border-top">
                                    <Link to="#" className="color-white">
                                       계좌 긴급 변경안내
                                    </Link>
                                 </td>
                                 <td class="height-45 border-top">
                                    <span class="color-grey">20/11/12 22:11:29</span>
                                 </td>
                              </tr>
                           </tbody>
                        </table>
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
               <div class="message-right-content account-height widthp-50 flex-inherit flex-column padding-left-5 border-left scrollable-auto">
                  <div class="flex-inherit flex-column">
                     <div class="message-read-header-title red-shadow height-45 background-transparent-b-10 align-items-center-inherit padding-left-15 border-bottom-rb flex-inherit">
                        <span class="color-white grow-2">
                           <i class="fal fa-paperclip color-grey"></i>
                           점검
                        </span>
                        <div>
                           <span class="color-grey padding-right-10">
                              <i class="fal fa-calendar-week"></i>
                              20/10/28 07:00:30
                           </span>
                           <span class="color-grey padding-right-15">
                              <i class="fal fa-user"></i>
                              운영팀
                           </span>
                        </div>
                     </div>
                  </div>
                  <div class="flex-inherit flex-column">
                     <div class="message-read-header-title  background-transparent-b-5 align-items-center-inherit padding-left-15 flex-column border-top">
                        <p class="color-grey">* BET365KOR *</p>
                        <p class="color-grey">안녕하세요. "BET365KOR" 운영팀입니다.</p>
                        <p class="color-grey">전용계좌가 변경되었으니 입금시 항시 계좌 확인 후 입금해주시기 바랍니다.</p>
                        <p class="color-grey">항상 저희 BET365KOR 를 이용해주셔서 대단히 고맙습니다.</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div class="widthp-100 interload-panel-mobile flex-column flex-inherit flex">
            <div class="height-40 align-items-center-inherit border-bottom-rb">
               <div class="flex pi-title grow-2">
                  <span class="color-white padding-left-15">NOTICE</span>
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
                  <span class="color-white padding-left-15">안녕하세요. {user.member.nickname} 회원님</span>
               </div>
               <div class="flex">
                  <span class="color-yellow padding-right-15">Lv.{user.member.level}</span>
               </div>
            </div>

            <div class="money-information border-bottom-rb flex-inherit">
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
            <div class="flex-column interload-account">
               <div class="widthp-100 notice-continer-mobile flex-column">
                  {notice.data.length > 0 ? (
                     notice.data.map((value, index) => {
                        return (
                           <Fragment key={index}>
                              <div class="list-row flex pi-title updowntoggle notice notice-list padding-vertical-10 padding-horizontal-15 flex-inherit margin-bottom-1 background-transparent-b-20">
                                 <button type="button" class="flex-inherit">
                                    <div class="flex widthp-100 flex-column ">
                                       <div class="flex">
                                          <span class="color-grey">{value.title}</span>
                                       </div>
                                       <div class="flex">
                                          <span class="color-grey grow-2">{moment(value.createdAt).format('MM / DD HH:mm')}</span>
                                       </div>
                                    </div>
                                 </button>
                              </div>
                           </Fragment>
                        )
                     })
                  ) : (
                     <div class="list-row flex pi-title padding-vertical-10 padding-horizontal-15 color-white">등록된 게시물이 없습니다.</div>
                  )}
               </div>
            </div>
         </div>
      </Fragment>
   )
}

export default connect(mapStateToProps, mapDispatchProps)(Notice)
