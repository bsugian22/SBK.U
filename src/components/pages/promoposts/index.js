import React, { Fragment } from "react";
import moment from "moment";
export default function PromoPost({ viewPromoData }) {
  return (
    <div class="promo-read-header flex-inherit flex-column align-items-center-inherit">
      <div class="flex-column notice-read-content padding-10 background-transparent-b-10 color-grey">
        {viewPromoData.category == "" ||
        viewPromoData.title == "" ||
        viewPromoData.createdAt == "" ? (
          <div class="text">
            <p>프로모 Post 페이지</p>
          </div>
        ) : (
          <div class="heightp-100 flex-inherit flex-column">
            <div class="flex-inherit heightp-50">
              <div class="padding-10 background-transparent-b-10">
                <span class="color-grey">{viewPromoData?.category}</span>
              </div>
              <div class="padding-10 grow-2 justify-content-end">
                {viewPromoData.createdAt == "" ||
                viewPromoData.createdAt == null ? (
                  ""
                ) : (
                  <span class="color-grey">
                    moment(viewPromoData?.createdAt).format("MM / DD HH:mm"){" "}
                  </span>
                )}
              </div>
            </div>
            <div class="flex-inherit heightp-50 align-items-center">
              <div class="padding-10 text-ellipsis">
                <span class="color-white text-ellipsis">
                  {viewPromoData?.title}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
