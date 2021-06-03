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
import Select from "react-select";
import sweetalert from "../../plugins/sweetalert";
import Logo from "../layouts/Logo";
import moment from "moment";
export default function Message() {
  let message = useSelector((state) => state.message);
  let messages = useSelector((state) => state.message.messages);
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
        <div class="message-wrap account message-content-desktop flex-inherit">
          <div class="message-left-content account-height widthp-50 padding-10 flex-inherit flex-column padding-right-5 border-right scrollable-auto">
            <div class="flex-inherit flex-column">
              <div class="red-shadow message-header-title height-45 background-transparent-b-10 align-items-center padding-left-15 border-bottom-rb">
                <span class="color-white">메세지 리스트</span>
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
                        전체선택
                      </th>
                      <th class="height-45 widthp-50 color-grey border-top">제목</th>
                      <th class="height-45 color-grey border-top">수신시간</th>
                      <th class="height-45 color-grey border-top">수신여부</th>
                    </tr>
                  </thead>
                  <tbody class="background-transparent-b-5">
                    {message.loading ? (
                      Array(3).fill(1).map(() => {
                        return (
                          <tr>
                            {Array(4).fill(1).map(() => {
                              return (
                                <td class="td-3 border-top">
                                  <span></span>
                                </td>
                              )
                            })
                            }
                          </tr>
                        )
                      })
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
                            id={item.id}
                            class="rows"
                            key={index}
                            onClick={() => {
                              message.messages.data.map((data, index) => {
                                document.getElementById(data.id).classList.remove("active");
                              })
                              dispatch(fetchMessage(item.id));
                              document.getElementById(item.id).classList.add("active");
                            }}
                          > {/* active */}
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
                              <span class="color-grey">
                                {Moment(item.createdAt).format(
                                  "YY-MM-DD HH:mm "
                                )}{" "}
                              </span>
                            </td>
                            <td class="height-45 border-top">
                              {item.readAt == null ? (
                                <span class="color-red">읽지않음</span>
                              ) : (
                                <span class="color-green">읽음</span>
                              )}
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
                    class="color-red padding-10"
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
                    선택삭제
                  </button>
                </div>
              </div>
              <div class="padding-vertical-10 flex-inherit height-60 color-grey">
              <div class="pagination widthp-100 flex-inherit justify-content-end">
              <div class="flex selectBox">
                  <Select
                    className="select-container select-position"
                    classNamePrefix="select-box"
                    value={{ label : messages.page , value : messages.page }}
                    onChange={(e) => {
                      dispatch(
                        onClickPageMessage({
                          page: e.value,
                          per_page: per_page,
                        })
                      );
                    }}
                    options={((rows, i, len) => {
                      while (++i <= len) {
                        rows.push({ value: i, label: i });
                      }
                      return rows;
                    })([], 0, messages.lastPage)}
                  />
              </div>
              <div class="grow-2"></div>
              <div class="flex page">
                  <button
                    class="page-left btn-0 background-transparent-b-20 flex align-items-center justify-content-center margin-right-5"
                    onClick={(e) => {
                      let prevData = {
                        page: page,
                        list_pages: list_pages,
                        per_page: per_page,
                      };

                      dispatch(prevPageMessage(prevData));
                    }}
                    disabled={1 >= messages.page}
                  >
                    <i class="fas fa-chevron-left margin-0 color-white"></i>
                  </button>
                  <button
                    class="page-right btn-0 background-transparent-b-20 flex align-items-center justify-content-center"
                    onClick={(e) => {
                      let nextData = {
                        page: page,
                        list_pages: list_pages,
                        per_page: per_page,
                      };

                      dispatch(nextPageMessage(nextData));
                    }}
                    disabled={messages.lastPage <= messages.page}
                  >
                    <i class="fas fa-chevron-right margin-0 color-white"></i>
                  </button>
              </div>
            </div>
          </div>
            </div>
          </div>
          <div class="message-right-content account-height widthp-50 padding-10 flex-inherit flex-column padding-left-5 border-left scrollable-auto" hidden={viewMessage.id == 0 ? true : false}>
            <div class="flex-inherit flex-column">
              <div class="message-read-header red-shadow height-45 background-transparent-b-10 align-items-center-inherit padding-left-15 border-bottom-rb flex-inherit">
                <span class="color-white grow-2">
                  메세지 내용
                </span>
                <div>
                  <span class="color-grey padding-right-10">
                    <i class="fal fa-calendar-week"></i>
                    {moment(viewMessage.createdAt).format("YY/MM/DD HH:mm")}
                  </span>
                  <span class="color-grey padding-right-15">
                    <i class="fal fa-user"></i>
                    TERA
                  </span>
                </div>
              </div>
            </div>
            <div class="flex-inherit flex-column">
              <div class="message-read-header-title background-transparent-b-10 align-items-center-inherit padding-horizontal-15 border-bottom-rb flex height-45 align-items-center border-top">
                <span class="flex align-items-center color-grey">제목 : {viewMessage.title}</span>
              </div>
              <div class="message-read-content background-transparent-b-5 align-items-center-inherit padding-15 border-bottom-rb flex-column border-top">
                <div class="color-grey min-height-100">
                  <span>{viewMessage.content}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="align-items-center border-left" style={{ paddingLeft: "20%" }} hidden={viewMessage.id == 0 ? false : true}>
            <Logo width="120" height="30" />
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
