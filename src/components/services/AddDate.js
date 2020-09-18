import moment from 'moment';

function addDate(days){
    const date = moment().add(days,'d').toDate();
    const newDate=moment(date).format("DD,MMM");
    console.log("new date is "+ newDate);
    return newDate;
}

function getDate(date){
    const formateDate=moment(date).format("MMMM YYYY");
    return formateDate
}




// module.exports = {
//     addDate,
//     getDate
// }
  
export default addDate;