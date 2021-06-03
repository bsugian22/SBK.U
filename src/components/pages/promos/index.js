import React, { useEffect, useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPromos,
  nextPagePromo,
  onClickPagePromo,
  prevPagePromo,
  viewPromo,
} from "../../../redux/promo/promoActions";
import PromoPost from "../promoposts";
import sweetalert from "../../../plugins/sweetalert";
import moment from "moment";
import Logo from "../../layouts/Logo";
import { Link } from "react-router-dom";
import Select from "react-select";

export default function Promo() {
  let swal = new sweetalert();
  let promo = useSelector((state) => state.promo);
  let view = useSelector((state) => state.promo.promo);
  let promos = useSelector((state) => state.promo.promos);
  let page = useSelector((state) => state.promo.promos.page);
  let last_page = useSelector((state) => state.promo.promos.lastPage);
  let per_page = useSelector((state) => state.promo.promos.perPage);
  let list_pages = useSelector((state) => state.promo.promos.list_pages);
  let isSubscribed = true;
  let dispatch = useDispatch();
  useEffect(() => {
    isSubscribed = true;
    dispatch(fetchPromos({ page: page, per_page: per_page }));
    return () => {
      isSubscribed = false;
    };
  }, []);

  return (
    <div class="content promos-continer flex flex-inherit grow-2 flex-column">
      <div class="notice-wrap poromos notice-content-desktop border-top flex-inherit flex-row">
        <div class="notice-left flex-inherit flex-column promos-height padding-10 widthp-40 border-right scrollable-auto">
          <div class="notice flex-column flex-inherit">
            <div class="flex-inherit flex-column"><div class="red-shadow notice-header-title height-45 background-transparent-b-10 align-items-center padding-left-15 border-bottom-white"><span class="color-white">프로모션 리스트</span></div></div>
            {promo?.loading ? (
              <div class="flex-column flex-inherit widthp-100 color-grey">
                <div class="heightp-100 flex-inherit flex-column background-transparent-b-10 padding-10 border-bottom-white">
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
                <div class="heightp-100 flex-inherit flex-column background-transparent-b-10 padding-10 border-bottom-white">
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
            ) : promo?.promos?.data?.length == 0 ? (
              <div class="noArticle color-grey padding-10 background-transparent-b-10 justify-content-center">
                <span>게시글이 없습니다.</span>
              </div>
            ) : (
              promo?.promos?.data?.map((item, index) => {
                return (
                  <button
                    key={index}
                    type="button"
                    class="flex-inherit padding-0"
                    onClick={(e) => {
                      promo.promos.data.map((data, index) => {
                        document.getElementById(data.id).classList.remove("active");
                      })
                      dispatch(viewPromo(item));
                      document.getElementById(item.id).classList.add("active");

                    }}
                  >
                    <div id={item.id} class="flex-column flex-inherit widthp-100 notice-list padding-10 background-transparent-b-10 color-grey border-bottom-white "> {/* active */}
                      <div class="heightp-100 flex-inherit flex-column">
                        <div class="flex-inherit heightp-50">
                          <div class="padding-10 background-transparent-b-10">
                            <span class="color-grey">{item.category} promo </span>
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
          <div class="bottom-wrap border-top flex flex-inherit height-60 padding-10 align-items-center-inherit0">
            <div class="pagination widthp-100 flex-inherit justify-content-end">
              <div class="flex selectBox">
                  <Select
                    className="select-container select-position"
                    classNamePrefix="select-box"
                    value={{ label : promos.page , value : promos.page }}
                    onChange={(e) => {
                      dispatch(
                        onClickPagePromo({
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
                    })([], 0, promos.lastPage)}
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

                      dispatch(prevPagePromo(prevData));
                    }}
                    disabled={1 >= promos.page}
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

                      dispatch(nextPagePromo(nextData));
                    }}
                    disabled={promos.lastPage <= promos.page}
                  >
                    <i class="fas fa-chevron-right margin-0 color-white"></i>
                  </button>
              </div>
            </div>
          </div>
        </div>
        <div class="notice-read border-left flex-inherit flex-column promos-height widthp-60 padding-10 scrollable-auto" hidden={view.id ? false : true}>
          <div class="notice-read-header red-shadow height-45 background-transparent-b-10 align-items-center-inherit padding-left-15 border-bottom-rb flex-inherit">
            <span class="color-white grow-2">프로모션 내용</span>
            <div>
              <span class="color-grey padding-right-10"><i class="fal fa-calendar-week"></i>{moment(view.createdAt).format("YY/MM/DD HH:mm")}</span>
              <span class="color-grey padding-right-15"><i class="fal fa-user"></i>TERA</span>
            </div>
          </div>
          <div class="flex-inherit flex-column">
            <div class="notice-read-header-title flex height-45 align-items-center background-transparent-b-10 align-items-center-inherit padding-horizontal-15 border-bottom-rb border-top">
              <span class="flex align-items-center color-grey">제목 : {view.title}</span>
            </div>
            <div class="notice-read-content background-transparent-b-5 align-items-center-inherit padding-15 border-bottom-rb flex-column border-top">
              <div class="color-grey min-height-100">
                <span>{view.content}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="align-items-center border-left" style={{ paddingLeft: "25%" }} hidden={view.id ? true : false}>
          <Logo width="120" height="30" />
        </div>
      </div>
    </div>
  );
}
