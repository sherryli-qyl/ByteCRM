import moment from 'moment';


function TransferDate(date){
    const formateDate=moment(date).format("MMMM YYYY");
    return formateDate
}


export default TransferDate;