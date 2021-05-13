import React, { Fragment } from 'react'
import { mapStateToProps, mapDispatchProps } from '../../redux/store'
import { connect, useSelector, useDispatch } from "react-redux";
import { closeModal } from '../../redux/modal/modalActions';

const Modal = (props) => {
   let dispatch = useDispatch();
   let modal = useSelector((state) => state.modal.modal);

   const onBackgroundClick = (e) => {
      if(e.target === e.currentTarget) {
         dispatch(closeModal());
      }
   }

   const renderTitle = () => {
      return modal.title ? <h2 class="modal-title">{ modal.title }</h2> : null
   }
   
   const renderActions = () => {
      return <div>
               { modal.cancel ? renderCancelBtn() : close }
               { renderConfirmBtn() } 
             </div>
   }

   const renderConfirmBtn = () => {
      return <div 
         class="modal-action-confirm-btn"
         onClick={modal.confirm ? ()=>{
            close();
            modal.confirm();
         } : close }>
            확인
      </div>
   }

   const close = () => {
      dispatch(closeModal());
   }

   const renderCancelBtn = () => {
      return modal.cancel ?       
      <div 
         class="modal-action-cancel-btn"
         onClick={modal.cancel}>
         취소
      </div> : null
   }

   const renderContent = () => {
      const text = modal.text.split('<br />').map( line => {
         return (<span>{line}<br/></span>)
       });
      return <div class="modal-body">{text}</div> 
   }

   return (
      <Fragment>
         <div 
            className={"modal-backgroud " + modal.class} 
            style={{ display: modal.display }} 
            onClick={onBackgroundClick}
         >
            <div class="modal-window">
               <div class="modal-content">
                  {renderTitle()}
                  {renderContent()}
                  {renderActions()}
               </div>
            </div>
         </div>
      </Fragment>
   )
}

export default connect(mapStateToProps, mapDispatchProps)(Modal)