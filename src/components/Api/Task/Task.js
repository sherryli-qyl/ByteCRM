import api from '../../../lib/api';

const GetTasks = (contactId) => {
  const response = api.get(`/api/tasks/${contactId}`);
  return response;
};

const GetMultiContactsTasks = (contacts) => {
  const response = api.get(`/api/tasks/contacts/${contacts}`);
  return response;
};

async function PostTask(task) {
  const response = api.post('/api/tasks/', task);
  return response;
}

async function UpdateTask(taskId, body) {
  const serverUrl = `http://localhost:3000/api/tasks/${taskId}`;
  const response = await fetch(serverUrl, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const data = response.json();
  return data;
}

async function DeleteCreateTask(taskId) {
  const serverUrl = `http://localhost:3000/api/tasks/${taskId}`;
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

async function UpdateAssignedToUser(userId, taskId) {
  const response = api.put(`http://localhost:3000/api/tasks/${taskId}/assignedToUser/${userId}`);
  return response;
}

async function RemoveAssignedToUser(userId, taskId) {
  const response = api.delete(`http://localhost:3000/api/tasks/${taskId}/assignedToUser/${userId}`);
  return response;
}

export {
  GetTasks, GetMultiContactsTasks, PostTask, UpdateTask, DeleteCreateTask, UpdateAssignedToUser, RemoveAssignedToUser,
};
