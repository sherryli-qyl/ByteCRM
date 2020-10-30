function Task(name, type, status, contact, description, time , date, taskType, priority, createdBy) {
    this.name = name;
    this.type = type;
    this.status = status;
    this.contact = contact;
    this.description = description;
    this.time = time;
    this.taskType = taskType;
    this.priority = priority;
    this.date = date;
    this.createdBy = createdBy;
}

export default Task;
