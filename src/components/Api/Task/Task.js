async function GetTasks(getRelatedToId) {
  const serverUrl = `http://localhost:3000/api/tasks/${getRelatedToId}`;
  const response = await fetch(serverUrl, {
      method: "GET"
  });
  const data = response.json();
  return data;
}

async function PostTask(body){
  const serverUrl = `http://localhost:3000/api/tasks`;
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

async function UpdateTask(taskId, body) {
  const serverUrl = `http://localhost:3000/api/tasks/${taskId}`;
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

async function DeleteCreateTask(taskId) {
  const serverUrl = `http://localhost:3000/api/tasks/${taskId}`;
  const response = await fetch(serverUrl, {
      method: "DELETE",
      headers: {
          'Content-Type': 'application/json'
      },
  });
  if(response.ok){
      return true;
  }
  else {
      return false;
  }
}

async function UpdateAssignedToUser(getRelatedToId, taskId){
	const serverUrl = `http://localhost:3000/api/tasks/${taskId}/assignedToUser/${getRelatedToId}`;
	const response = await fetch(serverUrl, {
			method: "PUT",
			headers: {
					'Content-Type': 'application/json'
			},
	});
	const data = response.json();
	return data;
}

async function RemoveAssignedToUser(getRelatedToId,taskId){
	const serverUrl = `http://localhost:3000/api/tasks/${taskId}/assignedToUser/${getRelatedToId}`;
	const response = await fetch(serverUrl, {
			method: "DELETE",
			headers: {
					'Content-Type': 'application/json'
			},
	});
	const data = response.json();
	return data;
}

export {GetTasks,PostTask,UpdateTask,DeleteCreateTask,UpdateAssignedToUser,RemoveAssignedToUser};
