import React from 'react';
import SaveButton from '../../../Style/Button/Modal/Button';
import CancelButton from '../../../Style/Button/Modal/Button';
import './SaveModal.scss';




const SaveModal = ({
    modalActive,
    saveData,
    closeModal,
    propertyDiff,
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
                            onClick={saveData}>Save</SaveButton>
                    </div>
                    <div className="modalOverlay__modal__btnWrapper">
                        <CancelButton size='large' variant='outlined'
                            onClick={closeModal}> Cancel</CancelButton>
                    </div>
                    <div className = "modalOverlay__modal__text">
                        You have changed {propertyDiff} properties
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SaveModal;