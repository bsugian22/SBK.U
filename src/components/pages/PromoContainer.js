import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPromos, viewPromo } from "../../redux/promo/promoActions";
import PromoPost from "./PromoPost";

export default function Promo() {
  let promo = useSelector((state) => state.promo);
  let viewPromoData = useSelector((state) => state.promo.promo);
  let isSubscribed = true;
  let dispatch = useDispatch();
  useEffect(() => {
    isSubscribed = true;
    dispatch(fetchPromos());
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
            <div colspan="15" class="td-3">
              <span></span>
            </div>
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
                    href=""
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
                <a href="/sports?offset=-100">
                  <button class="page-left width-40 heightp-100 background-transparent-b-20 margin-right-5">
                    <i class="fas fa-chevron-left margin-0 color-grey"></i>
                  </button>
                </a>
                <a href="/sports?offset=100">
                  <button class="page-right width-40 heightp-100 background-transparent-b-20">
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
