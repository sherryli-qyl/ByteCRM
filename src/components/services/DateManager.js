import moment from 'moment';
import React from 'react';


function getDate(date){
    const formateDate=moment(date).format("YYYY-MM");
    return formateDate
}

function sortDate(array) {
    console.log("start sort");
    array.sort(function (a, b) {
        return b.date < a.date ? -1 : 1
    })
}

function addDate(days){
    const date = moment().add(days,'d').toDate();
    const newDate=moment(date).format("DD,MMM");
    console.log("new date is "+ newDate);
    return newDate;
}

function transferDate(date){
    const formateDate=moment(date).format("MMMM YYYY");
    return formateDate
}



export {getDate,sortDate,addDate,transferDate};