import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createRegister, setRegisterForm } from '../../redux/register/registerActions';
import { showModal } from '../../redux/modal/modalActions';
import sweetalert from "../../plugins/sweetalert";

export default function Signinfo() {
   const swal = new sweetalert();
   let register = useSelector((state) => state.register.register);
   const dispatch = useDispatch();

     const SignInDialog = () => {
    swal.fire({
      html: (
        <Signin
          onLogin={onLogin}
          forgotPassword={forgotPassword}
          onChangeUsername={handleUsernameOnChange}
          dispatch={dispatch}
        />
      ),
      width: 400,
      showCancelButton: false,
      showConfirmButton: false,
    });
  };

   const submitRegistration = () => {
      if (!register.account_bank) {
         dispatch(showModal({
            text: "은행명을 입력해주세요."
         }));
         return;
      }

      if (!register.account_number) {
         dispatch(showModal({
            text: "계좌번호를 입력해주세요."
         }));
         return;
      }

      var regExp = /^[0-9]/g;
      if (register.account_number && !regExp.test(register.account_number)) {
         dispatch(showModal({
            text: "계좌번호는 숫자만 입력할 수 있습니다."
         }));
         return false;
      }
      if (register.account_number.length < 10) {
         dispatch(showModal({
            text: "계좌번호는 10 글자 보다 작을 수 없습니다."
         }));
         return;
      }

      if (!register.account_holder) {
         dispatch(showModal({
            text: "예금주명을 입력해주세요."
         }));
         return;
      }

      if (!register.withdrawal_password) {
         dispatch(showModal({
            text: "환전 비밀번호를 입력해주세요."
         }));
         return;
      }

      if (register.withdrawal_password.length < 4) {
         dispatch(showModal({
            text: "환전 비밀번호는 4글자 보다 짧을 수 없습니다."
         }));
         return;
      }

      if (!register.withdrawal_password_confirm) {
         dispatch(showModal({
            text: "환전 비밀번호 확인을 입력해주세요."
         }));
         return;
      }
      
      if (register.withdrawal_password_confirm.length < 4) {
         dispatch(showModal({
            text: "환전 비밀번호 확인은 4글자 보다 짧을 수 없습니다."
         }));
         return;
      }

      if (register.withdrawal_password != register.withdrawal_password_confirm) {
         dispatch(showModal({
            text: "환전 비밀번호가 일치하지 않습니다."
         }));
         return;
      }

      if (!register.terms_policy) {
         dispatch(showModal({
            text : "이용약관에 동의하지 않으면 테라 서비스를 이용할 수 없습니다."
         }));
         return false;
      }

      dispatch(createRegister(register, () => {
         swal.close();
      }));
   }


   return (
      <Fragment>
         <div class="sign-wrap flex flex-inherit ">
            <div class="sign-left-bar border-right width-400 height-700 shadow flex-inherit flex-column">
               <div class="flex-column heightp-100 padding-top-70">
                  <a href="<?php echo site_url(); ?>">
                     <svg width="120" height="30" viewBox="0 0 270 108">
                        <polygon fill="#38B853" points="54,0 0,0 18,36 36,36 0,108 36,108 72,36"></polygon>
                        <polygon fill="#FFFFFF" points="234,36 198,108 225,108 234,90 243,108 270,108"></polygon>
                        <polygon
                           fill="#FFFFFF"
                           points="189,36 180,54 144,54 117,108 144,108 153,90 162,108 189,108 180,90 189,90 225,18 180.5,18 81,18 90,36 54,108 99,108 108,90 90,90 99,72 117,72 126,54 108,54 117,36"
                        ></polygon>
                     </svg>
                  </a>
               </div>
               <div class="flex-column padding-vertical-20">
                  <p>회원 가입 중 문제가 발생했나요?</p>
                  <p>아래 링크를 클릭하셔서 도움을 받으세요.</p>
               </div>
            </div>
            <div class="widthp-100 sign-content border-left flex flex-inherit flex-column">
               <div class="sign-right-title padding-horizontal-20 padding-top-30 flex-column text-align-left">
                  <h1 class="color-green">Create Your Free Account</h1>
                  <p class="color-grey">입출금 정보 입력</p>
               </div>
               <div class="widthp-100 flex-inherit padding-top-50 padding-horizontal-20">
                  <div class="widthp-50 flex-inherit sign-item-inner flex-column">
                     <div>
                        <span class="color-grey">은행명</span>
                        <strong class="color-red padding-left-5">*</strong>
                     </div>
                     <div class="padding-top-10">
                        <input 
                           type="text" 
                           name="bank-name" 
                           class="padding-horizontal-10 background-transparent-b-30" 
                           placeholder="은행명을 입력하세요." 
                           onChange={(e)=>{
                              let bankName = e.target.value;
                              dispatch(setRegisterForm({ target : 'account_bank', value : bankName}));
                           }}
                        />
                     </div>
                     <div class="padding-top-10">
                        <span class="color-grey">계좌번호</span>
                        <strong class="color-red padding-left-5">*</strong>
                     </div>
                     <div class="padding-top-10">
                        <input 
                           type="text" 
                           name="bank-address" 
                           class="padding-horizontal-10 background-transparent-b-30" 
                           placeholder="계좌번호를 입력해주세요" 
                           onChange={(e)=>{
                              let bankAddress = e.target.value;
                              dispatch(setRegisterForm({ target : 'account_number', value : bankAddress}));
                           }}
                        />
                     </div>

                     <div class="padding-top-10">
                        <span class="color-grey">예금주</span>
                        <strong class="color-red padding-left-5">*</strong>
                     </div>
                     <div class="padding-top-10">
                        <input 
                           type="text" 
                           name="bank-holder" 
                           class="padding-horizontal-10 background-transparent-b-30" 
                           placeholder="예금주명을 입력해주세요." 
                           onChange={(e)=>{
                              let bankHolder = e.target.value;
                              dispatch(setRegisterForm({ target : 'account_holder', value : bankHolder}));
                           }}
                        />
                     </div>
                     <div class="padding-top-10">
                        <p class="color-grey">은행 계좌 예금주와 다른 경우 입금처리가 불가합니다.</p>
                     </div>
                  </div>
                  <div class="widthp-50 flex-inherit padding-left-30 sign-item-inner flex-column">
                     <div>
                        <span class="color-grey">환전 비밀번호</span>
                        <strong class="color-red padding-left-5">*</strong>
                     </div>
                     <div class="padding-top-10">
                        <input 
                           type="text" 
                           name="withdrawal-password" 
                           class="padding-horizontal-10 background-transparent-b-30" 
                           placeholder="비밀번호를 입력하세요" 
                           onChange={(e)=>{
                              let withdrawal_password = e.target.value;
                              dispatch(setRegisterForm({ target : 'withdrawal_password', value : withdrawal_password}));
                           }}
                           />
                     </div>
                     <div class="padding-top-5">
                        <input 
                           type="text" 
                           name="bank-withdrawal-password-confirm" 
                           class="padding-horizontal-10 background-transparent-b-30" 
                           placeholder="비밀번호를 다시한번 입력하세요" 
                           onChange={(e)=>{
                              let withdrawal_password_confirm = e.target.value;
                              dispatch(setRegisterForm({ target : 'withdrawal_password_confirm', value : withdrawal_password_confirm}));
                           }}
                        />
                     </div>
                     <div class="padding-top-45">
                        <span class="color-grey">파트너 코드 또는 추천인</span>
                        <strong class="color-red padding-left-5">*</strong>
                     </div>
                     <div class="padding-top-10">
                        <input 
                           type="text" 
                           name="code" 
                           class="padding-horizontal-10 background-transparent-b-30" 
                           placeholder="파트너 코드 또는 추천인을 입력하세요." 
                           onChange={(e)=>{
                              let referer = e.target.value;
                              let branch = e.target.value;

                              dispatch(setRegisterForm({ target : 'referrer_username', value : referer}));
                              dispatch(setRegisterForm({ target : 'branch_code', value : branch}));
                           }}
                        />
                     </div>
                  </div>
               </div>

               <div class="widthp-100 flex sign-item-inner flex-inherit padding-horizontal-20">
                  <div class="flex flex-column padding-vertical-20">
                     <div class="flex text-align-left">
                        <label>
                           <input 
                              type="checkbox" 
                              name="promotion" 
                              id="promotion"
                              checked={register.terms_promotion}
                              onChange={()=>{
                                 let toggle = !register.terms_promotion;
                                 dispatch(setRegisterForm({ target : 'terms_promotion', value : toggle}));
                              }}
                           />
                           <span class="padding-left-5 color-grey">테라에서 진행되는 프로모션 및 이벤트 정보를 받겠습니다.</span>
                        </label>
                     </div>
                     <div class="flex padding-top-10 text-align-left">
                        <label>
                           <input 
                              type="checkbox" 
                              name="policy" 
                              id="policy" 
                              checked={register.terms_policy}
                              onChange={()=>{
                                 let toggle = !register.terms_policy;
                                 dispatch(setRegisterForm({ target : 'terms_policy', value : toggle}));
                              }}
                           />
                           <span class="padding-left-5 color-grey">
                              본인은 18세이상이며 법적으로 서비스를 이용하는데 문제 가 없는 국가에서 서비스를 이용중입니다. 또한 나이 확인 및 이용규정과 관련하여 이용약관 , 규칙 , 개인정보 취급방침 ,
                              쿠키정책을 읽고 동의합니다.
                           </span>
                        </label>
                     </div>
                  </div>
               </div>
               <div class="widthp-100 sign-content-bottom  height-150 align-items-center justify-content-end padding-right-25">
                  <button 
                     type="button" 
                     class="next-sign-auth background-green color-white padding-vertical-15 padding-horizontal-45"
                     onClick={submitRegistration}
                  >
                     회원가입
                  </button>
               </div>
            </div>
         </div>
      </Fragment>
   )
}
