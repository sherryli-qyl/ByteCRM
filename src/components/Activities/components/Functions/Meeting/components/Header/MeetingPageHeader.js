import React, { useContext } from 'react';
import CreateButton from '../../../../../../Style/Button/Activities/CreateButton';
import LogButton from '../../../../../../Style/Button/Activities/LogButton';
import MeetingCreateModal from '../../../../../../Modal/components/Function/Meeting/MeetingCreateModal';
import MeetingLogModal from '../../../../../../Modal/components/Function/Meeting/MeetingLogModal';
import {ModalContext} from '../../../../../../Modal/components/ModalContext';
import {meetingHeader} from "./MeetingPageHeader.scss";
import Modal from '../../../../../../../js/Modal';
import Grid from '@material-ui/core/Grid';




const MeetingPageHeader = () => {
    const onClick= useContext(ModalContext); //receive context
    const createModal = new Modal('Schedule', 'Meeting',<MeetingCreateModal/>); //create your modal
    const logModal = new Modal('Log Meeting', 'Meeting',<MeetingLogModal/>);
    return(
        <div className={meetingHeader}>
            <Grid  container alignContent="space-between" alignItems="center">
            <Grid item xs={6} >
            </Grid>
            <Grid item xs={3}>
                <LogButton onClick={() => onClick(logModal)}>
                    Log Meeting
                </LogButton> {/* //set function */}
            </Grid>
            <Grid item xs={3}>
                <CreateButton onClick={() => onClick(createModal)}> {/* //set function */}
                    Create Meeting
                </CreateButton>
            </Grid>
            </Grid>
        </div>
    )
}



export default MeetingPageHeader;