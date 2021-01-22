import React from "react";
import PromoPost from "./PromoPost";

export default function Promo()
{
	return (
		<div class="content promo-continer flex flex-inherit grow-2 flex-column">
			<div class="content-header shrink-0 border-bottom height-50 align-items-center padding-horizontal-10 background-transparent-b-25">
				<span class="color-grey"><i class="fad fa-megaphone"></i>PROMO</span>
			</div>
			<div class="promo-wrap account border-top flex-inherit flex-row">
				<div class="promo-left flex-inherit flex-column account-height widthp-40 border-right ">
					<div class="promo flex-column grow-2 flex-inherit padding-10 scrollable-auto">
						<a class="flex-inherit margin-bottom-5" href="<?php echo element('post_url', $result); ?>">
							<img class="widthp-100" src="<?php echo html_escape(element('title', $result)); ?>" />
						</a>
						<div class="noArticle color-grey padding-10 background-transparent-b-10 justify-content-center">
							<span>진행중인 프로모가 없습니다.</span>
						</div>
					</div>
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
								<a href="/sports?offset=-100"><button class="page-left width-40 heightp-100 background-transparent-b-20 margin-right-5"><i class="fas fa-chevron-left margin-0 color-grey"></i></button></a>
								<a href="/sports?offset=100"><button class="page-right width-40 heightp-100 background-transparent-b-20"><i class="fas fa-chevron-right margin-0 color-grey"></i></button></a>
							</div>
						</div>
					</div>
				</div>
				<div class="promo-read border-left flex-inherit flex-column account-height widthp-60 padding-10 scrollable-auto">
					<PromoPost />
				</div>
			</div>
		</div>
	)
}