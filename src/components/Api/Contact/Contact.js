async function GetContact(contactId) {
    const serverUrl = 'http//localhost:3000/api/contacts';
    const response = await fetch(serverUrl);
    console.log(serverUrl);
    const data = response.json();
    console.table(data)
    return data;
}

export { GetContact };

