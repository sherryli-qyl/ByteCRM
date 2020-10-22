import React from 'react';
import RemoveButtom from '../Style/Button/Activities/LogButton';
import RemoveRefModal from './components/RemoveCompanyRef';
import HintBox from '../HintBox';
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './RemoveBtn.scss';


const RemoveBtn = ({
    showRemoveModal,
    contactName,
    companyName,
    handleModalToggle,
    onClickConfirmBtn,
    onClickCancelBtn,
}) => {
    return (
        <div className='removeBtn'>
            <RemoveButtom className='removeBtn' onClick={handleModalToggle}>
                <FontAwesomeIcon icon={faTimes} />
            </RemoveButtom>
            <div className="removeBtn__hint">
                <HintBox variant='bottomRight'>
                    Remove association
                </HintBox>
            </div>
            {
                showRemoveModal ?
                    <RemoveRefModal contactName={contactName}
                        companyName={companyName}
                        onClickConfirmBtn={onClickConfirmBtn}
                        onClickCancelBtn={onClickCancelBtn} />
                    :
                    ""
            }
        </div>
    )
}

export default RemoveBtn



