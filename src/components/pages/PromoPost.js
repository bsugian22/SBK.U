import React, { Fragment } from "react";

export default function PromoPost({ viewPromoData }) {
  return (
    <div class="promo-read-header flex-inherit flex-column align-items-center-inherit">
      <div class="flex-column notice-read-content padding-10 background-transparent-b-10 color-grey">
        <div class="promo flex-column grow-1 flex-inherit padding-10 heightp-30">
          <p>
            {" "}
            {viewPromoData.category == ""
              ? ""
              : "Category:" + viewPromoData.category}
          </p>
          <p>
            {viewPromoData.title == null || viewPromoData.title == ""
              ? "프로모 Post 페이지"
              : " Title:" + viewPromoData.title}
          </p>

          <img class="flex-inherit margin-bottom-5" src={viewPromoData.photo} />
          <p>
            {viewPromoData.fixed == "" ? "" : "  Fixed: " + viewPromoData.fixed}{" "}
            {viewPromoData.hits == "" ? "" : "  Hits: " + viewPromoData.hits}
          </p>
          <div class="flex-column grow-1 flex-inherit padding-10">
            {viewPromoData.content}
          </div>
        </div>
      </div>
    </div>
  );
}
