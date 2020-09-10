import React from'react';
import moment from 'moment';



function getDate(days){
    var date = moment().add(days,'d').toDate();
    var newDate=moment(date).format("DD,MMM");
    console.log("new date is "+ newDate);
    return newDate;
    
}



export default getDate;