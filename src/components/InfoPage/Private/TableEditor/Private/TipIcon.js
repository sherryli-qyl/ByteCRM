import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactTooltip from 'react-tooltip';
import {faInfoCircle } from "@fortawesome/free-solid-svg-icons";


const TipIcon = () => (
    <React.Fragment>
        <FontAwesomeIcon className='infoIcon' icon={faInfoCircle} data-tip data-for="infoTip" />
        <ReactTooltip id="infoTip" place="top" effect="solid">
            <span>Property was filled from the ByteCRM database.</span>
        </ReactTooltip>
    </React.Fragment>
)

export default TipIcon;