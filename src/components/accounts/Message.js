import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import MessagePost from "./messagePost";
import { Link } from "react-router-dom";
import Moment from "moment";
import {
  checkMessageCertainItem,
  clearMessageObject,
  deleteMessages,
  deleteMessagesRequest,
  fetchMessage,
  fetchMessages,
  listOfToDeleteMessages,
  nextPageMessage,
  onClickPageMessage,
  prevPageMessage,
  readMessageReceived,
  selectAllMessage,
} from "../../redux/accounts/message/messageActions";

import sweetalert from "../../plugins/sweetalert";
export default function Message() {
  let message = useSelector((state) => state.message);
  let viewMessage = useSelector((state) => state.message.message);
  let isSubscribed = true;
  let page = useSelector((state) => state.message.messages.page);
  let lastPage = useSelector((state) => state.message.messages.lastPage);
  let per_page = useSelector((state) => state.message.messages.per_page);
  let list_pages = useSelector((state) => state.message.messages.list_pages);
  const swal = new sweetalert();
  let dispatch = useDispatch();
  useEffect(() => {
    isSubscribed = true;
    dispatch(fetchMessages({ page: page, per_page: per_page }));
    return () => {
      isSubscribed = false;
    };
  }, []);
  return (
    <Fragment>
      <div class="content account-continer flex flex-inherit grow-2 flex-column">
        <div class="message-wrap account message-content-desktop flex-inherit padding-10">
          <div class="message-left-content account-height widthp-50 flex-inherit flex-column padding-right-5 border-right scrollable-auto">
            <div class="flex-inherit flex-column">
              <div class="red-shadow message-header-title height-45 background-transparent-b-10 align-items-center padding-left-15 border-bottom-rb">
                <span class="color-white">개인 필독 메시지</span>
              </div>
            </div>
            <div class="widthp-100 message-content flex-inherit flex-column">
              <div class="message-item">
                <table>
                  <thead class="background-transparent-b-10">
                    <tr class="thead">
                      <th
                        class="height-45 color-grey border-top"
                        onClick={() => {
                          dispatch(selectAllMessage());
                        }}
                      >
                        선택
                      </th>
                      <th class="height-45 color-grey border-top">구분</th>
                      <th class="height-45 color-grey border-top">내용</th>
                      <th class="height-45 color-grey border-top">수신시간</th>
                    </tr>
                  </thead>
                  <tbody class="background-transparent-b-5">
                    {message.loading ? (
                      <tr>
                        <td colspan="15" class="td-3">
                          <span></span>
                        </td>
                      </tr>
                    ) : message?.messages?.data?.length == 0 ? (
                      <tr>
                        <td colspan="12" class="color-white">
                          데이터가 존재하지 않습니다.
                        </td>
                      </tr>
                    ) : (
                      message?.messages?.data?.map((item, index) => {
                        return (
                          <tr
                            class="rows"
                            key={index}
                            onClick={() => {
                              dispatch(fetchMessage(item.id));
                            }}
                          >
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
                                  dispatch(checkMessageCertainItem(payload));
                                }}
                              />
                            </td>
                            <td class="height-45 border-top">
                              <span class="color-grey">{item.title}</span>
                            </td>
                            <td class="height-45 border-top">
                              <Link to="#" className="color-white">
                                {item.content}
                              </Link>
                              <span class="color-white padding-5 margin-left-5 background-transparent-b-15">
                                {item.readAt == null ? "읽지않음" : "read"}
                              </span>
                            </td>
                            <td class="height-45 border-top">
                              <span class="color-grey">
                                {Moment(item.createdAt).format(
                                  "YY-MM-DD HH:mm "
                                )}{" "}
                              </span>
                            </td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>
              <div class="message-item-footer flex-inherit border-top border-bottom-rb padding-vertical-10 align-items-center background-transparent-b-10">
                <div class="grow-2 padding-left-10">
                  <button
                    type="button"
                    class="color-grey padding-10 background-transparent-b-10"
                    onClick={() => {
                      let newList = [];
                      message.messages.data.map((o) => {
                        if (o.isChecked == true) {
                          newList.push(o);
                        }
                      });
                      if (newList.length == 0) {
                        swal.warning("Please select a message to delete.");
                      } else {
                        dispatch(listOfToDeleteMessages());
                        dispatch(
                          deleteMessages(message.newMessageToDeleteList)
                        );
                      }
                    }}
                  >
                    <i class="fal fa-trash-alt"></i>
                    선택 삭제 DELETE
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
                      value={page == null || page == "" ? 1 : page}
                      onChange={(e) => {
                        let val = e.target.value;
                        if (val.toString() == page.toString()) {
                          swal.warning(" 페이지에 반응");
                        } else {
                          dispatch(
                            onClickPageMessage({
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
                        onClick={() => {
                          let prevData = {
                            page: page,
                            list_pages: list_pages,
                            per_page: per_page,
                          };
                          if (page == 1) {
                            swal.warning(" 페이지에 반응");
                          } else {
                            dispatch(prevPageMessage(prevData));
                          }
                        }}
                      >
                        <i class="fas fa-chevron-left margin-0 color-grey"></i>
                      </button>
                    </Link>
                    <Link to="#">
                      <button
                        class="page-right width-40 heightp-100 background-transparent-b-20"
                        onClick={() => {
                          let nextData = {
                            page: page,
                            list_pages: list_pages,
                            per_page: per_page,
                          };
                          if (page == lastPage) {
                            swal.warning(" 페이지에 반응");
                          } else {
                            dispatch(nextPageMessage(nextData));
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
          <div class="message-right-content account-height widthp-50 flex-inherit flex-column padding-left-5 border-left scrollable-auto">
            <div class="flex-inherit flex-column">
              <div class="message-read-header-title red-shadow height-45 background-transparent-b-10 align-items-center-inherit padding-left-15 border-bottom-rb flex-inherit">
                <span class="color-white grow-2">
                  <i class="fal fa-paperclip color-grey"></i>
                  전용계좌
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
              <div class="message-read-header-title  background-transparent-b-5 align-items-center-inherit padding-left-15 border-bottom-rb flex-column border-top">
                <p class="color-grey">
                  {viewMessage.title == null || viewMessage.title == ""
                    ? " BET365KOR"
                    : viewMessage.title}
                </p>
                <p class="color-grey">
                  {viewMessage.content == null || viewMessage.content == ""
                    ? "안녕하세요. 'BET365KOR' 운영팀입니다."
                    : viewMessage.content}
                </p>
              </div>
            </div>
            <div class="flex-inherit flex-column">
              <div class="message-read-question height-50 background-transparent-b-10 align-items-center justify-content-end padding-right-15 border-top">
                <Link to="#">
                  <i class="fal fa-pencil-alt color-green"></i>
                  <span class="color-white">이 메시지 문의하기</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="widthp-100 interload-panel-mobile flex-column flex-inherit flex">
        <div class="height-40 align-items-center-inherit border-bottom-rb">
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

        <div class="member-information height-40 align-items-center-inherit border-bottom-rb">
          <div class="flex pi-title green grow-2">
            <span class="color-white padding-left-15">
              안녕하세요. - 회원님
            </span>
          </div>
          <div class="flex">
            <span class="color-yellow padding-right-15">Lv.-</span>
          </div>
        </div>

        <div class="money-information border-bottom-rb flex-inherit">
          <div class="widthp-33 border-right-rb padding-left-15 padding-vertical-15">
            <div class="flex flex-column">
              <span class="color-white">예치금</span>
              <span class="color-green">-</span>
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
        <div class="flex-column interload-account">
          <div class="widthp-100 flex-column">
            <div class="list-row flex pi-title updowntoggle notice notice-list padding-vertical-10 padding-horizontal-15 flex-inherit margin-bottom-1 background-transparent-b-20">
              <Link className="flex-inherit" to="#">
                <div class="flex widthp-100 flex-column">
                  <div class="flex">
                    <span class="color-grey">제목이 출력됩니다.</span>
                  </div>
                  <div class="flex">
                    <span class="color-grey grow-2">날짜가 출력됩니다.</span>
                    {/*
                                color-green : 읽음
                                color-red : 읽지않음
                                */}
                    <span class="color-green">읽음</span>
                  </div>
                </div>
              </Link>
            </div>
            <div class="list-row detail-view flex padding-vertical-10 padding-horizontal-15 flex-column flex-inherit margin-bottom-1 background-transparent-b-20 color-white display-none">
              쪽지 내용이 출력됩니다.
            </div>
            {/*
        
		<div class="list-row flex pi-title padding-vertical-10 padding-horizontal-15 color-white">
			등록된 게시물이 없습니다.
		</div>
            */}
          </div>
        </div>
      </div>
    </Fragment>
  );
}
