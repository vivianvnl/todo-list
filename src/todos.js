export class Project {
    constructor(name) {
        this.name = name;
        this.project = [];
    }

    addTaskToProject(task) {
        this.project.push(task);
    }
}

export function addTaskToExistingProject(projectToAddTask, task) {
    projectToAddTask.project.push(task);
}

export let projectList = [];

export function addProjectToList(project) {
    projectList.push(project);
    return projectList;
}

export class Task {
    constructor(taskName, description, dueDate, priority) {
        this.taskName = taskName;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = false;
    }
};