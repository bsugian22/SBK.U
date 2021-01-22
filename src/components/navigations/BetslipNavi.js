import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export default function BetslipNavi(props)
{
	return (
		<div class="flex betslip-content-desktop betslip content-height shrink-0 width-300 border-left border-left-shadow flex-column scrollable-auto">
			<div class="tab flex shrink-0 flex-inherit height-50 padding-10 title align-items-center-inherit background-transparent-b-15">
				<div class="grow-2">
					<span class="color-green">BETTING SLIP</span>
				</div>
				<div class="count">
					<span class="color-white">0</span>
				</div>
				<div class="delete padding-horizontal-10">
					<button class="color-grey"><i class="fad fa-trash margin-0"></i></button>
				</div>
			</div>
			<div class="pick flex flex-inherit flex-column padding-10 min-height-150"><span class="heightp-100 color-grey flex justify-content-center align-items-center">선택된 베팅이 없습니다</span></div>
			<div class="stake flex flex-inherit shrink-0">
				<div class="flex-inherit flex-column widthp-100">
					<div class="flex-inherit align-items-center-inherit padding-5 height-40 align-items-center-inherit background-transparent-b-15">
						<div class="grow-2 color-grey">베팅금액</div>
						<div class="">
							<input type="text" class="input-form width-150 stake-input padding-vertical-5 padding-horizontal-10 text-align-right heightp-100 background-transparent-b-10 color-white" name="skeyword" placeholder="금액을 입력하세요" required />
						</div>
					</div>
					<div class="flex-inherit flex-column border-top">
						<div class="widthp-100 flex-inherit height-40 justify-content-center-inherit align-items-center-inherit background-transparent-b-5">
							<div class="widthp-33"><button class="heightp-100 widthp-100 color-grey btn-0 border-right-white background-transparent">5,000</button></div>
							<div class="widthp-33"><button class="heightp-100 widthp-100 color-grey btn-0 border-right-white background-transparent">10,000</button></div>
							<div class="widthp-33"><button class="heightp-100 widthp-100 color-grey btn-0 background-transparent">50,000</button></div>
						</div>
						<div class="widthp-100 flex-inherit height-40 justify-content-center-inherit align-items-center-inherit border-top background-transparent-b-5">
							<div class="widthp-33"><button class="heightp-100 widthp-100 color-grey btn-0 background-transparent border-right-white">100,000</button></div>
							<div class="widthp-33"><button class="heightp-100 widthp-100 color-grey btn-0 background-transparent border-right-white">500,000</button></div>
							<div class="widthp-33"><button class="heightp-100 widthp-100 color-grey btn-0 background-transparent">1,000,000</button></div>
						</div>
					</div>
					<div class="flex-inherit align-items-center-inherit padding-5 height-40 align-items-center-inherit border-top background-transparent-b-15">
						<div class="grow-2 color-grey">배당률 합계</div>
						<div class="color-green total-odds"><i class="fal fa-times fa-xs margin-right-5"></i>0</div>
					</div>
					<div class="flex-inherit align-items-center-inherit padding-5 height-40 align-items-center-inherit border-top background-transparent-b-15">
						<div class="grow-2 color-grey">예상당첨금액</div>
						<div class="color-green total-win-price"><i class="fas fa-won-sign fa-xs margin-right-5"></i>0</div>
					</div>
					<div class="flex-inherit align-items-center-inherit height-40 align-items-center-inherit">
						<button class="bet widthp-100 height-40 align-items-center justify-content-center background-green">
							<span class="color-white">BET</span>
						</button>
					</div>
				</div>
			</div>
			<div class="flex shrink-0 flex-inherit height-50 padding-10 align-items-center-inherit background-transparent-b-15 margin-top-10">
				<div class="grow-2 flex">
					<span class="color-green">PROMOTION</span>
				</div>
			</div>
			<div class="promo-content flex">
				<span class="height-40 padding-10 flex color-grey align-items-center justify-content-center widthp-100">진행중인 프로모가 없습니다</span>
			</div>
		</div>
	)
}