import getDate from './getDate';


const updateRow = (newData, isAdd = false) => {
    if (isAdd) {
        newData.createDate = getDate();
    }
    if (newData.contactOwner === '') {
        newData.contactOwner = 'Unassigned';
    }
    return newData;
}

export default updateRow;