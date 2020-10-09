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

export const AddNote = ({
  author,
  content,
}) => fetch('http://localhost:3000/api/notes', {
  method: 'POST',
  body: JSON.stringify({
    author,
    content,
  }),
  headers: {
    'content-type': 'application/json',
  }
});

// async function addComment(userId, noteId, content) {
//   const comment = {
//     createdBy: userId,
//     content: content,
//   };

//   const updateNote = await Note.put(`http://localhost:3000/api/notes/${noteId}/comment`, comment);

//   return updateNote;
// }


export { GetNoteByRelatedToId, UpdateNote };


// export const UpdateNote = ({
//   noteId, 
//   content
// }) => fetch(`http://localhost:3000/api/notes/${noteId}`, {
//   method: 'PUT',
//   body: JSON.stringify({
//     content
//   }),
//   headers: {
//     'content-type': 'application/json',
//   }
// })