import React, { Fragment, useEffect, useState, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import Moment from "moment";
import sweetalert from "../../plugins/sweetalert";
import { method } from "lodash";
import { Link, NavLink } from "react-router-dom";
import MenuContext from "../../contexts/Menu.context";
import {
  changeInquiryContent,
  changeInquiryTitle,
  checkInquiryCertainItem,
  createInquiryAction,
  deleteInquiries,
  deleteInquiriesRequest,
  fetchInquiry,
  listOfToDeleteInquiries,
  nextPageInquiry,
  onClickPageInquiry,
  prevPageInquiry,
  resetCreateInquiry,
  selectAllInquiry,
  setInquiries,
} from "../../redux/accounts/inquiry/inquiryAction";
import { prevPageDeposit } from "../../redux/accounts/deposit/depositActions";
import { nextPagePosition } from "../../redux/accounts/position/positionActions";
import echo from '../../plugins/echo'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Logo from "../layouts/Logo";
import moment from "moment";

const Inquiry = () => {
  const dispatch = useDispatch();
  const swal = new sweetalert();
  let isSubscribed = true;
  let inquiry = useSelector((state) => state.inquiry);
  let createInquiry = useSelector((state) => state.inquiry.createInquiry);
  let page = useSelector((state) => state.inquiry.inquiries.page);
  let lastPage = useSelector((state) => state.inquiry.inquiries.lastPage);
  let per_page = useSelector((state) => state.inquiry.inquiries.per_page);
  let list_pages = useSelector((state) => state.inquiry.inquiries.list_pages);
  let user = useSelector((state) => state.user.user);

  useEffect(() => {
    isSubscribed = true;
    dispatch(setInquiries({ page: page, per_page: per_page }));
    pusher();
    return () => {
      isSubscribed = false;
    };
  }, []);

  const pusher = () => {
    if (user.isAuth) {
      echo.private(`users.${user.member.id}`).listen('InquiryUpdated', (e) => {
        dispatch(setInquiries({ page: page, per_page: per_page }));
        dispatch(fetchSummary());
      })
    }
  }

  return (
    <Fragment>
      <div class="content account-continer flex flex-inherit grow-2 flex-column">
        <div class="inquiry-wrap account inquiry-content-desktop flex-inherit">
          <div class="inquiry-left-content account-height widthp-50 padding-10 flex-inherit flex-column padding-right-5 border-right scrollable-auto">
            <div class="flex-inherit flex-column">
              <div class="red-shadow inquiry-header-title height-45 background-transparent-b-10 align-items-center padding-left-15 border-bottom-rb">
                <span class="color-white">1:1문의 리스트</span>
              </div>
            </div>
            <div class="widthp-100 inquiry-content flex-inherit flex-column">
              <div class="inquiry-item">
                <table>
                  <thead class="background-transparent-b-10">
                    <tr class="thead">
                      {/* SELECT ALL */}
                      <th
                        class="height-45 color-grey border-top"
                        onClick={() => {
                          dispatch(selectAllInquiry());
                        }}
                      >
                        전체선택
                      </th>
                      <th class="height-45 widthp-50 color-grey border-top">제목</th>
                      <th class="height-45 color-grey border-top">작성시간</th>
                      <th class="height-45 color-grey border-top">답변여부</th>
                    </tr>
                  </thead>
                  <tbody class="background-transparent-b-5">
                    {inquiry.loading ? (
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
                    ) : inquiry?.inquiries?.data?.length == 0 ? (
                      <tr>
                        <td colspan="12" class="color-white">
                          데이터가 존재하지 않습니다.
                        </td>
                      </tr>
                    ) : (
                      inquiry?.inquiries?.data?.map((item, index) => {
                        return (
                          <tr
                            class="rows"
                            id={item.id}
                            key={index}
                            onClick={() => {
                                inquiry.inquiries.data.map((data, index) => {
                                  document.getElementById(data.id).classList.remove("active");
                                })
                              dispatch(fetchInquiry(item.id));
                              document.getElementById(item.id).classList.add("active");
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
                                  dispatch(checkInquiryCertainItem(payload));
                                }}
                              />
                            </td>
                            <td class="height-45 border-top">
                              <span class="color-grey">{item.title}</span>
                            </td>
                            <td class="height-45 border-top">
                              <span class="color-grey">
                                {" "}
                                {Moment(item.createdAt).format(
                                  "YY-MM-DD HH:mm "
                                )}{" "}
                              </span>
                            </td>
                            <td class="height-45 border-top">
                              {item.status == "PENDING" ? (
                                <span class="color-grey">답변대기</span>
                              ) : item.status == "IN_PROGRESS" ? (
                                <span class="color-yellow">답변중</span>
                              ) : item.status == "COMPLETED" ? (
                                <span class="color-green">답변완료</span>
                              ) : (
                                ""
                              )}
                            </td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>
              <div class="inquiry-item-footer flex-inherit border-top border-bottom-rb padding-vertical-10 align-items-center background-transparent-b-10">
                <div class="grow-2 padding-left-10">
                  {/* Delete Inquiries */}
                  <button
                    type="button"
                    class="color-red padding-10"
                    onClick={() => {
                      let newList = [];
                      inquiry?.inquiries?.data.map((o) => {
                        if (o.isChecked == true) {
                          newList.push(o);
                        }
                      });
                      if (newList.length == 0) {
                        swal.warning("");
                      } else {
                        dispatch(listOfToDeleteInquiries());
                        dispatch(deleteInquiriesRequest());
                        dispatch(
                          deleteInquiries(inquiry.newInquiryToDeleteList)
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
                <div class="pagination flex-inherit widthp-100 heightp-100">
                  <div class="select">
                    {/* {list_pages.map((o) => {
                    let newItem = { label: o.toString(), value: o };
                    selectList.push(newItem);
                  })} */}
                    <select
                      name="slct"
                      id="slct"
                      value={page}
                      onChange={(e) => {
                        let val = e.target.value;
                        if (val.toString() == page.toString()) {
                          swal.warning(" 페이지에 반응");
                        } else {
                          dispatch(
                            onClickPageInquiry({
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
                        disabled={page == 1}
                        onClick={() => {
                          let prevData = {
                            page: page,
                            list_pages: list_pages,
                            per_page: per_page,
                          };
                          if (page == 1) {
                            swal.warning(" 페이지에 반응");
                          } else {
                            dispatch(prevPageInquiry(prevData));
                          }
                        }}
                      >
                        <i class="fas fa-chevron-left margin-0 color-grey"></i>
                      </button>
                    </Link>
                    <Link to="#">
                      <button
                        class="page-right width-40 heightp-100 background-transparent-b-20 margin-right-5"
                        disabled={page == lastPage}
                        onClick={() => {
                          let nextData = {
                            page: page,
                            list_pages: list_pages,
                            per_page: per_page,
                          };
                          if (page == lastPage) {
                            swal.warning(" 페이지에 반응");
                          } else {
                            dispatch(nextPageInquiry(nextData));
                          }
                        }}
                      >
                        <i class="fas fa-chevron-right margin-0 color-grey"></i>
                      </button>
                    </Link>
                    <Link to="#">
                      <button class="write page-right width-40 heightp-100 background-transparent-b-20"
                        onClick={() => {
                          dispatch(resetCreateInquiry());
                        }}>
                        <i class="fal fa-pencil-alt color-grey"></i><span class="color-grey">글 작성</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="inquiry-right-content account-height widthp-50 padding-10 flex-inherit flex-column padding-left-5 border-left scrollable-auto" hidden={inquiry.viewingId == null ? true : false}>
            <div class="flex-inherit flex-column" >
              <div class="inquiry-read-header red-shadow height-45 background-transparent-b-10 align-items-center-inherit padding-left-15 border-bottom-rb flex-inherit">
                <span class="color-white grow-2" hidden={!inquiry.isViewing}>1:1문의 내용</span>
                <div hidden={!inquiry.isViewing}>
                  <span class="color-grey padding-right-10">
                    <i class="fal fa-calendar-week"></i>
                    {moment(createInquiry.createdAt).format("YY/MM/DD HH:mm")}
                  </span>
                  <span class="color-grey padding-right-15">
                    <i class="fal fa-user"></i>
                    {user.member.nickname}
                  </span>
                </div>

                <span class="color-white" hidden={inquiry.isViewing}>1:1문의 작성</span>
              </div>
              {
                /**
                 * 글 작성 페이지
                 */
              }
              <div class="inquiry-title-write flex-column flex-inherit" hidden={inquiry.isViewing}>
                <input
                  type="text"
                  class="widthp-100 border-top border-bottom-rb background-transparent-b-10 padding-10 height-45 color-grey"
                  placeholder="제목을 입력해주세요"
                  value={createInquiry.title}
                  onChange={(e) => {
                    let title = e.target.value;
                    dispatch(changeInquiryTitle(title));
                  }}
                />
              </div>
              <div class="inquiry-form-write flex-column flex-inherit background-transparent-b-10 border-top" hidden={inquiry.isViewing}>
                {/* CONTENT */}
                <CKEditor
                  editor={ClassicEditor}
                  onChange={(event, editor) => {
                    const content = editor.getData();
                    dispatch(changeInquiryContent(content));
                    console.log({ event, editor, content });
                  }}
                />
              </div>
              {
                /**
                 * 이 곳은 글 보기 페이지
                 */
              }
              <div hidden={!inquiry.isViewing} class="inquiry-title-write flex height-45 align-items-center flex-inherit widthp-100 border-top border-bottom-rb background-transparent-b-10 padding-10">
                <div class="color-grey">
                  <span>제목 : {createInquiry.title}</span>
                </div>
              </div>
              <div hidden={!inquiry.isViewing} class="inquiry-read-content background-transparent-b-5 align-items-center-inherit padding-15 border-bottom-rb flex-column border-top">
                <div class="color-grey">
                  <span dangerouslySetInnerHTML={ {__html: createInquiry.content} }></span>
                </div>
              </div>
              <div hidden={!inquiry.isViewing} class="inquiry-read-content background-transparent-b-5 align-items-center-inherit padding-15 border-bottom-rb border-top flex-column">
                <div class="color-grey">
                  <span class="flex widthp-100 justify-content-center" hidden={createInquiry.answer != null}>
                    관리자의 답변을 기다리고 있습니다.
                  </span>
                  <span hidden={createInquiry.answer == null} dangerouslySetInnerHTML={ {__html: createInquiry.answer} }></span>
                </div>
              </div>
              <div class="inquiry-form-btn margin-top-10 flex-inherit">
                <div class="grow-2"></div>
                <div>
                  <button
                    type="button"
                    class="padding-15 background-green color-white margin-left-10"
                    onClick={() => {
                      dispatch(createInquiryAction(createInquiry));
                    }}
                    hidden={inquiry.isViewing}
                  >
                    <i class="fal fa-share color-white"></i>
                    <span class="color-white">작성완료</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="align-items-center border-left" style={{ paddingLeft: "20%" }} hidden={inquiry.viewingId == null ? false : true}>
            <Logo width="120" height="30" />
          </div>
        </div>
      </div>
      <div class="widthp-100 interload-panel-mobile flex-column flex-inherit flex">
        <div class="height-40 align-items-center-inherit border-bottom-rb">
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
  );
};
export default Inquiry;
