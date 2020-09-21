import React, { useContext } from 'react';
import CreateButton from '../../../../../../Style/Button/Activities/CreateButton';
import LogButton from '../../../../../../Style/Button/Activities/LogButton';
import MeetingModal from '../../../../../../Modal/components/Function/Email';
import { ContactContext } from '../../../../../../Contact/ContactContext';
import {meetingHeader} from "./MeetingPageHeader.scss";
import Modal from '../../../../../../../js/Modal';
import Grid from '@material-ui/core/Grid';




const MeetingPageHeader = () => {
    const onClick= useContext(ContactContext); //receive context
    const createModal = new Modal('Meeting', 'Meeting',<MeetingModal/>); //create your modal
    const logModal = new Modal('Meeting', 'Meeting',<MeetingModal/>);
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