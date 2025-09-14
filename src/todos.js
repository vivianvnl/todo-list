export class Project {
    constructor(name) {
        this.name = name;
        this.project = [];
    }
}

export class Task{
    constructor(taskName, description, dueDate, priority) {
        this.taskName = taskName;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = false;
    }

    getTaskInfo() {
        return `New task: ${this.taskName}, Description: ${this.description}, Due: ${this.dueDate}, Priority: ${this.priority}`
    }
};

function addTaskToProject(task) {
    this.project.push(task);
    return this.project;
}