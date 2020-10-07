import moment from 'moment';


function transferTimeHHMM(time){
    const formateTime = moment(time,"LT").format("HH:mm");
    return formateTime
}


export {transferTimeHHMM};