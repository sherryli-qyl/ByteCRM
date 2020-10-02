async function GetContact(contactId) {
    const serverUrl = `http://localhost:3000/api/contacts/${contactId}`;
    const response = await fetch(serverUrl, {
        method: "GET"
    });
    const data = response.json();
    return data;
}


async function UpdateContact(contactId, body) {
    const serverUrl = `http://localhost:3000/api/contacts/${contactId}`;
    console.log(body);
    const response = await fetch(serverUrl, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
    const data = response.json();
    return data;
}


export { GetContact, UpdateContact };

