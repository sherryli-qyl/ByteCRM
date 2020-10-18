async function GetMeetings(contactId) {
    const serverUrl = `http://localhost:3000/api/meetings/${contactId}`;
    const response = await fetch(serverUrl, {
        method: "GET"
    });
    const data = response.json();
    return data;
}

export {GetMeetings};