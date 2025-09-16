export class Project {
    constructor(name) {
        this.name = name;
        this.project = [];
    }

    addTaskToProject(task) {
        this.project.push(task);
    }
}

export class Task {
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

    taskComplete() {
        if (this.completed === false) {
            this.completed = true;
        }
        else {
            this.completed = false;
        }
    }
};