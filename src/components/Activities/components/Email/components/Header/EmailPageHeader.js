import React from 'react';
import CreateButton from '../../../../../Style/Button/Activities/CreateButton';
import LogButton from '../../../../../Style/Button/Activities/LogButton';
import Text from '../../../../../Style/Text';
import EmailModal from '../Modal/CreateEmail';
import LogEmailModal from '../Modal/LogEmail';
import { ModalContext } from '../../../../../Modal/components/ModalContext';
import './EmailPageHeader.scss';
import Modal from '../../../../../../js/Modal';

const EmailPageHeader = (props) => {
  /* const logModal = (value) => (<LogEmailModal
                                          contact={props.contact}
                                          user = {props.user}
                                          modalController={value}
                                          handleLogEmail = {props.handleLogEmail}/>);
    const createModal = (value) => (<EmailModal
                                          modalController={value}
                                          handleCreateNote={props.handleCreateNote}/>);   */
  const logEmailModal = new Modal('Note', 'Note', LogEmailModal);
  const createEmailModal = new Modal('Note', 'Note', EmailModal);

  return (
    <ModalContext.Consumer>
      { (modalController) => (
        <div className="emailPage__header">
          <div className="emailPage__header__showReply">
            <button className="replyButton">
              <Text>Show all email replies</Text>
            </button>
          </div>
          <div className="emailPage__header__logEmail">
            <LogButton onClick={() => modalController.open(logEmailModal)}>
              Log Email
            </LogButton>
            {' '}
            {/* //set function */}
          </div>

          <div className="emailPage__header__createEmail">
            <CreateButton onClick={() => modalController.open(createEmailModal)}>
              {' '}
              {/* //set function */}
              Create Email
            </CreateButton>
          </div>
        </div>
      )}
    </ModalContext.Consumer>
  );
};

export default EmailPageHeader;
