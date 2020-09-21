import React, { Component } from 'react';

const updateRow = (newData) => {
    if (newData.contactOwner === '') {
        newData.contactOwner = 'Unassigned';
    }
    return newData;
}

export default updateRow;