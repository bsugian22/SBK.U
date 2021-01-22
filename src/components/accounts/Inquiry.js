import React, { Fragment } from 'react'
import InquiryPost from './InquiryPost'
import InquiryWrite from './InquiryWrite'
import { Link } from 'react-router-dom'
export default function Inquiry() {
   return (
      <Fragment>
         <div class="content account-continer flex flex-inherit grow-2 flex-column">
            <div class="content-header inquiry-header-desktop shrink-0 border-bottom height-50 align-items-center padding-horizontal-10 background-transparent-b-25 border-left">
               <span class="color-grey">
                  <i class="fad fa-comments-alt"></i>INQUIRY
               </span>
            </div>
            <div class="inquiry-wrap inquiry-content-desktop account border-top flex-inherit flex-row">
               <div class="inquiry-left flex-inherit flex-column account-height widthp-40 border-right scrollable-auto">
                  <div class="inquiry flex-column flex-inherit scrollable-auto grow-2 padding-10">
                     <Link className="flex" to="0">
                        <div class="flex-column flex-inherit inquiry-list min-height-100 widthp-100 padding-10 background-transparent-b-10 color-grey border-bottom-white">
                           <div class="heightp-100 flex-inherit flex-column">
                              <div class="flex-inherit heightp-50">
                                 <div class="checkbox width-30 heightp-100 justify-content-center align-items-center">
                                    <input type="checkbox" id="post-id[]" value="0" />
                                 </div>
                                 <div class="padding-10">
                                    <span class="color-green">답변완료</span>
                                    <span class="color-red">답변대기</span>
                                 </div>
                                 <div class="padding-10 grow-2 justify-content-end">
                                    <span class="color-grey">00</span>
                                 </div>
                              </div>
                              <div class="flex-inherit heightp-50 align-items-center">
                                 <div class="padding-10 text-ellipsis">
                                    <span class="color-white text-ellipsis">0</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </Link>
                     <div class="noArticle color-grey padding-10 background-transparent-b-10 justify-content-center">
                        <span>게시글이 없습니다.</span>
                     </div>
                  </div>
                  <div class="flex-inherit inquiry-page-bottom border-top-white height-60 background-transparent-b-15 padding-10 color-grey">
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
                           <Link to="/sports?offset=-100">
                              <button class="page-left width-40 heightp-100 background-transparent-b-20 margin-right-5">
                                 <i class="fas fa-chevron-left margin-0 color-grey"></i>
                              </button>
                           </Link>
                           <Link to="/sports?offset=100">
                              <button class="page-right width-40 heightp-100 background-transparent-b-20">
                                 <i class="fas fa-chevron-right margin-0 color-grey"></i>
                              </button>
                           </Link>
                        </div>
                     </div>
                  </div>
                  <div class="flex-inherit inquiry-bottom border-top-white height-60 background-transparent-b-15 padding-vertical-5 color-grey">
                     <div class="padding-10 delete-inquiry">
                        <button type="button" class="btn-0 padding-horizontal-15 background-red color-white">
                           <i class="far fa-eraser margin-right-5"></i>선택 글 삭제
                        </button>
                     </div>
                     <div class="grow-2"></div>
                     <div class="padding-10 write-inquiry">
                        <button type="button" class="btn-0 padding-horizontal-15 background-green color-white" data-url="<?php echo element('write_url', element('list', $view)); ?>">
                           <i class="far fa-pencil margin-right-5"></i>문의하기
                        </button>
                     </div>
                  </div>
               </div>
               <div class="inquiry-read border-left flex-inherit flex-column account-height widthp-60 padding-10 scrollable-auto"></div>
            </div>
         </div>
         <div class="widthp-100 interload-panel-mobile flex-column flex-inherit flex">
            <div class="height-40 align-items-center-inherit border-bottom">
               <div class="flex pi-title grow-2">
                  <span class="color-white padding-left-15">1:1고객문의</span>
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
                  <span class="color-white padding-left-15">안녕하세요. - 회원님</span>
               </div>
               <div class="flex">
                  <span class="color-yellow padding-right-15">Lv.-</span>
               </div>
            </div>

            <div class="money-information border-bottom flex-inherit">
               <div class="widthp-33 border-right padding-left-15 padding-vertical-15">
                  <div class="flex flex-column">
                     <span class="color-white">예치금</span>
                     <span class="color-green">-</span>
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
               <div class="widthp-100 flex-column">
                  <div class="list-row flex pi-title updowntoggle notice notice-list padding-vertical-10 padding-horizontal-15 flex-inherit margin-bottom-1 background-transparent-b-20">
                     <Link className="flex-inherit" to="#">
                        <div class="flex widthp-100 flex-column ">
                           <div class="flex">
                              <span class="color-grey">제목이 출력됩니다.</span>
                           </div>
                           <div class="flex">
                              <span class="color-grey grow-2">날짜출력</span>
                              {/*
                                답변대기 : color-red
                                답변완료 : color-green
                                */}

                              <span class="color-red">답변대기</span>
                           </div>
                        </div>
                     </Link>
                  </div>
                  <div class="list-row detail-view flex padding-vertical-10 color-white padding-horizontal-15 flex-column flex-inherit margin-bottom-1 background-transparent-b-20 display-none">
                     내용이 출력됩니다.
                  </div>

                  {/*
        등록된 게시물이 없는경우 아래 출력.
		<div class="list-row flex pi-title padding-vertical-10 padding-horizontal-15 color-white">
			등록된 게시물이 없습니다.
		</div>
        */}
               </div>
            </div>
         </div>
      </Fragment>
   )
}
