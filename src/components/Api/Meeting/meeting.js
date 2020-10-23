async function GetMeetings(contactId) {
    const serverUrl = `http://localhost:3000/api/meetings/${contactId}`;
    const response = await fetch(serverUrl, {
        method: "GET"
    });
    const data = response.json();
    return data;
}


async function UpdateMeeting(meetingId, body) {
    const serverUrl = `http://localhost:3000/api/meetings/${meetingId}`;
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


export {GetMeetings,UpdateMeeting};