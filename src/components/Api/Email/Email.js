async function GetEmails(contactId) {
    const serverUrl = `http://localhost:3000/api/emails/${contactId}`;
    const response = await fetch(serverUrl, {
        method: "GET"
    });
    const data = response.json();
    return data;
}


async function UpdateEmail(emailId, body) {
    const serverUrl = `http://localhost:3000/api/emails/${emailId}`;
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


export {GetEmails, UpdateEmail };
