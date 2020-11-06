import React from 'react';
import NoteModal from '../../Activities/components/Note/components/NoteModal';
import EmailModal from '../../Activities/components/Email/components/Modal/CreateEmail';
import CallModal from '../../Modal/components/Function/Call';
import TaskModal from '../../Activities/components/Task/components/TaskModal';
import MeetingCreateModal from '../../Modal/components/Function/Meeting/MeetingCreateModal';

const Modals = {
  note: (value) => (<NoteModal modalController={value} />),
  email: (value) => (<EmailModal modalController={value} />),
  call: (value) => (<CallModal modalController={value} />),
  task: (value) => (<TaskModal modalController={value} />),
  meeting: (value) => (<MeetingCreateModal modalController={value} />),
};

export default Modals;
