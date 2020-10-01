function GetContact(contactId) {
    const serverUrl = 'http//localhost:3000/api/contacts';
    const options = {
        method: 'Get',
    };

    const url = `${serverUrl}:${contactId}`;
    console.log(url);

    fetch(url, options)
        .then(response => {
            console.log(response.status);
            console.log(response.body);
        });
}

export {GetContact};

