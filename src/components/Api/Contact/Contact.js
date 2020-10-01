async function GetContact(contactId) {
    const serverUrl = `http://localhost:3000/api/contacts/${contactId}`;
    const response = await fetch(serverUrl, {
        method: "GET"
    });
    const data = response.json();
    return data;
}

async function UpdateContact(contactId, data) {
    const serverUrl = `http://localhost:3000/api/contacts/${contactId}`;
    console.log(data);
    const response = await fetch(serverUrl, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    const data = response.json();
    return data;
}


export { GetContact, UpdateContact };

