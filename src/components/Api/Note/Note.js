async function GetNoteByRelatedToId(relatedToId) {
  const serverUrl = `http://localhost:3000/api/notes/relatedTo/${relatedToId}`;
  const response = await fetch(serverUrl, {
    method: "GET",
  })
  return response.json();
}

async function UpdateNote(noteId, body) {
  const serverUrl = `http://localhost:3000/api/notes/${noteId}`;
  console.log(body);
  const response = await fetch(serverUrl, {
      method: "PUT",
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
  });
  return response.json();
}

async function AddNote(body){
  const serverUrl = `http://localhost:3000/api/notes`;
  const response = await fetch(serverUrl, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });

  if (response.ok){
    return response.json();
  }
  else {
    return false
  }
}

async function DeleteNote(noteId) {
  const serverUrl = `http://localhost:3000/api/notes/${noteId}`;
  const response = await fetch(serverUrl, {
    method: "DELETE",
    headers: {
        'Content-Type': 'application/json'
    },
  });
  if(response.ok) {
    return true;
  } else {
    return false;
  }
}



// async function addComment(userId, noteId, content) {
//   const comment = {
//     createdBy: userId,
//     content: content,
//   };

//   const updateNote = await Note.put(`http://localhost:3000/api/notes/${noteId}/comment`, comment);

//   return updateNote;
// }


export { GetNoteByRelatedToId, UpdateNote, AddNote, DeleteNote };