import React, { useEffect, useState, Fragment } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";
import Select from "react-select";
import parse from "html-react-parser";
import { mapStateToProps, mapDispatchProps } from "../../redux/store";
import noticeModel from "../../models/noticeModel";
import sweetalert from "../../plugins/sweetalert";
import {
  fetchNotice,
  nextPageNotice,
  onClickPageNotice,
  prevPageNotice,
  setNotices,
  viewNotice,
} from "../../redux/accounts/notice/noticeAction";
import { CREATE_GAMESVIEW_FAILURE } from "../../redux/gamesview/gamesviewTypes";
import Logo from "../layouts/Logo";
const Notice = () => {
  const dispatch = useDispatch();
  const swal = new sweetalert();
  let isSubscribed = true;
  let notice = useSelector((state) => state.notice);
  let view = useSelector((state) => state.notice.viewNotice);
  let page = useSelector((state) => state.notice.notices.page);
  let lastPage = useSelector((state) => state.notice.notices.lastPage);
  let per_page = useSelector((state) => state.notice.notices.per_page);
  let list_pages = useSelector((state) => state.notice.notices.list_pages);
  useEffect(() => {
    isSubscribed = true;
    dispatch(setNotices({ page: page, per_page: per_page }));
    return () => {
      isSubscribed = false;
    };
  }, []);

  return (
    <Fragment>
      <div class="content account-continer flex flex-inherit grow-2 flex-column">
        <div class="notice-wrap account notice-content-desktop border-top flex-inherit flex-row">
          <div class="notice-left flex-inherit flex-column account-height widthp-40 border-right scrollable-auto">
            <div class="notice flex-column flex-inherit padding-horizontal-10 padding-top-10">
              <div class="flex-inherit flex-column"><div class="red-shadow notice-header-title height-45 background-transparent-b-10 align-items-center padding-left-15 border-bottom-white"><span class="color-white">공지사항</span></div></div>
              {notice?.loading ? (
                <div class="flex-column flex-inherit widthp-100 color-grey">
                  <div class="heightp-100 flex-inherit flex-column background-transparent-b-10 padding-10 margin-bottom-10">
                    <div class="flex-inherit heightp-50">
                      <div class="padding-10 background-transparent-b-10 flex align-items-center">
                        <div class="notice-loading width-80">
                          <div></div>
                        </div>
                      </div>
                      <div class="padding-10 grow-2 justify-content-end">
                        <span class="color-grey">
                          <div class="notice-loading width-80">
                            <div></div>
                          </div>
                        </span>
                      </div>
                    </div>
                    <div class="flex-inherit heightp-50 align-items-center">
                      <div class="padding-10 text-ellipsis widthp-100">
                        <div class="color-white text-ellipsis widthp-100">
                          <div class="notice-loading widthp-100">
                            <div></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="heightp-100 flex-inherit flex-column background-transparent-b-10 padding-10 margin-bottom-10">
                    <div class="flex-inherit heightp-50">
                      <div class="padding-10 background-transparent-b-10 flex align-items-center">
                        <div class="notice-loading width-80">
                          <div></div>
                        </div>
                      </div>
                      <div class="padding-10 grow-2 justify-content-end">
                        <span class="color-grey">
                          <div class="notice-loading width-80">
                            <div></div>
                          </div>
                        </span>
                      </div>
                    </div>
                    <div class="flex-inherit heightp-50 align-items-center">
                      <div class="padding-10 text-ellipsis widthp-100">
                        <div class="color-white text-ellipsis widthp-100">
                          <div class="notice-loading widthp-100">
                            <div></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="heightp-100 flex-inherit flex-column background-transparent-b-10 padding-10">
                    <div class="flex-inherit heightp-50">
                      <div class="padding-10 background-transparent-b-10 flex align-items-center">
                        <div class="notice-loading width-80">
                          <div></div>
                        </div>
                      </div>
                      <div class="padding-10 grow-2 justify-content-end">
                        <span class="color-grey">
                          <div class="notice-loading width-80">
                            <div></div>
                          </div>
                        </span>
                      </div>
                    </div>
                    <div class="flex-inherit heightp-50 align-items-center">
                      <div class="padding-10 text-ellipsis widthp-100">
                        <div class="color-white text-ellipsis widthp-100">
                          <div class="notice-loading widthp-100">
                            <div></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : notice?.notices?.data?.length == 0 ? (
                <div class="noArticle color-grey padding-10 background-transparent-b-10 justify-content-center">
                  <span>게시글이 없습니다.</span>
                </div>
              ) : (
                notice?.notices?.data?.map((item, index) => {
                  return (
                    <button
                      key={index}
                      type="button"
                      class="flex-inherit padding-0"
                      onClick={(e) => {
                        if (view.id) {
                          document.getElementById(view.id).classList.remove("active");
                        }
                        dispatch(fetchNotice(item.id))
                        document.getElementById(item.id).classList.add("active");

                      }}
                    //  key={index}
                    >
                      <div id={item.id} class="flex-column flex-inherit widthp-100 notice-list padding-10 background-transparent-b-10 color-grey border-bottom-white "> {/* active */}
                        <div class="heightp-100 flex-inherit flex-column">
                          <div class="flex-inherit heightp-50">
                            <div class="padding-10 background-transparent-b-10">
                              <span class="color-grey">{item.category}</span>
                            </div>
                            <div class="padding-10 grow-2 justify-content-end">
                              <span class="color-grey">
                                {moment(item.createdAt).format("MM / DD HH:mm")}
                              </span>
                            </div>
                          </div>
                          <div class="flex-inherit heightp-50 align-items-center">
                            <div class="padding-10 text-ellipsis">
                              <span class="color-white text-ellipsis">
                                {item.title}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </button>
                  );
                })
              )}
            </div>
            <div class="flex-inherit notice-page-bottom height-60 padding-10 color-grey">
              <div class="pagination flex-inherit widthp-100 justify-content-end">
                <div class="flex select selectBox">
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
                          onClickPageNotice({
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
                <div class="grow-2"></div>
                <div class="flex page">
                  <button
                    class="page-left btn-0 background-transparent-b-20 flex align-items-center justify-content-center margin-right-5"
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
                        dispatch(prevPageNotice(prevData));
                      }
                    }}
                  >
                    <i class="fas fa-chevron-left margin-0 color-white"></i>
                  </button>
                  <button
                    class="page-right btn-0 background-transparent-b-20 flex align-items-center justify-content-center"
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
                        dispatch(nextPageNotice(nextData));
                      }
                    }}
                  >
                    <i class="fas fa-chevron-right margin-0 color-white"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="notice-read border-left flex-inherit flex-column account-height widthp-60 padding-10 scrollable-auto" hidden={view.id ? false : true}>
            <div class="notice-read-header red-shadow height-45 background-transparent-b-10 align-items-center-inherit padding-left-15 border-bottom-rb flex-inherit">
              <span class="color-white grow-2">공지사항 내용</span>
              <div>
                <span class="color-grey padding-right-10"><i class="fal fa-calendar-week"></i>{moment(view.createdAt).format("YY/MM/DD HH:mm")}</span>
                <span class="color-grey padding-right-15"><i class="fal fa-user"></i>운영팀</span>
              </div>
            </div>
            <div class="flex-inherit flex-column">
              <div class="notice-read-header-title background-transparent-b-10 align-items-center-inherit padding-horizontal-15 border-bottom-rb flex-column border-top">
                <span class="flex align-items-center height-40 color-grey">제목 : {view.title}</span>
              </div>
              <div class="notice-read-content background-transparent-b-5 align-items-center-inherit padding-15 border-bottom-rb flex-column border-top">
                <div class="color-grey min-height-100">
                  <span>{view.content}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="align-items-center  margin-right-5" style={{marginLeft: "25%"}} hidden={view.id ? true : false}>
            <Logo width="120" height="30"  />
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
            <span class="color-white padding-left-15">
              안녕하세요.
              {/* {user.member.nickname}  */}
              회원님
            </span>
          </div>
          <div class="flex">
            <span class="color-yellow padding-right-15">
              Lv.
              {/* {user.member.level} */}
            </span>
          </div>
        </div>

        <div class="money-information border-bottom flex-inherit">
          <div class="widthp-33 border-right padding-left-15 padding-vertical-15">
            <div class="flex flex-column">
              <span class="color-white">예치금</span>
              <span class="color-green">
                {/* {Number(user.member.cash).toLocaleString()} */}
              </span>
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
            {/* {notice.data.length > 0 ? (
                     notice.data.map((value, index) => { */}
            {/* return ( */}
            <Fragment
            //  key={index}
            >
              <div class="list-row flex pi-title updowntoggle notice notice-list padding-vertical-10 padding-horizontal-15 flex-inherit margin-bottom-1 background-transparent-b-20">
                <button type="button" class="flex-inherit">
                  <div class="flex widthp-100 flex-column ">
                    <div class="flex">
                      <span class="color-grey">{/* {value.title} */}</span>
                    </div>
                    <div class="flex">
                      <span class="color-grey grow-2">
                        {/* {moment(value.createdAt).format('MM / DD HH:mm')} */}
                      </span>
                    </div>
                  </div>
                </button>
              </div>
            </Fragment>
            {/* )
                     })
                  ) : ( */}
            <div class="list-row flex pi-title padding-vertical-10 padding-horizontal-15 color-white">
              등록된 게시물이 없습니다.
            </div>
            {/* )} */}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Notice;
