import moment from 'moment';
import momentBSD from 'moment-business-days';

function getDate(date) {
    const formateDate = moment(date).format('YYYY-MM');
    return formateDate;
}

function sortDate(array) {
    array.sort((a, b) => (b.date < a.date ? -1 : 1));
}

function addDate(days) {
    console.log(days);
    const date = moment().add(days, 'd').toDate();
    const newDate = moment(date).format('DD,MMM');
    return newDate;
}

function addWeekDay(days) {
    const date = moment().add(days, 'd').toDate();
    const weekDay = moment(date).format('dddd');
    return weekDay;
}

function addDay(days) {
    const date = moment().add(days, 'd').toDate();
    return transferDateInYearMonDay(date);
}

function AddBusinessDay(days) {
    const date = moment().toDate();
    return transferDateInYearMonDay(momentBSD(date).businessAdd(days)._d);
}

function dueDateCalculator(list) {
    let newList = [...list];
    for (let i in list) {
        const date = addDay(newList[i].value);
        if (list[i].value < 2 && list[i].key !== 'in 1 business days ') {
            newList[i].display = newList[i].key;
            newList[i].value = date;
        }
        else if (list[i].value <= 3) {
            const businessDay = AddBusinessDay(newList[i].value)
            newList[i].value = businessDay;
            newList[i].display = `${newList[i].key} (${getWeekDay(businessDay)})`;
        }
        else if (list[i].value > 3) {
            newList[i].display = `${newList[i].key} (${addDate(list[i].value)})`;
            newList[i].value = date;
        }
    }
    return newList;
}

function transferDateInMonthYear(date) {
    const formateDate = moment(date).format('MMMM YYYY');
    return formateDate;
}

function transferDateInMonDayYear(date) {
    const formateDate = moment(date).format('MMM DD, YYYY');
    return formateDate;
}

function transferDateInYearMonDay(date) {
    const formateDate = moment(date).format('YYYY-MM-DD');
    return formateDate;
}

function getWeekDay(date) {
    const formateDate = moment(date).format('dddd');
    return formateDate;
}

export {
    dueDateCalculator, transferDateInYearMonDay, addWeekDay, getDate, sortDate, addDate, transferDateInMonthYear, transferDateInMonDayYear, getWeekDay,
};
