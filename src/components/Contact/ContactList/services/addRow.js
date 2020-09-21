import React, { Component } from 'react';
import getDate from './getDate';

const addRow = (newData) => {
    newData.createDate = getDate();
    if (newData.contactOwner === '') {
        newData.contactOwner = 'Unassigned';
    }
    return newData;
}

export default addRow;