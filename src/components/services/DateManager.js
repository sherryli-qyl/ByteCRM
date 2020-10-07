import moment from 'moment';


function getDate(date){
    const formateDate=moment(date).format("YYYY-MM");
    return formateDate
}

function sortDate(array) {
    array.sort(function (a, b) {
        return b.date < a.date ? -1 : 1
    })
}

function addDate(days){
    const date = moment().add(days,'d').toDate();
    const newDate=moment(date).format("DD,MMM");
    return newDate;
}

function addWeekDay(days){
    const date = moment().add(days,'d').toDate();
    const newDate=moment(date).format("dddd");
    return newDate;

}

function transferDateInMonthYear(date){
    const formateDate=moment(date).format("MMMM YYYY");
    return formateDate
}

function transferDateInMonDayYear(date){
    const formateDate=moment(date).format("MMM DD YYYY");
    return formateDate
}

function transferDateInYearMonDay(date){
    const formateDate=moment(date).format("YYYY-MM-DD");
    return formateDate
}

function getWeekDay(date){
    const formateDate = moment(date).format("dddd");
    return formateDate;
}



export {transferDateInYearMonDay,addWeekDay,getDate,sortDate,addDate,transferDateInMonthYear,transferDateInMonDayYear,getWeekDay};