import api from '../../../lib/api';

async function GetNoteByRelatedToId(relatedToId) {
  const serverUrl = `http://localhost:3000/api/notes/relatedTo/${relatedToId}`;
  const response = await fetch(serverUrl, {
    method: 'GET',
  });
  return response.json();
}

const GetAllAssociatedNotes = (contacts) => {
  const response = api.get(`http://localhost:3000/api/notes/contacts/${contacts}`);
  return response;
};

async function UpdateNote(noteId, body) {
  const serverUrl = `http://localhost:3000/api/notes/${noteId}`;
  console.log(body);
  const response = await fetch(serverUrl, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  return response.json();
}

async function AddNote(body) {
  const serverUrl = 'http://localhost:3000/api/notes';
  const response = await fetch(serverUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (response.ok) {
    return response.json();
  }

  return false;
}

async function DeleteNote(noteId) {
  const serverUrl = `http://localhost:3000/api/notes/${noteId}`;
  const response = await fetch(serverUrl, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (response.ok) {
    return true;
  }
  return false;
}

export {
  GetNoteByRelatedToId, GetAllAssociatedNotes, UpdateNote, AddNote, DeleteNote,
};
