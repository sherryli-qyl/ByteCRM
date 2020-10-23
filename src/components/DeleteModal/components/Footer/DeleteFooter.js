import React from 'react';
import './DeleteFooter.scss';



const DeleteFooter = ({
    onClickConfirm,
    onClickCancel,
}) => (
        <div className='deleteFooter'>
            <div className='deleteFooter__btnContainer'>
                <button className='deleteFooter__btnContainer__btn confirmBtn'
                        onClick = {(event)=>{
                        event.preventDefault();
                        onClickConfirm();
                    }}>
                    Confrim
                </button>
                <button className='deleteFooter__btnContainer__btn cancelBtn'
                        onClick = {(event)=>{
                        event.preventDefault();
                        onClickCancel();
                        }}>
                    Cancel
                </button>
            </div>
        </div>
    )

export default DeleteFooter;