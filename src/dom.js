import { Project, Task } from './todos.js';

const taskOne = new Task('Clean', 'cool', 'tomorrow', 'high');
const taskTwo = new Task('have fun', 'yay', '09/13/25', 'low');
//taskOne.taskComplete();

const chores = new Project();
chores.addTaskToProject(taskOne);
chores.addTaskToProject(taskTwo);
console.log(chores.project);

const selectedProject = document.getElementById('selectedProject');

export function createTaskUI() {
    const task = document.createElement('div');
    task.id = 'task';
    selectedProject.append(task);
    const checkbox = document.createElement('div');
    checkbox.id = 'checkbox';
    const taskNameAndDueDate = document.createElement('div');
    taskNameAndDueDate.id = 'taskNameAndDueDate';
    const taskName = document.createElement('p');
    taskName.textContent = 'Task One';
    taskName.id = 'taskName';
    const dueDate = document.createElement('p');
    dueDate.textContent = '09/25/25';
    dueDate.id = 'dueDate';
    const editButton = document.createElement('button');
    editButton.textContent = "Edit";
    editButton.id = 'editButton';
    const deleteButton = document.createElement('button');
    deleteButton.textContent = "+";
    deleteButton.id = 'deleteButton';
    taskNameAndDueDate.append(taskName, dueDate);
    task.append(checkbox, taskNameAndDueDate, editButton, deleteButton);
}