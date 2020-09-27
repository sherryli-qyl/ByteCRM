import React from 'react';
import SaveButton from '../../../Style/Button/Modal/Button';
import CancelButton from '../../../Style/Button/Modal/Button';
import './SaveModal.scss';




const SaveModal = ({
    modalActive,
    showModal,
}) => {
    let className = 'modalOverlay ';
    if (modalActive) {
        className += 'modalOverlay--active';
    }

    return (
        <div className={className}>
            <div className="blockline--top">
                <div className='modalOverlay__modal'>
                    <div className="modalOverlay__modal__btnWrapper">
                        <SaveButton size='large' variant='contained'
                            onClick={showModal}>Save</SaveButton>
                    </div>
                    <div className="modalOverlay__modal__btnWrapper">
                        <CancelButton size='large' variant='outlined'
                            onClick={showModal}> Cancel</CancelButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SaveModal;