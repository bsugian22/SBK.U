import React, { useState, useEffect, Fragment } from "react";
import MessagePost from './MessagePost';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchProps } from "../../helpers/store";
import messagesModel from "../../models/messagesModel";
import Moment from "moment";
import Logo from "../layouts/Logo";


const Messages = (props) => {

   let isSubscribed = true;
   const model = new messagesModel();
   const [checkAll, setCheckAll] = useState([]);
   let [level, setLevel] = useState("ID");
   let [toDeleteMessageList, setToDeleteMessageList] = useState({
      messages: [],
   });


   const [messages, getMessages] = useState({
      data: [],
      total: null,
      count: null,
      perPage: null,
      page: null,
      lastPage: null,
      post: { id: 0 },
   });

   const [message, showMessage] = useState({
      id: null,
      title: null,
      content: null,
      readAt: null,
      createdAt: null
   });


   var pageNumber = [];

   useEffect(() => {
      isSubscribed = true;

      fetch();

      return () => {
         isSubscribed = false;
      };
   }, [messages.page, messages.post]);

   //fetch messages
   const fetch = async () => {
      const {
         data: { data: data, total, count, perPage, page, lastPage },
      } = await model.index({
         page: messages.page
      });

      if (isSubscribed) {
         getMessages({
            ...messages,
            data: data.map((d) => {
               if (checkAll == true) {
                  return {
                     isChecked: true,
                     ...d,
                  };
               } else {
                  return {
                     isChecked: false,
                     ...d,
                  };
               }
            }),
            total: total,
            count: count,
            perPage: perPage,
            page: page,
            lastPage: lastPage
         });
      }
      level = "ID";
      setLevel(level);

   };

   const deleteMessage = async () => {

      await model.delete(toDeleteMessageList.messages).then((response) => {
         console.log(response);
         fetch();
      });

   };

   const checkToDelete = async (e) => {
      var checked = e.target.checked;
      var id = e.target.value;
      if (checked) {
         toDeleteMessageList.messages.push({ "id": e.target.value })
      } else {
         toDeleteMessageList.messages.map((value, index) => {
            if (value.id == id) {
               toDeleteMessageList.messages.splice(index, 1)
            }
         })
      }
   };

   const getMessage = async (messageId) => {
      const {
         data: { data: { id, category, title, content, readAt, createdAt } },
      } = await model.showMessage(messageId);
      if (isSubscribed) {
         showMessage({
            ...message,
            id: id,
            category: category,
            title: title,
            content: content,
            readAt: readAt,
            createdAt: createdAt
         });
      }
      level = "ID";
      setLevel(level);
   };


   for (let index = 1; index <= messages.perPage; index++) {
      pageNumber.push(index);
   }

   const view = async (id) => {
      const data = messages.data.find((data) => data.id == id)
      getMessages({
         ...messages,
         post: data
      })
   }

   const prev = () => {
      setNotice({
         ...messages,
         page: messages.page - 1,
      })
   }

   const next = () => {
      setNotice({
         ...messages,
         page: messages.page + 1,
      })
   }

   const setPage = (e) => {
      getMessages({
         ...messages,
         page: e.value,
      })
   }

   return (
      <Fragment>
         <div class="content account-continer flex flex-inherit grow-2 flex-column">
            <div class="content-header message-header-desktop shrink-0 border-bottom height-50 align-items-center padding-horizontal-10 background-transparent-b-25 border-left">
               <span class="color-grey">
                  <i class="fad fa-envelope"></i>MESSAGE
               </span>
            </div>
            <div class="message-wrap message-content-desktop account border-top flex-inherit flex-row">
               <div class="message-left flex-inherit flex-column account-height widthp-40 border-right">
                  <div class="message flex-column flex-inherit grow-2 padding-10 scrollable-auto">

                     {messages.data.length > 0 ? (
                        messages.data.map((value, index) => {
                           return (
                              <button type="button" class="flex-inherit" onClick={() => view(value.id)} key={index}>
                                 <div class={`flex-column flex-inherit message-list min-height-100 widthp-100 padding-10 background-transparent-b-10 color-grey border-bottom-white${messages.post.id == value.id ? ' active' : ''}`}>
                                    <div class="heightp-100 flex-inherit flex-column">
                                       <div class="flex-inherit heightp-50">
                                          <div class="checkbox width-30 heightp-100 justify-content-center align-items-center">
                                             <input type="checkbox" id={`post-id[` + value.id + `]`} value={value.id} onChange={checkToDelete} />
                                          </div>
                                          <div class="padding-10 background-transparent-b-10">
                                             <span class="color-grey">{value.title}</span>
                                          </div>
                                          <div class="padding-10">
                                             {message.read_at != null ? (<span class="color-green">읽음</span>) : (<span class="color-red">읽지않음</span>)}
                                          </div>
                                          <div class="padding-10 grow-2 justify-content-end">
                                             <span class="color-grey">{Moment(value.created_at).format('MM / DD HH:mm')}</span>
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
                     ) :
                        (
                           <div class="noArticle color-grey padding-10 background-transparent-b-10 justify-content-center">
                              <span>게시글이 없습니다.</span>
                           </div>
                        )
                     }
                  </div>
                  <div class="flex-inherit message-page-bottom border-top-white height-60 background-transparent-b-15 padding-10 color-grey">
                     <div class="pagination flex-inherit widthp-100 heightp-100">
                        <div class="select">
                           <select name="slct" id="slct" onChange={setPage}>
                              {pageNumber.length > 0 ? (
                                 pageNumber.map((data, index) => {
                                    return (
                                       <option key={index} value={data}>{data}</option>
                                    )
                                 })
                              ) :
                                 (<option value="1">1</option>)}
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
                  <div class="flex-inherit message-bottom border-top-white height-60 background-transparent-b-15 padding-vertical-5 color-grey">
                     <div class="padding-10 delete-message">
                        <button type="button" class="btn-0 padding-horizontal-15 background-red color-white" onClick={deleteMessage}>
                           <i class="far fa-eraser margin-right-5"></i>선택메세지 삭제
                        </button>
                     </div>
                     <div class="grow-2"></div>
                     <div class="padding-10 read-message">
                        <button type="button" class="btn-0 padding-horizontal-15 background-green color-white">
                           <i class="fas fa-check margin-right-5"></i>전체읽음처리
                        </button>
                     </div>
                  </div>
               </div>
               <div class="message-read border-left flex-inherit flex-column account-height widthp-60 padding-10 scrollable-auto">
                  {messages.post.id ? (
                     <div class="message-read-header flex-inherit flex-column align-items-center-inherit">
                        <div class="title flex-inherit grow-2 background-transparent-b-20 widthp-100 padding-15">
                           <span class="flex color-grey align-items-center text-ellipsis">
                              <span class="margin-left-5 color-white text-ellipsis">{messages.post.title}</span>
                           </span>
                        </div>
                        <div class="date flex-inherit grow-2 margin-bottom-10 background-transparent-b-10 widthp-100 padding-15">
                           <span class="color-grey margin-right-15 align-items-center"><i class="fal fa-calendar-alt margin-right-5"></i>{Moment(messages.post.createdAt).format('MM / DD HH:mm')}</span>
                           <span class="color-grey align-items-center"><i class="far fa-user-alt margin-right-5"></i>관리자</span>
                        </div>
                        <div class="flex-column message-read-content min-height-150 padding-10 background-transparent-b-10 color-grey">
                           <div class="text">
                              <p>{messages.post.content}</p>
                           </div>
                        </div>
                     </div>
                  ) : (
                        <MessagePost />
                     )}


               </div>
            </div>
         </div>
         <div class="widthp-100 interload-panel-mobile flex-column flex-inherit flex">
            <div class="height-40 align-items-center-inherit border-bottom">
               <div class="flex pi-title grow-2">
                  <span class="color-white padding-left-15">Message</span>
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
                  {message.data != null ? (
                     message.data.map((value, index) => {
                        return (
                           <Fragment key={index}>
                              <div class="list-row flex pi-title updowntoggle notice notice-list padding-vertical-10 padding-horizontal-15 flex-inherit margin-bottom-1 background-transparent-b-20">
                                 <button type="button" class="flex-inherit">
                                    <div class="flex widthp-100 flex-column ">
                                       <div class="flex">
                                          <span class="color-grey">{value.title}</span>
                                       </div>
                                       <div class="flex">
                                          <span class="color-grey grow-2">{Moment(value.createdAt).format('MM / DD HH:mm')}</span>
                                       </div>
                                    </div>
                                 </button>
                              </div>
                           </Fragment>
                        )
                     })
                  ) : (
                        <div class="list-row detail-view flex padding-vertical-10 padding-horizontal-15 flex-column flex-inherit margin-bottom-1 background-transparent-b-20 color-white display-none">
                           쪽지 내용이 출력됩니다.
                        </div>
                     )}
               </div>
            </div>
         </div>
      </Fragment>
   );



};

export default connect(mapStateToProps, mapDispatchProps)(Messages);