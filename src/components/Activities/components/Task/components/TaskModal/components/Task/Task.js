function Task(name, type, status, relatedTo, description, time, date, taskType, priority, users, createdBy) {
  this.name = name;
  this.type = type;
  this.status = status;
  this.relatedTo = relatedTo;
  this.description = description;
  this.time = time;
  this.taskType = taskType;
  this.priority = priority;
  this.date = date;
  this.users = users;
  this.createdBy = createdBy;
}

export default Task;
