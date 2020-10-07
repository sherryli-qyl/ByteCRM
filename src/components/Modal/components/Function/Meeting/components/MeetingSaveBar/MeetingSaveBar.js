import React from 'react';
import ContainedButton from '../../../../../../Style/Button/Modal/ContainedButton';
import "./MeetingSaveBar.scss"





export default function MeetingSaveBar() {
    return(
        <div className="meetingSaveBar">
            <div className="meetingSaveBar__save">
                <ContainedButton>
                    Save
                </ContainedButton>
            </div>
        </div>
    );
}





