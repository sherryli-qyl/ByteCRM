import moment from 'moment';


function getDate(date){
    const formateDate=moment(date).format("YYYY-MM");
    return formateDate
}


export default getDate;