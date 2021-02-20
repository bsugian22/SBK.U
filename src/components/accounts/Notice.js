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
         id: 0
      }
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
         post: data
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
            <div class="content-header notice-header-desktop shrink-0 border-bottom height-50 align-items-center padding-horizontal-10 background-transparent-b-25 border-left">
               <span class="color-grey">
                  <i class="fad fa-megaphone"></i>NOTICE
               </span>
            </div>
            <div class="notice-wrap account notice-content-desktop border-top flex-inherit flex-row">
               <div class="notice-left flex-inherit flex-column account-height widthp-40 border-right ">
                  <div class="notice flex-column grow-2 flex-inherit padding-10 scrollable-auto">
                     {notice.data.length > 0 ? (
                        notice.data.map((value, index) => {
                           return (
                              <button type="button" class="flex-inherit" onClick={() => view(value.id)} key={index}>
                                 <div class={`flex-column flex-inherit widthp-100 notice-list min-height-100 padding-10 background-transparent-b-10 color-grey border-bottom-white${notice.post.id == value.id ? ' active' : ''}`}>
                                    <div class="heightp-100 flex-inherit flex-column">
                                       <div class="flex-inherit heightp-50">
                                          <div class="padding-10 background-transparent-b-10">
                                             <span class="color-grey">{value.category}</span>
                                          </div>
                                          <div class="padding-10 grow-2 justify-content-end">
                                             <span class="color-grey">{moment(value.createdAt).format('MM / DD HH:mm')}</span>
                                          </div>
                                       </div>
                                       <div class="flex-inherit heightp-50 align-items-center">
                                          <div class="padding-10 text-ellipsis">
                                             <span class="color-white text-ellipsis">{value.title}</span>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </button>
                           )
                        })
                     ) : (
                        <div class="noArticle color-grey padding-10 background-transparent-b-10 justify-content-center">
                           <span>게시글이 없습니다.</span>
                        </div>
                     )}
                  </div>
                  <div class="flex-inherit notice-page-bottom border-top-white height-60 background-transparent-b-15 padding-10 color-grey">
                     <div class="pagination flex-inherit widthp-100 justify-content-end margin-top-5">
                        <div class="flex selectBox">
                           <Select
                              className="select-container"
                              classNamePrefix="select-box"
                              value={{ label: notice.page, value: notice.page }}
                              onChange={setPage}
                              options={((rows, i, len) => {
                                 while (++i <= len) {
                                    rows.push({ value: i, label: i })
                                 }
                                 return rows
                              })([], 0, notice.lastPage)}
                           />
                        </div>
                        <div class="grow-2"></div>
                        <div class="flex page">
                           <button class="page-left btn-0 background-transparent-b-20 flex align-items-center justify-content-center margin-right-5" onClick={prev} disabled={1 >= notice.page}>
                              <i class="fas fa-chevron-left margin-0 color-white"></i>
                           </button>
                           <button class="page-right btn-0 background-transparent-b-20 flex align-items-center justify-content-center" onClick={next} disabled={notice.lastPage <= notice.page}>
                              <i class="fas fa-chevron-right margin-0 color-white"></i>
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="notice-read border-left flex-inherit flex-column account-height widthp-60 padding-10 scrollable-auto">
                  {notice.post.id ? (
                  <div class="message-read-header flex-inherit flex-column align-items-center-inherit">
                     <div class="title flex-inherit grow-2 background-transparent-b-20 widthp-100 padding-15">
                        <span class="flex color-grey align-items-center text-ellipsis">
                           <span class="margin-left-5 color-white text-ellipsis">{notice.post.title}</span>
                        </span>
                     </div>
                     <div class="date flex-inherit grow-2 margin-bottom-10 background-transparent-b-10 widthp-100 padding-15">
                        <span class="color-grey margin-right-15 align-items-center"><i class="fal fa-calendar-alt margin-right-5"></i>{moment(notice.post.createdAt).format('MM / DD HH:mm')}</span>
                        <span class="color-grey align-items-center"><i class="far fa-user-alt margin-right-5"></i>관리자</span>
                     </div>
                     <div class="flex-column message-read-content min-height-150 padding-10 background-transparent-b-10 color-grey">
                        <div class="text">  
                           {parse(notice.post.content)}
                        </div>  
                     </div>
                  </div>
                  ) : (
                     <div><Logo width="130" height="20" /></div>
                  )}
               </div>
            </div>
         </div>

         <div class="widthp-100 interload-panel-mobile flex-column flex-inherit flex">
            <div class="height-40 align-items-center-inherit border-bottom">
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
