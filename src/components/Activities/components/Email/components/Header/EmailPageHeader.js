import React, { useContext } from 'react';
import CreateButton from '../../../../../Style/Button/Activities/CreateButton';
import LogButton from '../../../../../Style/Button/Activities/LogButton';
import Text from '../../../../../Style/Text';
import EmailModal from '../EmailModal/';
import {ModalContext} from '../../../../../Modal/components/ModalContext';
import "./EmailPageHeader.scss";
import Modal from '../../../../../../js/Modal';




const EmailPageHeader = () => {
    const onClick= useContext(ModalContext); //receive context
    const createModal = new Modal('Email', 'Email',<EmailModal/>); //create your modal
    const logModal = new Modal('Email', 'Email',<EmailModal/>);
    return(
        <div className="emailPage__header">
            <div className="emailPage__header__showReply">
                <button className="replyButton">
                    <Text>Show all email replies</Text>
                </button>
            </div>
            <div className="emailPage__header__logEmail">
                <LogButton onClick={() => onClick(logModal)}>Log Email</LogButton> {/* //set function */}
            </div>

            <div className='emailPage__header__createEmail'>
                <CreateButton onClick={() => onClick(createModal)}> {/* //set function */}
                    Create Email
                </CreateButton>
            </div>
        </div> 
    )
}



export default EmailPageHeader;