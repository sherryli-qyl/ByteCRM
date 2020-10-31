import React from 'react';
import StageItem from './component/StageItem';
import './StageBar.scss';

const stageItems = [{ key : 0, value: 'Appointment Scheduled', className : 'firstStage'},
                    { key : 1, value: 'Qualified to Buy', className : 'secondStage'},
                    { key : 2, value: 'Presentation Scheduled', className : 'thirdStage'},
                    { key : 3, value: 'Decision Maker Bought-In', className : 'fourthStage'}]

const StageBar = ({
    stage,
})=>{

   for(const i in stageItems){
       if(stageItems[i].value === stage){

       }
   }

    return(
        <div className = "stageBar">

        </div>
    )
}

export default StageBar;