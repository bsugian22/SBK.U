import React, { Fragment, useContext, useState, useEffect, useRef  } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import MenuContext from "../../contexts/Menu.context";
import {
  handleConfirmNewPass,
  handleNewPass,
  handleOldPassword,
  changePassWord,
  refreshToken,
} from "../../redux/user/userActions";
export default function Settings() {
  let user = useSelector((state) => state.user.user);
  let changePass = useSelector((state) => state.user.changePassword);
  let dispatch = useDispatch();
  const context = useContext(MenuContext);
  let isSubscribed = true;

  useEffect(() => {
    isSubscribed = true;
    dispatch(refreshToken())
    return () => {
      isSubscribed = false;
    };
  }, []);


  return (
    <Fragment>
      <div className="content account-continer flex flex-inherit grow-2 flex-column">
        <div className="settings-wrap account settings-content-desktop flex-inherit padding-10">
          <div className="settings-left-content account-height widthp-50 flex-inherit flex-column padding-right-5 border-right scrollable-auto">
            <div className="flex-inherit flex-column">
              <div className="red-shadow deposit-header-title height-45 background-transparent-b-10 align-items-center padding-left-15 border-bottom-rb">
                <span className="color-white">계정</span>
              </div>
              <div className="account-info-content flex-inherit align-items-center-inherit justify-content-center-inherit">
                <div className="widthp-25 border-bottom-rb border-right-rb height-45 background-transparent-b-10 border-top">
                  <span className="color-grey">아이디</span>
                </div>
                <div className="widthp-25 border-bottom-rb border-right-rb height-45 border-top background-transparent-b-5 border-left-rw">
                  <span className="color-white">{user.member.nickname}</span>
                </div>
                <div className="widthp-25 border-bottom-rb border-right-rb height-45 background-transparent-b-10 border-top border-left-rw">
                  <span className="color-grey">레벨</span>
                </div>
                <div className="widthp-25 border-bottom-rb height-45 border-top background-transparent-b-5 border-left-rw">
                  <span className="color-white">{user.member.level}</span>
                </div>
              </div>
            </div>

            <div className="flex-inherit flex-column">
              <div className="red-shadow deposit-header-title height-45 background-transparent-b-10 align-items-center padding-left-15 border-bottom-rb border-top">
                <span className="color-white">비밀번호 변경</span>
              </div>
              <div className="account-info-content flex-inherit align-items-center-inherit justify-content-center-inherit">
                <div className="widthp-25 border-bottom-rb border-right-rb height-45 background-transparent-b-10 border-top">
                  <span className="color-grey">새 비밀번호</span>
                </div>
                <div className="widthp-25 border-bottom-rb border-right-rb height-45 border-top background-transparent-b-5 border-left-rw">
                  <input
                    type="password"
                    name=""
                    placeholder="비밀번호를 입력해주세요"
                    className="input-form color-white"
                    value={changePass.password}
                    onChange={(e) => {
                      let newPass = e.target.value;
                      dispatch(handleNewPass(newPass));
                    }}
                  />
                </div>
                <div className="widthp-25 border-bottom-rb border-right-rb height-45 background-transparent-b-10 border-top border-left-rw">
                  <span className="color-grey">새 비밀번호 재입력</span>
                </div>
                <div className="widthp-25 border-bottom-rb height-45 border-top background-transparent-b-5 border-left-rw">
                  <input
                    type="password"
                    name=""
                    placeholder="비밀번호를 재입력해주세요"
                    className="input-form color-white"
                    value={changePass.password_confirmation}
                    onChange={(e) => {
                      let passConfirm = e.target.value;
                      dispatch(handleConfirmNewPass(passConfirm));
                    }}
                  />
                </div>
              </div>

              <div className="account-info-content flex-inherit align-items-center-inherit justify-content-center-inherit">
                <div className="widthp-25 border-bottom-rb border-right-rb height-45 background-transparent-b-10 border-top">
                  <span className="color-grey">현재 비밀번호</span>
                </div>
                <div className="widthp-50 border-bottom-rb border-right-rb height-45 background-transparent-b-5 border-left-rw border-top">
                  <input
                    type="password"
                    name=""
                    placeholder="현재 비밀번호를 입력해주세요"
                    className="input-form color-white"
                    value={changePass.old_password}
                    onChange={(e) => {
                      let oldpass = e.target.value;
                      dispatch(handleOldPassword(oldpass));
                    }}
                  />
                </div>
                <div className="widthp-25 height-45 border-left-rw border-top">
                  <button
                    type="button"
                    className="widthp-100 heightp-100 background-green color-white"
                    onClick={() => {
                      dispatch(changePassWord(changePass));
                    }}
                  >
                    비밀번호 저장
                  </button>
                </div>
              </div>
            </div>

            <div className="flex-inherit flex-column">
              <div className="red-shadow deposit-header-title height-45 background-transparent-b-10 align-items-center padding-left-15 border-bottom-rb flex-inherit border-top">
                <span className="color-white grow-2">기본정보</span>
                <Link to="#" className="color-grey padding-right-15">
                  수정
                </Link>
              </div>
              <div className="account-info-content flex-inherit align-items-center-inherit justify-content-center-inherit">
                <div className="widthp-25 border-bottom-rb border-right-rb height-45 background-transparent-b-10 border-top">
                  <span className="color-grey">이름</span>
                </div>
                <div className="widthp-25 border-bottom-rb border-right-rb height-45 background-transparent-b-5 border-top border-left-rw">
                  <span className="color-white">{user.member.username}</span>
                </div>
                <div className="widthp-25 border-bottom-rb border-right-rb height-45 background-transparent-b-10 border-top border-left-rw">
                  <span className="color-grey">생년월일</span>
                </div>
                <div className="widthp-25 border-bottom-rb height-45 background-transparent-b-5 border-top border-left-rw">
                  <span className="color-white">1988-08-08</span>
                </div>
              </div>

              <div className="account-info-content flex-inherit align-items-center-inherit justify-content-center-inherit">
                <div className="widthp-25 border-bottom-rb border-right-rb height-45 background-transparent-b-10 border-top">
                  <span className="color-grey">휴대폰</span>
                </div>
                <div className="widthp-25 border-bottom-rb border-right-rb height-45 background-transparent-b-5 border-top border-left-rw">
                  <span className="color-white">{user.member.tel_number}</span>
                </div>
                <div className="widthp-25 border-bottom-rb border-right-rb height-45 background-transparent-b-10 border-top border-left-rw">
                  <span className="color-grey">이메일</span>
                </div>
                <div className="widthp-25 border-bottom-rb height-45 background-transparent-b-5 border-top border-left-rw">
                  <span className="color-white">test@test.com</span>
                </div>
              </div>

              <div className="account-info-content flex-inherit align-items-center-inherit justify-content-center-inherit">
                <div className="widthp-25 border-bottom-rb border-right-rb height-45 background-transparent-b-10 border-top">
                  <span className="color-grey">접속정보</span>
                </div>
                <div className="widthp-75 border-bottom-rb  padding-left-15 height-45 background-transparent-b-5 border-top border-left-rw">
                  <span className="color-white">
                    {user.member.country_code + " " + user.member.logged_by_ip}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex-inherit flex-column margin-bottom-20">
              <div className="red-shadow deposit-header-title height-45 background-transparent-b-10 align-items-center padding-left-15 border-bottom-rb flex-inherit border-top">
                <span className="color-white grow-2">계좌정보</span>
                <Link to="#" className="color-green padding-right-15">
                  저장
                </Link>
              </div>
              <div className="account-info-content flex-inherit align-items-center-inherit justify-content-center-inherit">
                <div className="widthp-25 border-bottom-rb border-right-rb height-45 background-transparent-b-10 border-top">
                  <span className="color-grey">은행명</span>
                </div>
                <div className="widthp-25 border-bottom-rb border-right-rb height-45 border-top border-left-rw background-transparent-b-5">
                  <span className="color-white">
                    {user.member.account_bank}
                  </span>
                </div>
                <div className="widthp-25 border-bottom-rb border-right-rb height-45 background-transparent-b-10 border-top border-left-rw">
                  <span className="color-grey">예금주</span>
                </div>
                <div className="widthp-25 border-bottom-rb height-45 border-top border-left-rw background-transparent-b-5">
                  <span className="color-white">
                    {user.member.account_holder}
                  </span>
                </div>
              </div>

              <div className="account-info-content flex-inherit align-items-center-inherit justify-content-center-inherit">
                <div className="widthp-25 border-bottom-rb border-right-rb height-45 background-transparent-b-10 border-top">
                  <span className="color-grey">계좌번호</span>
                </div>
                <div className="widthp-75 border-bottom-rb height-45 border-top border-left-rw background-transparent-b-5">
                  <span className="color-white">
                    {user.member.account_number}
                  </span>
                </div>
              </div>

              <div className="account-info-content flex-inherit align-items-center-inherit justify-content-center-inherit">
                <div className="widthp-25 border-bottom-rb border-right-rb height-45 background-transparent-b-10 border-top">
                  <span className="color-grey">페이팔 계정</span>
                </div>
                <div className="widthp-75 border-bottom-rb height-45 border-top border-left-rw background-transparent-b-5">
                  <span className="color-white">test@test.com</span>
                </div>
              </div>

              <div className="account-info-content flex-inherit align-items-center-inherit justify-content-center-inherit">
                <div className="widthp-25 border-bottom-rb border-right-rb height-45 background-transparent-b-10 border-top">
                  <span className="color-grey">비트코인 지갑</span>
                </div>
                <div className="widthp-75 border-bottom-rb height-45 border-top border-left-rw background-transparent-b-5">
                  <span className="color-white">
                    bc1qjxhcg4sy0nz96kxlpngdfhuz5ppe0trzsnmds5
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="settings-right-content account-height widthp-50 flex-inherit flex-column border-left padding-left-5 scrollable-auto">
            <div className="flex-inherit flex-column">
              <div className="red-shadow deposit-header-title height-45 background-transparent-b-10 align-items-center padding-left-15 flex-inherit">
                <span className="color-white grow-2">이용한도</span>
                <Link to="#" className="color-grey padding-right-15">
                  이용한도 상향신청
                </Link>
              </div>
              <div className="account-info-content flex-inherit align-items-center-inherit justify-content-center-inherit">
                <div className="widthp-30 padding-vertical-15 border-right-rb border-bottom-rb border-top background-transparent-b-10">
                  <span className="color-grey">싱글</span>
                </div>
                <div className="widthp-70 flex-inherit flex-column">
                  <div className="widthp-100 heightp-100 rows-item flex-inherit align-items-center-inherit ">
                    <div className="sub-title widthp-30 height-50 background-transparent-b-10 border-right-rb justify-content-center border-bottom-rb border-top border-left-rw">
                      <span className="color-grey">최소배팅</span>
                    </div>
                    <div className="pr-title widthp-70 border-bottom-rb background-transparent-b-5 padding-left-15 border-top border-left-rw">
                      <span className="color-green">
                        <i className="far fa-won-sign"></i>
                        5,000
                      </span>
                    </div>
                  </div>
                  <div className="widthp-100 heightp-100 rows-item flex-inherit align-items-center-inherit ">
                    <div className="sub-title widthp-30 height-50 background-transparent-b-10 border-right-rb justify-content-center border-bottom-rb border-top border-left-rw">
                      <span className="color-grey">최대배팅</span>
                    </div>
                    <div className="pr-title widthp-70 border-bottom-rb padding-left-15 background-transparent-b-5 border-top border-left-rw">
                      <span className="color-green">
                        <i className="far fa-won-sign"></i>
                        1,000,000
                      </span>
                    </div>
                  </div>
                  <div className="widthp-100 heightp-100 rows-item flex-inherit align-items-center-inherit ">
                    <div className="sub-title widthp-30 height-50 background-transparent-b-10 border-right-rb justify-content-center border-bottom-rb border-top border-left-rw">
                      <span className="color-grey">최대 당첨금</span>
                    </div>
                    <div className="pr-title widthp-70 border-bottom-rb padding-left-15 background-transparent-b-5 border-top border-left-rw">
                      <span className="color-green">
                        <i className="far fa-won-sign"></i>
                        3,000,000
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="account-info-content flex-inherit align-items-center-inherit justify-content-center-inherit">
                <div className="widthp-30 padding-vertical-15 border-right-rb border-top border-bottom-rb background-transparent-b-10">
                  <span className="color-grey">콤보</span>
                </div>
                <div className="widthp-70 flex-inherit flex-column">
                  <div className="widthp-100 heightp-100 rows-item flex-inherit align-items-center-inherit ">
                    <div className="sub-title widthp-30 height-50 background-transparent-b-10 border-right-rb justify-content-center border-bottom-rb border-top border-left-rw">
                      <span className="color-grey">최소배팅</span>
                    </div>
                    <div className="pr-title widthp-70 border-bottom-rb padding-left-15 border-top background-transparent-b-5 border-left-rw">
                      <span className="color-green">
                        <i className="far fa-won-sign"></i>
                        5,000
                      </span>
                    </div>
                  </div>
                  <div className="widthp-100 heightp-100 rows-item flex-inherit align-items-center-inherit ">
                    <div className="sub-title widthp-30 height-50 background-transparent-b-10 border-right-rb justify-content-center border-bottom-rb border-top border-left-rw">
                      <span className="color-grey">최대배팅</span>
                    </div>
                    <div className="pr-title widthp-70 border-bottom-rb padding-left-15 border-top background-transparent-b-5 border-left-rw">
                      <span className="color-green">
                        <i className="far fa-won-sign"></i>
                        2,000,000
                      </span>
                    </div>
                  </div>
                  <div className="widthp-100 heightp-100 rows-item flex-inherit align-items-center-inherit ">
                    <div className="sub-title widthp-30 height-50 background-transparent-b-10 border-bottom-rb border-right-rb justify-content-center border-top border-left-rw">
                      <span className="color-grey">최대 당첨금</span>
                    </div>
                    <div className="pr-title widthp-70 border-bottom-rb padding-left-15 border-top background-transparent-b-5 border-left-rw">
                      <span className="color-green">
                        <i className="far fa-won-sign"></i>
                        5,000,000
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-inherit flex-column">
              <div className="red-shadow deposit-header-title height-45 background-transparent-b-10 align-items-center padding-left-15 border-bottom-rb border-top">
                <span className="color-white">보너스 포인트</span>
              </div>
              <div className="account-info-content flex-inherit align-items-center-inherit justify-content-center-inherit">
                <div className="widthp-25 border-bottom-rb border-right-rb height-45 background-transparent-b-10 border-top">
                  <span className="color-grey">회원낙첨 포인트</span>
                </div>
                <div className="widthp-25 border-bottom-rb border-right-rb height-45 border-top background-transparent-b-5 border-left-rw">
                  <span className="color-green">1%</span>
                </div>
                <div className="widthp-25 border-bottom-rb border-right-rb height-45 background-transparent-b-10 border-top border-left-rw">
                  <span className="color-grey">추천인 낙첨 포인트</span>
                </div>
                <div className="widthp-25 border-bottom-rb height-45 border-top background-transparent-b-5 border-left-rw">
                  <span className="color-green">1%</span>
                </div>
              </div>

              <div className="account-info-content flex-inherit align-items-center-inherit justify-content-center-inherit">
                <div className="widthp-25 border-bottom-rb border-right-rb height-45 background-transparent-b-10 border-top">
                  <span className="color-grey">최대 추천인 수</span>
                </div>
                <div className="widthp-25 border-bottom-rb border-right-rb height-45 border-top background-transparent-b-5 border-left-rw">
                  <span className="color-green">100</span>
                </div>
                <div className="widthp-25 border-bottom-rb border-right-rb height-45 background-transparent-b-10 border-top border-left-rw">
                  <span className="color-grey">현재 추천인 수</span>
                </div>
                <div className="widthp-25 border-bottom-rb height-45 border-top background-transparent-b-5 border-left-rw">
                  <span className="color-green">0</span>
                </div>
              </div>
              <div className="account-info-content flex-inherit align-items-center-inherit justify-content-center-inherit">
                <div className="widthp-25 border-bottom-rb border-right-rb height-45 background-transparent-b-10 border-top">
                  <span className="color-grey">첫 충전 포인트</span>
                </div>
                <div className="widthp-75 border-bottom-rb height-45 border-top background-transparent-b-5 border-left-rw">
                  <span className="color-green">10%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="widthp-100 interload-panel-mobile flex-column flex-inherit flex">
        <div className="height-40 align-items-center-inherit border-bottom-rb">
          <div className="flex pi-title grow-2">
            <span className="color-white padding-left-15">ACCOUNT</span>
          </div>
          <div className="flex padding-right-15">
            <Link to="/account/settings">
              마이페이지
              <i className="fal fa-angle-double-right"></i>
            </Link>
          </div>
        </div>

        <div className="member-information height-40 align-items-center-inherit border-bottom-rb">
          <div className="flex pi-title green grow-2">
            <span className="color-white padding-left-15">
              안녕하세요. - 회원님
            </span>
          </div>
          <div className="flex">
            <span className="color-yellow padding-right-15">Lv.-</span>
          </div>
        </div>

        <div className="money-information border-bottom-rb flex-inherit">
          <div className="widthp-33 border-right-rb padding-left-15 padding-vertical-15">
            <div className="flex flex-column">
              <span className="color-white">예치금</span>
              <span className="color-green">-</span>
            </div>
          </div>
          <div className="widthp-33 border-right-rb padding-left-15 padding-vertical-15">
            <div className="flex flex-column">
              <span className="color-white">게임머니</span>
              <span className="color-green">100,000,000</span>
            </div>
          </div>
          <div className="widthp-33 padding-left-15 padding-vertical-15">
            <div className="flex flex-column">
              <span className="color-white">보너스</span>
              <span className="color-green">100,000,000</span>
            </div>
          </div>
        </div>

        <div className="interload-tab height-50 border-bottom-rb">
          <div className="flex widthp-50">
            <button
              type="button"
              id="tab-1"
              className={
                context.state.interMenu === "inter-tab-1" ? "active" : ""
              }
              onClick={() => context.actions.setinterMenu("inter-tab-1")}
            >
              기본정보
            </button>
          </div>
          <div className="flex widthp-50">
            <button
              type="button"
              id="tab-2"
              className={
                context.state.interMenu === "inter-tab-2" ? "active" : ""
              }
              onClick={() => context.actions.setinterMenu("inter-tab-2")}
            >
              한도 및 포인트
            </button>
          </div>
        </div>
        <div
          className={
            context.state.interMenu === "inter-tab-1"
              ? "interload-content flex flex-inherit flex-column padding-horizontal-15 active"
              : "interload-content flex flex-column flex-inherit padding-horizontal-15"
          }
        >
          <div className="flex-column flex-inherit">
            <div className="interload-list padding-vertical-10">
              <h1>기본정보</h1>
            </div>

            <div className="interload-list align-items-center-inherit">
              <div className="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right-rb border-bottom-rb ">
                아이디
              </div>
              <div className="widthp-70 flex background-transparent-b-10 color-grey height-40 border-bottom-rb">
                <span className="color-white padding-left-10">
                  아이디가 출력됩니다.
                </span>
              </div>
            </div>

            <div className="interload-list align-items-center-inherit">
              <div className="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right-rb border-bottom-rb ">
                이름 name
              </div>
              <div className="widthp-70 flex background-transparent-b-10 color-grey height-40 border-bottom-rb">
                <span className="color-white padding-left-10">
                  {user.member.username}
                </span>
              </div>
            </div>

            <div className="interload-list align-items-center-inherit">
              <div className="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right-rb border-bottom-rb ">
                생년월일
              </div>
              <div className="widthp-70 flex background-transparent-b-10 color-grey height-40 border-bottom-rb">
                <span className="color-white padding-left-10">1919/09/09</span>
              </div>
            </div>

            <div className="interload-list align-items-center-inherit">
              <div className="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right-rb border-bottom-rb ">
                연락처
              </div>
              <div className="widthp-70 flex background-transparent-b-10 color-grey height-40 border-bottom-rb">
                <span className="color-white padding-left-10">
                  010-1234-1234
                </span>
              </div>
            </div>

            <div className="interload-list align-items-center-inherit">
              <div className="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right-rb border-bottom-rb ">
                이메일
              </div>
              <div className="widthp-70 flex background-transparent-b-10 color-grey height-40 border-bottom-rb">
                <span className="color-white padding-left-10">
                  xxx000xxx@naver.com
                </span>
              </div>
            </div>
          </div>

          <div className="flex-column flex-inherit">
            <div className="interload-list padding-vertical-10">
              <h1>비밀번호 변경</h1>
            </div>

            <div className="interload-list align-items-center-inherit">
              <div className="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right-rb border-bottom-rb ">
                현재 비밀번호
              </div>
              <div className="widthp-70 flex background-transparent-b-10 color-grey height-40 border-bottom-rb">
                <input
                  type="password"
                  name=""
                  placeholder="비밀번호를 입력하세요."
                />
              </div>
            </div>

            <div className="interload-list align-items-center-inherit">
              <div className="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right-rb border-bottom-rb ">
                새 비밀번호
              </div>
              <div className="widthp-70 flex background-transparent-b-10 color-grey height-40 border-bottom-rb">
                <input
                  type="password"
                  name=""
                  placeholder="새로운 비밀번호를 입력하세요."
                />
              </div>
            </div>

            <div className="interload-list align-items-center-inherit">
              <div className="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right-rb border-bottom-rb ">
                새 비밀번호
              </div>
              <div className="widthp-70 flex background-transparent-b-10 color-grey height-40 border-bottom-rb">
                <input
                  type="password"
                  name=""
                  placeholder="새로운 비밀번호를 다시 입력하세요."
                />
              </div>
            </div>
          </div>

          <div className="flex-column flex-inherit">
            <div className="interload-list padding-vertical-10">
              <h1>계좌정보</h1>
            </div>

            <div className="interload-list align-items-center-inherit">
              <div className="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right-rb border-bottom-rb ">
                은행명
              </div>
              <div className="widthp-70 flex background-transparent-b-10 color-grey height-40 border-bottom-rb">
                <span className="color-white padding-left-10">국민은행</span>
              </div>
            </div>

            <div className="interload-list align-items-center-inherit">
              <div className="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right-rb border-bottom-rb ">
                예금주
              </div>
              <div className="widthp-70 flex background-transparent-b-10 color-grey height-40 border-bottom-rb">
                <span className="color-white padding-left-10">홍길동</span>
              </div>
            </div>

            <div className="interload-list align-items-center-inherit">
              <div className="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right-rb border-bottom-rb ">
                계좌번호
              </div>
              <div className="widthp-70 flex background-transparent-b-10 color-grey height-40 border-bottom-rb">
                <span className="color-white padding-left-10">
                  1234-1234-**-123456
                </span>
              </div>
            </div>

            <div className="interload-list margin-bottom-30">
              <button
                type="button"
                className="widthp-100 background-green color-white height-40 justify-content-center"
              >
                변경내용 저장하기
              </button>
            </div>
          </div>
        </div>
        <div
          className={
            context.state.interMenu === "inter-tab-2"
              ? "interload-content flex flex-inherit flex-column padding-horizontal-15 active"
              : "interload-content flex flex-inherit flex-column padding-horizontal-15"
          }
        >
          <div className="flex-column flex-inherit">
            <div className="interload-list padding-vertical-10">
              <h1>싱글베팅</h1>
            </div>

            <div className="interload-list align-items-center-inherit">
              <div className="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right-rb border-bottom-rb ">
                최소배팅
              </div>
              <div className="widthp-70 flex flex-inherit background-transparent-b-10 color-grey height-40 border-bottom-rb">
                <span className="grow-2 padding-left-10">
                  <i className="far fa-won-sign"></i>
                </span>
                <span className="color-green padding-right-10">5,000</span>
              </div>
            </div>

            <div className="interload-list align-items-center-inherit">
              <div className="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right-rb border-bottom-rb ">
                최대배팅
              </div>
              <div className="widthp-70 flex flex-inherit background-transparent-b-10 color-grey height-40 border-bottom-rb">
                <span className="grow-2 padding-left-10">
                  <i className="far fa-won-sign"></i>
                </span>
                <span className="color-green padding-right-10">1,000,000</span>
              </div>
            </div>

            <div className="interload-list align-items-center-inherit">
              <div className="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right-rb border-bottom-rb ">
                최대당첨금
              </div>
              <div className="widthp-70 flex flex-inherit background-transparent-b-10 color-grey height-40 border-bottom-rb">
                <span className="grow-2 padding-left-10">
                  <i className="far fa-won-sign"></i>
                </span>
                <span className="color-green padding-right-10">10,000,000</span>
              </div>
            </div>
          </div>

          <div className="flex-column flex-inherit">
            <div className="interload-list padding-vertical-10">
              <h1>멀티 배팅</h1>
            </div>

            <div className="interload-list align-items-center-inherit">
              <div className="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right-rb border-bottom-rb ">
                최소배팅
              </div>
              <div className="widthp-70 flex flex-inherit background-transparent-b-10 color-grey height-40 border-bottom-rb">
                <span className="grow-2 padding-left-10">
                  <i className="far fa-won-sign"></i>
                </span>
                <span className="color-green padding-right-10">5,000</span>
              </div>
            </div>

            <div className="interload-list align-items-center-inherit">
              <div className="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right-rb border-bottom-rb ">
                최대배팅
              </div>
              <div className="widthp-70 flex flex-inherit background-transparent-b-10 color-grey height-40 border-bottom-rb">
                <span className="grow-2 padding-left-10">
                  <i className="far fa-won-sign"></i>
                </span>
                <span className="color-green padding-right-10">3,000,000</span>
              </div>
            </div>

            <div className="interload-list align-items-center-inherit">
              <div className="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right-rb border-bottom-rb ">
                최대당첨금
              </div>
              <div className="widthp-70 flex flex-inherit background-transparent-b-10 color-grey height-40 border-bottom-rb">
                <span className="grow-2 padding-left-10">
                  <i className="far fa-won-sign"></i>
                </span>
                <span className="color-green padding-right-10">20,000,000</span>
              </div>
            </div>
          </div>

          <div className="flex-column flex-inherit">
            <div className="interload-list padding-vertical-10">
              <h1>보너스,포인트</h1>
            </div>

            <div className="interload-list align-items-center-inherit">
              <div className="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right-rb border-bottom-rb ">
                낙첨
              </div>
              <div className="widthp-70 flex flex-inherit background-transparent-b-10 color-grey height-40 border-bottom-rb">
                <span className="grow-2 padding-left-10">
                  <i className="far fa-percent"></i>
                </span>
                <span className="color-green padding-right-10">1</span>
              </div>
            </div>

            <div className="interload-list align-items-center-inherit">
              <div className="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right-rb border-bottom-rb ">
                첫충전
              </div>
              <div className="widthp-70 flex flex-inherit background-transparent-b-10 color-grey height-40 border-bottom-rb">
                <span className="grow-2 padding-left-10">
                  <i className="far fa-percent"></i>
                </span>
                <span className="color-green padding-right-10">10</span>
              </div>
            </div>

            <div className="interload-list align-items-center-inherit">
              <div className="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right-rb border-bottom-rb ">
                추천인 낙첨
              </div>
              <div className="widthp-70 flex flex-inherit background-transparent-b-10 color-grey height-40 border-bottom-rb">
                <span className="grow-2 padding-left-10">
                  <i className="far fa-percent"></i>
                </span>
                <span className="color-green padding-right-10">20,000,000</span>
              </div>
            </div>

            <div className="interload-list align-items-center-inherit">
              <div className="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right-rb border-bottom-rb ">
                최대 추천인
              </div>
              <div className="widthp-70 flex flex-inherit background-transparent-b-10 color-grey height-40 border-bottom-rb">
                <span className="grow-2 padding-left-10">
                  <i className="fal fa-users"></i>
                </span>
                <span className="color-green padding-right-10">1,000</span>
              </div>
            </div>

            <div className="interload-list align-items-center-inherit">
              <div className="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right-rb border-bottom-rb ">
                현재 추천인
              </div>
              <div className="widthp-70 flex flex-inherit background-transparent-b-10 color-grey height-40 border-bottom-rb">
                <span className="grow-2 padding-left-10">
                  <i className="fal fa-users"></i>
                </span>
                <span className="color-green padding-right-10">2</span>
              </div>
            </div>
          </div>

          <div className="flex-column flex-inherit">
            <div className="interload-list padding-vertical-10">
              <h1>이용내역</h1>
            </div>

            <div className="interload-list align-items-center-inherit">
              <div className="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right-rb border-bottom-rb ">
                충전
              </div>
              <div className="widthp-70 flex flex-inherit background-transparent-b-10 color-grey height-40 border-bottom-rb">
                <span className="grow-2 padding-left-10">
                  <i className="far fa-won-sign"></i>
                </span>
                <span className="color-green padding-right-10">10,000,000</span>
              </div>
            </div>

            <div className="interload-list align-items-center-inherit">
              <div className="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right-rb border-bottom-rb ">
                보너스
              </div>
              <div className="widthp-70 flex flex-inherit background-transparent-b-10 color-grey height-40 border-bottom-rb">
                <span className="grow-2 padding-left-10">
                  <i className="fal fa-users"></i>
                </span>
                <span className="color-green padding-right-10">2</span>
              </div>
            </div>

            <div className="interload-list align-items-center-inherit">
              <div className="widthp-30 flex background-transparent-b-20 color-grey height-40 justify-content-center border-right-rb border-bottom-rb ">
                추천인
              </div>
              <div className="widthp-70 flex flex-inherit background-transparent-b-10 color-grey height-40 border-bottom-rb">
                <span className="grow-2 padding-left-10">
                  <i className="fal fa-users"></i>
                </span>
                <span className="color-green padding-right-10">0</span>
              </div>
            </div>

            <div className="interload-list margin-bottom-30">
              <button
                type="button"
                className="widthp-100 background-green color-white height-40 justify-content-center"
              >
                <Link to="#" className="color-white">
                  한도상향 신청
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
