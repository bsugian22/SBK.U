import React, { useEffect } from "react";
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
export default function Promo() {
  let swal = new sweetalert();
  let promo = useSelector((state) => state.promo);
  let viewPromoData = useSelector((state) => state.promo.promo);
  let page = useSelector((state) => state.promo.promos.page);
  let lastPage = useSelector((state) => state.promo.promos.lastPage);
  let per_page = useSelector((state) => state.promo.promos.per_page);
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
    <div class="content promo-continer flex flex-inherit grow-2 flex-column">
      <div class="content-header shrink-0 border-bottom height-50 align-items-center padding-horizontal-10 background-transparent-b-25">
        <span class="color-grey">
          <i class="fad fa-megaphone"></i>PROMO
        </span>
      </div>
      <div class="promo-wrap account border-top flex-inherit flex-row scrollable-auto ">
        <div class="promo-left flex-inherit flex-column account-height widthp-40 border-right ">
          {promo.loading ? (
            <table>
            <tbody>
              <tr>
                <td class="td-4">
                  <span></span>
                </td>
              </tr>
            </tbody>
          </table>
          ) : promo?.promos?.data?.length == 0 ? (
            <div colspan="12" class="color-white">
              데이터가 존재하지 않습니다.
            </div>
          ) : (
            promo?.promos?.data?.map((item, index) => {
              return (
                <div
                  key={index}
                  class="promo flex-column grow-1 flex-inherit padding-10 heightp-30"
                  onClick={() => {
                    dispatch(viewPromo(item));
                  }}
                >
                  <a
                    class="flex-inherit margin-bottom-5"

                    // href="<?php echo element('post_url', $result); ?>"
                  >
                    {item.title}
                  </a>
                  <div class="noArticle color-grey padding-10 background-transparent-b-10 justify-content-center">
                    <span>{item.content}</span>
                  </div>
                </div>
              );
            })
          )}

          <div class="flex-inherit promo-page-bottom border-top-white height-60 background-transparent-b-15 padding-10 color-grey">
            <div class="pagination flex-inherit widthp-100 heightp-100">
              <div class="select">
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
                        onClickPagePromo({
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
                <a>
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
                        dispatch(prevPagePromo(prevData));
                      }
                    }}
                  >
                    <i class="fas fa-chevron-left margin-0 color-grey"></i>
                  </button>
                </a>
                <a>
                  <button
                    class="page-right width-40 heightp-100 background-transparent-b-20"
                    onClick={() => {
                      let nextData = {
                        page: page,
                        list_pages: list_pages,
                        per_page: per_page,
                      };
                      let last = list_pages.length;
                      if (page == last) {
                        swal.warning(" 페이지에 반응");
                      } else {
                        dispatch(nextPagePromo(nextData));
                      }
                    }}
                  >
                    <i class="fas fa-chevron-right margin-0 color-grey"></i>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="promo-read border-left flex-inherit flex-column account-height widthp-60 padding-10 scrollable-auto">
          <PromoPost viewPromoData={viewPromoData} />
        </div>
      </div>
    </div>
  );
}
