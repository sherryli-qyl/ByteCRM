import moment from 'moment';


function transferTimeHHMM(time){
    const formateTime = moment(time,"LT").format("HH:mm");
    console.log("get time" + formateTime);
    return formateTime
}


export {transferTimeHHMM};