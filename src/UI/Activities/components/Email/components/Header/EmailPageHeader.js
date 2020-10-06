import React from 'react';
import CreateButton from '../../../../../Style/Button/Activities/CreateButton';
import LogButton from '../../../../../Style/Button/Activities/LogButton';
import Text from '../../../../../Style/Text';
import EmailModal from '../Modal/CreateEmail';
import LogEmailModal from '../Modal/LogEmail';
import { ModalContext } from '../../../../../Modal/components/ModalContext';
import "./EmailPageHeader.scss";
import Modal from '../../../../../../js/Modal';




const EmailPageHeader = () => {
    const createModal = new Modal('Email', 'Email', <EmailModal/>); //create your modal
    const logModal = new Modal('Log Email', 'Log Email', <LogEmailModal/>);
    return (
        <ModalContext.Consumer>
            { openModal =>
                <div className="emailPage__header">
                    <div className="emailPage__header__showReply">
                        <button className="replyButton">
                            <Text>Show all email replies</Text>
                        </button>
                    </div>
                    <div className="emailPage__header__logEmail">
                        <LogButton onClick={() => openModal(logModal)}>
                            Log Email
                        </LogButton> {/* //set function */}
                    </div>

                    <div className='emailPage__header__createEmail'>
                        <CreateButton onClick={() => openModal(createModal)}> {/* //set function */}
                            Create Email
                        </CreateButton>
                    </div>
                </div>}
        </ModalContext.Consumer>
    )
}



export default EmailPageHeader;