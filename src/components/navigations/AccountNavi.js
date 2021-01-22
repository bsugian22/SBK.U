import React from 'react'
import { NavLink } from 'react-router-dom'

export default function AccountNavi(props)
{
	return (
		<div class="left-account-sidebar content-height width-400 flex-inherit flex-column scrollable-auto border-right border-right-shadow">
			<div class="list flex-inherit flex-column padding-10">
				<NavLink activeClassName="active" to="/account/deposit" className="padding-10 flex-inherit margin-bottom-10 align-items-center-inherit justify-content-center-inherit background-transparent-b-15">
					<div class="deposit flex-row flex-inherit align-items-center-inherit justify-content-center-inherit">
							<div class="heightp-100 icon background-transparent-w-5"><i class="fad fa-hand-holding-usd color-grey fa-2x"></i></div>
							<div class="flex-column title padding-10">
								<div class="flex subject widthp-100">
									<span class="color-grey font-weight-bold font-size-13">DEPOSIT</span>
								</div>
								<div class="flex widthp-100">
									<span class="color-grey font-size-11">입금신청과 내역을 확인할 수 있습니다</span>
								</div>
							</div>
					</div>
				</NavLink>
				<NavLink activeClassName="active" to="/account/withdraw" className="padding-10 flex-inherit margin-bottom-10 align-items-center-inherit justify-content-center-inherit background-transparent-b-15">
					<div class="withdraw flex-row flex-inherit align-items-center-inherit justify-content-center-inherit">
						<div class="heightp-100 icon background-transparent-w-5"><i class="fad fa-hands-usd fa-2x color-grey"></i></div>
						<div class="flex-column title padding-10">
							<div class="flex subject widthp-100">
								<span class="color-grey font-weight-bold font-size-13">WITHDRAW</span>
							</div>
							<div class="flex widthp-100">
								<span class="color-grey font-size-11">출금신청과 내역을 확인할 수 있습니다</span>
							</div>
						</div>
					</div>
				</NavLink>
				<NavLink activeClassName="active" to="/account/exchange" className="padding-10 flex-inherit margin-bottom-10 align-items-center-inherit justify-content-center-inherit background-transparent-b-15">
					<div class="exchange flex-row flex-inherit align-items-center-inherit justify-content-center-inherit">
						<div class="heightp-100 icon background-transparent-w-5"><i class="fad fa-sync-alt fa-2x color-grey"></i></div>
						<div class="flex-column title padding-10">
							<div class="flex subject widthp-100">
								<span class="color-grey font-weight-bold font-size-13">EXCHANGE</span>
							</div>
							<div class="flex widthp-100">
								<span class="color-grey font-size-11">카지노머니전환과 내역을 확인할 수 있습니다</span>
							</div>
						</div>
					</div>
				</NavLink>
				<NavLink activeClassName="active" to="/account/position" className="padding-10 flex-inherit margin-bottom-10 align-items-center-inherit justify-content-center-inherit background-transparent-b-15">
					<div class="history flex-row flex-inherit align-items-center-inherit justify-content-center-inherit">
						<div class="heightp-100 icon background-transparent-w-5"><i class="fad fa-list-ul fa-2x color-grey"></i></div>
						<div class="flex-column title padding-10">
							<div class="flex subject widthp-100">
								<span class="color-grey font-weight-bold font-size-13">HISTORY</span>
							</div>
							<div class="flex widthp-100">
								<span class="color-grey font-size-11">배팅내역을 확인할 수 있습니다</span>
							</div>
						</div>
					</div>
				</NavLink>
				<NavLink activeClassName="active" to="/account/notice" className="padding-10 flex-inherit margin-bottom-10 align-items-center-inherit justify-content-center-inherit background-transparent-b-15">
					<div class="notice flex-row flex-inherit align-items-center-inherit justify-content-center-inherit">
						<div class="heightp-100 icon background-transparent-w-5"><i class="fad fa-megaphone fa-2x color-grey"></i></div>
						<div class="flex-column title padding-10">
							<div class="flex subject widthp-100">
								<span class="color-grey font-weight-bold font-size-13">NOTICE</span>
							</div>
							<div class="flex widthp-100">
								<span class="color-grey font-size-11">공지사항을 확인할 수 있습니다</span>
							</div>
						</div>
					</div>
				</NavLink>
				<NavLink activeClassName="active" to="/account/inquiry" className="padding-10 flex-inherit margin-bottom-10 align-items-center-inherit justify-content-center-inherit background-transparent-b-15">
					<div class="inquiry flex-row flex-inherit align-items-center-inherit justify-content-center-inherit">
						<div class="heightp-100 icon background-transparent-w-5"><i class="fad fa-comments-alt fa-2x color-grey"></i></div>
						<div class="flex-column title padding-10">
							<div class="flex subject widthp-100">
								<span class="color-grey font-weight-bold font-size-13">INQUIRY</span>
							</div>
							<div class="flex widthp-100">
								<span class="color-grey font-size-11">1:1문의신청과 내역을 확인할 수 있습니다</span>
							</div>
						</div>
					</div>
				</NavLink>
				<NavLink activeClassName="active" to="/account/message" className="padding-10 flex-inherit margin-bottom-10 align-items-center-inherit justify-content-center-inherit background-transparent-b-15">
					<div class="message flex-row flex-inherit align-items-center-inherit justify-content-center-inherit">
						<div class="heightp-100 icon background-transparent-w-5"><i class="fad fa-envelope fa-2x color-grey"></i></div>
						<div class="flex-column title padding-10">
							<div class="flex subject widthp-100">
								<span class="color-grey font-weight-bold font-size-13">MESSAGE</span>
							</div>
							<div class="flex widthp-100">
								<span class="color-grey font-size-11">메세지 수신내역을 확인할 수 있습니다</span>
							</div>
						</div>
					</div>
				</NavLink>
				<NavLink activeClassName="active" to="/account/settings" className="padding-10 flex-inherit align-items-center-inherit justify-content-center-inherit background-transparent-b-15">
					<div class="settings flex-row flex-inherit align-items-center-inherit justify-content-center-inherit">
						<div class="heightp-100 icon background-transparent-w-5"><i class="fad fa-user-cog fa-2x color-grey"></i></div>
						<div class="flex-column title padding-10">
							<div class="flex subject widthp-100">
								<span class="color-grey font-weight-bold font-size-13">SETTINGS</span>
							</div>
							<div class="flex widthp-100">
								<span class="color-grey font-size-11">회원정보변경 및 베팅한도를 확인할 수 있습니다</span>
							</div>
						</div>
					</div>
				</NavLink>
			</div>
		</div>
	)
}