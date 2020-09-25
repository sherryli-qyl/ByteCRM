import React from 'react';
import ContainedButton from '../../../../../../Style/Button/Modal/ContainedButton';
import "./MeetingLogBar.scss"





export default function MeetingLogBar() {
    return(
        <div className="meetingSaveBar">
            <div className="meetingSaveBar__save">
                <ContainedButton>
                    Log activity
                </ContainedButton>
            </div>
        </div>
    );
}