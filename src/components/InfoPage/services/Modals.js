import React from 'react';
import NoteModal from '../../Activities/components/Note/components/NoteModal';
import EmailModal from '../../Activities/components/Email/components/Modal/CreateEmail';
import CallModal from '../../Modal/components/Function/Call';
import TaskModal from '../../Activities/components/Task/components/TaskModal';
import MeetingCreateModal from '../../Modal/components/Function/Meeting/MeetingCreateModal';


const Modals = {
    noteModal: (value) => (<NoteModal modalController={value} />),
    emailModal: (value) => (<EmailModal modalController={value} />),
    callModal: (value) => (<CallModal modalController={value} />),
    taskModal: (value) => (<TaskModal modalController={value} />),
    meetingModal: (value) => (<MeetingCreateModal modalController={value} />),
}

export default Modals;